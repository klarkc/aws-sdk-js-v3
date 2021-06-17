import { ARN } from "@aws-sdk/util-arn-parser";
export declare const DOT_PATTERN: RegExp;
export declare const S3_HOSTNAME_PATTERN: RegExp;
export interface AccessPointArn extends ARN {
    accessPointName: string;
}
export interface BucketHostnameParams {
    isCustomEndpoint: boolean;
    baseHostname: string;
    bucketName: string;
    clientRegion: string;
    accelerateEndpoint?: boolean;
    dualstackEndpoint?: boolean;
    pathStyleEndpoint?: boolean;
    tlsCompatible?: boolean;
}
export interface ArnHostnameParams extends Omit<BucketHostnameParams, "bucketName"> {
    bucketName: ARN;
    clientSigningRegion?: string;
    clientPartition?: string;
    useArnRegion?: boolean;
}
export declare const isBucketNameOptions: (options: BucketHostnameParams | ArnHostnameParams) => options is BucketHostnameParams;
/**
 * Get pseudo region from supplied region. For example, if supplied with `fips-us-west-2`, it returns `us-west-2`.
 * @internal
 */
export declare const getPseudoRegion: (region: string) => string;
/**
 * Determines whether a given string is DNS compliant per the rules outlined by
 * S3. Length, capitaization, and leading dot restrictions are enforced by the
 * DOMAIN_PATTERN regular expression.
 * @internal
 *
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
 */
export declare const isDnsCompatibleBucketName: (bucketName: string) => boolean;
export declare const getSuffix: (hostname: string) => [string, string];
/**
 * Infer region and hostname suffix from a complete hostname
 * @internal
 * @param hostname - Hostname
 * @returns [Region, Hostname suffix]
 */
export declare const getSuffixForArnEndpoint: (hostname: string) => [string, string];
export declare const validateArnEndpointOptions: (options: {
    accelerateEndpoint?: boolean;
    tlsCompatible?: boolean;
    pathStyleEndpoint?: boolean;
}) => void;
export declare const validateService: (service: string) => void;
export declare const validateS3Service: (service: string) => void;
export declare const validateOutpostService: (service: string) => void;
/**
 * Validate partition inferred from ARN is the same to `options.clientPartition`.
 * @internal
 */
export declare const validatePartition: (partition: string, options: {
    clientPartition: string;
}) => void;
/**
 * validate region value inferred from ARN. If `options.useArnRegion` is set, it validates the region is not a FIPS
 * region. If `options.useArnRegion` is unset, it validates the region is equal to `options.clientRegion` or
 * `options.clientSigningRegion`.
 * @internal
 */
export declare const validateRegion: (region: string, options: {
    useArnRegion?: boolean;
    allowFipsRegion?: boolean;
    clientRegion: string;
    clientSigningRegion: string;
}) => void;
/**
 *
 * @param region
 */
export declare const validateRegionalClient: (region: string) => void;
/**
 * @internal
 */
export declare const isFipsRegion: (region: string) => boolean;
/**
 * Validate an account ID
 * @internal
 */
export declare const validateAccountId: (accountId: string) => void;
/**
 * Validate a host label according to https://tools.ietf.org/html/rfc3986#section-3.2.2
 * @internal
 */
export declare const validateDNSHostLabel: (label: string, options?: {
    tlsCompatible?: boolean;
}) => void;
/**
 * Validate and parse an Access Point ARN or Outposts ARN
 * @internal
 *
 * @param resource - The resource section of an ARN
 * @returns Access Point Name and optional Outpost ID.
 */
export declare const getArnResources: (resource: string) => {
    accesspointName: string;
    outpostId?: string;
};
/**
 * Throw if dual stack configuration is set to true.
 * @internal
 */
export declare const validateNoDualstack: (dualstackEndpoint: boolean) => void;
/**
 * Validate region is not appended or prepended with a `fips-`
 * @internal
 */
export declare const validateNoFIPS: (region: string) => void;
