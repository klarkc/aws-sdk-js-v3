import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AssociateWebACLCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.AssociateWebACL",
        };
        body = JSON.stringify(serializeAws_json1_1AssociateWebACLRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CheckCapacityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.CheckCapacity",
        };
        body = JSON.stringify(serializeAws_json1_1CheckCapacityRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateIPSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.CreateIPSet",
        };
        body = JSON.stringify(serializeAws_json1_1CreateIPSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateRegexPatternSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.CreateRegexPatternSet",
        };
        body = JSON.stringify(serializeAws_json1_1CreateRegexPatternSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateRuleGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.CreateRuleGroup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateRuleGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateWebACLCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.CreateWebACL",
        };
        body = JSON.stringify(serializeAws_json1_1CreateWebACLRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.DeleteFirewallManagerRuleGroups",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteFirewallManagerRuleGroupsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteIPSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.DeleteIPSet",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteIPSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteLoggingConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.DeleteLoggingConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteLoggingConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeletePermissionPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.DeletePermissionPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1DeletePermissionPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteRegexPatternSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.DeleteRegexPatternSet",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteRegexPatternSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteRuleGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.DeleteRuleGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteRuleGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteWebACLCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.DeleteWebACL",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteWebACLRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeManagedRuleGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.DescribeManagedRuleGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeManagedRuleGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateWebACLCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.DisassociateWebACL",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateWebACLRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetIPSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.GetIPSet",
        };
        body = JSON.stringify(serializeAws_json1_1GetIPSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetLoggingConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.GetLoggingConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1GetLoggingConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetPermissionPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.GetPermissionPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1GetPermissionPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetRateBasedStatementManagedKeysCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.GetRateBasedStatementManagedKeys",
        };
        body = JSON.stringify(serializeAws_json1_1GetRateBasedStatementManagedKeysRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetRegexPatternSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.GetRegexPatternSet",
        };
        body = JSON.stringify(serializeAws_json1_1GetRegexPatternSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetRuleGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.GetRuleGroup",
        };
        body = JSON.stringify(serializeAws_json1_1GetRuleGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetSampledRequestsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.GetSampledRequests",
        };
        body = JSON.stringify(serializeAws_json1_1GetSampledRequestsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetWebACLCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.GetWebACL",
        };
        body = JSON.stringify(serializeAws_json1_1GetWebACLRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetWebACLForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.GetWebACLForResource",
        };
        body = JSON.stringify(serializeAws_json1_1GetWebACLForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAvailableManagedRuleGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.ListAvailableManagedRuleGroups",
        };
        body = JSON.stringify(serializeAws_json1_1ListAvailableManagedRuleGroupsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListIPSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.ListIPSets",
        };
        body = JSON.stringify(serializeAws_json1_1ListIPSetsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListLoggingConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.ListLoggingConfigurations",
        };
        body = JSON.stringify(serializeAws_json1_1ListLoggingConfigurationsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListRegexPatternSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.ListRegexPatternSets",
        };
        body = JSON.stringify(serializeAws_json1_1ListRegexPatternSetsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListResourcesForWebACLCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.ListResourcesForWebACL",
        };
        body = JSON.stringify(serializeAws_json1_1ListResourcesForWebACLRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListRuleGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.ListRuleGroups",
        };
        body = JSON.stringify(serializeAws_json1_1ListRuleGroupsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListWebACLsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.ListWebACLs",
        };
        body = JSON.stringify(serializeAws_json1_1ListWebACLsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutLoggingConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.PutLoggingConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1PutLoggingConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutPermissionPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.PutPermissionPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1PutPermissionPolicyRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateIPSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.UpdateIPSet",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateIPSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateRegexPatternSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.UpdateRegexPatternSet",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateRegexPatternSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateRuleGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.UpdateRuleGroup",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateRuleGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateWebACLCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSWAF_20190729.UpdateWebACL",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateWebACLRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AssociateWebACLCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AssociateWebACLCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AssociateWebACLResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AssociateWebACLCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "WAFUnavailableEntityException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFUnavailableEntityException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CheckCapacityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CheckCapacityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CheckCapacityResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CheckCapacityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 4];
                    case "WAFInvalidResourceException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidResourceException": return [3 /*break*/, 6];
                    case "WAFLimitsExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 8];
                    case "WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "WAFSubscriptionNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException": return [3 /*break*/, 12];
                    case "WAFUnavailableEntityException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFUnavailableEntityException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateIPSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateIPSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateIPSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateIPSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "WAFTagOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 14];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateRegexPatternSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateRegexPatternSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateRegexPatternSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateRegexPatternSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "WAFTagOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 14];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateRuleGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateRuleGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateRuleGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateRuleGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "WAFNonexistentItemException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 12];
                    case "WAFOptimisticLockException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 14];
                    case "WAFSubscriptionNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException": return [3 /*break*/, 16];
                    case "WAFTagOperationException": return [3 /*break*/, 18];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 18];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 20];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 20];
                    case "WAFUnavailableEntityException": return [3 /*break*/, 22];
                    case "com.amazonaws.wafv2#WAFUnavailableEntityException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateWebACLCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateWebACLCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateWebACLResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateWebACLCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFInvalidResourceException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFInvalidResourceException": return [3 /*break*/, 10];
                    case "WAFLimitsExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 12];
                    case "WAFNonexistentItemException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 14];
                    case "WAFOptimisticLockException": return [3 /*break*/, 16];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 16];
                    case "WAFSubscriptionNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException": return [3 /*break*/, 18];
                    case "WAFTagOperationException": return [3 /*break*/, 20];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 20];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 22];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 22];
                    case "WAFUnavailableEntityException": return [3 /*break*/, 24];
                    case "com.amazonaws.wafv2#WAFUnavailableEntityException": return [3 /*break*/, 24];
                }
                return [3 /*break*/, 26];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 26:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _r.label = 27;
            case 27:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteFirewallManagerRuleGroupsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "WAFOptimisticLockException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteIPSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteIPSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteIPSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteIPSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFAssociatedItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFAssociatedItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "WAFTagOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 14];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteLoggingConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteLoggingConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteLoggingConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteLoggingConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "WAFOptimisticLockException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeletePermissionPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeletePermissionPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeletePermissionPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeletePermissionPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 4];
                    case "WAFNonexistentItemException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteRegexPatternSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteRegexPatternSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteRegexPatternSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteRegexPatternSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFAssociatedItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFAssociatedItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "WAFTagOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 14];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteRuleGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteRuleGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteRuleGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteRuleGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFAssociatedItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFAssociatedItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "WAFTagOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 14];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteWebACLCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteWebACLCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteWebACLResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteWebACLCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFAssociatedItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFAssociatedItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "WAFTagOperationException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 14];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeManagedRuleGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeManagedRuleGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeManagedRuleGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeManagedRuleGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFInvalidResourceException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidResourceException": return [3 /*break*/, 8];
                    case "WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DisassociateWebACLCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateWebACLCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociateWebACLResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateWebACLCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetIPSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetIPSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetIPSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetIPSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetLoggingConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetLoggingConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetLoggingConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetLoggingConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetPermissionPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetPermissionPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetPermissionPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetPermissionPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 4];
                    case "WAFNonexistentItemException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetRegexPatternSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetRegexPatternSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetRegexPatternSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetRegexPatternSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetRuleGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetRuleGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetRuleGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetRuleGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetSampledRequestsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetSampledRequestsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetSampledRequestsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetSampledRequestsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 4];
                    case "WAFNonexistentItemException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetWebACLCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetWebACLCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetWebACLResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetWebACLCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetWebACLForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetWebACLForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetWebACLForResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetWebACLForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "WAFUnavailableEntityException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFUnavailableEntityException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListIPSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListIPSetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListIPSetsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListIPSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListLoggingConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListLoggingConfigurationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListLoggingConfigurationsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListLoggingConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListRegexPatternSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListRegexPatternSetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListRegexPatternSetsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListRegexPatternSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListResourcesForWebACLCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListResourcesForWebACLCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListResourcesForWebACLResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListResourcesForWebACLCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListRuleGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListRuleGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListRuleGroupsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListRuleGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "WAFTagOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 10];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListWebACLsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListWebACLsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListWebACLsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListWebACLsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutLoggingConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutLoggingConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutLoggingConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutLoggingConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFLimitsExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 8];
                    case "WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 12];
                    case "WAFServiceLinkedRoleErrorException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFServiceLinkedRoleErrorException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutPermissionPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutPermissionPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutPermissionPolicyResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutPermissionPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 4];
                    case "WAFInvalidPermissionPolicyException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidPermissionPolicyException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1TagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFLimitsExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 8];
                    case "WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 10];
                    case "WAFTagOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 12];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UntagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UntagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFInternalErrorException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 2];
                    case "WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 4];
                    case "WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 6];
                    case "WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 8];
                    case "WAFTagOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFTagOperationException": return [3 /*break*/, 10];
                    case "WAFTagOperationInternalErrorException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateIPSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateIPSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateIPSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateIPSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "WAFNonexistentItemException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 12];
                    case "WAFOptimisticLockException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateRegexPatternSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateRegexPatternSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateRegexPatternSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateRegexPatternSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "WAFNonexistentItemException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 12];
                    case "WAFOptimisticLockException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateRuleGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateRuleGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateRuleGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateRuleGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 10];
                    case "WAFNonexistentItemException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 12];
                    case "WAFOptimisticLockException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 14];
                    case "WAFSubscriptionNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException": return [3 /*break*/, 16];
                    case "WAFUnavailableEntityException": return [3 /*break*/, 18];
                    case "com.amazonaws.wafv2#WAFUnavailableEntityException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateWebACLCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateWebACLCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateWebACLResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateWebACLCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "com.amazonaws.wafv2#WAFDuplicateItemException": return [3 /*break*/, 2];
                    case "WAFInternalErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.wafv2#WAFInternalErrorException": return [3 /*break*/, 4];
                    case "WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.wafv2#WAFInvalidOperationException": return [3 /*break*/, 6];
                    case "WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.wafv2#WAFInvalidParameterException": return [3 /*break*/, 8];
                    case "WAFInvalidResourceException": return [3 /*break*/, 10];
                    case "com.amazonaws.wafv2#WAFInvalidResourceException": return [3 /*break*/, 10];
                    case "WAFLimitsExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.wafv2#WAFLimitsExceededException": return [3 /*break*/, 12];
                    case "WAFNonexistentItemException": return [3 /*break*/, 14];
                    case "com.amazonaws.wafv2#WAFNonexistentItemException": return [3 /*break*/, 14];
                    case "WAFOptimisticLockException": return [3 /*break*/, 16];
                    case "com.amazonaws.wafv2#WAFOptimisticLockException": return [3 /*break*/, 16];
                    case "WAFSubscriptionNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException": return [3 /*break*/, 18];
                    case "WAFUnavailableEntityException": return [3 /*break*/, 20];
                    case "com.amazonaws.wafv2#WAFUnavailableEntityException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1WAFAssociatedItemExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFAssociatedItemException(body, context);
        contents = __assign({ name: "WAFAssociatedItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFDuplicateItemExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFDuplicateItemException(body, context);
        contents = __assign({ name: "WAFDuplicateItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFInternalErrorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFInternalErrorException(body, context);
        contents = __assign({ name: "WAFInternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFInvalidOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFInvalidOperationException(body, context);
        contents = __assign({ name: "WAFInvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFInvalidParameterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFInvalidParameterException(body, context);
        contents = __assign({ name: "WAFInvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFInvalidPermissionPolicyException(body, context);
        contents = __assign({ name: "WAFInvalidPermissionPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFInvalidResourceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFInvalidResourceException(body, context);
        contents = __assign({ name: "WAFInvalidResourceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFLimitsExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFLimitsExceededException(body, context);
        contents = __assign({ name: "WAFLimitsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFNonexistentItemExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFNonexistentItemException(body, context);
        contents = __assign({ name: "WAFNonexistentItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFOptimisticLockExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFOptimisticLockException(body, context);
        contents = __assign({ name: "WAFOptimisticLockException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFServiceLinkedRoleErrorException(body, context);
        contents = __assign({ name: "WAFServiceLinkedRoleErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFSubscriptionNotFoundException(body, context);
        contents = __assign({ name: "WAFSubscriptionNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFTagOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFTagOperationException(body, context);
        contents = __assign({ name: "WAFTagOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFTagOperationInternalErrorException(body, context);
        contents = __assign({ name: "WAFTagOperationInternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1WAFUnavailableEntityExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1WAFUnavailableEntityException(body, context);
        contents = __assign({ name: "WAFUnavailableEntityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1ActionCondition = function (input, context) {
    return __assign({}, (input.Action !== undefined && input.Action !== null && { Action: input.Action }));
};
var serializeAws_json1_1All = function (input, context) {
    return {};
};
var serializeAws_json1_1AllowAction = function (input, context) {
    return __assign({}, (input.CustomRequestHandling !== undefined &&
        input.CustomRequestHandling !== null && {
        CustomRequestHandling: serializeAws_json1_1CustomRequestHandling(input.CustomRequestHandling, context),
    }));
};
var serializeAws_json1_1AllQueryArguments = function (input, context) {
    return {};
};
var serializeAws_json1_1AndStatement = function (input, context) {
    return __assign({}, (input.Statements !== undefined &&
        input.Statements !== null && { Statements: serializeAws_json1_1Statements(input.Statements, context) }));
};
var serializeAws_json1_1AssociateWebACLRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.WebACLArn !== undefined && input.WebACLArn !== null && { WebACLArn: input.WebACLArn }));
};
var serializeAws_json1_1BlockAction = function (input, context) {
    return __assign({}, (input.CustomResponse !== undefined &&
        input.CustomResponse !== null && {
        CustomResponse: serializeAws_json1_1CustomResponse(input.CustomResponse, context),
    }));
};
var serializeAws_json1_1Body = function (input, context) {
    return {};
};
var serializeAws_json1_1ByteMatchStatement = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.FieldToMatch !== undefined &&
        input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) })), (input.PositionalConstraint !== undefined &&
        input.PositionalConstraint !== null && { PositionalConstraint: input.PositionalConstraint })), (input.SearchString !== undefined &&
        input.SearchString !== null && { SearchString: context.base64Encoder(input.SearchString) })), (input.TextTransformations !== undefined &&
        input.TextTransformations !== null && {
        TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
    }));
};
var serializeAws_json1_1CheckCapacityRequest = function (input, context) {
    return __assign(__assign({}, (input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1Condition = function (input, context) {
    return __assign(__assign({}, (input.ActionCondition !== undefined &&
        input.ActionCondition !== null && {
        ActionCondition: serializeAws_json1_1ActionCondition(input.ActionCondition, context),
    })), (input.LabelNameCondition !== undefined &&
        input.LabelNameCondition !== null && {
        LabelNameCondition: serializeAws_json1_1LabelNameCondition(input.LabelNameCondition, context),
    }));
};
var serializeAws_json1_1Conditions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Condition(entry, context);
    });
};
var serializeAws_json1_1CountAction = function (input, context) {
    return __assign({}, (input.CustomRequestHandling !== undefined &&
        input.CustomRequestHandling !== null && {
        CustomRequestHandling: serializeAws_json1_1CustomRequestHandling(input.CustomRequestHandling, context),
    }));
};
var serializeAws_json1_1CountryCodes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CreateIPSetRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Addresses !== undefined &&
        input.Addresses !== null && { Addresses: serializeAws_json1_1IPAddresses(input.Addresses, context) })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.IPAddressVersion !== undefined &&
        input.IPAddressVersion !== null && { IPAddressVersion: input.IPAddressVersion })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreateRegexPatternSetRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RegularExpressionList !== undefined &&
        input.RegularExpressionList !== null && {
        RegularExpressionList: serializeAws_json1_1RegularExpressionList(input.RegularExpressionList, context),
    })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreateRuleGroupRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Capacity !== undefined && input.Capacity !== null && { Capacity: input.Capacity })), (input.CustomResponseBodies !== undefined &&
        input.CustomResponseBodies !== null && {
        CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
    })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.VisibilityConfig !== undefined &&
        input.VisibilityConfig !== null && {
        VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
    }));
};
var serializeAws_json1_1CreateWebACLRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CustomResponseBodies !== undefined &&
        input.CustomResponseBodies !== null && {
        CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
    })), (input.DefaultAction !== undefined &&
        input.DefaultAction !== null && {
        DefaultAction: serializeAws_json1_1DefaultAction(input.DefaultAction, context),
    })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.VisibilityConfig !== undefined &&
        input.VisibilityConfig !== null && {
        VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
    }));
};
var serializeAws_json1_1CustomHTTPHeader = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1CustomHTTPHeaders = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CustomHTTPHeader(entry, context);
    });
};
var serializeAws_json1_1CustomRequestHandling = function (input, context) {
    return __assign({}, (input.InsertHeaders !== undefined &&
        input.InsertHeaders !== null && {
        InsertHeaders: serializeAws_json1_1CustomHTTPHeaders(input.InsertHeaders, context),
    }));
};
var serializeAws_json1_1CustomResponse = function (input, context) {
    return __assign(__assign(__assign({}, (input.CustomResponseBodyKey !== undefined &&
        input.CustomResponseBodyKey !== null && { CustomResponseBodyKey: input.CustomResponseBodyKey })), (input.ResponseCode !== undefined && input.ResponseCode !== null && { ResponseCode: input.ResponseCode })), (input.ResponseHeaders !== undefined &&
        input.ResponseHeaders !== null && {
        ResponseHeaders: serializeAws_json1_1CustomHTTPHeaders(input.ResponseHeaders, context),
    }));
};
var serializeAws_json1_1CustomResponseBodies = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1CustomResponseBody(value, context), _b));
    }, {});
};
var serializeAws_json1_1CustomResponseBody = function (input, context) {
    return __assign(__assign({}, (input.Content !== undefined && input.Content !== null && { Content: input.Content })), (input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }));
};
var serializeAws_json1_1DefaultAction = function (input, context) {
    return __assign(__assign({}, (input.Allow !== undefined &&
        input.Allow !== null && { Allow: serializeAws_json1_1AllowAction(input.Allow, context) })), (input.Block !== undefined &&
        input.Block !== null && { Block: serializeAws_json1_1BlockAction(input.Block, context) }));
};
var serializeAws_json1_1DeleteFirewallManagerRuleGroupsRequest = function (input, context) {
    return __assign(__assign({}, (input.WebACLArn !== undefined && input.WebACLArn !== null && { WebACLArn: input.WebACLArn })), (input.WebACLLockToken !== undefined &&
        input.WebACLLockToken !== null && { WebACLLockToken: input.WebACLLockToken }));
};
var serializeAws_json1_1DeleteIPSetRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1DeleteLoggingConfigurationRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1DeletePermissionPolicyRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1DeleteRegexPatternSetRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1DeleteRuleGroupRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1DeleteWebACLRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1DescribeManagedRuleGroupRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope })), (input.VendorName !== undefined && input.VendorName !== null && { VendorName: input.VendorName }));
};
var serializeAws_json1_1DisassociateWebACLRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1ExcludedRule = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1ExcludedRules = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ExcludedRule(entry, context);
    });
};
var serializeAws_json1_1FieldToMatch = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AllQueryArguments !== undefined &&
        input.AllQueryArguments !== null && {
        AllQueryArguments: serializeAws_json1_1AllQueryArguments(input.AllQueryArguments, context),
    })), (input.Body !== undefined && input.Body !== null && { Body: serializeAws_json1_1Body(input.Body, context) })), (input.JsonBody !== undefined &&
        input.JsonBody !== null && { JsonBody: serializeAws_json1_1JsonBody(input.JsonBody, context) })), (input.Method !== undefined &&
        input.Method !== null && { Method: serializeAws_json1_1Method(input.Method, context) })), (input.QueryString !== undefined &&
        input.QueryString !== null && { QueryString: serializeAws_json1_1QueryString(input.QueryString, context) })), (input.SingleHeader !== undefined &&
        input.SingleHeader !== null && { SingleHeader: serializeAws_json1_1SingleHeader(input.SingleHeader, context) })), (input.SingleQueryArgument !== undefined &&
        input.SingleQueryArgument !== null && {
        SingleQueryArgument: serializeAws_json1_1SingleQueryArgument(input.SingleQueryArgument, context),
    })), (input.UriPath !== undefined &&
        input.UriPath !== null && { UriPath: serializeAws_json1_1UriPath(input.UriPath, context) }));
};
var serializeAws_json1_1Filter = function (input, context) {
    return __assign(__assign(__assign({}, (input.Behavior !== undefined && input.Behavior !== null && { Behavior: input.Behavior })), (input.Conditions !== undefined &&
        input.Conditions !== null && { Conditions: serializeAws_json1_1Conditions(input.Conditions, context) })), (input.Requirement !== undefined && input.Requirement !== null && { Requirement: input.Requirement }));
};
var serializeAws_json1_1Filters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Filter(entry, context);
    });
};
var serializeAws_json1_1ForwardedIPConfig = function (input, context) {
    return __assign(__assign({}, (input.FallbackBehavior !== undefined &&
        input.FallbackBehavior !== null && { FallbackBehavior: input.FallbackBehavior })), (input.HeaderName !== undefined && input.HeaderName !== null && { HeaderName: input.HeaderName }));
};
var serializeAws_json1_1GeoMatchStatement = function (input, context) {
    return __assign(__assign({}, (input.CountryCodes !== undefined &&
        input.CountryCodes !== null && { CountryCodes: serializeAws_json1_1CountryCodes(input.CountryCodes, context) })), (input.ForwardedIPConfig !== undefined &&
        input.ForwardedIPConfig !== null && {
        ForwardedIPConfig: serializeAws_json1_1ForwardedIPConfig(input.ForwardedIPConfig, context),
    }));
};
var serializeAws_json1_1GetIPSetRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1GetLoggingConfigurationRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1GetPermissionPolicyRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1GetRateBasedStatementManagedKeysRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope })), (input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId })), (input.WebACLName !== undefined && input.WebACLName !== null && { WebACLName: input.WebACLName }));
};
var serializeAws_json1_1GetRegexPatternSetRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1GetRuleGroupRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1GetSampledRequestsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.MaxItems !== undefined && input.MaxItems !== null && { MaxItems: input.MaxItems })), (input.RuleMetricName !== undefined &&
        input.RuleMetricName !== null && { RuleMetricName: input.RuleMetricName })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope })), (input.TimeWindow !== undefined &&
        input.TimeWindow !== null && { TimeWindow: serializeAws_json1_1TimeWindow(input.TimeWindow, context) })), (input.WebAclArn !== undefined && input.WebAclArn !== null && { WebAclArn: input.WebAclArn }));
};
var serializeAws_json1_1GetWebACLForResourceRequest = function (input, context) {
    return __assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1GetWebACLRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1IPAddresses = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1IPSetForwardedIPConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.FallbackBehavior !== undefined &&
        input.FallbackBehavior !== null && { FallbackBehavior: input.FallbackBehavior })), (input.HeaderName !== undefined && input.HeaderName !== null && { HeaderName: input.HeaderName })), (input.Position !== undefined && input.Position !== null && { Position: input.Position }));
};
var serializeAws_json1_1IPSetReferenceStatement = function (input, context) {
    return __assign(__assign({}, (input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN })), (input.IPSetForwardedIPConfig !== undefined &&
        input.IPSetForwardedIPConfig !== null && {
        IPSetForwardedIPConfig: serializeAws_json1_1IPSetForwardedIPConfig(input.IPSetForwardedIPConfig, context),
    }));
};
var serializeAws_json1_1JsonBody = function (input, context) {
    return __assign(__assign(__assign({}, (input.InvalidFallbackBehavior !== undefined &&
        input.InvalidFallbackBehavior !== null && { InvalidFallbackBehavior: input.InvalidFallbackBehavior })), (input.MatchPattern !== undefined &&
        input.MatchPattern !== null && {
        MatchPattern: serializeAws_json1_1JsonMatchPattern(input.MatchPattern, context),
    })), (input.MatchScope !== undefined && input.MatchScope !== null && { MatchScope: input.MatchScope }));
};
var serializeAws_json1_1JsonMatchPattern = function (input, context) {
    return __assign(__assign({}, (input.All !== undefined && input.All !== null && { All: serializeAws_json1_1All(input.All, context) })), (input.IncludedPaths !== undefined &&
        input.IncludedPaths !== null && {
        IncludedPaths: serializeAws_json1_1JsonPointerPaths(input.IncludedPaths, context),
    }));
};
var serializeAws_json1_1JsonPointerPaths = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Label = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1LabelMatchStatement = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1LabelNameCondition = function (input, context) {
    return __assign({}, (input.LabelName !== undefined && input.LabelName !== null && { LabelName: input.LabelName }));
};
var serializeAws_json1_1Labels = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Label(entry, context);
    });
};
var serializeAws_json1_1ListAvailableManagedRuleGroupsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1ListIPSetsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1ListLoggingConfigurationsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1ListRegexPatternSetsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1ListResourcesForWebACLRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType })), (input.WebACLArn !== undefined && input.WebACLArn !== null && { WebACLArn: input.WebACLArn }));
};
var serializeAws_json1_1ListRuleGroupsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker })), (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }));
};
var serializeAws_json1_1ListWebACLsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1LogDestinationConfigs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1LoggingConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.LogDestinationConfigs !== undefined &&
        input.LogDestinationConfigs !== null && {
        LogDestinationConfigs: serializeAws_json1_1LogDestinationConfigs(input.LogDestinationConfigs, context),
    })), (input.LoggingFilter !== undefined &&
        input.LoggingFilter !== null && {
        LoggingFilter: serializeAws_json1_1LoggingFilter(input.LoggingFilter, context),
    })), (input.ManagedByFirewallManager !== undefined &&
        input.ManagedByFirewallManager !== null && { ManagedByFirewallManager: input.ManagedByFirewallManager })), (input.RedactedFields !== undefined &&
        input.RedactedFields !== null && {
        RedactedFields: serializeAws_json1_1RedactedFields(input.RedactedFields, context),
    })), (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1LoggingFilter = function (input, context) {
    return __assign(__assign({}, (input.DefaultBehavior !== undefined &&
        input.DefaultBehavior !== null && { DefaultBehavior: input.DefaultBehavior })), (input.Filters !== undefined &&
        input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }));
};
var serializeAws_json1_1ManagedRuleGroupStatement = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ExcludedRules !== undefined &&
        input.ExcludedRules !== null && {
        ExcludedRules: serializeAws_json1_1ExcludedRules(input.ExcludedRules, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.ScopeDownStatement !== undefined &&
        input.ScopeDownStatement !== null && {
        ScopeDownStatement: serializeAws_json1_1Statement(input.ScopeDownStatement, context),
    })), (input.VendorName !== undefined && input.VendorName !== null && { VendorName: input.VendorName }));
};
var serializeAws_json1_1Method = function (input, context) {
    return {};
};
var serializeAws_json1_1NoneAction = function (input, context) {
    return {};
};
var serializeAws_json1_1NotStatement = function (input, context) {
    return __assign({}, (input.Statement !== undefined &&
        input.Statement !== null && { Statement: serializeAws_json1_1Statement(input.Statement, context) }));
};
var serializeAws_json1_1OrStatement = function (input, context) {
    return __assign({}, (input.Statements !== undefined &&
        input.Statements !== null && { Statements: serializeAws_json1_1Statements(input.Statements, context) }));
};
var serializeAws_json1_1OverrideAction = function (input, context) {
    return __assign(__assign({}, (input.Count !== undefined &&
        input.Count !== null && { Count: serializeAws_json1_1CountAction(input.Count, context) })), (input.None !== undefined &&
        input.None !== null && { None: serializeAws_json1_1NoneAction(input.None, context) }));
};
var serializeAws_json1_1PutLoggingConfigurationRequest = function (input, context) {
    return __assign({}, (input.LoggingConfiguration !== undefined &&
        input.LoggingConfiguration !== null && {
        LoggingConfiguration: serializeAws_json1_1LoggingConfiguration(input.LoggingConfiguration, context),
    }));
};
var serializeAws_json1_1PutPermissionPolicyRequest = function (input, context) {
    return __assign(__assign({}, (input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy })), (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1QueryString = function (input, context) {
    return {};
};
var serializeAws_json1_1RateBasedStatement = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AggregateKeyType !== undefined &&
        input.AggregateKeyType !== null && { AggregateKeyType: input.AggregateKeyType })), (input.ForwardedIPConfig !== undefined &&
        input.ForwardedIPConfig !== null && {
        ForwardedIPConfig: serializeAws_json1_1ForwardedIPConfig(input.ForwardedIPConfig, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.ScopeDownStatement !== undefined &&
        input.ScopeDownStatement !== null && {
        ScopeDownStatement: serializeAws_json1_1Statement(input.ScopeDownStatement, context),
    }));
};
var serializeAws_json1_1RedactedFields = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1FieldToMatch(entry, context);
    });
};
var serializeAws_json1_1Regex = function (input, context) {
    return __assign({}, (input.RegexString !== undefined && input.RegexString !== null && { RegexString: input.RegexString }));
};
var serializeAws_json1_1RegexPatternSetReferenceStatement = function (input, context) {
    return __assign(__assign(__assign({}, (input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN })), (input.FieldToMatch !== undefined &&
        input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) })), (input.TextTransformations !== undefined &&
        input.TextTransformations !== null && {
        TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
    }));
};
var serializeAws_json1_1RegularExpressionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Regex(entry, context);
    });
};
var serializeAws_json1_1Rule = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Action !== undefined &&
        input.Action !== null && { Action: serializeAws_json1_1RuleAction(input.Action, context) })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.OverrideAction !== undefined &&
        input.OverrideAction !== null && {
        OverrideAction: serializeAws_json1_1OverrideAction(input.OverrideAction, context),
    })), (input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority })), (input.RuleLabels !== undefined &&
        input.RuleLabels !== null && { RuleLabels: serializeAws_json1_1Labels(input.RuleLabels, context) })), (input.Statement !== undefined &&
        input.Statement !== null && { Statement: serializeAws_json1_1Statement(input.Statement, context) })), (input.VisibilityConfig !== undefined &&
        input.VisibilityConfig !== null && {
        VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
    }));
};
var serializeAws_json1_1RuleAction = function (input, context) {
    return __assign(__assign(__assign({}, (input.Allow !== undefined &&
        input.Allow !== null && { Allow: serializeAws_json1_1AllowAction(input.Allow, context) })), (input.Block !== undefined &&
        input.Block !== null && { Block: serializeAws_json1_1BlockAction(input.Block, context) })), (input.Count !== undefined &&
        input.Count !== null && { Count: serializeAws_json1_1CountAction(input.Count, context) }));
};
var serializeAws_json1_1RuleGroupReferenceStatement = function (input, context) {
    return __assign(__assign({}, (input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN })), (input.ExcludedRules !== undefined &&
        input.ExcludedRules !== null && {
        ExcludedRules: serializeAws_json1_1ExcludedRules(input.ExcludedRules, context),
    }));
};
var serializeAws_json1_1Rules = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Rule(entry, context);
    });
};
var serializeAws_json1_1SingleHeader = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1SingleQueryArgument = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1SizeConstraintStatement = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ComparisonOperator !== undefined &&
        input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator })), (input.FieldToMatch !== undefined &&
        input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) })), (input.Size !== undefined && input.Size !== null && { Size: input.Size })), (input.TextTransformations !== undefined &&
        input.TextTransformations !== null && {
        TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
    }));
};
var serializeAws_json1_1SqliMatchStatement = function (input, context) {
    return __assign(__assign({}, (input.FieldToMatch !== undefined &&
        input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) })), (input.TextTransformations !== undefined &&
        input.TextTransformations !== null && {
        TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
    }));
};
var serializeAws_json1_1Statement = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AndStatement !== undefined &&
        input.AndStatement !== null && { AndStatement: serializeAws_json1_1AndStatement(input.AndStatement, context) })), (input.ByteMatchStatement !== undefined &&
        input.ByteMatchStatement !== null && {
        ByteMatchStatement: serializeAws_json1_1ByteMatchStatement(input.ByteMatchStatement, context),
    })), (input.GeoMatchStatement !== undefined &&
        input.GeoMatchStatement !== null && {
        GeoMatchStatement: serializeAws_json1_1GeoMatchStatement(input.GeoMatchStatement, context),
    })), (input.IPSetReferenceStatement !== undefined &&
        input.IPSetReferenceStatement !== null && {
        IPSetReferenceStatement: serializeAws_json1_1IPSetReferenceStatement(input.IPSetReferenceStatement, context),
    })), (input.LabelMatchStatement !== undefined &&
        input.LabelMatchStatement !== null && {
        LabelMatchStatement: serializeAws_json1_1LabelMatchStatement(input.LabelMatchStatement, context),
    })), (input.ManagedRuleGroupStatement !== undefined &&
        input.ManagedRuleGroupStatement !== null && {
        ManagedRuleGroupStatement: serializeAws_json1_1ManagedRuleGroupStatement(input.ManagedRuleGroupStatement, context),
    })), (input.NotStatement !== undefined &&
        input.NotStatement !== null && { NotStatement: serializeAws_json1_1NotStatement(input.NotStatement, context) })), (input.OrStatement !== undefined &&
        input.OrStatement !== null && { OrStatement: serializeAws_json1_1OrStatement(input.OrStatement, context) })), (input.RateBasedStatement !== undefined &&
        input.RateBasedStatement !== null && {
        RateBasedStatement: serializeAws_json1_1RateBasedStatement(input.RateBasedStatement, context),
    })), (input.RegexPatternSetReferenceStatement !== undefined &&
        input.RegexPatternSetReferenceStatement !== null && {
        RegexPatternSetReferenceStatement: serializeAws_json1_1RegexPatternSetReferenceStatement(input.RegexPatternSetReferenceStatement, context),
    })), (input.RuleGroupReferenceStatement !== undefined &&
        input.RuleGroupReferenceStatement !== null && {
        RuleGroupReferenceStatement: serializeAws_json1_1RuleGroupReferenceStatement(input.RuleGroupReferenceStatement, context),
    })), (input.SizeConstraintStatement !== undefined &&
        input.SizeConstraintStatement !== null && {
        SizeConstraintStatement: serializeAws_json1_1SizeConstraintStatement(input.SizeConstraintStatement, context),
    })), (input.SqliMatchStatement !== undefined &&
        input.SqliMatchStatement !== null && {
        SqliMatchStatement: serializeAws_json1_1SqliMatchStatement(input.SqliMatchStatement, context),
    })), (input.XssMatchStatement !== undefined &&
        input.XssMatchStatement !== null && {
        XssMatchStatement: serializeAws_json1_1XssMatchStatement(input.XssMatchStatement, context),
    }));
};
var serializeAws_json1_1Statements = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Statement(entry, context);
    });
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1TagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1TextTransformation = function (input, context) {
    return __assign(__assign({}, (input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1TextTransformations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TextTransformation(entry, context);
    });
};
var serializeAws_json1_1TimeWindow = function (input, context) {
    return __assign(__assign({}, (input.EndTime !== undefined &&
        input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }));
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }));
};
var serializeAws_json1_1UpdateIPSetRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Addresses !== undefined &&
        input.Addresses !== null && { Addresses: serializeAws_json1_1IPAddresses(input.Addresses, context) })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1UpdateRegexPatternSetRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RegularExpressionList !== undefined &&
        input.RegularExpressionList !== null && {
        RegularExpressionList: serializeAws_json1_1RegularExpressionList(input.RegularExpressionList, context),
    })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }));
};
var serializeAws_json1_1UpdateRuleGroupRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CustomResponseBodies !== undefined &&
        input.CustomResponseBodies !== null && {
        CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
    })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope })), (input.VisibilityConfig !== undefined &&
        input.VisibilityConfig !== null && {
        VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
    }));
};
var serializeAws_json1_1UpdateWebACLRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CustomResponseBodies !== undefined &&
        input.CustomResponseBodies !== null && {
        CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
    })), (input.DefaultAction !== undefined &&
        input.DefaultAction !== null && {
        DefaultAction: serializeAws_json1_1DefaultAction(input.DefaultAction, context),
    })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) })), (input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope })), (input.VisibilityConfig !== undefined &&
        input.VisibilityConfig !== null && {
        VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
    }));
};
var serializeAws_json1_1UriPath = function (input, context) {
    return {};
};
var serializeAws_json1_1VisibilityConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.CloudWatchMetricsEnabled !== undefined &&
        input.CloudWatchMetricsEnabled !== null && { CloudWatchMetricsEnabled: input.CloudWatchMetricsEnabled })), (input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName })), (input.SampledRequestsEnabled !== undefined &&
        input.SampledRequestsEnabled !== null && { SampledRequestsEnabled: input.SampledRequestsEnabled }));
};
var serializeAws_json1_1XssMatchStatement = function (input, context) {
    return __assign(__assign({}, (input.FieldToMatch !== undefined &&
        input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) })), (input.TextTransformations !== undefined &&
        input.TextTransformations !== null && {
        TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
    }));
};
var deserializeAws_json1_1ActionCondition = function (output, context) {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
    };
};
var deserializeAws_json1_1All = function (output, context) {
    return {};
};
var deserializeAws_json1_1AllowAction = function (output, context) {
    return {
        CustomRequestHandling: output.CustomRequestHandling !== undefined && output.CustomRequestHandling !== null
            ? deserializeAws_json1_1CustomRequestHandling(output.CustomRequestHandling, context)
            : undefined,
    };
};
var deserializeAws_json1_1AllQueryArguments = function (output, context) {
    return {};
};
var deserializeAws_json1_1AndStatement = function (output, context) {
    return {
        Statements: output.Statements !== undefined && output.Statements !== null
            ? deserializeAws_json1_1Statements(output.Statements, context)
            : undefined,
    };
};
var deserializeAws_json1_1AssociateWebACLResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1BlockAction = function (output, context) {
    return {
        CustomResponse: output.CustomResponse !== undefined && output.CustomResponse !== null
            ? deserializeAws_json1_1CustomResponse(output.CustomResponse, context)
            : undefined,
    };
};
var deserializeAws_json1_1Body = function (output, context) {
    return {};
};
var deserializeAws_json1_1ByteMatchStatement = function (output, context) {
    return {
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        PositionalConstraint: output.PositionalConstraint !== undefined && output.PositionalConstraint !== null
            ? output.PositionalConstraint
            : undefined,
        SearchString: output.SearchString !== undefined && output.SearchString !== null
            ? context.base64Decoder(output.SearchString)
            : undefined,
        TextTransformations: output.TextTransformations !== undefined && output.TextTransformations !== null
            ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
            : undefined,
    };
};
var deserializeAws_json1_1CheckCapacityResponse = function (output, context) {
    return {
        Capacity: output.Capacity !== undefined && output.Capacity !== null ? output.Capacity : undefined,
    };
};
var deserializeAws_json1_1Condition = function (output, context) {
    return {
        ActionCondition: output.ActionCondition !== undefined && output.ActionCondition !== null
            ? deserializeAws_json1_1ActionCondition(output.ActionCondition, context)
            : undefined,
        LabelNameCondition: output.LabelNameCondition !== undefined && output.LabelNameCondition !== null
            ? deserializeAws_json1_1LabelNameCondition(output.LabelNameCondition, context)
            : undefined,
    };
};
var deserializeAws_json1_1Conditions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Condition(entry, context);
    });
};
var deserializeAws_json1_1CountAction = function (output, context) {
    return {
        CustomRequestHandling: output.CustomRequestHandling !== undefined && output.CustomRequestHandling !== null
            ? deserializeAws_json1_1CustomRequestHandling(output.CustomRequestHandling, context)
            : undefined,
    };
};
var deserializeAws_json1_1CountryCodes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1CreateIPSetResponse = function (output, context) {
    return {
        Summary: output.Summary !== undefined && output.Summary !== null
            ? deserializeAws_json1_1IPSetSummary(output.Summary, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateRegexPatternSetResponse = function (output, context) {
    return {
        Summary: output.Summary !== undefined && output.Summary !== null
            ? deserializeAws_json1_1RegexPatternSetSummary(output.Summary, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateRuleGroupResponse = function (output, context) {
    return {
        Summary: output.Summary !== undefined && output.Summary !== null
            ? deserializeAws_json1_1RuleGroupSummary(output.Summary, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateWebACLResponse = function (output, context) {
    return {
        Summary: output.Summary !== undefined && output.Summary !== null
            ? deserializeAws_json1_1WebACLSummary(output.Summary, context)
            : undefined,
    };
};
var deserializeAws_json1_1CustomHTTPHeader = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1CustomHTTPHeaders = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomHTTPHeader(entry, context);
    });
};
var deserializeAws_json1_1CustomRequestHandling = function (output, context) {
    return {
        InsertHeaders: output.InsertHeaders !== undefined && output.InsertHeaders !== null
            ? deserializeAws_json1_1CustomHTTPHeaders(output.InsertHeaders, context)
            : undefined,
    };
};
var deserializeAws_json1_1CustomResponse = function (output, context) {
    return {
        CustomResponseBodyKey: output.CustomResponseBodyKey !== undefined && output.CustomResponseBodyKey !== null
            ? output.CustomResponseBodyKey
            : undefined,
        ResponseCode: output.ResponseCode !== undefined && output.ResponseCode !== null ? output.ResponseCode : undefined,
        ResponseHeaders: output.ResponseHeaders !== undefined && output.ResponseHeaders !== null
            ? deserializeAws_json1_1CustomHTTPHeaders(output.ResponseHeaders, context)
            : undefined,
    };
};
var deserializeAws_json1_1CustomResponseBodies = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_1CustomResponseBody(value, context), _b));
    }, {});
};
var deserializeAws_json1_1CustomResponseBody = function (output, context) {
    return {
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
    };
};
var deserializeAws_json1_1DefaultAction = function (output, context) {
    return {
        Allow: output.Allow !== undefined && output.Allow !== null
            ? deserializeAws_json1_1AllowAction(output.Allow, context)
            : undefined,
        Block: output.Block !== undefined && output.Block !== null
            ? deserializeAws_json1_1BlockAction(output.Block, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteFirewallManagerRuleGroupsResponse = function (output, context) {
    return {
        NextWebACLLockToken: output.NextWebACLLockToken !== undefined && output.NextWebACLLockToken !== null
            ? output.NextWebACLLockToken
            : undefined,
    };
};
var deserializeAws_json1_1DeleteIPSetResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteLoggingConfigurationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeletePermissionPolicyResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteRegexPatternSetResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteRuleGroupResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteWebACLResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DescribeManagedRuleGroupResponse = function (output, context) {
    return {
        AvailableLabels: output.AvailableLabels !== undefined && output.AvailableLabels !== null
            ? deserializeAws_json1_1LabelSummaries(output.AvailableLabels, context)
            : undefined,
        Capacity: output.Capacity !== undefined && output.Capacity !== null ? output.Capacity : undefined,
        ConsumedLabels: output.ConsumedLabels !== undefined && output.ConsumedLabels !== null
            ? deserializeAws_json1_1LabelSummaries(output.ConsumedLabels, context)
            : undefined,
        LabelNamespace: output.LabelNamespace !== undefined && output.LabelNamespace !== null ? output.LabelNamespace : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1RuleSummaries(output.Rules, context)
            : undefined,
    };
};
var deserializeAws_json1_1DisassociateWebACLResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ExcludedRule = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1ExcludedRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExcludedRule(entry, context);
    });
};
var deserializeAws_json1_1FieldToMatch = function (output, context) {
    return {
        AllQueryArguments: output.AllQueryArguments !== undefined && output.AllQueryArguments !== null
            ? deserializeAws_json1_1AllQueryArguments(output.AllQueryArguments, context)
            : undefined,
        Body: output.Body !== undefined && output.Body !== null ? deserializeAws_json1_1Body(output.Body, context) : undefined,
        JsonBody: output.JsonBody !== undefined && output.JsonBody !== null
            ? deserializeAws_json1_1JsonBody(output.JsonBody, context)
            : undefined,
        Method: output.Method !== undefined && output.Method !== null
            ? deserializeAws_json1_1Method(output.Method, context)
            : undefined,
        QueryString: output.QueryString !== undefined && output.QueryString !== null
            ? deserializeAws_json1_1QueryString(output.QueryString, context)
            : undefined,
        SingleHeader: output.SingleHeader !== undefined && output.SingleHeader !== null
            ? deserializeAws_json1_1SingleHeader(output.SingleHeader, context)
            : undefined,
        SingleQueryArgument: output.SingleQueryArgument !== undefined && output.SingleQueryArgument !== null
            ? deserializeAws_json1_1SingleQueryArgument(output.SingleQueryArgument, context)
            : undefined,
        UriPath: output.UriPath !== undefined && output.UriPath !== null
            ? deserializeAws_json1_1UriPath(output.UriPath, context)
            : undefined,
    };
};
var deserializeAws_json1_1Filter = function (output, context) {
    return {
        Behavior: output.Behavior !== undefined && output.Behavior !== null ? output.Behavior : undefined,
        Conditions: output.Conditions !== undefined && output.Conditions !== null
            ? deserializeAws_json1_1Conditions(output.Conditions, context)
            : undefined,
        Requirement: output.Requirement !== undefined && output.Requirement !== null ? output.Requirement : undefined,
    };
};
var deserializeAws_json1_1Filters = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Filter(entry, context);
    });
};
var deserializeAws_json1_1FirewallManagerRuleGroup = function (output, context) {
    return {
        FirewallManagerStatement: output.FirewallManagerStatement !== undefined && output.FirewallManagerStatement !== null
            ? deserializeAws_json1_1FirewallManagerStatement(output.FirewallManagerStatement, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OverrideAction: output.OverrideAction !== undefined && output.OverrideAction !== null
            ? deserializeAws_json1_1OverrideAction(output.OverrideAction, context)
            : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        VisibilityConfig: output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
            ? deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1FirewallManagerRuleGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FirewallManagerRuleGroup(entry, context);
    });
};
var deserializeAws_json1_1FirewallManagerStatement = function (output, context) {
    return {
        ManagedRuleGroupStatement: output.ManagedRuleGroupStatement !== undefined && output.ManagedRuleGroupStatement !== null
            ? deserializeAws_json1_1ManagedRuleGroupStatement(output.ManagedRuleGroupStatement, context)
            : undefined,
        RuleGroupReferenceStatement: output.RuleGroupReferenceStatement !== undefined && output.RuleGroupReferenceStatement !== null
            ? deserializeAws_json1_1RuleGroupReferenceStatement(output.RuleGroupReferenceStatement, context)
            : undefined,
    };
};
var deserializeAws_json1_1ForwardedIPConfig = function (output, context) {
    return {
        FallbackBehavior: output.FallbackBehavior !== undefined && output.FallbackBehavior !== null ? output.FallbackBehavior : undefined,
        HeaderName: output.HeaderName !== undefined && output.HeaderName !== null ? output.HeaderName : undefined,
    };
};
var deserializeAws_json1_1GeoMatchStatement = function (output, context) {
    return {
        CountryCodes: output.CountryCodes !== undefined && output.CountryCodes !== null
            ? deserializeAws_json1_1CountryCodes(output.CountryCodes, context)
            : undefined,
        ForwardedIPConfig: output.ForwardedIPConfig !== undefined && output.ForwardedIPConfig !== null
            ? deserializeAws_json1_1ForwardedIPConfig(output.ForwardedIPConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetIPSetResponse = function (output, context) {
    return {
        IPSet: output.IPSet !== undefined && output.IPSet !== null
            ? deserializeAws_json1_1IPSet(output.IPSet, context)
            : undefined,
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
    };
};
var deserializeAws_json1_1GetLoggingConfigurationResponse = function (output, context) {
    return {
        LoggingConfiguration: output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
            ? deserializeAws_json1_1LoggingConfiguration(output.LoggingConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetPermissionPolicyResponse = function (output, context) {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
var deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse = function (output, context) {
    return {
        ManagedKeysIPV4: output.ManagedKeysIPV4 !== undefined && output.ManagedKeysIPV4 !== null
            ? deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(output.ManagedKeysIPV4, context)
            : undefined,
        ManagedKeysIPV6: output.ManagedKeysIPV6 !== undefined && output.ManagedKeysIPV6 !== null
            ? deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(output.ManagedKeysIPV6, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetRegexPatternSetResponse = function (output, context) {
    return {
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        RegexPatternSet: output.RegexPatternSet !== undefined && output.RegexPatternSet !== null
            ? deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetRuleGroupResponse = function (output, context) {
    return {
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        RuleGroup: output.RuleGroup !== undefined && output.RuleGroup !== null
            ? deserializeAws_json1_1RuleGroup(output.RuleGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetSampledRequestsResponse = function (output, context) {
    return {
        PopulationSize: output.PopulationSize !== undefined && output.PopulationSize !== null ? output.PopulationSize : undefined,
        SampledRequests: output.SampledRequests !== undefined && output.SampledRequests !== null
            ? deserializeAws_json1_1SampledHTTPRequests(output.SampledRequests, context)
            : undefined,
        TimeWindow: output.TimeWindow !== undefined && output.TimeWindow !== null
            ? deserializeAws_json1_1TimeWindow(output.TimeWindow, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetWebACLForResourceResponse = function (output, context) {
    return {
        WebACL: output.WebACL !== undefined && output.WebACL !== null
            ? deserializeAws_json1_1WebACL(output.WebACL, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetWebACLResponse = function (output, context) {
    return {
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        WebACL: output.WebACL !== undefined && output.WebACL !== null
            ? deserializeAws_json1_1WebACL(output.WebACL, context)
            : undefined,
    };
};
var deserializeAws_json1_1HTTPHeader = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1HTTPHeaders = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HTTPHeader(entry, context);
    });
};
var deserializeAws_json1_1HTTPRequest = function (output, context) {
    return {
        ClientIP: output.ClientIP !== undefined && output.ClientIP !== null ? output.ClientIP : undefined,
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        HTTPVersion: output.HTTPVersion !== undefined && output.HTTPVersion !== null ? output.HTTPVersion : undefined,
        Headers: output.Headers !== undefined && output.Headers !== null
            ? deserializeAws_json1_1HTTPHeaders(output.Headers, context)
            : undefined,
        Method: output.Method !== undefined && output.Method !== null ? output.Method : undefined,
        URI: output.URI !== undefined && output.URI !== null ? output.URI : undefined,
    };
};
var deserializeAws_json1_1IPAddresses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1IPSet = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Addresses: output.Addresses !== undefined && output.Addresses !== null
            ? deserializeAws_json1_1IPAddresses(output.Addresses, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IPAddressVersion: output.IPAddressVersion !== undefined && output.IPAddressVersion !== null ? output.IPAddressVersion : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1IPSetForwardedIPConfig = function (output, context) {
    return {
        FallbackBehavior: output.FallbackBehavior !== undefined && output.FallbackBehavior !== null ? output.FallbackBehavior : undefined,
        HeaderName: output.HeaderName !== undefined && output.HeaderName !== null ? output.HeaderName : undefined,
        Position: output.Position !== undefined && output.Position !== null ? output.Position : undefined,
    };
};
var deserializeAws_json1_1IPSetReferenceStatement = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        IPSetForwardedIPConfig: output.IPSetForwardedIPConfig !== undefined && output.IPSetForwardedIPConfig !== null
            ? deserializeAws_json1_1IPSetForwardedIPConfig(output.IPSetForwardedIPConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1IPSetSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IPSetSummary(entry, context);
    });
};
var deserializeAws_json1_1IPSetSummary = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1JsonBody = function (output, context) {
    return {
        InvalidFallbackBehavior: output.InvalidFallbackBehavior !== undefined && output.InvalidFallbackBehavior !== null
            ? output.InvalidFallbackBehavior
            : undefined,
        MatchPattern: output.MatchPattern !== undefined && output.MatchPattern !== null
            ? deserializeAws_json1_1JsonMatchPattern(output.MatchPattern, context)
            : undefined,
        MatchScope: output.MatchScope !== undefined && output.MatchScope !== null ? output.MatchScope : undefined,
    };
};
var deserializeAws_json1_1JsonMatchPattern = function (output, context) {
    return {
        All: output.All !== undefined && output.All !== null ? deserializeAws_json1_1All(output.All, context) : undefined,
        IncludedPaths: output.IncludedPaths !== undefined && output.IncludedPaths !== null
            ? deserializeAws_json1_1JsonPointerPaths(output.IncludedPaths, context)
            : undefined,
    };
};
var deserializeAws_json1_1JsonPointerPaths = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Label = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1LabelMatchStatement = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Scope: output.Scope !== undefined && output.Scope !== null ? output.Scope : undefined,
    };
};
var deserializeAws_json1_1LabelNameCondition = function (output, context) {
    return {
        LabelName: output.LabelName !== undefined && output.LabelName !== null ? output.LabelName : undefined,
    };
};
var deserializeAws_json1_1Labels = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Label(entry, context);
    });
};
var deserializeAws_json1_1LabelSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LabelSummary(entry, context);
    });
};
var deserializeAws_json1_1LabelSummary = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse = function (output, context) {
    return {
        ManagedRuleGroups: output.ManagedRuleGroups !== undefined && output.ManagedRuleGroups !== null
            ? deserializeAws_json1_1ManagedRuleGroupSummaries(output.ManagedRuleGroups, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
var deserializeAws_json1_1ListIPSetsResponse = function (output, context) {
    return {
        IPSets: output.IPSets !== undefined && output.IPSets !== null
            ? deserializeAws_json1_1IPSetSummaries(output.IPSets, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
var deserializeAws_json1_1ListLoggingConfigurationsResponse = function (output, context) {
    return {
        LoggingConfigurations: output.LoggingConfigurations !== undefined && output.LoggingConfigurations !== null
            ? deserializeAws_json1_1LoggingConfigurations(output.LoggingConfigurations, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
var deserializeAws_json1_1ListRegexPatternSetsResponse = function (output, context) {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        RegexPatternSets: output.RegexPatternSets !== undefined && output.RegexPatternSets !== null
            ? deserializeAws_json1_1RegexPatternSetSummaries(output.RegexPatternSets, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListResourcesForWebACLResponse = function (output, context) {
    return {
        ResourceArns: output.ResourceArns !== undefined && output.ResourceArns !== null
            ? deserializeAws_json1_1ResourceArns(output.ResourceArns, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListRuleGroupsResponse = function (output, context) {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        RuleGroups: output.RuleGroups !== undefined && output.RuleGroups !== null
            ? deserializeAws_json1_1RuleGroupSummaries(output.RuleGroups, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        TagInfoForResource: output.TagInfoForResource !== undefined && output.TagInfoForResource !== null
            ? deserializeAws_json1_1TagInfoForResource(output.TagInfoForResource, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListWebACLsResponse = function (output, context) {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        WebACLs: output.WebACLs !== undefined && output.WebACLs !== null
            ? deserializeAws_json1_1WebACLSummaries(output.WebACLs, context)
            : undefined,
    };
};
var deserializeAws_json1_1LogDestinationConfigs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1LoggingConfiguration = function (output, context) {
    return {
        LogDestinationConfigs: output.LogDestinationConfigs !== undefined && output.LogDestinationConfigs !== null
            ? deserializeAws_json1_1LogDestinationConfigs(output.LogDestinationConfigs, context)
            : undefined,
        LoggingFilter: output.LoggingFilter !== undefined && output.LoggingFilter !== null
            ? deserializeAws_json1_1LoggingFilter(output.LoggingFilter, context)
            : undefined,
        ManagedByFirewallManager: output.ManagedByFirewallManager !== undefined && output.ManagedByFirewallManager !== null
            ? output.ManagedByFirewallManager
            : undefined,
        RedactedFields: output.RedactedFields !== undefined && output.RedactedFields !== null
            ? deserializeAws_json1_1RedactedFields(output.RedactedFields, context)
            : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
var deserializeAws_json1_1LoggingConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LoggingConfiguration(entry, context);
    });
};
var deserializeAws_json1_1LoggingFilter = function (output, context) {
    return {
        DefaultBehavior: output.DefaultBehavior !== undefined && output.DefaultBehavior !== null ? output.DefaultBehavior : undefined,
        Filters: output.Filters !== undefined && output.Filters !== null
            ? deserializeAws_json1_1Filters(output.Filters, context)
            : undefined,
    };
};
var deserializeAws_json1_1ManagedRuleGroupStatement = function (output, context) {
    return {
        ExcludedRules: output.ExcludedRules !== undefined && output.ExcludedRules !== null
            ? deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScopeDownStatement: output.ScopeDownStatement !== undefined && output.ScopeDownStatement !== null
            ? deserializeAws_json1_1Statement(output.ScopeDownStatement, context)
            : undefined,
        VendorName: output.VendorName !== undefined && output.VendorName !== null ? output.VendorName : undefined,
    };
};
var deserializeAws_json1_1ManagedRuleGroupSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ManagedRuleGroupSummary(entry, context);
    });
};
var deserializeAws_json1_1ManagedRuleGroupSummary = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        VendorName: output.VendorName !== undefined && output.VendorName !== null ? output.VendorName : undefined,
    };
};
var deserializeAws_json1_1Method = function (output, context) {
    return {};
};
var deserializeAws_json1_1NoneAction = function (output, context) {
    return {};
};
var deserializeAws_json1_1NotStatement = function (output, context) {
    return {
        Statement: output.Statement !== undefined && output.Statement !== null
            ? deserializeAws_json1_1Statement(output.Statement, context)
            : undefined,
    };
};
var deserializeAws_json1_1OrStatement = function (output, context) {
    return {
        Statements: output.Statements !== undefined && output.Statements !== null
            ? deserializeAws_json1_1Statements(output.Statements, context)
            : undefined,
    };
};
var deserializeAws_json1_1OverrideAction = function (output, context) {
    return {
        Count: output.Count !== undefined && output.Count !== null
            ? deserializeAws_json1_1CountAction(output.Count, context)
            : undefined,
        None: output.None !== undefined && output.None !== null
            ? deserializeAws_json1_1NoneAction(output.None, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutLoggingConfigurationResponse = function (output, context) {
    return {
        LoggingConfiguration: output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
            ? deserializeAws_json1_1LoggingConfiguration(output.LoggingConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutPermissionPolicyResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1QueryString = function (output, context) {
    return {};
};
var deserializeAws_json1_1RateBasedStatement = function (output, context) {
    return {
        AggregateKeyType: output.AggregateKeyType !== undefined && output.AggregateKeyType !== null ? output.AggregateKeyType : undefined,
        ForwardedIPConfig: output.ForwardedIPConfig !== undefined && output.ForwardedIPConfig !== null
            ? deserializeAws_json1_1ForwardedIPConfig(output.ForwardedIPConfig, context)
            : undefined,
        Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
        ScopeDownStatement: output.ScopeDownStatement !== undefined && output.ScopeDownStatement !== null
            ? deserializeAws_json1_1Statement(output.ScopeDownStatement, context)
            : undefined,
    };
};
var deserializeAws_json1_1RateBasedStatementManagedKeysIPSet = function (output, context) {
    return {
        Addresses: output.Addresses !== undefined && output.Addresses !== null
            ? deserializeAws_json1_1IPAddresses(output.Addresses, context)
            : undefined,
        IPAddressVersion: output.IPAddressVersion !== undefined && output.IPAddressVersion !== null ? output.IPAddressVersion : undefined,
    };
};
var deserializeAws_json1_1RedactedFields = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FieldToMatch(entry, context);
    });
};
var deserializeAws_json1_1Regex = function (output, context) {
    return {
        RegexString: output.RegexString !== undefined && output.RegexString !== null ? output.RegexString : undefined,
    };
};
var deserializeAws_json1_1RegexPatternSet = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RegularExpressionList: output.RegularExpressionList !== undefined && output.RegularExpressionList !== null
            ? deserializeAws_json1_1RegularExpressionList(output.RegularExpressionList, context)
            : undefined,
    };
};
var deserializeAws_json1_1RegexPatternSetReferenceStatement = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        TextTransformations: output.TextTransformations !== undefined && output.TextTransformations !== null
            ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
            : undefined,
    };
};
var deserializeAws_json1_1RegexPatternSetSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RegexPatternSetSummary(entry, context);
    });
};
var deserializeAws_json1_1RegexPatternSetSummary = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1RegularExpressionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Regex(entry, context);
    });
};
var deserializeAws_json1_1ResourceArns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Rule = function (output, context) {
    return {
        Action: output.Action !== undefined && output.Action !== null
            ? deserializeAws_json1_1RuleAction(output.Action, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OverrideAction: output.OverrideAction !== undefined && output.OverrideAction !== null
            ? deserializeAws_json1_1OverrideAction(output.OverrideAction, context)
            : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        RuleLabels: output.RuleLabels !== undefined && output.RuleLabels !== null
            ? deserializeAws_json1_1Labels(output.RuleLabels, context)
            : undefined,
        Statement: output.Statement !== undefined && output.Statement !== null
            ? deserializeAws_json1_1Statement(output.Statement, context)
            : undefined,
        VisibilityConfig: output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
            ? deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1RuleAction = function (output, context) {
    return {
        Allow: output.Allow !== undefined && output.Allow !== null
            ? deserializeAws_json1_1AllowAction(output.Allow, context)
            : undefined,
        Block: output.Block !== undefined && output.Block !== null
            ? deserializeAws_json1_1BlockAction(output.Block, context)
            : undefined,
        Count: output.Count !== undefined && output.Count !== null
            ? deserializeAws_json1_1CountAction(output.Count, context)
            : undefined,
    };
};
var deserializeAws_json1_1RuleGroup = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        AvailableLabels: output.AvailableLabels !== undefined && output.AvailableLabels !== null
            ? deserializeAws_json1_1LabelSummaries(output.AvailableLabels, context)
            : undefined,
        Capacity: output.Capacity !== undefined && output.Capacity !== null ? output.Capacity : undefined,
        ConsumedLabels: output.ConsumedLabels !== undefined && output.ConsumedLabels !== null
            ? deserializeAws_json1_1LabelSummaries(output.ConsumedLabels, context)
            : undefined,
        CustomResponseBodies: output.CustomResponseBodies !== undefined && output.CustomResponseBodies !== null
            ? deserializeAws_json1_1CustomResponseBodies(output.CustomResponseBodies, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LabelNamespace: output.LabelNamespace !== undefined && output.LabelNamespace !== null ? output.LabelNamespace : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1Rules(output.Rules, context)
            : undefined,
        VisibilityConfig: output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
            ? deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1RuleGroupReferenceStatement = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        ExcludedRules: output.ExcludedRules !== undefined && output.ExcludedRules !== null
            ? deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context)
            : undefined,
    };
};
var deserializeAws_json1_1RuleGroupSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RuleGroupSummary(entry, context);
    });
};
var deserializeAws_json1_1RuleGroupSummary = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1Rules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Rule(entry, context);
    });
};
var deserializeAws_json1_1RuleSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RuleSummary(entry, context);
    });
};
var deserializeAws_json1_1RuleSummary = function (output, context) {
    return {
        Action: output.Action !== undefined && output.Action !== null
            ? deserializeAws_json1_1RuleAction(output.Action, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1SampledHTTPRequest = function (output, context) {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        Labels: output.Labels !== undefined && output.Labels !== null
            ? deserializeAws_json1_1Labels(output.Labels, context)
            : undefined,
        Request: output.Request !== undefined && output.Request !== null
            ? deserializeAws_json1_1HTTPRequest(output.Request, context)
            : undefined,
        RequestHeadersInserted: output.RequestHeadersInserted !== undefined && output.RequestHeadersInserted !== null
            ? deserializeAws_json1_1HTTPHeaders(output.RequestHeadersInserted, context)
            : undefined,
        ResponseCodeSent: output.ResponseCodeSent !== undefined && output.ResponseCodeSent !== null ? output.ResponseCodeSent : undefined,
        RuleNameWithinRuleGroup: output.RuleNameWithinRuleGroup !== undefined && output.RuleNameWithinRuleGroup !== null
            ? output.RuleNameWithinRuleGroup
            : undefined,
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null
            ? new Date(Math.round(output.Timestamp * 1000))
            : undefined,
        Weight: output.Weight !== undefined && output.Weight !== null ? output.Weight : undefined,
    };
};
var deserializeAws_json1_1SampledHTTPRequests = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SampledHTTPRequest(entry, context);
    });
};
var deserializeAws_json1_1SingleHeader = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1SingleQueryArgument = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1SizeConstraintStatement = function (output, context) {
    return {
        ComparisonOperator: output.ComparisonOperator !== undefined && output.ComparisonOperator !== null
            ? output.ComparisonOperator
            : undefined,
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
        TextTransformations: output.TextTransformations !== undefined && output.TextTransformations !== null
            ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
            : undefined,
    };
};
var deserializeAws_json1_1SqliMatchStatement = function (output, context) {
    return {
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        TextTransformations: output.TextTransformations !== undefined && output.TextTransformations !== null
            ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
            : undefined,
    };
};
var deserializeAws_json1_1Statement = function (output, context) {
    return {
        AndStatement: output.AndStatement !== undefined && output.AndStatement !== null
            ? deserializeAws_json1_1AndStatement(output.AndStatement, context)
            : undefined,
        ByteMatchStatement: output.ByteMatchStatement !== undefined && output.ByteMatchStatement !== null
            ? deserializeAws_json1_1ByteMatchStatement(output.ByteMatchStatement, context)
            : undefined,
        GeoMatchStatement: output.GeoMatchStatement !== undefined && output.GeoMatchStatement !== null
            ? deserializeAws_json1_1GeoMatchStatement(output.GeoMatchStatement, context)
            : undefined,
        IPSetReferenceStatement: output.IPSetReferenceStatement !== undefined && output.IPSetReferenceStatement !== null
            ? deserializeAws_json1_1IPSetReferenceStatement(output.IPSetReferenceStatement, context)
            : undefined,
        LabelMatchStatement: output.LabelMatchStatement !== undefined && output.LabelMatchStatement !== null
            ? deserializeAws_json1_1LabelMatchStatement(output.LabelMatchStatement, context)
            : undefined,
        ManagedRuleGroupStatement: output.ManagedRuleGroupStatement !== undefined && output.ManagedRuleGroupStatement !== null
            ? deserializeAws_json1_1ManagedRuleGroupStatement(output.ManagedRuleGroupStatement, context)
            : undefined,
        NotStatement: output.NotStatement !== undefined && output.NotStatement !== null
            ? deserializeAws_json1_1NotStatement(output.NotStatement, context)
            : undefined,
        OrStatement: output.OrStatement !== undefined && output.OrStatement !== null
            ? deserializeAws_json1_1OrStatement(output.OrStatement, context)
            : undefined,
        RateBasedStatement: output.RateBasedStatement !== undefined && output.RateBasedStatement !== null
            ? deserializeAws_json1_1RateBasedStatement(output.RateBasedStatement, context)
            : undefined,
        RegexPatternSetReferenceStatement: output.RegexPatternSetReferenceStatement !== undefined && output.RegexPatternSetReferenceStatement !== null
            ? deserializeAws_json1_1RegexPatternSetReferenceStatement(output.RegexPatternSetReferenceStatement, context)
            : undefined,
        RuleGroupReferenceStatement: output.RuleGroupReferenceStatement !== undefined && output.RuleGroupReferenceStatement !== null
            ? deserializeAws_json1_1RuleGroupReferenceStatement(output.RuleGroupReferenceStatement, context)
            : undefined,
        SizeConstraintStatement: output.SizeConstraintStatement !== undefined && output.SizeConstraintStatement !== null
            ? deserializeAws_json1_1SizeConstraintStatement(output.SizeConstraintStatement, context)
            : undefined,
        SqliMatchStatement: output.SqliMatchStatement !== undefined && output.SqliMatchStatement !== null
            ? deserializeAws_json1_1SqliMatchStatement(output.SqliMatchStatement, context)
            : undefined,
        XssMatchStatement: output.XssMatchStatement !== undefined && output.XssMatchStatement !== null
            ? deserializeAws_json1_1XssMatchStatement(output.XssMatchStatement, context)
            : undefined,
    };
};
var deserializeAws_json1_1Statements = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Statement(entry, context);
    });
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1TagInfoForResource = function (output, context) {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        TagList: output.TagList !== undefined && output.TagList !== null
            ? deserializeAws_json1_1TagList(output.TagList, context)
            : undefined,
    };
};
var deserializeAws_json1_1TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1TextTransformation = function (output, context) {
    return {
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1TextTransformations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TextTransformation(entry, context);
    });
};
var deserializeAws_json1_1TimeWindow = function (output, context) {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateIPSetResponse = function (output, context) {
    return {
        NextLockToken: output.NextLockToken !== undefined && output.NextLockToken !== null ? output.NextLockToken : undefined,
    };
};
var deserializeAws_json1_1UpdateRegexPatternSetResponse = function (output, context) {
    return {
        NextLockToken: output.NextLockToken !== undefined && output.NextLockToken !== null ? output.NextLockToken : undefined,
    };
};
var deserializeAws_json1_1UpdateRuleGroupResponse = function (output, context) {
    return {
        NextLockToken: output.NextLockToken !== undefined && output.NextLockToken !== null ? output.NextLockToken : undefined,
    };
};
var deserializeAws_json1_1UpdateWebACLResponse = function (output, context) {
    return {
        NextLockToken: output.NextLockToken !== undefined && output.NextLockToken !== null ? output.NextLockToken : undefined,
    };
};
var deserializeAws_json1_1UriPath = function (output, context) {
    return {};
};
var deserializeAws_json1_1VisibilityConfig = function (output, context) {
    return {
        CloudWatchMetricsEnabled: output.CloudWatchMetricsEnabled !== undefined && output.CloudWatchMetricsEnabled !== null
            ? output.CloudWatchMetricsEnabled
            : undefined,
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        SampledRequestsEnabled: output.SampledRequestsEnabled !== undefined && output.SampledRequestsEnabled !== null
            ? output.SampledRequestsEnabled
            : undefined,
    };
};
var deserializeAws_json1_1WAFAssociatedItemException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFDuplicateItemException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFInternalErrorException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFInvalidOperationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFInvalidParameterException = function (output, context) {
    return {
        Field: output.Field !== undefined && output.Field !== null ? output.Field : undefined,
        Parameter: output.Parameter !== undefined && output.Parameter !== null ? output.Parameter : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1WAFInvalidPermissionPolicyException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFInvalidResourceException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFLimitsExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFNonexistentItemException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFOptimisticLockException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFServiceLinkedRoleErrorException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1WAFSubscriptionNotFoundException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFTagOperationException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFTagOperationInternalErrorException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WAFUnavailableEntityException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1WebACL = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Capacity: output.Capacity !== undefined && output.Capacity !== null ? output.Capacity : undefined,
        CustomResponseBodies: output.CustomResponseBodies !== undefined && output.CustomResponseBodies !== null
            ? deserializeAws_json1_1CustomResponseBodies(output.CustomResponseBodies, context)
            : undefined,
        DefaultAction: output.DefaultAction !== undefined && output.DefaultAction !== null
            ? deserializeAws_json1_1DefaultAction(output.DefaultAction, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LabelNamespace: output.LabelNamespace !== undefined && output.LabelNamespace !== null ? output.LabelNamespace : undefined,
        ManagedByFirewallManager: output.ManagedByFirewallManager !== undefined && output.ManagedByFirewallManager !== null
            ? output.ManagedByFirewallManager
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PostProcessFirewallManagerRuleGroups: output.PostProcessFirewallManagerRuleGroups !== undefined && output.PostProcessFirewallManagerRuleGroups !== null
            ? deserializeAws_json1_1FirewallManagerRuleGroups(output.PostProcessFirewallManagerRuleGroups, context)
            : undefined,
        PreProcessFirewallManagerRuleGroups: output.PreProcessFirewallManagerRuleGroups !== undefined && output.PreProcessFirewallManagerRuleGroups !== null
            ? deserializeAws_json1_1FirewallManagerRuleGroups(output.PreProcessFirewallManagerRuleGroups, context)
            : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1Rules(output.Rules, context)
            : undefined,
        VisibilityConfig: output.VisibilityConfig !== undefined && output.VisibilityConfig !== null
            ? deserializeAws_json1_1VisibilityConfig(output.VisibilityConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1WebACLSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WebACLSummary(entry, context);
    });
};
var deserializeAws_json1_1WebACLSummary = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1XssMatchStatement = function (output, context) {
    return {
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        TextTransformations: output.TextTransformations !== undefined && output.TextTransformations !== null
            ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
            : undefined,
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