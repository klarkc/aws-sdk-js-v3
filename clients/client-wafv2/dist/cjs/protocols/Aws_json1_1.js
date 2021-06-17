"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1DeletePermissionPolicyCommand = exports.deserializeAws_json1_1DeleteLoggingConfigurationCommand = exports.deserializeAws_json1_1DeleteIPSetCommand = exports.deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand = exports.deserializeAws_json1_1CreateWebACLCommand = exports.deserializeAws_json1_1CreateRuleGroupCommand = exports.deserializeAws_json1_1CreateRegexPatternSetCommand = exports.deserializeAws_json1_1CreateIPSetCommand = exports.deserializeAws_json1_1CheckCapacityCommand = exports.deserializeAws_json1_1AssociateWebACLCommand = exports.serializeAws_json1_1UpdateWebACLCommand = exports.serializeAws_json1_1UpdateRuleGroupCommand = exports.serializeAws_json1_1UpdateRegexPatternSetCommand = exports.serializeAws_json1_1UpdateIPSetCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1PutPermissionPolicyCommand = exports.serializeAws_json1_1PutLoggingConfigurationCommand = exports.serializeAws_json1_1ListWebACLsCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListRuleGroupsCommand = exports.serializeAws_json1_1ListResourcesForWebACLCommand = exports.serializeAws_json1_1ListRegexPatternSetsCommand = exports.serializeAws_json1_1ListLoggingConfigurationsCommand = exports.serializeAws_json1_1ListIPSetsCommand = exports.serializeAws_json1_1ListAvailableManagedRuleGroupsCommand = exports.serializeAws_json1_1GetWebACLForResourceCommand = exports.serializeAws_json1_1GetWebACLCommand = exports.serializeAws_json1_1GetSampledRequestsCommand = exports.serializeAws_json1_1GetRuleGroupCommand = exports.serializeAws_json1_1GetRegexPatternSetCommand = exports.serializeAws_json1_1GetRateBasedStatementManagedKeysCommand = exports.serializeAws_json1_1GetPermissionPolicyCommand = exports.serializeAws_json1_1GetLoggingConfigurationCommand = exports.serializeAws_json1_1GetIPSetCommand = exports.serializeAws_json1_1DisassociateWebACLCommand = exports.serializeAws_json1_1DescribeManagedRuleGroupCommand = exports.serializeAws_json1_1DeleteWebACLCommand = exports.serializeAws_json1_1DeleteRuleGroupCommand = exports.serializeAws_json1_1DeleteRegexPatternSetCommand = exports.serializeAws_json1_1DeletePermissionPolicyCommand = exports.serializeAws_json1_1DeleteLoggingConfigurationCommand = exports.serializeAws_json1_1DeleteIPSetCommand = exports.serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand = exports.serializeAws_json1_1CreateWebACLCommand = exports.serializeAws_json1_1CreateRuleGroupCommand = exports.serializeAws_json1_1CreateRegexPatternSetCommand = exports.serializeAws_json1_1CreateIPSetCommand = exports.serializeAws_json1_1CheckCapacityCommand = exports.serializeAws_json1_1AssociateWebACLCommand = void 0;
exports.deserializeAws_json1_1UpdateWebACLCommand = exports.deserializeAws_json1_1UpdateRuleGroupCommand = exports.deserializeAws_json1_1UpdateRegexPatternSetCommand = exports.deserializeAws_json1_1UpdateIPSetCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1PutPermissionPolicyCommand = exports.deserializeAws_json1_1PutLoggingConfigurationCommand = exports.deserializeAws_json1_1ListWebACLsCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListRuleGroupsCommand = exports.deserializeAws_json1_1ListResourcesForWebACLCommand = exports.deserializeAws_json1_1ListRegexPatternSetsCommand = exports.deserializeAws_json1_1ListLoggingConfigurationsCommand = exports.deserializeAws_json1_1ListIPSetsCommand = exports.deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand = exports.deserializeAws_json1_1GetWebACLForResourceCommand = exports.deserializeAws_json1_1GetWebACLCommand = exports.deserializeAws_json1_1GetSampledRequestsCommand = exports.deserializeAws_json1_1GetRuleGroupCommand = exports.deserializeAws_json1_1GetRegexPatternSetCommand = exports.deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand = exports.deserializeAws_json1_1GetPermissionPolicyCommand = exports.deserializeAws_json1_1GetLoggingConfigurationCommand = exports.deserializeAws_json1_1GetIPSetCommand = exports.deserializeAws_json1_1DisassociateWebACLCommand = exports.deserializeAws_json1_1DescribeManagedRuleGroupCommand = exports.deserializeAws_json1_1DeleteWebACLCommand = exports.deserializeAws_json1_1DeleteRuleGroupCommand = exports.deserializeAws_json1_1DeleteRegexPatternSetCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.AssociateWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateWebACLCommand = serializeAws_json1_1AssociateWebACLCommand;
const serializeAws_json1_1CheckCapacityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.CheckCapacity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CheckCapacityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CheckCapacityCommand = serializeAws_json1_1CheckCapacityCommand;
const serializeAws_json1_1CreateIPSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.CreateIPSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateIPSetCommand = serializeAws_json1_1CreateIPSetCommand;
const serializeAws_json1_1CreateRegexPatternSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.CreateRegexPatternSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRegexPatternSetCommand = serializeAws_json1_1CreateRegexPatternSetCommand;
const serializeAws_json1_1CreateRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.CreateRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRuleGroupCommand = serializeAws_json1_1CreateRuleGroupCommand;
const serializeAws_json1_1CreateWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.CreateWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateWebACLCommand = serializeAws_json1_1CreateWebACLCommand;
const serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.DeleteFirewallManagerRuleGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFirewallManagerRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand = serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand;
const serializeAws_json1_1DeleteIPSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.DeleteIPSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteIPSetCommand = serializeAws_json1_1DeleteIPSetCommand;
const serializeAws_json1_1DeleteLoggingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.DeleteLoggingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLoggingConfigurationCommand = serializeAws_json1_1DeleteLoggingConfigurationCommand;
const serializeAws_json1_1DeletePermissionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.DeletePermissionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePermissionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePermissionPolicyCommand = serializeAws_json1_1DeletePermissionPolicyCommand;
const serializeAws_json1_1DeleteRegexPatternSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.DeleteRegexPatternSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRegexPatternSetCommand = serializeAws_json1_1DeleteRegexPatternSetCommand;
const serializeAws_json1_1DeleteRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.DeleteRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRuleGroupCommand = serializeAws_json1_1DeleteRuleGroupCommand;
const serializeAws_json1_1DeleteWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.DeleteWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteWebACLCommand = serializeAws_json1_1DeleteWebACLCommand;
const serializeAws_json1_1DescribeManagedRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.DescribeManagedRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeManagedRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeManagedRuleGroupCommand = serializeAws_json1_1DescribeManagedRuleGroupCommand;
const serializeAws_json1_1DisassociateWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.DisassociateWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateWebACLCommand = serializeAws_json1_1DisassociateWebACLCommand;
const serializeAws_json1_1GetIPSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.GetIPSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetIPSetCommand = serializeAws_json1_1GetIPSetCommand;
const serializeAws_json1_1GetLoggingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.GetLoggingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetLoggingConfigurationCommand = serializeAws_json1_1GetLoggingConfigurationCommand;
const serializeAws_json1_1GetPermissionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.GetPermissionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPermissionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPermissionPolicyCommand = serializeAws_json1_1GetPermissionPolicyCommand;
const serializeAws_json1_1GetRateBasedStatementManagedKeysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.GetRateBasedStatementManagedKeys",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRateBasedStatementManagedKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRateBasedStatementManagedKeysCommand = serializeAws_json1_1GetRateBasedStatementManagedKeysCommand;
const serializeAws_json1_1GetRegexPatternSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.GetRegexPatternSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRegexPatternSetCommand = serializeAws_json1_1GetRegexPatternSetCommand;
const serializeAws_json1_1GetRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.GetRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRuleGroupCommand = serializeAws_json1_1GetRuleGroupCommand;
const serializeAws_json1_1GetSampledRequestsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.GetSampledRequests",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSampledRequestsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSampledRequestsCommand = serializeAws_json1_1GetSampledRequestsCommand;
const serializeAws_json1_1GetWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.GetWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetWebACLCommand = serializeAws_json1_1GetWebACLCommand;
const serializeAws_json1_1GetWebACLForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.GetWebACLForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetWebACLForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetWebACLForResourceCommand = serializeAws_json1_1GetWebACLForResourceCommand;
const serializeAws_json1_1ListAvailableManagedRuleGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.ListAvailableManagedRuleGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAvailableManagedRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAvailableManagedRuleGroupsCommand = serializeAws_json1_1ListAvailableManagedRuleGroupsCommand;
const serializeAws_json1_1ListIPSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.ListIPSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListIPSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListIPSetsCommand = serializeAws_json1_1ListIPSetsCommand;
const serializeAws_json1_1ListLoggingConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.ListLoggingConfigurations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListLoggingConfigurationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListLoggingConfigurationsCommand = serializeAws_json1_1ListLoggingConfigurationsCommand;
const serializeAws_json1_1ListRegexPatternSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.ListRegexPatternSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRegexPatternSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRegexPatternSetsCommand = serializeAws_json1_1ListRegexPatternSetsCommand;
const serializeAws_json1_1ListResourcesForWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.ListResourcesForWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesForWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourcesForWebACLCommand = serializeAws_json1_1ListResourcesForWebACLCommand;
const serializeAws_json1_1ListRuleGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.ListRuleGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRuleGroupsCommand = serializeAws_json1_1ListRuleGroupsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListWebACLsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.ListWebACLs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWebACLsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListWebACLsCommand = serializeAws_json1_1ListWebACLsCommand;
const serializeAws_json1_1PutLoggingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.PutLoggingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutLoggingConfigurationCommand = serializeAws_json1_1PutLoggingConfigurationCommand;
const serializeAws_json1_1PutPermissionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.PutPermissionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPermissionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutPermissionPolicyCommand = serializeAws_json1_1PutPermissionPolicyCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateIPSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.UpdateIPSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateIPSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateIPSetCommand = serializeAws_json1_1UpdateIPSetCommand;
const serializeAws_json1_1UpdateRegexPatternSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.UpdateRegexPatternSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRegexPatternSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRegexPatternSetCommand = serializeAws_json1_1UpdateRegexPatternSetCommand;
const serializeAws_json1_1UpdateRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.UpdateRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRuleGroupCommand = serializeAws_json1_1UpdateRuleGroupCommand;
const serializeAws_json1_1UpdateWebACLCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSWAF_20190729.UpdateWebACL",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWebACLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateWebACLCommand = serializeAws_json1_1UpdateWebACLCommand;
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.wafv2#WAFUnavailableEntityException":
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
const deserializeAws_json1_1CheckCapacityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CheckCapacityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CheckCapacityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CheckCapacityCommand = deserializeAws_json1_1CheckCapacityCommand;
const deserializeAws_json1_1CheckCapacityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidResourceException":
        case "com.amazonaws.wafv2#WAFInvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFSubscriptionNotFoundException":
        case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.wafv2#WAFUnavailableEntityException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.wafv2#WAFDuplicateItemException":
            response = {
                ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.wafv2#WAFDuplicateItemException":
            response = {
                ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.wafv2#WAFDuplicateItemException":
            response = {
                ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFSubscriptionNotFoundException":
        case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.wafv2#WAFUnavailableEntityException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.wafv2#WAFDuplicateItemException":
            response = {
                ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidResourceException":
        case "com.amazonaws.wafv2#WAFInvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFSubscriptionNotFoundException":
        case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.wafv2#WAFUnavailableEntityException":
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
const deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFirewallManagerRuleGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand = deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand;
const deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
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
        case "WAFAssociatedItemException":
        case "com.amazonaws.wafv2#WAFAssociatedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "WAFAssociatedItemException":
        case "com.amazonaws.wafv2#WAFAssociatedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
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
        case "WAFAssociatedItemException":
        case "com.amazonaws.wafv2#WAFAssociatedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
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
        case "WAFAssociatedItemException":
        case "com.amazonaws.wafv2#WAFAssociatedItemException":
            response = {
                ...(await deserializeAws_json1_1WAFAssociatedItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
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
const deserializeAws_json1_1DescribeManagedRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeManagedRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeManagedRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeManagedRuleGroupCommand = deserializeAws_json1_1DescribeManagedRuleGroupCommand;
const deserializeAws_json1_1DescribeManagedRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidResourceException":
        case "com.amazonaws.wafv2#WAFInvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
const deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand = deserializeAws_json1_1GetRateBasedStatementManagedKeysCommand;
const deserializeAws_json1_1GetRateBasedStatementManagedKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.wafv2#WAFUnavailableEntityException":
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
const deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand = deserializeAws_json1_1ListAvailableManagedRuleGroupsCommand;
const deserializeAws_json1_1ListAvailableManagedRuleGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
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
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFServiceLinkedRoleErrorException":
        case "com.amazonaws.wafv2#WAFServiceLinkedRoleErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFServiceLinkedRoleErrorExceptionResponse(parsedOutput, context)),
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
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidPermissionPolicyException":
        case "com.amazonaws.wafv2#WAFInvalidPermissionPolicyException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidPermissionPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
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
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
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
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationException":
        case "com.amazonaws.wafv2#WAFTagOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFTagOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFTagOperationInternalErrorException":
        case "com.amazonaws.wafv2#WAFTagOperationInternalErrorException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.wafv2#WAFDuplicateItemException":
            response = {
                ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.wafv2#WAFDuplicateItemException":
            response = {
                ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.wafv2#WAFDuplicateItemException":
            response = {
                ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFSubscriptionNotFoundException":
        case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.wafv2#WAFUnavailableEntityException":
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
        case "WAFDuplicateItemException":
        case "com.amazonaws.wafv2#WAFDuplicateItemException":
            response = {
                ...(await deserializeAws_json1_1WAFDuplicateItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInternalErrorException":
        case "com.amazonaws.wafv2#WAFInternalErrorException":
            response = {
                ...(await deserializeAws_json1_1WAFInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidOperationException":
        case "com.amazonaws.wafv2#WAFInvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidParameterException":
        case "com.amazonaws.wafv2#WAFInvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFInvalidResourceException":
        case "com.amazonaws.wafv2#WAFInvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1WAFInvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFLimitsExceededException":
        case "com.amazonaws.wafv2#WAFLimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1WAFLimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFNonexistentItemException":
        case "com.amazonaws.wafv2#WAFNonexistentItemException":
            response = {
                ...(await deserializeAws_json1_1WAFNonexistentItemExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFOptimisticLockException":
        case "com.amazonaws.wafv2#WAFOptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1WAFOptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFSubscriptionNotFoundException":
        case "com.amazonaws.wafv2#WAFSubscriptionNotFoundException":
            response = {
                ...(await deserializeAws_json1_1WAFSubscriptionNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WAFUnavailableEntityException":
        case "com.amazonaws.wafv2#WAFUnavailableEntityException":
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
const deserializeAws_json1_1WAFAssociatedItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFAssociatedItemException(body, context);
    const contents = {
        name: "WAFAssociatedItemException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WAFDuplicateItemExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFDuplicateItemException(body, context);
    const contents = {
        name: "WAFDuplicateItemException",
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
const deserializeAws_json1_1WAFInvalidResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFInvalidResourceException(body, context);
    const contents = {
        name: "WAFInvalidResourceException",
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
const deserializeAws_json1_1WAFOptimisticLockExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WAFOptimisticLockException(body, context);
    const contents = {
        name: "WAFOptimisticLockException",
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
const serializeAws_json1_1ActionCondition = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    };
};
const serializeAws_json1_1All = (input, context) => {
    return {};
};
const serializeAws_json1_1AllowAction = (input, context) => {
    return {
        ...(input.CustomRequestHandling !== undefined &&
            input.CustomRequestHandling !== null && {
            CustomRequestHandling: serializeAws_json1_1CustomRequestHandling(input.CustomRequestHandling, context),
        }),
    };
};
const serializeAws_json1_1AllQueryArguments = (input, context) => {
    return {};
};
const serializeAws_json1_1AndStatement = (input, context) => {
    return {
        ...(input.Statements !== undefined &&
            input.Statements !== null && { Statements: serializeAws_json1_1Statements(input.Statements, context) }),
    };
};
const serializeAws_json1_1AssociateWebACLRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.WebACLArn !== undefined && input.WebACLArn !== null && { WebACLArn: input.WebACLArn }),
    };
};
const serializeAws_json1_1BlockAction = (input, context) => {
    return {
        ...(input.CustomResponse !== undefined &&
            input.CustomResponse !== null && {
            CustomResponse: serializeAws_json1_1CustomResponse(input.CustomResponse, context),
        }),
    };
};
const serializeAws_json1_1Body = (input, context) => {
    return {};
};
const serializeAws_json1_1ByteMatchStatement = (input, context) => {
    return {
        ...(input.FieldToMatch !== undefined &&
            input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
        ...(input.PositionalConstraint !== undefined &&
            input.PositionalConstraint !== null && { PositionalConstraint: input.PositionalConstraint }),
        ...(input.SearchString !== undefined &&
            input.SearchString !== null && { SearchString: context.base64Encoder(input.SearchString) }),
        ...(input.TextTransformations !== undefined &&
            input.TextTransformations !== null && {
            TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
        }),
    };
};
const serializeAws_json1_1CheckCapacityRequest = (input, context) => {
    return {
        ...(input.Rules !== undefined &&
            input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1Condition = (input, context) => {
    return {
        ...(input.ActionCondition !== undefined &&
            input.ActionCondition !== null && {
            ActionCondition: serializeAws_json1_1ActionCondition(input.ActionCondition, context),
        }),
        ...(input.LabelNameCondition !== undefined &&
            input.LabelNameCondition !== null && {
            LabelNameCondition: serializeAws_json1_1LabelNameCondition(input.LabelNameCondition, context),
        }),
    };
};
const serializeAws_json1_1Conditions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Condition(entry, context);
    });
};
const serializeAws_json1_1CountAction = (input, context) => {
    return {
        ...(input.CustomRequestHandling !== undefined &&
            input.CustomRequestHandling !== null && {
            CustomRequestHandling: serializeAws_json1_1CustomRequestHandling(input.CustomRequestHandling, context),
        }),
    };
};
const serializeAws_json1_1CountryCodes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CreateIPSetRequest = (input, context) => {
    return {
        ...(input.Addresses !== undefined &&
            input.Addresses !== null && { Addresses: serializeAws_json1_1IPAddresses(input.Addresses, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.IPAddressVersion !== undefined &&
            input.IPAddressVersion !== null && { IPAddressVersion: input.IPAddressVersion }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateRegexPatternSetRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RegularExpressionList !== undefined &&
            input.RegularExpressionList !== null && {
            RegularExpressionList: serializeAws_json1_1RegularExpressionList(input.RegularExpressionList, context),
        }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateRuleGroupRequest = (input, context) => {
    return {
        ...(input.Capacity !== undefined && input.Capacity !== null && { Capacity: input.Capacity }),
        ...(input.CustomResponseBodies !== undefined &&
            input.CustomResponseBodies !== null && {
            CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Rules !== undefined &&
            input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.VisibilityConfig !== undefined &&
            input.VisibilityConfig !== null && {
            VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
        }),
    };
};
const serializeAws_json1_1CreateWebACLRequest = (input, context) => {
    return {
        ...(input.CustomResponseBodies !== undefined &&
            input.CustomResponseBodies !== null && {
            CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
        }),
        ...(input.DefaultAction !== undefined &&
            input.DefaultAction !== null && {
            DefaultAction: serializeAws_json1_1DefaultAction(input.DefaultAction, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Rules !== undefined &&
            input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.VisibilityConfig !== undefined &&
            input.VisibilityConfig !== null && {
            VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
        }),
    };
};
const serializeAws_json1_1CustomHTTPHeader = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1CustomHTTPHeaders = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CustomHTTPHeader(entry, context);
    });
};
const serializeAws_json1_1CustomRequestHandling = (input, context) => {
    return {
        ...(input.InsertHeaders !== undefined &&
            input.InsertHeaders !== null && {
            InsertHeaders: serializeAws_json1_1CustomHTTPHeaders(input.InsertHeaders, context),
        }),
    };
};
const serializeAws_json1_1CustomResponse = (input, context) => {
    return {
        ...(input.CustomResponseBodyKey !== undefined &&
            input.CustomResponseBodyKey !== null && { CustomResponseBodyKey: input.CustomResponseBodyKey }),
        ...(input.ResponseCode !== undefined && input.ResponseCode !== null && { ResponseCode: input.ResponseCode }),
        ...(input.ResponseHeaders !== undefined &&
            input.ResponseHeaders !== null && {
            ResponseHeaders: serializeAws_json1_1CustomHTTPHeaders(input.ResponseHeaders, context),
        }),
    };
};
const serializeAws_json1_1CustomResponseBodies = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1CustomResponseBody(value, context),
        };
    }, {});
};
const serializeAws_json1_1CustomResponseBody = (input, context) => {
    return {
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
    };
};
const serializeAws_json1_1DefaultAction = (input, context) => {
    return {
        ...(input.Allow !== undefined &&
            input.Allow !== null && { Allow: serializeAws_json1_1AllowAction(input.Allow, context) }),
        ...(input.Block !== undefined &&
            input.Block !== null && { Block: serializeAws_json1_1BlockAction(input.Block, context) }),
    };
};
const serializeAws_json1_1DeleteFirewallManagerRuleGroupsRequest = (input, context) => {
    return {
        ...(input.WebACLArn !== undefined && input.WebACLArn !== null && { WebACLArn: input.WebACLArn }),
        ...(input.WebACLLockToken !== undefined &&
            input.WebACLLockToken !== null && { WebACLLockToken: input.WebACLLockToken }),
    };
};
const serializeAws_json1_1DeleteIPSetRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
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
const serializeAws_json1_1DeleteRegexPatternSetRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1DeleteRuleGroupRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1DeleteWebACLRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1DescribeManagedRuleGroupRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
        ...(input.VendorName !== undefined && input.VendorName !== null && { VendorName: input.VendorName }),
    };
};
const serializeAws_json1_1DisassociateWebACLRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1ExcludedRule = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
        ...(input.AllQueryArguments !== undefined &&
            input.AllQueryArguments !== null && {
            AllQueryArguments: serializeAws_json1_1AllQueryArguments(input.AllQueryArguments, context),
        }),
        ...(input.Body !== undefined && input.Body !== null && { Body: serializeAws_json1_1Body(input.Body, context) }),
        ...(input.JsonBody !== undefined &&
            input.JsonBody !== null && { JsonBody: serializeAws_json1_1JsonBody(input.JsonBody, context) }),
        ...(input.Method !== undefined &&
            input.Method !== null && { Method: serializeAws_json1_1Method(input.Method, context) }),
        ...(input.QueryString !== undefined &&
            input.QueryString !== null && { QueryString: serializeAws_json1_1QueryString(input.QueryString, context) }),
        ...(input.SingleHeader !== undefined &&
            input.SingleHeader !== null && { SingleHeader: serializeAws_json1_1SingleHeader(input.SingleHeader, context) }),
        ...(input.SingleQueryArgument !== undefined &&
            input.SingleQueryArgument !== null && {
            SingleQueryArgument: serializeAws_json1_1SingleQueryArgument(input.SingleQueryArgument, context),
        }),
        ...(input.UriPath !== undefined &&
            input.UriPath !== null && { UriPath: serializeAws_json1_1UriPath(input.UriPath, context) }),
    };
};
const serializeAws_json1_1Filter = (input, context) => {
    return {
        ...(input.Behavior !== undefined && input.Behavior !== null && { Behavior: input.Behavior }),
        ...(input.Conditions !== undefined &&
            input.Conditions !== null && { Conditions: serializeAws_json1_1Conditions(input.Conditions, context) }),
        ...(input.Requirement !== undefined && input.Requirement !== null && { Requirement: input.Requirement }),
    };
};
const serializeAws_json1_1Filters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Filter(entry, context);
    });
};
const serializeAws_json1_1ForwardedIPConfig = (input, context) => {
    return {
        ...(input.FallbackBehavior !== undefined &&
            input.FallbackBehavior !== null && { FallbackBehavior: input.FallbackBehavior }),
        ...(input.HeaderName !== undefined && input.HeaderName !== null && { HeaderName: input.HeaderName }),
    };
};
const serializeAws_json1_1GeoMatchStatement = (input, context) => {
    return {
        ...(input.CountryCodes !== undefined &&
            input.CountryCodes !== null && { CountryCodes: serializeAws_json1_1CountryCodes(input.CountryCodes, context) }),
        ...(input.ForwardedIPConfig !== undefined &&
            input.ForwardedIPConfig !== null && {
            ForwardedIPConfig: serializeAws_json1_1ForwardedIPConfig(input.ForwardedIPConfig, context),
        }),
    };
};
const serializeAws_json1_1GetIPSetRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
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
const serializeAws_json1_1GetRateBasedStatementManagedKeysRequest = (input, context) => {
    return {
        ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
        ...(input.WebACLId !== undefined && input.WebACLId !== null && { WebACLId: input.WebACLId }),
        ...(input.WebACLName !== undefined && input.WebACLName !== null && { WebACLName: input.WebACLName }),
    };
};
const serializeAws_json1_1GetRegexPatternSetRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1GetRuleGroupRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1GetSampledRequestsRequest = (input, context) => {
    return {
        ...(input.MaxItems !== undefined && input.MaxItems !== null && { MaxItems: input.MaxItems }),
        ...(input.RuleMetricName !== undefined &&
            input.RuleMetricName !== null && { RuleMetricName: input.RuleMetricName }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
        ...(input.TimeWindow !== undefined &&
            input.TimeWindow !== null && { TimeWindow: serializeAws_json1_1TimeWindow(input.TimeWindow, context) }),
        ...(input.WebAclArn !== undefined && input.WebAclArn !== null && { WebAclArn: input.WebAclArn }),
    };
};
const serializeAws_json1_1GetWebACLForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1GetWebACLRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1IPAddresses = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1IPSetForwardedIPConfig = (input, context) => {
    return {
        ...(input.FallbackBehavior !== undefined &&
            input.FallbackBehavior !== null && { FallbackBehavior: input.FallbackBehavior }),
        ...(input.HeaderName !== undefined && input.HeaderName !== null && { HeaderName: input.HeaderName }),
        ...(input.Position !== undefined && input.Position !== null && { Position: input.Position }),
    };
};
const serializeAws_json1_1IPSetReferenceStatement = (input, context) => {
    return {
        ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
        ...(input.IPSetForwardedIPConfig !== undefined &&
            input.IPSetForwardedIPConfig !== null && {
            IPSetForwardedIPConfig: serializeAws_json1_1IPSetForwardedIPConfig(input.IPSetForwardedIPConfig, context),
        }),
    };
};
const serializeAws_json1_1JsonBody = (input, context) => {
    return {
        ...(input.InvalidFallbackBehavior !== undefined &&
            input.InvalidFallbackBehavior !== null && { InvalidFallbackBehavior: input.InvalidFallbackBehavior }),
        ...(input.MatchPattern !== undefined &&
            input.MatchPattern !== null && {
            MatchPattern: serializeAws_json1_1JsonMatchPattern(input.MatchPattern, context),
        }),
        ...(input.MatchScope !== undefined && input.MatchScope !== null && { MatchScope: input.MatchScope }),
    };
};
const serializeAws_json1_1JsonMatchPattern = (input, context) => {
    return {
        ...(input.All !== undefined && input.All !== null && { All: serializeAws_json1_1All(input.All, context) }),
        ...(input.IncludedPaths !== undefined &&
            input.IncludedPaths !== null && {
            IncludedPaths: serializeAws_json1_1JsonPointerPaths(input.IncludedPaths, context),
        }),
    };
};
const serializeAws_json1_1JsonPointerPaths = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Label = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1LabelMatchStatement = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1LabelNameCondition = (input, context) => {
    return {
        ...(input.LabelName !== undefined && input.LabelName !== null && { LabelName: input.LabelName }),
    };
};
const serializeAws_json1_1Labels = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Label(entry, context);
    });
};
const serializeAws_json1_1ListAvailableManagedRuleGroupsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1ListIPSetsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1ListLoggingConfigurationsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1ListRegexPatternSetsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1ListResourcesForWebACLRequest = (input, context) => {
    return {
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.WebACLArn !== undefined && input.WebACLArn !== null && { WebACLArn: input.WebACLArn }),
    };
};
const serializeAws_json1_1ListRuleGroupsRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextMarker !== undefined && input.NextMarker !== null && { NextMarker: input.NextMarker }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
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
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
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
        ...(input.LoggingFilter !== undefined &&
            input.LoggingFilter !== null && {
            LoggingFilter: serializeAws_json1_1LoggingFilter(input.LoggingFilter, context),
        }),
        ...(input.ManagedByFirewallManager !== undefined &&
            input.ManagedByFirewallManager !== null && { ManagedByFirewallManager: input.ManagedByFirewallManager }),
        ...(input.RedactedFields !== undefined &&
            input.RedactedFields !== null && {
            RedactedFields: serializeAws_json1_1RedactedFields(input.RedactedFields, context),
        }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1LoggingFilter = (input, context) => {
    return {
        ...(input.DefaultBehavior !== undefined &&
            input.DefaultBehavior !== null && { DefaultBehavior: input.DefaultBehavior }),
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    };
};
const serializeAws_json1_1ManagedRuleGroupStatement = (input, context) => {
    return {
        ...(input.ExcludedRules !== undefined &&
            input.ExcludedRules !== null && {
            ExcludedRules: serializeAws_json1_1ExcludedRules(input.ExcludedRules, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ScopeDownStatement !== undefined &&
            input.ScopeDownStatement !== null && {
            ScopeDownStatement: serializeAws_json1_1Statement(input.ScopeDownStatement, context),
        }),
        ...(input.VendorName !== undefined && input.VendorName !== null && { VendorName: input.VendorName }),
    };
};
const serializeAws_json1_1Method = (input, context) => {
    return {};
};
const serializeAws_json1_1NoneAction = (input, context) => {
    return {};
};
const serializeAws_json1_1NotStatement = (input, context) => {
    return {
        ...(input.Statement !== undefined &&
            input.Statement !== null && { Statement: serializeAws_json1_1Statement(input.Statement, context) }),
    };
};
const serializeAws_json1_1OrStatement = (input, context) => {
    return {
        ...(input.Statements !== undefined &&
            input.Statements !== null && { Statements: serializeAws_json1_1Statements(input.Statements, context) }),
    };
};
const serializeAws_json1_1OverrideAction = (input, context) => {
    return {
        ...(input.Count !== undefined &&
            input.Count !== null && { Count: serializeAws_json1_1CountAction(input.Count, context) }),
        ...(input.None !== undefined &&
            input.None !== null && { None: serializeAws_json1_1NoneAction(input.None, context) }),
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
const serializeAws_json1_1QueryString = (input, context) => {
    return {};
};
const serializeAws_json1_1RateBasedStatement = (input, context) => {
    return {
        ...(input.AggregateKeyType !== undefined &&
            input.AggregateKeyType !== null && { AggregateKeyType: input.AggregateKeyType }),
        ...(input.ForwardedIPConfig !== undefined &&
            input.ForwardedIPConfig !== null && {
            ForwardedIPConfig: serializeAws_json1_1ForwardedIPConfig(input.ForwardedIPConfig, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.ScopeDownStatement !== undefined &&
            input.ScopeDownStatement !== null && {
            ScopeDownStatement: serializeAws_json1_1Statement(input.ScopeDownStatement, context),
        }),
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
const serializeAws_json1_1Regex = (input, context) => {
    return {
        ...(input.RegexString !== undefined && input.RegexString !== null && { RegexString: input.RegexString }),
    };
};
const serializeAws_json1_1RegexPatternSetReferenceStatement = (input, context) => {
    return {
        ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
        ...(input.FieldToMatch !== undefined &&
            input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
        ...(input.TextTransformations !== undefined &&
            input.TextTransformations !== null && {
            TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
        }),
    };
};
const serializeAws_json1_1RegularExpressionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Regex(entry, context);
    });
};
const serializeAws_json1_1Rule = (input, context) => {
    return {
        ...(input.Action !== undefined &&
            input.Action !== null && { Action: serializeAws_json1_1RuleAction(input.Action, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OverrideAction !== undefined &&
            input.OverrideAction !== null && {
            OverrideAction: serializeAws_json1_1OverrideAction(input.OverrideAction, context),
        }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.RuleLabels !== undefined &&
            input.RuleLabels !== null && { RuleLabels: serializeAws_json1_1Labels(input.RuleLabels, context) }),
        ...(input.Statement !== undefined &&
            input.Statement !== null && { Statement: serializeAws_json1_1Statement(input.Statement, context) }),
        ...(input.VisibilityConfig !== undefined &&
            input.VisibilityConfig !== null && {
            VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
        }),
    };
};
const serializeAws_json1_1RuleAction = (input, context) => {
    return {
        ...(input.Allow !== undefined &&
            input.Allow !== null && { Allow: serializeAws_json1_1AllowAction(input.Allow, context) }),
        ...(input.Block !== undefined &&
            input.Block !== null && { Block: serializeAws_json1_1BlockAction(input.Block, context) }),
        ...(input.Count !== undefined &&
            input.Count !== null && { Count: serializeAws_json1_1CountAction(input.Count, context) }),
    };
};
const serializeAws_json1_1RuleGroupReferenceStatement = (input, context) => {
    return {
        ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
        ...(input.ExcludedRules !== undefined &&
            input.ExcludedRules !== null && {
            ExcludedRules: serializeAws_json1_1ExcludedRules(input.ExcludedRules, context),
        }),
    };
};
const serializeAws_json1_1Rules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Rule(entry, context);
    });
};
const serializeAws_json1_1SingleHeader = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1SingleQueryArgument = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1SizeConstraintStatement = (input, context) => {
    return {
        ...(input.ComparisonOperator !== undefined &&
            input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
        ...(input.FieldToMatch !== undefined &&
            input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
        ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
        ...(input.TextTransformations !== undefined &&
            input.TextTransformations !== null && {
            TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
        }),
    };
};
const serializeAws_json1_1SqliMatchStatement = (input, context) => {
    return {
        ...(input.FieldToMatch !== undefined &&
            input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
        ...(input.TextTransformations !== undefined &&
            input.TextTransformations !== null && {
            TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
        }),
    };
};
const serializeAws_json1_1Statement = (input, context) => {
    return {
        ...(input.AndStatement !== undefined &&
            input.AndStatement !== null && { AndStatement: serializeAws_json1_1AndStatement(input.AndStatement, context) }),
        ...(input.ByteMatchStatement !== undefined &&
            input.ByteMatchStatement !== null && {
            ByteMatchStatement: serializeAws_json1_1ByteMatchStatement(input.ByteMatchStatement, context),
        }),
        ...(input.GeoMatchStatement !== undefined &&
            input.GeoMatchStatement !== null && {
            GeoMatchStatement: serializeAws_json1_1GeoMatchStatement(input.GeoMatchStatement, context),
        }),
        ...(input.IPSetReferenceStatement !== undefined &&
            input.IPSetReferenceStatement !== null && {
            IPSetReferenceStatement: serializeAws_json1_1IPSetReferenceStatement(input.IPSetReferenceStatement, context),
        }),
        ...(input.LabelMatchStatement !== undefined &&
            input.LabelMatchStatement !== null && {
            LabelMatchStatement: serializeAws_json1_1LabelMatchStatement(input.LabelMatchStatement, context),
        }),
        ...(input.ManagedRuleGroupStatement !== undefined &&
            input.ManagedRuleGroupStatement !== null && {
            ManagedRuleGroupStatement: serializeAws_json1_1ManagedRuleGroupStatement(input.ManagedRuleGroupStatement, context),
        }),
        ...(input.NotStatement !== undefined &&
            input.NotStatement !== null && { NotStatement: serializeAws_json1_1NotStatement(input.NotStatement, context) }),
        ...(input.OrStatement !== undefined &&
            input.OrStatement !== null && { OrStatement: serializeAws_json1_1OrStatement(input.OrStatement, context) }),
        ...(input.RateBasedStatement !== undefined &&
            input.RateBasedStatement !== null && {
            RateBasedStatement: serializeAws_json1_1RateBasedStatement(input.RateBasedStatement, context),
        }),
        ...(input.RegexPatternSetReferenceStatement !== undefined &&
            input.RegexPatternSetReferenceStatement !== null && {
            RegexPatternSetReferenceStatement: serializeAws_json1_1RegexPatternSetReferenceStatement(input.RegexPatternSetReferenceStatement, context),
        }),
        ...(input.RuleGroupReferenceStatement !== undefined &&
            input.RuleGroupReferenceStatement !== null && {
            RuleGroupReferenceStatement: serializeAws_json1_1RuleGroupReferenceStatement(input.RuleGroupReferenceStatement, context),
        }),
        ...(input.SizeConstraintStatement !== undefined &&
            input.SizeConstraintStatement !== null && {
            SizeConstraintStatement: serializeAws_json1_1SizeConstraintStatement(input.SizeConstraintStatement, context),
        }),
        ...(input.SqliMatchStatement !== undefined &&
            input.SqliMatchStatement !== null && {
            SqliMatchStatement: serializeAws_json1_1SqliMatchStatement(input.SqliMatchStatement, context),
        }),
        ...(input.XssMatchStatement !== undefined &&
            input.XssMatchStatement !== null && {
            XssMatchStatement: serializeAws_json1_1XssMatchStatement(input.XssMatchStatement, context),
        }),
    };
};
const serializeAws_json1_1Statements = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Statement(entry, context);
    });
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
const serializeAws_json1_1TextTransformation = (input, context) => {
    return {
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1TextTransformations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TextTransformation(entry, context);
    });
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
const serializeAws_json1_1UpdateIPSetRequest = (input, context) => {
    return {
        ...(input.Addresses !== undefined &&
            input.Addresses !== null && { Addresses: serializeAws_json1_1IPAddresses(input.Addresses, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1UpdateRegexPatternSetRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RegularExpressionList !== undefined &&
            input.RegularExpressionList !== null && {
            RegularExpressionList: serializeAws_json1_1RegularExpressionList(input.RegularExpressionList, context),
        }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
    };
};
const serializeAws_json1_1UpdateRuleGroupRequest = (input, context) => {
    return {
        ...(input.CustomResponseBodies !== undefined &&
            input.CustomResponseBodies !== null && {
            CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Rules !== undefined &&
            input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
        ...(input.VisibilityConfig !== undefined &&
            input.VisibilityConfig !== null && {
            VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
        }),
    };
};
const serializeAws_json1_1UpdateWebACLRequest = (input, context) => {
    return {
        ...(input.CustomResponseBodies !== undefined &&
            input.CustomResponseBodies !== null && {
            CustomResponseBodies: serializeAws_json1_1CustomResponseBodies(input.CustomResponseBodies, context),
        }),
        ...(input.DefaultAction !== undefined &&
            input.DefaultAction !== null && {
            DefaultAction: serializeAws_json1_1DefaultAction(input.DefaultAction, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.LockToken !== undefined && input.LockToken !== null && { LockToken: input.LockToken }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Rules !== undefined &&
            input.Rules !== null && { Rules: serializeAws_json1_1Rules(input.Rules, context) }),
        ...(input.Scope !== undefined && input.Scope !== null && { Scope: input.Scope }),
        ...(input.VisibilityConfig !== undefined &&
            input.VisibilityConfig !== null && {
            VisibilityConfig: serializeAws_json1_1VisibilityConfig(input.VisibilityConfig, context),
        }),
    };
};
const serializeAws_json1_1UriPath = (input, context) => {
    return {};
};
const serializeAws_json1_1VisibilityConfig = (input, context) => {
    return {
        ...(input.CloudWatchMetricsEnabled !== undefined &&
            input.CloudWatchMetricsEnabled !== null && { CloudWatchMetricsEnabled: input.CloudWatchMetricsEnabled }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
        ...(input.SampledRequestsEnabled !== undefined &&
            input.SampledRequestsEnabled !== null && { SampledRequestsEnabled: input.SampledRequestsEnabled }),
    };
};
const serializeAws_json1_1XssMatchStatement = (input, context) => {
    return {
        ...(input.FieldToMatch !== undefined &&
            input.FieldToMatch !== null && { FieldToMatch: serializeAws_json1_1FieldToMatch(input.FieldToMatch, context) }),
        ...(input.TextTransformations !== undefined &&
            input.TextTransformations !== null && {
            TextTransformations: serializeAws_json1_1TextTransformations(input.TextTransformations, context),
        }),
    };
};
const deserializeAws_json1_1ActionCondition = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
    };
};
const deserializeAws_json1_1All = (output, context) => {
    return {};
};
const deserializeAws_json1_1AllowAction = (output, context) => {
    return {
        CustomRequestHandling: output.CustomRequestHandling !== undefined && output.CustomRequestHandling !== null
            ? deserializeAws_json1_1CustomRequestHandling(output.CustomRequestHandling, context)
            : undefined,
    };
};
const deserializeAws_json1_1AllQueryArguments = (output, context) => {
    return {};
};
const deserializeAws_json1_1AndStatement = (output, context) => {
    return {
        Statements: output.Statements !== undefined && output.Statements !== null
            ? deserializeAws_json1_1Statements(output.Statements, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssociateWebACLResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1BlockAction = (output, context) => {
    return {
        CustomResponse: output.CustomResponse !== undefined && output.CustomResponse !== null
            ? deserializeAws_json1_1CustomResponse(output.CustomResponse, context)
            : undefined,
    };
};
const deserializeAws_json1_1Body = (output, context) => {
    return {};
};
const deserializeAws_json1_1ByteMatchStatement = (output, context) => {
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
const deserializeAws_json1_1CheckCapacityResponse = (output, context) => {
    return {
        Capacity: output.Capacity !== undefined && output.Capacity !== null ? output.Capacity : undefined,
    };
};
const deserializeAws_json1_1Condition = (output, context) => {
    return {
        ActionCondition: output.ActionCondition !== undefined && output.ActionCondition !== null
            ? deserializeAws_json1_1ActionCondition(output.ActionCondition, context)
            : undefined,
        LabelNameCondition: output.LabelNameCondition !== undefined && output.LabelNameCondition !== null
            ? deserializeAws_json1_1LabelNameCondition(output.LabelNameCondition, context)
            : undefined,
    };
};
const deserializeAws_json1_1Conditions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Condition(entry, context);
    });
};
const deserializeAws_json1_1CountAction = (output, context) => {
    return {
        CustomRequestHandling: output.CustomRequestHandling !== undefined && output.CustomRequestHandling !== null
            ? deserializeAws_json1_1CustomRequestHandling(output.CustomRequestHandling, context)
            : undefined,
    };
};
const deserializeAws_json1_1CountryCodes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CreateIPSetResponse = (output, context) => {
    return {
        Summary: output.Summary !== undefined && output.Summary !== null
            ? deserializeAws_json1_1IPSetSummary(output.Summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRegexPatternSetResponse = (output, context) => {
    return {
        Summary: output.Summary !== undefined && output.Summary !== null
            ? deserializeAws_json1_1RegexPatternSetSummary(output.Summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateRuleGroupResponse = (output, context) => {
    return {
        Summary: output.Summary !== undefined && output.Summary !== null
            ? deserializeAws_json1_1RuleGroupSummary(output.Summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateWebACLResponse = (output, context) => {
    return {
        Summary: output.Summary !== undefined && output.Summary !== null
            ? deserializeAws_json1_1WebACLSummary(output.Summary, context)
            : undefined,
    };
};
const deserializeAws_json1_1CustomHTTPHeader = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1CustomHTTPHeaders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CustomHTTPHeader(entry, context);
    });
};
const deserializeAws_json1_1CustomRequestHandling = (output, context) => {
    return {
        InsertHeaders: output.InsertHeaders !== undefined && output.InsertHeaders !== null
            ? deserializeAws_json1_1CustomHTTPHeaders(output.InsertHeaders, context)
            : undefined,
    };
};
const deserializeAws_json1_1CustomResponse = (output, context) => {
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
const deserializeAws_json1_1CustomResponseBodies = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1CustomResponseBody(value, context),
        };
    }, {});
};
const deserializeAws_json1_1CustomResponseBody = (output, context) => {
    return {
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
    };
};
const deserializeAws_json1_1DefaultAction = (output, context) => {
    return {
        Allow: output.Allow !== undefined && output.Allow !== null
            ? deserializeAws_json1_1AllowAction(output.Allow, context)
            : undefined,
        Block: output.Block !== undefined && output.Block !== null
            ? deserializeAws_json1_1BlockAction(output.Block, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteFirewallManagerRuleGroupsResponse = (output, context) => {
    return {
        NextWebACLLockToken: output.NextWebACLLockToken !== undefined && output.NextWebACLLockToken !== null
            ? output.NextWebACLLockToken
            : undefined,
    };
};
const deserializeAws_json1_1DeleteIPSetResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteLoggingConfigurationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeletePermissionPolicyResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteRegexPatternSetResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteRuleGroupResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteWebACLResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeManagedRuleGroupResponse = (output, context) => {
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
const deserializeAws_json1_1DisassociateWebACLResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ExcludedRule = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
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
const deserializeAws_json1_1Filter = (output, context) => {
    return {
        Behavior: output.Behavior !== undefined && output.Behavior !== null ? output.Behavior : undefined,
        Conditions: output.Conditions !== undefined && output.Conditions !== null
            ? deserializeAws_json1_1Conditions(output.Conditions, context)
            : undefined,
        Requirement: output.Requirement !== undefined && output.Requirement !== null ? output.Requirement : undefined,
    };
};
const deserializeAws_json1_1Filters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Filter(entry, context);
    });
};
const deserializeAws_json1_1FirewallManagerRuleGroup = (output, context) => {
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
const deserializeAws_json1_1FirewallManagerRuleGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FirewallManagerRuleGroup(entry, context);
    });
};
const deserializeAws_json1_1FirewallManagerStatement = (output, context) => {
    return {
        ManagedRuleGroupStatement: output.ManagedRuleGroupStatement !== undefined && output.ManagedRuleGroupStatement !== null
            ? deserializeAws_json1_1ManagedRuleGroupStatement(output.ManagedRuleGroupStatement, context)
            : undefined,
        RuleGroupReferenceStatement: output.RuleGroupReferenceStatement !== undefined && output.RuleGroupReferenceStatement !== null
            ? deserializeAws_json1_1RuleGroupReferenceStatement(output.RuleGroupReferenceStatement, context)
            : undefined,
    };
};
const deserializeAws_json1_1ForwardedIPConfig = (output, context) => {
    return {
        FallbackBehavior: output.FallbackBehavior !== undefined && output.FallbackBehavior !== null ? output.FallbackBehavior : undefined,
        HeaderName: output.HeaderName !== undefined && output.HeaderName !== null ? output.HeaderName : undefined,
    };
};
const deserializeAws_json1_1GeoMatchStatement = (output, context) => {
    return {
        CountryCodes: output.CountryCodes !== undefined && output.CountryCodes !== null
            ? deserializeAws_json1_1CountryCodes(output.CountryCodes, context)
            : undefined,
        ForwardedIPConfig: output.ForwardedIPConfig !== undefined && output.ForwardedIPConfig !== null
            ? deserializeAws_json1_1ForwardedIPConfig(output.ForwardedIPConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetIPSetResponse = (output, context) => {
    return {
        IPSet: output.IPSet !== undefined && output.IPSet !== null
            ? deserializeAws_json1_1IPSet(output.IPSet, context)
            : undefined,
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
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
const deserializeAws_json1_1GetRateBasedStatementManagedKeysResponse = (output, context) => {
    return {
        ManagedKeysIPV4: output.ManagedKeysIPV4 !== undefined && output.ManagedKeysIPV4 !== null
            ? deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(output.ManagedKeysIPV4, context)
            : undefined,
        ManagedKeysIPV6: output.ManagedKeysIPV6 !== undefined && output.ManagedKeysIPV6 !== null
            ? deserializeAws_json1_1RateBasedStatementManagedKeysIPSet(output.ManagedKeysIPV6, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRegexPatternSetResponse = (output, context) => {
    return {
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        RegexPatternSet: output.RegexPatternSet !== undefined && output.RegexPatternSet !== null
            ? deserializeAws_json1_1RegexPatternSet(output.RegexPatternSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRuleGroupResponse = (output, context) => {
    return {
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        RuleGroup: output.RuleGroup !== undefined && output.RuleGroup !== null
            ? deserializeAws_json1_1RuleGroup(output.RuleGroup, context)
            : undefined,
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
const deserializeAws_json1_1GetWebACLForResourceResponse = (output, context) => {
    return {
        WebACL: output.WebACL !== undefined && output.WebACL !== null
            ? deserializeAws_json1_1WebACL(output.WebACL, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetWebACLResponse = (output, context) => {
    return {
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        WebACL: output.WebACL !== undefined && output.WebACL !== null
            ? deserializeAws_json1_1WebACL(output.WebACL, context)
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
const deserializeAws_json1_1IPAddresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1IPSet = (output, context) => {
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
const deserializeAws_json1_1IPSetForwardedIPConfig = (output, context) => {
    return {
        FallbackBehavior: output.FallbackBehavior !== undefined && output.FallbackBehavior !== null ? output.FallbackBehavior : undefined,
        HeaderName: output.HeaderName !== undefined && output.HeaderName !== null ? output.HeaderName : undefined,
        Position: output.Position !== undefined && output.Position !== null ? output.Position : undefined,
    };
};
const deserializeAws_json1_1IPSetReferenceStatement = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        IPSetForwardedIPConfig: output.IPSetForwardedIPConfig !== undefined && output.IPSetForwardedIPConfig !== null
            ? deserializeAws_json1_1IPSetForwardedIPConfig(output.IPSetForwardedIPConfig, context)
            : undefined,
    };
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
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1JsonBody = (output, context) => {
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
const deserializeAws_json1_1JsonMatchPattern = (output, context) => {
    return {
        All: output.All !== undefined && output.All !== null ? deserializeAws_json1_1All(output.All, context) : undefined,
        IncludedPaths: output.IncludedPaths !== undefined && output.IncludedPaths !== null
            ? deserializeAws_json1_1JsonPointerPaths(output.IncludedPaths, context)
            : undefined,
    };
};
const deserializeAws_json1_1JsonPointerPaths = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Label = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1LabelMatchStatement = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Scope: output.Scope !== undefined && output.Scope !== null ? output.Scope : undefined,
    };
};
const deserializeAws_json1_1LabelNameCondition = (output, context) => {
    return {
        LabelName: output.LabelName !== undefined && output.LabelName !== null ? output.LabelName : undefined,
    };
};
const deserializeAws_json1_1Labels = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Label(entry, context);
    });
};
const deserializeAws_json1_1LabelSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LabelSummary(entry, context);
    });
};
const deserializeAws_json1_1LabelSummary = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ListAvailableManagedRuleGroupsResponse = (output, context) => {
    return {
        ManagedRuleGroups: output.ManagedRuleGroups !== undefined && output.ManagedRuleGroups !== null
            ? deserializeAws_json1_1ManagedRuleGroupSummaries(output.ManagedRuleGroups, context)
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
const deserializeAws_json1_1LoggingFilter = (output, context) => {
    return {
        DefaultBehavior: output.DefaultBehavior !== undefined && output.DefaultBehavior !== null ? output.DefaultBehavior : undefined,
        Filters: output.Filters !== undefined && output.Filters !== null
            ? deserializeAws_json1_1Filters(output.Filters, context)
            : undefined,
    };
};
const deserializeAws_json1_1ManagedRuleGroupStatement = (output, context) => {
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
const deserializeAws_json1_1ManagedRuleGroupSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ManagedRuleGroupSummary(entry, context);
    });
};
const deserializeAws_json1_1ManagedRuleGroupSummary = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        VendorName: output.VendorName !== undefined && output.VendorName !== null ? output.VendorName : undefined,
    };
};
const deserializeAws_json1_1Method = (output, context) => {
    return {};
};
const deserializeAws_json1_1NoneAction = (output, context) => {
    return {};
};
const deserializeAws_json1_1NotStatement = (output, context) => {
    return {
        Statement: output.Statement !== undefined && output.Statement !== null
            ? deserializeAws_json1_1Statement(output.Statement, context)
            : undefined,
    };
};
const deserializeAws_json1_1OrStatement = (output, context) => {
    return {
        Statements: output.Statements !== undefined && output.Statements !== null
            ? deserializeAws_json1_1Statements(output.Statements, context)
            : undefined,
    };
};
const deserializeAws_json1_1OverrideAction = (output, context) => {
    return {
        Count: output.Count !== undefined && output.Count !== null
            ? deserializeAws_json1_1CountAction(output.Count, context)
            : undefined,
        None: output.None !== undefined && output.None !== null
            ? deserializeAws_json1_1NoneAction(output.None, context)
            : undefined,
    };
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
const deserializeAws_json1_1QueryString = (output, context) => {
    return {};
};
const deserializeAws_json1_1RateBasedStatement = (output, context) => {
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
const deserializeAws_json1_1RateBasedStatementManagedKeysIPSet = (output, context) => {
    return {
        Addresses: output.Addresses !== undefined && output.Addresses !== null
            ? deserializeAws_json1_1IPAddresses(output.Addresses, context)
            : undefined,
        IPAddressVersion: output.IPAddressVersion !== undefined && output.IPAddressVersion !== null ? output.IPAddressVersion : undefined,
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
const deserializeAws_json1_1Regex = (output, context) => {
    return {
        RegexString: output.RegexString !== undefined && output.RegexString !== null ? output.RegexString : undefined,
    };
};
const deserializeAws_json1_1RegexPatternSet = (output, context) => {
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
const deserializeAws_json1_1RegexPatternSetReferenceStatement = (output, context) => {
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
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1RegularExpressionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Regex(entry, context);
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
const deserializeAws_json1_1RuleAction = (output, context) => {
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
const deserializeAws_json1_1RuleGroup = (output, context) => {
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
const deserializeAws_json1_1RuleGroupReferenceStatement = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        ExcludedRules: output.ExcludedRules !== undefined && output.ExcludedRules !== null
            ? deserializeAws_json1_1ExcludedRules(output.ExcludedRules, context)
            : undefined,
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
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1Rules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Rule(entry, context);
    });
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
        Action: output.Action !== undefined && output.Action !== null
            ? deserializeAws_json1_1RuleAction(output.Action, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1SampledHTTPRequest = (output, context) => {
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
const deserializeAws_json1_1SingleHeader = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1SingleQueryArgument = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1SizeConstraintStatement = (output, context) => {
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
const deserializeAws_json1_1SqliMatchStatement = (output, context) => {
    return {
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        TextTransformations: output.TextTransformations !== undefined && output.TextTransformations !== null
            ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
            : undefined,
    };
};
const deserializeAws_json1_1Statement = (output, context) => {
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
const deserializeAws_json1_1Statements = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Statement(entry, context);
    });
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
const deserializeAws_json1_1TextTransformation = (output, context) => {
    return {
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1TextTransformations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TextTransformation(entry, context);
    });
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
const deserializeAws_json1_1UpdateIPSetResponse = (output, context) => {
    return {
        NextLockToken: output.NextLockToken !== undefined && output.NextLockToken !== null ? output.NextLockToken : undefined,
    };
};
const deserializeAws_json1_1UpdateRegexPatternSetResponse = (output, context) => {
    return {
        NextLockToken: output.NextLockToken !== undefined && output.NextLockToken !== null ? output.NextLockToken : undefined,
    };
};
const deserializeAws_json1_1UpdateRuleGroupResponse = (output, context) => {
    return {
        NextLockToken: output.NextLockToken !== undefined && output.NextLockToken !== null ? output.NextLockToken : undefined,
    };
};
const deserializeAws_json1_1UpdateWebACLResponse = (output, context) => {
    return {
        NextLockToken: output.NextLockToken !== undefined && output.NextLockToken !== null ? output.NextLockToken : undefined,
    };
};
const deserializeAws_json1_1UriPath = (output, context) => {
    return {};
};
const deserializeAws_json1_1VisibilityConfig = (output, context) => {
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
const deserializeAws_json1_1WAFAssociatedItemException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFDuplicateItemException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFInternalErrorException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFInvalidOperationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFInvalidParameterException = (output, context) => {
    return {
        Field: output.Field !== undefined && output.Field !== null ? output.Field : undefined,
        Parameter: output.Parameter !== undefined && output.Parameter !== null ? output.Parameter : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFInvalidPermissionPolicyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFInvalidResourceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFLimitsExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFNonexistentItemException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFOptimisticLockException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFServiceLinkedRoleErrorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WAFSubscriptionNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFTagOperationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFTagOperationInternalErrorException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WAFUnavailableEntityException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1WebACL = (output, context) => {
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
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LockToken: output.LockToken !== undefined && output.LockToken !== null ? output.LockToken : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1XssMatchStatement = (output, context) => {
    return {
        FieldToMatch: output.FieldToMatch !== undefined && output.FieldToMatch !== null
            ? deserializeAws_json1_1FieldToMatch(output.FieldToMatch, context)
            : undefined,
        TextTransformations: output.TextTransformations !== undefined && output.TextTransformations !== null
            ? deserializeAws_json1_1TextTransformations(output.TextTransformations, context)
            : undefined,
    };
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