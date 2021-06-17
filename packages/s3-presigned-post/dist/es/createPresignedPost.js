import { __assign, __awaiter, __generator, __read, __spreadArray } from "tslib";
import { createScope, getSigningKey } from "@aws-sdk/signature-v4";
import { formatUrl } from "@aws-sdk/util-format-url";
import { toHex } from "@aws-sdk/util-hex-encoding";
import { ALGORITHM_IDENTIFIER, ALGORITHM_QUERY_PARAM, AMZ_DATE_QUERY_PARAM, CREDENTIAL_QUERY_PARAM, SIGNATURE_QUERY_PARAM, TOKEN_QUERY_PARAM, } from "./constants";
/**
 * Builds the url and the form fields used for a presigned s3 post.
 */
export var createPresignedPost = function (client, _a) {
    var Bucket = _a.Bucket, Key = _a.Key, _b = _a.Conditions, Conditions = _b === void 0 ? [] : _b, _c = _a.Fields, Fields = _c === void 0 ? {} : _c, _d = _a.Expires, Expires = _d === void 0 ? 3600 : _d;
    return __awaiter(void 0, void 0, void 0, function () {
        var _e, systemClockOffset, base64Encoder, utf8Decoder, sha256, now, signingDate, shortDate, clientRegion, credentialScope, clientCredentials, credential, fields, expiration, conditions, encodedPolicy, signingKey, signature, endpoint;
        var _f, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    _e = client.config, systemClockOffset = _e.systemClockOffset, base64Encoder = _e.base64Encoder, utf8Decoder = _e.utf8Decoder, sha256 = _e.sha256;
                    now = new Date(Date.now() + systemClockOffset);
                    signingDate = iso8601(now).replace(/[\-:]/g, "");
                    shortDate = signingDate.substr(0, 8);
                    return [4 /*yield*/, client.config.region()];
                case 1:
                    clientRegion = _j.sent();
                    credentialScope = createScope(shortDate, clientRegion, "s3");
                    return [4 /*yield*/, client.config.credentials()];
                case 2:
                    clientCredentials = _j.sent();
                    credential = clientCredentials.accessKeyId + "/" + credentialScope;
                    fields = __assign(__assign(__assign({}, Fields), (_f = { bucket: Bucket }, _f[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER, _f[CREDENTIAL_QUERY_PARAM] = credential, _f[AMZ_DATE_QUERY_PARAM] = signingDate, _f)), (clientCredentials.sessionToken ? (_g = {}, _g[TOKEN_QUERY_PARAM] = clientCredentials.sessionToken, _g) : {}));
                    expiration = new Date(now.valueOf() + Expires * 1000);
                    conditions = __spreadArray(__spreadArray(__spreadArray([], __read(Conditions)), __read(Object.entries(fields).map(function (_a) {
                        var _b;
                        var _c = __read(_a, 2), k = _c[0], v = _c[1];
                        return (_b = {}, _b[k] = v, _b);
                    }))), [
                        Key.endsWith("${filename}")
                            ? ["starts-with", "$key", Key.substring(0, Key.lastIndexOf("${filename}"))]
                            : { key: Key },
                    ]);
                    encodedPolicy = base64Encoder(utf8Decoder(JSON.stringify({
                        expiration: iso8601(expiration),
                        conditions: conditions,
                    })));
                    return [4 /*yield*/, getSigningKey(sha256, clientCredentials, shortDate, clientRegion, "s3")];
                case 3:
                    signingKey = _j.sent();
                    return [4 /*yield*/, hmac(sha256, signingKey, encodedPolicy)];
                case 4:
                    signature = _j.sent();
                    return [4 /*yield*/, client.config.endpoint()];
                case 5:
                    endpoint = _j.sent();
                    if (!client.config.bucketEndpoint) {
                        endpoint.path = "/" + Bucket;
                    }
                    return [2 /*return*/, {
                            url: formatUrl(endpoint),
                            fields: __assign(__assign({}, fields), (_h = { key: Key, Policy: encodedPolicy }, _h[SIGNATURE_QUERY_PARAM] = toHex(signature), _h)),
                        }];
            }
        });
    });
};
var iso8601 = function (date) { return date.toISOString().replace(/\.\d{3}Z$/, "Z"); };
var hmac = function (ctor, secret, data) {
    var hash = new ctor(secret);
    hash.update(data);
    return hash.digest();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJlc2lnbmVkUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmVhdGVQcmVzaWduZWRQb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIsaUJBQWlCLEdBQ2xCLE1BQU0sYUFBYSxDQUFDO0FBa0JyQjs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLFVBQ2pDLE1BQWdCLEVBQ2hCLEVBQW1GO1FBQWpGLE1BQU0sWUFBQSxFQUFFLEdBQUcsU0FBQSxFQUFFLGtCQUFlLEVBQWYsVUFBVSxtQkFBRyxFQUFFLEtBQUEsRUFBRSxjQUFXLEVBQVgsTUFBTSxtQkFBRyxFQUFFLEtBQUEsRUFBRSxlQUFjLEVBQWQsT0FBTyxtQkFBRyxJQUFJLEtBQUE7Ozs7Ozs7b0JBRXJELEtBQTRELE1BQU0sQ0FBQyxNQUFNLEVBQXZFLGlCQUFpQix1QkFBQSxFQUFFLGFBQWEsbUJBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsTUFBTSxZQUFBLENBQW1CO29CQUMxRSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUM7b0JBRy9DLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDakQsU0FBUyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FB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dkUsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN2QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTM0NsaWVudCB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtczNcIjtcbmltcG9ydCB7IGNyZWF0ZVNjb3BlLCBnZXRTaWduaW5nS2V5IH0gZnJvbSBcIkBhd3Mtc2RrL3NpZ25hdHVyZS12NFwiO1xuaW1wb3J0IHsgSGFzaENvbnN0cnVjdG9yLCBTb3VyY2VEYXRhIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1mb3JtYXQtdXJsXCI7XG5pbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuXG5pbXBvcnQge1xuICBBTEdPUklUSE1fSURFTlRJRklFUixcbiAgQUxHT1JJVEhNX1FVRVJZX1BBUkFNLFxuICBBTVpfREFURV9RVUVSWV9QQVJBTSxcbiAgQ1JFREVOVElBTF9RVUVSWV9QQVJBTSxcbiAgU0lHTkFUVVJFX1FVRVJZX1BBUkFNLFxuICBUT0tFTl9RVUVSWV9QQVJBTSxcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDb25kaXRpb25zIGFzIFBvbGljeUVudHJ5IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxudHlwZSBGaWVsZHMgPSB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByZXNpZ25lZFBvc3RPcHRpb25zIHtcbiAgQnVja2V0OiBzdHJpbmc7XG4gIEtleTogc3RyaW5nO1xuICBDb25kaXRpb25zPzogUG9saWN5RW50cnlbXTtcbiAgRmllbGRzPzogRmllbGRzO1xuICBFeHBpcmVzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZXNpZ25lZFBvc3Qge1xuICB1cmw6IHN0cmluZztcbiAgZmllbGRzOiBGaWVsZHM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSB1cmwgYW5kIHRoZSBmb3JtIGZpZWxkcyB1c2VkIGZvciBhIHByZXNpZ25lZCBzMyBwb3N0LlxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUHJlc2lnbmVkUG9zdCA9IGFzeW5jIChcbiAgY2xpZW50OiBTM0NsaWVudCxcbiAgeyBCdWNrZXQsIEtleSwgQ29uZGl0aW9ucyA9IFtdLCBGaWVsZHMgPSB7fSwgRXhwaXJlcyA9IDM2MDAgfTogUHJlc2lnbmVkUG9zdE9wdGlvbnNcbik6IFByb21pc2U8UHJlc2lnbmVkUG9zdD4gPT4ge1xuICBjb25zdCB7IHN5c3RlbUNsb2NrT2Zmc2V0LCBiYXNlNjRFbmNvZGVyLCB1dGY4RGVjb2Rlciwgc2hhMjU2IH0gPSBjbGllbnQuY29uZmlnO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgc3lzdGVtQ2xvY2tPZmZzZXQpO1xuXG4gIC8vIHNpZ25pbmdEYXRlIGluIGZvcm1hdCBsaWtlICcyMDIwMTAyOFQwNzA3MTFaJy5cbiAgY29uc3Qgc2lnbmluZ0RhdGUgPSBpc284NjAxKG5vdykucmVwbGFjZSgvW1xcLTpdL2csIFwiXCIpO1xuICBjb25zdCBzaG9ydERhdGUgPSBzaWduaW5nRGF0ZS5zdWJzdHIoMCwgOCk7XG4gIGNvbnN0IGNsaWVudFJlZ2lvbiA9IGF3YWl0IGNsaWVudC5jb25maWcucmVnaW9uKCk7XG5cbiAgLy8gUHJlcGFyZSBjcmVkZW50aWFscy5cbiAgY29uc3QgY3JlZGVudGlhbFNjb3BlID0gY3JlYXRlU2NvcGUoc2hvcnREYXRlLCBjbGllbnRSZWdpb24sIFwiczNcIik7XG4gIGNvbnN0IGNsaWVudENyZWRlbnRpYWxzID0gYXdhaXQgY2xpZW50LmNvbmZpZy5jcmVkZW50aWFscygpO1xuICBjb25zdCBjcmVkZW50aWFsID0gYCR7Y2xpZW50Q3JlZGVudGlhbHMuYWNjZXNzS2V5SWR9LyR7Y3JlZGVudGlhbFNjb3BlfWA7XG5cbiAgY29uc3QgZmllbGRzOiBGaWVsZHMgPSB7XG4gICAgLi4uRmllbGRzLFxuICAgIGJ1Y2tldDogQnVja2V0LFxuICAgIFtBTEdPUklUSE1fUVVFUllfUEFSQU1dOiBBTEdPUklUSE1fSURFTlRJRklFUixcbiAgICBbQ1JFREVOVElBTF9RVUVSWV9QQVJBTV06IGNyZWRlbnRpYWwsXG4gICAgW0FNWl9EQVRFX1FVRVJZX1BBUkFNXTogc2lnbmluZ0RhdGUsXG4gICAgLi4uKGNsaWVudENyZWRlbnRpYWxzLnNlc3Npb25Ub2tlbiA/IHsgW1RPS0VOX1FVRVJZX1BBUkFNXTogY2xpZW50Q3JlZGVudGlhbHMuc2Vzc2lvblRva2VuIH0gOiB7fSksXG4gIH07XG5cbiAgLy8gUHJlcGFyZSBwb2xpY2llcy5cbiAgY29uc3QgZXhwaXJhdGlvbiA9IG5ldyBEYXRlKG5vdy52YWx1ZU9mKCkgKyBFeHBpcmVzICogMTAwMCk7XG4gIGNvbnN0IGNvbmRpdGlvbnM6IFBvbGljeUVudHJ5W10gPSBbXG4gICAgLi4uQ29uZGl0aW9ucyxcbiAgICAuLi5PYmplY3QuZW50cmllcyhmaWVsZHMpLm1hcCgoW2ssIHZdKSA9PiAoeyBba106IHYgfSkpLFxuICAgIEtleS5lbmRzV2l0aChcIiR7ZmlsZW5hbWV9XCIpXG4gICAgICA/IFtcInN0YXJ0cy13aXRoXCIsIFwiJGtleVwiLCBLZXkuc3Vic3RyaW5nKDAsIEtleS5sYXN0SW5kZXhPZihcIiR7ZmlsZW5hbWV9XCIpKV1cbiAgICAgIDogeyBrZXk6IEtleSB9LFxuICBdO1xuICBjb25zdCBlbmNvZGVkUG9saWN5ID0gYmFzZTY0RW5jb2RlcihcbiAgICB1dGY4RGVjb2RlcihcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZXhwaXJhdGlvbjogaXNvODYwMShleHBpcmF0aW9uKSxcbiAgICAgICAgY29uZGl0aW9ucyxcbiAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIC8vIFNpZ24gdGhlIHJlcXVlc3QuXG4gIGNvbnN0IHNpZ25pbmdLZXkgPSBhd2FpdCBnZXRTaWduaW5nS2V5KHNoYTI1NiwgY2xpZW50Q3JlZGVudGlhbHMsIHNob3J0RGF0ZSwgY2xpZW50UmVnaW9uLCBcInMzXCIpO1xuICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBobWFjKHNoYTI1Niwgc2lnbmluZ0tleSwgZW5jb2RlZFBvbGljeSk7XG5cbiAgY29uc3QgZW5kcG9pbnQgPSBhd2FpdCBjbGllbnQuY29uZmlnLmVuZHBvaW50KCk7XG4gIGlmICghY2xpZW50LmNvbmZpZy5idWNrZXRFbmRwb2ludCkge1xuICAgIGVuZHBvaW50LnBhdGggPSBgLyR7QnVja2V0fWA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVybDogZm9ybWF0VXJsKGVuZHBvaW50KSxcbiAgICBmaWVsZHM6IHtcbiAgICAgIC4uLmZpZWxkcyxcbiAgICAgIGtleTogS2V5LFxuICAgICAgUG9saWN5OiBlbmNvZGVkUG9saWN5LFxuICAgICAgW1NJR05BVFVSRV9RVUVSWV9QQVJBTV06IHRvSGV4KHNpZ25hdHVyZSksXG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IGlzbzg2MDEgPSAoZGF0ZTogRGF0ZSkgPT4gZGF0ZS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfVokLywgXCJaXCIpO1xuXG5jb25zdCBobWFjID0gKGN0b3I6IEhhc2hDb25zdHJ1Y3Rvciwgc2VjcmV0OiBTb3VyY2VEYXRhLCBkYXRhOiBTb3VyY2VEYXRhKTogUHJvbWlzZTxVaW50OEFycmF5PiA9PiB7XG4gIGNvbnN0IGhhc2ggPSBuZXcgY3RvcihzZWNyZXQpO1xuICBoYXNoLnVwZGF0ZShkYXRhKTtcbiAgcmV0dXJuIGhhc2guZGlnZXN0KCk7XG59O1xuIl19