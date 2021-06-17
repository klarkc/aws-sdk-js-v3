import { __assign, __awaiter, __generator } from "tslib";
import { fromWebToken } from "@aws-sdk/credential-provider-web-identity";
import { ProviderError } from "@aws-sdk/property-provider";
import { readFileSync } from "fs";
var ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
var ENV_ROLE_ARN = "AWS_ROLE_ARN";
var ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
/**
 * Represents OIDC credentials from a file on disk.
 */
export var fromTokenFile = function (init) {
    if (init === void 0) { init = {}; }
    return function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, resolveTokenFile(init)];
        });
    }); };
};
var resolveTokenFile = function (init) {
    var _a, _b, _c;
    var webIdentityTokenFile = (_a = init === null || init === void 0 ? void 0 : init.webIdentityTokenFile) !== null && _a !== void 0 ? _a : process.env[ENV_TOKEN_FILE];
    var roleArn = (_b = init === null || init === void 0 ? void 0 : init.roleArn) !== null && _b !== void 0 ? _b : process.env[ENV_ROLE_ARN];
    var roleSessionName = (_c = init === null || init === void 0 ? void 0 : init.roleSessionName) !== null && _c !== void 0 ? _c : process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new ProviderError("Web identity configuration not specified");
    }
    return fromWebToken(__assign(__assign({}, init), { webIdentityToken: readFileSync(webIdentityTokenFile, { encoding: "ascii" }), roleArn: roleArn,
        roleSessionName: roleSessionName }))();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbVRva2VuRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcm9tVG9rZW5GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFvQixNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBRWxDLElBQU0sY0FBYyxHQUFHLDZCQUE2QixDQUFDO0FBQ3JELElBQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQztBQUNwQyxJQUFNLHFCQUFxQixHQUFHLHVCQUF1QixDQUFDO0FBU3REOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUN4QixVQUFDLElBQTRCO0lBQTVCLHFCQUFBLEVBQUEsU0FBNEI7SUFDN0IsT0FBQTs7WUFDRSxzQkFBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQzs7U0FDL0I7QUFGRCxDQUVDLENBQUM7QUFFSixJQUFNLGdCQUFnQixHQUFHLFVBQUMsSUFBd0I7O0lBQ2hELElBQU0sb0JBQW9CLEdBQUcsTUFBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsb0JBQW9CLG1DQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkYsSUFBTSxPQUFPLEdBQUcsTUFBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsT0FBTyxtQ0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNELElBQU0sZUFBZSxHQUFHLE1BQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGVBQWUsbUNBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRXBGLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNyQyxNQUFNLElBQUksYUFBYSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7S0FDckU7SUFFRCxPQUFPLFlBQVksdUJBQ2QsSUFBSSxLQUNQLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUMzRSxPQUFPLFNBQUE7UUFDUCxlQUFlLGlCQUFBLElBQ2YsRUFBRSxDQUFDO0FBQ1AsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbVdlYlRva2VuLCBGcm9tV2ViVG9rZW5Jbml0IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItd2ViLWlkZW50aXR5XCI7XG5pbXBvcnQgeyBQcm92aWRlckVycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFsUHJvdmlkZXIsIENyZWRlbnRpYWxzIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcblxuY29uc3QgRU5WX1RPS0VOX0ZJTEUgPSBcIkFXU19XRUJfSURFTlRJVFlfVE9LRU5fRklMRVwiO1xuY29uc3QgRU5WX1JPTEVfQVJOID0gXCJBV1NfUk9MRV9BUk5cIjtcbmNvbnN0IEVOVl9ST0xFX1NFU1NJT05fTkFNRSA9IFwiQVdTX1JPTEVfU0VTU0lPTl9OQU1FXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnJvbVRva2VuRmlsZUluaXQgZXh0ZW5kcyBQYXJ0aWFsPE9taXQ8RnJvbVdlYlRva2VuSW5pdCwgXCJ3ZWJJZGVudGl0eVRva2VuXCI+PiB7XG4gIC8qKlxuICAgKiBGaWxlIGxvY2F0aW9uIG9mIHdoZXJlIHRoZSBgT0lEQ2AgdG9rZW4gaXMgc3RvcmVkLlxuICAgKi9cbiAgd2ViSWRlbnRpdHlUb2tlbkZpbGU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBPSURDIGNyZWRlbnRpYWxzIGZyb20gYSBmaWxlIG9uIGRpc2suXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tVG9rZW5GaWxlID1cbiAgKGluaXQ6IEZyb21Ub2tlbkZpbGVJbml0ID0ge30pOiBDcmVkZW50aWFsUHJvdmlkZXIgPT5cbiAgYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiByZXNvbHZlVG9rZW5GaWxlKGluaXQpO1xuICB9O1xuXG5jb25zdCByZXNvbHZlVG9rZW5GaWxlID0gKGluaXQ/OiBGcm9tVG9rZW5GaWxlSW5pdCk6IFByb21pc2U8Q3JlZGVudGlhbHM+ID0+IHtcbiAgY29uc3Qgd2ViSWRlbnRpdHlUb2tlbkZpbGUgPSBpbml0Py53ZWJJZGVudGl0eVRva2VuRmlsZSA/PyBwcm9jZXNzLmVudltFTlZfVE9LRU5fRklMRV07XG4gIGNvbnN0IHJvbGVBcm4gPSBpbml0Py5yb2xlQXJuID8/IHByb2Nlc3MuZW52W0VOVl9ST0xFX0FSTl07XG4gIGNvbnN0IHJvbGVTZXNzaW9uTmFtZSA9IGluaXQ/LnJvbGVTZXNzaW9uTmFtZSA/PyBwcm9jZXNzLmVudltFTlZfUk9MRV9TRVNTSU9OX05BTUVdO1xuXG4gIGlmICghd2ViSWRlbnRpdHlUb2tlbkZpbGUgfHwgIXJvbGVBcm4pIHtcbiAgICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihcIldlYiBpZGVudGl0eSBjb25maWd1cmF0aW9uIG5vdCBzcGVjaWZpZWRcIik7XG4gIH1cblxuICByZXR1cm4gZnJvbVdlYlRva2VuKHtcbiAgICAuLi5pbml0LFxuICAgIHdlYklkZW50aXR5VG9rZW46IHJlYWRGaWxlU3luYyh3ZWJJZGVudGl0eVRva2VuRmlsZSwgeyBlbmNvZGluZzogXCJhc2NpaVwiIH0pLFxuICAgIHJvbGVBcm4sXG4gICAgcm9sZVNlc3Npb25OYW1lLFxuICB9KSgpO1xufTtcbiJdfQ==