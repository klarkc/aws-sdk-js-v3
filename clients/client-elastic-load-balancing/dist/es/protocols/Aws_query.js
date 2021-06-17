import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryAddTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddTagsInput(input, context)), { Action: "AddTags", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryApplySecurityGroupsToLoadBalancerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryApplySecurityGroupsToLoadBalancerInput(input, context)), { Action: "ApplySecurityGroupsToLoadBalancer", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAttachLoadBalancerToSubnetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAttachLoadBalancerToSubnetsInput(input, context)), { Action: "AttachLoadBalancerToSubnets", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryConfigureHealthCheckCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryConfigureHealthCheckInput(input, context)), { Action: "ConfigureHealthCheck", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateAppCookieStickinessPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateAppCookieStickinessPolicyInput(input, context)), { Action: "CreateAppCookieStickinessPolicy", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateLBCookieStickinessPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateLBCookieStickinessPolicyInput(input, context)), { Action: "CreateLBCookieStickinessPolicy", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateLoadBalancerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateAccessPointInput(input, context)), { Action: "CreateLoadBalancer", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateLoadBalancerListenersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateLoadBalancerListenerInput(input, context)), { Action: "CreateLoadBalancerListeners", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateLoadBalancerPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateLoadBalancerPolicyInput(input, context)), { Action: "CreateLoadBalancerPolicy", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteLoadBalancerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteAccessPointInput(input, context)), { Action: "DeleteLoadBalancer", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteLoadBalancerListenersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteLoadBalancerListenerInput(input, context)), { Action: "DeleteLoadBalancerListeners", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteLoadBalancerPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteLoadBalancerPolicyInput(input, context)), { Action: "DeleteLoadBalancerPolicy", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeregisterInstancesFromLoadBalancerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeregisterEndPointsInput(input, context)), { Action: "DeregisterInstancesFromLoadBalancer", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeAccountLimitsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeAccountLimitsInput(input, context)), { Action: "DescribeAccountLimits", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeInstanceHealthCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEndPointStateInput(input, context)), { Action: "DescribeInstanceHealth", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeLoadBalancerAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeLoadBalancerAttributesInput(input, context)), { Action: "DescribeLoadBalancerAttributes", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeLoadBalancerPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeLoadBalancerPoliciesInput(input, context)), { Action: "DescribeLoadBalancerPolicies", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeLoadBalancerPolicyTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeLoadBalancerPolicyTypesInput(input, context)), { Action: "DescribeLoadBalancerPolicyTypes", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeLoadBalancersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeAccessPointsInput(input, context)), { Action: "DescribeLoadBalancers", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeTagsInput(input, context)), { Action: "DescribeTags", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDetachLoadBalancerFromSubnetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDetachLoadBalancerFromSubnetsInput(input, context)), { Action: "DetachLoadBalancerFromSubnets", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveAvailabilityZonesInput(input, context)), { Action: "DisableAvailabilityZonesForLoadBalancer", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddAvailabilityZonesInput(input, context)), { Action: "EnableAvailabilityZonesForLoadBalancer", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyLoadBalancerAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyLoadBalancerAttributesInput(input, context)), { Action: "ModifyLoadBalancerAttributes", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRegisterInstancesWithLoadBalancerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRegisterEndPointsInput(input, context)), { Action: "RegisterInstancesWithLoadBalancer", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemoveTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveTagsInput(input, context)), { Action: "RemoveTags", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetLoadBalancerListenerSSLCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetLoadBalancerListenerSSLCertificateInput(input, context)), { Action: "SetLoadBalancerListenerSSLCertificate", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetLoadBalancerPoliciesForBackendServerInput(input, context)), { Action: "SetLoadBalancerPoliciesForBackendServer", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetLoadBalancerPoliciesOfListenerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetLoadBalancerPoliciesOfListenerInput(input, context)), { Action: "SetLoadBalancerPoliciesOfListener", Version: "2012-06-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryAddTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAddTagsOutput(data.AddTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAddTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "DuplicateTagKeysException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#DuplicateTagKeysException": return [3 /*break*/, 4];
                    case "TooManyTagsException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#TooManyTagsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput(data.ApplySecurityGroupsToLoadBalancerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "InvalidSecurityGroupException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#InvalidSecurityGroupException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAttachLoadBalancerToSubnetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAttachLoadBalancerToSubnetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAttachLoadBalancerToSubnetsOutput(data.AttachLoadBalancerToSubnetsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAttachLoadBalancerToSubnetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "InvalidSubnetException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#InvalidSubnetException": return [3 /*break*/, 6];
                    case "SubnetNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancing#SubnetNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryConfigureHealthCheckCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryConfigureHealthCheckCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryConfigureHealthCheckOutput(data.ConfigureHealthCheckResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryConfigureHealthCheckCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateAppCookieStickinessPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateAppCookieStickinessPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateAppCookieStickinessPolicyOutput(data.CreateAppCookieStickinessPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateAppCookieStickinessPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "DuplicatePolicyNameException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#DuplicatePolicyNameException": return [3 /*break*/, 4];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 6];
                    case "TooManyPoliciesException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateLBCookieStickinessPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateLBCookieStickinessPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateLBCookieStickinessPolicyOutput(data.CreateLBCookieStickinessPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateLBCookieStickinessPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "DuplicatePolicyNameException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#DuplicatePolicyNameException": return [3 /*break*/, 4];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 6];
                    case "TooManyPoliciesException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateLoadBalancerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateLoadBalancerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateAccessPointOutput(data.CreateLoadBalancerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateLoadBalancerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, parsedBody, message;
    var _q;
    return __generator(this, function (_r) {
        switch (_r.label) {
            case 0:
                _a = [__assign({}, output)];
                _q = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_q.body = _r.sent(), _q)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CertificateNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#CertificateNotFoundException": return [3 /*break*/, 2];
                    case "DuplicateAccessPointNameException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#DuplicateAccessPointNameException": return [3 /*break*/, 4];
                    case "DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#DuplicateTagKeysException": return [3 /*break*/, 6];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 8];
                    case "InvalidSchemeException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancing#InvalidSchemeException": return [3 /*break*/, 10];
                    case "InvalidSecurityGroupException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticloadbalancing#InvalidSecurityGroupException": return [3 /*break*/, 12];
                    case "InvalidSubnetException": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticloadbalancing#InvalidSubnetException": return [3 /*break*/, 14];
                    case "OperationNotPermittedException": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticloadbalancing#OperationNotPermittedException": return [3 /*break*/, 16];
                    case "SubnetNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticloadbalancing#SubnetNotFoundException": return [3 /*break*/, 18];
                    case "TooManyAccessPointsException": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticloadbalancing#TooManyAccessPointsException": return [3 /*break*/, 20];
                    case "TooManyTagsException": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticloadbalancing#TooManyTagsException": return [3 /*break*/, 22];
                    case "UnsupportedProtocolException": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException": return [3 /*break*/, 24];
                }
                return [3 /*break*/, 26];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateAccessPointNameExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSchemeExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyAccessPointsExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 26:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _r.label = 27;
            case 27:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateLoadBalancerListenersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateLoadBalancerListenersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateLoadBalancerListenerOutput(data.CreateLoadBalancerListenersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateLoadBalancerListenersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "CertificateNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#CertificateNotFoundException": return [3 /*break*/, 4];
                    case "DuplicateListenerException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#DuplicateListenerException": return [3 /*break*/, 6];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 8];
                    case "UnsupportedProtocolException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateLoadBalancerPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateLoadBalancerPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateLoadBalancerPolicyOutput(data.CreateLoadBalancerPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateLoadBalancerPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "DuplicatePolicyNameException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#DuplicatePolicyNameException": return [3 /*break*/, 4];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 6];
                    case "PolicyTypeNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancing#PolicyTypeNotFoundException": return [3 /*break*/, 8];
                    case "TooManyPoliciesException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyTypeNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteLoadBalancerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteLoadBalancerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteAccessPointOutput(data.DeleteLoadBalancerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteLoadBalancerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteLoadBalancerListenersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteLoadBalancerListenersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteLoadBalancerListenerOutput(data.DeleteLoadBalancerListenersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteLoadBalancerListenersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteLoadBalancerPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteLoadBalancerPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteLoadBalancerPolicyOutput(data.DeleteLoadBalancerPolicyResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteLoadBalancerPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeregisterEndPointsOutput(data.DeregisterInstancesFromLoadBalancerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidEndPointException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidEndPointException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeAccountLimitsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeAccountLimitsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeAccountLimitsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeInstanceHealthCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeInstanceHealthCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeEndPointStateOutput(data.DescribeInstanceHealthResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeInstanceHealthCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidEndPointException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidEndPointException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeLoadBalancerAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeLoadBalancerAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeLoadBalancerAttributesOutput(data.DescribeLoadBalancerAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeLoadBalancerAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "LoadBalancerAttributeNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#LoadBalancerAttributeNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeLoadBalancerPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeLoadBalancerPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeLoadBalancerPoliciesOutput(data.DescribeLoadBalancerPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeLoadBalancerPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "PolicyNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput(data.DescribeLoadBalancerPolicyTypesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "PolicyTypeNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#PolicyTypeNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyTypeNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeLoadBalancersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeLoadBalancersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeAccessPointsOutput(data.DescribeLoadBalancersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeLoadBalancersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "DependencyThrottleException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#DependencyThrottleException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDependencyThrottleExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeTagsOutput(data.DescribeTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDetachLoadBalancerFromSubnetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDetachLoadBalancerFromSubnetsOutput(data.DetachLoadBalancerFromSubnetsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRemoveAvailabilityZonesOutput(data.DisableAvailabilityZonesForLoadBalancerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAddAvailabilityZonesOutput(data.EnableAvailabilityZonesForLoadBalancerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyLoadBalancerAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyLoadBalancerAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyLoadBalancerAttributesOutput(data.ModifyLoadBalancerAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyLoadBalancerAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "LoadBalancerAttributeNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#LoadBalancerAttributeNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRegisterInstancesWithLoadBalancerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRegisterEndPointsOutput(data.RegisterInstancesWithLoadBalancerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidEndPointException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidEndPointException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRemoveTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRemoveTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRemoveTagsOutput(data.RemoveTagsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRemoveTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput(data.SetLoadBalancerListenerSSLCertificateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "CertificateNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#CertificateNotFoundException": return [3 /*break*/, 4];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 6];
                    case "ListenerNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancing#ListenerNotFoundException": return [3 /*break*/, 8];
                    case "UnsupportedProtocolException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput(data.SetLoadBalancerPoliciesForBackendServerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "PolicyNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput(data.SetLoadBalancerPoliciesOfListenerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException": return [3 /*break*/, 2];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "ListenerNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancing#ListenerNotFoundException": return [3 /*break*/, 6];
                    case "PolicyNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_queryAccessPointNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAccessPointNotFoundException(body.Error, context);
        contents = __assign({ name: "AccessPointNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCertificateNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCertificateNotFoundException(body.Error, context);
        contents = __assign({ name: "CertificateNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDependencyThrottleExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDependencyThrottleException(body.Error, context);
        contents = __assign({ name: "DependencyThrottleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDuplicateAccessPointNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDuplicateAccessPointNameException(body.Error, context);
        contents = __assign({ name: "DuplicateAccessPointNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDuplicateListenerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDuplicateListenerException(body.Error, context);
        contents = __assign({ name: "DuplicateListenerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDuplicatePolicyNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDuplicatePolicyNameException(body.Error, context);
        contents = __assign({ name: "DuplicatePolicyNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDuplicateTagKeysExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDuplicateTagKeysException(body.Error, context);
        contents = __assign({ name: "DuplicateTagKeysException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidConfigurationRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidConfigurationRequestException(body.Error, context);
        contents = __assign({ name: "InvalidConfigurationRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidEndPointExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidEndPointException(body.Error, context);
        contents = __assign({ name: "InvalidEndPointException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidSchemeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidSchemeException(body.Error, context);
        contents = __assign({ name: "InvalidSchemeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidSecurityGroupExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidSecurityGroupException(body.Error, context);
        contents = __assign({ name: "InvalidSecurityGroupException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidSubnetExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidSubnetException(body.Error, context);
        contents = __assign({ name: "InvalidSubnetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryListenerNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryListenerNotFoundException(body.Error, context);
        contents = __assign({ name: "ListenerNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryLoadBalancerAttributeNotFoundException(body.Error, context);
        contents = __assign({ name: "LoadBalancerAttributeNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryOperationNotPermittedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryOperationNotPermittedException(body.Error, context);
        contents = __assign({ name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryPolicyNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryPolicyNotFoundException(body.Error, context);
        contents = __assign({ name: "PolicyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryPolicyTypeNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryPolicyTypeNotFoundException(body.Error, context);
        contents = __assign({ name: "PolicyTypeNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySubnetNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySubnetNotFoundException(body.Error, context);
        contents = __assign({ name: "SubnetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyAccessPointsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyAccessPointsException(body.Error, context);
        contents = __assign({ name: "TooManyAccessPointsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyPoliciesExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyPoliciesException(body.Error, context);
        contents = __assign({ name: "TooManyPoliciesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyTagsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyTagsException(body.Error, context);
        contents = __assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUnsupportedProtocolExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUnsupportedProtocolException(body.Error, context);
        contents = __assign({ name: "UnsupportedProtocolException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_queryAccessLog = function (input, context) {
    var entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.S3BucketName !== undefined && input.S3BucketName !== null) {
        entries["S3BucketName"] = input.S3BucketName;
    }
    if (input.EmitInterval !== undefined && input.EmitInterval !== null) {
        entries["EmitInterval"] = input.EmitInterval;
    }
    if (input.S3BucketPrefix !== undefined && input.S3BucketPrefix !== null) {
        entries["S3BucketPrefix"] = input.S3BucketPrefix;
    }
    return entries;
};
var serializeAws_queryAddAvailabilityZonesInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
        var memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AvailabilityZones." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryAdditionalAttribute = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryAdditionalAttributes = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryAdditionalAttribute(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return entries;
};
var serializeAws_queryAddTagsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
        var memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LoadBalancerNames." + key;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryApplySecurityGroupsToLoadBalancerInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.SecurityGroups !== undefined && input.SecurityGroups !== null) {
        var memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SecurityGroups." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryAttachLoadBalancerToSubnetsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Subnets !== undefined && input.Subnets !== null) {
        var memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Subnets." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryAvailabilityZones = function (input, context) {
    var e_2, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
            var entry = input_2_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return entries;
};
var serializeAws_queryConfigureHealthCheckInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.HealthCheck !== undefined && input.HealthCheck !== null) {
        var memberEntries = serializeAws_queryHealthCheck(input.HealthCheck, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "HealthCheck." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryConnectionDraining = function (input, context) {
    var entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.Timeout !== undefined && input.Timeout !== null) {
        entries["Timeout"] = input.Timeout;
    }
    return entries;
};
var serializeAws_queryConnectionSettings = function (input, context) {
    var entries = {};
    if (input.IdleTimeout !== undefined && input.IdleTimeout !== null) {
        entries["IdleTimeout"] = input.IdleTimeout;
    }
    return entries;
};
var serializeAws_queryCreateAccessPointInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Listeners !== undefined && input.Listeners !== null) {
        var memberEntries = serializeAws_queryListeners(input.Listeners, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Listeners." + key;
            entries[loc] = value;
        });
    }
    if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
        var memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AvailabilityZones." + key;
            entries[loc] = value;
        });
    }
    if (input.Subnets !== undefined && input.Subnets !== null) {
        var memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Subnets." + key;
            entries[loc] = value;
        });
    }
    if (input.SecurityGroups !== undefined && input.SecurityGroups !== null) {
        var memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SecurityGroups." + key;
            entries[loc] = value;
        });
    }
    if (input.Scheme !== undefined && input.Scheme !== null) {
        entries["Scheme"] = input.Scheme;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateAppCookieStickinessPolicyInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.CookieName !== undefined && input.CookieName !== null) {
        entries["CookieName"] = input.CookieName;
    }
    return entries;
};
var serializeAws_queryCreateLBCookieStickinessPolicyInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.CookieExpirationPeriod !== undefined && input.CookieExpirationPeriod !== null) {
        entries["CookieExpirationPeriod"] = input.CookieExpirationPeriod;
    }
    return entries;
};
var serializeAws_queryCreateLoadBalancerListenerInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Listeners !== undefined && input.Listeners !== null) {
        var memberEntries = serializeAws_queryListeners(input.Listeners, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Listeners." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateLoadBalancerPolicyInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.PolicyTypeName !== undefined && input.PolicyTypeName !== null) {
        entries["PolicyTypeName"] = input.PolicyTypeName;
    }
    if (input.PolicyAttributes !== undefined && input.PolicyAttributes !== null) {
        var memberEntries = serializeAws_queryPolicyAttributes(input.PolicyAttributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyAttributes." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCrossZoneLoadBalancing = function (input, context) {
    var entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
var serializeAws_queryDeleteAccessPointInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
var serializeAws_queryDeleteLoadBalancerListenerInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.LoadBalancerPorts !== undefined && input.LoadBalancerPorts !== null) {
        var memberEntries = serializeAws_queryPorts(input.LoadBalancerPorts, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LoadBalancerPorts." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeleteLoadBalancerPolicyInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
var serializeAws_queryDeregisterEndPointsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Instances !== undefined && input.Instances !== null) {
        var memberEntries = serializeAws_queryInstances(input.Instances, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Instances." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeAccessPointsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
        var memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LoadBalancerNames." + key;
            entries[loc] = value;
        });
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.PageSize !== undefined && input.PageSize !== null) {
        entries["PageSize"] = input.PageSize;
    }
    return entries;
};
var serializeAws_queryDescribeAccountLimitsInput = function (input, context) {
    var entries = {};
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.PageSize !== undefined && input.PageSize !== null) {
        entries["PageSize"] = input.PageSize;
    }
    return entries;
};
var serializeAws_queryDescribeEndPointStateInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Instances !== undefined && input.Instances !== null) {
        var memberEntries = serializeAws_queryInstances(input.Instances, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Instances." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeLoadBalancerAttributesInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
var serializeAws_queryDescribeLoadBalancerPoliciesInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
        var memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeLoadBalancerPolicyTypesInput = function (input, context) {
    var entries = {};
    if (input.PolicyTypeNames !== undefined && input.PolicyTypeNames !== null) {
        var memberEntries = serializeAws_queryPolicyTypeNames(input.PolicyTypeNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyTypeNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeTagsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
        var memberEntries = serializeAws_queryLoadBalancerNamesMax20(input.LoadBalancerNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LoadBalancerNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDetachLoadBalancerFromSubnetsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Subnets !== undefined && input.Subnets !== null) {
        var memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Subnets." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryHealthCheck = function (input, context) {
    var entries = {};
    if (input.Target !== undefined && input.Target !== null) {
        entries["Target"] = input.Target;
    }
    if (input.Interval !== undefined && input.Interval !== null) {
        entries["Interval"] = input.Interval;
    }
    if (input.Timeout !== undefined && input.Timeout !== null) {
        entries["Timeout"] = input.Timeout;
    }
    if (input.UnhealthyThreshold !== undefined && input.UnhealthyThreshold !== null) {
        entries["UnhealthyThreshold"] = input.UnhealthyThreshold;
    }
    if (input.HealthyThreshold !== undefined && input.HealthyThreshold !== null) {
        entries["HealthyThreshold"] = input.HealthyThreshold;
    }
    return entries;
};
var serializeAws_queryInstance = function (input, context) {
    var entries = {};
    if (input.InstanceId !== undefined && input.InstanceId !== null) {
        entries["InstanceId"] = input.InstanceId;
    }
    return entries;
};
var serializeAws_queryInstances = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryInstance(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (input_3_1 && !input_3_1.done && (_a = input_3.return)) _a.call(input_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return entries;
};
var serializeAws_queryListener = function (input, context) {
    var entries = {};
    if (input.Protocol !== undefined && input.Protocol !== null) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.LoadBalancerPort !== undefined && input.LoadBalancerPort !== null) {
        entries["LoadBalancerPort"] = input.LoadBalancerPort;
    }
    if (input.InstanceProtocol !== undefined && input.InstanceProtocol !== null) {
        entries["InstanceProtocol"] = input.InstanceProtocol;
    }
    if (input.InstancePort !== undefined && input.InstancePort !== null) {
        entries["InstancePort"] = input.InstancePort;
    }
    if (input.SSLCertificateId !== undefined && input.SSLCertificateId !== null) {
        entries["SSLCertificateId"] = input.SSLCertificateId;
    }
    return entries;
};
var serializeAws_queryListeners = function (input, context) {
    var e_4, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
            var entry = input_4_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryListener(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (input_4_1 && !input_4_1.done && (_a = input_4.return)) _a.call(input_4);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return entries;
};
var serializeAws_queryLoadBalancerAttributes = function (input, context) {
    var entries = {};
    if (input.CrossZoneLoadBalancing !== undefined && input.CrossZoneLoadBalancing !== null) {
        var memberEntries = serializeAws_queryCrossZoneLoadBalancing(input.CrossZoneLoadBalancing, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CrossZoneLoadBalancing." + key;
            entries[loc] = value;
        });
    }
    if (input.AccessLog !== undefined && input.AccessLog !== null) {
        var memberEntries = serializeAws_queryAccessLog(input.AccessLog, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AccessLog." + key;
            entries[loc] = value;
        });
    }
    if (input.ConnectionDraining !== undefined && input.ConnectionDraining !== null) {
        var memberEntries = serializeAws_queryConnectionDraining(input.ConnectionDraining, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ConnectionDraining." + key;
            entries[loc] = value;
        });
    }
    if (input.ConnectionSettings !== undefined && input.ConnectionSettings !== null) {
        var memberEntries = serializeAws_queryConnectionSettings(input.ConnectionSettings, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ConnectionSettings." + key;
            entries[loc] = value;
        });
    }
    if (input.AdditionalAttributes !== undefined && input.AdditionalAttributes !== null) {
        var memberEntries = serializeAws_queryAdditionalAttributes(input.AdditionalAttributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AdditionalAttributes." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryLoadBalancerNames = function (input, context) {
    var e_5, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
            var entry = input_5_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (input_5_1 && !input_5_1.done && (_a = input_5.return)) _a.call(input_5);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return entries;
};
var serializeAws_queryLoadBalancerNamesMax20 = function (input, context) {
    var e_6, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
            var entry = input_6_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (input_6_1 && !input_6_1.done && (_a = input_6.return)) _a.call(input_6);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return entries;
};
var serializeAws_queryModifyLoadBalancerAttributesInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.LoadBalancerAttributes !== undefined && input.LoadBalancerAttributes !== null) {
        var memberEntries = serializeAws_queryLoadBalancerAttributes(input.LoadBalancerAttributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LoadBalancerAttributes." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryPolicyAttribute = function (input, context) {
    var entries = {};
    if (input.AttributeName !== undefined && input.AttributeName !== null) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeValue !== undefined && input.AttributeValue !== null) {
        entries["AttributeValue"] = input.AttributeValue;
    }
    return entries;
};
var serializeAws_queryPolicyAttributes = function (input, context) {
    var e_7, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
            var entry = input_7_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryPolicyAttribute(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (input_7_1 && !input_7_1.done && (_a = input_7.return)) _a.call(input_7);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return entries;
};
var serializeAws_queryPolicyNames = function (input, context) {
    var e_8, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
            var entry = input_8_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (input_8_1 && !input_8_1.done && (_a = input_8.return)) _a.call(input_8);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return entries;
};
var serializeAws_queryPolicyTypeNames = function (input, context) {
    var e_9, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
            var entry = input_9_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (input_9_1 && !input_9_1.done && (_a = input_9.return)) _a.call(input_9);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return entries;
};
var serializeAws_queryPorts = function (input, context) {
    var e_10, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_10 = __values(input), input_10_1 = input_10.next(); !input_10_1.done; input_10_1 = input_10.next()) {
            var entry = input_10_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (input_10_1 && !input_10_1.done && (_a = input_10.return)) _a.call(input_10);
        }
        finally { if (e_10) throw e_10.error; }
    }
    return entries;
};
var serializeAws_queryRegisterEndPointsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Instances !== undefined && input.Instances !== null) {
        var memberEntries = serializeAws_queryInstances(input.Instances, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Instances." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryRemoveAvailabilityZonesInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
        var memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AvailabilityZones." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryRemoveTagsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
        var memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LoadBalancerNames." + key;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querySecurityGroups = function (input, context) {
    var e_11, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_11 = __values(input), input_11_1 = input_11.next(); !input_11_1.done; input_11_1 = input_11.next()) {
            var entry = input_11_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (input_11_1 && !input_11_1.done && (_a = input_11.return)) _a.call(input_11);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return entries;
};
var serializeAws_querySetLoadBalancerListenerSSLCertificateInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.LoadBalancerPort !== undefined && input.LoadBalancerPort !== null) {
        entries["LoadBalancerPort"] = input.LoadBalancerPort;
    }
    if (input.SSLCertificateId !== undefined && input.SSLCertificateId !== null) {
        entries["SSLCertificateId"] = input.SSLCertificateId;
    }
    return entries;
};
var serializeAws_querySetLoadBalancerPoliciesForBackendServerInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.InstancePort !== undefined && input.InstancePort !== null) {
        entries["InstancePort"] = input.InstancePort;
    }
    if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
        var memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querySetLoadBalancerPoliciesOfListenerInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.LoadBalancerPort !== undefined && input.LoadBalancerPort !== null) {
        entries["LoadBalancerPort"] = input.LoadBalancerPort;
    }
    if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
        var memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querySubnets = function (input, context) {
    var e_12, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_12 = __values(input), input_12_1 = input_12.next(); !input_12_1.done; input_12_1 = input_12.next()) {
            var entry = input_12_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_12_1) { e_12 = { error: e_12_1 }; }
    finally {
        try {
            if (input_12_1 && !input_12_1.done && (_a = input_12.return)) _a.call(input_12);
        }
        finally { if (e_12) throw e_12.error; }
    }
    return entries;
};
var serializeAws_queryTag = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryTagKeyList = function (input, context) {
    var e_13, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_13 = __values(input), input_13_1 = input_13.next(); !input_13_1.done; input_13_1 = input_13.next()) {
            var entry = input_13_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTagKeyOnly(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (input_13_1 && !input_13_1.done && (_a = input_13.return)) _a.call(input_13);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return entries;
};
var serializeAws_queryTagKeyOnly = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    return entries;
};
var serializeAws_queryTagList = function (input, context) {
    var e_14, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_14 = __values(input), input_14_1 = input_14.next(); !input_14_1.done; input_14_1 = input_14.next()) {
            var entry = input_14_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTag(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_14_1) { e_14 = { error: e_14_1 }; }
    finally {
        try {
            if (input_14_1 && !input_14_1.done && (_a = input_14.return)) _a.call(input_14);
        }
        finally { if (e_14) throw e_14.error; }
    }
    return entries;
};
var deserializeAws_queryAccessLog = function (output, context) {
    var contents = {
        Enabled: undefined,
        S3BucketName: undefined,
        EmitInterval: undefined,
        S3BucketPrefix: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["S3BucketName"] !== undefined) {
        contents.S3BucketName = output["S3BucketName"];
    }
    if (output["EmitInterval"] !== undefined) {
        contents.EmitInterval = parseInt(output["EmitInterval"]);
    }
    if (output["S3BucketPrefix"] !== undefined) {
        contents.S3BucketPrefix = output["S3BucketPrefix"];
    }
    return contents;
};
var deserializeAws_queryAccessPointNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryAddAvailabilityZonesOutput = function (output, context) {
    var contents = {
        AvailabilityZones: undefined,
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(__getArrayIfSingleItem(output["AvailabilityZones"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryAdditionalAttribute = function (output, context) {
    var contents = {
        Key: undefined,
        Value: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_queryAdditionalAttributes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAdditionalAttribute(entry, context);
    });
};
var deserializeAws_queryAddTagsOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryAppCookieStickinessPolicies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAppCookieStickinessPolicy(entry, context);
    });
};
var deserializeAws_queryAppCookieStickinessPolicy = function (output, context) {
    var contents = {
        PolicyName: undefined,
        CookieName: undefined,
    };
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["CookieName"] !== undefined) {
        contents.CookieName = output["CookieName"];
    }
    return contents;
};
var deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput = function (output, context) {
    var contents = {
        SecurityGroups: undefined,
    };
    if (output.SecurityGroups === "") {
        contents.SecurityGroups = [];
    }
    if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
        contents.SecurityGroups = deserializeAws_querySecurityGroups(__getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryAttachLoadBalancerToSubnetsOutput = function (output, context) {
    var contents = {
        Subnets: undefined,
    };
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
        contents.Subnets = deserializeAws_querySubnets(__getArrayIfSingleItem(output["Subnets"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryAvailabilityZones = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryBackendServerDescription = function (output, context) {
    var contents = {
        InstancePort: undefined,
        PolicyNames: undefined,
    };
    if (output["InstancePort"] !== undefined) {
        contents.InstancePort = parseInt(output["InstancePort"]);
    }
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = deserializeAws_queryPolicyNames(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryBackendServerDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryBackendServerDescription(entry, context);
    });
};
var deserializeAws_queryCertificateNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryConfigureHealthCheckOutput = function (output, context) {
    var contents = {
        HealthCheck: undefined,
    };
    if (output["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_queryHealthCheck(output["HealthCheck"], context);
    }
    return contents;
};
var deserializeAws_queryConnectionDraining = function (output, context) {
    var contents = {
        Enabled: undefined,
        Timeout: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["Timeout"] !== undefined) {
        contents.Timeout = parseInt(output["Timeout"]);
    }
    return contents;
};
var deserializeAws_queryConnectionSettings = function (output, context) {
    var contents = {
        IdleTimeout: undefined,
    };
    if (output["IdleTimeout"] !== undefined) {
        contents.IdleTimeout = parseInt(output["IdleTimeout"]);
    }
    return contents;
};
var deserializeAws_queryCreateAccessPointOutput = function (output, context) {
    var contents = {
        DNSName: undefined,
    };
    if (output["DNSName"] !== undefined) {
        contents.DNSName = output["DNSName"];
    }
    return contents;
};
var deserializeAws_queryCreateAppCookieStickinessPolicyOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCreateLBCookieStickinessPolicyOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCreateLoadBalancerListenerOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCreateLoadBalancerPolicyOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryCrossZoneLoadBalancing = function (output, context) {
    var contents = {
        Enabled: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    return contents;
};
var deserializeAws_queryDeleteAccessPointOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteLoadBalancerListenerOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteLoadBalancerPolicyOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDependencyThrottleException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryDeregisterEndPointsOutput = function (output, context) {
    var contents = {
        Instances: undefined,
    };
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
        contents.Instances = deserializeAws_queryInstances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeAccessPointsOutput = function (output, context) {
    var contents = {
        LoadBalancerDescriptions: undefined,
        NextMarker: undefined,
    };
    if (output.LoadBalancerDescriptions === "") {
        contents.LoadBalancerDescriptions = [];
    }
    if (output["LoadBalancerDescriptions"] !== undefined && output["LoadBalancerDescriptions"]["member"] !== undefined) {
        contents.LoadBalancerDescriptions = deserializeAws_queryLoadBalancerDescriptions(__getArrayIfSingleItem(output["LoadBalancerDescriptions"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
var deserializeAws_queryDescribeAccountLimitsOutput = function (output, context) {
    var contents = {
        Limits: undefined,
        NextMarker: undefined,
    };
    if (output.Limits === "") {
        contents.Limits = [];
    }
    if (output["Limits"] !== undefined && output["Limits"]["member"] !== undefined) {
        contents.Limits = deserializeAws_queryLimits(__getArrayIfSingleItem(output["Limits"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
var deserializeAws_queryDescribeEndPointStateOutput = function (output, context) {
    var contents = {
        InstanceStates: undefined,
    };
    if (output.InstanceStates === "") {
        contents.InstanceStates = [];
    }
    if (output["InstanceStates"] !== undefined && output["InstanceStates"]["member"] !== undefined) {
        contents.InstanceStates = deserializeAws_queryInstanceStates(__getArrayIfSingleItem(output["InstanceStates"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeLoadBalancerAttributesOutput = function (output, context) {
    var contents = {
        LoadBalancerAttributes: undefined,
    };
    if (output["LoadBalancerAttributes"] !== undefined) {
        contents.LoadBalancerAttributes = deserializeAws_queryLoadBalancerAttributes(output["LoadBalancerAttributes"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeLoadBalancerPoliciesOutput = function (output, context) {
    var contents = {
        PolicyDescriptions: undefined,
    };
    if (output.PolicyDescriptions === "") {
        contents.PolicyDescriptions = [];
    }
    if (output["PolicyDescriptions"] !== undefined && output["PolicyDescriptions"]["member"] !== undefined) {
        contents.PolicyDescriptions = deserializeAws_queryPolicyDescriptions(__getArrayIfSingleItem(output["PolicyDescriptions"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput = function (output, context) {
    var contents = {
        PolicyTypeDescriptions: undefined,
    };
    if (output.PolicyTypeDescriptions === "") {
        contents.PolicyTypeDescriptions = [];
    }
    if (output["PolicyTypeDescriptions"] !== undefined && output["PolicyTypeDescriptions"]["member"] !== undefined) {
        contents.PolicyTypeDescriptions = deserializeAws_queryPolicyTypeDescriptions(__getArrayIfSingleItem(output["PolicyTypeDescriptions"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeTagsOutput = function (output, context) {
    var contents = {
        TagDescriptions: undefined,
    };
    if (output.TagDescriptions === "") {
        contents.TagDescriptions = [];
    }
    if (output["TagDescriptions"] !== undefined && output["TagDescriptions"]["member"] !== undefined) {
        contents.TagDescriptions = deserializeAws_queryTagDescriptions(__getArrayIfSingleItem(output["TagDescriptions"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDetachLoadBalancerFromSubnetsOutput = function (output, context) {
    var contents = {
        Subnets: undefined,
    };
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
        contents.Subnets = deserializeAws_querySubnets(__getArrayIfSingleItem(output["Subnets"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDuplicateAccessPointNameException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryDuplicateListenerException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryDuplicatePolicyNameException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryDuplicateTagKeysException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryHealthCheck = function (output, context) {
    var contents = {
        Target: undefined,
        Interval: undefined,
        Timeout: undefined,
        UnhealthyThreshold: undefined,
        HealthyThreshold: undefined,
    };
    if (output["Target"] !== undefined) {
        contents.Target = output["Target"];
    }
    if (output["Interval"] !== undefined) {
        contents.Interval = parseInt(output["Interval"]);
    }
    if (output["Timeout"] !== undefined) {
        contents.Timeout = parseInt(output["Timeout"]);
    }
    if (output["UnhealthyThreshold"] !== undefined) {
        contents.UnhealthyThreshold = parseInt(output["UnhealthyThreshold"]);
    }
    if (output["HealthyThreshold"] !== undefined) {
        contents.HealthyThreshold = parseInt(output["HealthyThreshold"]);
    }
    return contents;
};
var deserializeAws_queryInstance = function (output, context) {
    var contents = {
        InstanceId: undefined,
    };
    if (output["InstanceId"] !== undefined) {
        contents.InstanceId = output["InstanceId"];
    }
    return contents;
};
var deserializeAws_queryInstances = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInstance(entry, context);
    });
};
var deserializeAws_queryInstanceState = function (output, context) {
    var contents = {
        InstanceId: undefined,
        State: undefined,
        ReasonCode: undefined,
        Description: undefined,
    };
    if (output["InstanceId"] !== undefined) {
        contents.InstanceId = output["InstanceId"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["ReasonCode"] !== undefined) {
        contents.ReasonCode = output["ReasonCode"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
var deserializeAws_queryInstanceStates = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInstanceState(entry, context);
    });
};
var deserializeAws_queryInvalidConfigurationRequestException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryInvalidEndPointException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryInvalidSchemeException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryInvalidSecurityGroupException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryInvalidSubnetException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryLBCookieStickinessPolicies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLBCookieStickinessPolicy(entry, context);
    });
};
var deserializeAws_queryLBCookieStickinessPolicy = function (output, context) {
    var contents = {
        PolicyName: undefined,
        CookieExpirationPeriod: undefined,
    };
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["CookieExpirationPeriod"] !== undefined) {
        contents.CookieExpirationPeriod = parseInt(output["CookieExpirationPeriod"]);
    }
    return contents;
};
var deserializeAws_queryLimit = function (output, context) {
    var contents = {
        Name: undefined,
        Max: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Max"] !== undefined) {
        contents.Max = output["Max"];
    }
    return contents;
};
var deserializeAws_queryLimits = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLimit(entry, context);
    });
};
var deserializeAws_queryListener = function (output, context) {
    var contents = {
        Protocol: undefined,
        LoadBalancerPort: undefined,
        InstanceProtocol: undefined,
        InstancePort: undefined,
        SSLCertificateId: undefined,
    };
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["LoadBalancerPort"] !== undefined) {
        contents.LoadBalancerPort = parseInt(output["LoadBalancerPort"]);
    }
    if (output["InstanceProtocol"] !== undefined) {
        contents.InstanceProtocol = output["InstanceProtocol"];
    }
    if (output["InstancePort"] !== undefined) {
        contents.InstancePort = parseInt(output["InstancePort"]);
    }
    if (output["SSLCertificateId"] !== undefined) {
        contents.SSLCertificateId = output["SSLCertificateId"];
    }
    return contents;
};
var deserializeAws_queryListenerDescription = function (output, context) {
    var contents = {
        Listener: undefined,
        PolicyNames: undefined,
    };
    if (output["Listener"] !== undefined) {
        contents.Listener = deserializeAws_queryListener(output["Listener"], context);
    }
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = deserializeAws_queryPolicyNames(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryListenerDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryListenerDescription(entry, context);
    });
};
var deserializeAws_queryListenerNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryLoadBalancerAttributeNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryLoadBalancerAttributes = function (output, context) {
    var contents = {
        CrossZoneLoadBalancing: undefined,
        AccessLog: undefined,
        ConnectionDraining: undefined,
        ConnectionSettings: undefined,
        AdditionalAttributes: undefined,
    };
    if (output["CrossZoneLoadBalancing"] !== undefined) {
        contents.CrossZoneLoadBalancing = deserializeAws_queryCrossZoneLoadBalancing(output["CrossZoneLoadBalancing"], context);
    }
    if (output["AccessLog"] !== undefined) {
        contents.AccessLog = deserializeAws_queryAccessLog(output["AccessLog"], context);
    }
    if (output["ConnectionDraining"] !== undefined) {
        contents.ConnectionDraining = deserializeAws_queryConnectionDraining(output["ConnectionDraining"], context);
    }
    if (output["ConnectionSettings"] !== undefined) {
        contents.ConnectionSettings = deserializeAws_queryConnectionSettings(output["ConnectionSettings"], context);
    }
    if (output.AdditionalAttributes === "") {
        contents.AdditionalAttributes = [];
    }
    if (output["AdditionalAttributes"] !== undefined && output["AdditionalAttributes"]["member"] !== undefined) {
        contents.AdditionalAttributes = deserializeAws_queryAdditionalAttributes(__getArrayIfSingleItem(output["AdditionalAttributes"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryLoadBalancerDescription = function (output, context) {
    var contents = {
        LoadBalancerName: undefined,
        DNSName: undefined,
        CanonicalHostedZoneName: undefined,
        CanonicalHostedZoneNameID: undefined,
        ListenerDescriptions: undefined,
        Policies: undefined,
        BackendServerDescriptions: undefined,
        AvailabilityZones: undefined,
        Subnets: undefined,
        VPCId: undefined,
        Instances: undefined,
        HealthCheck: undefined,
        SourceSecurityGroup: undefined,
        SecurityGroups: undefined,
        CreatedTime: undefined,
        Scheme: undefined,
    };
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
    }
    if (output["DNSName"] !== undefined) {
        contents.DNSName = output["DNSName"];
    }
    if (output["CanonicalHostedZoneName"] !== undefined) {
        contents.CanonicalHostedZoneName = output["CanonicalHostedZoneName"];
    }
    if (output["CanonicalHostedZoneNameID"] !== undefined) {
        contents.CanonicalHostedZoneNameID = output["CanonicalHostedZoneNameID"];
    }
    if (output.ListenerDescriptions === "") {
        contents.ListenerDescriptions = [];
    }
    if (output["ListenerDescriptions"] !== undefined && output["ListenerDescriptions"]["member"] !== undefined) {
        contents.ListenerDescriptions = deserializeAws_queryListenerDescriptions(__getArrayIfSingleItem(output["ListenerDescriptions"]["member"]), context);
    }
    if (output["Policies"] !== undefined) {
        contents.Policies = deserializeAws_queryPolicies(output["Policies"], context);
    }
    if (output.BackendServerDescriptions === "") {
        contents.BackendServerDescriptions = [];
    }
    if (output["BackendServerDescriptions"] !== undefined &&
        output["BackendServerDescriptions"]["member"] !== undefined) {
        contents.BackendServerDescriptions = deserializeAws_queryBackendServerDescriptions(__getArrayIfSingleItem(output["BackendServerDescriptions"]["member"]), context);
    }
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(__getArrayIfSingleItem(output["AvailabilityZones"]["member"]), context);
    }
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
        contents.Subnets = deserializeAws_querySubnets(__getArrayIfSingleItem(output["Subnets"]["member"]), context);
    }
    if (output["VPCId"] !== undefined) {
        contents.VPCId = output["VPCId"];
    }
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
        contents.Instances = deserializeAws_queryInstances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
    }
    if (output["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_queryHealthCheck(output["HealthCheck"], context);
    }
    if (output["SourceSecurityGroup"] !== undefined) {
        contents.SourceSecurityGroup = deserializeAws_querySourceSecurityGroup(output["SourceSecurityGroup"], context);
    }
    if (output.SecurityGroups === "") {
        contents.SecurityGroups = [];
    }
    if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
        contents.SecurityGroups = deserializeAws_querySecurityGroups(__getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = new Date(output["CreatedTime"]);
    }
    if (output["Scheme"] !== undefined) {
        contents.Scheme = output["Scheme"];
    }
    return contents;
};
var deserializeAws_queryLoadBalancerDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLoadBalancerDescription(entry, context);
    });
};
var deserializeAws_queryModifyLoadBalancerAttributesOutput = function (output, context) {
    var contents = {
        LoadBalancerName: undefined,
        LoadBalancerAttributes: undefined,
    };
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
    }
    if (output["LoadBalancerAttributes"] !== undefined) {
        contents.LoadBalancerAttributes = deserializeAws_queryLoadBalancerAttributes(output["LoadBalancerAttributes"], context);
    }
    return contents;
};
var deserializeAws_queryOperationNotPermittedException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryPolicies = function (output, context) {
    var contents = {
        AppCookieStickinessPolicies: undefined,
        LBCookieStickinessPolicies: undefined,
        OtherPolicies: undefined,
    };
    if (output.AppCookieStickinessPolicies === "") {
        contents.AppCookieStickinessPolicies = [];
    }
    if (output["AppCookieStickinessPolicies"] !== undefined &&
        output["AppCookieStickinessPolicies"]["member"] !== undefined) {
        contents.AppCookieStickinessPolicies = deserializeAws_queryAppCookieStickinessPolicies(__getArrayIfSingleItem(output["AppCookieStickinessPolicies"]["member"]), context);
    }
    if (output.LBCookieStickinessPolicies === "") {
        contents.LBCookieStickinessPolicies = [];
    }
    if (output["LBCookieStickinessPolicies"] !== undefined &&
        output["LBCookieStickinessPolicies"]["member"] !== undefined) {
        contents.LBCookieStickinessPolicies = deserializeAws_queryLBCookieStickinessPolicies(__getArrayIfSingleItem(output["LBCookieStickinessPolicies"]["member"]), context);
    }
    if (output.OtherPolicies === "") {
        contents.OtherPolicies = [];
    }
    if (output["OtherPolicies"] !== undefined && output["OtherPolicies"]["member"] !== undefined) {
        contents.OtherPolicies = deserializeAws_queryPolicyNames(__getArrayIfSingleItem(output["OtherPolicies"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryPolicyAttributeDescription = function (output, context) {
    var contents = {
        AttributeName: undefined,
        AttributeValue: undefined,
    };
    if (output["AttributeName"] !== undefined) {
        contents.AttributeName = output["AttributeName"];
    }
    if (output["AttributeValue"] !== undefined) {
        contents.AttributeValue = output["AttributeValue"];
    }
    return contents;
};
var deserializeAws_queryPolicyAttributeDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyAttributeDescription(entry, context);
    });
};
var deserializeAws_queryPolicyAttributeTypeDescription = function (output, context) {
    var contents = {
        AttributeName: undefined,
        AttributeType: undefined,
        Description: undefined,
        DefaultValue: undefined,
        Cardinality: undefined,
    };
    if (output["AttributeName"] !== undefined) {
        contents.AttributeName = output["AttributeName"];
    }
    if (output["AttributeType"] !== undefined) {
        contents.AttributeType = output["AttributeType"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["Cardinality"] !== undefined) {
        contents.Cardinality = output["Cardinality"];
    }
    return contents;
};
var deserializeAws_queryPolicyAttributeTypeDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyAttributeTypeDescription(entry, context);
    });
};
var deserializeAws_queryPolicyDescription = function (output, context) {
    var contents = {
        PolicyName: undefined,
        PolicyTypeName: undefined,
        PolicyAttributeDescriptions: undefined,
    };
    if (output["PolicyName"] !== undefined) {
        contents.PolicyName = output["PolicyName"];
    }
    if (output["PolicyTypeName"] !== undefined) {
        contents.PolicyTypeName = output["PolicyTypeName"];
    }
    if (output.PolicyAttributeDescriptions === "") {
        contents.PolicyAttributeDescriptions = [];
    }
    if (output["PolicyAttributeDescriptions"] !== undefined &&
        output["PolicyAttributeDescriptions"]["member"] !== undefined) {
        contents.PolicyAttributeDescriptions = deserializeAws_queryPolicyAttributeDescriptions(__getArrayIfSingleItem(output["PolicyAttributeDescriptions"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryPolicyDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyDescription(entry, context);
    });
};
var deserializeAws_queryPolicyNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryPolicyNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryPolicyTypeDescription = function (output, context) {
    var contents = {
        PolicyTypeName: undefined,
        Description: undefined,
        PolicyAttributeTypeDescriptions: undefined,
    };
    if (output["PolicyTypeName"] !== undefined) {
        contents.PolicyTypeName = output["PolicyTypeName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output.PolicyAttributeTypeDescriptions === "") {
        contents.PolicyAttributeTypeDescriptions = [];
    }
    if (output["PolicyAttributeTypeDescriptions"] !== undefined &&
        output["PolicyAttributeTypeDescriptions"]["member"] !== undefined) {
        contents.PolicyAttributeTypeDescriptions = deserializeAws_queryPolicyAttributeTypeDescriptions(__getArrayIfSingleItem(output["PolicyAttributeTypeDescriptions"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryPolicyTypeDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyTypeDescription(entry, context);
    });
};
var deserializeAws_queryPolicyTypeNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryRegisterEndPointsOutput = function (output, context) {
    var contents = {
        Instances: undefined,
    };
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
        contents.Instances = deserializeAws_queryInstances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryRemoveAvailabilityZonesOutput = function (output, context) {
    var contents = {
        AvailabilityZones: undefined,
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(__getArrayIfSingleItem(output["AvailabilityZones"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryRemoveTagsOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySecurityGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_querySourceSecurityGroup = function (output, context) {
    var contents = {
        OwnerAlias: undefined,
        GroupName: undefined,
    };
    if (output["OwnerAlias"] !== undefined) {
        contents.OwnerAlias = output["OwnerAlias"];
    }
    if (output["GroupName"] !== undefined) {
        contents.GroupName = output["GroupName"];
    }
    return contents;
};
var deserializeAws_querySubnetNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_querySubnets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryTag = function (output, context) {
    var contents = {
        Key: undefined,
        Value: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_queryTagDescription = function (output, context) {
    var contents = {
        LoadBalancerName: undefined,
        Tags: undefined,
    };
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryTagDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTagDescription(entry, context);
    });
};
var deserializeAws_queryTagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
var deserializeAws_queryTooManyAccessPointsException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTooManyPoliciesException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTooManyTagsException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryUnsupportedProtocolException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
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
            var parsedObj = xmlParse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                trimValues: false,
                tagValueProcessor: function (val, tagName) { return (val.trim() === "" ? "" : decodeHTML(val)); },
            });
            var textNodeName = "#text";
            var key = Object.keys(parsedObj)[0];
            var parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return __getValueFromTextNode(parsedObjToReturn);
        }
        return {};
    });
};
var buildFormUrlencodedString = function (formEntries) {
    return Object.entries(formEntries)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value);
    })
        .join("&");
};
var loadQueryErrorCode = function (output, data) {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map