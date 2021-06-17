import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CancelClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.CancelCluster",
        };
        body = JSON.stringify(serializeAws_json1_1CancelClusterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CancelJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.CancelJob",
        };
        body = JSON.stringify(serializeAws_json1_1CancelJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateAddressCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.CreateAddress",
        };
        body = JSON.stringify(serializeAws_json1_1CreateAddressRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.CreateCluster",
        };
        body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.CreateJob",
        };
        body = JSON.stringify(serializeAws_json1_1CreateJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateLongTermPricingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.CreateLongTermPricing",
        };
        body = JSON.stringify(serializeAws_json1_1CreateLongTermPricingRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateReturnShippingLabelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.CreateReturnShippingLabel",
        };
        body = JSON.stringify(serializeAws_json1_1CreateReturnShippingLabelRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAddressCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.DescribeAddress",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAddressRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeAddressesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.DescribeAddresses",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeAddressesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.DescribeCluster",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeClusterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.DescribeJob",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeReturnShippingLabelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.DescribeReturnShippingLabel",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeReturnShippingLabelRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetJobManifestCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.GetJobManifest",
        };
        body = JSON.stringify(serializeAws_json1_1GetJobManifestRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetJobUnlockCodeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.GetJobUnlockCode",
        };
        body = JSON.stringify(serializeAws_json1_1GetJobUnlockCodeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetSnowballUsageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.GetSnowballUsage",
        };
        body = JSON.stringify(serializeAws_json1_1GetSnowballUsageRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetSoftwareUpdatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.GetSoftwareUpdates",
        };
        body = JSON.stringify(serializeAws_json1_1GetSoftwareUpdatesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListClusterJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.ListClusterJobs",
        };
        body = JSON.stringify(serializeAws_json1_1ListClusterJobsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListClustersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.ListClusters",
        };
        body = JSON.stringify(serializeAws_json1_1ListClustersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListCompatibleImagesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.ListCompatibleImages",
        };
        body = JSON.stringify(serializeAws_json1_1ListCompatibleImagesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.ListJobs",
        };
        body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListLongTermPricingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.ListLongTermPricing",
        };
        body = JSON.stringify(serializeAws_json1_1ListLongTermPricingRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.UpdateCluster",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.UpdateJob",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateJobShipmentStateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.UpdateJobShipmentState",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateJobShipmentStateRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateLongTermPricingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSIESnowballJobManagementService.UpdateLongTermPricing",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateLongTermPricingRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1CancelClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CancelClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CancelClusterResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CancelClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidJobStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidJobStateException": return [3 /*break*/, 2];
                    case "InvalidResourceException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 4];
                    case "KMSRequestFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.snowball#KMSRequestFailedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CancelJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CancelJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CancelJobResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CancelJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidJobStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidJobStateException": return [3 /*break*/, 2];
                    case "InvalidResourceException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 4];
                    case "KMSRequestFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.snowball#KMSRequestFailedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateAddressCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateAddressCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateAddressResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateAddressCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidAddressException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidAddressException": return [3 /*break*/, 2];
                    case "UnsupportedAddressException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#UnsupportedAddressException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidAddressExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedAddressExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateClusterResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "Ec2RequestFailedException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#Ec2RequestFailedException": return [3 /*break*/, 2];
                    case "InvalidInputCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidInputCombinationException": return [3 /*break*/, 4];
                    case "InvalidResourceException": return [3 /*break*/, 6];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 6];
                    case "KMSRequestFailedException": return [3 /*break*/, 8];
                    case "com.amazonaws.snowball#KMSRequestFailedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateJobResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#ClusterLimitExceededException": return [3 /*break*/, 2];
                    case "Ec2RequestFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#Ec2RequestFailedException": return [3 /*break*/, 4];
                    case "InvalidInputCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.snowball#InvalidInputCombinationException": return [3 /*break*/, 6];
                    case "InvalidResourceException": return [3 /*break*/, 8];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 8];
                    case "KMSRequestFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.snowball#KMSRequestFailedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateLongTermPricingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateLongTermPricingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateLongTermPricingResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateLongTermPricingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateReturnShippingLabelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateReturnShippingLabelCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateReturnShippingLabelResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateReturnShippingLabelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#ConflictException": return [3 /*break*/, 2];
                    case "InvalidInputCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidInputCombinationException": return [3 /*break*/, 4];
                    case "InvalidJobStateException": return [3 /*break*/, 6];
                    case "com.amazonaws.snowball#InvalidJobStateException": return [3 /*break*/, 6];
                    case "InvalidResourceException": return [3 /*break*/, 8];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 8];
                    case "ReturnShippingLabelAlreadyExistsException": return [3 /*break*/, 10];
                    case "com.amazonaws.snowball#ReturnShippingLabelAlreadyExistsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ReturnShippingLabelAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeAddressCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAddressCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAddressResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAddressCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeAddressesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeAddressesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeAddressesResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeAddressesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidResourceException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeClusterResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeJobResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeReturnShippingLabelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeReturnShippingLabelCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeReturnShippingLabelResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeReturnShippingLabelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#ConflictException": return [3 /*break*/, 2];
                    case "InvalidJobStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidJobStateException": return [3 /*break*/, 4];
                    case "InvalidResourceException": return [3 /*break*/, 6];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetJobManifestCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetJobManifestCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetJobManifestResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetJobManifestCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidJobStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidJobStateException": return [3 /*break*/, 2];
                    case "InvalidResourceException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetJobUnlockCodeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetJobUnlockCodeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetJobUnlockCodeResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetJobUnlockCodeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidJobStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidJobStateException": return [3 /*break*/, 2];
                    case "InvalidResourceException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetSnowballUsageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetSnowballUsageCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetSnowballUsageResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetSnowballUsageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetSoftwareUpdatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetSoftwareUpdatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetSoftwareUpdatesResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetSoftwareUpdatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidJobStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidJobStateException": return [3 /*break*/, 2];
                    case "InvalidResourceException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListClusterJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListClusterJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListClusterJobsResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListClusterJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidResourceException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListClustersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListClustersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListClustersResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListClustersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidNextTokenException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListCompatibleImagesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListCompatibleImagesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListCompatibleImagesResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListCompatibleImagesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "Ec2RequestFailedException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#Ec2RequestFailedException": return [3 /*break*/, 2];
                    case "InvalidNextTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidNextTokenException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListJobsResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidNextTokenException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListLongTermPricingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListLongTermPricingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListLongTermPricingResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListLongTermPricingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidResourceException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateClusterResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "Ec2RequestFailedException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#Ec2RequestFailedException": return [3 /*break*/, 2];
                    case "InvalidInputCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidInputCombinationException": return [3 /*break*/, 4];
                    case "InvalidJobStateException": return [3 /*break*/, 6];
                    case "com.amazonaws.snowball#InvalidJobStateException": return [3 /*break*/, 6];
                    case "InvalidResourceException": return [3 /*break*/, 8];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 8];
                    case "KMSRequestFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.snowball#KMSRequestFailedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateJobResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#ClusterLimitExceededException": return [3 /*break*/, 2];
                    case "Ec2RequestFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#Ec2RequestFailedException": return [3 /*break*/, 4];
                    case "InvalidInputCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.snowball#InvalidInputCombinationException": return [3 /*break*/, 6];
                    case "InvalidJobStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.snowball#InvalidJobStateException": return [3 /*break*/, 8];
                    case "InvalidResourceException": return [3 /*break*/, 10];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 10];
                    case "KMSRequestFailedException": return [3 /*break*/, 12];
                    case "com.amazonaws.snowball#KMSRequestFailedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateJobShipmentStateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateJobShipmentStateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateJobShipmentStateResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateJobShipmentStateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidJobStateException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidJobStateException": return [3 /*break*/, 2];
                    case "InvalidResourceException": return [3 /*break*/, 4];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateLongTermPricingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateLongTermPricingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateLongTermPricingResult(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateLongTermPricingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.snowball#InvalidResourceException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1ClusterLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ClusterLimitExceededException(body, context);
        contents = __assign({ name: "ClusterLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ConflictException(body, context);
        contents = __assign({ name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1Ec2RequestFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1Ec2RequestFailedException(body, context);
        contents = __assign({ name: "Ec2RequestFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidAddressExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidAddressException(body, context);
        contents = __assign({ name: "InvalidAddressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidInputCombinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidInputCombinationException(body, context);
        contents = __assign({ name: "InvalidInputCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidJobStateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidJobStateException(body, context);
        contents = __assign({ name: "InvalidJobStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidNextTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
        contents = __assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidResourceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidResourceException(body, context);
        contents = __assign({ name: "InvalidResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KMSRequestFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KMSRequestFailedException(body, context);
        contents = __assign({ name: "KMSRequestFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ReturnShippingLabelAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ReturnShippingLabelAlreadyExistsException(body, context);
        contents = __assign({ name: "ReturnShippingLabelAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedAddressExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedAddressException(body, context);
        contents = __assign({ name: "UnsupportedAddressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1Address = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId })), (input.City !== undefined && input.City !== null && { City: input.City })), (input.Company !== undefined && input.Company !== null && { Company: input.Company })), (input.Country !== undefined && input.Country !== null && { Country: input.Country })), (input.IsRestricted !== undefined && input.IsRestricted !== null && { IsRestricted: input.IsRestricted })), (input.Landmark !== undefined && input.Landmark !== null && { Landmark: input.Landmark })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber })), (input.PostalCode !== undefined && input.PostalCode !== null && { PostalCode: input.PostalCode })), (input.PrefectureOrDistrict !== undefined &&
        input.PrefectureOrDistrict !== null && { PrefectureOrDistrict: input.PrefectureOrDistrict })), (input.StateOrProvince !== undefined &&
        input.StateOrProvince !== null && { StateOrProvince: input.StateOrProvince })), (input.Street1 !== undefined && input.Street1 !== null && { Street1: input.Street1 })), (input.Street2 !== undefined && input.Street2 !== null && { Street2: input.Street2 })), (input.Street3 !== undefined && input.Street3 !== null && { Street3: input.Street3 }));
};
var serializeAws_json1_1CancelClusterRequest = function (input, context) {
    return __assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }));
};
var serializeAws_json1_1CancelJobRequest = function (input, context) {
    return __assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }));
};
var serializeAws_json1_1CreateAddressRequest = function (input, context) {
    return __assign({}, (input.Address !== undefined &&
        input.Address !== null && { Address: serializeAws_json1_1Address(input.Address, context) }));
};
var serializeAws_json1_1CreateClusterRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.ForwardingAddressId !== undefined &&
        input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId })), (input.JobType !== undefined && input.JobType !== null && { JobType: input.JobType })), (input.KmsKeyARN !== undefined && input.KmsKeyARN !== null && { KmsKeyARN: input.KmsKeyARN })), (input.Notification !== undefined &&
        input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) })), (input.Resources !== undefined &&
        input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN })), (input.ShippingOption !== undefined &&
        input.ShippingOption !== null && { ShippingOption: input.ShippingOption })), (input.SnowballType !== undefined && input.SnowballType !== null && { SnowballType: input.SnowballType })), (input.TaxDocuments !== undefined &&
        input.TaxDocuments !== null && { TaxDocuments: serializeAws_json1_1TaxDocuments(input.TaxDocuments, context) }));
};
var serializeAws_json1_1CreateJobRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId })), (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.DeviceConfiguration !== undefined &&
        input.DeviceConfiguration !== null && {
        DeviceConfiguration: serializeAws_json1_1DeviceConfiguration(input.DeviceConfiguration, context),
    })), (input.ForwardingAddressId !== undefined &&
        input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId })), (input.JobType !== undefined && input.JobType !== null && { JobType: input.JobType })), (input.KmsKeyARN !== undefined && input.KmsKeyARN !== null && { KmsKeyARN: input.KmsKeyARN })), (input.LongTermPricingId !== undefined &&
        input.LongTermPricingId !== null && { LongTermPricingId: input.LongTermPricingId })), (input.Notification !== undefined &&
        input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) })), (input.Resources !== undefined &&
        input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN })), (input.ShippingOption !== undefined &&
        input.ShippingOption !== null && { ShippingOption: input.ShippingOption })), (input.SnowballCapacityPreference !== undefined &&
        input.SnowballCapacityPreference !== null && { SnowballCapacityPreference: input.SnowballCapacityPreference })), (input.SnowballType !== undefined && input.SnowballType !== null && { SnowballType: input.SnowballType })), (input.TaxDocuments !== undefined &&
        input.TaxDocuments !== null && { TaxDocuments: serializeAws_json1_1TaxDocuments(input.TaxDocuments, context) }));
};
var serializeAws_json1_1CreateLongTermPricingRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.IsLongTermPricingAutoRenew !== undefined &&
        input.IsLongTermPricingAutoRenew !== null && { IsLongTermPricingAutoRenew: input.IsLongTermPricingAutoRenew })), (input.LongTermPricingType !== undefined &&
        input.LongTermPricingType !== null && { LongTermPricingType: input.LongTermPricingType })), (input.SnowballType !== undefined && input.SnowballType !== null && { SnowballType: input.SnowballType }));
};
var serializeAws_json1_1CreateReturnShippingLabelRequest = function (input, context) {
    return __assign(__assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId })), (input.ShippingOption !== undefined &&
        input.ShippingOption !== null && { ShippingOption: input.ShippingOption }));
};
var serializeAws_json1_1DescribeAddressesRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeAddressRequest = function (input, context) {
    return __assign({}, (input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }));
};
var serializeAws_json1_1DescribeClusterRequest = function (input, context) {
    return __assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }));
};
var serializeAws_json1_1DescribeJobRequest = function (input, context) {
    return __assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }));
};
var serializeAws_json1_1DescribeReturnShippingLabelRequest = function (input, context) {
    return __assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }));
};
var serializeAws_json1_1DeviceConfiguration = function (input, context) {
    return __assign({}, (input.SnowconeDeviceConfiguration !== undefined &&
        input.SnowconeDeviceConfiguration !== null && {
        SnowconeDeviceConfiguration: serializeAws_json1_1SnowconeDeviceConfiguration(input.SnowconeDeviceConfiguration, context),
    }));
};
var serializeAws_json1_1Ec2AmiResource = function (input, context) {
    return __assign(__assign({}, (input.AmiId !== undefined && input.AmiId !== null && { AmiId: input.AmiId })), (input.SnowballAmiId !== undefined && input.SnowballAmiId !== null && { SnowballAmiId: input.SnowballAmiId }));
};
var serializeAws_json1_1Ec2AmiResourceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Ec2AmiResource(entry, context);
    });
};
var serializeAws_json1_1EventTriggerDefinition = function (input, context) {
    return __assign({}, (input.EventResourceARN !== undefined &&
        input.EventResourceARN !== null && { EventResourceARN: input.EventResourceARN }));
};
var serializeAws_json1_1EventTriggerDefinitionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EventTriggerDefinition(entry, context);
    });
};
var serializeAws_json1_1GetJobManifestRequest = function (input, context) {
    return __assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }));
};
var serializeAws_json1_1GetJobUnlockCodeRequest = function (input, context) {
    return __assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }));
};
var serializeAws_json1_1GetSnowballUsageRequest = function (input, context) {
    return {};
};
var serializeAws_json1_1GetSoftwareUpdatesRequest = function (input, context) {
    return __assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }));
};
var serializeAws_json1_1INDTaxDocuments = function (input, context) {
    return __assign({}, (input.GSTIN !== undefined && input.GSTIN !== null && { GSTIN: input.GSTIN }));
};
var serializeAws_json1_1JobResource = function (input, context) {
    return __assign(__assign(__assign({}, (input.Ec2AmiResources !== undefined &&
        input.Ec2AmiResources !== null && {
        Ec2AmiResources: serializeAws_json1_1Ec2AmiResourceList(input.Ec2AmiResources, context),
    })), (input.LambdaResources !== undefined &&
        input.LambdaResources !== null && {
        LambdaResources: serializeAws_json1_1LambdaResourceList(input.LambdaResources, context),
    })), (input.S3Resources !== undefined &&
        input.S3Resources !== null && { S3Resources: serializeAws_json1_1S3ResourceList(input.S3Resources, context) }));
};
var serializeAws_json1_1JobStateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1KeyRange = function (input, context) {
    return __assign(__assign({}, (input.BeginMarker !== undefined && input.BeginMarker !== null && { BeginMarker: input.BeginMarker })), (input.EndMarker !== undefined && input.EndMarker !== null && { EndMarker: input.EndMarker }));
};
var serializeAws_json1_1LambdaResource = function (input, context) {
    return __assign(__assign({}, (input.EventTriggers !== undefined &&
        input.EventTriggers !== null && {
        EventTriggers: serializeAws_json1_1EventTriggerDefinitionList(input.EventTriggers, context),
    })), (input.LambdaArn !== undefined && input.LambdaArn !== null && { LambdaArn: input.LambdaArn }));
};
var serializeAws_json1_1LambdaResourceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LambdaResource(entry, context);
    });
};
var serializeAws_json1_1ListClusterJobsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListClustersRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListCompatibleImagesRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListJobsRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1ListLongTermPricingRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1Notification = function (input, context) {
    return __assign(__assign(__assign({}, (input.JobStatesToNotify !== undefined &&
        input.JobStatesToNotify !== null && {
        JobStatesToNotify: serializeAws_json1_1JobStateList(input.JobStatesToNotify, context),
    })), (input.NotifyAll !== undefined && input.NotifyAll !== null && { NotifyAll: input.NotifyAll })), (input.SnsTopicARN !== undefined && input.SnsTopicARN !== null && { SnsTopicARN: input.SnsTopicARN }));
};
var serializeAws_json1_1S3Resource = function (input, context) {
    return __assign(__assign({}, (input.BucketArn !== undefined && input.BucketArn !== null && { BucketArn: input.BucketArn })), (input.KeyRange !== undefined &&
        input.KeyRange !== null && { KeyRange: serializeAws_json1_1KeyRange(input.KeyRange, context) }));
};
var serializeAws_json1_1S3ResourceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1S3Resource(entry, context);
    });
};
var serializeAws_json1_1SnowconeDeviceConfiguration = function (input, context) {
    return __assign({}, (input.WirelessConnection !== undefined &&
        input.WirelessConnection !== null && {
        WirelessConnection: serializeAws_json1_1WirelessConnection(input.WirelessConnection, context),
    }));
};
var serializeAws_json1_1TaxDocuments = function (input, context) {
    return __assign({}, (input.IND !== undefined &&
        input.IND !== null && { IND: serializeAws_json1_1INDTaxDocuments(input.IND, context) }));
};
var serializeAws_json1_1UpdateClusterRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId })), (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.ForwardingAddressId !== undefined &&
        input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId })), (input.Notification !== undefined &&
        input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) })), (input.Resources !== undefined &&
        input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN })), (input.ShippingOption !== undefined &&
        input.ShippingOption !== null && { ShippingOption: input.ShippingOption }));
};
var serializeAws_json1_1UpdateJobRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.ForwardingAddressId !== undefined &&
        input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId })), (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId })), (input.Notification !== undefined &&
        input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) })), (input.Resources !== undefined &&
        input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) })), (input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN })), (input.ShippingOption !== undefined &&
        input.ShippingOption !== null && { ShippingOption: input.ShippingOption })), (input.SnowballCapacityPreference !== undefined &&
        input.SnowballCapacityPreference !== null && { SnowballCapacityPreference: input.SnowballCapacityPreference }));
};
var serializeAws_json1_1UpdateJobShipmentStateRequest = function (input, context) {
    return __assign(__assign({}, (input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId })), (input.ShipmentState !== undefined && input.ShipmentState !== null && { ShipmentState: input.ShipmentState }));
};
var serializeAws_json1_1UpdateLongTermPricingRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.IsLongTermPricingAutoRenew !== undefined &&
        input.IsLongTermPricingAutoRenew !== null && { IsLongTermPricingAutoRenew: input.IsLongTermPricingAutoRenew })), (input.LongTermPricingId !== undefined &&
        input.LongTermPricingId !== null && { LongTermPricingId: input.LongTermPricingId })), (input.ReplacementJob !== undefined &&
        input.ReplacementJob !== null && { ReplacementJob: input.ReplacementJob }));
};
var serializeAws_json1_1WirelessConnection = function (input, context) {
    return __assign({}, (input.IsWifiEnabled !== undefined && input.IsWifiEnabled !== null && { IsWifiEnabled: input.IsWifiEnabled }));
};
var deserializeAws_json1_1Address = function (output, context) {
    return {
        AddressId: output.AddressId !== undefined && output.AddressId !== null ? output.AddressId : undefined,
        City: output.City !== undefined && output.City !== null ? output.City : undefined,
        Company: output.Company !== undefined && output.Company !== null ? output.Company : undefined,
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        IsRestricted: output.IsRestricted !== undefined && output.IsRestricted !== null ? output.IsRestricted : undefined,
        Landmark: output.Landmark !== undefined && output.Landmark !== null ? output.Landmark : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
        PostalCode: output.PostalCode !== undefined && output.PostalCode !== null ? output.PostalCode : undefined,
        PrefectureOrDistrict: output.PrefectureOrDistrict !== undefined && output.PrefectureOrDistrict !== null
            ? output.PrefectureOrDistrict
            : undefined,
        StateOrProvince: output.StateOrProvince !== undefined && output.StateOrProvince !== null ? output.StateOrProvince : undefined,
        Street1: output.Street1 !== undefined && output.Street1 !== null ? output.Street1 : undefined,
        Street2: output.Street2 !== undefined && output.Street2 !== null ? output.Street2 : undefined,
        Street3: output.Street3 !== undefined && output.Street3 !== null ? output.Street3 : undefined,
    };
};
var deserializeAws_json1_1AddressList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Address(entry, context);
    });
};
var deserializeAws_json1_1CancelClusterResult = function (output, context) {
    return {};
};
var deserializeAws_json1_1CancelJobResult = function (output, context) {
    return {};
};
var deserializeAws_json1_1ClusterLimitExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ClusterListEntry = function (output, context) {
    return {
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        ClusterState: output.ClusterState !== undefined && output.ClusterState !== null ? output.ClusterState : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    };
};
var deserializeAws_json1_1ClusterListEntryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ClusterListEntry(entry, context);
    });
};
var deserializeAws_json1_1ClusterMetadata = function (output, context) {
    return {
        AddressId: output.AddressId !== undefined && output.AddressId !== null ? output.AddressId : undefined,
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        ClusterState: output.ClusterState !== undefined && output.ClusterState !== null ? output.ClusterState : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ForwardingAddressId: output.ForwardingAddressId !== undefined && output.ForwardingAddressId !== null
            ? output.ForwardingAddressId
            : undefined,
        JobType: output.JobType !== undefined && output.JobType !== null ? output.JobType : undefined,
        KmsKeyARN: output.KmsKeyARN !== undefined && output.KmsKeyARN !== null ? output.KmsKeyARN : undefined,
        Notification: output.Notification !== undefined && output.Notification !== null
            ? deserializeAws_json1_1Notification(output.Notification, context)
            : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_json1_1JobResource(output.Resources, context)
            : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
        ShippingOption: output.ShippingOption !== undefined && output.ShippingOption !== null ? output.ShippingOption : undefined,
        SnowballType: output.SnowballType !== undefined && output.SnowballType !== null ? output.SnowballType : undefined,
        TaxDocuments: output.TaxDocuments !== undefined && output.TaxDocuments !== null
            ? deserializeAws_json1_1TaxDocuments(output.TaxDocuments, context)
            : undefined,
    };
};
var deserializeAws_json1_1CompatibleImage = function (output, context) {
    return {
        AmiId: output.AmiId !== undefined && output.AmiId !== null ? output.AmiId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1CompatibleImageList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CompatibleImage(entry, context);
    });
};
var deserializeAws_json1_1ConflictException = function (output, context) {
    return {
        ConflictResource: output.ConflictResource !== undefined && output.ConflictResource !== null ? output.ConflictResource : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1CreateAddressResult = function (output, context) {
    return {
        AddressId: output.AddressId !== undefined && output.AddressId !== null ? output.AddressId : undefined,
    };
};
var deserializeAws_json1_1CreateClusterResult = function (output, context) {
    return {
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
    };
};
var deserializeAws_json1_1CreateJobResult = function (output, context) {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
};
var deserializeAws_json1_1CreateLongTermPricingResult = function (output, context) {
    return {
        LongTermPricingId: output.LongTermPricingId !== undefined && output.LongTermPricingId !== null
            ? output.LongTermPricingId
            : undefined,
    };
};
var deserializeAws_json1_1CreateReturnShippingLabelResult = function (output, context) {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1DataTransfer = function (output, context) {
    return {
        BytesTransferred: output.BytesTransferred !== undefined && output.BytesTransferred !== null ? output.BytesTransferred : undefined,
        ObjectsTransferred: output.ObjectsTransferred !== undefined && output.ObjectsTransferred !== null
            ? output.ObjectsTransferred
            : undefined,
        TotalBytes: output.TotalBytes !== undefined && output.TotalBytes !== null ? output.TotalBytes : undefined,
        TotalObjects: output.TotalObjects !== undefined && output.TotalObjects !== null ? output.TotalObjects : undefined,
    };
};
var deserializeAws_json1_1DescribeAddressesResult = function (output, context) {
    return {
        Addresses: output.Addresses !== undefined && output.Addresses !== null
            ? deserializeAws_json1_1AddressList(output.Addresses, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeAddressResult = function (output, context) {
    return {
        Address: output.Address !== undefined && output.Address !== null
            ? deserializeAws_json1_1Address(output.Address, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeClusterResult = function (output, context) {
    return {
        ClusterMetadata: output.ClusterMetadata !== undefined && output.ClusterMetadata !== null
            ? deserializeAws_json1_1ClusterMetadata(output.ClusterMetadata, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeJobResult = function (output, context) {
    return {
        JobMetadata: output.JobMetadata !== undefined && output.JobMetadata !== null
            ? deserializeAws_json1_1JobMetadata(output.JobMetadata, context)
            : undefined,
        SubJobMetadata: output.SubJobMetadata !== undefined && output.SubJobMetadata !== null
            ? deserializeAws_json1_1JobMetadataList(output.SubJobMetadata, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeReturnShippingLabelResult = function (output, context) {
    return {
        ExpirationDate: output.ExpirationDate !== undefined && output.ExpirationDate !== null
            ? new Date(Math.round(output.ExpirationDate * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1DeviceConfiguration = function (output, context) {
    return {
        SnowconeDeviceConfiguration: output.SnowconeDeviceConfiguration !== undefined && output.SnowconeDeviceConfiguration !== null
            ? deserializeAws_json1_1SnowconeDeviceConfiguration(output.SnowconeDeviceConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1Ec2AmiResource = function (output, context) {
    return {
        AmiId: output.AmiId !== undefined && output.AmiId !== null ? output.AmiId : undefined,
        SnowballAmiId: output.SnowballAmiId !== undefined && output.SnowballAmiId !== null ? output.SnowballAmiId : undefined,
    };
};
var deserializeAws_json1_1Ec2AmiResourceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Ec2AmiResource(entry, context);
    });
};
var deserializeAws_json1_1Ec2RequestFailedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1EventTriggerDefinition = function (output, context) {
    return {
        EventResourceARN: output.EventResourceARN !== undefined && output.EventResourceARN !== null ? output.EventResourceARN : undefined,
    };
};
var deserializeAws_json1_1EventTriggerDefinitionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventTriggerDefinition(entry, context);
    });
};
var deserializeAws_json1_1GetJobManifestResult = function (output, context) {
    return {
        ManifestURI: output.ManifestURI !== undefined && output.ManifestURI !== null ? output.ManifestURI : undefined,
    };
};
var deserializeAws_json1_1GetJobUnlockCodeResult = function (output, context) {
    return {
        UnlockCode: output.UnlockCode !== undefined && output.UnlockCode !== null ? output.UnlockCode : undefined,
    };
};
var deserializeAws_json1_1GetSnowballUsageResult = function (output, context) {
    return {
        SnowballLimit: output.SnowballLimit !== undefined && output.SnowballLimit !== null ? output.SnowballLimit : undefined,
        SnowballsInUse: output.SnowballsInUse !== undefined && output.SnowballsInUse !== null ? output.SnowballsInUse : undefined,
    };
};
var deserializeAws_json1_1GetSoftwareUpdatesResult = function (output, context) {
    return {
        UpdatesURI: output.UpdatesURI !== undefined && output.UpdatesURI !== null ? output.UpdatesURI : undefined,
    };
};
var deserializeAws_json1_1INDTaxDocuments = function (output, context) {
    return {
        GSTIN: output.GSTIN !== undefined && output.GSTIN !== null ? output.GSTIN : undefined,
    };
};
var deserializeAws_json1_1InvalidAddressException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidInputCombinationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidJobStateException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidNextTokenException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidResourceException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
var deserializeAws_json1_1JobListEntry = function (output, context) {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsMaster: output.IsMaster !== undefined && output.IsMaster !== null ? output.IsMaster : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobState: output.JobState !== undefined && output.JobState !== null ? output.JobState : undefined,
        JobType: output.JobType !== undefined && output.JobType !== null ? output.JobType : undefined,
        SnowballType: output.SnowballType !== undefined && output.SnowballType !== null ? output.SnowballType : undefined,
    };
};
var deserializeAws_json1_1JobListEntryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1JobListEntry(entry, context);
    });
};
var deserializeAws_json1_1JobLogs = function (output, context) {
    return {
        JobCompletionReportURI: output.JobCompletionReportURI !== undefined && output.JobCompletionReportURI !== null
            ? output.JobCompletionReportURI
            : undefined,
        JobFailureLogURI: output.JobFailureLogURI !== undefined && output.JobFailureLogURI !== null ? output.JobFailureLogURI : undefined,
        JobSuccessLogURI: output.JobSuccessLogURI !== undefined && output.JobSuccessLogURI !== null ? output.JobSuccessLogURI : undefined,
    };
};
var deserializeAws_json1_1JobMetadata = function (output, context) {
    return {
        AddressId: output.AddressId !== undefined && output.AddressId !== null ? output.AddressId : undefined,
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        DataTransferProgress: output.DataTransferProgress !== undefined && output.DataTransferProgress !== null
            ? deserializeAws_json1_1DataTransfer(output.DataTransferProgress, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DeviceConfiguration: output.DeviceConfiguration !== undefined && output.DeviceConfiguration !== null
            ? deserializeAws_json1_1DeviceConfiguration(output.DeviceConfiguration, context)
            : undefined,
        ForwardingAddressId: output.ForwardingAddressId !== undefined && output.ForwardingAddressId !== null
            ? output.ForwardingAddressId
            : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobLogInfo: output.JobLogInfo !== undefined && output.JobLogInfo !== null
            ? deserializeAws_json1_1JobLogs(output.JobLogInfo, context)
            : undefined,
        JobState: output.JobState !== undefined && output.JobState !== null ? output.JobState : undefined,
        JobType: output.JobType !== undefined && output.JobType !== null ? output.JobType : undefined,
        KmsKeyARN: output.KmsKeyARN !== undefined && output.KmsKeyARN !== null ? output.KmsKeyARN : undefined,
        LongTermPricingId: output.LongTermPricingId !== undefined && output.LongTermPricingId !== null
            ? output.LongTermPricingId
            : undefined,
        Notification: output.Notification !== undefined && output.Notification !== null
            ? deserializeAws_json1_1Notification(output.Notification, context)
            : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_json1_1JobResource(output.Resources, context)
            : undefined,
        RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
        ShippingDetails: output.ShippingDetails !== undefined && output.ShippingDetails !== null
            ? deserializeAws_json1_1ShippingDetails(output.ShippingDetails, context)
            : undefined,
        SnowballCapacityPreference: output.SnowballCapacityPreference !== undefined && output.SnowballCapacityPreference !== null
            ? output.SnowballCapacityPreference
            : undefined,
        SnowballType: output.SnowballType !== undefined && output.SnowballType !== null ? output.SnowballType : undefined,
        TaxDocuments: output.TaxDocuments !== undefined && output.TaxDocuments !== null
            ? deserializeAws_json1_1TaxDocuments(output.TaxDocuments, context)
            : undefined,
    };
};
var deserializeAws_json1_1JobMetadataList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1JobMetadata(entry, context);
    });
};
var deserializeAws_json1_1JobResource = function (output, context) {
    return {
        Ec2AmiResources: output.Ec2AmiResources !== undefined && output.Ec2AmiResources !== null
            ? deserializeAws_json1_1Ec2AmiResourceList(output.Ec2AmiResources, context)
            : undefined,
        LambdaResources: output.LambdaResources !== undefined && output.LambdaResources !== null
            ? deserializeAws_json1_1LambdaResourceList(output.LambdaResources, context)
            : undefined,
        S3Resources: output.S3Resources !== undefined && output.S3Resources !== null
            ? deserializeAws_json1_1S3ResourceList(output.S3Resources, context)
            : undefined,
    };
};
var deserializeAws_json1_1JobStateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1KeyRange = function (output, context) {
    return {
        BeginMarker: output.BeginMarker !== undefined && output.BeginMarker !== null ? output.BeginMarker : undefined,
        EndMarker: output.EndMarker !== undefined && output.EndMarker !== null ? output.EndMarker : undefined,
    };
};
var deserializeAws_json1_1KMSRequestFailedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1LambdaResource = function (output, context) {
    return {
        EventTriggers: output.EventTriggers !== undefined && output.EventTriggers !== null
            ? deserializeAws_json1_1EventTriggerDefinitionList(output.EventTriggers, context)
            : undefined,
        LambdaArn: output.LambdaArn !== undefined && output.LambdaArn !== null ? output.LambdaArn : undefined,
    };
};
var deserializeAws_json1_1LambdaResourceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LambdaResource(entry, context);
    });
};
var deserializeAws_json1_1ListClusterJobsResult = function (output, context) {
    return {
        JobListEntries: output.JobListEntries !== undefined && output.JobListEntries !== null
            ? deserializeAws_json1_1JobListEntryList(output.JobListEntries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListClustersResult = function (output, context) {
    return {
        ClusterListEntries: output.ClusterListEntries !== undefined && output.ClusterListEntries !== null
            ? deserializeAws_json1_1ClusterListEntryList(output.ClusterListEntries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListCompatibleImagesResult = function (output, context) {
    return {
        CompatibleImages: output.CompatibleImages !== undefined && output.CompatibleImages !== null
            ? deserializeAws_json1_1CompatibleImageList(output.CompatibleImages, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListJobsResult = function (output, context) {
    return {
        JobListEntries: output.JobListEntries !== undefined && output.JobListEntries !== null
            ? deserializeAws_json1_1JobListEntryList(output.JobListEntries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1ListLongTermPricingResult = function (output, context) {
    return {
        LongTermPricingEntries: output.LongTermPricingEntries !== undefined && output.LongTermPricingEntries !== null
            ? deserializeAws_json1_1LongTermPricingEntryList(output.LongTermPricingEntries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1LongTermPricingAssociatedJobIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1LongTermPricingEntryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LongTermPricingListEntry(entry, context);
    });
};
var deserializeAws_json1_1LongTermPricingListEntry = function (output, context) {
    return {
        CurrentActiveJob: output.CurrentActiveJob !== undefined && output.CurrentActiveJob !== null ? output.CurrentActiveJob : undefined,
        IsLongTermPricingAutoRenew: output.IsLongTermPricingAutoRenew !== undefined && output.IsLongTermPricingAutoRenew !== null
            ? output.IsLongTermPricingAutoRenew
            : undefined,
        JobIds: output.JobIds !== undefined && output.JobIds !== null
            ? deserializeAws_json1_1LongTermPricingAssociatedJobIdList(output.JobIds, context)
            : undefined,
        LongTermPricingEndDate: output.LongTermPricingEndDate !== undefined && output.LongTermPricingEndDate !== null
            ? new Date(Math.round(output.LongTermPricingEndDate * 1000))
            : undefined,
        LongTermPricingId: output.LongTermPricingId !== undefined && output.LongTermPricingId !== null
            ? output.LongTermPricingId
            : undefined,
        LongTermPricingStartDate: output.LongTermPricingStartDate !== undefined && output.LongTermPricingStartDate !== null
            ? new Date(Math.round(output.LongTermPricingStartDate * 1000))
            : undefined,
        LongTermPricingStatus: output.LongTermPricingStatus !== undefined && output.LongTermPricingStatus !== null
            ? output.LongTermPricingStatus
            : undefined,
        LongTermPricingType: output.LongTermPricingType !== undefined && output.LongTermPricingType !== null
            ? output.LongTermPricingType
            : undefined,
        ReplacementJob: output.ReplacementJob !== undefined && output.ReplacementJob !== null ? output.ReplacementJob : undefined,
        SnowballType: output.SnowballType !== undefined && output.SnowballType !== null ? output.SnowballType : undefined,
    };
};
var deserializeAws_json1_1Notification = function (output, context) {
    return {
        JobStatesToNotify: output.JobStatesToNotify !== undefined && output.JobStatesToNotify !== null
            ? deserializeAws_json1_1JobStateList(output.JobStatesToNotify, context)
            : undefined,
        NotifyAll: output.NotifyAll !== undefined && output.NotifyAll !== null ? output.NotifyAll : undefined,
        SnsTopicARN: output.SnsTopicARN !== undefined && output.SnsTopicARN !== null ? output.SnsTopicARN : undefined,
    };
};
var deserializeAws_json1_1ReturnShippingLabelAlreadyExistsException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1S3Resource = function (output, context) {
    return {
        BucketArn: output.BucketArn !== undefined && output.BucketArn !== null ? output.BucketArn : undefined,
        KeyRange: output.KeyRange !== undefined && output.KeyRange !== null
            ? deserializeAws_json1_1KeyRange(output.KeyRange, context)
            : undefined,
    };
};
var deserializeAws_json1_1S3ResourceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1S3Resource(entry, context);
    });
};
var deserializeAws_json1_1Shipment = function (output, context) {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TrackingNumber: output.TrackingNumber !== undefined && output.TrackingNumber !== null ? output.TrackingNumber : undefined,
    };
};
var deserializeAws_json1_1ShippingDetails = function (output, context) {
    return {
        InboundShipment: output.InboundShipment !== undefined && output.InboundShipment !== null
            ? deserializeAws_json1_1Shipment(output.InboundShipment, context)
            : undefined,
        OutboundShipment: output.OutboundShipment !== undefined && output.OutboundShipment !== null
            ? deserializeAws_json1_1Shipment(output.OutboundShipment, context)
            : undefined,
        ShippingOption: output.ShippingOption !== undefined && output.ShippingOption !== null ? output.ShippingOption : undefined,
    };
};
var deserializeAws_json1_1SnowconeDeviceConfiguration = function (output, context) {
    return {
        WirelessConnection: output.WirelessConnection !== undefined && output.WirelessConnection !== null
            ? deserializeAws_json1_1WirelessConnection(output.WirelessConnection, context)
            : undefined,
    };
};
var deserializeAws_json1_1TaxDocuments = function (output, context) {
    return {
        IND: output.IND !== undefined && output.IND !== null
            ? deserializeAws_json1_1INDTaxDocuments(output.IND, context)
            : undefined,
    };
};
var deserializeAws_json1_1UnsupportedAddressException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UpdateClusterResult = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateJobResult = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateJobShipmentStateResult = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateLongTermPricingResult = function (output, context) {
    return {};
};
var deserializeAws_json1_1WirelessConnection = function (output, context) {
    return {
        IsWifiEnabled: output.IsWifiEnabled !== undefined && output.IsWifiEnabled !== null ? output.IsWifiEnabled : undefined,
    };
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                contents = {
                    protocol: protocol,
                    hostname: hostname,
                    port: port,
                    method: "POST",
                    path: path,
                    headers: headers,
                };
                if (resolvedHostname !== undefined) {
                    contents.hostname = resolvedHostname;
                }
                if (body !== undefined) {
                    contents.body = body;
                }
                return [2 /*return*/, new __HttpRequest(contents)];
        }
    });
}); };
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_json1_1.js.map