import { __awaiter, __generator, __read } from "tslib";
import { getArnResources as getS3AccesspointArnResources, getPseudoRegion, validateAccountId, validateNoDualstack, validateNoFIPS, validateOutpostService, validatePartition, validateRegion, } from "@aws-sdk/middleware-bucket-endpoint";
import { parse as parseArn, validate as validateArn } from "@aws-sdk/util-arn-parser";
import { CONTEXT_ARN_REGION, CONTEXT_OUTPOST_ID, CONTEXT_SIGNING_REGION, CONTEXT_SIGNING_SERVICE } from "../constants";
/**
 * Validate input `Name` or `Bucket` parameter is acceptable ARN format. If so, modify the input ARN to inferred
 * resource identifier, notify later middleware to redirect request to Outpost endpoint, signing service and signing
 * region.
 */
export var parseOutpostArnablesMiddleaware = function (options) {
    return function (next, context) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var input, parameter, clientRegion, regionInfoProvider, useArnRegion, baseRegion, _a, clientPartition, _b, signingRegion, validatorOptions, arn, _c, outpostId, accesspointName, _d, outpostId, bucketName;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        input = args.input;
                        parameter = input.Name && validateArn(input.Name) ? "Name" : input.Bucket && validateArn(input.Bucket) ? "Bucket" : undefined;
                        if (!parameter)
                            return [2 /*return*/, next(args)];
                        return [4 /*yield*/, options.region()];
                    case 1:
                        clientRegion = _e.sent();
                        regionInfoProvider = options.regionInfoProvider;
                        return [4 /*yield*/, options.useArnRegion()];
                    case 2:
                        useArnRegion = _e.sent();
                        baseRegion = getPseudoRegion(clientRegion);
                        return [4 /*yield*/, regionInfoProvider(baseRegion)];
                    case 3:
                        _a = (_e.sent()), clientPartition = _a.partition, _b = _a.signingRegion, signingRegion = _b === void 0 ? baseRegion : _b;
                        validatorOptions = {
                            useDualstackEndpoint: options.useDualstackEndpoint,
                            clientRegion: clientRegion,
                            clientPartition: clientPartition,
                            signingRegion: signingRegion,
                            useArnRegion: useArnRegion,
                        };
                        if (parameter === "Name") {
                            arn = parseArn(input.Name);
                            validateOutpostsArn(arn, validatorOptions);
                            _c = parseOutpostsAccessPointArnResource(arn.resource), outpostId = _c.outpostId, accesspointName = _c.accesspointName;
                            input.Name = accesspointName;
                            context[CONTEXT_OUTPOST_ID] = outpostId;
                        }
                        else {
                            arn = parseArn(input.Bucket);
                            validateOutpostsArn(arn, validatorOptions);
                            _d = parseOutpostBucketArnResource(arn.resource), outpostId = _d.outpostId, bucketName = _d.bucketName;
                            input.Bucket = bucketName;
                            context[CONTEXT_OUTPOST_ID] = outpostId;
                        }
                        context[CONTEXT_SIGNING_SERVICE] = arn.service; // s3-outposts
                        context[CONTEXT_SIGNING_REGION] = useArnRegion ? arn.region : signingRegion;
                        if (!input.AccountId) {
                            input.AccountId = arn.accountId;
                        }
                        else if (input.AccountId !== arn.accountId) {
                            throw new Error("AccountId is incompatible with account id inferred from " + parameter);
                        }
                        if (useArnRegion)
                            context[CONTEXT_ARN_REGION] = arn.region;
                        return [2 /*return*/, next(args)];
                }
            });
        }); };
    };
};
export var parseOutpostArnablesMiddleawareOptions = {
    step: "initialize",
    tags: ["CONVERT_ARN", "OUTPOST_BUCKET_ARN", "OUTPOST_ACCESS_POINT_ARN", "OUTPOST"],
    name: "parseOutpostArnablesMiddleaware",
};
/**
 * validate ARN with 's3-outposts' in the service section of the ARN:
 * ARN supplied to 'Name' parameter should comply template:
 *    arn:{partition}:s3-outposts:{region}:{accountId}:outpost/{outpostId}/accesspoint/{accesspointName}
 * ARN supplied to 'Bucket' parameter should comply template:
 *    arn:{partition}:s3-outposts:{region}:{accountId}:outpost/{outpostId}/bucket/{bucketName}
 */
var validateOutpostsArn = function (arn, _a) {
    var clientRegion = _a.clientRegion, signingRegion = _a.signingRegion, clientPartition = _a.clientPartition, useArnRegion = _a.useArnRegion, useDualstackEndpoint = _a.useDualstackEndpoint;
    var service = arn.service, partition = arn.partition, accountId = arn.accountId, region = arn.region;
    validateOutpostService(service);
    validatePartition(partition, { clientPartition: clientPartition });
    validateAccountId(accountId);
    validateRegion(region, {
        useArnRegion: useArnRegion,
        clientRegion: clientRegion,
        clientSigningRegion: signingRegion,
    });
    validateNoDualstack(useDualstackEndpoint);
    if (!useArnRegion)
        validateNoFIPS(clientRegion);
};
var parseOutpostsAccessPointArnResource = function (resource) {
    var _a = getS3AccesspointArnResources(resource), outpostId = _a.outpostId, accesspointName = _a.accesspointName;
    if (!outpostId) {
        throw new Error("ARN resource should begin with 'outpost'");
    }
    return {
        outpostId: outpostId,
        accesspointName: accesspointName,
    };
};
var parseOutpostBucketArnResource = function (resource) {
    var delimiter = resource.includes(":") ? ":" : "/";
    var _a = __read(resource.split(delimiter)), resourceType = _a[0], rest = _a.slice(1);
    if (resourceType === "outpost") {
        // Parse outpost ARN
        if (!rest[0] || rest[1] !== "bucket" || !rest[2] || rest.length !== 3) {
            throw new Error("Outpost Bucket ARN should have resource outpost" + delimiter + "{outpostId}" + delimiter + "bucket" + delimiter + "{bucketName}");
        }
        var _b = __read(rest, 3), outpostId = _b[0], _ = _b[1], bucketName = _b[2];
        return { outpostId: outpostId, bucketName: bucketName };
    }
    else {
        throw new Error("ARN resource should begin with 'outpost" + delimiter + "'");
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2Utb3V0cG9zdC1hcm5hYmxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm9jZXNzLWFybmFibGVzLXBsdWdpbi9wYXJzZS1vdXRwb3N0LWFybmFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsZUFBZSxJQUFJLDRCQUE0QixFQUMvQyxlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixjQUFjLEVBQ2Qsc0JBQXNCLEVBQ3RCLGlCQUFpQixFQUNqQixjQUFjLEdBQ2YsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBQU8sS0FBSyxJQUFJLFFBQVEsRUFBRSxRQUFRLElBQUksV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUXZIOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsSUFBTSwrQkFBK0IsR0FDMUMsVUFBQyxPQUFnQztJQUNqQyxPQUFBLFVBQUMsSUFBSSxFQUFFLE9BQU87UUFDZCxPQUFBLFVBQU8sSUFBSTs7Ozs7d0JBQ0QsS0FBSyxHQUFLLElBQUksTUFBVCxDQUFVO3dCQUVqQixTQUFTLEdBQ2IsS0FBSyxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7d0JBQ3BILElBQUksQ0FBQyxTQUFTOzRCQUFFLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQzt3QkFFYixxQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFyQyxZ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QUksWUFBWSxLQUFLLFNBQVMsRUFBRTtRQUM5QixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JFLE1BQU0sSUFBSSxLQUFLLENBQ2Isb0RBQWtELFNBQVMsbUJBQWMsU0FBUyxjQUFTLFNBQVMsaUJBQWMsQ0FDbkgsQ0FBQztTQUNIO1FBQ0ssSUFBQSxLQUFBLE9BQTZCLElBQUksSUFBQSxFQUFoQyxTQUFTLFFBQUEsRUFBRSxDQUFDLFFBQUEsRUFBRSxVQUFVLFFBQVEsQ0FBQztRQUN4QyxPQUFPLEVBQUUsU0FBUyxXQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQztLQUNsQztTQUFNO1FBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBMEMsU0FBUyxNQUFHLENBQUMsQ0FBQztLQUN6RTtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldEFyblJlc291cmNlcyBhcyBnZXRTM0FjY2Vzc3BvaW50QXJuUmVzb3VyY2VzLFxuICBnZXRQc2V1ZG9SZWdpb24sXG4gIHZhbGlkYXRlQWNjb3VudElkLFxuICB2YWxpZGF0ZU5vRHVhbHN0YWNrLFxuICB2YWxpZGF0ZU5vRklQUyxcbiAgdmFsaWRhdGVPdXRwb3N0U2VydmljZSxcbiAgdmFsaWRhdGVQYXJ0aXRpb24sXG4gIHZhbGlkYXRlUmVnaW9uLFxufSBmcm9tIFwiQGF3cy1zZGsvbWlkZGxld2FyZS1idWNrZXQtZW5kcG9pbnRcIjtcbmltcG9ydCB7IEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucywgSW5pdGlhbGl6ZU1pZGRsZXdhcmUgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IEFSTiwgcGFyc2UgYXMgcGFyc2VBcm4sIHZhbGlkYXRlIGFzIHZhbGlkYXRlQXJuIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtYXJuLXBhcnNlclwiO1xuXG5pbXBvcnQgeyBTM0NvbnRyb2xSZXNvbHZlZENvbmZpZyB9IGZyb20gXCIuLi9jb25maWd1cmF0aW9uc1wiO1xuaW1wb3J0IHsgQ09OVEVYVF9BUk5fUkVHSU9OLCBDT05URVhUX09VVFBPU1RfSUQsIENPTlRFWFRfU0lHTklOR19SRUdJT04sIENPTlRFWFRfU0lHTklOR19TRVJWSUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG50eXBlIEFybmFibGVJbnB1dCA9IHtcbiAgTmFtZT86IHN0cmluZztcbiAgQnVja2V0Pzogc3RyaW5nO1xuICBBY2NvdW50SWQ/OiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIGlucHV0IGBOYW1lYCBvciBgQnVja2V0YCBwYXJhbWV0ZXIgaXMgYWNjZXB0YWJsZSBBUk4gZm9ybWF0LiBJZiBzbywgbW9kaWZ5IHRoZSBpbnB1dCBBUk4gdG8gaW5mZXJyZWRcbiAqIHJlc291cmNlIGlkZW50aWZpZXIsIG5vdGlmeSBsYXRlciBtaWRkbGV3YXJlIHRvIHJlZGlyZWN0IHJlcXVlc3QgdG8gT3V0cG9zdCBlbmRwb2ludCwgc2lnbmluZyBzZXJ2aWNlIGFuZCBzaWduaW5nXG4gKiByZWdpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZU91dHBvc3RBcm5hYmxlc01pZGRsZWF3YXJlID1cbiAgKG9wdGlvbnM6IFMzQ29udHJvbFJlc29sdmVkQ29uZmlnKTogSW5pdGlhbGl6ZU1pZGRsZXdhcmU8QXJuYWJsZUlucHV0LCBhbnk+ID0+XG4gIChuZXh0LCBjb250ZXh0KSA9PlxuICBhc3luYyAoYXJncykgPT4ge1xuICAgIGNvbnN0IHsgaW5wdXQgfSA9IGFyZ3M7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXI6IFwiTmFtZVwiIHwgXCJCdWNrZXRcIiB8IHVuZGVmaW5lZCA9XG4gICAgICBpbnB1dC5OYW1lICYmIHZhbGlkYXRlQXJuKGlucHV0Lk5hbWUpID8gXCJOYW1lXCIgOiBpbnB1dC5CdWNrZXQgJiYgdmFsaWRhdGVBcm4oaW5wdXQuQnVja2V0KSA/IFwiQnVja2V0XCIgOiB1bmRlZmluZWQ7XG4gICAgaWYgKCFwYXJhbWV0ZXIpIHJldHVybiBuZXh0KGFyZ3MpO1xuXG4gICAgY29uc3QgY2xpZW50UmVnaW9uID0gYXdhaXQgb3B0aW9ucy5yZWdpb24oKTtcbiAgICBjb25zdCB7IHJlZ2lvbkluZm9Qcm92aWRlciB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB1c2VBcm5SZWdpb24gPSBhd2FpdCBvcHRpb25zLnVzZUFyblJlZ2lvbigpO1xuICAgIGNvbnN0IGJhc2VSZWdpb24gPSBnZXRQc2V1ZG9SZWdpb24oY2xpZW50UmVnaW9uKTtcbiAgICBjb25zdCB7IHBhcnRpdGlvbjogY2xpZW50UGFydGl0aW9uLCBzaWduaW5nUmVnaW9uID0gYmFzZVJlZ2lvbiB9ID0gKGF3YWl0IHJlZ2lvbkluZm9Qcm92aWRlcihiYXNlUmVnaW9uKSkhO1xuICAgIGNvbnN0IHZhbGlkYXRvck9wdGlvbnM6IFZhbGlkYXRlT3V0cG9zdHNBcm5PcHRpb25zID0ge1xuICAgICAgdXNlRHVhbHN0YWNrRW5kcG9pbnQ6IG9wdGlvbnMudXNlRHVhbHN0YWNrRW5kcG9pbnQsXG4gICAgICBjbGllbnRSZWdpb24sXG4gICAgICBjbGllbnRQYXJ0aXRpb24sXG4gICAgICBzaWduaW5nUmVnaW9uLFxuICAgICAgdXNlQXJuUmVnaW9uLFxuICAgIH07XG4gICAgbGV0IGFybjogQVJOO1xuICAgIGlmIChwYXJhbWV0ZXIgPT09IFwiTmFtZVwiKSB7XG4gICAgICBhcm4gPSBwYXJzZUFybihpbnB1dC5OYW1lISk7XG4gICAgICB2YWxpZGF0ZU91dHBvc3RzQXJuKGFybiwgdmFsaWRhdG9yT3B0aW9ucyk7XG4gICAgICBjb25zdCB7IG91dHBvc3RJZCwgYWNjZXNzcG9pbnROYW1lIH0gPSBwYXJzZU91dHBvc3RzQWNjZXNzUG9pbnRBcm5SZXNvdXJjZShhcm4ucmVzb3VyY2UpO1xuICAgICAgaW5wdXQuTmFtZSA9IGFjY2Vzc3BvaW50TmFtZTtcbiAgICAgIGNvbnRleHRbQ09OVEVYVF9PVVRQT1NUX0lEXSA9IG91dHBvc3RJZDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJuID0gcGFyc2VBcm4oaW5wdXQuQnVja2V0ISk7XG4gICAgICB2YWxpZGF0ZU91dHBvc3RzQXJuKGFybiwgdmFsaWRhdG9yT3B0aW9ucyk7XG4gICAgICBjb25zdCB7IG91dHBvc3RJZCwgYnVja2V0TmFtZSB9ID0gcGFyc2VPdXRwb3N0QnVja2V0QXJuUmVzb3VyY2UoYXJuLnJlc291cmNlKTtcbiAgICAgIGlucHV0LkJ1Y2tldCA9IGJ1Y2tldE5hbWU7XG4gICAgICBjb250ZXh0W0NPTlRFWFRfT1VUUE9TVF9JRF0gPSBvdXRwb3N0SWQ7XG4gICAgfVxuICAgIGNvbnRleHRbQ09OVEVYVF9TSUdOSU5HX1NFUlZJQ0VdID0gYXJuLnNlcnZpY2U7IC8vIHMzLW91dHBvc3RzXG4gICAgY29udGV4dFtDT05URVhUX1NJR05JTkdfUkVHSU9OXSA9IHVzZUFyblJlZ2lvbiA/IGFybi5yZWdpb24gOiBzaWduaW5nUmVnaW9uO1xuXG4gICAgaWYgKCFpbnB1dC5BY2NvdW50SWQpIHtcbiAgICAgIGlucHV0LkFjY291bnRJZCA9IGFybi5hY2NvdW50SWQ7XG4gICAgfSBlbHNlIGlmIChpbnB1dC5BY2NvdW50SWQgIT09IGFybi5hY2NvdW50SWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQWNjb3VudElkIGlzIGluY29tcGF0aWJsZSB3aXRoIGFjY291bnQgaWQgaW5mZXJyZWQgZnJvbSAke3BhcmFtZXRlcn1gKTtcbiAgICB9XG5cbiAgICBpZiAodXNlQXJuUmVnaW9uKSBjb250ZXh0W0NPTlRFWFRfQVJOX1JFR0lPTl0gPSBhcm4ucmVnaW9uO1xuXG4gICAgcmV0dXJuIG5leHQoYXJncyk7XG4gIH07XG5cbmV4cG9ydCBjb25zdCBwYXJzZU91dHBvc3RBcm5hYmxlc01pZGRsZWF3YXJlT3B0aW9uczogSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zID0ge1xuICBzdGVwOiBcImluaXRpYWxpemVcIixcbiAgdGFnczogW1wiQ09OVkVSVF9BUk5cIiwgXCJPVVRQT1NUX0JVQ0tFVF9BUk5cIiwgXCJPVVRQT1NUX0FDQ0VTU19QT0lOVF9BUk5cIiwgXCJPVVRQT1NUXCJdLFxuICBuYW1lOiBcInBhcnNlT3V0cG9zdEFybmFibGVzTWlkZGxlYXdhcmVcIixcbn07XG5cbnR5cGUgVmFsaWRhdGVPdXRwb3N0c0Fybk9wdGlvbnMgPSB7XG4gIGNsaWVudFJlZ2lvbjogc3RyaW5nO1xuICBzaWduaW5nUmVnaW9uOiBzdHJpbmc7XG4gIGNsaWVudFBhcnRpdGlvbjogc3RyaW5nO1xuICB1c2VBcm5SZWdpb246IGJvb2xlYW47XG4gIHVzZUR1YWxzdGFja0VuZHBvaW50OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiB2YWxpZGF0ZSBBUk4gd2l0aCAnczMtb3V0cG9zdHMnIGluIHRoZSBzZXJ2aWNlIHNlY3Rpb24gb2YgdGhlIEFSTjpcbiAqIEFSTiBzdXBwbGllZCB0byAnTmFtZScgcGFyYW1ldGVyIHNob3VsZCBjb21wbHkgdGVtcGxhdGU6XG4gKiAgICBhcm46e3BhcnRpdGlvbn06czMtb3V0cG9zdHM6e3JlZ2lvbn06e2FjY291bnRJZH06b3V0cG9zdC97b3V0cG9zdElkfS9hY2Nlc3Nwb2ludC97YWNjZXNzcG9pbnROYW1lfVxuICogQVJOIHN1cHBsaWVkIHRvICdCdWNrZXQnIHBhcmFtZXRlciBzaG91bGQgY29tcGx5IHRlbXBsYXRlOlxuICogICAgYXJuOntwYXJ0aXRpb259OnMzLW91dHBvc3RzOntyZWdpb259OnthY2NvdW50SWR9Om91dHBvc3Qve291dHBvc3RJZH0vYnVja2V0L3tidWNrZXROYW1lfVxuICovXG5jb25zdCB2YWxpZGF0ZU91dHBvc3RzQXJuID0gKFxuICBhcm46IEFSTixcbiAgeyBjbGllbnRSZWdpb24sIHNpZ25pbmdSZWdpb24sIGNsaWVudFBhcnRpdGlvbiwgdXNlQXJuUmVnaW9uLCB1c2VEdWFsc3RhY2tFbmRwb2ludCB9OiBWYWxpZGF0ZU91dHBvc3RzQXJuT3B0aW9uc1xuKSA9PiB7XG4gIGNvbnN0IHsgc2VydmljZSwgcGFydGl0aW9uLCBhY2NvdW50SWQsIHJlZ2lvbiB9ID0gYXJuO1xuICB2YWxpZGF0ZU91dHBvc3RTZXJ2aWNlKHNlcnZpY2UpO1xuICB2YWxpZGF0ZVBhcnRpdGlvbihwYXJ0aXRpb24sIHsgY2xpZW50UGFydGl0aW9uIH0pO1xuICB2YWxpZGF0ZUFjY291bnRJZChhY2NvdW50SWQpO1xuICB2YWxpZGF0ZVJlZ2lvbihyZWdpb24sIHtcbiAgICB1c2VBcm5SZWdpb24sXG4gICAgY2xpZW50UmVnaW9uLFxuICAgIGNsaWVudFNpZ25pbmdSZWdpb246IHNpZ25pbmdSZWdpb24sXG4gIH0pO1xuICB2YWxpZGF0ZU5vRHVhbHN0YWNrKHVzZUR1YWxzdGFja0VuZHBvaW50KTtcbiAgaWYgKCF1c2VBcm5SZWdpb24pIHZhbGlkYXRlTm9GSVBTKGNsaWVudFJlZ2lvbik7XG59O1xuXG5jb25zdCBwYXJzZU91dHBvc3RzQWNjZXNzUG9pbnRBcm5SZXNvdXJjZSA9IChcbiAgcmVzb3VyY2U6IHN0cmluZ1xuKToge1xuICBvdXRwb3N0SWQ6IHN0cmluZztcbiAgYWNjZXNzcG9pbnROYW1lOiBzdHJpbmc7XG59ID0+IHtcbiAgY29uc3QgeyBvdXRwb3N0SWQsIGFjY2Vzc3BvaW50TmFtZSB9ID0gZ2V0UzNBY2Nlc3Nwb2ludEFyblJlc291cmNlcyhyZXNvdXJjZSk7XG4gIGlmICghb3V0cG9zdElkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQVJOIHJlc291cmNlIHNob3VsZCBiZWdpbiB3aXRoICdvdXRwb3N0J1wiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG91dHBvc3RJZCxcbiAgICBhY2Nlc3Nwb2ludE5hbWUsXG4gIH07XG59O1xuXG5jb25zdCBwYXJzZU91dHBvc3RCdWNrZXRBcm5SZXNvdXJjZSA9IChcbiAgcmVzb3VyY2U6IHN0cmluZ1xuKToge1xuICBvdXRwb3N0SWQ6IHN0cmluZztcbiAgYnVja2V0TmFtZTogc3RyaW5nO1xufSA9PiB7XG4gIGNvbnN0IGRlbGltaXRlciA9IHJlc291cmNlLmluY2x1ZGVzKFwiOlwiKSA/IFwiOlwiIDogXCIvXCI7XG4gIGNvbnN0IFtyZXNvdXJjZVR5cGUsIC4uLnJlc3RdID0gcmVzb3VyY2Uuc3BsaXQoZGVsaW1pdGVyKTtcbiAgaWYgKHJlc291cmNlVHlwZSA9PT0gXCJvdXRwb3N0XCIpIHtcbiAgICAvLyBQYXJzZSBvdXRwb3N0IEFSTlxuICAgIGlmICghcmVzdFswXSB8fCByZXN0WzFdICE9PSBcImJ1Y2tldFwiIHx8ICFyZXN0WzJdIHx8IHJlc3QubGVuZ3RoICE9PSAzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBPdXRwb3N0IEJ1Y2tldCBBUk4gc2hvdWxkIGhhdmUgcmVzb3VyY2Ugb3V0cG9zdCR7ZGVsaW1pdGVyfXtvdXRwb3N0SWR9JHtkZWxpbWl0ZXJ9YnVja2V0JHtkZWxpbWl0ZXJ9e2J1Y2tldE5hbWV9YFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgW291dHBvc3RJZCwgXywgYnVja2V0TmFtZV0gPSByZXN0O1xuICAgIHJldHVybiB7IG91dHBvc3RJZCwgYnVja2V0TmFtZSB9O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgQVJOIHJlc291cmNlIHNob3VsZCBiZWdpbiB3aXRoICdvdXRwb3N0JHtkZWxpbWl0ZXJ9J2ApO1xuICB9XG59O1xuIl19