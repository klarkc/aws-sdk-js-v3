import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AddTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.AddTags",
        };
        body = JSON.stringify(serializeAws_json1_1AddTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateTrailCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.CreateTrail",
        };
        body = JSON.stringify(serializeAws_json1_1CreateTrailRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteTrailCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.DeleteTrail",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteTrailRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTrailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.DescribeTrails",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTrailsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetEventSelectorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.GetEventSelectors",
        };
        body = JSON.stringify(serializeAws_json1_1GetEventSelectorsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetInsightSelectorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.GetInsightSelectors",
        };
        body = JSON.stringify(serializeAws_json1_1GetInsightSelectorsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetTrailCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.GetTrail",
        };
        body = JSON.stringify(serializeAws_json1_1GetTrailRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetTrailStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.GetTrailStatus",
        };
        body = JSON.stringify(serializeAws_json1_1GetTrailStatusRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListPublicKeysCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.ListPublicKeys",
        };
        body = JSON.stringify(serializeAws_json1_1ListPublicKeysRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.ListTags",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTrailsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.ListTrails",
        };
        body = JSON.stringify(serializeAws_json1_1ListTrailsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1LookupEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.LookupEvents",
        };
        body = JSON.stringify(serializeAws_json1_1LookupEventsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutEventSelectorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.PutEventSelectors",
        };
        body = JSON.stringify(serializeAws_json1_1PutEventSelectorsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutInsightSelectorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.PutInsightSelectors",
        };
        body = JSON.stringify(serializeAws_json1_1PutInsightSelectorsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RemoveTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.RemoveTags",
        };
        body = JSON.stringify(serializeAws_json1_1RemoveTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartLoggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.StartLogging",
        };
        body = JSON.stringify(serializeAws_json1_1StartLoggingRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopLoggingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.StopLogging",
        };
        body = JSON.stringify(serializeAws_json1_1StopLoggingRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateTrailCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CloudTrail_20131101.UpdateTrail",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateTrailRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AddTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CloudTrailARNInvalidException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException": return [3 /*break*/, 2];
                    case "InvalidTagParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InvalidTagParameterException": return [3 /*break*/, 4];
                    case "InvalidTrailNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 6];
                    case "NotOrganizationMasterAccountException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException": return [3 /*break*/, 8];
                    case "OperationNotPermittedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ResourceTypeNotSupportedException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException": return [3 /*break*/, 14];
                    case "TagsLimitExceededException": return [3 /*break*/, 16];
                    case "com.amazonaws.cloudtrail#TagsLimitExceededException": return [3 /*break*/, 16];
                    case "UnsupportedOperationException": return [3 /*break*/, 18];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagsLimitExceededExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateTrailCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateTrailCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateTrailResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateTrailCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, parsedBody, message;
    var _6;
    return __generator(this, function (_7) {
        switch (_7.label) {
            case 0:
                _a = [__assign({}, output)];
                _6 = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_6.body = _7.sent(), _6)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CloudTrailAccessNotEnabledException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException": return [3 /*break*/, 2];
                    case "CloudTrailInvalidClientTokenIdException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#CloudTrailInvalidClientTokenIdException": return [3 /*break*/, 4];
                    case "CloudWatchLogsDeliveryUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#CloudWatchLogsDeliveryUnavailableException": return [3 /*break*/, 6];
                    case "InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 8];
                    case "InsufficientEncryptionPolicyException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException": return [3 /*break*/, 10];
                    case "InsufficientS3BucketPolicyException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException": return [3 /*break*/, 12];
                    case "InsufficientSnsTopicPolicyException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#InsufficientSnsTopicPolicyException": return [3 /*break*/, 14];
                    case "InvalidCloudWatchLogsLogGroupArnException": return [3 /*break*/, 16];
                    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsLogGroupArnException": return [3 /*break*/, 16];
                    case "InvalidCloudWatchLogsRoleArnException": return [3 /*break*/, 18];
                    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsRoleArnException": return [3 /*break*/, 18];
                    case "InvalidKmsKeyIdException": return [3 /*break*/, 20];
                    case "com.amazonaws.cloudtrail#InvalidKmsKeyIdException": return [3 /*break*/, 20];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 22];
                    case "com.amazonaws.cloudtrail#InvalidParameterCombinationException": return [3 /*break*/, 22];
                    case "InvalidS3BucketNameException": return [3 /*break*/, 24];
                    case "com.amazonaws.cloudtrail#InvalidS3BucketNameException": return [3 /*break*/, 24];
                    case "InvalidS3PrefixException": return [3 /*break*/, 26];
                    case "com.amazonaws.cloudtrail#InvalidS3PrefixException": return [3 /*break*/, 26];
                    case "InvalidSnsTopicNameException": return [3 /*break*/, 28];
                    case "com.amazonaws.cloudtrail#InvalidSnsTopicNameException": return [3 /*break*/, 28];
                    case "InvalidTagParameterException": return [3 /*break*/, 30];
                    case "com.amazonaws.cloudtrail#InvalidTagParameterException": return [3 /*break*/, 30];
                    case "InvalidTrailNameException": return [3 /*break*/, 32];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 32];
                    case "KmsException": return [3 /*break*/, 34];
                    case "com.amazonaws.cloudtrail#KmsException": return [3 /*break*/, 34];
                    case "KmsKeyDisabledException": return [3 /*break*/, 36];
                    case "com.amazonaws.cloudtrail#KmsKeyDisabledException": return [3 /*break*/, 36];
                    case "KmsKeyNotFoundException": return [3 /*break*/, 38];
                    case "com.amazonaws.cloudtrail#KmsKeyNotFoundException": return [3 /*break*/, 38];
                    case "MaximumNumberOfTrailsExceededException": return [3 /*break*/, 40];
                    case "com.amazonaws.cloudtrail#MaximumNumberOfTrailsExceededException": return [3 /*break*/, 40];
                    case "NotOrganizationMasterAccountException": return [3 /*break*/, 42];
                    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException": return [3 /*break*/, 42];
                    case "OperationNotPermittedException": return [3 /*break*/, 44];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 44];
                    case "OrganizationNotInAllFeaturesModeException": return [3 /*break*/, 46];
                    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException": return [3 /*break*/, 46];
                    case "OrganizationsNotInUseException": return [3 /*break*/, 48];
                    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException": return [3 /*break*/, 48];
                    case "S3BucketDoesNotExistException": return [3 /*break*/, 50];
                    case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException": return [3 /*break*/, 50];
                    case "TrailAlreadyExistsException": return [3 /*break*/, 52];
                    case "com.amazonaws.cloudtrail#TrailAlreadyExistsException": return [3 /*break*/, 52];
                    case "TrailNotProvidedException": return [3 /*break*/, 54];
                    case "com.amazonaws.cloudtrail#TrailNotProvidedException": return [3 /*break*/, 54];
                    case "UnsupportedOperationException": return [3 /*break*/, 56];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 56];
                }
                return [3 /*break*/, 58];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudTrailInvalidClientTokenIdExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidS3PrefixExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KmsKeyDisabledExceptionResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 40:
                _x = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse(parsedOutput, context)];
            case 41:
                response = __assign.apply(void 0, [__assign.apply(void 0, _x.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 42:
                _y = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)];
            case 43:
                response = __assign.apply(void 0, [__assign.apply(void 0, _y.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 44:
                _z = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 45:
                response = __assign.apply(void 0, [__assign.apply(void 0, _z.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 46:
                _0 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context)];
            case 47:
                response = __assign.apply(void 0, [__assign.apply(void 0, _0.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 48:
                _1 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context)];
            case 49:
                response = __assign.apply(void 0, [__assign.apply(void 0, _1.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 50:
                _2 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context)];
            case 51:
                response = __assign.apply(void 0, [__assign.apply(void 0, _2.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 52:
                _3 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 53:
                response = __assign.apply(void 0, [__assign.apply(void 0, _3.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 54:
                _4 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotProvidedExceptionResponse(parsedOutput, context)];
            case 55:
                response = __assign.apply(void 0, [__assign.apply(void 0, _4.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 56:
                _5 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 57:
                response = __assign.apply(void 0, [__assign.apply(void 0, _5.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 58:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _7.label = 59;
            case 59:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteTrailCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteTrailCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteTrailResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteTrailCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#ConflictException": return [3 /*break*/, 2];
                    case "InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 4];
                    case "InvalidHomeRegionException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#InvalidHomeRegionException": return [3 /*break*/, 6];
                    case "InvalidTrailNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 8];
                    case "NotOrganizationMasterAccountException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException": return [3 /*break*/, 10];
                    case "OperationNotPermittedException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 12];
                    case "TrailNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#TrailNotFoundException": return [3 /*break*/, 14];
                    case "UnsupportedOperationException": return [3 /*break*/, 16];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DescribeTrailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTrailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTrailsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTrailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidTrailNameException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 2];
                    case "OperationNotPermittedException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 4];
                    case "UnsupportedOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetEventSelectorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetEventSelectorsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetEventSelectorsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetEventSelectorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidTrailNameException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 2];
                    case "OperationNotPermittedException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 4];
                    case "TrailNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#TrailNotFoundException": return [3 /*break*/, 6];
                    case "UnsupportedOperationException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetInsightSelectorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetInsightSelectorsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetInsightSelectorsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetInsightSelectorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsightNotEnabledException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InsightNotEnabledException": return [3 /*break*/, 2];
                    case "InvalidTrailNameException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 4];
                    case "OperationNotPermittedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 6];
                    case "TrailNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#TrailNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsightNotEnabledExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetTrailCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetTrailCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetTrailResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetTrailCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidTrailNameException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 2];
                    case "OperationNotPermittedException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 4];
                    case "TrailNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#TrailNotFoundException": return [3 /*break*/, 6];
                    case "UnsupportedOperationException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetTrailStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetTrailStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetTrailStatusResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetTrailStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidTrailNameException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 2];
                    case "OperationNotPermittedException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 4];
                    case "TrailNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#TrailNotFoundException": return [3 /*break*/, 6];
                    case "UnsupportedOperationException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListPublicKeysCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListPublicKeysCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListPublicKeysResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListPublicKeysCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidTimeRangeException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InvalidTimeRangeException": return [3 /*break*/, 2];
                    case "InvalidTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InvalidTokenException": return [3 /*break*/, 4];
                    case "OperationNotPermittedException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 6];
                    case "UnsupportedOperationException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CloudTrailARNInvalidException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException": return [3 /*break*/, 2];
                    case "InvalidTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InvalidTokenException": return [3 /*break*/, 4];
                    case "InvalidTrailNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ResourceTypeNotSupportedException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException": return [3 /*break*/, 12];
                    case "UnsupportedOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListTrailsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTrailsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTrailsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTrailsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 2];
                    case "UnsupportedOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1LookupEventsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1LookupEventsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1LookupEventsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1LookupEventsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidEventCategoryException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InvalidEventCategoryException": return [3 /*break*/, 2];
                    case "InvalidLookupAttributesException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InvalidLookupAttributesException": return [3 /*break*/, 4];
                    case "InvalidMaxResultsException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#InvalidMaxResultsException": return [3 /*break*/, 6];
                    case "InvalidNextTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#InvalidNextTokenException": return [3 /*break*/, 8];
                    case "InvalidTimeRangeException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#InvalidTimeRangeException": return [3 /*break*/, 10];
                    case "OperationNotPermittedException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 12];
                    case "UnsupportedOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEventCategoryExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLookupAttributesExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1PutEventSelectorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutEventSelectorsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutEventSelectorsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutEventSelectorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 2];
                    case "InvalidEventSelectorsException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InvalidEventSelectorsException": return [3 /*break*/, 4];
                    case "InvalidHomeRegionException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#InvalidHomeRegionException": return [3 /*break*/, 6];
                    case "InvalidTrailNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 8];
                    case "NotOrganizationMasterAccountException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException": return [3 /*break*/, 10];
                    case "OperationNotPermittedException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 12];
                    case "TrailNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#TrailNotFoundException": return [3 /*break*/, 14];
                    case "UnsupportedOperationException": return [3 /*break*/, 16];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1PutInsightSelectorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutInsightSelectorsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutInsightSelectorsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutInsightSelectorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientEncryptionPolicyException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException": return [3 /*break*/, 2];
                    case "InsufficientS3BucketPolicyException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException": return [3 /*break*/, 4];
                    case "InvalidHomeRegionException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#InvalidHomeRegionException": return [3 /*break*/, 6];
                    case "InvalidInsightSelectorsException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#InvalidInsightSelectorsException": return [3 /*break*/, 8];
                    case "InvalidTrailNameException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 10];
                    case "KmsException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#KmsException": return [3 /*break*/, 12];
                    case "NotOrganizationMasterAccountException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException": return [3 /*break*/, 14];
                    case "OperationNotPermittedException": return [3 /*break*/, 16];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 16];
                    case "S3BucketDoesNotExistException": return [3 /*break*/, 18];
                    case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException": return [3 /*break*/, 18];
                    case "TrailNotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.cloudtrail#TrailNotFoundException": return [3 /*break*/, 20];
                    case "UnsupportedOperationException": return [3 /*break*/, 22];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1RemoveTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RemoveTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RemoveTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RemoveTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CloudTrailARNInvalidException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException": return [3 /*break*/, 2];
                    case "InvalidTagParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InvalidTagParameterException": return [3 /*break*/, 4];
                    case "InvalidTrailNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 6];
                    case "NotOrganizationMasterAccountException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException": return [3 /*break*/, 8];
                    case "OperationNotPermittedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ResourceTypeNotSupportedException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException": return [3 /*break*/, 14];
                    case "UnsupportedOperationException": return [3 /*break*/, 16];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StartLoggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartLoggingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartLoggingResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartLoggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 2];
                    case "InvalidHomeRegionException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InvalidHomeRegionException": return [3 /*break*/, 4];
                    case "InvalidTrailNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 6];
                    case "NotOrganizationMasterAccountException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException": return [3 /*break*/, 8];
                    case "OperationNotPermittedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 10];
                    case "TrailNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#TrailNotFoundException": return [3 /*break*/, 12];
                    case "UnsupportedOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1StopLoggingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopLoggingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopLoggingResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopLoggingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 2];
                    case "InvalidHomeRegionException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#InvalidHomeRegionException": return [3 /*break*/, 4];
                    case "InvalidTrailNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 6];
                    case "NotOrganizationMasterAccountException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException": return [3 /*break*/, 8];
                    case "OperationNotPermittedException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 10];
                    case "TrailNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#TrailNotFoundException": return [3 /*break*/, 12];
                    case "UnsupportedOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1UpdateTrailCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateTrailCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateTrailResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateTrailCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, parsedBody, message;
    var _6;
    return __generator(this, function (_7) {
        switch (_7.label) {
            case 0:
                _a = [__assign({}, output)];
                _6 = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_6.body = _7.sent(), _6)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CloudTrailAccessNotEnabledException": return [3 /*break*/, 2];
                    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException": return [3 /*break*/, 2];
                    case "CloudTrailInvalidClientTokenIdException": return [3 /*break*/, 4];
                    case "com.amazonaws.cloudtrail#CloudTrailInvalidClientTokenIdException": return [3 /*break*/, 4];
                    case "CloudWatchLogsDeliveryUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.cloudtrail#CloudWatchLogsDeliveryUnavailableException": return [3 /*break*/, 6];
                    case "InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 8];
                    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException": return [3 /*break*/, 8];
                    case "InsufficientEncryptionPolicyException": return [3 /*break*/, 10];
                    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException": return [3 /*break*/, 10];
                    case "InsufficientS3BucketPolicyException": return [3 /*break*/, 12];
                    case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException": return [3 /*break*/, 12];
                    case "InsufficientSnsTopicPolicyException": return [3 /*break*/, 14];
                    case "com.amazonaws.cloudtrail#InsufficientSnsTopicPolicyException": return [3 /*break*/, 14];
                    case "InvalidCloudWatchLogsLogGroupArnException": return [3 /*break*/, 16];
                    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsLogGroupArnException": return [3 /*break*/, 16];
                    case "InvalidCloudWatchLogsRoleArnException": return [3 /*break*/, 18];
                    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsRoleArnException": return [3 /*break*/, 18];
                    case "InvalidEventSelectorsException": return [3 /*break*/, 20];
                    case "com.amazonaws.cloudtrail#InvalidEventSelectorsException": return [3 /*break*/, 20];
                    case "InvalidHomeRegionException": return [3 /*break*/, 22];
                    case "com.amazonaws.cloudtrail#InvalidHomeRegionException": return [3 /*break*/, 22];
                    case "InvalidKmsKeyIdException": return [3 /*break*/, 24];
                    case "com.amazonaws.cloudtrail#InvalidKmsKeyIdException": return [3 /*break*/, 24];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 26];
                    case "com.amazonaws.cloudtrail#InvalidParameterCombinationException": return [3 /*break*/, 26];
                    case "InvalidS3BucketNameException": return [3 /*break*/, 28];
                    case "com.amazonaws.cloudtrail#InvalidS3BucketNameException": return [3 /*break*/, 28];
                    case "InvalidS3PrefixException": return [3 /*break*/, 30];
                    case "com.amazonaws.cloudtrail#InvalidS3PrefixException": return [3 /*break*/, 30];
                    case "InvalidSnsTopicNameException": return [3 /*break*/, 32];
                    case "com.amazonaws.cloudtrail#InvalidSnsTopicNameException": return [3 /*break*/, 32];
                    case "InvalidTrailNameException": return [3 /*break*/, 34];
                    case "com.amazonaws.cloudtrail#InvalidTrailNameException": return [3 /*break*/, 34];
                    case "KmsException": return [3 /*break*/, 36];
                    case "com.amazonaws.cloudtrail#KmsException": return [3 /*break*/, 36];
                    case "KmsKeyDisabledException": return [3 /*break*/, 38];
                    case "com.amazonaws.cloudtrail#KmsKeyDisabledException": return [3 /*break*/, 38];
                    case "KmsKeyNotFoundException": return [3 /*break*/, 40];
                    case "com.amazonaws.cloudtrail#KmsKeyNotFoundException": return [3 /*break*/, 40];
                    case "NotOrganizationMasterAccountException": return [3 /*break*/, 42];
                    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException": return [3 /*break*/, 42];
                    case "OperationNotPermittedException": return [3 /*break*/, 44];
                    case "com.amazonaws.cloudtrail#OperationNotPermittedException": return [3 /*break*/, 44];
                    case "OrganizationNotInAllFeaturesModeException": return [3 /*break*/, 46];
                    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException": return [3 /*break*/, 46];
                    case "OrganizationsNotInUseException": return [3 /*break*/, 48];
                    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException": return [3 /*break*/, 48];
                    case "S3BucketDoesNotExistException": return [3 /*break*/, 50];
                    case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException": return [3 /*break*/, 50];
                    case "TrailNotFoundException": return [3 /*break*/, 52];
                    case "com.amazonaws.cloudtrail#TrailNotFoundException": return [3 /*break*/, 52];
                    case "TrailNotProvidedException": return [3 /*break*/, 54];
                    case "com.amazonaws.cloudtrail#TrailNotProvidedException": return [3 /*break*/, 54];
                    case "UnsupportedOperationException": return [3 /*break*/, 56];
                    case "com.amazonaws.cloudtrail#UnsupportedOperationException": return [3 /*break*/, 56];
                }
                return [3 /*break*/, 58];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudTrailInvalidClientTokenIdExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidS3PrefixExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KmsKeyDisabledExceptionResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 40:
                _x = [{}];
                return [4 /*yield*/, deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(parsedOutput, context)];
            case 41:
                response = __assign.apply(void 0, [__assign.apply(void 0, _x.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 42:
                _y = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)];
            case 43:
                response = __assign.apply(void 0, [__assign.apply(void 0, _y.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 44:
                _z = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 45:
                response = __assign.apply(void 0, [__assign.apply(void 0, _z.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 46:
                _0 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context)];
            case 47:
                response = __assign.apply(void 0, [__assign.apply(void 0, _0.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 48:
                _1 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context)];
            case 49:
                response = __assign.apply(void 0, [__assign.apply(void 0, _1.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 50:
                _2 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context)];
            case 51:
                response = __assign.apply(void 0, [__assign.apply(void 0, _2.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 52:
                _3 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)];
            case 53:
                response = __assign.apply(void 0, [__assign.apply(void 0, _3.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 54:
                _4 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TrailNotProvidedExceptionResponse(parsedOutput, context)];
            case 55:
                response = __assign.apply(void 0, [__assign.apply(void 0, _4.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 56:
                _5 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)];
            case 57:
                response = __assign.apply(void 0, [__assign.apply(void 0, _5.concat([(_7.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 59];
            case 58:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _7.label = 59;
            case 59:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CloudTrailAccessNotEnabledException(body, context);
        contents = __assign({ name: "CloudTrailAccessNotEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CloudTrailARNInvalidException(body, context);
        contents = __assign({ name: "CloudTrailARNInvalidException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CloudTrailInvalidClientTokenIdExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CloudTrailInvalidClientTokenIdException(body, context);
        contents = __assign({ name: "CloudTrailInvalidClientTokenIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException(body, context);
        contents = __assign({ name: "CloudWatchLogsDeliveryUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1InsightNotEnabledExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InsightNotEnabledException(body, context);
        contents = __assign({ name: "InsightNotEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException(body, context);
        contents = __assign({ name: "InsufficientDependencyServiceAccessPermissionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InsufficientEncryptionPolicyException(body, context);
        contents = __assign({ name: "InsufficientEncryptionPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InsufficientS3BucketPolicyException(body, context);
        contents = __assign({ name: "InsufficientS3BucketPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InsufficientSnsTopicPolicyException(body, context);
        contents = __assign({ name: "InsufficientSnsTopicPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException(body, context);
        contents = __assign({ name: "InvalidCloudWatchLogsLogGroupArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException(body, context);
        contents = __assign({ name: "InvalidCloudWatchLogsRoleArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidEventCategoryExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidEventCategoryException(body, context);
        contents = __assign({ name: "InvalidEventCategoryException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidEventSelectorsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidEventSelectorsException(body, context);
        contents = __assign({ name: "InvalidEventSelectorsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidHomeRegionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidHomeRegionException(body, context);
        contents = __assign({ name: "InvalidHomeRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidInsightSelectorsException(body, context);
        contents = __assign({ name: "InvalidInsightSelectorsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidKmsKeyIdException(body, context);
        contents = __assign({ name: "InvalidKmsKeyIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidLookupAttributesExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidLookupAttributesException(body, context);
        contents = __assign({ name: "InvalidLookupAttributesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidMaxResultsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidMaxResultsException(body, context);
        contents = __assign({ name: "InvalidMaxResultsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
        contents = __assign({ name: "InvalidParameterCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidS3BucketNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidS3BucketNameException(body, context);
        contents = __assign({ name: "InvalidS3BucketNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidS3PrefixExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidS3PrefixException(body, context);
        contents = __assign({ name: "InvalidS3PrefixException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidSnsTopicNameException(body, context);
        contents = __assign({ name: "InvalidSnsTopicNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTagParameterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTagParameterException(body, context);
        contents = __assign({ name: "InvalidTagParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTimeRangeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTimeRangeException(body, context);
        contents = __assign({ name: "InvalidTimeRangeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTokenException(body, context);
        contents = __assign({ name: "InvalidTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTrailNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTrailNameException(body, context);
        contents = __assign({ name: "InvalidTrailNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KmsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KmsException(body, context);
        contents = __assign({ name: "KmsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KmsKeyDisabledExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KmsKeyDisabledException(body, context);
        contents = __assign({ name: "KmsKeyDisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1KmsKeyNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1KmsKeyNotFoundException(body, context);
        contents = __assign({ name: "KmsKeyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MaximumNumberOfTrailsExceededException(body, context);
        contents = __assign({ name: "MaximumNumberOfTrailsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NotOrganizationMasterAccountException(body, context);
        contents = __assign({ name: "NotOrganizationMasterAccountException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OperationNotPermittedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
        contents = __assign({ name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OrganizationNotInAllFeaturesModeException(body, context);
        contents = __assign({ name: "OrganizationNotInAllFeaturesModeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OrganizationsNotInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OrganizationsNotInUseException(body, context);
        contents = __assign({ name: "OrganizationsNotInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceTypeNotSupportedException(body, context);
        contents = __assign({ name: "ResourceTypeNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1S3BucketDoesNotExistException(body, context);
        contents = __assign({ name: "S3BucketDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TagsLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TagsLimitExceededException(body, context);
        contents = __assign({ name: "TagsLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TrailAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TrailAlreadyExistsException(body, context);
        contents = __assign({ name: "TrailAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TrailNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TrailNotFoundException(body, context);
        contents = __assign({ name: "TrailNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TrailNotProvidedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TrailNotProvidedException(body, context);
        contents = __assign({ name: "TrailNotProvidedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
        contents = __assign({ name: "UnsupportedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AddTagsRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.TagsList !== undefined &&
        input.TagsList !== null && { TagsList: serializeAws_json1_1TagsList(input.TagsList, context) }));
};
var serializeAws_json1_1AdvancedEventSelector = function (input, context) {
    return __assign(__assign({}, (input.FieldSelectors !== undefined &&
        input.FieldSelectors !== null && {
        FieldSelectors: serializeAws_json1_1AdvancedFieldSelectors(input.FieldSelectors, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1AdvancedEventSelectors = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AdvancedEventSelector(entry, context);
    });
};
var serializeAws_json1_1AdvancedFieldSelector = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.EndsWith !== undefined &&
        input.EndsWith !== null && { EndsWith: serializeAws_json1_1Operator(input.EndsWith, context) })), (input.Equals !== undefined &&
        input.Equals !== null && { Equals: serializeAws_json1_1Operator(input.Equals, context) })), (input.Field !== undefined && input.Field !== null && { Field: input.Field })), (input.NotEndsWith !== undefined &&
        input.NotEndsWith !== null && { NotEndsWith: serializeAws_json1_1Operator(input.NotEndsWith, context) })), (input.NotEquals !== undefined &&
        input.NotEquals !== null && { NotEquals: serializeAws_json1_1Operator(input.NotEquals, context) })), (input.NotStartsWith !== undefined &&
        input.NotStartsWith !== null && { NotStartsWith: serializeAws_json1_1Operator(input.NotStartsWith, context) })), (input.StartsWith !== undefined &&
        input.StartsWith !== null && { StartsWith: serializeAws_json1_1Operator(input.StartsWith, context) }));
};
var serializeAws_json1_1AdvancedFieldSelectors = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AdvancedFieldSelector(entry, context);
    });
};
var serializeAws_json1_1CreateTrailRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CloudWatchLogsLogGroupArn !== undefined &&
        input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn })), (input.CloudWatchLogsRoleArn !== undefined &&
        input.CloudWatchLogsRoleArn !== null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn })), (input.EnableLogFileValidation !== undefined &&
        input.EnableLogFileValidation !== null && { EnableLogFileValidation: input.EnableLogFileValidation })), (input.IncludeGlobalServiceEvents !== undefined &&
        input.IncludeGlobalServiceEvents !== null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents })), (input.IsMultiRegionTrail !== undefined &&
        input.IsMultiRegionTrail !== null && { IsMultiRegionTrail: input.IsMultiRegionTrail })), (input.IsOrganizationTrail !== undefined &&
        input.IsOrganizationTrail !== null && { IsOrganizationTrail: input.IsOrganizationTrail })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName })), (input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix })), (input.SnsTopicName !== undefined && input.SnsTopicName !== null && { SnsTopicName: input.SnsTopicName })), (input.TagsList !== undefined &&
        input.TagsList !== null && { TagsList: serializeAws_json1_1TagsList(input.TagsList, context) }));
};
var serializeAws_json1_1DataResource = function (input, context) {
    return __assign(__assign({}, (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_json1_1DataResourceValues(input.Values, context) }));
};
var serializeAws_json1_1DataResources = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DataResource(entry, context);
    });
};
var serializeAws_json1_1DataResourceValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DeleteTrailRequest = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1DescribeTrailsRequest = function (input, context) {
    return __assign(__assign({}, (input.includeShadowTrails !== undefined &&
        input.includeShadowTrails !== null && { includeShadowTrails: input.includeShadowTrails })), (input.trailNameList !== undefined &&
        input.trailNameList !== null && {
        trailNameList: serializeAws_json1_1TrailNameList(input.trailNameList, context),
    }));
};
var serializeAws_json1_1EventSelector = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DataResources !== undefined &&
        input.DataResources !== null && {
        DataResources: serializeAws_json1_1DataResources(input.DataResources, context),
    })), (input.ExcludeManagementEventSources !== undefined &&
        input.ExcludeManagementEventSources !== null && {
        ExcludeManagementEventSources: serializeAws_json1_1ExcludeManagementEventSources(input.ExcludeManagementEventSources, context),
    })), (input.IncludeManagementEvents !== undefined &&
        input.IncludeManagementEvents !== null && { IncludeManagementEvents: input.IncludeManagementEvents })), (input.ReadWriteType !== undefined && input.ReadWriteType !== null && { ReadWriteType: input.ReadWriteType }));
};
var serializeAws_json1_1EventSelectors = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EventSelector(entry, context);
    });
};
var serializeAws_json1_1ExcludeManagementEventSources = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1GetEventSelectorsRequest = function (input, context) {
    return __assign({}, (input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }));
};
var serializeAws_json1_1GetInsightSelectorsRequest = function (input, context) {
    return __assign({}, (input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }));
};
var serializeAws_json1_1GetTrailRequest = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1GetTrailStatusRequest = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1InsightSelector = function (input, context) {
    return __assign({}, (input.InsightType !== undefined && input.InsightType !== null && { InsightType: input.InsightType }));
};
var serializeAws_json1_1InsightSelectors = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InsightSelector(entry, context);
    });
};
var serializeAws_json1_1ListPublicKeysRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.EndTime !== undefined &&
        input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }));
};
var serializeAws_json1_1ListTagsRequest = function (input, context) {
    return __assign(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceIdList !== undefined &&
        input.ResourceIdList !== null && {
        ResourceIdList: serializeAws_json1_1ResourceIdList(input.ResourceIdList, context),
    }));
};
var serializeAws_json1_1ListTrailsRequest = function (input, context) {
    return __assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1LookupAttribute = function (input, context) {
    return __assign(__assign({}, (input.AttributeKey !== undefined && input.AttributeKey !== null && { AttributeKey: input.AttributeKey })), (input.AttributeValue !== undefined &&
        input.AttributeValue !== null && { AttributeValue: input.AttributeValue }));
};
var serializeAws_json1_1LookupAttributesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LookupAttribute(entry, context);
    });
};
var serializeAws_json1_1LookupEventsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
        input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.EventCategory !== undefined && input.EventCategory !== null && { EventCategory: input.EventCategory })), (input.LookupAttributes !== undefined &&
        input.LookupAttributes !== null && {
        LookupAttributes: serializeAws_json1_1LookupAttributesList(input.LookupAttributes, context),
    })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }));
};
var serializeAws_json1_1Operator = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1PutEventSelectorsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AdvancedEventSelectors !== undefined &&
        input.AdvancedEventSelectors !== null && {
        AdvancedEventSelectors: serializeAws_json1_1AdvancedEventSelectors(input.AdvancedEventSelectors, context),
    })), (input.EventSelectors !== undefined &&
        input.EventSelectors !== null && {
        EventSelectors: serializeAws_json1_1EventSelectors(input.EventSelectors, context),
    })), (input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }));
};
var serializeAws_json1_1PutInsightSelectorsRequest = function (input, context) {
    return __assign(__assign({}, (input.InsightSelectors !== undefined &&
        input.InsightSelectors !== null && {
        InsightSelectors: serializeAws_json1_1InsightSelectors(input.InsightSelectors, context),
    })), (input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }));
};
var serializeAws_json1_1RemoveTagsRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.TagsList !== undefined &&
        input.TagsList !== null && { TagsList: serializeAws_json1_1TagsList(input.TagsList, context) }));
};
var serializeAws_json1_1ResourceIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1StartLoggingRequest = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1StopLoggingRequest = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1TagsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TrailNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1UpdateTrailRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CloudWatchLogsLogGroupArn !== undefined &&
        input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn })), (input.CloudWatchLogsRoleArn !== undefined &&
        input.CloudWatchLogsRoleArn !== null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn })), (input.EnableLogFileValidation !== undefined &&
        input.EnableLogFileValidation !== null && { EnableLogFileValidation: input.EnableLogFileValidation })), (input.IncludeGlobalServiceEvents !== undefined &&
        input.IncludeGlobalServiceEvents !== null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents })), (input.IsMultiRegionTrail !== undefined &&
        input.IsMultiRegionTrail !== null && { IsMultiRegionTrail: input.IsMultiRegionTrail })), (input.IsOrganizationTrail !== undefined &&
        input.IsOrganizationTrail !== null && { IsOrganizationTrail: input.IsOrganizationTrail })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName })), (input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix })), (input.SnsTopicName !== undefined && input.SnsTopicName !== null && { SnsTopicName: input.SnsTopicName }));
};
var deserializeAws_json1_1AddTagsResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1AdvancedEventSelector = function (output, context) {
    return {
        FieldSelectors: output.FieldSelectors !== undefined && output.FieldSelectors !== null
            ? deserializeAws_json1_1AdvancedFieldSelectors(output.FieldSelectors, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1AdvancedEventSelectors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AdvancedEventSelector(entry, context);
    });
};
var deserializeAws_json1_1AdvancedFieldSelector = function (output, context) {
    return {
        EndsWith: output.EndsWith !== undefined && output.EndsWith !== null
            ? deserializeAws_json1_1Operator(output.EndsWith, context)
            : undefined,
        Equals: output.Equals !== undefined && output.Equals !== null
            ? deserializeAws_json1_1Operator(output.Equals, context)
            : undefined,
        Field: output.Field !== undefined && output.Field !== null ? output.Field : undefined,
        NotEndsWith: output.NotEndsWith !== undefined && output.NotEndsWith !== null
            ? deserializeAws_json1_1Operator(output.NotEndsWith, context)
            : undefined,
        NotEquals: output.NotEquals !== undefined && output.NotEquals !== null
            ? deserializeAws_json1_1Operator(output.NotEquals, context)
            : undefined,
        NotStartsWith: output.NotStartsWith !== undefined && output.NotStartsWith !== null
            ? deserializeAws_json1_1Operator(output.NotStartsWith, context)
            : undefined,
        StartsWith: output.StartsWith !== undefined && output.StartsWith !== null
            ? deserializeAws_json1_1Operator(output.StartsWith, context)
            : undefined,
    };
};
var deserializeAws_json1_1AdvancedFieldSelectors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AdvancedFieldSelector(entry, context);
    });
};
var deserializeAws_json1_1CloudTrailAccessNotEnabledException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1CloudTrailARNInvalidException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1CloudTrailInvalidClientTokenIdException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ConflictException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1CreateTrailResponse = function (output, context) {
    return {
        CloudWatchLogsLogGroupArn: output.CloudWatchLogsLogGroupArn !== undefined && output.CloudWatchLogsLogGroupArn !== null
            ? output.CloudWatchLogsLogGroupArn
            : undefined,
        CloudWatchLogsRoleArn: output.CloudWatchLogsRoleArn !== undefined && output.CloudWatchLogsRoleArn !== null
            ? output.CloudWatchLogsRoleArn
            : undefined,
        IncludeGlobalServiceEvents: output.IncludeGlobalServiceEvents !== undefined && output.IncludeGlobalServiceEvents !== null
            ? output.IncludeGlobalServiceEvents
            : undefined,
        IsMultiRegionTrail: output.IsMultiRegionTrail !== undefined && output.IsMultiRegionTrail !== null
            ? output.IsMultiRegionTrail
            : undefined,
        IsOrganizationTrail: output.IsOrganizationTrail !== undefined && output.IsOrganizationTrail !== null
            ? output.IsOrganizationTrail
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LogFileValidationEnabled: output.LogFileValidationEnabled !== undefined && output.LogFileValidationEnabled !== null
            ? output.LogFileValidationEnabled
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
        S3KeyPrefix: output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null ? output.S3KeyPrefix : undefined,
        SnsTopicARN: output.SnsTopicARN !== undefined && output.SnsTopicARN !== null ? output.SnsTopicARN : undefined,
        SnsTopicName: output.SnsTopicName !== undefined && output.SnsTopicName !== null ? output.SnsTopicName : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
var deserializeAws_json1_1DataResource = function (output, context) {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1DataResourceValues(output.Values, context)
            : undefined,
    };
};
var deserializeAws_json1_1DataResources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataResource(entry, context);
    });
};
var deserializeAws_json1_1DataResourceValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DeleteTrailResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DescribeTrailsResponse = function (output, context) {
    return {
        trailList: output.trailList !== undefined && output.trailList !== null
            ? deserializeAws_json1_1TrailList(output.trailList, context)
            : undefined,
    };
};
var deserializeAws_json1_1Event = function (output, context) {
    return {
        AccessKeyId: output.AccessKeyId !== undefined && output.AccessKeyId !== null ? output.AccessKeyId : undefined,
        CloudTrailEvent: output.CloudTrailEvent !== undefined && output.CloudTrailEvent !== null ? output.CloudTrailEvent : undefined,
        EventId: output.EventId !== undefined && output.EventId !== null ? output.EventId : undefined,
        EventName: output.EventName !== undefined && output.EventName !== null ? output.EventName : undefined,
        EventSource: output.EventSource !== undefined && output.EventSource !== null ? output.EventSource : undefined,
        EventTime: output.EventTime !== undefined && output.EventTime !== null
            ? new Date(Math.round(output.EventTime * 1000))
            : undefined,
        ReadOnly: output.ReadOnly !== undefined && output.ReadOnly !== null ? output.ReadOnly : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_json1_1ResourceList(output.Resources, context)
            : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
var deserializeAws_json1_1EventSelector = function (output, context) {
    return {
        DataResources: output.DataResources !== undefined && output.DataResources !== null
            ? deserializeAws_json1_1DataResources(output.DataResources, context)
            : undefined,
        ExcludeManagementEventSources: output.ExcludeManagementEventSources !== undefined && output.ExcludeManagementEventSources !== null
            ? deserializeAws_json1_1ExcludeManagementEventSources(output.ExcludeManagementEventSources, context)
            : undefined,
        IncludeManagementEvents: output.IncludeManagementEvents !== undefined && output.IncludeManagementEvents !== null
            ? output.IncludeManagementEvents
            : undefined,
        ReadWriteType: output.ReadWriteType !== undefined && output.ReadWriteType !== null ? output.ReadWriteType : undefined,
    };
};
var deserializeAws_json1_1EventSelectors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventSelector(entry, context);
    });
};
var deserializeAws_json1_1EventsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Event(entry, context);
    });
};
var deserializeAws_json1_1ExcludeManagementEventSources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1GetEventSelectorsResponse = function (output, context) {
    return {
        AdvancedEventSelectors: output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
            ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
            : undefined,
        EventSelectors: output.EventSelectors !== undefined && output.EventSelectors !== null
            ? deserializeAws_json1_1EventSelectors(output.EventSelectors, context)
            : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
var deserializeAws_json1_1GetInsightSelectorsResponse = function (output, context) {
    return {
        InsightSelectors: output.InsightSelectors !== undefined && output.InsightSelectors !== null
            ? deserializeAws_json1_1InsightSelectors(output.InsightSelectors, context)
            : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
var deserializeAws_json1_1GetTrailResponse = function (output, context) {
    return {
        Trail: output.Trail !== undefined && output.Trail !== null
            ? deserializeAws_json1_1Trail(output.Trail, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetTrailStatusResponse = function (output, context) {
    return {
        IsLogging: output.IsLogging !== undefined && output.IsLogging !== null ? output.IsLogging : undefined,
        LatestCloudWatchLogsDeliveryError: output.LatestCloudWatchLogsDeliveryError !== undefined && output.LatestCloudWatchLogsDeliveryError !== null
            ? output.LatestCloudWatchLogsDeliveryError
            : undefined,
        LatestCloudWatchLogsDeliveryTime: output.LatestCloudWatchLogsDeliveryTime !== undefined && output.LatestCloudWatchLogsDeliveryTime !== null
            ? new Date(Math.round(output.LatestCloudWatchLogsDeliveryTime * 1000))
            : undefined,
        LatestDeliveryAttemptSucceeded: output.LatestDeliveryAttemptSucceeded !== undefined && output.LatestDeliveryAttemptSucceeded !== null
            ? output.LatestDeliveryAttemptSucceeded
            : undefined,
        LatestDeliveryAttemptTime: output.LatestDeliveryAttemptTime !== undefined && output.LatestDeliveryAttemptTime !== null
            ? output.LatestDeliveryAttemptTime
            : undefined,
        LatestDeliveryError: output.LatestDeliveryError !== undefined && output.LatestDeliveryError !== null
            ? output.LatestDeliveryError
            : undefined,
        LatestDeliveryTime: output.LatestDeliveryTime !== undefined && output.LatestDeliveryTime !== null
            ? new Date(Math.round(output.LatestDeliveryTime * 1000))
            : undefined,
        LatestDigestDeliveryError: output.LatestDigestDeliveryError !== undefined && output.LatestDigestDeliveryError !== null
            ? output.LatestDigestDeliveryError
            : undefined,
        LatestDigestDeliveryTime: output.LatestDigestDeliveryTime !== undefined && output.LatestDigestDeliveryTime !== null
            ? new Date(Math.round(output.LatestDigestDeliveryTime * 1000))
            : undefined,
        LatestNotificationAttemptSucceeded: output.LatestNotificationAttemptSucceeded !== undefined && output.LatestNotificationAttemptSucceeded !== null
            ? output.LatestNotificationAttemptSucceeded
            : undefined,
        LatestNotificationAttemptTime: output.LatestNotificationAttemptTime !== undefined && output.LatestNotificationAttemptTime !== null
            ? output.LatestNotificationAttemptTime
            : undefined,
        LatestNotificationError: output.LatestNotificationError !== undefined && output.LatestNotificationError !== null
            ? output.LatestNotificationError
            : undefined,
        LatestNotificationTime: output.LatestNotificationTime !== undefined && output.LatestNotificationTime !== null
            ? new Date(Math.round(output.LatestNotificationTime * 1000))
            : undefined,
        StartLoggingTime: output.StartLoggingTime !== undefined && output.StartLoggingTime !== null
            ? new Date(Math.round(output.StartLoggingTime * 1000))
            : undefined,
        StopLoggingTime: output.StopLoggingTime !== undefined && output.StopLoggingTime !== null
            ? new Date(Math.round(output.StopLoggingTime * 1000))
            : undefined,
        TimeLoggingStarted: output.TimeLoggingStarted !== undefined && output.TimeLoggingStarted !== null
            ? output.TimeLoggingStarted
            : undefined,
        TimeLoggingStopped: output.TimeLoggingStopped !== undefined && output.TimeLoggingStopped !== null
            ? output.TimeLoggingStopped
            : undefined,
    };
};
var deserializeAws_json1_1InsightNotEnabledException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InsightSelector = function (output, context) {
    return {
        InsightType: output.InsightType !== undefined && output.InsightType !== null ? output.InsightType : undefined,
    };
};
var deserializeAws_json1_1InsightSelectors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InsightSelector(entry, context);
    });
};
var deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InsufficientEncryptionPolicyException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InsufficientS3BucketPolicyException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InsufficientSnsTopicPolicyException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidEventCategoryException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidEventSelectorsException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidHomeRegionException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidInsightSelectorsException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidKmsKeyIdException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidLookupAttributesException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidMaxResultsException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidNextTokenException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidParameterCombinationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidS3BucketNameException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidS3PrefixException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidSnsTopicNameException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidTagParameterException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidTimeRangeException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidTokenException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidTrailNameException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1KmsException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1KmsKeyDisabledException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1KmsKeyNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ListPublicKeysResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PublicKeyList: output.PublicKeyList !== undefined && output.PublicKeyList !== null
            ? deserializeAws_json1_1PublicKeyList(output.PublicKeyList, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTagsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResourceTagList: output.ResourceTagList !== undefined && output.ResourceTagList !== null
            ? deserializeAws_json1_1ResourceTagList(output.ResourceTagList, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTrailsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Trails: output.Trails !== undefined && output.Trails !== null
            ? deserializeAws_json1_1Trails(output.Trails, context)
            : undefined,
    };
};
var deserializeAws_json1_1LookupEventsResponse = function (output, context) {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_json1_1EventsList(output.Events, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1MaximumNumberOfTrailsExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1NotOrganizationMasterAccountException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1OperationNotPermittedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1Operator = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1OrganizationNotInAllFeaturesModeException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1OrganizationsNotInUseException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1PublicKey = function (output, context) {
    return {
        Fingerprint: output.Fingerprint !== undefined && output.Fingerprint !== null ? output.Fingerprint : undefined,
        ValidityEndTime: output.ValidityEndTime !== undefined && output.ValidityEndTime !== null
            ? new Date(Math.round(output.ValidityEndTime * 1000))
            : undefined,
        ValidityStartTime: output.ValidityStartTime !== undefined && output.ValidityStartTime !== null
            ? new Date(Math.round(output.ValidityStartTime * 1000))
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? context.base64Decoder(output.Value) : undefined,
    };
};
var deserializeAws_json1_1PublicKeyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PublicKey(entry, context);
    });
};
var deserializeAws_json1_1PutEventSelectorsResponse = function (output, context) {
    return {
        AdvancedEventSelectors: output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
            ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
            : undefined,
        EventSelectors: output.EventSelectors !== undefined && output.EventSelectors !== null
            ? deserializeAws_json1_1EventSelectors(output.EventSelectors, context)
            : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
var deserializeAws_json1_1PutInsightSelectorsResponse = function (output, context) {
    return {
        InsightSelectors: output.InsightSelectors !== undefined && output.InsightSelectors !== null
            ? deserializeAws_json1_1InsightSelectors(output.InsightSelectors, context)
            : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
var deserializeAws_json1_1RemoveTagsResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1Resource = function (output, context) {
    return {
        ResourceName: output.ResourceName !== undefined && output.ResourceName !== null ? output.ResourceName : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
var deserializeAws_json1_1ResourceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Resource(entry, context);
    });
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ResourceTag = function (output, context) {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        TagsList: output.TagsList !== undefined && output.TagsList !== null
            ? deserializeAws_json1_1TagsList(output.TagsList, context)
            : undefined,
    };
};
var deserializeAws_json1_1ResourceTagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceTag(entry, context);
    });
};
var deserializeAws_json1_1ResourceTypeNotSupportedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1S3BucketDoesNotExistException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1StartLoggingResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1StopLoggingResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1TagsLimitExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1TagsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1Trail = function (output, context) {
    return {
        CloudWatchLogsLogGroupArn: output.CloudWatchLogsLogGroupArn !== undefined && output.CloudWatchLogsLogGroupArn !== null
            ? output.CloudWatchLogsLogGroupArn
            : undefined,
        CloudWatchLogsRoleArn: output.CloudWatchLogsRoleArn !== undefined && output.CloudWatchLogsRoleArn !== null
            ? output.CloudWatchLogsRoleArn
            : undefined,
        HasCustomEventSelectors: output.HasCustomEventSelectors !== undefined && output.HasCustomEventSelectors !== null
            ? output.HasCustomEventSelectors
            : undefined,
        HasInsightSelectors: output.HasInsightSelectors !== undefined && output.HasInsightSelectors !== null
            ? output.HasInsightSelectors
            : undefined,
        HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
        IncludeGlobalServiceEvents: output.IncludeGlobalServiceEvents !== undefined && output.IncludeGlobalServiceEvents !== null
            ? output.IncludeGlobalServiceEvents
            : undefined,
        IsMultiRegionTrail: output.IsMultiRegionTrail !== undefined && output.IsMultiRegionTrail !== null
            ? output.IsMultiRegionTrail
            : undefined,
        IsOrganizationTrail: output.IsOrganizationTrail !== undefined && output.IsOrganizationTrail !== null
            ? output.IsOrganizationTrail
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LogFileValidationEnabled: output.LogFileValidationEnabled !== undefined && output.LogFileValidationEnabled !== null
            ? output.LogFileValidationEnabled
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
        S3KeyPrefix: output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null ? output.S3KeyPrefix : undefined,
        SnsTopicARN: output.SnsTopicARN !== undefined && output.SnsTopicARN !== null ? output.SnsTopicARN : undefined,
        SnsTopicName: output.SnsTopicName !== undefined && output.SnsTopicName !== null ? output.SnsTopicName : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
var deserializeAws_json1_1TrailAlreadyExistsException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1TrailInfo = function (output, context) {
    return {
        HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
var deserializeAws_json1_1TrailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Trail(entry, context);
    });
};
var deserializeAws_json1_1TrailNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1TrailNotProvidedException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1Trails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TrailInfo(entry, context);
    });
};
var deserializeAws_json1_1UnsupportedOperationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1UpdateTrailResponse = function (output, context) {
    return {
        CloudWatchLogsLogGroupArn: output.CloudWatchLogsLogGroupArn !== undefined && output.CloudWatchLogsLogGroupArn !== null
            ? output.CloudWatchLogsLogGroupArn
            : undefined,
        CloudWatchLogsRoleArn: output.CloudWatchLogsRoleArn !== undefined && output.CloudWatchLogsRoleArn !== null
            ? output.CloudWatchLogsRoleArn
            : undefined,
        IncludeGlobalServiceEvents: output.IncludeGlobalServiceEvents !== undefined && output.IncludeGlobalServiceEvents !== null
            ? output.IncludeGlobalServiceEvents
            : undefined,
        IsMultiRegionTrail: output.IsMultiRegionTrail !== undefined && output.IsMultiRegionTrail !== null
            ? output.IsMultiRegionTrail
            : undefined,
        IsOrganizationTrail: output.IsOrganizationTrail !== undefined && output.IsOrganizationTrail !== null
            ? output.IsOrganizationTrail
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LogFileValidationEnabled: output.LogFileValidationEnabled !== undefined && output.LogFileValidationEnabled !== null
            ? output.LogFileValidationEnabled
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
        S3KeyPrefix: output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null ? output.S3KeyPrefix : undefined,
        SnsTopicARN: output.SnsTopicARN !== undefined && output.SnsTopicARN !== null ? output.SnsTopicARN : undefined,
        SnsTopicName: output.SnsTopicName !== undefined && output.SnsTopicName !== null ? output.SnsTopicName : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
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