"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromTokenFile = void 0;
const credential_provider_web_identity_1 = require("@aws-sdk/credential-provider-web-identity");
const property_provider_1 = require("@aws-sdk/property-provider");
const fs_1 = require("fs");
const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
/**
 * Represents OIDC credentials from a file on disk.
 */
const fromTokenFile = (init = {}) => async () => {
    return resolveTokenFile(init);
};
exports.fromTokenFile = fromTokenFile;
const resolveTokenFile = (init) => {
    var _a, _b, _c;
    const webIdentityTokenFile = (_a = init === null || init === void 0 ? void 0 : init.webIdentityTokenFile) !== null && _a !== void 0 ? _a : process.env[ENV_TOKEN_FILE];
    const roleArn = (_b = init === null || init === void 0 ? void 0 : init.roleArn) !== null && _b !== void 0 ? _b : process.env[ENV_ROLE_ARN];
    const roleSessionName = (_c = init === null || init === void 0 ? void 0 : init.roleSessionName) !== null && _c !== void 0 ? _c : process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new property_provider_1.ProviderError("Web identity configuration not specified");
    }
    return credential_provider_web_identity_1.fromWebToken({
        ...init,
        webIdentityToken: fs_1.readFileSync(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName,
    })();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbVRva2VuRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcm9tVG9rZW5GaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdHQUEyRjtBQUMzRixrRUFBMkQ7QUFFM0QsMkJBQWtDO0FBRWxDLE1BQU0sY0FBYyxHQUFHLDZCQUE2QixDQUFDO0FBQ3JELE1BQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQztBQUNwQyxNQUFNLHFCQUFxQixHQUFHLHVCQUF1QixDQUFDO0FBU3REOztHQUVHO0FBQ0ksTUFBTSxhQUFhLEdBQ3hCLENBQUMsT0FBMEIsRUFBRSxFQUFzQixFQUFFLENBQ3JELEtBQUssSUFBSSxFQUFFO0lBQ1QsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFKUyxRQUFBLGFBQWEsaUJBSXRCO0FBRUosTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLElBQXdCLEVBQXdCLEVBQUU7O0lBQzFFLE1BQU0sb0JBQW9CLEdBQUcsTUFBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsb0JBQW9CLG1DQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkYsTUFBTSxPQUFPLEdBQUcsTUFBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsT0FBTyxtQ0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNELE1BQU0sZUFBZSxHQUFHLE1BQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGVBQWUsbUNBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRXBGLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNyQyxNQUFNLElBQUksaUNBQWEsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0tBQ3JFO0lBRUQsT0FBTywrQ0FBWSxDQUFDO1FBQ2xCLEdBQUcsSUFBSTtRQUNQLGdCQUFnQixFQUFFLGlCQUFZLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDM0UsT0FBTztRQUNQLGVBQWU7S0FDaEIsQ0FBQyxFQUFFLENBQUM7QUFDUCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tV2ViVG9rZW4sIEZyb21XZWJUb2tlbkluaXQgfSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci13ZWItaWRlbnRpdHlcIjtcbmltcG9ydCB7IFByb3ZpZGVyRXJyb3IgfSBmcm9tIFwiQGF3cy1zZGsvcHJvcGVydHktcHJvdmlkZXJcIjtcbmltcG9ydCB7IENyZWRlbnRpYWxQcm92aWRlciwgQ3JlZGVudGlhbHMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xuXG5jb25zdCBFTlZfVE9LRU5fRklMRSA9IFwiQVdTX1dFQl9JREVOVElUWV9UT0tFTl9GSUxFXCI7XG5jb25zdCBFTlZfUk9MRV9BUk4gPSBcIkFXU19ST0xFX0FSTlwiO1xuY29uc3QgRU5WX1JPTEVfU0VTU0lPTl9OQU1FID0gXCJBV1NfUk9MRV9TRVNTSU9OX05BTUVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGcm9tVG9rZW5GaWxlSW5pdCBleHRlbmRzIFBhcnRpYWw8T21pdDxGcm9tV2ViVG9rZW5Jbml0LCBcIndlYklkZW50aXR5VG9rZW5cIj4+IHtcbiAgLyoqXG4gICAqIEZpbGUgbG9jYXRpb24gb2Ygd2hlcmUgdGhlIGBPSURDYCB0b2tlbiBpcyBzdG9yZWQuXG4gICAqL1xuICB3ZWJJZGVudGl0eVRva2VuRmlsZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIE9JREMgY3JlZGVudGlhbHMgZnJvbSBhIGZpbGUgb24gZGlzay5cbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21Ub2tlbkZpbGUgPVxuICAoaW5pdDogRnJvbVRva2VuRmlsZUluaXQgPSB7fSk6IENyZWRlbnRpYWxQcm92aWRlciA9PlxuICBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIHJlc29sdmVUb2tlbkZpbGUoaW5pdCk7XG4gIH07XG5cbmNvbnN0IHJlc29sdmVUb2tlbkZpbGUgPSAoaW5pdD86IEZyb21Ub2tlbkZpbGVJbml0KTogUHJvbWlzZTxDcmVkZW50aWFscz4gPT4ge1xuICBjb25zdCB3ZWJJZGVudGl0eVRva2VuRmlsZSA9IGluaXQ/LndlYklkZW50aXR5VG9rZW5GaWxlID8/IHByb2Nlc3MuZW52W0VOVl9UT0tFTl9GSUxFXTtcbiAgY29uc3Qgcm9sZUFybiA9IGluaXQ/LnJvbGVBcm4gPz8gcHJvY2Vzcy5lbnZbRU5WX1JPTEVfQVJOXTtcbiAgY29uc3Qgcm9sZVNlc3Npb25OYW1lID0gaW5pdD8ucm9sZVNlc3Npb25OYW1lID8/IHByb2Nlc3MuZW52W0VOVl9ST0xFX1NFU1NJT05fTkFNRV07XG5cbiAgaWYgKCF3ZWJJZGVudGl0eVRva2VuRmlsZSB8fCAhcm9sZUFybikge1xuICAgIHRocm93IG5ldyBQcm92aWRlckVycm9yKFwiV2ViIGlkZW50aXR5IGNvbmZpZ3VyYXRpb24gbm90IHNwZWNpZmllZFwiKTtcbiAgfVxuXG4gIHJldHVybiBmcm9tV2ViVG9rZW4oe1xuICAgIC4uLmluaXQsXG4gICAgd2ViSWRlbnRpdHlUb2tlbjogcmVhZEZpbGVTeW5jKHdlYklkZW50aXR5VG9rZW5GaWxlLCB7IGVuY29kaW5nOiBcImFzY2lpXCIgfSksXG4gICAgcm9sZUFybixcbiAgICByb2xlU2Vzc2lvbk5hbWUsXG4gIH0pKCk7XG59O1xuIl19