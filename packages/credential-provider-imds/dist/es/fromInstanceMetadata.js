import { __assign, __awaiter, __generator } from "tslib";
import { ProviderError } from "@aws-sdk/property-provider";
import { httpRequest } from "./remoteProvider/httpRequest";
import { fromImdsCredentials, isImdsCredentials } from "./remoteProvider/ImdsCredentials";
import { providerConfigFromInit } from "./remoteProvider/RemoteProviderInit";
import { retry } from "./remoteProvider/retry";
var IMDS_IP = "169.254.169.254";
var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
var IMDS_TOKEN_PATH = "/latest/api/token";
/**
 * Creates a credential provider that will source credentials from the EC2
 * Instance Metadata Service
 */
export var fromInstanceMetadata = function (init) {
    if (init === void 0) { init = {}; }
    // when set to true, metadata service will not fetch token
    var disableFetchToken = false;
    var _a = providerConfigFromInit(init), timeout = _a.timeout, maxRetries = _a.maxRetries;
    var getCredentials = function (maxRetries, options) { return __awaiter(void 0, void 0, void 0, function () {
        var profile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, retry(function () { return __awaiter(void 0, void 0, void 0, function () {
                        var profile, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, getProfile(options)];
                                case 1:
                                    profile = _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    if (err_1.statusCode === 401) {
                                        disableFetchToken = false;
                                    }
                                    throw err_1;
                                case 3: return [2 /*return*/, profile];
                            }
                        });
                    }); }, maxRetries)];
                case 1:
                    profile = (_a.sent()).trim();
                    return [2 /*return*/, retry(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var creds, err_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, getCredentialsFromProfile(profile, options)];
                                    case 1:
                                        creds = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        err_2 = _a.sent();
                                        if (err_2.statusCode === 401) {
                                            disableFetchToken = false;
                                        }
                                        throw err_2;
                                    case 3: return [2 /*return*/, creds];
                                }
                            });
                        }); }, maxRetries)];
            }
        });
    }); };
    return function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!disableFetchToken) return [3 /*break*/, 1];
                    return [2 /*return*/, getCredentials(maxRetries, { timeout: timeout })];
                case 1:
                    token = void 0;
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, getMetadataToken({ timeout: timeout })];
                case 3:
                    token = (_a.sent()).toString();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    if ((error_1 === null || error_1 === void 0 ? void 0 : error_1.statusCode) === 400) {
                        throw Object.assign(error_1, {
                            message: "EC2 Metadata token request returned error",
                        });
                    }
                    else if (error_1.message === "TimeoutError" || [403, 404, 405].includes(error_1.statusCode)) {
                        disableFetchToken = true;
                    }
                    return [2 /*return*/, getCredentials(maxRetries, { timeout: timeout })];
                case 5: return [2 /*return*/, getCredentials(maxRetries, {
                        timeout: timeout,
                        headers: {
                            "x-aws-ec2-metadata-token": token,
                        },
                    })];
            }
        });
    }); };
};
var getMetadataToken = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, httpRequest(__assign(__assign({}, options), { host: IMDS_IP, path: IMDS_TOKEN_PATH, method: "PUT", headers: {
                    "x-aws-ec2-metadata-token-ttl-seconds": "21600",
                } }))];
    });
}); };
var getProfile = function (options) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, httpRequest(__assign(__assign({}, options), { host: IMDS_IP, path: IMDS_PATH }))];
        case 1: return [2 /*return*/, (_a.sent()).toString()];
    }
}); }); };
var getCredentialsFromProfile = function (profile, options) { return __awaiter(void 0, void 0, void 0, function () {
    var credsResponse, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = JSON).parse;
                return [4 /*yield*/, httpRequest(__assign(__assign({}, options), { host: IMDS_IP, path: IMDS_PATH + profile }))];
            case 1:
                credsResponse = _b.apply(_a, [(_c.sent()).toString()]);
                if (!isImdsCredentials(credsResponse)) {
                    throw new ProviderError("Invalid response received from instance metadata service.");
                }
                return [2 /*return*/, fromImdsCredentials(credsResponse)];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbUluc3RhbmNlTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnJvbUluc3RhbmNlTWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUkzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHNCQUFzQixFQUFzQixNQUFNLHFDQUFxQyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUvQyxJQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztBQUNsQyxJQUFNLFNBQVMsR0FBRyw2Q0FBNkMsQ0FBQztBQUNoRSxJQUFNLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQztBQUU1Qzs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLElBQTZCO0lBQTdCLHFCQUFBLEVBQUEsU0FBNkI7SUFDaEUsMERBQTBEO0lBQzFELElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLElBQUEsS0FBMEIsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQXBELE9BQU8sYUFBQSxFQUFFLFVBQVUsZ0JBQWlDLENBQUM7SUFFN0QsSUFBTSxjQUFjLEdBQUcsVUFBTyxVQUFrQixFQUFFLE9BQXVCOzs7O3dCQUVyRSxxQkFBTSxLQUFLLENBQVM7Ozs7OztvQ0FHTixxQkFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUE7O29DQUFuQyxPQUFPLEdBQUcsU0FBeUIsQ0FBQzs7OztvQ0FFcEMsSUFBSSxLQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTt3Q0FDMUIsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO3FDQUMzQjtvQ0FDRCxNQUFNLEtB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REFBMkQsQ0FBQyxDQUFDO2lCQUN0RjtnQkFFRCxzQkFBTyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsRUFBQzs7O0tBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlckVycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFsUHJvdmlkZXIsIENyZWRlbnRpYWxzIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJzdHJlYW0taHR0cFwiO1xuXG5pbXBvcnQgeyBodHRwUmVxdWVzdCB9IGZyb20gXCIuL3JlbW90ZVByb3ZpZGVyL2h0dHBSZXF1ZXN0XCI7XG5pbXBvcnQgeyBmcm9tSW1kc0NyZWRlbnRpYWxzLCBpc0ltZHNDcmVkZW50aWFscyB9IGZyb20gXCIuL3JlbW90ZVByb3ZpZGVyL0ltZHNDcmVkZW50aWFsc1wiO1xuaW1wb3J0IHsgcHJvdmlkZXJDb25maWdGcm9tSW5pdCwgUmVtb3RlUHJvdmlkZXJJbml0IH0gZnJvbSBcIi4vcmVtb3RlUHJvdmlkZXIvUmVtb3RlUHJvdmlkZXJJbml0XCI7XG5pbXBvcnQgeyByZXRyeSB9IGZyb20gXCIuL3JlbW90ZVByb3ZpZGVyL3JldHJ5XCI7XG5cbmNvbnN0IElNRFNfSVAgPSBcIjE2OS4yNTQuMTY5LjI1NFwiO1xuY29uc3QgSU1EU19QQVRIID0gXCIvbGF0ZXN0L21ldGEtZGF0YS9pYW0vc2VjdXJpdHktY3JlZGVudGlhbHMvXCI7XG5jb25zdCBJTURTX1RPS0VOX1BBVEggPSBcIi9sYXRlc3QvYXBpL3Rva2VuXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNyZWRlbnRpYWwgcHJvdmlkZXIgdGhhdCB3aWxsIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tIHRoZSBFQzJcbiAqIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2VcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21JbnN0YW5jZU1ldGFkYXRhID0gKGluaXQ6IFJlbW90ZVByb3ZpZGVySW5pdCA9IHt9KTogQ3JlZGVudGlhbFByb3ZpZGVyID0+IHtcbiAgLy8gd2hlbiBzZXQgdG8gdHJ1ZSwgbWV0YWRhdGEgc2VydmljZSB3aWxsIG5vdCBmZXRjaCB0b2tlblxuICBsZXQgZGlzYWJsZUZldGNoVG9rZW4gPSBmYWxzZTtcbiAgY29uc3QgeyB0aW1lb3V0LCBtYXhSZXRyaWVzIH0gPSBwcm92aWRlckNvbmZpZ0Zyb21Jbml0KGluaXQpO1xuXG4gIGNvbnN0IGdldENyZWRlbnRpYWxzID0gYXN5bmMgKG1heFJldHJpZXM6IG51bWJlciwgb3B0aW9uczogUmVxdWVzdE9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBwcm9maWxlID0gKFxuICAgICAgYXdhaXQgcmV0cnk8c3RyaW5nPihhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9maWxlOiBzdHJpbmc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcHJvZmlsZSA9IGF3YWl0IGdldFByb2ZpbGUob3B0aW9ucyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGlmIChlcnIuc3RhdHVzQ29kZSA9PT0gNDAxKSB7XG4gICAgICAgICAgICBkaXNhYmxlRmV0Y2hUb2tlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2ZpbGU7XG4gICAgICB9LCBtYXhSZXRyaWVzKVxuICAgICkudHJpbSgpO1xuXG4gICAgcmV0dXJuIHJldHJ5KGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBjcmVkczogQ3JlZGVudGlhbHM7XG4gICAgICB0cnkge1xuICAgICAgICBjcmVkcyA9IGF3YWl0IGdldENyZWRlbnRpYWxzRnJvbVByb2ZpbGUocHJvZmlsZSwgb3B0aW9ucyk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyci5zdGF0dXNDb2RlID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNhYmxlRmV0Y2hUb2tlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVkcztcbiAgICB9LCBtYXhSZXRyaWVzKTtcbiAgfTtcblxuICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChkaXNhYmxlRmV0Y2hUb2tlbikge1xuICAgICAgcmV0dXJuIGdldENyZWRlbnRpYWxzKG1heFJldHJpZXMsIHsgdGltZW91dCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRva2VuOiBzdHJpbmc7XG4gICAgICB0cnkge1xuICAgICAgICB0b2tlbiA9IChhd2FpdCBnZXRNZXRhZGF0YVRva2VuKHsgdGltZW91dCB9KSkudG9TdHJpbmcoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvcj8uc3RhdHVzQ29kZSA9PT0gNDAwKSB7XG4gICAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbihlcnJvciwge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJFQzIgTWV0YWRhdGEgdG9rZW4gcmVxdWVzdCByZXR1cm5lZCBlcnJvclwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm1lc3NhZ2UgPT09IFwiVGltZW91dEVycm9yXCIgfHwgWzQwMywgNDA0LCA0MDVdLmluY2x1ZGVzKGVycm9yLnN0YXR1c0NvZGUpKSB7XG4gICAgICAgICAgZGlzYWJsZUZldGNoVG9rZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRDcmVkZW50aWFscyhtYXhSZXRyaWVzLCB7IHRpbWVvdXQgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0Q3JlZGVudGlhbHMobWF4UmV0cmllcywge1xuICAgICAgICB0aW1lb3V0LFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJ4LWF3cy1lYzItbWV0YWRhdGEtdG9rZW5cIjogdG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBnZXRNZXRhZGF0YVRva2VuID0gYXN5bmMgKG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zKSA9PlxuICBodHRwUmVxdWVzdCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBob3N0OiBJTURTX0lQLFxuICAgIHBhdGg6IElNRFNfVE9LRU5fUEFUSCxcbiAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJ4LWF3cy1lYzItbWV0YWRhdGEtdG9rZW4tdHRsLXNlY29uZHNcIjogXCIyMTYwMFwiLFxuICAgIH0sXG4gIH0pO1xuXG5jb25zdCBnZXRQcm9maWxlID0gYXN5bmMgKG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zKSA9PlxuICAoYXdhaXQgaHR0cFJlcXVlc3QoeyAuLi5vcHRpb25zLCBob3N0OiBJTURTX0lQLCBwYXRoOiBJTURTX1BBVEggfSkpLnRvU3RyaW5nKCk7XG5cbmNvbnN0IGdldENyZWRlbnRpYWxzRnJvbVByb2ZpbGUgPSBhc3luYyAocHJvZmlsZTogc3RyaW5nLCBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucykgPT4ge1xuICBjb25zdCBjcmVkc1Jlc3BvbnNlID0gSlNPTi5wYXJzZShcbiAgICAoXG4gICAgICBhd2FpdCBodHRwUmVxdWVzdCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGhvc3Q6IElNRFNfSVAsXG4gICAgICAgIHBhdGg6IElNRFNfUEFUSCArIHByb2ZpbGUsXG4gICAgICB9KVxuICAgICkudG9TdHJpbmcoKVxuICApO1xuXG4gIGlmICghaXNJbWRzQ3JlZGVudGlhbHMoY3JlZHNSZXNwb25zZSkpIHtcbiAgICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBpbnN0YW5jZSBtZXRhZGF0YSBzZXJ2aWNlLlwiKTtcbiAgfVxuXG4gIHJldHVybiBmcm9tSW1kc0NyZWRlbnRpYWxzKGNyZWRzUmVzcG9uc2UpO1xufTtcbiJdfQ==