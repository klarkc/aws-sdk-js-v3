import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_0AssociateFirewallPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.AssociateFirewallPolicy",
        };
        body = JSON.stringify(serializeAws_json1_0AssociateFirewallPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0AssociateSubnetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.AssociateSubnets",
        };
        body = JSON.stringify(serializeAws_json1_0AssociateSubnetsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0CreateFirewallCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.CreateFirewall",
        };
        body = JSON.stringify(serializeAws_json1_0CreateFirewallRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0CreateFirewallPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.CreateFirewallPolicy",
        };
        body = JSON.stringify(serializeAws_json1_0CreateFirewallPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0CreateRuleGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.CreateRuleGroup",
        };
        body = JSON.stringify(serializeAws_json1_0CreateRuleGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeleteFirewallCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.DeleteFirewall",
        };
        body = JSON.stringify(serializeAws_json1_0DeleteFirewallRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeleteFirewallPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.DeleteFirewallPolicy",
        };
        body = JSON.stringify(serializeAws_json1_0DeleteFirewallPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeleteResourcePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.DeleteResourcePolicy",
        };
        body = JSON.stringify(serializeAws_json1_0DeleteResourcePolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeleteRuleGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.DeleteRuleGroup",
        };
        body = JSON.stringify(serializeAws_json1_0DeleteRuleGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeFirewallCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.DescribeFirewall",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeFirewallRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeFirewallPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.DescribeFirewallPolicy",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeFirewallPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeLoggingConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.DescribeLoggingConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeLoggingConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeResourcePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.DescribeResourcePolicy",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeResourcePolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeRuleGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.DescribeRuleGroup",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeRuleGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DisassociateSubnetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.DisassociateSubnets",
        };
        body = JSON.stringify(serializeAws_json1_0DisassociateSubnetsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListFirewallPoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.ListFirewallPolicies",
        };
        body = JSON.stringify(serializeAws_json1_0ListFirewallPoliciesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListFirewallsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.ListFirewalls",
        };
        body = JSON.stringify(serializeAws_json1_0ListFirewallsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListRuleGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.ListRuleGroups",
        };
        body = JSON.stringify(serializeAws_json1_0ListRuleGroupsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0PutResourcePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.PutResourcePolicy",
        };
        body = JSON.stringify(serializeAws_json1_0PutResourcePolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateFirewallDeleteProtectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallDeleteProtection",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateFirewallDeleteProtectionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateFirewallDescriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallDescription",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateFirewallDescriptionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateFirewallPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallPolicy",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateFirewallPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateFirewallPolicyChangeProtectionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateLoggingConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.UpdateLoggingConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateLoggingConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateRuleGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.UpdateRuleGroup",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateRuleGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateSubnetChangeProtectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "NetworkFirewall_20201112.UpdateSubnetChangeProtection",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateSubnetChangeProtectionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_0AssociateFirewallPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0AssociateFirewallPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0AssociateFirewallPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0AssociateFirewallPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidOperationException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 6];
                    case "InvalidTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#InvalidTokenException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0AssociateSubnetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0AssociateSubnetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0AssociateSubnetsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0AssociateSubnetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientCapacityException": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InsufficientCapacityException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidOperationException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 8];
                    case "InvalidTokenException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#InvalidTokenException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0CreateFirewallCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CreateFirewallCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0CreateFirewallResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CreateFirewallCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientCapacityException": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InsufficientCapacityException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidOperationException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#LimitExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0CreateFirewallPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CreateFirewallPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0CreateFirewallPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CreateFirewallPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientCapacityException": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InsufficientCapacityException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#LimitExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0CreateRuleGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CreateRuleGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0CreateRuleGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CreateRuleGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientCapacityException": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InsufficientCapacityException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#LimitExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeleteFirewallCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeleteFirewallCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DeleteFirewallResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DeleteFirewallCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidOperationException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeleteFirewallPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeleteFirewallPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DeleteFirewallPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DeleteFirewallPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidOperationException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeleteResourcePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeleteResourcePolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DeleteResourcePolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DeleteResourcePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeleteRuleGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeleteRuleGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DeleteRuleGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DeleteRuleGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidOperationException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeFirewallCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeFirewallCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeFirewallResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeFirewallCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeFirewallPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeFirewallPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeFirewallPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeFirewallPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeLoggingConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeLoggingConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeLoggingConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeLoggingConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeResourcePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeResourcePolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeResourcePolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeResourcePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeRuleGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeRuleGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeRuleGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeRuleGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DisassociateSubnetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DisassociateSubnetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DisassociateSubnetsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DisassociateSubnetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidOperationException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 6];
                    case "InvalidTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#InvalidTokenException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListFirewallPoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListFirewallPoliciesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListFirewallPoliciesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListFirewallPoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListFirewallsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListFirewallsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListFirewallsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListFirewallsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListRuleGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListRuleGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListRuleGroupsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListRuleGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0PutResourcePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0PutResourcePolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0PutResourcePolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0PutResourcePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "InvalidResourcePolicyException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidResourcePolicyException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidResourcePolicyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0TagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0TagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UntagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UntagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateFirewallDeleteProtectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateFirewallDeleteProtectionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateFirewallDeleteProtectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "InvalidTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidTokenException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ResourceOwnerCheckException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceOwnerCheckExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UpdateFirewallDescriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateFirewallDescriptionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateFirewallDescriptionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateFirewallDescriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "InvalidTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidTokenException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UpdateFirewallPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateFirewallPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateFirewallPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateFirewallPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "InvalidTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidTokenException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "InvalidTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidTokenException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ResourceOwnerCheckException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceOwnerCheckExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UpdateLoggingConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateLoggingConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateLoggingConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateLoggingConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "InvalidTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidTokenException": return [3 /*break*/, 6];
                    case "LogDestinationPermissionException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#LogDestinationPermissionException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LogDestinationPermissionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UpdateRuleGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateRuleGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateRuleGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateRuleGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "InvalidTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidTokenException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UpdateSubnetChangeProtectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateSubnetChangeProtectionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateSubnetChangeProtectionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateSubnetChangeProtectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.networkfirewall#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.networkfirewall#InvalidRequestException": return [3 /*break*/, 4];
                    case "InvalidTokenException": return [3 /*break*/, 6];
                    case "com.amazonaws.networkfirewall#InvalidTokenException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.networkfirewall#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ResourceOwnerCheckException": return [3 /*break*/, 10];
                    case "com.amazonaws.networkfirewall#ResourceOwnerCheckException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.networkfirewall#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceOwnerCheckExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_0InsufficientCapacityExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InsufficientCapacityException(body, context);
        contents = __assign({ name: "InsufficientCapacityException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InternalServerErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InternalServerError(body, context);
        contents = __assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidOperationException(body, context);
        contents = __assign({ name: "InvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidRequestException(body, context);
        contents = __assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidResourcePolicyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidResourcePolicyException(body, context);
        contents = __assign({ name: "InvalidResourcePolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidTokenException(body, context);
        contents = __assign({ name: "InvalidTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0LimitExceededException(body, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0LogDestinationPermissionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0LogDestinationPermissionException(body, context);
        contents = __assign({ name: "LogDestinationPermissionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ResourceOwnerCheckExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ResourceOwnerCheckException(body, context);
        contents = __assign({ name: "ResourceOwnerCheckException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ThrottlingException(body, context);
        contents = __assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0UnsupportedOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0UnsupportedOperationException(body, context);
        contents = __assign({ name: "UnsupportedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_0ActionDefinition = function (input, context) {
    return __assign({}, (input.PublishMetricAction !== undefined &&
        input.PublishMetricAction !== null && {
        PublishMetricAction: serializeAws_json1_0PublishMetricAction(input.PublishMetricAction, context),
    }));
};
var serializeAws_json1_0Address = function (input, context) {
    return __assign({}, (input.AddressDefinition !== undefined &&
        input.AddressDefinition !== null && { AddressDefinition: input.AddressDefinition }));
};
var serializeAws_json1_0Addresses = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Address(entry, context);
    });
};
var serializeAws_json1_0AssociateFirewallPolicyRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName })), (input.FirewallPolicyArn !== undefined &&
        input.FirewallPolicyArn !== null && { FirewallPolicyArn: input.FirewallPolicyArn })), (input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }));
};
var serializeAws_json1_0AssociateSubnetsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName })), (input.SubnetMappings !== undefined &&
        input.SubnetMappings !== null && {
        SubnetMappings: serializeAws_json1_0SubnetMappings(input.SubnetMappings, context),
    })), (input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }));
};
var serializeAws_json1_0AzSubnets = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0CreateFirewallPolicyRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun })), (input.FirewallPolicy !== undefined &&
        input.FirewallPolicy !== null && {
        FirewallPolicy: serializeAws_json1_0FirewallPolicy(input.FirewallPolicy, context),
    })), (input.FirewallPolicyName !== undefined &&
        input.FirewallPolicyName !== null && { FirewallPolicyName: input.FirewallPolicyName })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }));
};
var serializeAws_json1_0CreateFirewallRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DeleteProtection !== undefined &&
        input.DeleteProtection !== null && { DeleteProtection: input.DeleteProtection })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName })), (input.FirewallPolicyArn !== undefined &&
        input.FirewallPolicyArn !== null && { FirewallPolicyArn: input.FirewallPolicyArn })), (input.FirewallPolicyChangeProtection !== undefined &&
        input.FirewallPolicyChangeProtection !== null && {
        FirewallPolicyChangeProtection: input.FirewallPolicyChangeProtection,
    })), (input.SubnetChangeProtection !== undefined &&
        input.SubnetChangeProtection !== null && { SubnetChangeProtection: input.SubnetChangeProtection })), (input.SubnetMappings !== undefined &&
        input.SubnetMappings !== null && {
        SubnetMappings: serializeAws_json1_0SubnetMappings(input.SubnetMappings, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_json1_0CreateRuleGroupRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Capacity !== undefined && input.Capacity !== null && { Capacity: input.Capacity })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun })), (input.RuleGroup !== undefined &&
        input.RuleGroup !== null && { RuleGroup: serializeAws_json1_0RuleGroup(input.RuleGroup, context) })), (input.RuleGroupName !== undefined && input.RuleGroupName !== null && { RuleGroupName: input.RuleGroupName })), (input.Rules !== undefined && input.Rules !== null && { Rules: input.Rules })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_0CustomAction = function (input, context) {
    return __assign(__assign({}, (input.ActionDefinition !== undefined &&
        input.ActionDefinition !== null && {
        ActionDefinition: serializeAws_json1_0ActionDefinition(input.ActionDefinition, context),
    })), (input.ActionName !== undefined && input.ActionName !== null && { ActionName: input.ActionName }));
};
var serializeAws_json1_0CustomActions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0CustomAction(entry, context);
    });
};
var serializeAws_json1_0DeleteFirewallPolicyRequest = function (input, context) {
    return __assign(__assign({}, (input.FirewallPolicyArn !== undefined &&
        input.FirewallPolicyArn !== null && { FirewallPolicyArn: input.FirewallPolicyArn })), (input.FirewallPolicyName !== undefined &&
        input.FirewallPolicyName !== null && { FirewallPolicyName: input.FirewallPolicyName }));
};
var serializeAws_json1_0DeleteFirewallRequest = function (input, context) {
    return __assign(__assign({}, (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }));
};
var serializeAws_json1_0DeleteResourcePolicyRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_0DeleteRuleGroupRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.RuleGroupArn !== undefined && input.RuleGroupArn !== null && { RuleGroupArn: input.RuleGroupArn })), (input.RuleGroupName !== undefined && input.RuleGroupName !== null && { RuleGroupName: input.RuleGroupName })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_0DescribeFirewallPolicyRequest = function (input, context) {
    return __assign(__assign({}, (input.FirewallPolicyArn !== undefined &&
        input.FirewallPolicyArn !== null && { FirewallPolicyArn: input.FirewallPolicyArn })), (input.FirewallPolicyName !== undefined &&
        input.FirewallPolicyName !== null && { FirewallPolicyName: input.FirewallPolicyName }));
};
var serializeAws_json1_0DescribeFirewallRequest = function (input, context) {
    return __assign(__assign({}, (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }));
};
var serializeAws_json1_0DescribeLoggingConfigurationRequest = function (input, context) {
    return __assign(__assign({}, (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }));
};
var serializeAws_json1_0DescribeResourcePolicyRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_0DescribeRuleGroupRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.RuleGroupArn !== undefined && input.RuleGroupArn !== null && { RuleGroupArn: input.RuleGroupArn })), (input.RuleGroupName !== undefined && input.RuleGroupName !== null && { RuleGroupName: input.RuleGroupName })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_0Dimension = function (input, context) {
    return __assign({}, (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_0Dimensions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Dimension(entry, context);
    });
};
var serializeAws_json1_0DisassociateSubnetsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_0AzSubnets(input.SubnetIds, context) })), (input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }));
};
var serializeAws_json1_0FirewallPolicy = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.StatefulRuleGroupReferences !== undefined &&
        input.StatefulRuleGroupReferences !== null && {
        StatefulRuleGroupReferences: serializeAws_json1_0StatefulRuleGroupReferences(input.StatefulRuleGroupReferences, context),
    })), (input.StatelessCustomActions !== undefined &&
        input.StatelessCustomActions !== null && {
        StatelessCustomActions: serializeAws_json1_0CustomActions(input.StatelessCustomActions, context),
    })), (input.StatelessDefaultActions !== undefined &&
        input.StatelessDefaultActions !== null && {
        StatelessDefaultActions: serializeAws_json1_0StatelessActions(input.StatelessDefaultActions, context),
    })), (input.StatelessFragmentDefaultActions !== undefined &&
        input.StatelessFragmentDefaultActions !== null && {
        StatelessFragmentDefaultActions: serializeAws_json1_0StatelessActions(input.StatelessFragmentDefaultActions, context),
    })), (input.StatelessRuleGroupReferences !== undefined &&
        input.StatelessRuleGroupReferences !== null && {
        StatelessRuleGroupReferences: serializeAws_json1_0StatelessRuleGroupReferences(input.StatelessRuleGroupReferences, context),
    }));
};
var serializeAws_json1_0Flags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0Header = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Destination !== undefined && input.Destination !== null && { Destination: input.Destination })), (input.DestinationPort !== undefined &&
        input.DestinationPort !== null && { DestinationPort: input.DestinationPort })), (input.Direction !== undefined && input.Direction !== null && { Direction: input.Direction })), (input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol })), (input.Source !== undefined && input.Source !== null && { Source: input.Source })), (input.SourcePort !== undefined && input.SourcePort !== null && { SourcePort: input.SourcePort }));
};
var serializeAws_json1_0IPSet = function (input, context) {
    return __assign({}, (input.Definition !== undefined &&
        input.Definition !== null && {
        Definition: serializeAws_json1_0VariableDefinitionList(input.Definition, context),
    }));
};
var serializeAws_json1_0IPSets = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0IPSet(value, context), _b));
    }, {});
};
var serializeAws_json1_0ListFirewallPoliciesRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_0ListFirewallsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.VpcIds !== undefined &&
        input.VpcIds !== null && { VpcIds: serializeAws_json1_0VpcIds(input.VpcIds, context) }));
};
var serializeAws_json1_0ListRuleGroupsRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_0ListTagsForResourceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_0LogDestinationConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.LogDestination !== undefined &&
        input.LogDestination !== null && {
        LogDestination: serializeAws_json1_0LogDestinationMap(input.LogDestination, context),
    })), (input.LogDestinationType !== undefined &&
        input.LogDestinationType !== null && { LogDestinationType: input.LogDestinationType })), (input.LogType !== undefined && input.LogType !== null && { LogType: input.LogType }));
};
var serializeAws_json1_0LogDestinationConfigs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0LogDestinationConfig(entry, context);
    });
};
var serializeAws_json1_0LogDestinationMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_0LoggingConfiguration = function (input, context) {
    return __assign({}, (input.LogDestinationConfigs !== undefined &&
        input.LogDestinationConfigs !== null && {
        LogDestinationConfigs: serializeAws_json1_0LogDestinationConfigs(input.LogDestinationConfigs, context),
    }));
};
var serializeAws_json1_0MatchAttributes = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.DestinationPorts !== undefined &&
        input.DestinationPorts !== null && {
        DestinationPorts: serializeAws_json1_0PortRanges(input.DestinationPorts, context),
    })), (input.Destinations !== undefined &&
        input.Destinations !== null && { Destinations: serializeAws_json1_0Addresses(input.Destinations, context) })), (input.Protocols !== undefined &&
        input.Protocols !== null && { Protocols: serializeAws_json1_0ProtocolNumbers(input.Protocols, context) })), (input.SourcePorts !== undefined &&
        input.SourcePorts !== null && { SourcePorts: serializeAws_json1_0PortRanges(input.SourcePorts, context) })), (input.Sources !== undefined &&
        input.Sources !== null && { Sources: serializeAws_json1_0Addresses(input.Sources, context) })), (input.TCPFlags !== undefined &&
        input.TCPFlags !== null && { TCPFlags: serializeAws_json1_0TCPFlags(input.TCPFlags, context) }));
};
var serializeAws_json1_0PortRange = function (input, context) {
    return __assign(__assign({}, (input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort })), (input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort }));
};
var serializeAws_json1_0PortRanges = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0PortRange(entry, context);
    });
};
var serializeAws_json1_0PortSet = function (input, context) {
    return __assign({}, (input.Definition !== undefined &&
        input.Definition !== null && {
        Definition: serializeAws_json1_0VariableDefinitionList(input.Definition, context),
    }));
};
var serializeAws_json1_0PortSets = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0PortSet(value, context), _b));
    }, {});
};
var serializeAws_json1_0ProtocolNumbers = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0PublishMetricAction = function (input, context) {
    return __assign({}, (input.Dimensions !== undefined &&
        input.Dimensions !== null && { Dimensions: serializeAws_json1_0Dimensions(input.Dimensions, context) }));
};
var serializeAws_json1_0PutResourcePolicyRequest = function (input, context) {
    return __assign(__assign({}, (input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy })), (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_0RuleDefinition = function (input, context) {
    return __assign(__assign({}, (input.Actions !== undefined &&
        input.Actions !== null && { Actions: serializeAws_json1_0StatelessActions(input.Actions, context) })), (input.MatchAttributes !== undefined &&
        input.MatchAttributes !== null && {
        MatchAttributes: serializeAws_json1_0MatchAttributes(input.MatchAttributes, context),
    }));
};
var serializeAws_json1_0RuleGroup = function (input, context) {
    return __assign(__assign({}, (input.RuleVariables !== undefined &&
        input.RuleVariables !== null && {
        RuleVariables: serializeAws_json1_0RuleVariables(input.RuleVariables, context),
    })), (input.RulesSource !== undefined &&
        input.RulesSource !== null && { RulesSource: serializeAws_json1_0RulesSource(input.RulesSource, context) }));
};
var serializeAws_json1_0RuleOption = function (input, context) {
    return __assign(__assign({}, (input.Keyword !== undefined && input.Keyword !== null && { Keyword: input.Keyword })), (input.Settings !== undefined &&
        input.Settings !== null && { Settings: serializeAws_json1_0Settings(input.Settings, context) }));
};
var serializeAws_json1_0RuleOptions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0RuleOption(entry, context);
    });
};
var serializeAws_json1_0RulesSource = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.RulesSourceList !== undefined &&
        input.RulesSourceList !== null && {
        RulesSourceList: serializeAws_json1_0RulesSourceList(input.RulesSourceList, context),
    })), (input.RulesString !== undefined && input.RulesString !== null && { RulesString: input.RulesString })), (input.StatefulRules !== undefined &&
        input.StatefulRules !== null && {
        StatefulRules: serializeAws_json1_0StatefulRules(input.StatefulRules, context),
    })), (input.StatelessRulesAndCustomActions !== undefined &&
        input.StatelessRulesAndCustomActions !== null && {
        StatelessRulesAndCustomActions: serializeAws_json1_0StatelessRulesAndCustomActions(input.StatelessRulesAndCustomActions, context),
    }));
};
var serializeAws_json1_0RulesSourceList = function (input, context) {
    return __assign(__assign(__assign({}, (input.GeneratedRulesType !== undefined &&
        input.GeneratedRulesType !== null && { GeneratedRulesType: input.GeneratedRulesType })), (input.TargetTypes !== undefined &&
        input.TargetTypes !== null && { TargetTypes: serializeAws_json1_0TargetTypes(input.TargetTypes, context) })), (input.Targets !== undefined &&
        input.Targets !== null && { Targets: serializeAws_json1_0RuleTargets(input.Targets, context) }));
};
var serializeAws_json1_0RuleTargets = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0RuleVariables = function (input, context) {
    return __assign(__assign({}, (input.IPSets !== undefined &&
        input.IPSets !== null && { IPSets: serializeAws_json1_0IPSets(input.IPSets, context) })), (input.PortSets !== undefined &&
        input.PortSets !== null && { PortSets: serializeAws_json1_0PortSets(input.PortSets, context) }));
};
var serializeAws_json1_0Settings = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0StatefulRule = function (input, context) {
    return __assign(__assign(__assign({}, (input.Action !== undefined && input.Action !== null && { Action: input.Action })), (input.Header !== undefined &&
        input.Header !== null && { Header: serializeAws_json1_0Header(input.Header, context) })), (input.RuleOptions !== undefined &&
        input.RuleOptions !== null && { RuleOptions: serializeAws_json1_0RuleOptions(input.RuleOptions, context) }));
};
var serializeAws_json1_0StatefulRuleGroupReference = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_0StatefulRuleGroupReferences = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0StatefulRuleGroupReference(entry, context);
    });
};
var serializeAws_json1_0StatefulRules = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0StatefulRule(entry, context);
    });
};
var serializeAws_json1_0StatelessActions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0StatelessRule = function (input, context) {
    return __assign(__assign({}, (input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority })), (input.RuleDefinition !== undefined &&
        input.RuleDefinition !== null && {
        RuleDefinition: serializeAws_json1_0RuleDefinition(input.RuleDefinition, context),
    }));
};
var serializeAws_json1_0StatelessRuleGroupReference = function (input, context) {
    return __assign(__assign({}, (input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority })), (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_0StatelessRuleGroupReferences = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0StatelessRuleGroupReference(entry, context);
    });
};
var serializeAws_json1_0StatelessRules = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0StatelessRule(entry, context);
    });
};
var serializeAws_json1_0StatelessRulesAndCustomActions = function (input, context) {
    return __assign(__assign({}, (input.CustomActions !== undefined &&
        input.CustomActions !== null && {
        CustomActions: serializeAws_json1_0CustomActions(input.CustomActions, context),
    })), (input.StatelessRules !== undefined &&
        input.StatelessRules !== null && {
        StatelessRules: serializeAws_json1_0StatelessRules(input.StatelessRules, context),
    }));
};
var serializeAws_json1_0SubnetMapping = function (input, context) {
    return __assign({}, (input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }));
};
var serializeAws_json1_0SubnetMappings = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0SubnetMapping(entry, context);
    });
};
var serializeAws_json1_0Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_0TagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Tag(entry, context);
    });
};
var serializeAws_json1_0TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }));
};
var serializeAws_json1_0TargetTypes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0TCPFlagField = function (input, context) {
    return __assign(__assign({}, (input.Flags !== undefined &&
        input.Flags !== null && { Flags: serializeAws_json1_0Flags(input.Flags, context) })), (input.Masks !== undefined &&
        input.Masks !== null && { Masks: serializeAws_json1_0Flags(input.Masks, context) }));
};
var serializeAws_json1_0TCPFlags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0TCPFlagField(entry, context);
    });
};
var serializeAws_json1_0UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }));
};
var serializeAws_json1_0UpdateFirewallDeleteProtectionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DeleteProtection !== undefined &&
        input.DeleteProtection !== null && { DeleteProtection: input.DeleteProtection })), (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName })), (input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }));
};
var serializeAws_json1_0UpdateFirewallDescriptionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName })), (input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }));
};
var serializeAws_json1_0UpdateFirewallPolicyChangeProtectionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName })), (input.FirewallPolicyChangeProtection !== undefined &&
        input.FirewallPolicyChangeProtection !== null && {
        FirewallPolicyChangeProtection: input.FirewallPolicyChangeProtection,
    })), (input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }));
};
var serializeAws_json1_0UpdateFirewallPolicyRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun })), (input.FirewallPolicy !== undefined &&
        input.FirewallPolicy !== null && {
        FirewallPolicy: serializeAws_json1_0FirewallPolicy(input.FirewallPolicy, context),
    })), (input.FirewallPolicyArn !== undefined &&
        input.FirewallPolicyArn !== null && { FirewallPolicyArn: input.FirewallPolicyArn })), (input.FirewallPolicyName !== undefined &&
        input.FirewallPolicyName !== null && { FirewallPolicyName: input.FirewallPolicyName })), (input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }));
};
var serializeAws_json1_0UpdateLoggingConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName })), (input.LoggingConfiguration !== undefined &&
        input.LoggingConfiguration !== null && {
        LoggingConfiguration: serializeAws_json1_0LoggingConfiguration(input.LoggingConfiguration, context),
    }));
};
var serializeAws_json1_0UpdateRuleGroupRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun })), (input.RuleGroup !== undefined &&
        input.RuleGroup !== null && { RuleGroup: serializeAws_json1_0RuleGroup(input.RuleGroup, context) })), (input.RuleGroupArn !== undefined && input.RuleGroupArn !== null && { RuleGroupArn: input.RuleGroupArn })), (input.RuleGroupName !== undefined && input.RuleGroupName !== null && { RuleGroupName: input.RuleGroupName })), (input.Rules !== undefined && input.Rules !== null && { Rules: input.Rules })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }));
};
var serializeAws_json1_0UpdateSubnetChangeProtectionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn })), (input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName })), (input.SubnetChangeProtection !== undefined &&
        input.SubnetChangeProtection !== null && { SubnetChangeProtection: input.SubnetChangeProtection })), (input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }));
};
var serializeAws_json1_0VariableDefinitionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0VpcIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0ActionDefinition = function (output, context) {
    return {
        PublishMetricAction: output.PublishMetricAction !== undefined && output.PublishMetricAction !== null
            ? deserializeAws_json1_0PublishMetricAction(output.PublishMetricAction, context)
            : undefined,
    };
};
var deserializeAws_json1_0Address = function (output, context) {
    return {
        AddressDefinition: output.AddressDefinition !== undefined && output.AddressDefinition !== null
            ? output.AddressDefinition
            : undefined,
    };
};
var deserializeAws_json1_0Addresses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Address(entry, context);
    });
};
var deserializeAws_json1_0AssociateFirewallPolicyResponse = function (output, context) {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        FirewallPolicyArn: output.FirewallPolicyArn !== undefined && output.FirewallPolicyArn !== null
            ? output.FirewallPolicyArn
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0AssociateSubnetsResponse = function (output, context) {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        SubnetMappings: output.SubnetMappings !== undefined && output.SubnetMappings !== null
            ? deserializeAws_json1_0SubnetMappings(output.SubnetMappings, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0Attachment = function (output, context) {
    return {
        EndpointId: output.EndpointId !== undefined && output.EndpointId !== null ? output.EndpointId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    };
};
var deserializeAws_json1_0CreateFirewallPolicyResponse = function (output, context) {
    return {
        FirewallPolicyResponse: output.FirewallPolicyResponse !== undefined && output.FirewallPolicyResponse !== null
            ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0CreateFirewallResponse = function (output, context) {
    return {
        Firewall: output.Firewall !== undefined && output.Firewall !== null
            ? deserializeAws_json1_0Firewall(output.Firewall, context)
            : undefined,
        FirewallStatus: output.FirewallStatus !== undefined && output.FirewallStatus !== null
            ? deserializeAws_json1_0FirewallStatus(output.FirewallStatus, context)
            : undefined,
    };
};
var deserializeAws_json1_0CreateRuleGroupResponse = function (output, context) {
    return {
        RuleGroupResponse: output.RuleGroupResponse !== undefined && output.RuleGroupResponse !== null
            ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0CustomAction = function (output, context) {
    return {
        ActionDefinition: output.ActionDefinition !== undefined && output.ActionDefinition !== null
            ? deserializeAws_json1_0ActionDefinition(output.ActionDefinition, context)
            : undefined,
        ActionName: output.ActionName !== undefined && output.ActionName !== null ? output.ActionName : undefined,
    };
};
var deserializeAws_json1_0CustomActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0CustomAction(entry, context);
    });
};
var deserializeAws_json1_0DeleteFirewallPolicyResponse = function (output, context) {
    return {
        FirewallPolicyResponse: output.FirewallPolicyResponse !== undefined && output.FirewallPolicyResponse !== null
            ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
            : undefined,
    };
};
var deserializeAws_json1_0DeleteFirewallResponse = function (output, context) {
    return {
        Firewall: output.Firewall !== undefined && output.Firewall !== null
            ? deserializeAws_json1_0Firewall(output.Firewall, context)
            : undefined,
        FirewallStatus: output.FirewallStatus !== undefined && output.FirewallStatus !== null
            ? deserializeAws_json1_0FirewallStatus(output.FirewallStatus, context)
            : undefined,
    };
};
var deserializeAws_json1_0DeleteResourcePolicyResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_0DeleteRuleGroupResponse = function (output, context) {
    return {
        RuleGroupResponse: output.RuleGroupResponse !== undefined && output.RuleGroupResponse !== null
            ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeFirewallPolicyResponse = function (output, context) {
    return {
        FirewallPolicy: output.FirewallPolicy !== undefined && output.FirewallPolicy !== null
            ? deserializeAws_json1_0FirewallPolicy(output.FirewallPolicy, context)
            : undefined,
        FirewallPolicyResponse: output.FirewallPolicyResponse !== undefined && output.FirewallPolicyResponse !== null
            ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0DescribeFirewallResponse = function (output, context) {
    return {
        Firewall: output.Firewall !== undefined && output.Firewall !== null
            ? deserializeAws_json1_0Firewall(output.Firewall, context)
            : undefined,
        FirewallStatus: output.FirewallStatus !== undefined && output.FirewallStatus !== null
            ? deserializeAws_json1_0FirewallStatus(output.FirewallStatus, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0DescribeLoggingConfigurationResponse = function (output, context) {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        LoggingConfiguration: output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
            ? deserializeAws_json1_0LoggingConfiguration(output.LoggingConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeResourcePolicyResponse = function (output, context) {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
var deserializeAws_json1_0DescribeRuleGroupResponse = function (output, context) {
    return {
        RuleGroup: output.RuleGroup !== undefined && output.RuleGroup !== null
            ? deserializeAws_json1_0RuleGroup(output.RuleGroup, context)
            : undefined,
        RuleGroupResponse: output.RuleGroupResponse !== undefined && output.RuleGroupResponse !== null
            ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0Dimension = function (output, context) {
    return {
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_0Dimensions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Dimension(entry, context);
    });
};
var deserializeAws_json1_0DisassociateSubnetsResponse = function (output, context) {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        SubnetMappings: output.SubnetMappings !== undefined && output.SubnetMappings !== null
            ? deserializeAws_json1_0SubnetMappings(output.SubnetMappings, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0Firewall = function (output, context) {
    return {
        DeleteProtection: output.DeleteProtection !== undefined && output.DeleteProtection !== null ? output.DeleteProtection : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallId: output.FirewallId !== undefined && output.FirewallId !== null ? output.FirewallId : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        FirewallPolicyArn: output.FirewallPolicyArn !== undefined && output.FirewallPolicyArn !== null
            ? output.FirewallPolicyArn
            : undefined,
        FirewallPolicyChangeProtection: output.FirewallPolicyChangeProtection !== undefined && output.FirewallPolicyChangeProtection !== null
            ? output.FirewallPolicyChangeProtection
            : undefined,
        SubnetChangeProtection: output.SubnetChangeProtection !== undefined && output.SubnetChangeProtection !== null
            ? output.SubnetChangeProtection
            : undefined,
        SubnetMappings: output.SubnetMappings !== undefined && output.SubnetMappings !== null
            ? deserializeAws_json1_0SubnetMappings(output.SubnetMappings, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_json1_0FirewallMetadata = function (output, context) {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
    };
};
var deserializeAws_json1_0FirewallPolicies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0FirewallPolicyMetadata(entry, context);
    });
};
var deserializeAws_json1_0FirewallPolicy = function (output, context) {
    return {
        StatefulRuleGroupReferences: output.StatefulRuleGroupReferences !== undefined && output.StatefulRuleGroupReferences !== null
            ? deserializeAws_json1_0StatefulRuleGroupReferences(output.StatefulRuleGroupReferences, context)
            : undefined,
        StatelessCustomActions: output.StatelessCustomActions !== undefined && output.StatelessCustomActions !== null
            ? deserializeAws_json1_0CustomActions(output.StatelessCustomActions, context)
            : undefined,
        StatelessDefaultActions: output.StatelessDefaultActions !== undefined && output.StatelessDefaultActions !== null
            ? deserializeAws_json1_0StatelessActions(output.StatelessDefaultActions, context)
            : undefined,
        StatelessFragmentDefaultActions: output.StatelessFragmentDefaultActions !== undefined && output.StatelessFragmentDefaultActions !== null
            ? deserializeAws_json1_0StatelessActions(output.StatelessFragmentDefaultActions, context)
            : undefined,
        StatelessRuleGroupReferences: output.StatelessRuleGroupReferences !== undefined && output.StatelessRuleGroupReferences !== null
            ? deserializeAws_json1_0StatelessRuleGroupReferences(output.StatelessRuleGroupReferences, context)
            : undefined,
    };
};
var deserializeAws_json1_0FirewallPolicyMetadata = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_0FirewallPolicyResponse = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FirewallPolicyArn: output.FirewallPolicyArn !== undefined && output.FirewallPolicyArn !== null
            ? output.FirewallPolicyArn
            : undefined,
        FirewallPolicyId: output.FirewallPolicyId !== undefined && output.FirewallPolicyId !== null ? output.FirewallPolicyId : undefined,
        FirewallPolicyName: output.FirewallPolicyName !== undefined && output.FirewallPolicyName !== null
            ? output.FirewallPolicyName
            : undefined,
        FirewallPolicyStatus: output.FirewallPolicyStatus !== undefined && output.FirewallPolicyStatus !== null
            ? output.FirewallPolicyStatus
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_0Firewalls = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0FirewallMetadata(entry, context);
    });
};
var deserializeAws_json1_0FirewallStatus = function (output, context) {
    return {
        ConfigurationSyncStateSummary: output.ConfigurationSyncStateSummary !== undefined && output.ConfigurationSyncStateSummary !== null
            ? output.ConfigurationSyncStateSummary
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SyncStates: output.SyncStates !== undefined && output.SyncStates !== null
            ? deserializeAws_json1_0SyncStates(output.SyncStates, context)
            : undefined,
    };
};
var deserializeAws_json1_0Flags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0Header = function (output, context) {
    return {
        Destination: output.Destination !== undefined && output.Destination !== null ? output.Destination : undefined,
        DestinationPort: output.DestinationPort !== undefined && output.DestinationPort !== null ? output.DestinationPort : undefined,
        Direction: output.Direction !== undefined && output.Direction !== null ? output.Direction : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
        SourcePort: output.SourcePort !== undefined && output.SourcePort !== null ? output.SourcePort : undefined,
    };
};
var deserializeAws_json1_0InsufficientCapacityException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0InternalServerError = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0InvalidOperationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0InvalidRequestException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0InvalidResourcePolicyException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0InvalidTokenException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0IPSet = function (output, context) {
    return {
        Definition: output.Definition !== undefined && output.Definition !== null
            ? deserializeAws_json1_0VariableDefinitionList(output.Definition, context)
            : undefined,
    };
};
var deserializeAws_json1_0IPSets = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0IPSet(value, context), _b));
    }, {});
};
var deserializeAws_json1_0LimitExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0ListFirewallPoliciesResponse = function (output, context) {
    return {
        FirewallPolicies: output.FirewallPolicies !== undefined && output.FirewallPolicies !== null
            ? deserializeAws_json1_0FirewallPolicies(output.FirewallPolicies, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_0ListFirewallsResponse = function (output, context) {
    return {
        Firewalls: output.Firewalls !== undefined && output.Firewalls !== null
            ? deserializeAws_json1_0Firewalls(output.Firewalls, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_0ListRuleGroupsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RuleGroups: output.RuleGroups !== undefined && output.RuleGroups !== null
            ? deserializeAws_json1_0RuleGroups(output.RuleGroups, context)
            : undefined,
    };
};
var deserializeAws_json1_0ListTagsForResourceResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_0LogDestinationConfig = function (output, context) {
    return {
        LogDestination: output.LogDestination !== undefined && output.LogDestination !== null
            ? deserializeAws_json1_0LogDestinationMap(output.LogDestination, context)
            : undefined,
        LogDestinationType: output.LogDestinationType !== undefined && output.LogDestinationType !== null
            ? output.LogDestinationType
            : undefined,
        LogType: output.LogType !== undefined && output.LogType !== null ? output.LogType : undefined,
    };
};
var deserializeAws_json1_0LogDestinationConfigs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LogDestinationConfig(entry, context);
    });
};
var deserializeAws_json1_0LogDestinationMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_0LogDestinationPermissionException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0LoggingConfiguration = function (output, context) {
    return {
        LogDestinationConfigs: output.LogDestinationConfigs !== undefined && output.LogDestinationConfigs !== null
            ? deserializeAws_json1_0LogDestinationConfigs(output.LogDestinationConfigs, context)
            : undefined,
    };
};
var deserializeAws_json1_0MatchAttributes = function (output, context) {
    return {
        DestinationPorts: output.DestinationPorts !== undefined && output.DestinationPorts !== null
            ? deserializeAws_json1_0PortRanges(output.DestinationPorts, context)
            : undefined,
        Destinations: output.Destinations !== undefined && output.Destinations !== null
            ? deserializeAws_json1_0Addresses(output.Destinations, context)
            : undefined,
        Protocols: output.Protocols !== undefined && output.Protocols !== null
            ? deserializeAws_json1_0ProtocolNumbers(output.Protocols, context)
            : undefined,
        SourcePorts: output.SourcePorts !== undefined && output.SourcePorts !== null
            ? deserializeAws_json1_0PortRanges(output.SourcePorts, context)
            : undefined,
        Sources: output.Sources !== undefined && output.Sources !== null
            ? deserializeAws_json1_0Addresses(output.Sources, context)
            : undefined,
        TCPFlags: output.TCPFlags !== undefined && output.TCPFlags !== null
            ? deserializeAws_json1_0TCPFlags(output.TCPFlags, context)
            : undefined,
    };
};
var deserializeAws_json1_0PerObjectStatus = function (output, context) {
    return {
        SyncStatus: output.SyncStatus !== undefined && output.SyncStatus !== null ? output.SyncStatus : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0PortRange = function (output, context) {
    return {
        FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
        ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
    };
};
var deserializeAws_json1_0PortRanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0PortRange(entry, context);
    });
};
var deserializeAws_json1_0PortSet = function (output, context) {
    return {
        Definition: output.Definition !== undefined && output.Definition !== null
            ? deserializeAws_json1_0VariableDefinitionList(output.Definition, context)
            : undefined,
    };
};
var deserializeAws_json1_0PortSets = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0PortSet(value, context), _b));
    }, {});
};
var deserializeAws_json1_0ProtocolNumbers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0PublishMetricAction = function (output, context) {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_json1_0Dimensions(output.Dimensions, context)
            : undefined,
    };
};
var deserializeAws_json1_0PutResourcePolicyResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_0ResourceNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0ResourceOwnerCheckException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0RuleDefinition = function (output, context) {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_json1_0StatelessActions(output.Actions, context)
            : undefined,
        MatchAttributes: output.MatchAttributes !== undefined && output.MatchAttributes !== null
            ? deserializeAws_json1_0MatchAttributes(output.MatchAttributes, context)
            : undefined,
    };
};
var deserializeAws_json1_0RuleGroup = function (output, context) {
    return {
        RuleVariables: output.RuleVariables !== undefined && output.RuleVariables !== null
            ? deserializeAws_json1_0RuleVariables(output.RuleVariables, context)
            : undefined,
        RulesSource: output.RulesSource !== undefined && output.RulesSource !== null
            ? deserializeAws_json1_0RulesSource(output.RulesSource, context)
            : undefined,
    };
};
var deserializeAws_json1_0RuleGroupMetadata = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_0RuleGroupResponse = function (output, context) {
    return {
        Capacity: output.Capacity !== undefined && output.Capacity !== null ? output.Capacity : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        RuleGroupArn: output.RuleGroupArn !== undefined && output.RuleGroupArn !== null ? output.RuleGroupArn : undefined,
        RuleGroupId: output.RuleGroupId !== undefined && output.RuleGroupId !== null ? output.RuleGroupId : undefined,
        RuleGroupName: output.RuleGroupName !== undefined && output.RuleGroupName !== null ? output.RuleGroupName : undefined,
        RuleGroupStatus: output.RuleGroupStatus !== undefined && output.RuleGroupStatus !== null ? output.RuleGroupStatus : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_0RuleGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RuleGroupMetadata(entry, context);
    });
};
var deserializeAws_json1_0RuleOption = function (output, context) {
    return {
        Keyword: output.Keyword !== undefined && output.Keyword !== null ? output.Keyword : undefined,
        Settings: output.Settings !== undefined && output.Settings !== null
            ? deserializeAws_json1_0Settings(output.Settings, context)
            : undefined,
    };
};
var deserializeAws_json1_0RuleOptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RuleOption(entry, context);
    });
};
var deserializeAws_json1_0RulesSource = function (output, context) {
    return {
        RulesSourceList: output.RulesSourceList !== undefined && output.RulesSourceList !== null
            ? deserializeAws_json1_0RulesSourceList(output.RulesSourceList, context)
            : undefined,
        RulesString: output.RulesString !== undefined && output.RulesString !== null ? output.RulesString : undefined,
        StatefulRules: output.StatefulRules !== undefined && output.StatefulRules !== null
            ? deserializeAws_json1_0StatefulRules(output.StatefulRules, context)
            : undefined,
        StatelessRulesAndCustomActions: output.StatelessRulesAndCustomActions !== undefined && output.StatelessRulesAndCustomActions !== null
            ? deserializeAws_json1_0StatelessRulesAndCustomActions(output.StatelessRulesAndCustomActions, context)
            : undefined,
    };
};
var deserializeAws_json1_0RulesSourceList = function (output, context) {
    return {
        GeneratedRulesType: output.GeneratedRulesType !== undefined && output.GeneratedRulesType !== null
            ? output.GeneratedRulesType
            : undefined,
        TargetTypes: output.TargetTypes !== undefined && output.TargetTypes !== null
            ? deserializeAws_json1_0TargetTypes(output.TargetTypes, context)
            : undefined,
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_0RuleTargets(output.Targets, context)
            : undefined,
    };
};
var deserializeAws_json1_0RuleTargets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0RuleVariables = function (output, context) {
    return {
        IPSets: output.IPSets !== undefined && output.IPSets !== null
            ? deserializeAws_json1_0IPSets(output.IPSets, context)
            : undefined,
        PortSets: output.PortSets !== undefined && output.PortSets !== null
            ? deserializeAws_json1_0PortSets(output.PortSets, context)
            : undefined,
    };
};
var deserializeAws_json1_0Settings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0StatefulRule = function (output, context) {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        Header: output.Header !== undefined && output.Header !== null
            ? deserializeAws_json1_0Header(output.Header, context)
            : undefined,
        RuleOptions: output.RuleOptions !== undefined && output.RuleOptions !== null
            ? deserializeAws_json1_0RuleOptions(output.RuleOptions, context)
            : undefined,
    };
};
var deserializeAws_json1_0StatefulRuleGroupReference = function (output, context) {
    return {
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
var deserializeAws_json1_0StatefulRuleGroupReferences = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0StatefulRuleGroupReference(entry, context);
    });
};
var deserializeAws_json1_0StatefulRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0StatefulRule(entry, context);
    });
};
var deserializeAws_json1_0StatelessActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0StatelessRule = function (output, context) {
    return {
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        RuleDefinition: output.RuleDefinition !== undefined && output.RuleDefinition !== null
            ? deserializeAws_json1_0RuleDefinition(output.RuleDefinition, context)
            : undefined,
    };
};
var deserializeAws_json1_0StatelessRuleGroupReference = function (output, context) {
    return {
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
var deserializeAws_json1_0StatelessRuleGroupReferences = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0StatelessRuleGroupReference(entry, context);
    });
};
var deserializeAws_json1_0StatelessRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0StatelessRule(entry, context);
    });
};
var deserializeAws_json1_0StatelessRulesAndCustomActions = function (output, context) {
    return {
        CustomActions: output.CustomActions !== undefined && output.CustomActions !== null
            ? deserializeAws_json1_0CustomActions(output.CustomActions, context)
            : undefined,
        StatelessRules: output.StatelessRules !== undefined && output.StatelessRules !== null
            ? deserializeAws_json1_0StatelessRules(output.StatelessRules, context)
            : undefined,
    };
};
var deserializeAws_json1_0SubnetMapping = function (output, context) {
    return {
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    };
};
var deserializeAws_json1_0SubnetMappings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0SubnetMapping(entry, context);
    });
};
var deserializeAws_json1_0SyncState = function (output, context) {
    return {
        Attachment: output.Attachment !== undefined && output.Attachment !== null
            ? deserializeAws_json1_0Attachment(output.Attachment, context)
            : undefined,
        Config: output.Config !== undefined && output.Config !== null
            ? deserializeAws_json1_0SyncStateConfig(output.Config, context)
            : undefined,
    };
};
var deserializeAws_json1_0SyncStateConfig = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0PerObjectStatus(value, context), _b));
    }, {});
};
var deserializeAws_json1_0SyncStates = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0SyncState(value, context), _b));
    }, {});
};
var deserializeAws_json1_0Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_0TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Tag(entry, context);
    });
};
var deserializeAws_json1_0TagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_0TargetTypes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0TCPFlagField = function (output, context) {
    return {
        Flags: output.Flags !== undefined && output.Flags !== null
            ? deserializeAws_json1_0Flags(output.Flags, context)
            : undefined,
        Masks: output.Masks !== undefined && output.Masks !== null
            ? deserializeAws_json1_0Flags(output.Masks, context)
            : undefined,
    };
};
var deserializeAws_json1_0TCPFlags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0TCPFlagField(entry, context);
    });
};
var deserializeAws_json1_0ThrottlingException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0UnsupportedOperationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_0UpdateFirewallDeleteProtectionResponse = function (output, context) {
    return {
        DeleteProtection: output.DeleteProtection !== undefined && output.DeleteProtection !== null ? output.DeleteProtection : undefined,
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0UpdateFirewallDescriptionResponse = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionResponse = function (output, context) {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        FirewallPolicyChangeProtection: output.FirewallPolicyChangeProtection !== undefined && output.FirewallPolicyChangeProtection !== null
            ? output.FirewallPolicyChangeProtection
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0UpdateFirewallPolicyResponse = function (output, context) {
    return {
        FirewallPolicyResponse: output.FirewallPolicyResponse !== undefined && output.FirewallPolicyResponse !== null
            ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0UpdateLoggingConfigurationResponse = function (output, context) {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        LoggingConfiguration: output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
            ? deserializeAws_json1_0LoggingConfiguration(output.LoggingConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_0UpdateRuleGroupResponse = function (output, context) {
    return {
        RuleGroupResponse: output.RuleGroupResponse !== undefined && output.RuleGroupResponse !== null
            ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0UpdateSubnetChangeProtectionResponse = function (output, context) {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        SubnetChangeProtection: output.SubnetChangeProtection !== undefined && output.SubnetChangeProtection !== null
            ? output.SubnetChangeProtection
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
var deserializeAws_json1_0VariableDefinitionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
//# sourceMappingURL=Aws_json1_0.js.map