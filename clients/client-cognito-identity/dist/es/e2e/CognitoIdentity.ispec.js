var _a, _b, _c, _d, _e;
import { __awaiter, __generator } from "tslib";
/// <reference types="mocha" />
/**
 * This is the integration test that make sure the client can make request cross-platform-ly
 * in NodeJS, Chromium and Firefox. This test is written in mocha.
 */
import { expect } from "chai";
import { CognitoIdentity } from "../index";
// There will be default values of defaultRegion, credentials, and isBrowser variable in browser tests.
// Define the values for Node.js tests
var region = globalThis.defaultRegion || ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.AWS_SMOKE_TEST_REGION);
var IdentityPoolId = ((_d = (_c = (_b = globalThis) === null || _b === void 0 ? void 0 : _b.window) === null || _c === void 0 ? void 0 : _c.__env__) === null || _d === void 0 ? void 0 : _d.AWS_SMOKE_TEST_IDENTITY_POOL_ID) ||
    ((_e = process === null || process === void 0 ? void 0 : process.env) === null || _e === void 0 ? void 0 : _e.AWS_SMOKE_TEST_IDENTITY_POOL_ID);
describe("@aws-sdk/client-cognito-identity", function () {
    var _this = this;
    var unAuthClient = new CognitoIdentity({
        region: region,
    });
    it("should successfully fetch Id and get credentials", function () { return __awaiter(_this, void 0, void 0, function () {
        var getIdResult, getCredentialsResult;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, unAuthClient.getId({
                        IdentityPoolId: IdentityPoolId,
                    })];
                case 1:
                    getIdResult = _c.sent();
                    expect(getIdResult.$metadata.httpStatusCode).to.equal(200);
                    expect(typeof getIdResult.IdentityId).to.equal("string");
                    return [4 /*yield*/, unAuthClient.getCredentialsForIdentity({
                            IdentityId: getIdResult.IdentityId,
                        })];
                case 2:
                    getCredentialsResult = _c.sent();
                    expect(getCredentialsResult.$metadata.httpStatusCode).to.equal(200);
                    expect(typeof ((_a = getCredentialsResult.Credentials) === null || _a === void 0 ? void 0 : _a.AccessKeyId)).to.equal("string");
                    expect(typeof ((_b = getCredentialsResult.Credentials) === null || _b === void 0 ? void 0 : _b.SecretKey)).to.equal("string");
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=CognitoIdentity.ispec.js.map