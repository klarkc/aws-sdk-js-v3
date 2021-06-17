"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1ListByteMatchSetsCommand = exports.serializeAws_json1_1ListActivatedRulesInRuleGroupCommand = exports.serializeAws_json1_1GetXssMatchSetCommand = exports.serializeAws_json1_1GetWebACLForResourceCommand = exports.serializeAws_json1_1GetWebACLCommand = exports.serializeAws_json1_1GetSqlInjectionMatchSetCommand = exports.serializeAws_json1_1GetSizeConstraintSetCommand = exports.serializeAws_json1_1GetSampledRequestsCommand = exports.serializeAws_json1_1GetRuleGroupCommand = exports.serializeAws_json1_1GetRuleCommand = exports.serializeAws_json1_1GetRegexPatternSetCommand = exports.serializeAws_json1_1GetRegexMatchSetCommand = exports.serializeAws_json1_1GetRateBasedRuleManagedKeysCommand = exports.serializeAws_json1_1GetRateBasedRuleCommand = exports.serializeAws_json1_1GetPermissionPolicyCommand = exports.serializeAws_json1_1GetLoggingConfigurationCommand = exports.serializeAws_json1_1GetIPSetCommand = exports.serializeAws_json1_1GetGeoMatchSetCommand = exports.serializeAws_json1_1GetChangeTokenStatusCommand = exports.serializeAws_json1_1GetChangeTokenCommand = exports.serializeAws_json1_1GetByteMatchSetCommand = exports.serializeAws_json1_1DisassociateWebACLCommand = exports.serializeAws_json1_1DeleteXssMatchSetCommand = exports.serializeAws_json1_1DeleteWebACLCommand = exports.serializeAws_json1_1DeleteSqlInjectionMatchSetCommand = exports.serializeAws_json1_1DeleteSizeConstraintSetCommand = exports.serializeAws_json1_1DeleteRuleGroupCommand = exports.serializeAws_json1_1DeleteRuleCommand = exports.serializeAws_json1_1DeleteRegexPatternSetCommand = exports.serializeAws_json1_1DeleteRegexMatchSetCommand = exports.serializeAws_json1_1DeleteRateBasedRuleCommand = exports.serializeAws_json1_1DeletePermissionPolicyCommand = exports.serializeAws_json1_1DeleteLoggingConfigurationCommand = exports.serializeAws_json1_1DeleteIPSetCommand = exports.serializeAws_json1_1DeleteGeoMatchSetCommand = exports.serializeAws_json1_1DeleteByteMatchSetCommand = exports.serializeAws_json1_1CreateXssMatchSetCommand = exports.serializeAws_json1_1CreateWebACLMigrationStackCommand = exports.serializeAws_json1_1CreateWebACLCommand = exports.serializeAws_json1_1CreateSqlInjectionMatchSetCommand = exports.serializeAws_json1_1CreateSizeConstraintSetCommand = exports.serializeAws_json1_1CreateRuleGroupCommand = exports.serializeAws_json1_1CreateRuleCommand = exports.serializeAws_json1_1CreateRegexPatternSetCommand = exports.serializeAws_json1_1CreateRegexMatchSetCommand = exports.serializeAws_json1_1CreateRateBasedRuleCommand = exports.serializeAws_json1_1CreateIPSetCommand = exports.serializeAws_json1_1CreateGeoMatchSetCommand = exports.serializeAws_json1_1CreateByteMatchSetCommand = exports.serializeAws_json1_1AssociateWebACLCommand = void 0;
exports.deserializeAws_json1_1DeletePermissionPolicyCommand = exports.deserializeAws_json1_1DeleteLoggingConfigurationCommand = exports.deserializeAws_json1_1DeleteIPSetCommand = exports.deserializeAws_json1_1DeleteGeoMatchSetCommand = exports.deserializeAws_json1_1DeleteByteMatchSetCommand = exports.deserializeAws_json1_1CreateXssMatchSetCommand = exports.deserializeAws_json1_1CreateWebACLMigrationStackCommand = exports.deserializeAws_json1_1CreateWebACLCommand = exports.deserializeAws_json1_1CreateSqlInjectionMatchSetCommand = exports.deserializeAws_json1_1CreateSizeConstraintSetCommand = exports.deserializeAws_json1_1CreateRuleGroupCommand = exports.deserializeAws_json1_1CreateRuleCommand = exports.deserializeAws_json1_1CreateRegexPatternSetCommand = exports.deserializeAws_json1_1CreateRegexMatchSetCommand = exports.deserializeAws_json1_1CreateRateBasedRuleCommand = exports.deserializeAws_json1_1CreateIPSetCommand = exports.deserializeAws_json1_1CreateGeoMatchSetCommand = exports.deserializeAws_json1_1CreateByteMatchSetCommand = exports.deserializeAws_json1_1AssociateWebACLCommand = exports.serializeAws_json1_1UpdateXssMatchSetCommand = exports.serializeAws_json1_1UpdateWebACLCommand = exports.serializeAws_json1_1UpdateSqlInjectionMatchSetCommand = exports.serializeAws_json1_1UpdateSizeConstraintSetCommand = exports.serializeAws_json1_1UpdateRuleGroupCommand = exports.serializeAws_json1_1UpdateRuleCommand = exports.serializeAws_json1_1UpdateRegexPatternSetCommand = exports.serializeAws_json1_1UpdateRegexMatchSetCommand = exports.serializeAws_json1_1UpdateRateBasedRuleCommand = exports.serializeAws_json1_1UpdateIPSetCommand = exports.serializeAws_json1_1UpdateGeoMatchSetCommand = exports.serializeAws_json1_1UpdateByteMatchSetCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1PutPermissionPolicyCommand = exports.serializeAws_json1_1PutLoggingConfigurationCommand = exports.serializeAws_json1_1ListXssMatchSetsCommand = exports.serializeAws_json1_1ListWebACLsCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListSubscribedRuleGroupsCommand = exports.serializeAws_json1_1ListSqlInjectionMatchSetsCommand = exports.serializeAws_json1_1ListSizeConstraintSetsCommand = exports.serializeAws_json1_1ListRulesCommand = exports.serializeAws_json1_1ListRuleGroupsCommand = exports.serializeAws_json1_1ListResourcesForWebACLCommand = exports.serializeAws_json1_1ListRegexPatternSetsCommand = exports.serializeAws_json1_1ListRegexMatchSetsCommand = exports.serializeAws_json1_1ListRateBasedRulesCommand = exports.serializeAws_json1_1ListLoggingConfigurationsCommand = exports.serializeAws_json1_1ListIPSetsCommand = exports.serializeAws_json1_1ListGeoMatchSetsCommand = void 0;
exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1PutPermissionPolicyCommand = exports.deserializeAws_json1_1PutLoggingConfigurationCommand = exports.deserializeAws_json1_1ListXssMatchSetsCommand = exports.deserializeAws_json1_1ListWebACLsCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListSubscribedRuleGroupsCommand = exports.deserializeAws_json1_1ListSqlInjectionMatchSetsCommand = exports.deserializeAws_json1_1ListSizeConstraintSetsCommand = exports.deserializeAws_json1_1ListRulesCommand = exports.deserializeAws_json1_1ListRuleGroupsCommand = exports.deserializeAws_json1_1ListResourcesForWebACLCommand = exports.deserializeAws_json1_1ListRegexPatternSetsCommand = exports.deserializeAws_json1_1ListRegexMatchSetsCommand = exports.deserializeAws_json1_1ListRateBasedRulesCommand = exports.deserializeAws_json1_1ListLoggingConfigurationsCommand = exports.deserializeAws_json1_1ListIPSetsCommand = exports.deserializeAws_json1_1ListGeoMatchSetsCommand = exports.deserializeAws_json1_1ListByteMatchSetsCommand = exports.deserializeAws_json1_1ListActivatedRulesInRuleGroupCommand = exports.deserializeAws_json1_1GetXssMatchSetCommand = exports.deserializeAws_json1_1GetWebACLForResourceCommand = exports.deserializeAws_json1_1GetWebACLCommand = exports.deserializeAws_json1_1GetSqlInjectionMatchSetCommand = exports.deserializeAws_json1_1GetSizeConstraintSetCommand = exports.deserializeAws_json1_1GetSampledRequestsCommand = exports.deserializeAws_json1_1GetRuleGroupCommand = exports.deserializeAws_json1_1GetRuleCommand = exports.deserializeAws_json1_1GetRegexPatternSetCommand = exports.deserializeAws_json1_1GetRegexMatchSetCommand = exports.deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand = exports.deserializeAws_json1_1GetRateBasedRuleCommand = exports.deserializeAws_json1_1GetPermissionPolicyCommand = exports.deserializeAws_json1_1GetLoggingConfigurationCommand = exports.deserializeAws_json1_1GetIPSetCommand = exports.deserializeAws_json1_1GetGeoMatchSetCommand = exports.deserializeAws_json1_1GetChangeTokenStatusCommand = exports.deserializeAws_json1_1GetChangeTokenCommand = exports.deserializeAws_json1_1GetByteMatchSetCommand = exports.deserializeAws_json1_1DisassociateWebACLCommand = exports.deserializeAws_json1_1DeleteXssMatchSetCommand = exports.deserializeAws_json1_1DeleteWebACLCommand = exports.deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand = exports.deserializeAws_json1_1DeleteSizeConstraintSetCommand = exports.deserializeAws_json1_1DeleteRuleGroupCommand = exports.deserializeAws_json1_1DeleteRuleCommand = exports.deserializeAws_json1_1DeleteRegexPatternSetCommand = exports.deserializeAws_json1_1DeleteRegexMatchSetCommand = exports.deserializeAws_json1_1DeleteRateBasedRuleCommand = void 0;
exports.deserializeAws_json1_1UpdateXssMatchSetCommand = exports.deserializeAws_json1_1UpdateWebACLCommand = exports.deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand = exports.deserializeAws_json1_1UpdateSizeConstraintSetCommand = exports.deserializeAws_json1_1UpdateRuleGroupCommand = exports.deserializeAws_json1_1UpdateRuleCommand = exports.deserializeAws_json1_1UpdateRegexPatternSetCommand = exports.deserializeAws_json1_1UpdateRegexMatchSetCommand = exports.deserializeAws_json1_1UpdateRateBasedRuleCommand = exports.deserializeAws_json1_1UpdateIPSetCommand = exports.deserializeAws_json1_1UpdateGeoMatchSetCommand = exports.deserializeAws_json1_1UpdateByteMatchSetCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.AssociateWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateWebACLCommand = serializeAws_json1_1AssociateWebACLCommand;
const serializeAws_json1_1CreateByteMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateByteMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateByteMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateByteMatchSetCommand = serializeAws_json1_1CreateByteMatchSetCommand;
const serializeAws_json1_1CreateGeoMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateGeoMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGeoMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGeoMatchSetCommand = serializeAws_json1_1CreateGeoMatchSetCommand;
const serializeAws_json1_1CreateIPSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateIPSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateIPSetCommand = serializeAws_json1_1CreateIPSetCommand;
const serializeAws_json1_1CreateRateBasedRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateRateBasedRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRateBasedRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRateBasedRuleCommand = serializeAws_json1_1CreateRateBasedRuleCommand;
const serializeAws_json1_1CreateRegexMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateRegexMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRegexMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRegexMatchSetCommand = serializeAws_json1_1CreateRegexMatchSetCommand;
const serializeAws_json1_1CreateRegexPatternSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateRegexPatternSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRegexPatternSetCommand = serializeAws_json1_1CreateRegexPatternSetCommand;
const serializeAws_json1_1CreateRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRuleCommand = serializeAws_json1_1CreateRuleCommand;
const serializeAws_json1_1CreateRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRuleGroupCommand = serializeAws_json1_1CreateRuleGroupCommand;
const serializeAws_json1_1CreateSizeConstraintSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateSizeConstraintSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSizeConstraintSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSizeConstraintSetCommand = serializeAws_json1_1CreateSizeConstraintSetCommand;
const serializeAws_json1_1CreateSqlInjectionMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateSqlInjectionMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSqlInjectionMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSqlInjectionMatchSetCommand = serializeAws_json1_1CreateSqlInjectionMatchSetCommand;
const serializeAws_json1_1CreateWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateWebACLCommand = serializeAws_json1_1CreateWebACLCommand;
const serializeAws_json1_1CreateWebACLMigrationStackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateWebACLMigrationStack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWebACLMigrationStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateWebACLMigrationStackCommand = serializeAws_json1_1CreateWebACLMigrationStackCommand;
const serializeAws_json1_1CreateXssMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.CreateXssMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateXssMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateXssMatchSetCommand = serializeAws_json1_1CreateXssMatchSetCommand;
const serializeAws_json1_1DeleteByteMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteByteMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteByteMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteByteMatchSetCommand = serializeAws_json1_1DeleteByteMatchSetCommand;
const serializeAws_json1_1DeleteGeoMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteGeoMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGeoMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteGeoMatchSetCommand = serializeAws_json1_1DeleteGeoMatchSetCommand;
const serializeAws_json1_1DeleteIPSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteIPSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteIPSetCommand = serializeAws_json1_1DeleteIPSetCommand;
const serializeAws_json1_1DeleteLoggingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteLoggingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLoggingConfigurationCommand = serializeAws_json1_1DeleteLoggingConfigurationCommand;
const serializeAws_json1_1DeletePermissionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeletePermissionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePermissionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePermissionPolicyCommand = serializeAws_json1_1DeletePermissionPolicyCommand;
const serializeAws_json1_1DeleteRateBasedRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteRateBasedRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRateBasedRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRateBasedRuleCommand = serializeAws_json1_1DeleteRateBasedRuleCommand;
const serializeAws_json1_1DeleteRegexMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteRegexMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRegexMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRegexMatchSetCommand = serializeAws_json1_1DeleteRegexMatchSetCommand;
const serializeAws_json1_1DeleteRegexPatternSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteRegexPatternSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRegexPatternSetCommand = serializeAws_json1_1DeleteRegexPatternSetCommand;
const serializeAws_json1_1DeleteRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRuleCommand = serializeAws_json1_1DeleteRuleCommand;
const serializeAws_json1_1DeleteRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRuleGroupCommand = serializeAws_json1_1DeleteRuleGroupCommand;
const serializeAws_json1_1DeleteSizeConstraintSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteSizeConstraintSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSizeConstraintSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSizeConstraintSetCommand = serializeAws_json1_1DeleteSizeConstraintSetCommand;
const serializeAws_json1_1DeleteSqlInjectionMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteSqlInjectionMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSqlInjectionMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSqlInjectionMatchSetCommand = serializeAws_json1_1DeleteSqlInjectionMatchSetCommand;
const serializeAws_json1_1DeleteWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteWebACLCommand = serializeAws_json1_1DeleteWebACLCommand;
const serializeAws_json1_1DeleteXssMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DeleteXssMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteXssMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteXssMatchSetCommand = serializeAws_json1_1DeleteXssMatchSetCommand;
const serializeAws_json1_1DisassociateWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.DisassociateWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateWebACLCommand = serializeAws_json1_1DisassociateWebACLCommand;
const serializeAws_json1_1GetByteMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetByteMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetByteMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetByteMatchSetCommand = serializeAws_json1_1GetByteMatchSetCommand;
const serializeAws_json1_1GetChangeTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetChangeToken",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetChangeTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetChangeTokenCommand = serializeAws_json1_1GetChangeTokenCommand;
const serializeAws_json1_1GetChangeTokenStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetChangeTokenStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetChangeTokenStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetChangeTokenStatusCommand = serializeAws_json1_1GetChangeTokenStatusCommand;
const serializeAws_json1_1GetGeoMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetGeoMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetGeoMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetGeoMatchSetCommand = serializeAws_json1_1GetGeoMatchSetCommand;
const serializeAws_json1_1GetIPSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetIPSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetIPSetCommand = serializeAws_json1_1GetIPSetCommand;
const serializeAws_json1_1GetLoggingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetLoggingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLoggingConfigurationCommand = serializeAws_json1_1GetLoggingConfigurationCommand;
const serializeAws_json1_1GetPermissionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetPermissionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPermissionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPermissionPolicyCommand = serializeAws_json1_1GetPermissionPolicyCommand;
const serializeAws_json1_1GetRateBasedRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetRateBasedRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRateBasedRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRateBasedRuleCommand = serializeAws_json1_1GetRateBasedRuleCommand;
const serializeAws_json1_1GetRateBasedRuleManagedKeysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetRateBasedRuleManagedKeys",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRateBasedRuleManagedKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRateBasedRuleManagedKeysCommand = serializeAws_json1_1GetRateBasedRuleManagedKeysCommand;
const serializeAws_json1_1GetRegexMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetRegexMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRegexMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRegexMatchSetCommand = serializeAws_json1_1GetRegexMatchSetCommand;
const serializeAws_json1_1GetRegexPatternSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetRegexPatternSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRegexPatternSetCommand = serializeAws_json1_1GetRegexPatternSetCommand;
const serializeAws_json1_1GetRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRuleCommand = serializeAws_json1_1GetRuleCommand;
const serializeAws_json1_1GetRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRuleGroupCommand = serializeAws_json1_1GetRuleGroupCommand;
const serializeAws_json1_1GetSampledRequestsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetSampledRequests",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSampledRequestsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSampledRequestsCommand = serializeAws_json1_1GetSampledRequestsCommand;
const serializeAws_json1_1GetSizeConstraintSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetSizeConstraintSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSizeConstraintSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSizeConstraintSetCommand = serializeAws_json1_1GetSizeConstraintSetCommand;
const serializeAws_json1_1GetSqlInjectionMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetSqlInjectionMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSqlInjectionMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSqlInjectionMatchSetCommand = serializeAws_json1_1GetSqlInjectionMatchSetCommand;
const serializeAws_json1_1GetWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetWebACLCommand = serializeAws_json1_1GetWebACLCommand;
const serializeAws_json1_1GetWebACLForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetWebACLForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWebACLForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetWebACLForResourceCommand = serializeAws_json1_1GetWebACLForResourceCommand;
const serializeAws_json1_1GetXssMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.GetXssMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetXssMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetXssMatchSetCommand = serializeAws_json1_1GetXssMatchSetCommand;
const serializeAws_json1_1ListActivatedRulesInRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListActivatedRulesInRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListActivatedRulesInRuleGroupCommand = serializeAws_json1_1ListActivatedRulesInRuleGroupCommand;
const serializeAws_json1_1ListByteMatchSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListByteMatchSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListByteMatchSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListByteMatchSetsCommand = serializeAws_json1_1ListByteMatchSetsCommand;
const serializeAws_json1_1ListGeoMatchSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListGeoMatchSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGeoMatchSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGeoMatchSetsCommand = serializeAws_json1_1ListGeoMatchSetsCommand;
const serializeAws_json1_1ListIPSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListIPSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIPSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListIPSetsCommand = serializeAws_json1_1ListIPSetsCommand;
const serializeAws_json1_1ListLoggingConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListLoggingConfigurations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLoggingConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLoggingConfigurationsCommand = serializeAws_json1_1ListLoggingConfigurationsCommand;
const serializeAws_json1_1ListRateBasedRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListRateBasedRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRateBasedRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRateBasedRulesCommand = serializeAws_json1_1ListRateBasedRulesCommand;
const serializeAws_json1_1ListRegexMatchSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListRegexMatchSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRegexMatchSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRegexMatchSetsCommand = serializeAws_json1_1ListRegexMatchSetsCommand;
const serializeAws_json1_1ListRegexPatternSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListRegexPatternSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRegexPatternSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRegexPatternSetsCommand = serializeAws_json1_1ListRegexPatternSetsCommand;
const serializeAws_json1_1ListResourcesForWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListResourcesForWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesForWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourcesForWebACLCommand = serializeAws_json1_1ListResourcesForWebACLCommand;
const serializeAws_json1_1ListRuleGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListRuleGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRuleGroupsCommand = serializeAws_json1_1ListRuleGroupsCommand;
const serializeAws_json1_1ListRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRulesCommand = serializeAws_json1_1ListRulesCommand;
const serializeAws_json1_1ListSizeConstraintSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListSizeConstraintSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSizeConstraintSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSizeConstraintSetsCommand = serializeAws_json1_1ListSizeConstraintSetsCommand;
const serializeAws_json1_1ListSqlInjectionMatchSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListSqlInjectionMatchSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSqlInjectionMatchSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSqlInjectionMatchSetsCommand = serializeAws_json1_1ListSqlInjectionMatchSetsCommand;
const serializeAws_json1_1ListSubscribedRuleGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListSubscribedRuleGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSubscribedRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSubscribedRuleGroupsCommand = serializeAws_json1_1ListSubscribedRuleGroupsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListWebACLsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListWebACLs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWebACLsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListWebACLsCommand = serializeAws_json1_1ListWebACLsCommand;
const serializeAws_json1_1ListXssMatchSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.ListXssMatchSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListXssMatchSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListXssMatchSetsCommand = serializeAws_json1_1ListXssMatchSetsCommand;
const serializeAws_json1_1PutLoggingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.PutLoggingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutLoggingConfigurationCommand = serializeAws_json1_1PutLoggingConfigurationCommand;
const serializeAws_json1_1PutPermissionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.PutPermissionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPermissionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutPermissionPolicyCommand = serializeAws_json1_1PutPermissionPolicyCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateByteMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateByteMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateByteMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateByteMatchSetCommand = serializeAws_json1_1UpdateByteMatchSetCommand;
const serializeAws_json1_1UpdateGeoMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateGeoMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGeoMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateGeoMatchSetCommand = serializeAws_json1_1UpdateGeoMatchSetCommand;
const serializeAws_json1_1UpdateIPSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateIPSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateIPSetCommand = serializeAws_json1_1UpdateIPSetCommand;
const serializeAws_json1_1UpdateRateBasedRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateRateBasedRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRateBasedRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRateBasedRuleCommand = serializeAws_json1_1UpdateRateBasedRuleCommand;
const serializeAws_json1_1UpdateRegexMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateRegexMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRegexMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRegexMatchSetCommand = serializeAws_json1_1UpdateRegexMatchSetCommand;
const serializeAws_json1_1UpdateRegexPatternSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateRegexPatternSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRegexPatternSetCommand = serializeAws_json1_1UpdateRegexPatternSetCommand;
const serializeAws_json1_1UpdateRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRuleCommand = serializeAws_json1_1UpdateRuleCommand;
const serializeAws_json1_1UpdateRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRuleGroupCommand = serializeAws_json1_1UpdateRuleGroupCommand;
const serializeAws_json1_1UpdateSizeConstraintSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateSizeConstraintSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSizeConstraintSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSizeConstraintSetCommand = serializeAws_json1_1UpdateSizeConstraintSetCommand;
const serializeAws_json1_1UpdateSqlInjectionMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateSqlInjectionMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSqlInjectionMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSqlInjectionMatchSetCommand = serializeAws_json1_1UpdateSqlInjectionMatchSetCommand;
const serializeAws_json1_1UpdateWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateWebACLCommand = serializeAws_json1_1UpdateWebACLCommand;
const serializeAws_json1_1UpdateXssMatchSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_Regional_20161128.UpdateXssMatchSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateXssMatchSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateXssMatchSetCommand = serializeAws_json1_1UpdateXssMatchSetCommand;
const deserializeAws_json1_1AssociateWebACLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateWebACLResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateWebACLCommand = deserializeAws_json1_1AssociateWebACLCommand;
const deserializeAws_json1_1AssociateWebACLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.wafregional#WAFUnavailableEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateByteMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateByteMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateByteMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateByteMatchSetCommand = deserializeAws_json1_1CreateByteMatchSetCommand;
const deserializeAws_json1_1CreateByteMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateGeoMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateGeoMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGeoMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGeoMatchSetCommand = deserializeAws_json1_1CreateGeoMatchSetCommand;
const deserializeAws_json1_1CreateGeoMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateIPSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateIPSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateIPSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateIPSetCommand = deserializeAws_json1_1CreateIPSetCommand;
const deserializeAws_json1_1CreateIPSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateRateBasedRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRateBasedRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRateBasedRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRateBasedRuleCommand = deserializeAws_json1_1CreateRateBasedRuleCommand;
const deserializeAws_json1_1CreateRateBasedRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.wafregional#WAFBadRequestException":
            response = {
                ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateRegexMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRegexMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRegexMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRegexMatchSetCommand = deserializeAws_json1_1CreateRegexMatchSetCommand;
const deserializeAws_json1_1CreateRegexMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateRegexPatternSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRegexPatternSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRegexPatternSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRegexPatternSetCommand = deserializeAws_json1_1CreateRegexPatternSetCommand;
const deserializeAws_json1_1CreateRegexPatternSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRuleCommand = deserializeAws_json1_1CreateRuleCommand;
const deserializeAws_json1_1CreateRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.wafregional#WAFBadRequestException":
            response = {
                ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRuleGroupCommand = deserializeAws_json1_1CreateRuleGroupCommand;
const deserializeAws_json1_1CreateRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.wafregional#WAFBadRequestException":
            response = {
                ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateSizeConstraintSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSizeConstraintSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSizeConstraintSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSizeConstraintSetCommand = deserializeAws_json1_1CreateSizeConstraintSetCommand;
const deserializeAws_json1_1CreateSizeConstraintSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateSqlInjectionMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSqlInjectionMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSqlInjectionMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSqlInjectionMatchSetCommand = deserializeAws_json1_1CreateSqlInjectionMatchSetCommand;
const deserializeAws_json1_1CreateSqlInjectionMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateWebACLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWebACLResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateWebACLCommand = deserializeAws_json1_1CreateWebACLCommand;
const deserializeAws_json1_1CreateWebACLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.wafregional#WAFBadRequestException":
            response = {
                ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateWebACLMigrationStackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateWebACLMigrationStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWebACLMigrationStackResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateWebACLMigrationStackCommand = deserializeAws_json1_1CreateWebACLMigrationStackCommand;
const deserializeAws_json1_1CreateWebACLMigrationStackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFEntityMigrationException":
        case "com.amazonaws.wafregional#WAFEntityMigrationException":
            response = {
                ...(await deserializeAws_json1_1WAFEntityMigrationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateXssMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateXssMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateXssMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateXssMatchSetCommand = deserializeAws_json1_1CreateXssMatchSetCommand;
const deserializeAws_json1_1CreateXssMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteByteMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteByteMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteByteMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteByteMatchSetCommand = deserializeAws_json1_1DeleteByteMatchSetCommand;
const deserializeAws_json1_1DeleteByteMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteGeoMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteGeoMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGeoMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteGeoMatchSetCommand = deserializeAws_json1_1DeleteGeoMatchSetCommand;
const deserializeAws_json1_1DeleteGeoMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteIPSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteIPSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteIPSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteIPSetCommand = deserializeAws_json1_1DeleteIPSetCommand;
const deserializeAws_json1_1DeleteIPSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteLoggingConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLoggingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteLoggingConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLoggingConfigurationCommand = deserializeAws_json1_1DeleteLoggingConfigurationCommand;
const deserializeAws_json1_1DeleteLoggingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeletePermissionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePermissionPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeletePermissionPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePermissionPolicyCommand = deserializeAws_json1_1DeletePermissionPolicyCommand;
const deserializeAws_json1_1DeletePermissionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRateBasedRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRateBasedRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRateBasedRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRateBasedRuleCommand = deserializeAws_json1_1DeleteRateBasedRuleCommand;
const deserializeAws_json1_1DeleteRateBasedRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRegexMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRegexMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRegexMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRegexMatchSetCommand = deserializeAws_json1_1DeleteRegexMatchSetCommand;
const deserializeAws_json1_1DeleteRegexMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRegexPatternSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRegexPatternSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRegexPatternSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRegexPatternSetCommand = deserializeAws_json1_1DeleteRegexPatternSetCommand;
const deserializeAws_json1_1DeleteRegexPatternSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRuleCommand = deserializeAws_json1_1DeleteRuleCommand;
const deserializeAws_json1_1DeleteRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRuleGroupCommand = deserializeAws_json1_1DeleteRuleGroupCommand;
const deserializeAws_json1_1DeleteRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteSizeConstraintSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSizeConstraintSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSizeConstraintSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSizeConstraintSetCommand = deserializeAws_json1_1DeleteSizeConstraintSetCommand;
const deserializeAws_json1_1DeleteSizeConstraintSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSqlInjectionMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSqlInjectionMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand = deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand;
const deserializeAws_json1_1DeleteSqlInjectionMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteWebACLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWebACLResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteWebACLCommand = deserializeAws_json1_1DeleteWebACLCommand;
const deserializeAws_json1_1DeleteWebACLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteXssMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteXssMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteXssMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteXssMatchSetCommand = deserializeAws_json1_1DeleteXssMatchSetCommand;
const deserializeAws_json1_1DeleteXssMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonEmptyEntityException":
        case "com.amazonaws.wafregional#WAFNonEmptyEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateWebACLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateWebACLResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateWebACLCommand = deserializeAws_json1_1DisassociateWebACLCommand;
const deserializeAws_json1_1DisassociateWebACLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetByteMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetByteMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetByteMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetByteMatchSetCommand = deserializeAws_json1_1GetByteMatchSetCommand;
const deserializeAws_json1_1GetByteMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetChangeTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetChangeTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetChangeTokenResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetChangeTokenCommand = deserializeAws_json1_1GetChangeTokenCommand;
const deserializeAws_json1_1GetChangeTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetChangeTokenStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetChangeTokenStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetChangeTokenStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetChangeTokenStatusCommand = deserializeAws_json1_1GetChangeTokenStatusCommand;
const deserializeAws_json1_1GetChangeTokenStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetGeoMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetGeoMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetGeoMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetGeoMatchSetCommand = deserializeAws_json1_1GetGeoMatchSetCommand;
const deserializeAws_json1_1GetGeoMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetIPSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetIPSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetIPSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetIPSetCommand = deserializeAws_json1_1GetIPSetCommand;
const deserializeAws_json1_1GetIPSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetLoggingConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetLoggingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLoggingConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetLoggingConfigurationCommand = deserializeAws_json1_1GetLoggingConfigurationCommand;
const deserializeAws_json1_1GetLoggingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetPermissionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPermissionPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPermissionPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPermissionPolicyCommand = deserializeAws_json1_1GetPermissionPolicyCommand;
const deserializeAws_json1_1GetPermissionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRateBasedRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRateBasedRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRateBasedRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRateBasedRuleCommand = deserializeAws_json1_1GetRateBasedRuleCommand;
const deserializeAws_json1_1GetRateBasedRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRateBasedRuleManagedKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRateBasedRuleManagedKeysResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand = deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand;
const deserializeAws_json1_1GetRateBasedRuleManagedKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRegexMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRegexMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRegexMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRegexMatchSetCommand = deserializeAws_json1_1GetRegexMatchSetCommand;
const deserializeAws_json1_1GetRegexMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRegexPatternSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRegexPatternSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRegexPatternSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRegexPatternSetCommand = deserializeAws_json1_1GetRegexPatternSetCommand;
const deserializeAws_json1_1GetRegexPatternSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRuleCommand = deserializeAws_json1_1GetRuleCommand;
const deserializeAws_json1_1GetRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRuleGroupCommand = deserializeAws_json1_1GetRuleGroupCommand;
const deserializeAws_json1_1GetRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetSampledRequestsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSampledRequestsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSampledRequestsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSampledRequestsCommand = deserializeAws_json1_1GetSampledRequestsCommand;
const deserializeAws_json1_1GetSampledRequestsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetSizeConstraintSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSizeConstraintSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSizeConstraintSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSizeConstraintSetCommand = deserializeAws_json1_1GetSizeConstraintSetCommand;
const deserializeAws_json1_1GetSizeConstraintSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetSqlInjectionMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSqlInjectionMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSqlInjectionMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSqlInjectionMatchSetCommand = deserializeAws_json1_1GetSqlInjectionMatchSetCommand;
const deserializeAws_json1_1GetSqlInjectionMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetWebACLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWebACLResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetWebACLCommand = deserializeAws_json1_1GetWebACLCommand;
const deserializeAws_json1_1GetWebACLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetWebACLForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetWebACLForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetWebACLForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetWebACLForResourceCommand = deserializeAws_json1_1GetWebACLForResourceCommand;
const deserializeAws_json1_1GetWebACLForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.wafregional#WAFUnavailableEntityException":
            response = {
                ...(await deserializeAws_json1_1WAFUnavailableEntityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetXssMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetXssMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetXssMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetXssMatchSetCommand = deserializeAws_json1_1GetXssMatchSetCommand;
const deserializeAws_json1_1GetXssMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListActivatedRulesInRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListActivatedRulesInRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListActivatedRulesInRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListActivatedRulesInRuleGroupCommand = deserializeAws_json1_1ListActivatedRulesInRuleGroupCommand;
const deserializeAws_json1_1ListActivatedRulesInRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListByteMatchSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListByteMatchSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListByteMatchSetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListByteMatchSetsCommand = deserializeAws_json1_1ListByteMatchSetsCommand;
const deserializeAws_json1_1ListByteMatchSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListGeoMatchSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListGeoMatchSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGeoMatchSetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGeoMatchSetsCommand = deserializeAws_json1_1ListGeoMatchSetsCommand;
const deserializeAws_json1_1ListGeoMatchSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListIPSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListIPSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListIPSetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListIPSetsCommand = deserializeAws_json1_1ListIPSetsCommand;
const deserializeAws_json1_1ListIPSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListLoggingConfigurationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListLoggingConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListLoggingConfigurationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListLoggingConfigurationsCommand = deserializeAws_json1_1ListLoggingConfigurationsCommand;
const deserializeAws_json1_1ListLoggingConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRateBasedRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRateBasedRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRateBasedRulesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRateBasedRulesCommand = deserializeAws_json1_1ListRateBasedRulesCommand;
const deserializeAws_json1_1ListRateBasedRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRegexMatchSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRegexMatchSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRegexMatchSetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRegexMatchSetsCommand = deserializeAws_json1_1ListRegexMatchSetsCommand;
const deserializeAws_json1_1ListRegexMatchSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRegexPatternSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRegexPatternSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRegexPatternSetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRegexPatternSetsCommand = deserializeAws_json1_1ListRegexPatternSetsCommand;
const deserializeAws_json1_1ListRegexPatternSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListResourcesForWebACLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourcesForWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourcesForWebACLResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourcesForWebACLCommand = deserializeAws_json1_1ListResourcesForWebACLCommand;
const deserializeAws_json1_1ListResourcesForWebACLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRuleGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRuleGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRuleGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRuleGroupsCommand = deserializeAws_json1_1ListRuleGroupsCommand;
const deserializeAws_json1_1ListRuleGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRulesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRulesCommand = deserializeAws_json1_1ListRulesCommand;
const deserializeAws_json1_1ListRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListSizeConstraintSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSizeConstraintSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSizeConstraintSetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSizeConstraintSetsCommand = deserializeAws_json1_1ListSizeConstraintSetsCommand;
const deserializeAws_json1_1ListSizeConstraintSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListSqlInjectionMatchSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSqlInjectionMatchSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSqlInjectionMatchSetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSqlInjectionMatchSetsCommand = deserializeAws_json1_1ListSqlInjectionMatchSetsCommand;
const deserializeAws_json1_1ListSqlInjectionMatchSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListSubscribedRuleGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSubscribedRuleGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSubscribedRuleGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSubscribedRuleGroupsCommand = deserializeAws_json1_1ListSubscribedRuleGroupsCommand;
const deserializeAws_json1_1ListSubscribedRuleGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.wafregional#WAFBadRequestException":
            response = {
                ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListWebACLsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListWebACLsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWebACLsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListWebACLsCommand = deserializeAws_json1_1ListWebACLsCommand;
const deserializeAws_json1_1ListWebACLsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListXssMatchSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListXssMatchSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListXssMatchSetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListXssMatchSetsCommand = deserializeAws_json1_1ListXssMatchSetsCommand;
const deserializeAws_json1_1ListXssMatchSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutLoggingConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutLoggingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutLoggingConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutLoggingConfigurationCommand = deserializeAws_json1_1PutLoggingConfigurationCommand;
const deserializeAws_json1_1PutLoggingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFServiceLinkedRoleErrorException":
        case "com.amazonaws.wafregional#WAFServiceLinkedRoleErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutPermissionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutPermissionPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutPermissionPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutPermissionPolicyCommand = deserializeAws_json1_1PutPermissionPolicyCommand;
const deserializeAws_json1_1PutPermissionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidPermissionPolicyException":
        case "com.amazonaws.wafregional#WAFInvalidPermissionPolicyException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.wafregional#WAFBadRequestException":
            response = {
                ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFBadRequestException":
        case "com.amazonaws.wafregional#WAFBadRequestException":
            response = {
                ...(await deserializeAws_json1_1WAFBadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafregional#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafregional#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateByteMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateByteMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateByteMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateByteMatchSetCommand = deserializeAws_json1_1UpdateByteMatchSetCommand;
const deserializeAws_json1_1UpdateByteMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateGeoMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateGeoMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGeoMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateGeoMatchSetCommand = deserializeAws_json1_1UpdateGeoMatchSetCommand;
const deserializeAws_json1_1UpdateGeoMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateIPSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateIPSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateIPSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateIPSetCommand = deserializeAws_json1_1UpdateIPSetCommand;
const deserializeAws_json1_1UpdateIPSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateRateBasedRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRateBasedRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRateBasedRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRateBasedRuleCommand = deserializeAws_json1_1UpdateRateBasedRuleCommand;
const deserializeAws_json1_1UpdateRateBasedRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateRegexMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRegexMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRegexMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRegexMatchSetCommand = deserializeAws_json1_1UpdateRegexMatchSetCommand;
const deserializeAws_json1_1UpdateRegexMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFDisallowedNameException":
        case "com.amazonaws.wafregional#WAFDisallowedNameException":
            response = {
                ...(await deserializeAws_json1_1WAFDisallowedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateRegexPatternSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRegexPatternSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRegexPatternSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRegexPatternSetCommand = deserializeAws_json1_1UpdateRegexPatternSetCommand;
const deserializeAws_json1_1UpdateRegexPatternSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidRegexPatternException":
        case "com.amazonaws.wafregional#WAFInvalidRegexPatternException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidRegexPatternExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRuleCommand = deserializeAws_json1_1UpdateRuleCommand;
const deserializeAws_json1_1UpdateRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRuleGroupCommand = deserializeAws_json1_1UpdateRuleGroupCommand;
const deserializeAws_json1_1UpdateRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateSizeConstraintSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSizeConstraintSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSizeConstraintSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSizeConstraintSetCommand = deserializeAws_json1_1UpdateSizeConstraintSetCommand;
const deserializeAws_json1_1UpdateSizeConstraintSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSqlInjectionMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSqlInjectionMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand = deserializeAws_json1_1UpdateSqlInjectionMatchSetCommand;
const deserializeAws_json1_1UpdateSqlInjectionMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateWebACLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateWebACLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWebACLResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateWebACLCommand = deserializeAws_json1_1UpdateWebACLCommand;
const deserializeAws_json1_1UpdateWebACLCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFReferencedItemException":
        case "com.amazonaws.wafregional#WAFReferencedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFReferencedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFSubscriptionNotFoundException":
        case "com.amazonaws.wafregional#WAFSubscriptionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateXssMatchSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateXssMatchSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateXssMatchSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateXssMatchSetCommand = deserializeAws_json1_1UpdateXssMatchSetCommand;
const deserializeAws_json1_1UpdateXssMatchSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafregional#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidAccountException":
        case "com.amazonaws.wafregional#WAFInvalidAccountException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafregional#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafregional#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafregional#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentContainerException":
        case "com.amazonaws.wafregional#WAFNonexistentContainerException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentContainerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafregional#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFStaleDataException":
        case "com.amazonaws.wafregional#WAFStaleDataException":
            response = {
                ...(await deserializeAws_json1_1WAFStaleDataExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1WAFBadRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFBadRequestException(body, context);
    const contents = {
        name: "WAFBadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFDisallowedNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFDisallowedNameException(body, context);
    const contents = {
        name: "WAFDisallowedNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFEntityMigrationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFEntityMigrationException(body, context);
    const contents = {
        name: "WAFEntityMigrationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFInternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInternalErrorException(body, context);
    const contents = {
        name: "WAFInternalErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFInvalidAccountExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidAccountException(body, context);
    const contents = {
        name: "WAFInvalidAccountException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFInvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidOperationException(body, context);
    const contents = {
        name: "WAFInvalidOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFInvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidParameterException(body, context);
    const contents = {
        name: "WAFInvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidPermissionPolicyException(body, context);
    const contents = {
        name: "WAFInvalidPermissionPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFInvalidRegexPatternExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidRegexPatternException(body, context);
    const contents = {
        name: "WAFInvalidRegexPatternException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFLimitsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFLimitsExceededException(body, context);
    const contents = {
        name: "WAFLimitsExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFNonEmptyEntityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFNonEmptyEntityException(body, context);
    const contents = {
        name: "WAFNonEmptyEntityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFNonexistentContainerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFNonexistentContainerException(body, context);
    const contents = {
        name: "WAFNonexistentContainerException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFNonexistentItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFNonexistentItemException(body, context);
    const contents = {
        name: "WAFNonexistentItemException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFReferencedItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFReferencedItemException(body, context);
    const contents = {
        name: "WAFReferencedItemException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFServiceLinkedRoleErrorException(body, context);
    const contents = {
        name: "WAFServiceLinkedRoleErrorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFStaleDataExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFStaleDataException(body, context);
    const contents = {
        name: "WAFStaleDataException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFSubscriptionNotFoundException(body, context);
    const contents = {
        name: "WAFSubscriptionNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFTagOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFTagOperationException(body, context);
    const contents = {
        name: "WAFTagOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFTagOperationInternalErrorException(body, context);
    const contents = {
        name: "WAFTagOperationInternalErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFUnavailableEntityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFUnavailableEntityException(body, context);
    const contents = {
        name: "WAFUnavailableEntityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1ActivatedRule = (input, context) => {
    return {
        ...(input.Action !== undefined &&
            input.Action !== null && { Action: serializeAws_json1_1WafAction(input.Action, context) }),
        ...(input.ExcludedRules !== undefined &&
            input.ExcludedRules !== null && {
            ExcludedRules: serializeAws_json1_1ExcludedRules(input.ExcludedRules, context),
        }),
        ...(input.OverrideAction !== undefined &&
            input.OverrideAction !== null && {
            OverrideAction: serializeAws_json1_1WafOverrideAction(input.OverrideAction, context),
        }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1AssociateWebACLRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
    };
};
const serializeAws_json1_1ByteMatchSetUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.ByteMatchTuple !== undefined &&
            input.ByteMatchTuple !== null && {
            ByteMatchTuple: serializeAws_json1_1ByteMatchTuple(input.ByteMatchTuple, context),
        }),
    };
};
const serializeAws_json1_1ByteMatchSetUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ByteMatchSetUpdate(entry, context);
    });
};
const serializeAws_json1_1ByteMatchTuple = (input, context) => {
    return {
        ...(input.FieldToMatch !== undefined &&
            input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
        ...(input.PositionalConstraint !== undefined &&
            input.PositionalConstraint !== null && { PositionalConstraint: input.PositionalConstraint }),
        ...(input.TargetString !== undefined &&
            input.TargetString !== null && { TargetString: context.base64Encoder(input.TargetString) }),
        ...(input.TextTransformation !== undefined &&
            input.TextTransformation !== null && { TextTransformation: input.TextTransformation }),
    };
};
const serializeAws_json1_1CreateByteMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateGeoMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateIPSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateRateBasedRuleRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RateKey !== undefined && input.RateKey !== null && { RateKey: input.RateKey }),
        ...(input.RateLimit !== undefined && input.RateLimit !== null && { RateLimit: input.RateLimit }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateRegexMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateRegexPatternSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateRuleGroupRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateRuleRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateSizeConstraintSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateSqlInjectionMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateWebACLMigrationStackRequest = (input, context) => {
    return {
        ...(input.IgnoreUnsupportedType !== undefined &&
            input.IgnoreUnsupportedType !== null && { IgnoreUnsupportedType: input.IgnoreUnsupportedType }),
        ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
        ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
    };
};
const serializeAws_json1_1CreateWebACLRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.DefaultAction !== undefined &&
            input.DefaultAction !== null && { DefaultAction: serializeAws_json1_1WafAction(input.DefaultAction, context) }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateXssMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteByteMatchSetRequest = (input, context) => {
    return {
        ...(input.ByteMatchSetId !== undefined &&
            input.ByteMatchSetId !== null && { ByteMatchSetId: input.ByteMatchSetId }),
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    };
};
const serializeAws_json1_1DeleteGeoMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.GeoMatchSetId !== undefined && input.GeoMatchSetId !== null && { GeoMatchSetId: input.GeoMatchSetId }),
    };
};
const serializeAws_json1_1DeleteIPSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.IPSetId !== undefined && input.IPSetId !== null && { IPSetId: input.IPSetId }),
    };
};
const serializeAws_json1_1DeleteLoggingConfigurationRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1DeletePermissionPolicyRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1DeleteRateBasedRuleRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    };
};
const serializeAws_json1_1DeleteRegexMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.RegexMatchSetId !== undefined &&
            input.RegexMatchSetId !== null && { RegexMatchSetId: input.RegexMatchSetId }),
    };
};
const serializeAws_json1_1DeleteRegexPatternSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.RegexPatternSetId !== undefined &&
            input.RegexPatternSetId !== null && { RegexPatternSetId: input.RegexPatternSetId }),
    };
};
const serializeAws_json1_1DeleteRuleGroupRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.RuleGroupId !== undefined && input.RuleGroupId !== null && { RuleGroupId: input.RuleGroupId }),
    };
};
const serializeAws_json1_1DeleteRuleRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    };
};
const serializeAws_json1_1DeleteSizeConstraintSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.SizeConstraintSetId !== undefined &&
            input.SizeConstraintSetId !== null && { SizeConstraintSetId: input.SizeConstraintSetId }),
    };
};
const serializeAws_json1_1DeleteSqlInjectionMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.SqlInjectionMatchSetId !== undefined &&
            input.SqlInjectionMatchSetId !== null && { SqlInjectionMatchSetId: input.SqlInjectionMatchSetId }),
    };
};
const serializeAws_json1_1DeleteWebACLRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
    };
};
const serializeAws_json1_1DeleteXssMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.XssMatchSetId !== undefined && input.XssMatchSetId !== null && { XssMatchSetId: input.XssMatchSetId }),
    };
};
const serializeAws_json1_1DisassociateWebACLRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1ExcludedRule = (input, context) => {
    return {
        ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    };
};
const serializeAws_json1_1ExcludedRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ExcludedRule(entry, context);
    });
};
const serializeAws_json1_1FieldToMatch = (input, context) => {
    return {
        ...(input.Data !== undefined && input.Data !== null && { Data: input.Data }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1GeoMatchConstraint = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1GeoMatchSetUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.GeoMatchConstraint !== undefined &&
            input.GeoMatchConstraint !== null && {
            GeoMatchConstraint: serializeAws_json1_1GeoMatchConstraint(input.GeoMatchConstraint, context),
        }),
    };
};
const serializeAws_json1_1GeoMatchSetUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1GeoMatchSetUpdate(entry, context);
    });
};
const serializeAws_json1_1GetByteMatchSetRequest = (input, context) => {
    return {
        ...(input.ByteMatchSetId !== undefined &&
            input.ByteMatchSetId !== null && { ByteMatchSetId: input.ByteMatchSetId }),
    };
};
const serializeAws_json1_1GetChangeTokenRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetChangeTokenStatusRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
    };
};
const serializeAws_json1_1GetGeoMatchSetRequest = (input, context) => {
    return {
        ...(input.GeoMatchSetId !== undefined && input.GeoMatchSetId !== null && { GeoMatchSetId: input.GeoMatchSetId }),
    };
};
const serializeAws_json1_1GetIPSetRequest = (input, context) => {
    return {
        ...(input.IPSetId !== undefined && input.IPSetId !== null && { IPSetId: input.IPSetId }),
    };
};
const serializeAws_json1_1GetLoggingConfigurationRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1GetPermissionPolicyRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1GetRateBasedRuleManagedKeysRequest = (input, context) => {
    return {
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
        ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    };
};
const serializeAws_json1_1GetRateBasedRuleRequest = (input, context) => {
    return {
        ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    };
};
const serializeAws_json1_1GetRegexMatchSetRequest = (input, context) => {
    return {
        ...(input.RegexMatchSetId !== undefined &&
            input.RegexMatchSetId !== null && { RegexMatchSetId: input.RegexMatchSetId }),
    };
};
const serializeAws_json1_1GetRegexPatternSetRequest = (input, context) => {
    return {
        ...(input.RegexPatternSetId !== undefined &&
            input.RegexPatternSetId !== null && { RegexPatternSetId: input.RegexPatternSetId }),
    };
};
const serializeAws_json1_1GetRuleGroupRequest = (input, context) => {
    return {
        ...(input.RuleGroupId !== undefined && input.RuleGroupId !== null && { RuleGroupId: input.RuleGroupId }),
    };
};
const serializeAws_json1_1GetRuleRequest = (input, context) => {
    return {
        ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
    };
};
const serializeAws_json1_1GetSampledRequestsRequest = (input, context) => {
    return {
        ...(input.MaxItems !== undefined && input.MaxItems !== null && { MaxItems: input.MaxItems }),
        ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
        ...(input.TimeWindow !== undefined &&
            input.TimeWindow !== null && { TimeWindow: serializeAws_json1_1TimeWindow(input.TimeWindow, context) }),
        ...(input.WebAclId !== undefined && input.WebAclId !== null && { WebAclId: input.WebAclId }),
    };
};
const serializeAws_json1_1GetSizeConstraintSetRequest = (input, context) => {
    return {
        ...(input.SizeConstraintSetId !== undefined &&
            input.SizeConstraintSetId !== null && { SizeConstraintSetId: input.SizeConstraintSetId }),
    };
};
const serializeAws_json1_1GetSqlInjectionMatchSetRequest = (input, context) => {
    return {
        ...(input.SqlInjectionMatchSetId !== undefined &&
            input.SqlInjectionMatchSetId !== null && { SqlInjectionMatchSetId: input.SqlInjectionMatchSetId }),
    };
};
const serializeAws_json1_1GetWebACLForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1GetWebACLRequest = (input, context) => {
    return {
        ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
    };
};
const serializeAws_json1_1GetXssMatchSetRequest = (input, context) => {
    return {
        ...(input.XssMatchSetId !== undefined && input.XssMatchSetId !== null && { XssMatchSetId: input.XssMatchSetId }),
    };
};
const serializeAws_json1_1IPSetDescriptor = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1IPSetUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.IPSetDescriptor !== undefined &&
            input.IPSetDescriptor !== null && {
            IPSetDescriptor: serializeAws_json1_1IPSetDescriptor(input.IPSetDescriptor, context),
        }),
    };
};
const serializeAws_json1_1IPSetUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1IPSetUpdate(entry, context);
    });
};
const serializeAws_json1_1ListActivatedRulesInRuleGroupRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
        ...(input.RuleGroupId !== undefined && input.RuleGroupId !== null && { RuleGroupId: input.RuleGroupId }),
    };
};
const serializeAws_json1_1ListByteMatchSetsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListGeoMatchSetsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListIPSetsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListLoggingConfigurationsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListRateBasedRulesRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListRegexMatchSetsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListRegexPatternSetsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListResourcesForWebACLRequest = (input, context) => {
    return {
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
    };
};
const serializeAws_json1_1ListRuleGroupsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListRulesRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListSizeConstraintSetsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListSqlInjectionMatchSetsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListSubscribedRuleGroupsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1ListWebACLsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1ListXssMatchSetsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
    };
};
const serializeAws_json1_1LogDestinationConfigs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1LoggingConfiguration = (input, context) => {
    return {
        ...(input.LogDestinationConfigs !== undefined &&
            input.LogDestinationConfigs !== null && {
            LogDestinationConfigs: serializeAws_json1_1LogDestinationConfigs(input.LogDestinationConfigs, context),
        }),
        ...(input.RedactedFields !== undefined &&
            input.RedactedFields !== null && {
            RedactedFields: serializeAws_json1_1RedactedFields(input.RedactedFields, context),
        }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1Predicate = (input, context) => {
    return {
        ...(input.DataId !== undefined && input.DataId !== null && { DataId: input.DataId }),
        ...(input.Negated !== undefined && input.Negated !== null && { Negated: input.Negated }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1PutLoggingConfigurationRequest = (input, context) => {
    return {
        ...(input.LoggingConfiguration !== undefined &&
            input.LoggingConfiguration !== null && {
            LoggingConfiguration: serializeAws_json1_1LoggingConfiguration(input.LoggingConfiguration, context),
        }),
    };
};
const serializeAws_json1_1PutPermissionPolicyRequest = (input, context) => {
    return {
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1RedactedFields = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1FieldToMatch(entry, context);
    });
};
const serializeAws_json1_1RegexMatchSetUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.RegexMatchTuple !== undefined &&
            input.RegexMatchTuple !== null && {
            RegexMatchTuple: serializeAws_json1_1RegexMatchTuple(input.RegexMatchTuple, context),
        }),
    };
};
const serializeAws_json1_1RegexMatchSetUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RegexMatchSetUpdate(entry, context);
    });
};
const serializeAws_json1_1RegexMatchTuple = (input, context) => {
    return {
        ...(input.FieldToMatch !== undefined &&
            input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
        ...(input.RegexPatternSetId !== undefined &&
            input.RegexPatternSetId !== null && { RegexPatternSetId: input.RegexPatternSetId }),
        ...(input.TextTransformation !== undefined &&
            input.TextTransformation !== null && { TextTransformation: input.TextTransformation }),
    };
};
const serializeAws_json1_1RegexPatternSetUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.RegexPatternString !== undefined &&
            input.RegexPatternString !== null && { RegexPatternString: input.RegexPatternString }),
    };
};
const serializeAws_json1_1RegexPatternSetUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RegexPatternSetUpdate(entry, context);
    });
};
const serializeAws_json1_1RuleGroupUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.ActivatedRule !== undefined &&
            input.ActivatedRule !== null && {
            ActivatedRule: serializeAws_json1_1ActivatedRule(input.ActivatedRule, context),
        }),
    };
};
const serializeAws_json1_1RuleGroupUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RuleGroupUpdate(entry, context);
    });
};
const serializeAws_json1_1RuleUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Predicate !== undefined &&
            input.Predicate !== null && { Predicate: serializeAws_json1_1Predicate(input.Predicate, context) }),
    };
};
const serializeAws_json1_1RuleUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RuleUpdate(entry, context);
    });
};
const serializeAws_json1_1SizeConstraint = (input, context) => {
    return {
        ...(input.ComparisonOperator !== undefined &&
            input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
        ...(input.FieldToMatch !== undefined &&
            input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
        ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
        ...(input.TextTransformation !== undefined &&
            input.TextTransformation !== null && { TextTransformation: input.TextTransformation }),
    };
};
const serializeAws_json1_1SizeConstraintSetUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.SizeConstraint !== undefined &&
            input.SizeConstraint !== null && {
            SizeConstraint: serializeAws_json1_1SizeConstraint(input.SizeConstraint, context),
        }),
    };
};
const serializeAws_json1_1SizeConstraintSetUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SizeConstraintSetUpdate(entry, context);
    });
};
const serializeAws_json1_1SqlInjectionMatchSetUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.SqlInjectionMatchTuple !== undefined &&
            input.SqlInjectionMatchTuple !== null && {
            SqlInjectionMatchTuple: serializeAws_json1_1SqlInjectionMatchTuple(input.SqlInjectionMatchTuple, context),
        }),
    };
};
const serializeAws_json1_1SqlInjectionMatchSetUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SqlInjectionMatchSetUpdate(entry, context);
    });
};
const serializeAws_json1_1SqlInjectionMatchTuple = (input, context) => {
    return {
        ...(input.FieldToMatch !== undefined &&
            input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
        ...(input.TextTransformation !== undefined &&
            input.TextTransformation !== null && { TextTransformation: input.TextTransformation }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1TimeWindow = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateByteMatchSetRequest = (input, context) => {
    return {
        ...(input.ByteMatchSetId !== undefined &&
            input.ByteMatchSetId !== null && { ByteMatchSetId: input.ByteMatchSetId }),
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1ByteMatchSetUpdates(input.Updates, context) }),
    };
};
const serializeAws_json1_1UpdateGeoMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.GeoMatchSetId !== undefined && input.GeoMatchSetId !== null && { GeoMatchSetId: input.GeoMatchSetId }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1GeoMatchSetUpdates(input.Updates, context) }),
    };
};
const serializeAws_json1_1UpdateIPSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.IPSetId !== undefined && input.IPSetId !== null && { IPSetId: input.IPSetId }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1IPSetUpdates(input.Updates, context) }),
    };
};
const serializeAws_json1_1UpdateRateBasedRuleRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.RateLimit !== undefined && input.RateLimit !== null && { RateLimit: input.RateLimit }),
        ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1RuleUpdates(input.Updates, context) }),
    };
};
const serializeAws_json1_1UpdateRegexMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.RegexMatchSetId !== undefined &&
            input.RegexMatchSetId !== null && { RegexMatchSetId: input.RegexMatchSetId }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1RegexMatchSetUpdates(input.Updates, context) }),
    };
};
const serializeAws_json1_1UpdateRegexPatternSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.RegexPatternSetId !== undefined &&
            input.RegexPatternSetId !== null && { RegexPatternSetId: input.RegexPatternSetId }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1RegexPatternSetUpdates(input.Updates, context) }),
    };
};
const serializeAws_json1_1UpdateRuleGroupRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.RuleGroupId !== undefined && input.RuleGroupId !== null && { RuleGroupId: input.RuleGroupId }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1RuleGroupUpdates(input.Updates, context) }),
    };
};
const serializeAws_json1_1UpdateRuleRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1RuleUpdates(input.Updates, context) }),
    };
};
const serializeAws_json1_1UpdateSizeConstraintSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.SizeConstraintSetId !== undefined &&
            input.SizeConstraintSetId !== null && { SizeConstraintSetId: input.SizeConstraintSetId }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1SizeConstraintSetUpdates(input.Updates, context) }),
    };
};
const serializeAws_json1_1UpdateSqlInjectionMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.SqlInjectionMatchSetId !== undefined &&
            input.SqlInjectionMatchSetId !== null && { SqlInjectionMatchSetId: input.SqlInjectionMatchSetId }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1SqlInjectionMatchSetUpdates(input.Updates, context) }),
    };
};
const serializeAws_json1_1UpdateWebACLRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.DefaultAction !== undefined &&
            input.DefaultAction !== null && { DefaultAction: serializeAws_json1_1WafAction(input.DefaultAction, context) }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1WebACLUpdates(input.Updates, context) }),
        ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
    };
};
const serializeAws_json1_1UpdateXssMatchSetRequest = (input, context) => {
    return {
        ...(input.ChangeToken !== undefined && input.ChangeToken !== null && { ChangeToken: input.ChangeToken }),
        ...(input.Updates !== undefined &&
            input.Updates !== null && { Updates: serializeAws_json1_1XssMatchSetUpdates(input.Updates, context) }),
        ...(input.XssMatchSetId !== undefined && input.XssMatchSetId !== null && { XssMatchSetId: input.XssMatchSetId }),
    };
};
const serializeAws_json1_1WafAction = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1WafOverrideAction = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1WebACLUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.ActivatedRule !== undefined &&
            input.ActivatedRule !== null && {
            ActivatedRule: serializeAws_json1_1ActivatedRule(input.ActivatedRule, context),
        }),
    };
};
const serializeAws_json1_1WebACLUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1WebACLUpdate(entry, context);
    });
};
const serializeAws_json1_1XssMatchSetUpdate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.XssMatchTuple !== undefined &&
            input.XssMatchTuple !== null && {
            XssMatchTuple: serializeAws_json1_1XssMatchTuple(input.XssMatchTuple, context),
        }),
    };
};
const serializeAws_json1_1XssMatchSetUpdates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1XssMatchSetUpdate(entry, context);
    });
};
const serializeAws_json1_1XssMatchTuple = (input, context) => {
    return {
        ...(input.FieldToMatch !== undefined &&
            input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
        ...(input.TextTransformation !== undefined &&
            input.TextTransformation !== null && { TextTransformation: input.TextTransformation }),
    };
};
const deserializeAws_json1_1ActivatedRule = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null
            ? deserializeAws_json1_1WafAction(output.Action, context)
            : undefined,
        ExcludedRules: output.ExcludedRules !== undefined && output.ExcludedRules !== null
            ? deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context)
            : undefined,
        OverrideAction: output.OverrideAction !== undefined && output.OverrideAction !== null
            ? deserializeAws_json1_1WafOverrideAction(output.OverrideAction, context)
            : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ActivatedRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ActivatedRule(entry, context);
    });
};
const deserializeAws_json1_1AssociateWebACLResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ByteMatchSet = (output, context) => {
    return {
        ByteMatchSetId: output.ByteMatchSetId !== undefined && output.ByteMatchSetId !== null ? output.ByteMatchSetId : undefined,
        ByteMatchTuples: output.ByteMatchTuples !== undefined && output.ByteMatchTuples !== null
            ? deserializeAws_json1_1ByteMatchTuples(output.ByteMatchTuples, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ByteMatchSetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ByteMatchSetSummary(entry, context);
    });
};
const deserializeAws_json1_1ByteMatchSetSummary = (output, context) => {
    return {
        ByteMatchSetId: output.ByteMatchSetId !== undefined && output.ByteMatchSetId !== null ? output.ByteMatchSetId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ByteMatchTuple = (output, context) => {
    return {
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        PositionalConstraint: output.PositionalConstraint !== undefined && output.PositionalConstraint !== null
            ? output.PositionalConstraint
            : undefined,
        TargetString: output.TargetString !== undefined && output.TargetString !== null
            ? context.base64Decoder(output.TargetString)
            : undefined,
        TextTransformation: output.TextTransformation !== undefined && output.TextTransformation !== null
            ? output.TextTransformation
            : undefined,
    };
};
const deserializeAws_json1_1ByteMatchTuples = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ByteMatchTuple(entry, context);
    });
};
const deserializeAws_json1_1CreateByteMatchSetResponse = (output, context) => {
    return {
        ByteMatchSet: output.ByteMatchSet !== undefined && output.ByteMatchSet !== null
            ? deserializeAws_json1_1ByteMatchSet(output.ByteMatchSet, context)
            : undefined,
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1CreateGeoMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        GeoMatchSet: output.GeoMatchSet !== undefined && output.GeoMatchSet !== null
            ? deserializeAws_json1_1GeoMatchSet(output.GeoMatchSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateIPSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        IPSet: output.IPSet !== undefined && output.IPSet !== null
            ? deserializeAws_json1_1IPSet(output.IPSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRateBasedRuleResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        Rule: output.Rule !== undefined && output.Rule !== null
            ? deserializeAws_json1_1RateBasedRule(output.Rule, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRegexMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        RegexMatchSet: output.RegexMatchSet !== undefined && output.RegexMatchSet !== null
            ? deserializeAws_json1_1RegexMatchSet(output.RegexMatchSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRegexPatternSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        RegexPatternSet: output.RegexPatternSet !== undefined && output.RegexPatternSet !== null
            ? deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRuleGroupResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        RuleGroup: output.RuleGroup !== undefined && output.RuleGroup !== null
            ? deserializeAws_json1_1RuleGroup(output.RuleGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRuleResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        Rule: output.Rule !== undefined && output.Rule !== null ? deserializeAws_json1_1Rule(output.Rule, context) : undefined,
    };
};
const deserializeAws_json1_1CreateSizeConstraintSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        SizeConstraintSet: output.SizeConstraintSet !== undefined && output.SizeConstraintSet !== null
            ? deserializeAws_json1_1SizeConstraintSet(output.SizeConstraintSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateSqlInjectionMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        SqlInjectionMatchSet: output.SqlInjectionMatchSet !== undefined && output.SqlInjectionMatchSet !== null
            ? deserializeAws_json1_1SqlInjectionMatchSet(output.SqlInjectionMatchSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateWebACLMigrationStackResponse = (output, context) => {
    return {
        S3ObjectUrl: output.S3ObjectUrl !== undefined && output.S3ObjectUrl !== null ? output.S3ObjectUrl : undefined,
    };
};
const deserializeAws_json1_1CreateWebACLResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        WebACL: output.WebACL !== undefined && output.WebACL !== null
            ? deserializeAws_json1_1WebACL(output.WebACL, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateXssMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
        XssMatchSet: output.XssMatchSet !== undefined && output.XssMatchSet !== null
            ? deserializeAws_json1_1XssMatchSet(output.XssMatchSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteByteMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteGeoMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteIPSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteLoggingConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeletePermissionPolicyResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteRateBasedRuleResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteRegexMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteRegexPatternSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteRuleGroupResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteRuleResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteSizeConstraintSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteSqlInjectionMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteWebACLResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DeleteXssMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1DisassociateWebACLResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ExcludedRule = (output, context) => {
    return {
        RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
    };
};
const deserializeAws_json1_1ExcludedRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExcludedRule(entry, context);
    });
};
const deserializeAws_json1_1FieldToMatch = (output, context) => {
    return {
        Data: output.Data !== undefined && output.Data !== null ? output.Data : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1GeoMatchConstraint = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1GeoMatchConstraints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GeoMatchConstraint(entry, context);
    });
};
const deserializeAws_json1_1GeoMatchSet = (output, context) => {
    return {
        GeoMatchConstraints: output.GeoMatchConstraints !== undefined && output.GeoMatchConstraints !== null
            ? deserializeAws_json1_1GeoMatchConstraints(output.GeoMatchConstraints, context)
            : undefined,
        GeoMatchSetId: output.GeoMatchSetId !== undefined && output.GeoMatchSetId !== null ? output.GeoMatchSetId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1GeoMatchSetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GeoMatchSetSummary(entry, context);
    });
};
const deserializeAws_json1_1GeoMatchSetSummary = (output, context) => {
    return {
        GeoMatchSetId: output.GeoMatchSetId !== undefined && output.GeoMatchSetId !== null ? output.GeoMatchSetId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1GetByteMatchSetResponse = (output, context) => {
    return {
        ByteMatchSet: output.ByteMatchSet !== undefined && output.ByteMatchSet !== null
            ? deserializeAws_json1_1ByteMatchSet(output.ByteMatchSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetChangeTokenResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1GetChangeTokenStatusResponse = (output, context) => {
    return {
        ChangeTokenStatus: output.ChangeTokenStatus !== undefined && output.ChangeTokenStatus !== null
            ? output.ChangeTokenStatus
            : undefined,
    };
};
const deserializeAws_json1_1GetGeoMatchSetResponse = (output, context) => {
    return {
        GeoMatchSet: output.GeoMatchSet !== undefined && output.GeoMatchSet !== null
            ? deserializeAws_json1_1GeoMatchSet(output.GeoMatchSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetIPSetResponse = (output, context) => {
    return {
        IPSet: output.IPSet !== undefined && output.IPSet !== null
            ? deserializeAws_json1_1IPSet(output.IPSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetLoggingConfigurationResponse = (output, context) => {
    return {
        LoggingConfiguration: output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
            ? deserializeAws_json1_1LoggingConfiguration(output.LoggingConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetPermissionPolicyResponse = (output, context) => {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
const deserializeAws_json1_1GetRateBasedRuleManagedKeysResponse = (output, context) => {
    return {
        ManagedKeys: output.ManagedKeys !== undefined && output.ManagedKeys !== null
            ? deserializeAws_json1_1ManagedKeys(output.ManagedKeys, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
const deserializeAws_json1_1GetRateBasedRuleResponse = (output, context) => {
    return {
        Rule: output.Rule !== undefined && output.Rule !== null
            ? deserializeAws_json1_1RateBasedRule(output.Rule, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRegexMatchSetResponse = (output, context) => {
    return {
        RegexMatchSet: output.RegexMatchSet !== undefined && output.RegexMatchSet !== null
            ? deserializeAws_json1_1RegexMatchSet(output.RegexMatchSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRegexPatternSetResponse = (output, context) => {
    return {
        RegexPatternSet: output.RegexPatternSet !== undefined && output.RegexPatternSet !== null
            ? deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRuleGroupResponse = (output, context) => {
    return {
        RuleGroup: output.RuleGroup !== undefined && output.RuleGroup !== null
            ? deserializeAws_json1_1RuleGroup(output.RuleGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRuleResponse = (output, context) => {
    return {
        Rule: output.Rule !== undefined && output.Rule !== null ? deserializeAws_json1_1Rule(output.Rule, context) : undefined,
    };
};
const deserializeAws_json1_1GetSampledRequestsResponse = (output, context) => {
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
const deserializeAws_json1_1GetSizeConstraintSetResponse = (output, context) => {
    return {
        SizeConstraintSet: output.SizeConstraintSet !== undefined && output.SizeConstraintSet !== null
            ? deserializeAws_json1_1SizeConstraintSet(output.SizeConstraintSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetSqlInjectionMatchSetResponse = (output, context) => {
    return {
        SqlInjectionMatchSet: output.SqlInjectionMatchSet !== undefined && output.SqlInjectionMatchSet !== null
            ? deserializeAws_json1_1SqlInjectionMatchSet(output.SqlInjectionMatchSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetWebACLForResourceResponse = (output, context) => {
    return {
        WebACLSummary: output.WebACLSummary !== undefined && output.WebACLSummary !== null
            ? deserializeAws_json1_1WebACLSummary(output.WebACLSummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetWebACLResponse = (output, context) => {
    return {
        WebACL: output.WebACL !== undefined && output.WebACL !== null
            ? deserializeAws_json1_1WebACL(output.WebACL, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetXssMatchSetResponse = (output, context) => {
    return {
        XssMatchSet: output.XssMatchSet !== undefined && output.XssMatchSet !== null
            ? deserializeAws_json1_1XssMatchSet(output.XssMatchSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1HTTPHeader = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1HTTPHeaders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HTTPHeader(entry, context);
    });
};
const deserializeAws_json1_1HTTPRequest = (output, context) => {
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
const deserializeAws_json1_1IPSet = (output, context) => {
    return {
        IPSetDescriptors: output.IPSetDescriptors !== undefined && output.IPSetDescriptors !== null
            ? deserializeAws_json1_1IPSetDescriptors(output.IPSetDescriptors, context)
            : undefined,
        IPSetId: output.IPSetId !== undefined && output.IPSetId !== null ? output.IPSetId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1IPSetDescriptor = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1IPSetDescriptors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IPSetDescriptor(entry, context);
    });
};
const deserializeAws_json1_1IPSetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IPSetSummary(entry, context);
    });
};
const deserializeAws_json1_1IPSetSummary = (output, context) => {
    return {
        IPSetId: output.IPSetId !== undefined && output.IPSetId !== null ? output.IPSetId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ListActivatedRulesInRuleGroupResponse = (output, context) => {
    return {
        ActivatedRules: output.ActivatedRules !== undefined && output.ActivatedRules !== null
            ? deserializeAws_json1_1ActivatedRules(output.ActivatedRules, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
const deserializeAws_json1_1ListByteMatchSetsResponse = (output, context) => {
    return {
        ByteMatchSets: output.ByteMatchSets !== undefined && output.ByteMatchSets !== null
            ? deserializeAws_json1_1ByteMatchSetSummaries(output.ByteMatchSets, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
const deserializeAws_json1_1ListGeoMatchSetsResponse = (output, context) => {
    return {
        GeoMatchSets: output.GeoMatchSets !== undefined && output.GeoMatchSets !== null
            ? deserializeAws_json1_1GeoMatchSetSummaries(output.GeoMatchSets, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
const deserializeAws_json1_1ListIPSetsResponse = (output, context) => {
    return {
        IPSets: output.IPSets !== undefined && output.IPSets !== null
            ? deserializeAws_json1_1IPSetSummaries(output.IPSets, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
const deserializeAws_json1_1ListLoggingConfigurationsResponse = (output, context) => {
    return {
        LoggingConfigurations: output.LoggingConfigurations !== undefined && output.LoggingConfigurations !== null
            ? deserializeAws_json1_1LoggingConfigurations(output.LoggingConfigurations, context)
            : undefined,
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
    };
};
const deserializeAws_json1_1ListRateBasedRulesResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1RuleSummaries(output.Rules, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRegexMatchSetsResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        RegexMatchSets: output.RegexMatchSets !== undefined && output.RegexMatchSets !== null
            ? deserializeAws_json1_1RegexMatchSetSummaries(output.RegexMatchSets, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRegexPatternSetsResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        RegexPatternSets: output.RegexPatternSets !== undefined && output.RegexPatternSets !== null
            ? deserializeAws_json1_1RegexPatternSetSummaries(output.RegexPatternSets, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResourcesForWebACLResponse = (output, context) => {
    return {
        ResourceArns: output.ResourceArns !== undefined && output.ResourceArns !== null
            ? deserializeAws_json1_1ResourceArns(output.ResourceArns, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRuleGroupsResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        RuleGroups: output.RuleGroups !== undefined && output.RuleGroups !== null
            ? deserializeAws_json1_1RuleGroupSummaries(output.RuleGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRulesResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1RuleSummaries(output.Rules, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSizeConstraintSetsResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        SizeConstraintSets: output.SizeConstraintSets !== undefined && output.SizeConstraintSets !== null
            ? deserializeAws_json1_1SizeConstraintSetSummaries(output.SizeConstraintSets, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSqlInjectionMatchSetsResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        SqlInjectionMatchSets: output.SqlInjectionMatchSets !== undefined && output.SqlInjectionMatchSets !== null
            ? deserializeAws_json1_1SqlInjectionMatchSetSummaries(output.SqlInjectionMatchSets, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSubscribedRuleGroupsResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        RuleGroups: output.RuleGroups !== undefined && output.RuleGroups !== null
            ? deserializeAws_json1_1SubscribedRuleGroupSummaries(output.RuleGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        TagInfoForResource: output.TagInfoForResource !== undefined && output.TagInfoForResource !== null
            ? deserializeAws_json1_1TagInfoForResource(output.TagInfoForResource, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListWebACLsResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        WebACLs: output.WebACLs !== undefined && output.WebACLs !== null
            ? deserializeAws_json1_1WebACLSummaries(output.WebACLs, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListXssMatchSetsResponse = (output, context) => {
    return {
        NextMarker: output.NextMarker !== undefined && output.NextMarker !== null ? output.NextMarker : undefined,
        XssMatchSets: output.XssMatchSets !== undefined && output.XssMatchSets !== null
            ? deserializeAws_json1_1XssMatchSetSummaries(output.XssMatchSets, context)
            : undefined,
    };
};
const deserializeAws_json1_1LogDestinationConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1LoggingConfiguration = (output, context) => {
    return {
        LogDestinationConfigs: output.LogDestinationConfigs !== undefined && output.LogDestinationConfigs !== null
            ? deserializeAws_json1_1LogDestinationConfigs(output.LogDestinationConfigs, context)
            : undefined,
        RedactedFields: output.RedactedFields !== undefined && output.RedactedFields !== null
            ? deserializeAws_json1_1RedactedFields(output.RedactedFields, context)
            : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
const deserializeAws_json1_1LoggingConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LoggingConfiguration(entry, context);
    });
};
const deserializeAws_json1_1ManagedKeys = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Predicate = (output, context) => {
    return {
        DataId: output.DataId !== undefined && output.DataId !== null ? output.DataId : undefined,
        Negated: output.Negated !== undefined && output.Negated !== null ? output.Negated : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1Predicates = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Predicate(entry, context);
    });
};
const deserializeAws_json1_1PutLoggingConfigurationResponse = (output, context) => {
    return {
        LoggingConfiguration: output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
            ? deserializeAws_json1_1LoggingConfiguration(output.LoggingConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutPermissionPolicyResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1RateBasedRule = (output, context) => {
    return {
        MatchPredicates: output.MatchPredicates !== undefined && output.MatchPredicates !== null
            ? deserializeAws_json1_1Predicates(output.MatchPredicates, context)
            : undefined,
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RateKey: output.RateKey !== undefined && output.RateKey !== null ? output.RateKey : undefined,
        RateLimit: output.RateLimit !== undefined && output.RateLimit !== null ? output.RateLimit : undefined,
        RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
    };
};
const deserializeAws_json1_1RedactedFields = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FieldToMatch(entry, context);
    });
};
const deserializeAws_json1_1RegexMatchSet = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RegexMatchSetId: output.RegexMatchSetId !== undefined && output.RegexMatchSetId !== null ? output.RegexMatchSetId : undefined,
        RegexMatchTuples: output.RegexMatchTuples !== undefined && output.RegexMatchTuples !== null
            ? deserializeAws_json1_1RegexMatchTuples(output.RegexMatchTuples, context)
            : undefined,
    };
};
const deserializeAws_json1_1RegexMatchSetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RegexMatchSetSummary(entry, context);
    });
};
const deserializeAws_json1_1RegexMatchSetSummary = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RegexMatchSetId: output.RegexMatchSetId !== undefined && output.RegexMatchSetId !== null ? output.RegexMatchSetId : undefined,
    };
};
const deserializeAws_json1_1RegexMatchTuple = (output, context) => {
    return {
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        RegexPatternSetId: output.RegexPatternSetId !== undefined && output.RegexPatternSetId !== null
            ? output.RegexPatternSetId
            : undefined,
        TextTransformation: output.TextTransformation !== undefined && output.TextTransformation !== null
            ? output.TextTransformation
            : undefined,
    };
};
const deserializeAws_json1_1RegexMatchTuples = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RegexMatchTuple(entry, context);
    });
};
const deserializeAws_json1_1RegexPatternSet = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RegexPatternSetId: output.RegexPatternSetId !== undefined && output.RegexPatternSetId !== null
            ? output.RegexPatternSetId
            : undefined,
        RegexPatternStrings: output.RegexPatternStrings !== undefined && output.RegexPatternStrings !== null
            ? deserializeAws_json1_1RegexPatternStrings(output.RegexPatternStrings, context)
            : undefined,
    };
};
const deserializeAws_json1_1RegexPatternSetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RegexPatternSetSummary(entry, context);
    });
};
const deserializeAws_json1_1RegexPatternSetSummary = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RegexPatternSetId: output.RegexPatternSetId !== undefined && output.RegexPatternSetId !== null
            ? output.RegexPatternSetId
            : undefined,
    };
};
const deserializeAws_json1_1RegexPatternStrings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ResourceArns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Rule = (output, context) => {
    return {
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Predicates: output.Predicates !== undefined && output.Predicates !== null
            ? deserializeAws_json1_1Predicates(output.Predicates, context)
            : undefined,
        RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
    };
};
const deserializeAws_json1_1RuleGroup = (output, context) => {
    return {
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RuleGroupId: output.RuleGroupId !== undefined && output.RuleGroupId !== null ? output.RuleGroupId : undefined,
    };
};
const deserializeAws_json1_1RuleGroupSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RuleGroupSummary(entry, context);
    });
};
const deserializeAws_json1_1RuleGroupSummary = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RuleGroupId: output.RuleGroupId !== undefined && output.RuleGroupId !== null ? output.RuleGroupId : undefined,
    };
};
const deserializeAws_json1_1RuleSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RuleSummary(entry, context);
    });
};
const deserializeAws_json1_1RuleSummary = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
    };
};
const deserializeAws_json1_1SampledHTTPRequest = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        Request: output.Request !== undefined && output.Request !== null
            ? deserializeAws_json1_1HTTPRequest(output.Request, context)
            : undefined,
        RuleWithinRuleGroup: output.RuleWithinRuleGroup !== undefined && output.RuleWithinRuleGroup !== null
            ? output.RuleWithinRuleGroup
            : undefined,
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null
            ? new Date(Math.round(output.Timestamp * 1000))
            : undefined,
        Weight: output.Weight !== undefined && output.Weight !== null ? output.Weight : undefined,
    };
};
const deserializeAws_json1_1SampledHTTPRequests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SampledHTTPRequest(entry, context);
    });
};
const deserializeAws_json1_1SizeConstraint = (output, context) => {
    return {
        ComparisonOperator: output.ComparisonOperator !== undefined && output.ComparisonOperator !== null
            ? output.ComparisonOperator
            : undefined,
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
        TextTransformation: output.TextTransformation !== undefined && output.TextTransformation !== null
            ? output.TextTransformation
            : undefined,
    };
};
const deserializeAws_json1_1SizeConstraints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SizeConstraint(entry, context);
    });
};
const deserializeAws_json1_1SizeConstraintSet = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SizeConstraintSetId: output.SizeConstraintSetId !== undefined && output.SizeConstraintSetId !== null
            ? output.SizeConstraintSetId
            : undefined,
        SizeConstraints: output.SizeConstraints !== undefined && output.SizeConstraints !== null
            ? deserializeAws_json1_1SizeConstraints(output.SizeConstraints, context)
            : undefined,
    };
};
const deserializeAws_json1_1SizeConstraintSetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SizeConstraintSetSummary(entry, context);
    });
};
const deserializeAws_json1_1SizeConstraintSetSummary = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SizeConstraintSetId: output.SizeConstraintSetId !== undefined && output.SizeConstraintSetId !== null
            ? output.SizeConstraintSetId
            : undefined,
    };
};
const deserializeAws_json1_1SqlInjectionMatchSet = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SqlInjectionMatchSetId: output.SqlInjectionMatchSetId !== undefined && output.SqlInjectionMatchSetId !== null
            ? output.SqlInjectionMatchSetId
            : undefined,
        SqlInjectionMatchTuples: output.SqlInjectionMatchTuples !== undefined && output.SqlInjectionMatchTuples !== null
            ? deserializeAws_json1_1SqlInjectionMatchTuples(output.SqlInjectionMatchTuples, context)
            : undefined,
    };
};
const deserializeAws_json1_1SqlInjectionMatchSetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SqlInjectionMatchSetSummary(entry, context);
    });
};
const deserializeAws_json1_1SqlInjectionMatchSetSummary = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SqlInjectionMatchSetId: output.SqlInjectionMatchSetId !== undefined && output.SqlInjectionMatchSetId !== null
            ? output.SqlInjectionMatchSetId
            : undefined,
    };
};
const deserializeAws_json1_1SqlInjectionMatchTuple = (output, context) => {
    return {
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        TextTransformation: output.TextTransformation !== undefined && output.TextTransformation !== null
            ? output.TextTransformation
            : undefined,
    };
};
const deserializeAws_json1_1SqlInjectionMatchTuples = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SqlInjectionMatchTuple(entry, context);
    });
};
const deserializeAws_json1_1SubscribedRuleGroupSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SubscribedRuleGroupSummary(entry, context);
    });
};
const deserializeAws_json1_1SubscribedRuleGroupSummary = (output, context) => {
    return {
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RuleGroupId: output.RuleGroupId !== undefined && output.RuleGroupId !== null ? output.RuleGroupId : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagInfoForResource = (output, context) => {
    return {
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        TagList: output.TagList !== undefined && output.TagList !== null
            ? deserializeAws_json1_1TagList(output.TagList, context)
            : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TimeWindow = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateByteMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateGeoMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateIPSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateRateBasedRuleResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateRegexMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateRegexPatternSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateRuleGroupResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateRuleResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateSizeConstraintSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateSqlInjectionMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateWebACLResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1UpdateXssMatchSetResponse = (output, context) => {
    return {
        ChangeToken: output.ChangeToken !== undefined && output.ChangeToken !== null ? output.ChangeToken : undefined,
    };
};
const deserializeAws_json1_1WafAction = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1WAFBadRequestException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFDisallowedNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFEntityMigrationException = (output, context) => {
    return {
        MigrationErrorReason: output.MigrationErrorReason !== undefined && output.MigrationErrorReason !== null
            ? output.MigrationErrorReason
            : undefined,
        MigrationErrorType: output.MigrationErrorType !== undefined && output.MigrationErrorType !== null
            ? output.MigrationErrorType
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFInternalErrorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFInvalidAccountException = (output, context) => {
    return {};
};
const deserializeAws_json1_1WAFInvalidOperationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFInvalidParameterException = (output, context) => {
    return {
        field: output.field !== undefined && output.field !== null ? output.field : undefined,
        parameter: output.parameter !== undefined && output.parameter !== null ? output.parameter : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
const deserializeAws_json1_1WAFInvalidPermissionPolicyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFInvalidRegexPatternException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFLimitsExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFNonEmptyEntityException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFNonexistentContainerException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFNonexistentItemException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WafOverrideAction = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1WAFReferencedItemException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFServiceLinkedRoleErrorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFStaleDataException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFSubscriptionNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFTagOperationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFTagOperationInternalErrorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFUnavailableEntityException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WebACL = (output, context) => {
    return {
        DefaultAction: output.DefaultAction !== undefined && output.DefaultAction !== null
            ? deserializeAws_json1_1WafAction(output.DefaultAction, context)
            : undefined,
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1ActivatedRules(output.Rules, context)
            : undefined,
        WebACLArn: output.WebACLArn !== undefined && output.WebACLArn !== null ? output.WebACLArn : undefined,
        WebACLId: output.WebACLId !== undefined && output.WebACLId !== null ? output.WebACLId : undefined,
    };
};
const deserializeAws_json1_1WebACLSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WebACLSummary(entry, context);
    });
};
const deserializeAws_json1_1WebACLSummary = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        WebACLId: output.WebACLId !== undefined && output.WebACLId !== null ? output.WebACLId : undefined,
    };
};
const deserializeAws_json1_1XssMatchSet = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        XssMatchSetId: output.XssMatchSetId !== undefined && output.XssMatchSetId !== null ? output.XssMatchSetId : undefined,
        XssMatchTuples: output.XssMatchTuples !== undefined && output.XssMatchTuples !== null
            ? deserializeAws_json1_1XssMatchTuples(output.XssMatchTuples, context)
            : undefined,
    };
};
const deserializeAws_json1_1XssMatchSetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1XssMatchSetSummary(entry, context);
    });
};
const deserializeAws_json1_1XssMatchSetSummary = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        XssMatchSetId: output.XssMatchSetId !== undefined && output.XssMatchSetId !== null ? output.XssMatchSetId : undefined,
    };
};
const deserializeAws_json1_1XssMatchTuple = (output, context) => {
    return {
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        TextTransformation: output.TextTransformation !== undefined && output.TextTransformation !== null
            ? output.TextTransformation
            : undefined,
    };
};
const deserializeAws_json1_1XssMatchTuples = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1XssMatchTuple(entry, context);
    });
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
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