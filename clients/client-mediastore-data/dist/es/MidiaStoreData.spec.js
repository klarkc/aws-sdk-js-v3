import { __awaiter, __generator } from "tslib";
/// <reference types="mocha" />
import { expect } from "chai";
import { MediaStoreData } from "./MediaStoreData";
describe("@aws-sdk/client-mediastore-data", function () {
    describe("PutObject", function () {
        it("should contain correct x-amz-content-sha256 header", function () { return __awaiter(void 0, void 0, void 0, function () {
            var validator, client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validator = function (next) { return function (args) {
                            // middleware intercept the request and return it early
                            var request = args.request;
                            expect(request.headers).to.have.property("x-amz-content-sha256", "UNSIGNED-PAYLOAD");
                            return Promise.resolve({ output: {}, response: {} });
                        }; };
                        client = new MediaStoreData({
                            region: "us-west-2",
                        });
                        client.middlewareStack.add(validator, {
                            step: "serialize",
                            name: "endpointValidator",
                            priority: "low",
                        });
                        return [4 /*yield*/, client.putObject({
                                Path: "foo.avi",
                                Body: "binary body",
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
    });
});
//# sourceMappingURL=MidiaStoreData.spec.js.map