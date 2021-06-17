import { __read } from "tslib";
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
export var DOT_PATTERN = /\./;
export var S3_HOSTNAME_PATTERN = /^(.+\.)?s3[.-]([a-z0-9-]+)\./;
var S3_US_EAST_1_ALTNAME_PATTERN = /^s3(-external-1)?\.amazonaws\.com$/;
var AWS_PARTITION_SUFFIX = "amazonaws.com";
export var isBucketNameOptions = function (options) { return typeof options.bucketName === "string"; };
/**
 * Get pseudo region from supplied region. For example, if supplied with `fips-us-west-2`, it returns `us-west-2`.
 * @internal
 */
export var getPseudoRegion = function (region) { return (isFipsRegion(region) ? region.replace(/fips-|-fips/, "") : region); };
/**
 * Determines whether a given string is DNS compliant per the rules outlined by
 * S3. Length, capitaization, and leading dot restrictions are enforced by the
 * DOMAIN_PATTERN regular expression.
 * @internal
 *
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
 */
export var isDnsCompatibleBucketName = function (bucketName) {
    return DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
};
var getRegionalSuffix = function (hostname) {
    var parts = hostname.match(S3_HOSTNAME_PATTERN);
    return [parts[2], hostname.replace(new RegExp("^" + parts[0]), "")];
};
export var getSuffix = function (hostname) {
    return S3_US_EAST_1_ALTNAME_PATTERN.test(hostname) ? ["us-east-1", AWS_PARTITION_SUFFIX] : getRegionalSuffix(hostname);
};
/**
 * Infer region and hostname suffix from a complete hostname
 * @internal
 * @param hostname - Hostname
 * @returns [Region, Hostname suffix]
 */
export var getSuffixForArnEndpoint = function (hostname) {
    return S3_US_EAST_1_ALTNAME_PATTERN.test(hostname)
        ? [hostname.replace("." + AWS_PARTITION_SUFFIX, ""), AWS_PARTITION_SUFFIX]
        : getRegionalSuffix(hostname);
};
export var validateArnEndpointOptions = function (options) {
    if (options.pathStyleEndpoint) {
        throw new Error("Path-style S3 endpoint is not supported when bucket is an ARN");
    }
    if (options.accelerateEndpoint) {
        throw new Error("Accelerate endpoint is not supported when bucket is an ARN");
    }
    if (!options.tlsCompatible) {
        throw new Error("HTTPS is required when bucket is an ARN");
    }
};
export var validateService = function (service) {
    if (service !== "s3" && service !== "s3-outposts" && service !== "s3-object-lambda") {
        throw new Error("Expect 's3' or 's3-outposts' or 's3-object-lambda' in ARN service component");
    }
};
export var validateS3Service = function (service) {
    if (service !== "s3") {
        throw new Error("Expect 's3' in Accesspoint ARN service component");
    }
};
export var validateOutpostService = function (service) {
    if (service !== "s3-outposts") {
        throw new Error("Expect 's3-posts' in Outpost ARN service component");
    }
};
/**
 * Validate partition inferred from ARN is the same to `options.clientPartition`.
 * @internal
 */
export var validatePartition = function (partition, options) {
    if (partition !== options.clientPartition) {
        throw new Error("Partition in ARN is incompatible, got \"" + partition + "\" but expected \"" + options.clientPartition + "\"");
    }
};
/**
 * validate region value inferred from ARN. If `options.useArnRegion` is set, it validates the region is not a FIPS
 * region. If `options.useArnRegion` is unset, it validates the region is equal to `options.clientRegion` or
 * `options.clientSigningRegion`.
 * @internal
 */
export var validateRegion = function (region, options) {
    if (region === "") {
        throw new Error("ARN region is empty");
    }
    if (isFipsRegion(options.clientRegion)) {
        if (!options.allowFipsRegion) {
            throw new Error("FIPS region is not supported");
        }
        else if (!isEqualRegions(region, options.clientRegion)) {
            throw new Error("Client FIPS region " + options.clientRegion + " doesn't match region " + region + " in ARN");
        }
    }
    if (!options.useArnRegion &&
        !isEqualRegions(region, options.clientRegion) &&
        !isEqualRegions(region, options.clientSigningRegion)) {
        throw new Error("Region in ARN is incompatible, got " + region + " but expected " + options.clientRegion);
    }
};
/**
 *
 * @param region
 */
export var validateRegionalClient = function (region) {
    if (["s3-external-1", "aws-global"].includes(getPseudoRegion(region))) {
        throw new Error("Client region " + region + " is not regional");
    }
};
/**
 * @internal
 */
export var isFipsRegion = function (region) { return region.startsWith("fips-") || region.endsWith("-fips"); };
var isEqualRegions = function (regionA, regionB) {
    return regionA === regionB || getPseudoRegion(regionA) === regionB || regionA === getPseudoRegion(regionB);
};
/**
 * Validate an account ID
 * @internal
 */
export var validateAccountId = function (accountId) {
    if (!/[0-9]{12}/.exec(accountId)) {
        throw new Error("Access point ARN accountID does not match regex '[0-9]{12}'");
    }
};
/**
 * Validate a host label according to https://tools.ietf.org/html/rfc3986#section-3.2.2
 * @internal
 */
export var validateDNSHostLabel = function (label, options) {
    if (options === void 0) { options = { tlsCompatible: true }; }
    // reference: https://tools.ietf.org/html/rfc3986#section-3.2.2
    if (label.length >= 64 ||
        !/^[a-z0-9][a-z0-9.-]+[a-z0-9]$/.test(label) ||
        /(\d+\.){3}\d+/.test(label) ||
        /[.-]{2}/.test(label) ||
        ((options === null || options === void 0 ? void 0 : options.tlsCompatible) && DOT_PATTERN.test(label))) {
        throw new Error("Invalid DNS label " + label);
    }
};
/**
 * Validate and parse an Access Point ARN or Outposts ARN
 * @internal
 *
 * @param resource - The resource section of an ARN
 * @returns Access Point Name and optional Outpost ID.
 */
export var getArnResources = function (resource) {
    var delimiter = resource.includes(":") ? ":" : "/";
    var _a = __read(resource.split(delimiter)), resourceType = _a[0], rest = _a.slice(1);
    if (resourceType === "accesspoint") {
        // Parse accesspoint ARN
        if (rest.length !== 1 || rest[0] === "") {
            throw new Error("Access Point ARN should have one resource accesspoint" + delimiter + "{accesspointname}");
        }
        return { accesspointName: rest[0] };
    }
    else if (resourceType === "outpost") {
        // Parse outpost ARN
        if (!rest[0] || rest[1] !== "accesspoint" || !rest[2] || rest.length !== 3) {
            throw new Error("Outpost ARN should have resource outpost" + delimiter + "{outpostId}" + delimiter + "accesspoint" + delimiter + "{accesspointName}");
        }
        var _b = __read(rest, 3), outpostId = _b[0], _ = _b[1], accesspointName = _b[2];
        return { outpostId: outpostId, accesspointName: accesspointName };
    }
    else {
        throw new Error("ARN resource should begin with 'accesspoint" + delimiter + "' or 'outpost" + delimiter + "'");
    }
};
/**
 * Throw if dual stack configuration is set to true.
 * @internal
 */
export var validateNoDualstack = function (dualstackEndpoint) {
    if (dualstackEndpoint)
        throw new Error("Dualstack endpoint is not supported with Outpost");
};
/**
 * Validate region is not appended or prepended with a `fips-`
 * @internal
 */
export var validateNoFIPS = function (region) {
    if (isFipsRegion(region !== null && region !== void 0 ? region : ""))
        throw new Error("FIPS region is not supported with Outpost, got " + region);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVja2V0SG9zdG5hbWVVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWNrZXRIb3N0bmFtZVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxJQUFNLGNBQWMsR0FBRyxzQ0FBc0MsQ0FBQztBQUM5RCxJQUFNLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztBQUMzQyxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7QUFDNUIsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQztBQUNoQyxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyw4QkFBOEIsQ0FBQztBQUNsRSxJQUFNLDRCQUE0QixHQUFHLG9DQUFvQyxDQUFDO0FBQzFFLElBQU0sb0JBQW9CLEdBQUcsZUFBZSxDQUFDO0FBd0I3QyxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxVQUNqQyxPQUFpRCxJQUNiLE9BQUEsT0FBTyxPQUFPLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBdEMsQ0FBc0MsQ0FBQztBQUU3RTs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsVUFBQyxNQUFjLElBQUssT0FBQSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFuRSxDQUFtRSxDQUFDO0FBRXZIOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBRyxVQUFDLFVBQWtCO0lBQzFELE9BQUEsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQXpHLENBQXlHLENBQUM7QUFFNUcsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLFFB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LGNBQWMsR0FBRyxVQUFDLE1BQWM7SUFDM0MsSUFBSSxZQUFZLENBQUMsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksRUFBRSxDQUFDO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBa0QsTUFBUSxDQUFDLENBQUM7QUFDOUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVJOIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtYXJuLXBhcnNlclwiO1xuXG5jb25zdCBET01BSU5fUEFUVEVSTiA9IC9eW2EtejAtOV1bYS16MC05XFwuXFwtXXsxLDYxfVthLXowLTldJC87XG5jb25zdCBJUF9BRERSRVNTX1BBVFRFUk4gPSAvKFxcZCtcXC4pezN9XFxkKy87XG5jb25zdCBET1RTX1BBVFRFUk4gPSAvXFwuXFwuLztcbmV4cG9ydCBjb25zdCBET1RfUEFUVEVSTiA9IC9cXC4vO1xuZXhwb3J0IGNvbnN0IFMzX0hPU1ROQU1FX1BBVFRFUk4gPSAvXiguK1xcLik/czNbLi1dKFthLXowLTktXSspXFwuLztcbmNvbnN0IFMzX1VTX0VBU1RfMV9BTFROQU1FX1BBVFRFUk4gPSAvXnMzKC1leHRlcm5hbC0xKT9cXC5hbWF6b25hd3NcXC5jb20kLztcbmNvbnN0IEFXU19QQVJUSVRJT05fU1VGRklYID0gXCJhbWF6b25hd3MuY29tXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNjZXNzUG9pbnRBcm4gZXh0ZW5kcyBBUk4ge1xuICBhY2Nlc3NQb2ludE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdWNrZXRIb3N0bmFtZVBhcmFtcyB7XG4gIGlzQ3VzdG9tRW5kcG9pbnQ6IGJvb2xlYW47XG4gIGJhc2VIb3N0bmFtZTogc3RyaW5nO1xuICBidWNrZXROYW1lOiBzdHJpbmc7XG4gIGNsaWVudFJlZ2lvbjogc3RyaW5nO1xuICBhY2NlbGVyYXRlRW5kcG9pbnQ/OiBib29sZWFuO1xuICBkdWFsc3RhY2tFbmRwb2ludD86IGJvb2xlYW47XG4gIHBhdGhTdHlsZUVuZHBvaW50PzogYm9vbGVhbjtcbiAgdGxzQ29tcGF0aWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJuSG9zdG5hbWVQYXJhbXMgZXh0ZW5kcyBPbWl0PEJ1Y2tldEhvc3RuYW1lUGFyYW1zLCBcImJ1Y2tldE5hbWVcIj4ge1xuICBidWNrZXROYW1lOiBBUk47XG4gIGNsaWVudFNpZ25pbmdSZWdpb24/OiBzdHJpbmc7XG4gIGNsaWVudFBhcnRpdGlvbj86IHN0cmluZztcbiAgdXNlQXJuUmVnaW9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGlzQnVja2V0TmFtZU9wdGlvbnMgPSAoXG4gIG9wdGlvbnM6IEJ1Y2tldEhvc3RuYW1lUGFyYW1zIHwgQXJuSG9zdG5hbWVQYXJhbXNcbik6IG9wdGlvbnMgaXMgQnVja2V0SG9zdG5hbWVQYXJhbXMgPT4gdHlwZW9mIG9wdGlvbnMuYnVja2V0TmFtZSA9PT0gXCJzdHJpbmdcIjtcblxuLyoqXG4gKiBHZXQgcHNldWRvIHJlZ2lvbiBmcm9tIHN1cHBsaWVkIHJlZ2lvbi4gRm9yIGV4YW1wbGUsIGlmIHN1cHBsaWVkIHdpdGggYGZpcHMtdXMtd2VzdC0yYCwgaXQgcmV0dXJucyBgdXMtd2VzdC0yYC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgZ2V0UHNldWRvUmVnaW9uID0gKHJlZ2lvbjogc3RyaW5nKSA9PiAoaXNGaXBzUmVnaW9uKHJlZ2lvbikgPyByZWdpb24ucmVwbGFjZSgvZmlwcy18LWZpcHMvLCBcIlwiKSA6IHJlZ2lvbik7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgZ2l2ZW4gc3RyaW5nIGlzIEROUyBjb21wbGlhbnQgcGVyIHRoZSBydWxlcyBvdXRsaW5lZCBieVxuICogUzMuIExlbmd0aCwgY2FwaXRhaXphdGlvbiwgYW5kIGxlYWRpbmcgZG90IHJlc3RyaWN0aW9ucyBhcmUgZW5mb3JjZWQgYnkgdGhlXG4gKiBET01BSU5fUEFUVEVSTiByZWd1bGFyIGV4cHJlc3Npb24uXG4gKiBAaW50ZXJuYWxcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BbWF6b25TMy9sYXRlc3QvZGV2L0J1Y2tldFJlc3RyaWN0aW9ucy5odG1sXG4gKi9cbmV4cG9ydCBjb25zdCBpc0Ruc0NvbXBhdGlibGVCdWNrZXROYW1lID0gKGJ1Y2tldE5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgRE9NQUlOX1BBVFRFUk4udGVzdChidWNrZXROYW1lKSAmJiAhSVBfQUREUkVTU19QQVRURVJOLnRlc3QoYnVja2V0TmFtZSkgJiYgIURPVFNfUEFUVEVSTi50ZXN0KGJ1Y2tldE5hbWUpO1xuXG5jb25zdCBnZXRSZWdpb25hbFN1ZmZpeCA9IChob3N0bmFtZTogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSA9PiB7XG4gIGNvbnN0IHBhcnRzID0gaG9zdG5hbWUubWF0Y2goUzNfSE9TVE5BTUVfUEFUVEVSTikhO1xuICByZXR1cm4gW3BhcnRzWzJdLCBob3N0bmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke3BhcnRzWzBdfWApLCBcIlwiKV07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3VmZml4ID0gKGhvc3RuYW1lOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmddID0+XG4gIFMzX1VTX0VBU1RfMV9BTFROQU1FX1BBVFRFUk4udGVzdChob3N0bmFtZSkgPyBbXCJ1cy1lYXN0LTFcIiwgQVdTX1BBUlRJVElPTl9TVUZGSVhdIDogZ2V0UmVnaW9uYWxTdWZmaXgoaG9zdG5hbWUpO1xuXG4vKipcbiAqIEluZmVyIHJlZ2lvbiBhbmQgaG9zdG5hbWUgc3VmZml4IGZyb20gYSBjb21wbGV0ZSBob3N0bmFtZVxuICogQGludGVybmFsXG4gKiBAcGFyYW0gaG9zdG5hbWUgLSBIb3N0bmFtZVxuICogQHJldHVybnMgW1JlZ2lvbiwgSG9zdG5hbWUgc3VmZml4XVxuICovXG5leHBvcnQgY29uc3QgZ2V0U3VmZml4Rm9yQXJuRW5kcG9pbnQgPSAoaG9zdG5hbWU6IHN0cmluZyk6IFtzdHJpbmcsIHN0cmluZ10gPT5cbiAgUzNfVVNfRUFTVF8xX0FMVE5BTUVfUEFUVEVSTi50ZXN0KGhvc3RuYW1lKVxuICAgID8gW2hvc3RuYW1lLnJlcGxhY2UoYC4ke0FXU19QQVJUSVRJT05fU1VGRklYfWAsIFwiXCIpLCBBV1NfUEFSVElUSU9OX1NVRkZJWF1cbiAgICA6IGdldFJlZ2lvbmFsU3VmZml4KGhvc3RuYW1lKTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlQXJuRW5kcG9pbnRPcHRpb25zID0gKG9wdGlvbnM6IHtcbiAgYWNjZWxlcmF0ZUVuZHBvaW50PzogYm9vbGVhbjtcbiAgdGxzQ29tcGF0aWJsZT86IGJvb2xlYW47XG4gIHBhdGhTdHlsZUVuZHBvaW50PzogYm9vbGVhbjtcbn0pID0+IHtcbiAgaWYgKG9wdGlvbnMucGF0aFN0eWxlRW5kcG9pbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXRoLXN0eWxlIFMzIGVuZHBvaW50IGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiBidWNrZXQgaXMgYW4gQVJOXCIpO1xuICB9XG4gIGlmIChvcHRpb25zLmFjY2VsZXJhdGVFbmRwb2ludCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VsZXJhdGUgZW5kcG9pbnQgaXMgbm90IHN1cHBvcnRlZCB3aGVuIGJ1Y2tldCBpcyBhbiBBUk5cIik7XG4gIH1cbiAgaWYgKCFvcHRpb25zLnRsc0NvbXBhdGlibGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJIVFRQUyBpcyByZXF1aXJlZCB3aGVuIGJ1Y2tldCBpcyBhbiBBUk5cIik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVNlcnZpY2UgPSAoc2VydmljZTogc3RyaW5nKSA9PiB7XG4gIGlmIChzZXJ2aWNlICE9PSBcInMzXCIgJiYgc2VydmljZSAhPT0gXCJzMy1vdXRwb3N0c1wiICYmIHNlcnZpY2UgIT09IFwiczMtb2JqZWN0LWxhbWJkYVwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ICdzMycgb3IgJ3MzLW91dHBvc3RzJyBvciAnczMtb2JqZWN0LWxhbWJkYScgaW4gQVJOIHNlcnZpY2UgY29tcG9uZW50XCIpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVTM1NlcnZpY2UgPSAoc2VydmljZTogc3RyaW5nKSA9PiB7XG4gIGlmIChzZXJ2aWNlICE9PSBcInMzXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3QgJ3MzJyBpbiBBY2Nlc3Nwb2ludCBBUk4gc2VydmljZSBjb21wb25lbnRcIik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZU91dHBvc3RTZXJ2aWNlID0gKHNlcnZpY2U6IHN0cmluZykgPT4ge1xuICBpZiAoc2VydmljZSAhPT0gXCJzMy1vdXRwb3N0c1wiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ICdzMy1wb3N0cycgaW4gT3V0cG9zdCBBUk4gc2VydmljZSBjb21wb25lbnRcIik7XG4gIH1cbn07XG5cbi8qKlxuICogVmFsaWRhdGUgcGFydGl0aW9uIGluZmVycmVkIGZyb20gQVJOIGlzIHRoZSBzYW1lIHRvIGBvcHRpb25zLmNsaWVudFBhcnRpdGlvbmAuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUGFydGl0aW9uID0gKHBhcnRpdGlvbjogc3RyaW5nLCBvcHRpb25zOiB7IGNsaWVudFBhcnRpdGlvbjogc3RyaW5nIH0pID0+IHtcbiAgaWYgKHBhcnRpdGlvbiAhPT0gb3B0aW9ucy5jbGllbnRQYXJ0aXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcnRpdGlvbiBpbiBBUk4gaXMgaW5jb21wYXRpYmxlLCBnb3QgXCIke3BhcnRpdGlvbn1cIiBidXQgZXhwZWN0ZWQgXCIke29wdGlvbnMuY2xpZW50UGFydGl0aW9ufVwiYCk7XG4gIH1cbn07XG5cbi8qKlxuICogdmFsaWRhdGUgcmVnaW9uIHZhbHVlIGluZmVycmVkIGZyb20gQVJOLiBJZiBgb3B0aW9ucy51c2VBcm5SZWdpb25gIGlzIHNldCwgaXQgdmFsaWRhdGVzIHRoZSByZWdpb24gaXMgbm90IGEgRklQU1xuICogcmVnaW9uLiBJZiBgb3B0aW9ucy51c2VBcm5SZWdpb25gIGlzIHVuc2V0LCBpdCB2YWxpZGF0ZXMgdGhlIHJlZ2lvbiBpcyBlcXVhbCB0byBgb3B0aW9ucy5jbGllbnRSZWdpb25gIG9yXG4gKiBgb3B0aW9ucy5jbGllbnRTaWduaW5nUmVnaW9uYC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGVSZWdpb24gPSAoXG4gIHJlZ2lvbjogc3RyaW5nLFxuICBvcHRpb25zOiB7XG4gICAgdXNlQXJuUmVnaW9uPzogYm9vbGVhbjtcbiAgICBhbGxvd0ZpcHNSZWdpb24/OiBib29sZWFuO1xuICAgIGNsaWVudFJlZ2lvbjogc3RyaW5nO1xuICAgIGNsaWVudFNpZ25pbmdSZWdpb246IHN0cmluZztcbiAgfVxuKSA9PiB7XG4gIGlmIChyZWdpb24gPT09IFwiXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBUk4gcmVnaW9uIGlzIGVtcHR5XCIpO1xuICB9XG4gIGlmIChpc0ZpcHNSZWdpb24ob3B0aW9ucy5jbGllbnRSZWdpb24pKSB7XG4gICAgaWYgKCFvcHRpb25zLmFsbG93Rmlwc1JlZ2lvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRklQUyByZWdpb24gaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9IGVsc2UgaWYgKCFpc0VxdWFsUmVnaW9ucyhyZWdpb24sIG9wdGlvbnMuY2xpZW50UmVnaW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDbGllbnQgRklQUyByZWdpb24gJHtvcHRpb25zLmNsaWVudFJlZ2lvbn0gZG9lc24ndCBtYXRjaCByZWdpb24gJHtyZWdpb259IGluIEFSTmApO1xuICAgIH1cbiAgfVxuICBpZiAoXG4gICAgIW9wdGlvbnMudXNlQXJuUmVnaW9uICYmXG4gICAgIWlzRXF1YWxSZWdpb25zKHJlZ2lvbiwgb3B0aW9ucy5jbGllbnRSZWdpb24pICYmXG4gICAgIWlzRXF1YWxSZWdpb25zKHJlZ2lvbiwgb3B0aW9ucy5jbGllbnRTaWduaW5nUmVnaW9uKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJlZ2lvbiBpbiBBUk4gaXMgaW5jb21wYXRpYmxlLCBnb3QgJHtyZWdpb259IGJ1dCBleHBlY3RlZCAke29wdGlvbnMuY2xpZW50UmVnaW9ufWApO1xuICB9XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gcmVnaW9uXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVJlZ2lvbmFsQ2xpZW50ID0gKHJlZ2lvbjogc3RyaW5nKSA9PiB7XG4gIGlmIChbXCJzMy1leHRlcm5hbC0xXCIsIFwiYXdzLWdsb2JhbFwiXS5pbmNsdWRlcyhnZXRQc2V1ZG9SZWdpb24ocmVnaW9uKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENsaWVudCByZWdpb24gJHtyZWdpb259IGlzIG5vdCByZWdpb25hbGApO1xuICB9XG59O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgaXNGaXBzUmVnaW9uID0gKHJlZ2lvbjogc3RyaW5nKSA9PiByZWdpb24uc3RhcnRzV2l0aChcImZpcHMtXCIpIHx8IHJlZ2lvbi5lbmRzV2l0aChcIi1maXBzXCIpO1xuXG5jb25zdCBpc0VxdWFsUmVnaW9ucyA9IChyZWdpb25BOiBzdHJpbmcsIHJlZ2lvbkI6IHN0cmluZykgPT5cbiAgcmVnaW9uQSA9PT0gcmVnaW9uQiB8fCBnZXRQc2V1ZG9SZWdpb24ocmVnaW9uQSkgPT09IHJlZ2lvbkIgfHwgcmVnaW9uQSA9PT0gZ2V0UHNldWRvUmVnaW9uKHJlZ2lvbkIpO1xuXG4vKipcbiAqIFZhbGlkYXRlIGFuIGFjY291bnQgSURcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGVBY2NvdW50SWQgPSAoYWNjb3VudElkOiBzdHJpbmcpID0+IHtcbiAgaWYgKCEvWzAtOV17MTJ9Ly5leGVjKGFjY291bnRJZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgcG9pbnQgQVJOIGFjY291bnRJRCBkb2VzIG5vdCBtYXRjaCByZWdleCAnWzAtOV17MTJ9J1wiKTtcbiAgfVxufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSBhIGhvc3QgbGFiZWwgYWNjb3JkaW5nIHRvIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4yLjJcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGVETlNIb3N0TGFiZWwgPSAobGFiZWw6IHN0cmluZywgb3B0aW9uczogeyB0bHNDb21wYXRpYmxlPzogYm9vbGVhbiB9ID0geyB0bHNDb21wYXRpYmxlOiB0cnVlIH0pID0+IHtcbiAgLy8gcmVmZXJlbmNlOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMi4yXG4gIGlmIChcbiAgICBsYWJlbC5sZW5ndGggPj0gNjQgfHxcbiAgICAhL15bYS16MC05XVthLXowLTkuLV0rW2EtejAtOV0kLy50ZXN0KGxhYmVsKSB8fFxuICAgIC8oXFxkK1xcLil7M31cXGQrLy50ZXN0KGxhYmVsKSB8fFxuICAgIC9bLi1dezJ9Ly50ZXN0KGxhYmVsKSB8fFxuICAgIChvcHRpb25zPy50bHNDb21wYXRpYmxlICYmIERPVF9QQVRURVJOLnRlc3QobGFiZWwpKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgRE5TIGxhYmVsICR7bGFiZWx9YCk7XG4gIH1cbn07XG5cbi8qKlxuICogVmFsaWRhdGUgYW5kIHBhcnNlIGFuIEFjY2VzcyBQb2ludCBBUk4gb3IgT3V0cG9zdHMgQVJOXG4gKiBAaW50ZXJuYWxcbiAqXG4gKiBAcGFyYW0gcmVzb3VyY2UgLSBUaGUgcmVzb3VyY2Ugc2VjdGlvbiBvZiBhbiBBUk5cbiAqIEByZXR1cm5zIEFjY2VzcyBQb2ludCBOYW1lIGFuZCBvcHRpb25hbCBPdXRwb3N0IElELlxuICovXG5leHBvcnQgY29uc3QgZ2V0QXJuUmVzb3VyY2VzID0gKFxuICByZXNvdXJjZTogc3RyaW5nXG4pOiB7XG4gIGFjY2Vzc3BvaW50TmFtZTogc3RyaW5nO1xuICBvdXRwb3N0SWQ/OiBzdHJpbmc7XG59ID0+IHtcbiAgY29uc3QgZGVsaW1pdGVyID0gcmVzb3VyY2UuaW5jbHVkZXMoXCI6XCIpID8gXCI6XCIgOiBcIi9cIjtcbiAgY29uc3QgW3Jlc291cmNlVHlwZSwgLi4ucmVzdF0gPSByZXNvdXJjZS5zcGxpdChkZWxpbWl0ZXIpO1xuICBpZiAocmVzb3VyY2VUeXBlID09PSBcImFjY2Vzc3BvaW50XCIpIHtcbiAgICAvLyBQYXJzZSBhY2Nlc3Nwb2ludCBBUk5cbiAgICBpZiAocmVzdC5sZW5ndGggIT09IDEgfHwgcmVzdFswXSA9PT0gXCJcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBY2Nlc3MgUG9pbnQgQVJOIHNob3VsZCBoYXZlIG9uZSByZXNvdXJjZSBhY2Nlc3Nwb2ludCR7ZGVsaW1pdGVyfXthY2Nlc3Nwb2ludG5hbWV9YCk7XG4gICAgfVxuICAgIHJldHVybiB7IGFjY2Vzc3BvaW50TmFtZTogcmVzdFswXSB9O1xuICB9IGVsc2UgaWYgKHJlc291cmNlVHlwZSA9PT0gXCJvdXRwb3N0XCIpIHtcbiAgICAvLyBQYXJzZSBvdXRwb3N0IEFSTlxuICAgIGlmICghcmVzdFswXSB8fCByZXN0WzFdICE9PSBcImFjY2Vzc3BvaW50XCIgfHwgIXJlc3RbMl0gfHwgcmVzdC5sZW5ndGggIT09IDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE91dHBvc3QgQVJOIHNob3VsZCBoYXZlIHJlc291cmNlIG91dHBvc3Qke2RlbGltaXRlcn17b3V0cG9zdElkfSR7ZGVsaW1pdGVyfWFjY2Vzc3BvaW50JHtkZWxpbWl0ZXJ9e2FjY2Vzc3BvaW50TmFtZX1gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBbb3V0cG9zdElkLCBfLCBhY2Nlc3Nwb2ludE5hbWVdID0gcmVzdDtcbiAgICByZXR1cm4geyBvdXRwb3N0SWQsIGFjY2Vzc3BvaW50TmFtZSB9O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgQVJOIHJlc291cmNlIHNob3VsZCBiZWdpbiB3aXRoICdhY2Nlc3Nwb2ludCR7ZGVsaW1pdGVyfScgb3IgJ291dHBvc3Qke2RlbGltaXRlcn0nYCk7XG4gIH1cbn07XG5cbi8qKlxuICogVGhyb3cgaWYgZHVhbCBzdGFjayBjb25maWd1cmF0aW9uIGlzIHNldCB0byB0cnVlLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZU5vRHVhbHN0YWNrID0gKGR1YWxzdGFja0VuZHBvaW50OiBib29sZWFuKSA9PiB7XG4gIGlmIChkdWFsc3RhY2tFbmRwb2ludCkgdGhyb3cgbmV3IEVycm9yKFwiRHVhbHN0YWNrIGVuZHBvaW50IGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCBPdXRwb3N0XCIpO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSByZWdpb24gaXMgbm90IGFwcGVuZGVkIG9yIHByZXBlbmRlZCB3aXRoIGEgYGZpcHMtYFxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZU5vRklQUyA9IChyZWdpb246IHN0cmluZykgPT4ge1xuICBpZiAoaXNGaXBzUmVnaW9uKHJlZ2lvbiA/PyBcIlwiKSkgdGhyb3cgbmV3IEVycm9yKGBGSVBTIHJlZ2lvbiBpcyBub3Qgc3VwcG9ydGVkIHdpdGggT3V0cG9zdCwgZ290ICR7cmVnaW9ufWApO1xufTtcbiJdfQ==