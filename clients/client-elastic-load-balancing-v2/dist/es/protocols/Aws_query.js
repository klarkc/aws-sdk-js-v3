import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryAddListenerCertificatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddListenerCertificatesInput(input, context)), { Action: "AddListenerCertificates", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAddTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddTagsInput(input, context)), { Action: "AddTags", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateListenerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateListenerInput(input, context)), { Action: "CreateListener", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateLoadBalancerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateLoadBalancerInput(input, context)), { Action: "CreateLoadBalancer", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateRuleInput(input, context)), { Action: "CreateRule", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateTargetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateTargetGroupInput(input, context)), { Action: "CreateTargetGroup", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteListenerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteListenerInput(input, context)), { Action: "DeleteListener", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteLoadBalancerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteLoadBalancerInput(input, context)), { Action: "DeleteLoadBalancer", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteRuleInput(input, context)), { Action: "DeleteRule", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteTargetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteTargetGroupInput(input, context)), { Action: "DeleteTargetGroup", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeregisterTargetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeregisterTargetsInput(input, context)), { Action: "DeregisterTargets", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeAccountLimitsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeAccountLimitsInput(input, context)), { Action: "DescribeAccountLimits", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeListenerCertificatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeListenerCertificatesInput(input, context)), { Action: "DescribeListenerCertificates", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeListenersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeListenersInput(input, context)), { Action: "DescribeListeners", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeLoadBalancerAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeLoadBalancerAttributesInput(input, context)), { Action: "DescribeLoadBalancerAttributes", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeLoadBalancersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeLoadBalancersInput(input, context)), { Action: "DescribeLoadBalancers", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeRulesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeRulesInput(input, context)), { Action: "DescribeRules", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeSSLPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeSSLPoliciesInput(input, context)), { Action: "DescribeSSLPolicies", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeTagsInput(input, context)), { Action: "DescribeTags", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeTargetGroupAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeTargetGroupAttributesInput(input, context)), { Action: "DescribeTargetGroupAttributes", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeTargetGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeTargetGroupsInput(input, context)), { Action: "DescribeTargetGroups", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeTargetHealthCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeTargetHealthInput(input, context)), { Action: "DescribeTargetHealth", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyListenerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyListenerInput(input, context)), { Action: "ModifyListener", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyLoadBalancerAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyLoadBalancerAttributesInput(input, context)), { Action: "ModifyLoadBalancerAttributes", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyRuleInput(input, context)), { Action: "ModifyRule", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyTargetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyTargetGroupInput(input, context)), { Action: "ModifyTargetGroup", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyTargetGroupAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyTargetGroupAttributesInput(input, context)), { Action: "ModifyTargetGroupAttributes", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRegisterTargetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRegisterTargetsInput(input, context)), { Action: "RegisterTargets", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemoveListenerCertificatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveListenerCertificatesInput(input, context)), { Action: "RemoveListenerCertificates", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemoveTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveTagsInput(input, context)), { Action: "RemoveTags", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetIpAddressTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetIpAddressTypeInput(input, context)), { Action: "SetIpAddressType", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetRulePrioritiesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetRulePrioritiesInput(input, context)), { Action: "SetRulePriorities", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetSecurityGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetSecurityGroupsInput(input, context)), { Action: "SetSecurityGroups", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySetSubnetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySetSubnetsInput(input, context)), { Action: "SetSubnets", Version: "2015-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryAddListenerCertificatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddListenerCertificatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAddListenerCertificatesOutput(data.AddListenerCertificatesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAddListenerCertificatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CertificateNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException": return [3 /*break*/, 2];
                    case "ListenerNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException": return [3 /*break*/, 4];
                    case "TooManyCertificatesException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context)];
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
                    case "DuplicateTagKeysException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#DuplicateTagKeysException": return [3 /*break*/, 2];
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 4];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateListenerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateListenerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateListenerOutput(data.CreateListenerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateListenerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, parsedBody, message;
    var _w;
    return __generator(this, function (_x) {
        switch (_x.label) {
            case 0:
                _a = [__assign({}, output)];
                _w = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_w.body = _x.sent(), _w)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ALPNPolicyNotSupportedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#ALPNPolicyNotSupportedException": return [3 /*break*/, 2];
                    case "CertificateNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException": return [3 /*break*/, 4];
                    case "DuplicateListenerException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException": return [3 /*break*/, 6];
                    case "IncompatibleProtocolsException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException": return [3 /*break*/, 8];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 10];
                    case "InvalidLoadBalancerActionException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException": return [3 /*break*/, 12];
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 14];
                    case "SSLPolicyNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException": return [3 /*break*/, 16];
                    case "TargetGroupAssociationLimitException": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException": return [3 /*break*/, 18];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 20];
                    case "TooManyActionsException": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException": return [3 /*break*/, 22];
                    case "TooManyCertificatesException": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException": return [3 /*break*/, 24];
                    case "TooManyListenersException": return [3 /*break*/, 26];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException": return [3 /*break*/, 26];
                    case "TooManyRegistrationsForTargetIdException": return [3 /*break*/, 28];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException": return [3 /*break*/, 28];
                    case "TooManyTagsException": return [3 /*break*/, 30];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException": return [3 /*break*/, 30];
                    case "TooManyTargetsException": return [3 /*break*/, 32];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException": return [3 /*break*/, 32];
                    case "TooManyUniqueTargetGroupsPerLoadBalancerException": return [3 /*break*/, 34];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException": return [3 /*break*/, 34];
                    case "UnsupportedProtocolException": return [3 /*break*/, 36];
                    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException": return [3 /*break*/, 36];
                }
                return [3 /*break*/, 38];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryALPNPolicyNotSupportedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyListenersExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_x.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 39];
            case 38:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _x.label = 39;
            case 39:
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
                contents = deserializeAws_queryCreateLoadBalancerOutput(data.CreateLoadBalancerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateLoadBalancerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, parsedBody, message;
    var _r;
    return __generator(this, function (_s) {
        switch (_s.label) {
            case 0:
                _a = [__assign({}, output)];
                _r = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_r.body = _s.sent(), _r)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AllocationIdNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#AllocationIdNotFoundException": return [3 /*break*/, 2];
                    case "AvailabilityZoneNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException": return [3 /*break*/, 4];
                    case "DuplicateLoadBalancerNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#DuplicateLoadBalancerNameException": return [3 /*break*/, 6];
                    case "DuplicateTagKeysException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#DuplicateTagKeysException": return [3 /*break*/, 8];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 10];
                    case "InvalidSchemeException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidSchemeException": return [3 /*break*/, 12];
                    case "InvalidSecurityGroupException": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException": return [3 /*break*/, 14];
                    case "InvalidSubnetException": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException": return [3 /*break*/, 16];
                    case "OperationNotPermittedException": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException": return [3 /*break*/, 18];
                    case "ResourceInUseException": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException": return [3 /*break*/, 20];
                    case "SubnetNotFoundException": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException": return [3 /*break*/, 22];
                    case "TooManyLoadBalancersException": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyLoadBalancersException": return [3 /*break*/, 24];
                    case "TooManyTagsException": return [3 /*break*/, 26];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException": return [3 /*break*/, 26];
                }
                return [3 /*break*/, 28];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAllocationIdNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSchemeExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyLoadBalancersExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 28:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _s.label = 29;
            case 29:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateRuleOutput(data.CreateRuleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, parsedBody, message;
    var _t;
    return __generator(this, function (_u) {
        switch (_u.label) {
            case 0:
                _a = [__assign({}, output)];
                _t = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_t.body = _u.sent(), _t)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "IncompatibleProtocolsException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException": return [3 /*break*/, 2];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "InvalidLoadBalancerActionException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException": return [3 /*break*/, 6];
                    case "ListenerNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException": return [3 /*break*/, 8];
                    case "PriorityInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException": return [3 /*break*/, 10];
                    case "TargetGroupAssociationLimitException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException": return [3 /*break*/, 12];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 14];
                    case "TooManyActionsException": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException": return [3 /*break*/, 16];
                    case "TooManyRegistrationsForTargetIdException": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException": return [3 /*break*/, 18];
                    case "TooManyRulesException": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyRulesException": return [3 /*break*/, 20];
                    case "TooManyTagsException": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException": return [3 /*break*/, 22];
                    case "TooManyTargetGroupsException": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException": return [3 /*break*/, 24];
                    case "TooManyTargetsException": return [3 /*break*/, 26];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException": return [3 /*break*/, 26];
                    case "TooManyUniqueTargetGroupsPerLoadBalancerException": return [3 /*break*/, 28];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException": return [3 /*break*/, 28];
                    case "UnsupportedProtocolException": return [3 /*break*/, 30];
                    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException": return [3 /*break*/, 30];
                }
                return [3 /*break*/, 32];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryPriorityInUseExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyRulesExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTargetGroupsExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_u.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 33];
            case 32:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _u.label = 33;
            case 33:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateTargetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateTargetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateTargetGroupOutput(data.CreateTargetGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateTargetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateTargetGroupNameException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#DuplicateTargetGroupNameException": return [3 /*break*/, 2];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 4];
                    case "TooManyTagsException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException": return [3 /*break*/, 6];
                    case "TooManyTargetGroupsException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateTargetGroupNameExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTargetGroupsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteListenerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteListenerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteListenerOutput(data.DeleteListenerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteListenerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ListenerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
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
                contents = deserializeAws_queryDeleteLoadBalancerOutput(data.DeleteLoadBalancerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteLoadBalancerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 2];
                    case "OperationNotPermittedException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteRuleOutput(data.DeleteRuleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException": return [3 /*break*/, 2];
                    case "RuleNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteTargetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteTargetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteTargetGroupOutput(data.DeleteTargetGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteTargetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceInUseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeregisterTargetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeregisterTargetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeregisterTargetsOutput(data.DeregisterTargetsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeregisterTargetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidTargetException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException": return [3 /*break*/, 2];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeListenerCertificatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeListenerCertificatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeListenerCertificatesOutput(data.DescribeListenerCertificatesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeListenerCertificatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ListenerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeListenersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeListenersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeListenersOutput(data.DescribeListenersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeListenersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ListenerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException": return [3 /*break*/, 2];
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 4];
                    case "UnsupportedProtocolException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)];
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
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
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
                contents = deserializeAws_queryDescribeLoadBalancersOutput(data.DescribeLoadBalancersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeLoadBalancersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeRulesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeRulesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeRulesOutput(data.DescribeRulesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeRulesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ListenerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException": return [3 /*break*/, 2];
                    case "RuleNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException": return [3 /*break*/, 4];
                    case "UnsupportedProtocolException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeSSLPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeSSLPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeSSLPoliciesOutput(data.DescribeSSLPoliciesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeSSLPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "SSLPolicyNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context)];
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
                    case "ListenerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException": return [3 /*break*/, 2];
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 4];
                    case "RuleNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException": return [3 /*break*/, 6];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeTargetGroupAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeTargetGroupAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeTargetGroupAttributesOutput(data.DescribeTargetGroupAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeTargetGroupAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "TargetGroupNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeTargetGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeTargetGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeTargetGroupsOutput(data.DescribeTargetGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeTargetGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 2];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeTargetHealthCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeTargetHealthCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeTargetHealthOutput(data.DescribeTargetHealthResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeTargetHealthCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "HealthUnavailableException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#HealthUnavailableException": return [3 /*break*/, 2];
                    case "InvalidTargetException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException": return [3 /*break*/, 4];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryHealthUnavailableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyListenerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyListenerCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyListenerOutput(data.ModifyListenerResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyListenerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, parsedBody, message;
    var _v;
    return __generator(this, function (_w) {
        switch (_w.label) {
            case 0:
                _a = [__assign({}, output)];
                _v = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_v.body = _w.sent(), _v)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ALPNPolicyNotSupportedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#ALPNPolicyNotSupportedException": return [3 /*break*/, 2];
                    case "CertificateNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException": return [3 /*break*/, 4];
                    case "DuplicateListenerException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException": return [3 /*break*/, 6];
                    case "IncompatibleProtocolsException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException": return [3 /*break*/, 8];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 10];
                    case "InvalidLoadBalancerActionException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException": return [3 /*break*/, 12];
                    case "ListenerNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException": return [3 /*break*/, 14];
                    case "SSLPolicyNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException": return [3 /*break*/, 16];
                    case "TargetGroupAssociationLimitException": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException": return [3 /*break*/, 18];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 20];
                    case "TooManyActionsException": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException": return [3 /*break*/, 22];
                    case "TooManyCertificatesException": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException": return [3 /*break*/, 24];
                    case "TooManyListenersException": return [3 /*break*/, 26];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException": return [3 /*break*/, 26];
                    case "TooManyRegistrationsForTargetIdException": return [3 /*break*/, 28];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException": return [3 /*break*/, 28];
                    case "TooManyTargetsException": return [3 /*break*/, 30];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException": return [3 /*break*/, 30];
                    case "TooManyUniqueTargetGroupsPerLoadBalancerException": return [3 /*break*/, 32];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException": return [3 /*break*/, 32];
                    case "UnsupportedProtocolException": return [3 /*break*/, 34];
                    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException": return [3 /*break*/, 34];
                }
                return [3 /*break*/, 36];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryALPNPolicyNotSupportedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyListenersExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_w.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 37];
            case 36:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _w.label = 37;
            case 37:
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
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 2];
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyRuleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyRuleOutput(data.ModifyRuleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "IncompatibleProtocolsException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException": return [3 /*break*/, 2];
                    case "InvalidLoadBalancerActionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException": return [3 /*break*/, 4];
                    case "OperationNotPermittedException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException": return [3 /*break*/, 6];
                    case "RuleNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException": return [3 /*break*/, 8];
                    case "TargetGroupAssociationLimitException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException": return [3 /*break*/, 10];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 12];
                    case "TooManyActionsException": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException": return [3 /*break*/, 14];
                    case "TooManyRegistrationsForTargetIdException": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException": return [3 /*break*/, 16];
                    case "TooManyTargetsException": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException": return [3 /*break*/, 18];
                    case "TooManyUniqueTargetGroupsPerLoadBalancerException": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException": return [3 /*break*/, 20];
                    case "UnsupportedProtocolException": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryModifyTargetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyTargetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyTargetGroupOutput(data.ModifyTargetGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyTargetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 2];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyTargetGroupAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyTargetGroupAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyTargetGroupAttributesOutput(data.ModifyTargetGroupAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyTargetGroupAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 2];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryRegisterTargetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRegisterTargetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRegisterTargetsOutput(data.RegisterTargetsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRegisterTargetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidTargetException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException": return [3 /*break*/, 2];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 4];
                    case "TooManyRegistrationsForTargetIdException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException": return [3 /*break*/, 6];
                    case "TooManyTargetsException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryRemoveListenerCertificatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRemoveListenerCertificatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRemoveListenerCertificatesOutput(data.RemoveListenerCertificatesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRemoveListenerCertificatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ListenerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException": return [3 /*break*/, 2];
                    case "OperationNotPermittedException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)];
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
                    case "ListenerNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException": return [3 /*break*/, 2];
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 4];
                    case "RuleNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException": return [3 /*break*/, 6];
                    case "TargetGroupNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException": return [3 /*break*/, 8];
                    case "TooManyTagsException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_querySetIpAddressTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetIpAddressTypeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetIpAddressTypeOutput(data.SetIpAddressTypeResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetIpAddressTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 2];
                    case "InvalidSubnetException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException": return [3 /*break*/, 4];
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_querySetRulePrioritiesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetRulePrioritiesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetRulePrioritiesOutput(data.SetRulePrioritiesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetRulePrioritiesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "OperationNotPermittedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException": return [3 /*break*/, 2];
                    case "PriorityInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException": return [3 /*break*/, 4];
                    case "RuleNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryPriorityInUseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_querySetSecurityGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetSecurityGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetSecurityGroupsOutput(data.SetSecurityGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetSecurityGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 2];
                    case "InvalidSecurityGroupException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException": return [3 /*break*/, 4];
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_querySetSubnetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySetSubnetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_querySetSubnetsOutput(data.SetSubnetsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySetSubnetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AllocationIdNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticloadbalancingv2#AllocationIdNotFoundException": return [3 /*break*/, 2];
                    case "AvailabilityZoneNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException": return [3 /*break*/, 4];
                    case "InvalidConfigurationRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException": return [3 /*break*/, 6];
                    case "InvalidSubnetException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException": return [3 /*break*/, 8];
                    case "LoadBalancerNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException": return [3 /*break*/, 10];
                    case "SubnetNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAllocationIdNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_queryAllocationIdNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAllocationIdNotFoundException(body.Error, context);
        contents = __assign({ name: "AllocationIdNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryALPNPolicyNotSupportedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryALPNPolicyNotSupportedException(body.Error, context);
        contents = __assign({ name: "ALPNPolicyNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAvailabilityZoneNotSupportedException(body.Error, context);
        contents = __assign({ name: "AvailabilityZoneNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryDuplicateListenerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDuplicateListenerException(body.Error, context);
        contents = __assign({ name: "DuplicateListenerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDuplicateLoadBalancerNameException(body.Error, context);
        contents = __assign({ name: "DuplicateLoadBalancerNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryDuplicateTargetGroupNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDuplicateTargetGroupNameException(body.Error, context);
        contents = __assign({ name: "DuplicateTargetGroupNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryHealthUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryHealthUnavailableException(body.Error, context);
        contents = __assign({ name: "HealthUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryIncompatibleProtocolsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryIncompatibleProtocolsException(body.Error, context);
        contents = __assign({ name: "IncompatibleProtocolsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryInvalidLoadBalancerActionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidLoadBalancerActionException(body.Error, context);
        contents = __assign({ name: "InvalidLoadBalancerActionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryInvalidTargetExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidTargetException(body.Error, context);
        contents = __assign({ name: "InvalidTargetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryLoadBalancerNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryLoadBalancerNotFoundException(body.Error, context);
        contents = __assign({ name: "LoadBalancerNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryPriorityInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryPriorityInUseException(body.Error, context);
        contents = __assign({ name: "PriorityInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryResourceInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryResourceInUseException(body.Error, context);
        contents = __assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryRuleNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryRuleNotFoundException(body.Error, context);
        contents = __assign({ name: "RuleNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySSLPolicyNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySSLPolicyNotFoundException(body.Error, context);
        contents = __assign({ name: "SSLPolicyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryTargetGroupAssociationLimitExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTargetGroupAssociationLimitException(body.Error, context);
        contents = __assign({ name: "TargetGroupAssociationLimitException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTargetGroupNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTargetGroupNotFoundException(body.Error, context);
        contents = __assign({ name: "TargetGroupNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyActionsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyActionsException(body.Error, context);
        contents = __assign({ name: "TooManyActionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyCertificatesExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyCertificatesException(body.Error, context);
        contents = __assign({ name: "TooManyCertificatesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyListenersExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyListenersException(body.Error, context);
        contents = __assign({ name: "TooManyListenersException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyLoadBalancersExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyLoadBalancersException(body.Error, context);
        contents = __assign({ name: "TooManyLoadBalancersException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyRegistrationsForTargetIdException(body.Error, context);
        contents = __assign({ name: "TooManyRegistrationsForTargetIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyRulesExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyRulesException(body.Error, context);
        contents = __assign({ name: "TooManyRulesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryTooManyTargetGroupsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyTargetGroupsException(body.Error, context);
        contents = __assign({ name: "TooManyTargetGroupsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyTargetsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyTargetsException(body.Error, context);
        contents = __assign({ name: "TooManyTargetsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException(body.Error, context);
        contents = __assign({ name: "TooManyUniqueTargetGroupsPerLoadBalancerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var serializeAws_queryAction = function (input, context) {
    var entries = {};
    if (input.Type !== undefined && input.Type !== null) {
        entries["Type"] = input.Type;
    }
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.AuthenticateOidcConfig !== undefined && input.AuthenticateOidcConfig !== null) {
        var memberEntries = serializeAws_queryAuthenticateOidcActionConfig(input.AuthenticateOidcConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AuthenticateOidcConfig." + key;
            entries[loc] = value;
        });
    }
    if (input.AuthenticateCognitoConfig !== undefined && input.AuthenticateCognitoConfig !== null) {
        var memberEntries = serializeAws_queryAuthenticateCognitoActionConfig(input.AuthenticateCognitoConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AuthenticateCognitoConfig." + key;
            entries[loc] = value;
        });
    }
    if (input.Order !== undefined && input.Order !== null) {
        entries["Order"] = input.Order;
    }
    if (input.RedirectConfig !== undefined && input.RedirectConfig !== null) {
        var memberEntries = serializeAws_queryRedirectActionConfig(input.RedirectConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RedirectConfig." + key;
            entries[loc] = value;
        });
    }
    if (input.FixedResponseConfig !== undefined && input.FixedResponseConfig !== null) {
        var memberEntries = serializeAws_queryFixedResponseActionConfig(input.FixedResponseConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "FixedResponseConfig." + key;
            entries[loc] = value;
        });
    }
    if (input.ForwardConfig !== undefined && input.ForwardConfig !== null) {
        var memberEntries = serializeAws_queryForwardActionConfig(input.ForwardConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ForwardConfig." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryActions = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryAction(entry, context);
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
var serializeAws_queryAddListenerCertificatesInput = function (input, context) {
    var entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Certificates !== undefined && input.Certificates !== null) {
        var memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Certificates." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryAddTagsInput = function (input, context) {
    var entries = {};
    if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
        var memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ResourceArns." + key;
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
var serializeAws_queryAlpnPolicyName = function (input, context) {
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
var serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = function (input, context) {
    var entries = {};
    var counter = 1;
    Object.keys(input)
        .filter(function (key) { return input[key] != null; })
        .forEach(function (key) {
        entries["entry." + counter + ".key"] = key;
        entries["entry." + counter + ".value"] = input[key];
        counter++;
    });
    return entries;
};
var serializeAws_queryAuthenticateCognitoActionConfig = function (input, context) {
    var entries = {};
    if (input.UserPoolArn !== undefined && input.UserPoolArn !== null) {
        entries["UserPoolArn"] = input.UserPoolArn;
    }
    if (input.UserPoolClientId !== undefined && input.UserPoolClientId !== null) {
        entries["UserPoolClientId"] = input.UserPoolClientId;
    }
    if (input.UserPoolDomain !== undefined && input.UserPoolDomain !== null) {
        entries["UserPoolDomain"] = input.UserPoolDomain;
    }
    if (input.SessionCookieName !== undefined && input.SessionCookieName !== null) {
        entries["SessionCookieName"] = input.SessionCookieName;
    }
    if (input.Scope !== undefined && input.Scope !== null) {
        entries["Scope"] = input.Scope;
    }
    if (input.SessionTimeout !== undefined && input.SessionTimeout !== null) {
        entries["SessionTimeout"] = input.SessionTimeout;
    }
    if (input.AuthenticationRequestExtraParams !== undefined && input.AuthenticationRequestExtraParams !== null) {
        var memberEntries = serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(input.AuthenticationRequestExtraParams, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AuthenticationRequestExtraParams." + key;
            entries[loc] = value;
        });
    }
    if (input.OnUnauthenticatedRequest !== undefined && input.OnUnauthenticatedRequest !== null) {
        entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
    }
    return entries;
};
var serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = function (input, context) {
    var entries = {};
    var counter = 1;
    Object.keys(input)
        .filter(function (key) { return input[key] != null; })
        .forEach(function (key) {
        entries["entry." + counter + ".key"] = key;
        entries["entry." + counter + ".value"] = input[key];
        counter++;
    });
    return entries;
};
var serializeAws_queryAuthenticateOidcActionConfig = function (input, context) {
    var entries = {};
    if (input.Issuer !== undefined && input.Issuer !== null) {
        entries["Issuer"] = input.Issuer;
    }
    if (input.AuthorizationEndpoint !== undefined && input.AuthorizationEndpoint !== null) {
        entries["AuthorizationEndpoint"] = input.AuthorizationEndpoint;
    }
    if (input.TokenEndpoint !== undefined && input.TokenEndpoint !== null) {
        entries["TokenEndpoint"] = input.TokenEndpoint;
    }
    if (input.UserInfoEndpoint !== undefined && input.UserInfoEndpoint !== null) {
        entries["UserInfoEndpoint"] = input.UserInfoEndpoint;
    }
    if (input.ClientId !== undefined && input.ClientId !== null) {
        entries["ClientId"] = input.ClientId;
    }
    if (input.ClientSecret !== undefined && input.ClientSecret !== null) {
        entries["ClientSecret"] = input.ClientSecret;
    }
    if (input.SessionCookieName !== undefined && input.SessionCookieName !== null) {
        entries["SessionCookieName"] = input.SessionCookieName;
    }
    if (input.Scope !== undefined && input.Scope !== null) {
        entries["Scope"] = input.Scope;
    }
    if (input.SessionTimeout !== undefined && input.SessionTimeout !== null) {
        entries["SessionTimeout"] = input.SessionTimeout;
    }
    if (input.AuthenticationRequestExtraParams !== undefined && input.AuthenticationRequestExtraParams !== null) {
        var memberEntries = serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(input.AuthenticationRequestExtraParams, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AuthenticationRequestExtraParams." + key;
            entries[loc] = value;
        });
    }
    if (input.OnUnauthenticatedRequest !== undefined && input.OnUnauthenticatedRequest !== null) {
        entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
    }
    if (input.UseExistingClientSecret !== undefined && input.UseExistingClientSecret !== null) {
        entries["UseExistingClientSecret"] = input.UseExistingClientSecret;
    }
    return entries;
};
var serializeAws_queryCertificate = function (input, context) {
    var entries = {};
    if (input.CertificateArn !== undefined && input.CertificateArn !== null) {
        entries["CertificateArn"] = input.CertificateArn;
    }
    if (input.IsDefault !== undefined && input.IsDefault !== null) {
        entries["IsDefault"] = input.IsDefault;
    }
    return entries;
};
var serializeAws_queryCertificateList = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryCertificate(entry, context);
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
var serializeAws_queryCreateListenerInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.Protocol !== undefined && input.Protocol !== null) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.SslPolicy !== undefined && input.SslPolicy !== null) {
        entries["SslPolicy"] = input.SslPolicy;
    }
    if (input.Certificates !== undefined && input.Certificates !== null) {
        var memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Certificates." + key;
            entries[loc] = value;
        });
    }
    if (input.DefaultActions !== undefined && input.DefaultActions !== null) {
        var memberEntries = serializeAws_queryActions(input.DefaultActions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DefaultActions." + key;
            entries[loc] = value;
        });
    }
    if (input.AlpnPolicy !== undefined && input.AlpnPolicy !== null) {
        var memberEntries = serializeAws_queryAlpnPolicyName(input.AlpnPolicy, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AlpnPolicy." + key;
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
var serializeAws_queryCreateLoadBalancerInput = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Subnets !== undefined && input.Subnets !== null) {
        var memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Subnets." + key;
            entries[loc] = value;
        });
    }
    if (input.SubnetMappings !== undefined && input.SubnetMappings !== null) {
        var memberEntries = serializeAws_querySubnetMappings(input.SubnetMappings, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SubnetMappings." + key;
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
    if (input.Type !== undefined && input.Type !== null) {
        entries["Type"] = input.Type;
    }
    if (input.IpAddressType !== undefined && input.IpAddressType !== null) {
        entries["IpAddressType"] = input.IpAddressType;
    }
    if (input.CustomerOwnedIpv4Pool !== undefined && input.CustomerOwnedIpv4Pool !== null) {
        entries["CustomerOwnedIpv4Pool"] = input.CustomerOwnedIpv4Pool;
    }
    return entries;
};
var serializeAws_queryCreateRuleInput = function (input, context) {
    var entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Conditions !== undefined && input.Conditions !== null) {
        var memberEntries = serializeAws_queryRuleConditionList(input.Conditions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Conditions." + key;
            entries[loc] = value;
        });
    }
    if (input.Priority !== undefined && input.Priority !== null) {
        entries["Priority"] = input.Priority;
    }
    if (input.Actions !== undefined && input.Actions !== null) {
        var memberEntries = serializeAws_queryActions(input.Actions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Actions." + key;
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
var serializeAws_queryCreateTargetGroupInput = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Protocol !== undefined && input.Protocol !== null) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.ProtocolVersion !== undefined && input.ProtocolVersion !== null) {
        entries["ProtocolVersion"] = input.ProtocolVersion;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.VpcId !== undefined && input.VpcId !== null) {
        entries["VpcId"] = input.VpcId;
    }
    if (input.HealthCheckProtocol !== undefined && input.HealthCheckProtocol !== null) {
        entries["HealthCheckProtocol"] = input.HealthCheckProtocol;
    }
    if (input.HealthCheckPort !== undefined && input.HealthCheckPort !== null) {
        entries["HealthCheckPort"] = input.HealthCheckPort;
    }
    if (input.HealthCheckEnabled !== undefined && input.HealthCheckEnabled !== null) {
        entries["HealthCheckEnabled"] = input.HealthCheckEnabled;
    }
    if (input.HealthCheckPath !== undefined && input.HealthCheckPath !== null) {
        entries["HealthCheckPath"] = input.HealthCheckPath;
    }
    if (input.HealthCheckIntervalSeconds !== undefined && input.HealthCheckIntervalSeconds !== null) {
        entries["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
    }
    if (input.HealthCheckTimeoutSeconds !== undefined && input.HealthCheckTimeoutSeconds !== null) {
        entries["HealthCheckTimeoutSeconds"] = input.HealthCheckTimeoutSeconds;
    }
    if (input.HealthyThresholdCount !== undefined && input.HealthyThresholdCount !== null) {
        entries["HealthyThresholdCount"] = input.HealthyThresholdCount;
    }
    if (input.UnhealthyThresholdCount !== undefined && input.UnhealthyThresholdCount !== null) {
        entries["UnhealthyThresholdCount"] = input.UnhealthyThresholdCount;
    }
    if (input.Matcher !== undefined && input.Matcher !== null) {
        var memberEntries = serializeAws_queryMatcher(input.Matcher, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Matcher." + key;
            entries[loc] = value;
        });
    }
    if (input.TargetType !== undefined && input.TargetType !== null) {
        entries["TargetType"] = input.TargetType;
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
var serializeAws_queryDeleteListenerInput = function (input, context) {
    var entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    return entries;
};
var serializeAws_queryDeleteLoadBalancerInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    return entries;
};
var serializeAws_queryDeleteRuleInput = function (input, context) {
    var entries = {};
    if (input.RuleArn !== undefined && input.RuleArn !== null) {
        entries["RuleArn"] = input.RuleArn;
    }
    return entries;
};
var serializeAws_queryDeleteTargetGroupInput = function (input, context) {
    var entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    return entries;
};
var serializeAws_queryDeregisterTargetsInput = function (input, context) {
    var entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Targets !== undefined && input.Targets !== null) {
        var memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Targets." + key;
            entries[loc] = value;
        });
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
var serializeAws_queryDescribeListenerCertificatesInput = function (input, context) {
    var entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.PageSize !== undefined && input.PageSize !== null) {
        entries["PageSize"] = input.PageSize;
    }
    return entries;
};
var serializeAws_queryDescribeListenersInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.ListenerArns !== undefined && input.ListenerArns !== null) {
        var memberEntries = serializeAws_queryListenerArns(input.ListenerArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ListenerArns." + key;
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
var serializeAws_queryDescribeLoadBalancerAttributesInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    return entries;
};
var serializeAws_queryDescribeLoadBalancersInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerArns !== undefined && input.LoadBalancerArns !== null) {
        var memberEntries = serializeAws_queryLoadBalancerArns(input.LoadBalancerArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LoadBalancerArns." + key;
            entries[loc] = value;
        });
    }
    if (input.Names !== undefined && input.Names !== null) {
        var memberEntries = serializeAws_queryLoadBalancerNames(input.Names, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Names." + key;
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
var serializeAws_queryDescribeRulesInput = function (input, context) {
    var entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.RuleArns !== undefined && input.RuleArns !== null) {
        var memberEntries = serializeAws_queryRuleArns(input.RuleArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RuleArns." + key;
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
var serializeAws_queryDescribeSSLPoliciesInput = function (input, context) {
    var entries = {};
    if (input.Names !== undefined && input.Names !== null) {
        var memberEntries = serializeAws_querySslPolicyNames(input.Names, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Names." + key;
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
var serializeAws_queryDescribeTagsInput = function (input, context) {
    var entries = {};
    if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
        var memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ResourceArns." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeTargetGroupAttributesInput = function (input, context) {
    var entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    return entries;
};
var serializeAws_queryDescribeTargetGroupsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.TargetGroupArns !== undefined && input.TargetGroupArns !== null) {
        var memberEntries = serializeAws_queryTargetGroupArns(input.TargetGroupArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TargetGroupArns." + key;
            entries[loc] = value;
        });
    }
    if (input.Names !== undefined && input.Names !== null) {
        var memberEntries = serializeAws_queryTargetGroupNames(input.Names, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Names." + key;
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
var serializeAws_queryDescribeTargetHealthInput = function (input, context) {
    var entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Targets !== undefined && input.Targets !== null) {
        var memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Targets." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryFixedResponseActionConfig = function (input, context) {
    var entries = {};
    if (input.MessageBody !== undefined && input.MessageBody !== null) {
        entries["MessageBody"] = input.MessageBody;
    }
    if (input.StatusCode !== undefined && input.StatusCode !== null) {
        entries["StatusCode"] = input.StatusCode;
    }
    if (input.ContentType !== undefined && input.ContentType !== null) {
        entries["ContentType"] = input.ContentType;
    }
    return entries;
};
var serializeAws_queryForwardActionConfig = function (input, context) {
    var entries = {};
    if (input.TargetGroups !== undefined && input.TargetGroups !== null) {
        var memberEntries = serializeAws_queryTargetGroupList(input.TargetGroups, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TargetGroups." + key;
            entries[loc] = value;
        });
    }
    if (input.TargetGroupStickinessConfig !== undefined && input.TargetGroupStickinessConfig !== null) {
        var memberEntries = serializeAws_queryTargetGroupStickinessConfig(input.TargetGroupStickinessConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TargetGroupStickinessConfig." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryHostHeaderConditionConfig = function (input, context) {
    var entries = {};
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryHttpHeaderConditionConfig = function (input, context) {
    var entries = {};
    if (input.HttpHeaderName !== undefined && input.HttpHeaderName !== null) {
        entries["HttpHeaderName"] = input.HttpHeaderName;
    }
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryHttpRequestMethodConditionConfig = function (input, context) {
    var entries = {};
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryListenerArns = function (input, context) {
    var e_4, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
            var entry = input_4_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_queryListOfString = function (input, context) {
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
var serializeAws_queryLoadBalancerArns = function (input, context) {
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
var serializeAws_queryLoadBalancerAttribute = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryLoadBalancerAttributes = function (input, context) {
    var e_7, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
            var entry = input_7_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryLoadBalancerAttribute(entry, context);
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
var serializeAws_queryLoadBalancerNames = function (input, context) {
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
var serializeAws_queryMatcher = function (input, context) {
    var entries = {};
    if (input.HttpCode !== undefined && input.HttpCode !== null) {
        entries["HttpCode"] = input.HttpCode;
    }
    if (input.GrpcCode !== undefined && input.GrpcCode !== null) {
        entries["GrpcCode"] = input.GrpcCode;
    }
    return entries;
};
var serializeAws_queryModifyListenerInput = function (input, context) {
    var entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.Protocol !== undefined && input.Protocol !== null) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.SslPolicy !== undefined && input.SslPolicy !== null) {
        entries["SslPolicy"] = input.SslPolicy;
    }
    if (input.Certificates !== undefined && input.Certificates !== null) {
        var memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Certificates." + key;
            entries[loc] = value;
        });
    }
    if (input.DefaultActions !== undefined && input.DefaultActions !== null) {
        var memberEntries = serializeAws_queryActions(input.DefaultActions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DefaultActions." + key;
            entries[loc] = value;
        });
    }
    if (input.AlpnPolicy !== undefined && input.AlpnPolicy !== null) {
        var memberEntries = serializeAws_queryAlpnPolicyName(input.AlpnPolicy, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AlpnPolicy." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyLoadBalancerAttributesInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        var memberEntries = serializeAws_queryLoadBalancerAttributes(input.Attributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Attributes." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyRuleInput = function (input, context) {
    var entries = {};
    if (input.RuleArn !== undefined && input.RuleArn !== null) {
        entries["RuleArn"] = input.RuleArn;
    }
    if (input.Conditions !== undefined && input.Conditions !== null) {
        var memberEntries = serializeAws_queryRuleConditionList(input.Conditions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Conditions." + key;
            entries[loc] = value;
        });
    }
    if (input.Actions !== undefined && input.Actions !== null) {
        var memberEntries = serializeAws_queryActions(input.Actions, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Actions." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyTargetGroupAttributesInput = function (input, context) {
    var entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        var memberEntries = serializeAws_queryTargetGroupAttributes(input.Attributes, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Attributes." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyTargetGroupInput = function (input, context) {
    var entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.HealthCheckProtocol !== undefined && input.HealthCheckProtocol !== null) {
        entries["HealthCheckProtocol"] = input.HealthCheckProtocol;
    }
    if (input.HealthCheckPort !== undefined && input.HealthCheckPort !== null) {
        entries["HealthCheckPort"] = input.HealthCheckPort;
    }
    if (input.HealthCheckPath !== undefined && input.HealthCheckPath !== null) {
        entries["HealthCheckPath"] = input.HealthCheckPath;
    }
    if (input.HealthCheckEnabled !== undefined && input.HealthCheckEnabled !== null) {
        entries["HealthCheckEnabled"] = input.HealthCheckEnabled;
    }
    if (input.HealthCheckIntervalSeconds !== undefined && input.HealthCheckIntervalSeconds !== null) {
        entries["HealthCheckIntervalSeconds"] = input.HealthCheckIntervalSeconds;
    }
    if (input.HealthCheckTimeoutSeconds !== undefined && input.HealthCheckTimeoutSeconds !== null) {
        entries["HealthCheckTimeoutSeconds"] = input.HealthCheckTimeoutSeconds;
    }
    if (input.HealthyThresholdCount !== undefined && input.HealthyThresholdCount !== null) {
        entries["HealthyThresholdCount"] = input.HealthyThresholdCount;
    }
    if (input.UnhealthyThresholdCount !== undefined && input.UnhealthyThresholdCount !== null) {
        entries["UnhealthyThresholdCount"] = input.UnhealthyThresholdCount;
    }
    if (input.Matcher !== undefined && input.Matcher !== null) {
        var memberEntries = serializeAws_queryMatcher(input.Matcher, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Matcher." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryPathPatternConditionConfig = function (input, context) {
    var entries = {};
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryQueryStringConditionConfig = function (input, context) {
    var entries = {};
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryQueryStringKeyValuePairList(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryQueryStringKeyValuePair = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryQueryStringKeyValuePairList = function (input, context) {
    var e_9, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
            var entry = input_9_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryQueryStringKeyValuePair(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
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
var serializeAws_queryRedirectActionConfig = function (input, context) {
    var entries = {};
    if (input.Protocol !== undefined && input.Protocol !== null) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.Host !== undefined && input.Host !== null) {
        entries["Host"] = input.Host;
    }
    if (input.Path !== undefined && input.Path !== null) {
        entries["Path"] = input.Path;
    }
    if (input.Query !== undefined && input.Query !== null) {
        entries["Query"] = input.Query;
    }
    if (input.StatusCode !== undefined && input.StatusCode !== null) {
        entries["StatusCode"] = input.StatusCode;
    }
    return entries;
};
var serializeAws_queryRegisterTargetsInput = function (input, context) {
    var entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Targets !== undefined && input.Targets !== null) {
        var memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Targets." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryRemoveListenerCertificatesInput = function (input, context) {
    var entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Certificates !== undefined && input.Certificates !== null) {
        var memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Certificates." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryRemoveTagsInput = function (input, context) {
    var entries = {};
    if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
        var memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ResourceArns." + key;
            entries[loc] = value;
        });
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        var memberEntries = serializeAws_queryTagKeys(input.TagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagKeys." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryResourceArns = function (input, context) {
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
var serializeAws_queryRuleArns = function (input, context) {
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
var serializeAws_queryRuleCondition = function (input, context) {
    var entries = {};
    if (input.Field !== undefined && input.Field !== null) {
        entries["Field"] = input.Field;
    }
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    if (input.HostHeaderConfig !== undefined && input.HostHeaderConfig !== null) {
        var memberEntries = serializeAws_queryHostHeaderConditionConfig(input.HostHeaderConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "HostHeaderConfig." + key;
            entries[loc] = value;
        });
    }
    if (input.PathPatternConfig !== undefined && input.PathPatternConfig !== null) {
        var memberEntries = serializeAws_queryPathPatternConditionConfig(input.PathPatternConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PathPatternConfig." + key;
            entries[loc] = value;
        });
    }
    if (input.HttpHeaderConfig !== undefined && input.HttpHeaderConfig !== null) {
        var memberEntries = serializeAws_queryHttpHeaderConditionConfig(input.HttpHeaderConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "HttpHeaderConfig." + key;
            entries[loc] = value;
        });
    }
    if (input.QueryStringConfig !== undefined && input.QueryStringConfig !== null) {
        var memberEntries = serializeAws_queryQueryStringConditionConfig(input.QueryStringConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "QueryStringConfig." + key;
            entries[loc] = value;
        });
    }
    if (input.HttpRequestMethodConfig !== undefined && input.HttpRequestMethodConfig !== null) {
        var memberEntries = serializeAws_queryHttpRequestMethodConditionConfig(input.HttpRequestMethodConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "HttpRequestMethodConfig." + key;
            entries[loc] = value;
        });
    }
    if (input.SourceIpConfig !== undefined && input.SourceIpConfig !== null) {
        var memberEntries = serializeAws_querySourceIpConditionConfig(input.SourceIpConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SourceIpConfig." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryRuleConditionList = function (input, context) {
    var e_12, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_12 = __values(input), input_12_1 = input_12.next(); !input_12_1.done; input_12_1 = input_12.next()) {
            var entry = input_12_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryRuleCondition(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
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
var serializeAws_queryRulePriorityList = function (input, context) {
    var e_13, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_13 = __values(input), input_13_1 = input_13.next(); !input_13_1.done; input_13_1 = input_13.next()) {
            var entry = input_13_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryRulePriorityPair(entry, context);
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
var serializeAws_queryRulePriorityPair = function (input, context) {
    var entries = {};
    if (input.RuleArn !== undefined && input.RuleArn !== null) {
        entries["RuleArn"] = input.RuleArn;
    }
    if (input.Priority !== undefined && input.Priority !== null) {
        entries["Priority"] = input.Priority;
    }
    return entries;
};
var serializeAws_querySecurityGroups = function (input, context) {
    var e_14, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_14 = __values(input), input_14_1 = input_14.next(); !input_14_1.done; input_14_1 = input_14.next()) {
            var entry = input_14_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_querySetIpAddressTypeInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.IpAddressType !== undefined && input.IpAddressType !== null) {
        entries["IpAddressType"] = input.IpAddressType;
    }
    return entries;
};
var serializeAws_querySetRulePrioritiesInput = function (input, context) {
    var entries = {};
    if (input.RulePriorities !== undefined && input.RulePriorities !== null) {
        var memberEntries = serializeAws_queryRulePriorityList(input.RulePriorities, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RulePriorities." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querySetSecurityGroupsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
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
var serializeAws_querySetSubnetsInput = function (input, context) {
    var entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.Subnets !== undefined && input.Subnets !== null) {
        var memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Subnets." + key;
            entries[loc] = value;
        });
    }
    if (input.SubnetMappings !== undefined && input.SubnetMappings !== null) {
        var memberEntries = serializeAws_querySubnetMappings(input.SubnetMappings, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SubnetMappings." + key;
            entries[loc] = value;
        });
    }
    if (input.IpAddressType !== undefined && input.IpAddressType !== null) {
        entries["IpAddressType"] = input.IpAddressType;
    }
    return entries;
};
var serializeAws_querySourceIpConditionConfig = function (input, context) {
    var entries = {};
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querySslPolicyNames = function (input, context) {
    var e_15, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_15 = __values(input), input_15_1 = input_15.next(); !input_15_1.done; input_15_1 = input_15.next()) {
            var entry = input_15_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_15_1) { e_15 = { error: e_15_1 }; }
    finally {
        try {
            if (input_15_1 && !input_15_1.done && (_a = input_15.return)) _a.call(input_15);
        }
        finally { if (e_15) throw e_15.error; }
    }
    return entries;
};
var serializeAws_querySubnetMapping = function (input, context) {
    var entries = {};
    if (input.SubnetId !== undefined && input.SubnetId !== null) {
        entries["SubnetId"] = input.SubnetId;
    }
    if (input.AllocationId !== undefined && input.AllocationId !== null) {
        entries["AllocationId"] = input.AllocationId;
    }
    if (input.PrivateIPv4Address !== undefined && input.PrivateIPv4Address !== null) {
        entries["PrivateIPv4Address"] = input.PrivateIPv4Address;
    }
    if (input.IPv6Address !== undefined && input.IPv6Address !== null) {
        entries["IPv6Address"] = input.IPv6Address;
    }
    return entries;
};
var serializeAws_querySubnetMappings = function (input, context) {
    var e_16, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_16 = __values(input), input_16_1 = input_16.next(); !input_16_1.done; input_16_1 = input_16.next()) {
            var entry = input_16_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_querySubnetMapping(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_16_1) { e_16 = { error: e_16_1 }; }
    finally {
        try {
            if (input_16_1 && !input_16_1.done && (_a = input_16.return)) _a.call(input_16);
        }
        finally { if (e_16) throw e_16.error; }
    }
    return entries;
};
var serializeAws_querySubnets = function (input, context) {
    var e_17, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_17 = __values(input), input_17_1 = input_17.next(); !input_17_1.done; input_17_1 = input_17.next()) {
            var entry = input_17_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (input_17_1 && !input_17_1.done && (_a = input_17.return)) _a.call(input_17);
        }
        finally { if (e_17) throw e_17.error; }
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
var serializeAws_queryTagKeys = function (input, context) {
    var e_18, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_18 = __values(input), input_18_1 = input_18.next(); !input_18_1.done; input_18_1 = input_18.next()) {
            var entry = input_18_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_18_1) { e_18 = { error: e_18_1 }; }
    finally {
        try {
            if (input_18_1 && !input_18_1.done && (_a = input_18.return)) _a.call(input_18);
        }
        finally { if (e_18) throw e_18.error; }
    }
    return entries;
};
var serializeAws_queryTagList = function (input, context) {
    var e_19, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_19 = __values(input), input_19_1 = input_19.next(); !input_19_1.done; input_19_1 = input_19.next()) {
            var entry = input_19_1.value;
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
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (input_19_1 && !input_19_1.done && (_a = input_19.return)) _a.call(input_19);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return entries;
};
var serializeAws_queryTargetDescription = function (input, context) {
    var entries = {};
    if (input.Id !== undefined && input.Id !== null) {
        entries["Id"] = input.Id;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.AvailabilityZone !== undefined && input.AvailabilityZone !== null) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    return entries;
};
var serializeAws_queryTargetDescriptions = function (input, context) {
    var e_20, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_20 = __values(input), input_20_1 = input_20.next(); !input_20_1.done; input_20_1 = input_20.next()) {
            var entry = input_20_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTargetDescription(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_20_1) { e_20 = { error: e_20_1 }; }
    finally {
        try {
            if (input_20_1 && !input_20_1.done && (_a = input_20.return)) _a.call(input_20);
        }
        finally { if (e_20) throw e_20.error; }
    }
    return entries;
};
var serializeAws_queryTargetGroupArns = function (input, context) {
    var e_21, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_21 = __values(input), input_21_1 = input_21.next(); !input_21_1.done; input_21_1 = input_21.next()) {
            var entry = input_21_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (input_21_1 && !input_21_1.done && (_a = input_21.return)) _a.call(input_21);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return entries;
};
var serializeAws_queryTargetGroupAttribute = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryTargetGroupAttributes = function (input, context) {
    var e_22, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_22 = __values(input), input_22_1 = input_22.next(); !input_22_1.done; input_22_1 = input_22.next()) {
            var entry = input_22_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTargetGroupAttribute(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_22_1) { e_22 = { error: e_22_1 }; }
    finally {
        try {
            if (input_22_1 && !input_22_1.done && (_a = input_22.return)) _a.call(input_22);
        }
        finally { if (e_22) throw e_22.error; }
    }
    return entries;
};
var serializeAws_queryTargetGroupList = function (input, context) {
    var e_23, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_23 = __values(input), input_23_1 = input_23.next(); !input_23_1.done; input_23_1 = input_23.next()) {
            var entry = input_23_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTargetGroupTuple(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_23_1) { e_23 = { error: e_23_1 }; }
    finally {
        try {
            if (input_23_1 && !input_23_1.done && (_a = input_23.return)) _a.call(input_23);
        }
        finally { if (e_23) throw e_23.error; }
    }
    return entries;
};
var serializeAws_queryTargetGroupNames = function (input, context) {
    var e_24, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_24 = __values(input), input_24_1 = input_24.next(); !input_24_1.done; input_24_1 = input_24.next()) {
            var entry = input_24_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_24_1) { e_24 = { error: e_24_1 }; }
    finally {
        try {
            if (input_24_1 && !input_24_1.done && (_a = input_24.return)) _a.call(input_24);
        }
        finally { if (e_24) throw e_24.error; }
    }
    return entries;
};
var serializeAws_queryTargetGroupStickinessConfig = function (input, context) {
    var entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
var serializeAws_queryTargetGroupTuple = function (input, context) {
    var entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Weight !== undefined && input.Weight !== null) {
        entries["Weight"] = input.Weight;
    }
    return entries;
};
var deserializeAws_queryAction = function (output, context) {
    var contents = {
        Type: undefined,
        TargetGroupArn: undefined,
        AuthenticateOidcConfig: undefined,
        AuthenticateCognitoConfig: undefined,
        Order: undefined,
        RedirectConfig: undefined,
        FixedResponseConfig: undefined,
        ForwardConfig: undefined,
    };
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["TargetGroupArn"] !== undefined) {
        contents.TargetGroupArn = output["TargetGroupArn"];
    }
    if (output["AuthenticateOidcConfig"] !== undefined) {
        contents.AuthenticateOidcConfig = deserializeAws_queryAuthenticateOidcActionConfig(output["AuthenticateOidcConfig"], context);
    }
    if (output["AuthenticateCognitoConfig"] !== undefined) {
        contents.AuthenticateCognitoConfig = deserializeAws_queryAuthenticateCognitoActionConfig(output["AuthenticateCognitoConfig"], context);
    }
    if (output["Order"] !== undefined) {
        contents.Order = parseInt(output["Order"]);
    }
    if (output["RedirectConfig"] !== undefined) {
        contents.RedirectConfig = deserializeAws_queryRedirectActionConfig(output["RedirectConfig"], context);
    }
    if (output["FixedResponseConfig"] !== undefined) {
        contents.FixedResponseConfig = deserializeAws_queryFixedResponseActionConfig(output["FixedResponseConfig"], context);
    }
    if (output["ForwardConfig"] !== undefined) {
        contents.ForwardConfig = deserializeAws_queryForwardActionConfig(output["ForwardConfig"], context);
    }
    return contents;
};
var deserializeAws_queryActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAction(entry, context);
    });
};
var deserializeAws_queryAddListenerCertificatesOutput = function (output, context) {
    var contents = {
        Certificates: undefined,
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
        contents.Certificates = deserializeAws_queryCertificateList(__getArrayIfSingleItem(output["Certificates"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryAddTagsOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryAllocationIdNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryAlpnPolicyName = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryALPNPolicyNotSupportedException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = pair["value"], _a));
    }, {});
};
var deserializeAws_queryAuthenticateCognitoActionConfig = function (output, context) {
    var contents = {
        UserPoolArn: undefined,
        UserPoolClientId: undefined,
        UserPoolDomain: undefined,
        SessionCookieName: undefined,
        Scope: undefined,
        SessionTimeout: undefined,
        AuthenticationRequestExtraParams: undefined,
        OnUnauthenticatedRequest: undefined,
    };
    if (output["UserPoolArn"] !== undefined) {
        contents.UserPoolArn = output["UserPoolArn"];
    }
    if (output["UserPoolClientId"] !== undefined) {
        contents.UserPoolClientId = output["UserPoolClientId"];
    }
    if (output["UserPoolDomain"] !== undefined) {
        contents.UserPoolDomain = output["UserPoolDomain"];
    }
    if (output["SessionCookieName"] !== undefined) {
        contents.SessionCookieName = output["SessionCookieName"];
    }
    if (output["Scope"] !== undefined) {
        contents.Scope = output["Scope"];
    }
    if (output["SessionTimeout"] !== undefined) {
        contents.SessionTimeout = parseInt(output["SessionTimeout"]);
    }
    if (output.AuthenticationRequestExtraParams === "") {
        contents.AuthenticationRequestExtraParams = {};
    }
    if (output["AuthenticationRequestExtraParams"] !== undefined &&
        output["AuthenticationRequestExtraParams"]["entry"] !== undefined) {
        contents.AuthenticationRequestExtraParams =
            deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(__getArrayIfSingleItem(output["AuthenticationRequestExtraParams"]["entry"]), context);
    }
    if (output["OnUnauthenticatedRequest"] !== undefined) {
        contents.OnUnauthenticatedRequest = output["OnUnauthenticatedRequest"];
    }
    return contents;
};
var deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = function (output, context) {
    return output.reduce(function (acc, pair) {
        var _a;
        if (pair["value"] === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_a = {}, _a[pair["key"]] = pair["value"], _a));
    }, {});
};
var deserializeAws_queryAuthenticateOidcActionConfig = function (output, context) {
    var contents = {
        Issuer: undefined,
        AuthorizationEndpoint: undefined,
        TokenEndpoint: undefined,
        UserInfoEndpoint: undefined,
        ClientId: undefined,
        ClientSecret: undefined,
        SessionCookieName: undefined,
        Scope: undefined,
        SessionTimeout: undefined,
        AuthenticationRequestExtraParams: undefined,
        OnUnauthenticatedRequest: undefined,
        UseExistingClientSecret: undefined,
    };
    if (output["Issuer"] !== undefined) {
        contents.Issuer = output["Issuer"];
    }
    if (output["AuthorizationEndpoint"] !== undefined) {
        contents.AuthorizationEndpoint = output["AuthorizationEndpoint"];
    }
    if (output["TokenEndpoint"] !== undefined) {
        contents.TokenEndpoint = output["TokenEndpoint"];
    }
    if (output["UserInfoEndpoint"] !== undefined) {
        contents.UserInfoEndpoint = output["UserInfoEndpoint"];
    }
    if (output["ClientId"] !== undefined) {
        contents.ClientId = output["ClientId"];
    }
    if (output["ClientSecret"] !== undefined) {
        contents.ClientSecret = output["ClientSecret"];
    }
    if (output["SessionCookieName"] !== undefined) {
        contents.SessionCookieName = output["SessionCookieName"];
    }
    if (output["Scope"] !== undefined) {
        contents.Scope = output["Scope"];
    }
    if (output["SessionTimeout"] !== undefined) {
        contents.SessionTimeout = parseInt(output["SessionTimeout"]);
    }
    if (output.AuthenticationRequestExtraParams === "") {
        contents.AuthenticationRequestExtraParams = {};
    }
    if (output["AuthenticationRequestExtraParams"] !== undefined &&
        output["AuthenticationRequestExtraParams"]["entry"] !== undefined) {
        contents.AuthenticationRequestExtraParams =
            deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(__getArrayIfSingleItem(output["AuthenticationRequestExtraParams"]["entry"]), context);
    }
    if (output["OnUnauthenticatedRequest"] !== undefined) {
        contents.OnUnauthenticatedRequest = output["OnUnauthenticatedRequest"];
    }
    if (output["UseExistingClientSecret"] !== undefined) {
        contents.UseExistingClientSecret = output["UseExistingClientSecret"] == "true";
    }
    return contents;
};
var deserializeAws_queryAvailabilityZone = function (output, context) {
    var contents = {
        ZoneName: undefined,
        SubnetId: undefined,
        OutpostId: undefined,
        LoadBalancerAddresses: undefined,
    };
    if (output["ZoneName"] !== undefined) {
        contents.ZoneName = output["ZoneName"];
    }
    if (output["SubnetId"] !== undefined) {
        contents.SubnetId = output["SubnetId"];
    }
    if (output["OutpostId"] !== undefined) {
        contents.OutpostId = output["OutpostId"];
    }
    if (output.LoadBalancerAddresses === "") {
        contents.LoadBalancerAddresses = [];
    }
    if (output["LoadBalancerAddresses"] !== undefined && output["LoadBalancerAddresses"]["member"] !== undefined) {
        contents.LoadBalancerAddresses = deserializeAws_queryLoadBalancerAddresses(__getArrayIfSingleItem(output["LoadBalancerAddresses"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryAvailabilityZoneNotSupportedException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
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
        return deserializeAws_queryAvailabilityZone(entry, context);
    });
};
var deserializeAws_queryCertificate = function (output, context) {
    var contents = {
        CertificateArn: undefined,
        IsDefault: undefined,
    };
    if (output["CertificateArn"] !== undefined) {
        contents.CertificateArn = output["CertificateArn"];
    }
    if (output["IsDefault"] !== undefined) {
        contents.IsDefault = output["IsDefault"] == "true";
    }
    return contents;
};
var deserializeAws_queryCertificateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCertificate(entry, context);
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
var deserializeAws_queryCipher = function (output, context) {
    var contents = {
        Name: undefined,
        Priority: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Priority"] !== undefined) {
        contents.Priority = parseInt(output["Priority"]);
    }
    return contents;
};
var deserializeAws_queryCiphers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCipher(entry, context);
    });
};
var deserializeAws_queryCreateListenerOutput = function (output, context) {
    var contents = {
        Listeners: undefined,
    };
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
        contents.Listeners = deserializeAws_queryListeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryCreateLoadBalancerOutput = function (output, context) {
    var contents = {
        LoadBalancers: undefined,
    };
    if (output.LoadBalancers === "") {
        contents.LoadBalancers = [];
    }
    if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
        contents.LoadBalancers = deserializeAws_queryLoadBalancers(__getArrayIfSingleItem(output["LoadBalancers"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryCreateRuleOutput = function (output, context) {
    var contents = {
        Rules: undefined,
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryCreateTargetGroupOutput = function (output, context) {
    var contents = {
        TargetGroups: undefined,
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
        contents.TargetGroups = deserializeAws_queryTargetGroups(__getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDeleteListenerOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteLoadBalancerOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteRuleOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeleteTargetGroupOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryDeregisterTargetsOutput = function (output, context) {
    var contents = {};
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
var deserializeAws_queryDescribeListenerCertificatesOutput = function (output, context) {
    var contents = {
        Certificates: undefined,
        NextMarker: undefined,
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
        contents.Certificates = deserializeAws_queryCertificateList(__getArrayIfSingleItem(output["Certificates"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
var deserializeAws_queryDescribeListenersOutput = function (output, context) {
    var contents = {
        Listeners: undefined,
        NextMarker: undefined,
    };
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
        contents.Listeners = deserializeAws_queryListeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
var deserializeAws_queryDescribeLoadBalancerAttributesOutput = function (output, context) {
    var contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
        contents.Attributes = deserializeAws_queryLoadBalancerAttributes(__getArrayIfSingleItem(output["Attributes"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeLoadBalancersOutput = function (output, context) {
    var contents = {
        LoadBalancers: undefined,
        NextMarker: undefined,
    };
    if (output.LoadBalancers === "") {
        contents.LoadBalancers = [];
    }
    if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
        contents.LoadBalancers = deserializeAws_queryLoadBalancers(__getArrayIfSingleItem(output["LoadBalancers"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
var deserializeAws_queryDescribeRulesOutput = function (output, context) {
    var contents = {
        Rules: undefined,
        NextMarker: undefined,
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
var deserializeAws_queryDescribeSSLPoliciesOutput = function (output, context) {
    var contents = {
        SslPolicies: undefined,
        NextMarker: undefined,
    };
    if (output.SslPolicies === "") {
        contents.SslPolicies = [];
    }
    if (output["SslPolicies"] !== undefined && output["SslPolicies"]["member"] !== undefined) {
        contents.SslPolicies = deserializeAws_querySslPolicies(__getArrayIfSingleItem(output["SslPolicies"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
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
var deserializeAws_queryDescribeTargetGroupAttributesOutput = function (output, context) {
    var contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
        contents.Attributes = deserializeAws_queryTargetGroupAttributes(__getArrayIfSingleItem(output["Attributes"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeTargetGroupsOutput = function (output, context) {
    var contents = {
        TargetGroups: undefined,
        NextMarker: undefined,
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
        contents.TargetGroups = deserializeAws_queryTargetGroups(__getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
var deserializeAws_queryDescribeTargetHealthOutput = function (output, context) {
    var contents = {
        TargetHealthDescriptions: undefined,
    };
    if (output.TargetHealthDescriptions === "") {
        contents.TargetHealthDescriptions = [];
    }
    if (output["TargetHealthDescriptions"] !== undefined && output["TargetHealthDescriptions"]["member"] !== undefined) {
        contents.TargetHealthDescriptions = deserializeAws_queryTargetHealthDescriptions(__getArrayIfSingleItem(output["TargetHealthDescriptions"]["member"]), context);
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
var deserializeAws_queryDuplicateLoadBalancerNameException = function (output, context) {
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
var deserializeAws_queryDuplicateTargetGroupNameException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryFixedResponseActionConfig = function (output, context) {
    var contents = {
        MessageBody: undefined,
        StatusCode: undefined,
        ContentType: undefined,
    };
    if (output["MessageBody"] !== undefined) {
        contents.MessageBody = output["MessageBody"];
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = output["StatusCode"];
    }
    if (output["ContentType"] !== undefined) {
        contents.ContentType = output["ContentType"];
    }
    return contents;
};
var deserializeAws_queryForwardActionConfig = function (output, context) {
    var contents = {
        TargetGroups: undefined,
        TargetGroupStickinessConfig: undefined,
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
        contents.TargetGroups = deserializeAws_queryTargetGroupList(__getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
    }
    if (output["TargetGroupStickinessConfig"] !== undefined) {
        contents.TargetGroupStickinessConfig = deserializeAws_queryTargetGroupStickinessConfig(output["TargetGroupStickinessConfig"], context);
    }
    return contents;
};
var deserializeAws_queryHealthUnavailableException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryHostHeaderConditionConfig = function (output, context) {
    var contents = {
        Values: undefined,
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryHttpHeaderConditionConfig = function (output, context) {
    var contents = {
        HttpHeaderName: undefined,
        Values: undefined,
    };
    if (output["HttpHeaderName"] !== undefined) {
        contents.HttpHeaderName = output["HttpHeaderName"];
    }
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryHttpRequestMethodConditionConfig = function (output, context) {
    var contents = {
        Values: undefined,
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryIncompatibleProtocolsException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
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
var deserializeAws_queryInvalidLoadBalancerActionException = function (output, context) {
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
var deserializeAws_queryInvalidTargetException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
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
        ListenerArn: undefined,
        LoadBalancerArn: undefined,
        Port: undefined,
        Protocol: undefined,
        Certificates: undefined,
        SslPolicy: undefined,
        DefaultActions: undefined,
        AlpnPolicy: undefined,
    };
    if (output["ListenerArn"] !== undefined) {
        contents.ListenerArn = output["ListenerArn"];
    }
    if (output["LoadBalancerArn"] !== undefined) {
        contents.LoadBalancerArn = output["LoadBalancerArn"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
        contents.Certificates = deserializeAws_queryCertificateList(__getArrayIfSingleItem(output["Certificates"]["member"]), context);
    }
    if (output["SslPolicy"] !== undefined) {
        contents.SslPolicy = output["SslPolicy"];
    }
    if (output.DefaultActions === "") {
        contents.DefaultActions = [];
    }
    if (output["DefaultActions"] !== undefined && output["DefaultActions"]["member"] !== undefined) {
        contents.DefaultActions = deserializeAws_queryActions(__getArrayIfSingleItem(output["DefaultActions"]["member"]), context);
    }
    if (output.AlpnPolicy === "") {
        contents.AlpnPolicy = [];
    }
    if (output["AlpnPolicy"] !== undefined && output["AlpnPolicy"]["member"] !== undefined) {
        contents.AlpnPolicy = deserializeAws_queryAlpnPolicyName(__getArrayIfSingleItem(output["AlpnPolicy"]["member"]), context);
    }
    return contents;
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
var deserializeAws_queryListeners = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryListener(entry, context);
    });
};
var deserializeAws_queryListOfString = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryLoadBalancer = function (output, context) {
    var contents = {
        LoadBalancerArn: undefined,
        DNSName: undefined,
        CanonicalHostedZoneId: undefined,
        CreatedTime: undefined,
        LoadBalancerName: undefined,
        Scheme: undefined,
        VpcId: undefined,
        State: undefined,
        Type: undefined,
        AvailabilityZones: undefined,
        SecurityGroups: undefined,
        IpAddressType: undefined,
        CustomerOwnedIpv4Pool: undefined,
    };
    if (output["LoadBalancerArn"] !== undefined) {
        contents.LoadBalancerArn = output["LoadBalancerArn"];
    }
    if (output["DNSName"] !== undefined) {
        contents.DNSName = output["DNSName"];
    }
    if (output["CanonicalHostedZoneId"] !== undefined) {
        contents.CanonicalHostedZoneId = output["CanonicalHostedZoneId"];
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = new Date(output["CreatedTime"]);
    }
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
    }
    if (output["Scheme"] !== undefined) {
        contents.Scheme = output["Scheme"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output["State"] !== undefined) {
        contents.State = deserializeAws_queryLoadBalancerState(output["State"], context);
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(__getArrayIfSingleItem(output["AvailabilityZones"]["member"]), context);
    }
    if (output.SecurityGroups === "") {
        contents.SecurityGroups = [];
    }
    if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
        contents.SecurityGroups = deserializeAws_querySecurityGroups(__getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
    }
    if (output["IpAddressType"] !== undefined) {
        contents.IpAddressType = output["IpAddressType"];
    }
    if (output["CustomerOwnedIpv4Pool"] !== undefined) {
        contents.CustomerOwnedIpv4Pool = output["CustomerOwnedIpv4Pool"];
    }
    return contents;
};
var deserializeAws_queryLoadBalancerAddress = function (output, context) {
    var contents = {
        IpAddress: undefined,
        AllocationId: undefined,
        PrivateIPv4Address: undefined,
        IPv6Address: undefined,
    };
    if (output["IpAddress"] !== undefined) {
        contents.IpAddress = output["IpAddress"];
    }
    if (output["AllocationId"] !== undefined) {
        contents.AllocationId = output["AllocationId"];
    }
    if (output["PrivateIPv4Address"] !== undefined) {
        contents.PrivateIPv4Address = output["PrivateIPv4Address"];
    }
    if (output["IPv6Address"] !== undefined) {
        contents.IPv6Address = output["IPv6Address"];
    }
    return contents;
};
var deserializeAws_queryLoadBalancerAddresses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLoadBalancerAddress(entry, context);
    });
};
var deserializeAws_queryLoadBalancerArns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryLoadBalancerAttribute = function (output, context) {
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
var deserializeAws_queryLoadBalancerAttributes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLoadBalancerAttribute(entry, context);
    });
};
var deserializeAws_queryLoadBalancerNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryLoadBalancers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLoadBalancer(entry, context);
    });
};
var deserializeAws_queryLoadBalancerState = function (output, context) {
    var contents = {
        Code: undefined,
        Reason: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Reason"] !== undefined) {
        contents.Reason = output["Reason"];
    }
    return contents;
};
var deserializeAws_queryMatcher = function (output, context) {
    var contents = {
        HttpCode: undefined,
        GrpcCode: undefined,
    };
    if (output["HttpCode"] !== undefined) {
        contents.HttpCode = output["HttpCode"];
    }
    if (output["GrpcCode"] !== undefined) {
        contents.GrpcCode = output["GrpcCode"];
    }
    return contents;
};
var deserializeAws_queryModifyListenerOutput = function (output, context) {
    var contents = {
        Listeners: undefined,
    };
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
        contents.Listeners = deserializeAws_queryListeners(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryModifyLoadBalancerAttributesOutput = function (output, context) {
    var contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
        contents.Attributes = deserializeAws_queryLoadBalancerAttributes(__getArrayIfSingleItem(output["Attributes"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryModifyRuleOutput = function (output, context) {
    var contents = {
        Rules: undefined,
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryModifyTargetGroupAttributesOutput = function (output, context) {
    var contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
        contents.Attributes = deserializeAws_queryTargetGroupAttributes(__getArrayIfSingleItem(output["Attributes"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryModifyTargetGroupOutput = function (output, context) {
    var contents = {
        TargetGroups: undefined,
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
        contents.TargetGroups = deserializeAws_queryTargetGroups(__getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
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
var deserializeAws_queryPathPatternConditionConfig = function (output, context) {
    var contents = {
        Values: undefined,
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryPriorityInUseException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryQueryStringConditionConfig = function (output, context) {
    var contents = {
        Values: undefined,
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryQueryStringKeyValuePairList(__getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryQueryStringKeyValuePair = function (output, context) {
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
var deserializeAws_queryQueryStringKeyValuePairList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryQueryStringKeyValuePair(entry, context);
    });
};
var deserializeAws_queryRedirectActionConfig = function (output, context) {
    var contents = {
        Protocol: undefined,
        Port: undefined,
        Host: undefined,
        Path: undefined,
        Query: undefined,
        StatusCode: undefined,
    };
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = output["Port"];
    }
    if (output["Host"] !== undefined) {
        contents.Host = output["Host"];
    }
    if (output["Path"] !== undefined) {
        contents.Path = output["Path"];
    }
    if (output["Query"] !== undefined) {
        contents.Query = output["Query"];
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = output["StatusCode"];
    }
    return contents;
};
var deserializeAws_queryRegisterTargetsOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryRemoveListenerCertificatesOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryRemoveTagsOutput = function (output, context) {
    var contents = {};
    return contents;
};
var deserializeAws_queryResourceInUseException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryRule = function (output, context) {
    var contents = {
        RuleArn: undefined,
        Priority: undefined,
        Conditions: undefined,
        Actions: undefined,
        IsDefault: undefined,
    };
    if (output["RuleArn"] !== undefined) {
        contents.RuleArn = output["RuleArn"];
    }
    if (output["Priority"] !== undefined) {
        contents.Priority = output["Priority"];
    }
    if (output.Conditions === "") {
        contents.Conditions = [];
    }
    if (output["Conditions"] !== undefined && output["Conditions"]["member"] !== undefined) {
        contents.Conditions = deserializeAws_queryRuleConditionList(__getArrayIfSingleItem(output["Conditions"]["member"]), context);
    }
    if (output.Actions === "") {
        contents.Actions = [];
    }
    if (output["Actions"] !== undefined && output["Actions"]["member"] !== undefined) {
        contents.Actions = deserializeAws_queryActions(__getArrayIfSingleItem(output["Actions"]["member"]), context);
    }
    if (output["IsDefault"] !== undefined) {
        contents.IsDefault = output["IsDefault"] == "true";
    }
    return contents;
};
var deserializeAws_queryRuleCondition = function (output, context) {
    var contents = {
        Field: undefined,
        Values: undefined,
        HostHeaderConfig: undefined,
        PathPatternConfig: undefined,
        HttpHeaderConfig: undefined,
        QueryStringConfig: undefined,
        HttpRequestMethodConfig: undefined,
        SourceIpConfig: undefined,
    };
    if (output["Field"] !== undefined) {
        contents.Field = output["Field"];
    }
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    if (output["HostHeaderConfig"] !== undefined) {
        contents.HostHeaderConfig = deserializeAws_queryHostHeaderConditionConfig(output["HostHeaderConfig"], context);
    }
    if (output["PathPatternConfig"] !== undefined) {
        contents.PathPatternConfig = deserializeAws_queryPathPatternConditionConfig(output["PathPatternConfig"], context);
    }
    if (output["HttpHeaderConfig"] !== undefined) {
        contents.HttpHeaderConfig = deserializeAws_queryHttpHeaderConditionConfig(output["HttpHeaderConfig"], context);
    }
    if (output["QueryStringConfig"] !== undefined) {
        contents.QueryStringConfig = deserializeAws_queryQueryStringConditionConfig(output["QueryStringConfig"], context);
    }
    if (output["HttpRequestMethodConfig"] !== undefined) {
        contents.HttpRequestMethodConfig = deserializeAws_queryHttpRequestMethodConditionConfig(output["HttpRequestMethodConfig"], context);
    }
    if (output["SourceIpConfig"] !== undefined) {
        contents.SourceIpConfig = deserializeAws_querySourceIpConditionConfig(output["SourceIpConfig"], context);
    }
    return contents;
};
var deserializeAws_queryRuleConditionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRuleCondition(entry, context);
    });
};
var deserializeAws_queryRuleNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRule(entry, context);
    });
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
var deserializeAws_querySetIpAddressTypeOutput = function (output, context) {
    var contents = {
        IpAddressType: undefined,
    };
    if (output["IpAddressType"] !== undefined) {
        contents.IpAddressType = output["IpAddressType"];
    }
    return contents;
};
var deserializeAws_querySetRulePrioritiesOutput = function (output, context) {
    var contents = {
        Rules: undefined,
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = deserializeAws_queryRules(__getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    return contents;
};
var deserializeAws_querySetSecurityGroupsOutput = function (output, context) {
    var contents = {
        SecurityGroupIds: undefined,
    };
    if (output.SecurityGroupIds === "") {
        contents.SecurityGroupIds = [];
    }
    if (output["SecurityGroupIds"] !== undefined && output["SecurityGroupIds"]["member"] !== undefined) {
        contents.SecurityGroupIds = deserializeAws_querySecurityGroups(__getArrayIfSingleItem(output["SecurityGroupIds"]["member"]), context);
    }
    return contents;
};
var deserializeAws_querySetSubnetsOutput = function (output, context) {
    var contents = {
        AvailabilityZones: undefined,
        IpAddressType: undefined,
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(__getArrayIfSingleItem(output["AvailabilityZones"]["member"]), context);
    }
    if (output["IpAddressType"] !== undefined) {
        contents.IpAddressType = output["IpAddressType"];
    }
    return contents;
};
var deserializeAws_querySourceIpConditionConfig = function (output, context) {
    var contents = {
        Values: undefined,
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryListOfString(__getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
var deserializeAws_querySslPolicies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySslPolicy(entry, context);
    });
};
var deserializeAws_querySslPolicy = function (output, context) {
    var contents = {
        SslProtocols: undefined,
        Ciphers: undefined,
        Name: undefined,
    };
    if (output.SslProtocols === "") {
        contents.SslProtocols = [];
    }
    if (output["SslProtocols"] !== undefined && output["SslProtocols"]["member"] !== undefined) {
        contents.SslProtocols = deserializeAws_querySslProtocols(__getArrayIfSingleItem(output["SslProtocols"]["member"]), context);
    }
    if (output.Ciphers === "") {
        contents.Ciphers = [];
    }
    if (output["Ciphers"] !== undefined && output["Ciphers"]["member"] !== undefined) {
        contents.Ciphers = deserializeAws_queryCiphers(__getArrayIfSingleItem(output["Ciphers"]["member"]), context);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
var deserializeAws_querySSLPolicyNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_querySslProtocols = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
        ResourceArn: undefined,
        Tags: undefined,
    };
    if (output["ResourceArn"] !== undefined) {
        contents.ResourceArn = output["ResourceArn"];
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
var deserializeAws_queryTargetDescription = function (output, context) {
    var contents = {
        Id: undefined,
        Port: undefined,
        AvailabilityZone: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    return contents;
};
var deserializeAws_queryTargetGroup = function (output, context) {
    var contents = {
        TargetGroupArn: undefined,
        TargetGroupName: undefined,
        Protocol: undefined,
        Port: undefined,
        VpcId: undefined,
        HealthCheckProtocol: undefined,
        HealthCheckPort: undefined,
        HealthCheckEnabled: undefined,
        HealthCheckIntervalSeconds: undefined,
        HealthCheckTimeoutSeconds: undefined,
        HealthyThresholdCount: undefined,
        UnhealthyThresholdCount: undefined,
        HealthCheckPath: undefined,
        Matcher: undefined,
        LoadBalancerArns: undefined,
        TargetType: undefined,
        ProtocolVersion: undefined,
    };
    if (output["TargetGroupArn"] !== undefined) {
        contents.TargetGroupArn = output["TargetGroupArn"];
    }
    if (output["TargetGroupName"] !== undefined) {
        contents.TargetGroupName = output["TargetGroupName"];
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output["HealthCheckProtocol"] !== undefined) {
        contents.HealthCheckProtocol = output["HealthCheckProtocol"];
    }
    if (output["HealthCheckPort"] !== undefined) {
        contents.HealthCheckPort = output["HealthCheckPort"];
    }
    if (output["HealthCheckEnabled"] !== undefined) {
        contents.HealthCheckEnabled = output["HealthCheckEnabled"] == "true";
    }
    if (output["HealthCheckIntervalSeconds"] !== undefined) {
        contents.HealthCheckIntervalSeconds = parseInt(output["HealthCheckIntervalSeconds"]);
    }
    if (output["HealthCheckTimeoutSeconds"] !== undefined) {
        contents.HealthCheckTimeoutSeconds = parseInt(output["HealthCheckTimeoutSeconds"]);
    }
    if (output["HealthyThresholdCount"] !== undefined) {
        contents.HealthyThresholdCount = parseInt(output["HealthyThresholdCount"]);
    }
    if (output["UnhealthyThresholdCount"] !== undefined) {
        contents.UnhealthyThresholdCount = parseInt(output["UnhealthyThresholdCount"]);
    }
    if (output["HealthCheckPath"] !== undefined) {
        contents.HealthCheckPath = output["HealthCheckPath"];
    }
    if (output["Matcher"] !== undefined) {
        contents.Matcher = deserializeAws_queryMatcher(output["Matcher"], context);
    }
    if (output.LoadBalancerArns === "") {
        contents.LoadBalancerArns = [];
    }
    if (output["LoadBalancerArns"] !== undefined && output["LoadBalancerArns"]["member"] !== undefined) {
        contents.LoadBalancerArns = deserializeAws_queryLoadBalancerArns(__getArrayIfSingleItem(output["LoadBalancerArns"]["member"]), context);
    }
    if (output["TargetType"] !== undefined) {
        contents.TargetType = output["TargetType"];
    }
    if (output["ProtocolVersion"] !== undefined) {
        contents.ProtocolVersion = output["ProtocolVersion"];
    }
    return contents;
};
var deserializeAws_queryTargetGroupAssociationLimitException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTargetGroupAttribute = function (output, context) {
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
var deserializeAws_queryTargetGroupAttributes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTargetGroupAttribute(entry, context);
    });
};
var deserializeAws_queryTargetGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTargetGroupTuple(entry, context);
    });
};
var deserializeAws_queryTargetGroupNotFoundException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTargetGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTargetGroup(entry, context);
    });
};
var deserializeAws_queryTargetGroupStickinessConfig = function (output, context) {
    var contents = {
        Enabled: undefined,
        DurationSeconds: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["DurationSeconds"] !== undefined) {
        contents.DurationSeconds = parseInt(output["DurationSeconds"]);
    }
    return contents;
};
var deserializeAws_queryTargetGroupTuple = function (output, context) {
    var contents = {
        TargetGroupArn: undefined,
        Weight: undefined,
    };
    if (output["TargetGroupArn"] !== undefined) {
        contents.TargetGroupArn = output["TargetGroupArn"];
    }
    if (output["Weight"] !== undefined) {
        contents.Weight = parseInt(output["Weight"]);
    }
    return contents;
};
var deserializeAws_queryTargetHealth = function (output, context) {
    var contents = {
        State: undefined,
        Reason: undefined,
        Description: undefined,
    };
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["Reason"] !== undefined) {
        contents.Reason = output["Reason"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
var deserializeAws_queryTargetHealthDescription = function (output, context) {
    var contents = {
        Target: undefined,
        HealthCheckPort: undefined,
        TargetHealth: undefined,
    };
    if (output["Target"] !== undefined) {
        contents.Target = deserializeAws_queryTargetDescription(output["Target"], context);
    }
    if (output["HealthCheckPort"] !== undefined) {
        contents.HealthCheckPort = output["HealthCheckPort"];
    }
    if (output["TargetHealth"] !== undefined) {
        contents.TargetHealth = deserializeAws_queryTargetHealth(output["TargetHealth"], context);
    }
    return contents;
};
var deserializeAws_queryTargetHealthDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTargetHealthDescription(entry, context);
    });
};
var deserializeAws_queryTooManyActionsException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTooManyCertificatesException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTooManyListenersException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTooManyLoadBalancersException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTooManyRegistrationsForTargetIdException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTooManyRulesException = function (output, context) {
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
var deserializeAws_queryTooManyTargetGroupsException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTooManyTargetsException = function (output, context) {
    var contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException = function (output, context) {
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