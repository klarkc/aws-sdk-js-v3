import { __awaiter, __generator } from "tslib";
/// <reference types="mocha" />
import { expect } from "chai";
import { S3Control } from "./S3Control";
describe("S3Control Client", function () {
    // Middleware intercept request and return it before reaching the HTTP client. It records the request and context
    // and return them in the Metadata.
    var interceptionMiddleware = function (next, context) { return function (args) {
        return Promise.resolve({ output: { $metadata: { request: args.request } }, response: "" });
    }; };
    var region = "us-east-1";
    var credentials = { accessKeyId: "AKID", secretAccessKey: "SECRET" };
    var s3Control = new S3Control({ region: region, credentials: credentials });
    s3Control.middlewareStack.add(interceptionMiddleware, { step: "finalizeRequest", name: "interceptionMiddleware" });
    var HEADER_OUTPOST_ID = "x-amz-outpost-id";
    var HEADER_ACCOUNT_ID = "x-amz-account-id";
    var dateStr = new Date().toISOString().substr(0, 10).replace(/[\-:]/g, "");
    describe("CreateBucket", function () {
        it("should populate correct endpoint and signing region", function () { return __awaiter(void 0, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, s3Control.createBucket({ Bucket: "Bucket" })];
                    case 1:
                        request = (_a.sent()).$metadata.request;
                        expect(request.hostname).eql("s3-control." + region + ".amazonaws.com");
                        expect(request.headers["authorization"]).contains("Credential=" + credentials.accessKeyId + "/" + dateStr + "/" + region + "/s3/aws4_request");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should populate correct endpoint and signing region if OutpostId is supplied", function () { return __awaiter(void 0, void 0, void 0, function () {
            var OutpostId, request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        OutpostId = "123456789012";
                        return [4 /*yield*/, s3Control.createBucket({ Bucket: "Bucket", OutpostId: OutpostId })];
                    case 1:
                        request = (_a.sent()).$metadata.request;
                        expect(request.hostname).eql("s3-outposts." + region + ".amazonaws.com");
                        expect(request.headers[HEADER_OUTPOST_ID]).eql(OutpostId);
                        expect(request.headers["authorization"]).contains("Credential=" + credentials.accessKeyId + "/" + dateStr + "/" + region + "/s3-outposts/aws4_request");
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("ListRegionalBuckets", function () {
        var AccountId = "123456789012";
        it("should populate correct endpoint and signing region", function () { return __awaiter(void 0, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, s3Control.listRegionalBuckets({ AccountId: AccountId })];
                    case 1:
                        request = (_a.sent()).$metadata.request;
                        expect(request.hostname).eql(AccountId + ".s3-control." + region + ".amazonaws.com");
                        expect(request.headers["authorization"]).contains("Credential=" + credentials.accessKeyId + "/" + dateStr + "/" + region + "/s3/aws4_request");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should populate correct endpoint and signing region if OutpostId is supplied", function () { return __awaiter(void 0, void 0, void 0, function () {
            var OutpostId, request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        OutpostId = "123456789012";
                        return [4 /*yield*/, s3Control.listRegionalBuckets({ AccountId: AccountId, OutpostId: OutpostId })];
                    case 1:
                        request = (_a.sent()).$metadata.request;
                        expect(request.hostname).eql("s3-outposts." + region + ".amazonaws.com");
                        expect(request.headers[HEADER_OUTPOST_ID]).eql(OutpostId);
                        expect(request.headers[HEADER_ACCOUNT_ID]).eql(AccountId);
                        expect(request.headers["authorization"]).contains("Credential=" + credentials.accessKeyId + "/" + dateStr + "/" + region + "/s3-outposts/aws4_request");
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // Use GetAccessPointCommand to validate the customizations for Access Point ARN customizations
    describe("Outposts Access Point ARN", function () {
        var AccountId = "123456789012";
        var OutpostId = "op-01234567890123456";
        var accesspointArn = "arn:aws:s3-outposts:" + region + ":" + AccountId + ":outpost:" + OutpostId + ":accesspoint:myaccesspoint";
        it("should populate correct endpoint if Access Point name is non-ARN", function () { return __awaiter(void 0, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, s3Control.getAccessPoint({ Name: "FakeAccessPoint", AccountId: AccountId })];
                    case 1:
                        request = (_a.sent()).$metadata.request;
                        expect(request.hostname).eql(AccountId + ".s3-control." + region + ".amazonaws.com");
                        expect(request.headers["authorization"]).contains("Credential=" + credentials.accessKeyId + "/" + dateStr + "/" + region + "/s3/aws4_request");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should populate correct endpoint and signing region if Access Point name is ARN", function () { return __awaiter(void 0, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, s3Control.getAccessPoint({ Name: accesspointArn })];
                    case 1:
                        request = (_a.sent()).$metadata.request;
                        expect(request.hostname).eql("s3-outposts." + region + ".amazonaws.com");
                        expect(request.headers[HEADER_OUTPOST_ID]).eql(OutpostId);
                        expect(request.headers[HEADER_ACCOUNT_ID]).eql(AccountId);
                        expect(request.headers["authorization"]).contains("Credential=" + credentials.accessKeyId + "/" + dateStr + "/" + region + "/s3-outposts/aws4_request");
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // Use GetBucketCommand to validate the customizations for Bucket ARN customizations
    describe("Outposts Bucket ARN", function () {
        var AccountId = "123456789012";
        var OutpostId = "op-01234567890123456";
        var bucketArn = "arn:aws:s3-outposts:" + region + ":" + AccountId + ":outpost/" + OutpostId + "/bucket/bucket-id\"";
        it("should populate correct endpoint if Bucket name is non-ARN", function () { return __awaiter(void 0, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, s3Control.getBucket({ Bucket: "BucketName", AccountId: AccountId })];
                    case 1:
                        request = (_a.sent()).$metadata.request;
                        expect(request.hostname).eql(AccountId + ".s3-control." + region + ".amazonaws.com");
                        expect(request.headers["authorization"]).contains("Credential=" + credentials.accessKeyId + "/" + dateStr + "/" + region + "/s3/aws4_request");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should populate correct endpoint and signing region if Bucket name is ARN", function () { return __awaiter(void 0, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, s3Control.getBucket({ Bucket: bucketArn })];
                    case 1:
                        request = (_a.sent()).$metadata.request;
                        expect(request.hostname).eql("s3-outposts." + region + ".amazonaws.com");
                        expect(request.headers[HEADER_OUTPOST_ID]).eql(OutpostId);
                        expect(request.headers[HEADER_ACCOUNT_ID]).eql(AccountId);
                        expect(request.headers["authorization"]).contains("Credential=" + credentials.accessKeyId + "/" + dateStr + "/" + region + "/s3-outposts/aws4_request");
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=S3Control.spec.js.map