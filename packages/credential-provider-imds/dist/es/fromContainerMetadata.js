import { __assign, __awaiter, __generator } from "tslib";
import { ProviderError } from "@aws-sdk/property-provider";
import { parse } from "url";
import { httpRequest } from "./remoteProvider/httpRequest";
import { fromImdsCredentials, isImdsCredentials } from "./remoteProvider/ImdsCredentials";
import { providerConfigFromInit } from "./remoteProvider/RemoteProviderInit";
import { retry } from "./remoteProvider/retry";
export var ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
export var ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
export var ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
/**
 * Creates a credential provider that will source credentials from the ECS
 * Container Metadata Service
 */
export var fromContainerMetadata = function (init) {
    if (init === void 0) { init = {}; }
    var _a = providerConfigFromInit(init), timeout = _a.timeout, maxRetries = _a.maxRetries;
    return function () {
        return retry(function () { return __awaiter(void 0, void 0, void 0, function () {
            var requestOptions, credsResponse, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, getCmdsUri()];
                    case 1:
                        requestOptions = _c.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, requestFromEcsImds(timeout, requestOptions)];
                    case 2:
                        credsResponse = _b.apply(_a, [_c.sent()]);
                        if (!isImdsCredentials(credsResponse)) {
                            throw new ProviderError("Invalid response received from instance metadata service.");
                        }
                        return [2 /*return*/, fromImdsCredentials(credsResponse)];
                }
            });
        }); }, maxRetries);
    };
};
var requestFromEcsImds = function (timeout, options) { return __awaiter(void 0, void 0, void 0, function () {
    var buffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (process.env[ENV_CMDS_AUTH_TOKEN]) {
                    options.headers = __assign(__assign({}, options.headers), { Authorization: process.env[ENV_CMDS_AUTH_TOKEN] });
                }
                return [4 /*yield*/, httpRequest(__assign(__assign({}, options), { timeout: timeout }))];
            case 1:
                buffer = _a.sent();
                return [2 /*return*/, buffer.toString()];
        }
    });
}); };
var CMDS_IP = "169.254.170.2";
var GREENGRASS_HOSTS = {
    localhost: true,
    "127.0.0.1": true,
};
var GREENGRASS_PROTOCOLS = {
    "http:": true,
    "https:": true,
};
var getCmdsUri = function () { return __awaiter(void 0, void 0, void 0, function () {
    var parsed;
    return __generator(this, function (_a) {
        if (process.env[ENV_CMDS_RELATIVE_URI]) {
            return [2 /*return*/, {
                    hostname: CMDS_IP,
                    path: process.env[ENV_CMDS_RELATIVE_URI],
                }];
        }
        if (process.env[ENV_CMDS_FULL_URI]) {
            parsed = parse(process.env[ENV_CMDS_FULL_URI]);
            if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
                throw new ProviderError(parsed.hostname + " is not a valid container metadata service hostname", false);
            }
            if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
                throw new ProviderError(parsed.protocol + " is not a valid container metadata service protocol", false);
            }
            return [2 /*return*/, __assign(__assign({}, parsed), { port: parsed.port ? parseInt(parsed.port, 10) : undefined })];
        }
        throw new ProviderError("The container metadata credential provider cannot be used unless" +
            (" the " + ENV_CMDS_RELATIVE_URI + " or " + ENV_CMDS_FULL_URI + " environment") +
            " variable is set", false);
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbUNvbnRhaW5lck1ldGFkYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Zyb21Db250YWluZXJNZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRzNELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFNUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBc0IsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0MsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsb0NBQW9DLENBQUM7QUFDdEUsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUcsd0NBQXdDLENBQUM7QUFDOUUsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcsbUNBQW1DLENBQUM7QUFFdkU7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUcsVUFBQyxJQUE2QjtJQUE3QixxQkFBQSxFQUFBLFNBQTZCO0lBQzNELElBQUEsS0FBMEIsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQXBELE9BQU8sYUFBQSxFQUFFLFVBQVUsZ0JBQWlDLENBQUM7SUFDN0QsT0FBTztRQUNMLE9BQUEsS0FBSyxDQUFDOzs7OzRCQUNtQixxQkFBTSxVQUFVLEVBQUUsRUFBQTs7d0JBQW5DLGNBQWMsR0FBRyxTQUFrQjt3QkFDbkIsS0FBQSxDQUFBLEtBQUEsSUFBSSxDQUFBLENBQUMsS0FBSyxDQUFBO3dCQUFDLHFCQUFNLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsRUFBQTs7d0JBQTVFLGFBQWEsR0FBRyxjQUFXLFNBQWlELEVBQUM7d0JBQ25GLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsRUFBRTs0QkFDckMsTUFBTSxJQUFJLGFBQWEsQ0FBQywyREFBMkQsQ0FBQyxDQUFDO3lCQUN0Rjt3QkFDRCxzQkFBTyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsRUFBQzs7O2FBQzNDLEVBQUUsVUFBVSxDQUFDO0lBUGQsQ0FPYyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQUcsVUFBTyxPQUFlLEVBQUUsT0FBdUI7Ozs7O2dCQUN4RSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsRUFBRTtvQkFDcEMsT0FBTyxDQUFDLE9BQU8seUJBQ1YsT0FBTyxDQUFDLE9BQU8sS0FDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsR0FDaEQsQ0FBQztpQkFDSDtnQkFFYyxxQkFBTSxXQUFXLHVCQUMzQixPQUFPLEtBQ1YsT0FBTyxTQUFBLElBQ1AsRUFBQTs7Z0JBSEksTUFBTSxHQUFHLFNBR2I7Z0JBQ0Ysc0JBQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFDOzs7S0FDMUIsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUNoQyxJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsV0FBVyxFQUFFLElBQUk7Q0FDbEIsQ0FBQztBQUNGLElBQU0sb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRixJQUFNLFVBQVUsR0FBRzs7O1FBQ2pCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQ3RDLHNCQUFPO29CQUNMLFFBQVEsRUFBRSxPQUFPO29CQUNqQixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDekMsRUFBQztTQUNIO1FBRUQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDNUIsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFFLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUM5RCxNQUFNLElBQUksYUFBYSxDQUFJLE1BQU0sQ0FBQyxRQUFRLHdEQUFxRCxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pHO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksb0JBQW9CLENBQUMsRUFBRTtnQkFDbEUsTUFBTSxJQUFJLGFBQWEsQ0FBSSxNQUFNLENBQUMsUUFBUSx3REFBcUQsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN6RztZQUVELDRDQUNLLE1BQU0sS0FDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FDekQ7U0FDSDtRQUVELE1BQU0sSUFBSSxhQUFhLENBQ3JCLGtFQUFrRTthQUNoRSxVQUFRLHFCQUFxQixZQUFPLGlCQUFpQixpQkFBYyxDQUFBO1lBQ25FLGtCQUFrQixFQUNwQixLQUFLLENBQ04sQ0FBQzs7S0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAYXdzLXNkay9wcm9wZXJ0eS1wcm92aWRlclwiO1xuaW1wb3J0IHsgQ3JlZGVudGlhbFByb3ZpZGVyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJzdHJlYW0taHR0cFwiO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwidXJsXCI7XG5cbmltcG9ydCB7IGh0dHBSZXF1ZXN0IH0gZnJvbSBcIi4vcmVtb3RlUHJvdmlkZXIvaHR0cFJlcXVlc3RcIjtcbmltcG9ydCB7IGZyb21JbWRzQ3JlZGVudGlhbHMsIGlzSW1kc0NyZWRlbnRpYWxzIH0gZnJvbSBcIi4vcmVtb3RlUHJvdmlkZXIvSW1kc0NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyBwcm92aWRlckNvbmZpZ0Zyb21Jbml0LCBSZW1vdGVQcm92aWRlckluaXQgfSBmcm9tIFwiLi9yZW1vdGVQcm92aWRlci9SZW1vdGVQcm92aWRlckluaXRcIjtcbmltcG9ydCB7IHJldHJ5IH0gZnJvbSBcIi4vcmVtb3RlUHJvdmlkZXIvcmV0cnlcIjtcblxuZXhwb3J0IGNvbnN0IEVOVl9DTURTX0ZVTExfVVJJID0gXCJBV1NfQ09OVEFJTkVSX0NSRURFTlRJQUxTX0ZVTExfVVJJXCI7XG5leHBvcnQgY29uc3QgRU5WX0NNRFNfUkVMQVRJVkVfVVJJID0gXCJBV1NfQ09OVEFJTkVSX0NSRURFTlRJQUxTX1JFTEFUSVZFX1VSSVwiO1xuZXhwb3J0IGNvbnN0IEVOVl9DTURTX0FVVEhfVE9LRU4gPSBcIkFXU19DT05UQUlORVJfQVVUSE9SSVpBVElPTl9UT0tFTlwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjcmVkZW50aWFsIHByb3ZpZGVyIHRoYXQgd2lsbCBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbSB0aGUgRUNTXG4gKiBDb250YWluZXIgTWV0YWRhdGEgU2VydmljZVxuICovXG5leHBvcnQgY29uc3QgZnJvbUNvbnRhaW5lck1ldGFkYXRhID0gKGluaXQ6IFJlbW90ZVByb3ZpZGVySW5pdCA9IHt9KTogQ3JlZGVudGlhbFByb3ZpZGVyID0+IHtcbiAgY29uc3QgeyB0aW1lb3V0LCBtYXhSZXRyaWVzIH0gPSBwcm92aWRlckNvbmZpZ0Zyb21Jbml0KGluaXQpO1xuICByZXR1cm4gKCkgPT5cbiAgICByZXRyeShhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IGF3YWl0IGdldENtZHNVcmkoKTtcbiAgICAgIGNvbnN0IGNyZWRzUmVzcG9uc2UgPSBKU09OLnBhcnNlKGF3YWl0IHJlcXVlc3RGcm9tRWNzSW1kcyh0aW1lb3V0LCByZXF1ZXN0T3B0aW9ucykpO1xuICAgICAgaWYgKCFpc0ltZHNDcmVkZW50aWFscyhjcmVkc1Jlc3BvbnNlKSkge1xuICAgICAgICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBpbnN0YW5jZSBtZXRhZGF0YSBzZXJ2aWNlLlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tSW1kc0NyZWRlbnRpYWxzKGNyZWRzUmVzcG9uc2UpO1xuICAgIH0sIG1heFJldHJpZXMpO1xufTtcblxuY29uc3QgcmVxdWVzdEZyb21FY3NJbWRzID0gYXN5bmMgKHRpbWVvdXQ6IG51bWJlciwgb3B0aW9uczogUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICBpZiAocHJvY2Vzcy5lbnZbRU5WX0NNRFNfQVVUSF9UT0tFTl0pIHtcbiAgICBvcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAuLi5vcHRpb25zLmhlYWRlcnMsXG4gICAgICBBdXRob3JpemF0aW9uOiBwcm9jZXNzLmVudltFTlZfQ01EU19BVVRIX1RPS0VOXSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgYnVmZmVyID0gYXdhaXQgaHR0cFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgdGltZW91dCxcbiAgfSk7XG4gIHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcbn07XG5cbmNvbnN0IENNRFNfSVAgPSBcIjE2OS4yNTQuMTcwLjJcIjtcbmNvbnN0IEdSRUVOR1JBU1NfSE9TVFMgPSB7XG4gIGxvY2FsaG9zdDogdHJ1ZSxcbiAgXCIxMjcuMC4wLjFcIjogdHJ1ZSxcbn07XG5jb25zdCBHUkVFTkdSQVNTX1BST1RPQ09MUyA9IHtcbiAgXCJodHRwOlwiOiB0cnVlLFxuICBcImh0dHBzOlwiOiB0cnVlLFxufTtcblxuY29uc3QgZ2V0Q21kc1VyaSA9IGFzeW5jICgpOiBQcm9taXNlPFJlcXVlc3RPcHRpb25zPiA9PiB7XG4gIGlmIChwcm9jZXNzLmVudltFTlZfQ01EU19SRUxBVElWRV9VUkldKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvc3RuYW1lOiBDTURTX0lQLFxuICAgICAgcGF0aDogcHJvY2Vzcy5lbnZbRU5WX0NNRFNfUkVMQVRJVkVfVVJJXSxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52W0VOVl9DTURTX0ZVTExfVVJJXSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlKHByb2Nlc3MuZW52W0VOVl9DTURTX0ZVTExfVVJJXSEpO1xuICAgIGlmICghcGFyc2VkLmhvc3RuYW1lIHx8ICEocGFyc2VkLmhvc3RuYW1lIGluIEdSRUVOR1JBU1NfSE9TVFMpKSB7XG4gICAgICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihgJHtwYXJzZWQuaG9zdG5hbWV9IGlzIG5vdCBhIHZhbGlkIGNvbnRhaW5lciBtZXRhZGF0YSBzZXJ2aWNlIGhvc3RuYW1lYCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICghcGFyc2VkLnByb3RvY29sIHx8ICEocGFyc2VkLnByb3RvY29sIGluIEdSRUVOR1JBU1NfUFJPVE9DT0xTKSkge1xuICAgICAgdGhyb3cgbmV3IFByb3ZpZGVyRXJyb3IoYCR7cGFyc2VkLnByb3RvY29sfSBpcyBub3QgYSB2YWxpZCBjb250YWluZXIgbWV0YWRhdGEgc2VydmljZSBwcm90b2NvbGAsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucGFyc2VkLFxuICAgICAgcG9ydDogcGFyc2VkLnBvcnQgPyBwYXJzZUludChwYXJzZWQucG9ydCwgMTApIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihcbiAgICBcIlRoZSBjb250YWluZXIgbWV0YWRhdGEgY3JlZGVudGlhbCBwcm92aWRlciBjYW5ub3QgYmUgdXNlZCB1bmxlc3NcIiArXG4gICAgICBgIHRoZSAke0VOVl9DTURTX1JFTEFUSVZFX1VSSX0gb3IgJHtFTlZfQ01EU19GVUxMX1VSSX0gZW52aXJvbm1lbnRgICtcbiAgICAgIFwiIHZhcmlhYmxlIGlzIHNldFwiLFxuICAgIGZhbHNlXG4gICk7XG59O1xuIl19