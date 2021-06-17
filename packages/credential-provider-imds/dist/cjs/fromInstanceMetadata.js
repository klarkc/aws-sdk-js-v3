"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromInstanceMetadata = void 0;
const property_provider_1 = require("@aws-sdk/property-provider");
const httpRequest_1 = require("./remoteProvider/httpRequest");
const ImdsCredentials_1 = require("./remoteProvider/ImdsCredentials");
const RemoteProviderInit_1 = require("./remoteProvider/RemoteProviderInit");
const retry_1 = require("./remoteProvider/retry");
const IMDS_IP = "169.254.169.254";
const IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
const IMDS_TOKEN_PATH = "/latest/api/token";
/**
 * Creates a credential provider that will source credentials from the EC2
 * Instance Metadata Service
 */
const fromInstanceMetadata = (init = {}) => {
    // when set to true, metadata service will not fetch token
    let disableFetchToken = false;
    const { timeout, maxRetries } = RemoteProviderInit_1.providerConfigFromInit(init);
    const getCredentials = async (maxRetries, options) => {
        const profile = (await retry_1.retry(async () => {
            let profile;
            try {
                profile = await getProfile(options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return profile;
        }, maxRetries)).trim();
        return retry_1.retry(async () => {
            let creds;
            try {
                creds = await getCredentialsFromProfile(profile, options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return creds;
        }, maxRetries);
    };
    return async () => {
        if (disableFetchToken) {
            return getCredentials(maxRetries, { timeout });
        }
        else {
            let token;
            try {
                token = (await getMetadataToken({ timeout })).toString();
            }
            catch (error) {
                if ((error === null || error === void 0 ? void 0 : error.statusCode) === 400) {
                    throw Object.assign(error, {
                        message: "EC2 Metadata token request returned error",
                    });
                }
                else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
                    disableFetchToken = true;
                }
                return getCredentials(maxRetries, { timeout });
            }
            return getCredentials(maxRetries, {
                timeout,
                headers: {
                    "x-aws-ec2-metadata-token": token,
                },
            });
        }
    };
};
exports.fromInstanceMetadata = fromInstanceMetadata;
const getMetadataToken = async (options) => httpRequest_1.httpRequest({
    ...options,
    host: IMDS_IP,
    path: IMDS_TOKEN_PATH,
    method: "PUT",
    headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600",
    },
});
const getProfile = async (options) => (await httpRequest_1.httpRequest({ ...options, host: IMDS_IP, path: IMDS_PATH })).toString();
const getCredentialsFromProfile = async (profile, options) => {
    const credsResponse = JSON.parse((await httpRequest_1.httpRequest({
        ...options,
        host: IMDS_IP,
        path: IMDS_PATH + profile,
    })).toString());
    if (!ImdsCredentials_1.isImdsCredentials(credsResponse)) {
        throw new property_provider_1.ProviderError("Invalid response received from instance metadata service.");
    }
    return ImdsCredentials_1.fromImdsCredentials(credsResponse);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbUluc3RhbmNlTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnJvbUluc3RhbmNlTWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0VBQTJEO0FBSTNELDhEQUEyRDtBQUMzRCxzRUFBMEY7QUFDMUYsNEVBQWlHO0FBQ2pHLGtEQUErQztBQUUvQyxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztBQUNsQyxNQUFNLFNBQVMsR0FBRyw2Q0FBNkMsQ0FBQztBQUNoRSxNQUFNLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQztBQUU1Qzs7O0dBR0c7QUFDSSxNQUFNLG9CQUFvQixHQUFHLENBQUMsT0FBMkIsRUFBRSxFQUFzQixFQUFFO0lBQ3hGLDBEQUEwRDtJQUMxRCxJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUM5QixNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLDJDQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdELE1BQU0sY0FBYyxHQUFHLEtBQUssRUFBRSxVQUFrQixFQUFFLE9BQXVCLEVBQUUsRUFBRTtRQUMzRSxNQUFNLE9BQU8sR0FBRyxDQUNkLE1BQU0sYUFBSyxDQUFTLEtBQUssSUFBSSxFQUFFO1lBQzdCLElBQUksT0FBZSxDQUFDO1lBQ3BCLElBQUk7Z0JBQ0YsT0FBTyxHQUFHLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtvQkFDMUIsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2lCQUMzQjtnQkFDRCxNQUFNLEdBQUcsQ0FBQzthQUNYO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUNmLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFVCxPQUFPLGFBQUssQ0FBQyxLQUFLLElBQUksRUFB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NUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAYXdzLXNkay9wcm9wZXJ0eS1wcm92aWRlclwiO1xuaW1wb3J0IHsgQ3JlZGVudGlhbFByb3ZpZGVyLCBDcmVkZW50aWFscyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwic3RyZWFtLWh0dHBcIjtcblxuaW1wb3J0IHsgaHR0cFJlcXVlc3QgfSBmcm9tIFwiLi9yZW1vdGVQcm92aWRlci9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IHsgZnJvbUltZHNDcmVkZW50aWFscywgaXNJbWRzQ3JlZGVudGlhbHMgfSBmcm9tIFwiLi9yZW1vdGVQcm92aWRlci9JbWRzQ3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IHByb3ZpZGVyQ29uZmlnRnJvbUluaXQsIFJlbW90ZVByb3ZpZGVySW5pdCB9IGZyb20gXCIuL3JlbW90ZVByb3ZpZGVyL1JlbW90ZVByb3ZpZGVySW5pdFwiO1xuaW1wb3J0IHsgcmV0cnkgfSBmcm9tIFwiLi9yZW1vdGVQcm92aWRlci9yZXRyeVwiO1xuXG5jb25zdCBJTURTX0lQID0gXCIxNjkuMjU0LjE2OS4yNTRcIjtcbmNvbnN0IElNRFNfUEFUSCA9IFwiL2xhdGVzdC9tZXRhLWRhdGEvaWFtL3NlY3VyaXR5LWNyZWRlbnRpYWxzL1wiO1xuY29uc3QgSU1EU19UT0tFTl9QQVRIID0gXCIvbGF0ZXN0L2FwaS90b2tlblwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjcmVkZW50aWFsIHByb3ZpZGVyIHRoYXQgd2lsbCBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbSB0aGUgRUMyXG4gKiBJbnN0YW5jZSBNZXRhZGF0YSBTZXJ2aWNlXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tSW5zdGFuY2VNZXRhZGF0YSA9IChpbml0OiBSZW1vdGVQcm92aWRlckluaXQgPSB7fSk6IENyZWRlbnRpYWxQcm92aWRlciA9PiB7XG4gIC8vIHdoZW4gc2V0IHRvIHRydWUsIG1ldGFkYXRhIHNlcnZpY2Ugd2lsbCBub3QgZmV0Y2ggdG9rZW5cbiAgbGV0IGRpc2FibGVGZXRjaFRva2VuID0gZmFsc2U7XG4gIGNvbnN0IHsgdGltZW91dCwgbWF4UmV0cmllcyB9ID0gcHJvdmlkZXJDb25maWdGcm9tSW5pdChpbml0KTtcblxuICBjb25zdCBnZXRDcmVkZW50aWFscyA9IGFzeW5jIChtYXhSZXRyaWVzOiBudW1iZXIsIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgcHJvZmlsZSA9IChcbiAgICAgIGF3YWl0IHJldHJ5PHN0cmluZz4oYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgcHJvZmlsZTogc3RyaW5nO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHByb2ZpbGUgPSBhd2FpdCBnZXRQcm9maWxlKG9wdGlvbnMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyLnN0YXR1c0NvZGUgPT09IDQwMSkge1xuICAgICAgICAgICAgZGlzYWJsZUZldGNoVG9rZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9maWxlO1xuICAgICAgfSwgbWF4UmV0cmllcylcbiAgICApLnRyaW0oKTtcblxuICAgIHJldHVybiByZXRyeShhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgY3JlZHM6IENyZWRlbnRpYWxzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY3JlZHMgPSBhd2FpdCBnZXRDcmVkZW50aWFsc0Zyb21Qcm9maWxlKHByb2ZpbGUsIG9wdGlvbnMpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIuc3RhdHVzQ29kZSA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzYWJsZUZldGNoVG9rZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlZHM7XG4gICAgfSwgbWF4UmV0cmllcyk7XG4gIH07XG5cbiAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICBpZiAoZGlzYWJsZUZldGNoVG9rZW4pIHtcbiAgICAgIHJldHVybiBnZXRDcmVkZW50aWFscyhtYXhSZXRyaWVzLCB7IHRpbWVvdXQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b2tlbjogc3RyaW5nO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdG9rZW4gPSAoYXdhaXQgZ2V0TWV0YWRhdGFUb2tlbih7IHRpbWVvdXQgfSkpLnRvU3RyaW5nKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3I/LnN0YXR1c0NvZGUgPT09IDQwMCkge1xuICAgICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oZXJyb3IsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRUMyIE1ldGFkYXRhIHRva2VuIHJlcXVlc3QgcmV0dXJuZWQgZXJyb3JcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChlcnJvci5tZXNzYWdlID09PSBcIlRpbWVvdXRFcnJvclwiIHx8IFs0MDMsIDQwNCwgNDA1XS5pbmNsdWRlcyhlcnJvci5zdGF0dXNDb2RlKSkge1xuICAgICAgICAgIGRpc2FibGVGZXRjaFRva2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0Q3JlZGVudGlhbHMobWF4UmV0cmllcywgeyB0aW1lb3V0IH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdldENyZWRlbnRpYWxzKG1heFJldHJpZXMsIHtcbiAgICAgICAgdGltZW91dCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwieC1hd3MtZWMyLW1ldGFkYXRhLXRva2VuXCI6IHRva2VuLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgZ2V0TWV0YWRhdGFUb2tlbiA9IGFzeW5jIChvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucykgPT5cbiAgaHR0cFJlcXVlc3Qoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgaG9zdDogSU1EU19JUCxcbiAgICBwYXRoOiBJTURTX1RPS0VOX1BBVEgsXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwieC1hd3MtZWMyLW1ldGFkYXRhLXRva2VuLXR0bC1zZWNvbmRzXCI6IFwiMjE2MDBcIixcbiAgICB9LFxuICB9KTtcblxuY29uc3QgZ2V0UHJvZmlsZSA9IGFzeW5jIChvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucykgPT5cbiAgKGF3YWl0IGh0dHBSZXF1ZXN0KHsgLi4ub3B0aW9ucywgaG9zdDogSU1EU19JUCwgcGF0aDogSU1EU19QQVRIIH0pKS50b1N0cmluZygpO1xuXG5jb25zdCBnZXRDcmVkZW50aWFsc0Zyb21Qcm9maWxlID0gYXN5bmMgKHByb2ZpbGU6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdE9wdGlvbnMpID0+IHtcbiAgY29uc3QgY3JlZHNSZXNwb25zZSA9IEpTT04ucGFyc2UoXG4gICAgKFxuICAgICAgYXdhaXQgaHR0cFJlcXVlc3Qoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBob3N0OiBJTURTX0lQLFxuICAgICAgICBwYXRoOiBJTURTX1BBVEggKyBwcm9maWxlLFxuICAgICAgfSlcbiAgICApLnRvU3RyaW5nKClcbiAgKTtcblxuICBpZiAoIWlzSW1kc0NyZWRlbnRpYWxzKGNyZWRzUmVzcG9uc2UpKSB7XG4gICAgdGhyb3cgbmV3IFByb3ZpZGVyRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIHJlY2VpdmVkIGZyb20gaW5zdGFuY2UgbWV0YWRhdGEgc2VydmljZS5cIik7XG4gIH1cblxuICByZXR1cm4gZnJvbUltZHNDcmVkZW50aWFscyhjcmVkc1Jlc3BvbnNlKTtcbn07XG4iXX0=