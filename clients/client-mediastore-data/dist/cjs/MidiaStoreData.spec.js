"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="mocha" />
const chai_1 = require("chai");
const MediaStoreData_1 = require("./MediaStoreData");
describe("@aws-sdk/client-mediastore-data", () => {
    describe("PutObject", () => {
        it("should contain correct x-amz-content-sha256 header", async () => {
            const validator = (next) => (args) => {
                // middleware intercept the request and return it early
                const request = args.request;
                chai_1.expect(request.headers).to.have.property("x-amz-content-sha256", "UNSIGNED-PAYLOAD");
                return Promise.resolve({ output: {}, response: {} });
            };
            const client = new MediaStoreData_1.MediaStoreData({
                region: "us-west-2",
            });
            client.middlewareStack.add(validator, {
                step: "serialize",
                name: "endpointValidator",
                priority: "low",
            });
            return await client.putObject({
                Path: "foo.avi",
                Body: "binary body",
            });
        });
    });
});
//# sourceMappingURL=MidiaStoreData.spec.js.map