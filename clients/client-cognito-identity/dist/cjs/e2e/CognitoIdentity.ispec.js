"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="mocha" />
/**
 * This is the integration test that make sure the client can make request cross-platform-ly
 * in NodeJS, Chromium and Firefox. This test is written in mocha.
 */
const chai_1 = require("chai");
const index_1 = require("../index");
// There will be default values of defaultRegion, credentials, and isBrowser variable in browser tests.
// Define the values for Node.js tests
const region = globalThis.defaultRegion || ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.AWS_SMOKE_TEST_REGION);
const IdentityPoolId = ((_d = (_c = (_b = globalThis) === null || _b === void 0 ? void 0 : _b.window) === null || _c === void 0 ? void 0 : _c.__env__) === null || _d === void 0 ? void 0 : _d.AWS_SMOKE_TEST_IDENTITY_POOL_ID) ||
    ((_e = process === null || process === void 0 ? void 0 : process.env) === null || _e === void 0 ? void 0 : _e.AWS_SMOKE_TEST_IDENTITY_POOL_ID);
describe("@aws-sdk/client-cognito-identity", function () {
    const unAuthClient = new index_1.CognitoIdentity({
        region,
    });
    it("should successfully fetch Id and get credentials", async () => {
        var _a, _b;
        // Test getId()
        const getIdResult = await unAuthClient.getId({
            IdentityPoolId,
        });
        chai_1.expect(getIdResult.$metadata.httpStatusCode).to.equal(200);
        chai_1.expect(typeof getIdResult.IdentityId).to.equal("string");
        // Test getCredentialsForIdentity() with Id from above
        const getCredentialsResult = await unAuthClient.getCredentialsForIdentity({
            IdentityId: getIdResult.IdentityId,
        });
        chai_1.expect(getCredentialsResult.$metadata.httpStatusCode).to.equal(200);
        chai_1.expect(typeof ((_a = getCredentialsResult.Credentials) === null || _a === void 0 ? void 0 : _a.AccessKeyId)).to.equal("string");
        chai_1.expect(typeof ((_b = getCredentialsResult.Credentials) === null || _b === void 0 ? void 0 : _b.SecretKey)).to.equal("string");
    });
});
//# sourceMappingURL=CognitoIdentity.ispec.js.map