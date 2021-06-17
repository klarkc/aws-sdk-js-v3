"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1PutResolverQueryLogConfigPolicyCommand = exports.serializeAws_json1_1PutFirewallRuleGroupPolicyCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListResolverRulesCommand = exports.serializeAws_json1_1ListResolverRuleAssociationsCommand = exports.serializeAws_json1_1ListResolverQueryLogConfigsCommand = exports.serializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand = exports.serializeAws_json1_1ListResolverEndpointsCommand = exports.serializeAws_json1_1ListResolverEndpointIpAddressesCommand = exports.serializeAws_json1_1ListResolverDnssecConfigsCommand = exports.serializeAws_json1_1ListFirewallRulesCommand = exports.serializeAws_json1_1ListFirewallRuleGroupsCommand = exports.serializeAws_json1_1ListFirewallRuleGroupAssociationsCommand = exports.serializeAws_json1_1ListFirewallDomainsCommand = exports.serializeAws_json1_1ListFirewallDomainListsCommand = exports.serializeAws_json1_1ListFirewallConfigsCommand = exports.serializeAws_json1_1ImportFirewallDomainsCommand = exports.serializeAws_json1_1GetResolverRulePolicyCommand = exports.serializeAws_json1_1GetResolverRuleAssociationCommand = exports.serializeAws_json1_1GetResolverRuleCommand = exports.serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand = exports.serializeAws_json1_1GetResolverQueryLogConfigAssociationCommand = exports.serializeAws_json1_1GetResolverQueryLogConfigCommand = exports.serializeAws_json1_1GetResolverEndpointCommand = exports.serializeAws_json1_1GetResolverDnssecConfigCommand = exports.serializeAws_json1_1GetFirewallRuleGroupPolicyCommand = exports.serializeAws_json1_1GetFirewallRuleGroupAssociationCommand = exports.serializeAws_json1_1GetFirewallRuleGroupCommand = exports.serializeAws_json1_1GetFirewallDomainListCommand = exports.serializeAws_json1_1GetFirewallConfigCommand = exports.serializeAws_json1_1DisassociateResolverRuleCommand = exports.serializeAws_json1_1DisassociateResolverQueryLogConfigCommand = exports.serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand = exports.serializeAws_json1_1DisassociateFirewallRuleGroupCommand = exports.serializeAws_json1_1DeleteResolverRuleCommand = exports.serializeAws_json1_1DeleteResolverQueryLogConfigCommand = exports.serializeAws_json1_1DeleteResolverEndpointCommand = exports.serializeAws_json1_1DeleteFirewallRuleGroupCommand = exports.serializeAws_json1_1DeleteFirewallRuleCommand = exports.serializeAws_json1_1DeleteFirewallDomainListCommand = exports.serializeAws_json1_1CreateResolverRuleCommand = exports.serializeAws_json1_1CreateResolverQueryLogConfigCommand = exports.serializeAws_json1_1CreateResolverEndpointCommand = exports.serializeAws_json1_1CreateFirewallRuleGroupCommand = exports.serializeAws_json1_1CreateFirewallRuleCommand = exports.serializeAws_json1_1CreateFirewallDomainListCommand = exports.serializeAws_json1_1AssociateResolverRuleCommand = exports.serializeAws_json1_1AssociateResolverQueryLogConfigCommand = exports.serializeAws_json1_1AssociateResolverEndpointIpAddressCommand = exports.serializeAws_json1_1AssociateFirewallRuleGroupCommand = void 0;
exports.deserializeAws_json1_1ListFirewallRulesCommand = exports.deserializeAws_json1_1ListFirewallRuleGroupsCommand = exports.deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommand = exports.deserializeAws_json1_1ListFirewallDomainsCommand = exports.deserializeAws_json1_1ListFirewallDomainListsCommand = exports.deserializeAws_json1_1ListFirewallConfigsCommand = exports.deserializeAws_json1_1ImportFirewallDomainsCommand = exports.deserializeAws_json1_1GetResolverRulePolicyCommand = exports.deserializeAws_json1_1GetResolverRuleAssociationCommand = exports.deserializeAws_json1_1GetResolverRuleCommand = exports.deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand = exports.deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommand = exports.deserializeAws_json1_1GetResolverQueryLogConfigCommand = exports.deserializeAws_json1_1GetResolverEndpointCommand = exports.deserializeAws_json1_1GetResolverDnssecConfigCommand = exports.deserializeAws_json1_1GetFirewallRuleGroupPolicyCommand = exports.deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand = exports.deserializeAws_json1_1GetFirewallRuleGroupCommand = exports.deserializeAws_json1_1GetFirewallDomainListCommand = exports.deserializeAws_json1_1GetFirewallConfigCommand = exports.deserializeAws_json1_1DisassociateResolverRuleCommand = exports.deserializeAws_json1_1DisassociateResolverQueryLogConfigCommand = exports.deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand = exports.deserializeAws_json1_1DisassociateFirewallRuleGroupCommand = exports.deserializeAws_json1_1DeleteResolverRuleCommand = exports.deserializeAws_json1_1DeleteResolverQueryLogConfigCommand = exports.deserializeAws_json1_1DeleteResolverEndpointCommand = exports.deserializeAws_json1_1DeleteFirewallRuleGroupCommand = exports.deserializeAws_json1_1DeleteFirewallRuleCommand = exports.deserializeAws_json1_1DeleteFirewallDomainListCommand = exports.deserializeAws_json1_1CreateResolverRuleCommand = exports.deserializeAws_json1_1CreateResolverQueryLogConfigCommand = exports.deserializeAws_json1_1CreateResolverEndpointCommand = exports.deserializeAws_json1_1CreateFirewallRuleGroupCommand = exports.deserializeAws_json1_1CreateFirewallRuleCommand = exports.deserializeAws_json1_1CreateFirewallDomainListCommand = exports.deserializeAws_json1_1AssociateResolverRuleCommand = exports.deserializeAws_json1_1AssociateResolverQueryLogConfigCommand = exports.deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand = exports.deserializeAws_json1_1AssociateFirewallRuleGroupCommand = exports.serializeAws_json1_1UpdateResolverRuleCommand = exports.serializeAws_json1_1UpdateResolverEndpointCommand = exports.serializeAws_json1_1UpdateResolverDnssecConfigCommand = exports.serializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand = exports.serializeAws_json1_1UpdateFirewallRuleCommand = exports.serializeAws_json1_1UpdateFirewallDomainsCommand = exports.serializeAws_json1_1UpdateFirewallConfigCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1PutResolverRulePolicyCommand = void 0;
exports.deserializeAws_json1_1UpdateResolverRuleCommand = exports.deserializeAws_json1_1UpdateResolverEndpointCommand = exports.deserializeAws_json1_1UpdateResolverDnssecConfigCommand = exports.deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand = exports.deserializeAws_json1_1UpdateFirewallRuleCommand = exports.deserializeAws_json1_1UpdateFirewallDomainsCommand = exports.deserializeAws_json1_1UpdateFirewallConfigCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1PutResolverRulePolicyCommand = exports.deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommand = exports.deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListResolverRulesCommand = exports.deserializeAws_json1_1ListResolverRuleAssociationsCommand = exports.deserializeAws_json1_1ListResolverQueryLogConfigsCommand = exports.deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand = exports.deserializeAws_json1_1ListResolverEndpointsCommand = exports.deserializeAws_json1_1ListResolverEndpointIpAddressesCommand = exports.deserializeAws_json1_1ListResolverDnssecConfigsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1AssociateFirewallRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.AssociateFirewallRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateFirewallRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateFirewallRuleGroupCommand = serializeAws_json1_1AssociateFirewallRuleGroupCommand;
const serializeAws_json1_1AssociateResolverEndpointIpAddressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.AssociateResolverEndpointIpAddress",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateResolverEndpointIpAddressRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateResolverEndpointIpAddressCommand = serializeAws_json1_1AssociateResolverEndpointIpAddressCommand;
const serializeAws_json1_1AssociateResolverQueryLogConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.AssociateResolverQueryLogConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateResolverQueryLogConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateResolverQueryLogConfigCommand = serializeAws_json1_1AssociateResolverQueryLogConfigCommand;
const serializeAws_json1_1AssociateResolverRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.AssociateResolverRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateResolverRuleCommand = serializeAws_json1_1AssociateResolverRuleCommand;
const serializeAws_json1_1CreateFirewallDomainListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.CreateFirewallDomainList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFirewallDomainListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFirewallDomainListCommand = serializeAws_json1_1CreateFirewallDomainListCommand;
const serializeAws_json1_1CreateFirewallRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.CreateFirewallRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFirewallRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFirewallRuleCommand = serializeAws_json1_1CreateFirewallRuleCommand;
const serializeAws_json1_1CreateFirewallRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.CreateFirewallRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFirewallRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFirewallRuleGroupCommand = serializeAws_json1_1CreateFirewallRuleGroupCommand;
const serializeAws_json1_1CreateResolverEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.CreateResolverEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResolverEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateResolverEndpointCommand = serializeAws_json1_1CreateResolverEndpointCommand;
const serializeAws_json1_1CreateResolverQueryLogConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.CreateResolverQueryLogConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResolverQueryLogConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateResolverQueryLogConfigCommand = serializeAws_json1_1CreateResolverQueryLogConfigCommand;
const serializeAws_json1_1CreateResolverRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.CreateResolverRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateResolverRuleCommand = serializeAws_json1_1CreateResolverRuleCommand;
const serializeAws_json1_1DeleteFirewallDomainListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.DeleteFirewallDomainList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFirewallDomainListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFirewallDomainListCommand = serializeAws_json1_1DeleteFirewallDomainListCommand;
const serializeAws_json1_1DeleteFirewallRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.DeleteFirewallRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFirewallRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFirewallRuleCommand = serializeAws_json1_1DeleteFirewallRuleCommand;
const serializeAws_json1_1DeleteFirewallRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.DeleteFirewallRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFirewallRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFirewallRuleGroupCommand = serializeAws_json1_1DeleteFirewallRuleGroupCommand;
const serializeAws_json1_1DeleteResolverEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.DeleteResolverEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResolverEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResolverEndpointCommand = serializeAws_json1_1DeleteResolverEndpointCommand;
const serializeAws_json1_1DeleteResolverQueryLogConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.DeleteResolverQueryLogConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResolverQueryLogConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResolverQueryLogConfigCommand = serializeAws_json1_1DeleteResolverQueryLogConfigCommand;
const serializeAws_json1_1DeleteResolverRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.DeleteResolverRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResolverRuleCommand = serializeAws_json1_1DeleteResolverRuleCommand;
const serializeAws_json1_1DisassociateFirewallRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.DisassociateFirewallRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateFirewallRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateFirewallRuleGroupCommand = serializeAws_json1_1DisassociateFirewallRuleGroupCommand;
const serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.DisassociateResolverEndpointIpAddress",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateResolverEndpointIpAddressRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand = serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand;
const serializeAws_json1_1DisassociateResolverQueryLogConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.DisassociateResolverQueryLogConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateResolverQueryLogConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateResolverQueryLogConfigCommand = serializeAws_json1_1DisassociateResolverQueryLogConfigCommand;
const serializeAws_json1_1DisassociateResolverRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.DisassociateResolverRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateResolverRuleCommand = serializeAws_json1_1DisassociateResolverRuleCommand;
const serializeAws_json1_1GetFirewallConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetFirewallConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFirewallConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetFirewallConfigCommand = serializeAws_json1_1GetFirewallConfigCommand;
const serializeAws_json1_1GetFirewallDomainListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetFirewallDomainList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFirewallDomainListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetFirewallDomainListCommand = serializeAws_json1_1GetFirewallDomainListCommand;
const serializeAws_json1_1GetFirewallRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetFirewallRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFirewallRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetFirewallRuleGroupCommand = serializeAws_json1_1GetFirewallRuleGroupCommand;
const serializeAws_json1_1GetFirewallRuleGroupAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetFirewallRuleGroupAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFirewallRuleGroupAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetFirewallRuleGroupAssociationCommand = serializeAws_json1_1GetFirewallRuleGroupAssociationCommand;
const serializeAws_json1_1GetFirewallRuleGroupPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetFirewallRuleGroupPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFirewallRuleGroupPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetFirewallRuleGroupPolicyCommand = serializeAws_json1_1GetFirewallRuleGroupPolicyCommand;
const serializeAws_json1_1GetResolverDnssecConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetResolverDnssecConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverDnssecConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResolverDnssecConfigCommand = serializeAws_json1_1GetResolverDnssecConfigCommand;
const serializeAws_json1_1GetResolverEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetResolverEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResolverEndpointCommand = serializeAws_json1_1GetResolverEndpointCommand;
const serializeAws_json1_1GetResolverQueryLogConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetResolverQueryLogConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverQueryLogConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResolverQueryLogConfigCommand = serializeAws_json1_1GetResolverQueryLogConfigCommand;
const serializeAws_json1_1GetResolverQueryLogConfigAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetResolverQueryLogConfigAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverQueryLogConfigAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResolverQueryLogConfigAssociationCommand = serializeAws_json1_1GetResolverQueryLogConfigAssociationCommand;
const serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetResolverQueryLogConfigPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverQueryLogConfigPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand = serializeAws_json1_1GetResolverQueryLogConfigPolicyCommand;
const serializeAws_json1_1GetResolverRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetResolverRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResolverRuleCommand = serializeAws_json1_1GetResolverRuleCommand;
const serializeAws_json1_1GetResolverRuleAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetResolverRuleAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverRuleAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResolverRuleAssociationCommand = serializeAws_json1_1GetResolverRuleAssociationCommand;
const serializeAws_json1_1GetResolverRulePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.GetResolverRulePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResolverRulePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetResolverRulePolicyCommand = serializeAws_json1_1GetResolverRulePolicyCommand;
const serializeAws_json1_1ImportFirewallDomainsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ImportFirewallDomains",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportFirewallDomainsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportFirewallDomainsCommand = serializeAws_json1_1ImportFirewallDomainsCommand;
const serializeAws_json1_1ListFirewallConfigsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListFirewallConfigs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFirewallConfigsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFirewallConfigsCommand = serializeAws_json1_1ListFirewallConfigsCommand;
const serializeAws_json1_1ListFirewallDomainListsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListFirewallDomainLists",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFirewallDomainListsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFirewallDomainListsCommand = serializeAws_json1_1ListFirewallDomainListsCommand;
const serializeAws_json1_1ListFirewallDomainsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListFirewallDomains",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFirewallDomainsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFirewallDomainsCommand = serializeAws_json1_1ListFirewallDomainsCommand;
const serializeAws_json1_1ListFirewallRuleGroupAssociationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListFirewallRuleGroupAssociations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFirewallRuleGroupAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFirewallRuleGroupAssociationsCommand = serializeAws_json1_1ListFirewallRuleGroupAssociationsCommand;
const serializeAws_json1_1ListFirewallRuleGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListFirewallRuleGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFirewallRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFirewallRuleGroupsCommand = serializeAws_json1_1ListFirewallRuleGroupsCommand;
const serializeAws_json1_1ListFirewallRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListFirewallRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFirewallRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFirewallRulesCommand = serializeAws_json1_1ListFirewallRulesCommand;
const serializeAws_json1_1ListResolverDnssecConfigsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListResolverDnssecConfigs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverDnssecConfigsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResolverDnssecConfigsCommand = serializeAws_json1_1ListResolverDnssecConfigsCommand;
const serializeAws_json1_1ListResolverEndpointIpAddressesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListResolverEndpointIpAddresses",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverEndpointIpAddressesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResolverEndpointIpAddressesCommand = serializeAws_json1_1ListResolverEndpointIpAddressesCommand;
const serializeAws_json1_1ListResolverEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListResolverEndpoints",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResolverEndpointsCommand = serializeAws_json1_1ListResolverEndpointsCommand;
const serializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListResolverQueryLogConfigAssociations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverQueryLogConfigAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand = serializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand;
const serializeAws_json1_1ListResolverQueryLogConfigsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListResolverQueryLogConfigs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverQueryLogConfigsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResolverQueryLogConfigsCommand = serializeAws_json1_1ListResolverQueryLogConfigsCommand;
const serializeAws_json1_1ListResolverRuleAssociationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListResolverRuleAssociations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverRuleAssociationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResolverRuleAssociationsCommand = serializeAws_json1_1ListResolverRuleAssociationsCommand;
const serializeAws_json1_1ListResolverRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListResolverRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResolverRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResolverRulesCommand = serializeAws_json1_1ListResolverRulesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PutFirewallRuleGroupPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.PutFirewallRuleGroupPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutFirewallRuleGroupPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutFirewallRuleGroupPolicyCommand = serializeAws_json1_1PutFirewallRuleGroupPolicyCommand;
const serializeAws_json1_1PutResolverQueryLogConfigPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.PutResolverQueryLogConfigPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResolverQueryLogConfigPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutResolverQueryLogConfigPolicyCommand = serializeAws_json1_1PutResolverQueryLogConfigPolicyCommand;
const serializeAws_json1_1PutResolverRulePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.PutResolverRulePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResolverRulePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutResolverRulePolicyCommand = serializeAws_json1_1PutResolverRulePolicyCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateFirewallConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.UpdateFirewallConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFirewallConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFirewallConfigCommand = serializeAws_json1_1UpdateFirewallConfigCommand;
const serializeAws_json1_1UpdateFirewallDomainsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.UpdateFirewallDomains",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFirewallDomainsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFirewallDomainsCommand = serializeAws_json1_1UpdateFirewallDomainsCommand;
const serializeAws_json1_1UpdateFirewallRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.UpdateFirewallRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFirewallRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFirewallRuleCommand = serializeAws_json1_1UpdateFirewallRuleCommand;
const serializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.UpdateFirewallRuleGroupAssociation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFirewallRuleGroupAssociationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand = serializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand;
const serializeAws_json1_1UpdateResolverDnssecConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.UpdateResolverDnssecConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResolverDnssecConfigRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateResolverDnssecConfigCommand = serializeAws_json1_1UpdateResolverDnssecConfigCommand;
const serializeAws_json1_1UpdateResolverEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.UpdateResolverEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResolverEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateResolverEndpointCommand = serializeAws_json1_1UpdateResolverEndpointCommand;
const serializeAws_json1_1UpdateResolverRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Resolver.UpdateResolverRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResolverRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateResolverRuleCommand = serializeAws_json1_1UpdateResolverRuleCommand;
const deserializeAws_json1_1AssociateFirewallRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateFirewallRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateFirewallRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateFirewallRuleGroupCommand = deserializeAws_json1_1AssociateFirewallRuleGroupCommand;
const deserializeAws_json1_1AssociateFirewallRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.route53resolver#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateResolverEndpointIpAddressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateResolverEndpointIpAddressResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand = deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand;
const deserializeAws_json1_1AssociateResolverEndpointIpAddressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AssociateResolverQueryLogConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateResolverQueryLogConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateResolverQueryLogConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateResolverQueryLogConfigCommand = deserializeAws_json1_1AssociateResolverQueryLogConfigCommand;
const deserializeAws_json1_1AssociateResolverQueryLogConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AssociateResolverRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateResolverRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateResolverRuleCommand = deserializeAws_json1_1AssociateResolverRuleCommand;
const deserializeAws_json1_1AssociateResolverRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.route53resolver#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateFirewallDomainListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateFirewallDomainListCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFirewallDomainListResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFirewallDomainListCommand = deserializeAws_json1_1CreateFirewallDomainListCommand;
const deserializeAws_json1_1CreateFirewallDomainListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateFirewallRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateFirewallRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFirewallRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFirewallRuleCommand = deserializeAws_json1_1CreateFirewallRuleCommand;
const deserializeAws_json1_1CreateFirewallRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateFirewallRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateFirewallRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFirewallRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFirewallRuleGroupCommand = deserializeAws_json1_1CreateFirewallRuleGroupCommand;
const deserializeAws_json1_1CreateFirewallRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateResolverEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateResolverEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResolverEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateResolverEndpointCommand = deserializeAws_json1_1CreateResolverEndpointCommand;
const deserializeAws_json1_1CreateResolverEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateResolverQueryLogConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateResolverQueryLogConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResolverQueryLogConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateResolverQueryLogConfigCommand = deserializeAws_json1_1CreateResolverQueryLogConfigCommand;
const deserializeAws_json1_1CreateResolverQueryLogConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateResolverRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResolverRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateResolverRuleCommand = deserializeAws_json1_1CreateResolverRuleCommand;
const deserializeAws_json1_1CreateResolverRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.route53resolver#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteFirewallDomainListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFirewallDomainListCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFirewallDomainListResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFirewallDomainListCommand = deserializeAws_json1_1DeleteFirewallDomainListCommand;
const deserializeAws_json1_1DeleteFirewallDomainListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.route53resolver#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteFirewallRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFirewallRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFirewallRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFirewallRuleCommand = deserializeAws_json1_1DeleteFirewallRuleCommand;
const deserializeAws_json1_1DeleteFirewallRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteFirewallRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFirewallRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFirewallRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFirewallRuleGroupCommand = deserializeAws_json1_1DeleteFirewallRuleGroupCommand;
const deserializeAws_json1_1DeleteFirewallRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.route53resolver#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteResolverEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResolverEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResolverEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResolverEndpointCommand = deserializeAws_json1_1DeleteResolverEndpointCommand;
const deserializeAws_json1_1DeleteResolverEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteResolverQueryLogConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResolverQueryLogConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResolverQueryLogConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResolverQueryLogConfigCommand = deserializeAws_json1_1DeleteResolverQueryLogConfigCommand;
const deserializeAws_json1_1DeleteResolverQueryLogConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteResolverRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResolverRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResolverRuleCommand = deserializeAws_json1_1DeleteResolverRuleCommand;
const deserializeAws_json1_1DeleteResolverRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.route53resolver#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateFirewallRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateFirewallRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateFirewallRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateFirewallRuleGroupCommand = deserializeAws_json1_1DisassociateFirewallRuleGroupCommand;
const deserializeAws_json1_1DisassociateFirewallRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.route53resolver#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateResolverEndpointIpAddressResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand = deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand;
const deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.route53resolver#ResourceExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateResolverQueryLogConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateResolverQueryLogConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateResolverQueryLogConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateResolverQueryLogConfigCommand = deserializeAws_json1_1DisassociateResolverQueryLogConfigCommand;
const deserializeAws_json1_1DisassociateResolverQueryLogConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateResolverRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateResolverRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateResolverRuleCommand = deserializeAws_json1_1DisassociateResolverRuleCommand;
const deserializeAws_json1_1DisassociateResolverRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetFirewallConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetFirewallConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFirewallConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetFirewallConfigCommand = deserializeAws_json1_1GetFirewallConfigCommand;
const deserializeAws_json1_1GetFirewallConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetFirewallDomainListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetFirewallDomainListCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFirewallDomainListResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetFirewallDomainListCommand = deserializeAws_json1_1GetFirewallDomainListCommand;
const deserializeAws_json1_1GetFirewallDomainListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetFirewallRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetFirewallRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFirewallRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetFirewallRuleGroupCommand = deserializeAws_json1_1GetFirewallRuleGroupCommand;
const deserializeAws_json1_1GetFirewallRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetFirewallRuleGroupAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFirewallRuleGroupAssociationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand = deserializeAws_json1_1GetFirewallRuleGroupAssociationCommand;
const deserializeAws_json1_1GetFirewallRuleGroupAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetFirewallRuleGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetFirewallRuleGroupPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFirewallRuleGroupPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetFirewallRuleGroupPolicyCommand = deserializeAws_json1_1GetFirewallRuleGroupPolicyCommand;
const deserializeAws_json1_1GetFirewallRuleGroupPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResolverDnssecConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResolverDnssecConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverDnssecConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResolverDnssecConfigCommand = deserializeAws_json1_1GetResolverDnssecConfigCommand;
const deserializeAws_json1_1GetResolverDnssecConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResolverEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResolverEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResolverEndpointCommand = deserializeAws_json1_1GetResolverEndpointCommand;
const deserializeAws_json1_1GetResolverEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResolverQueryLogConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResolverQueryLogConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverQueryLogConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResolverQueryLogConfigCommand = deserializeAws_json1_1GetResolverQueryLogConfigCommand;
const deserializeAws_json1_1GetResolverQueryLogConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverQueryLogConfigAssociationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommand = deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommand;
const deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverQueryLogConfigPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand = deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommand;
const deserializeAws_json1_1GetResolverQueryLogConfigPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.route53resolver#UnknownResourceException":
            response = {
                ...(await deserializeAws_json1_1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResolverRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResolverRuleCommand = deserializeAws_json1_1GetResolverRuleCommand;
const deserializeAws_json1_1GetResolverRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResolverRuleAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResolverRuleAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverRuleAssociationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResolverRuleAssociationCommand = deserializeAws_json1_1GetResolverRuleAssociationCommand;
const deserializeAws_json1_1GetResolverRuleAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetResolverRulePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetResolverRulePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResolverRulePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetResolverRulePolicyCommand = deserializeAws_json1_1GetResolverRulePolicyCommand;
const deserializeAws_json1_1GetResolverRulePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.route53resolver#UnknownResourceException":
            response = {
                ...(await deserializeAws_json1_1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ImportFirewallDomainsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportFirewallDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportFirewallDomainsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportFirewallDomainsCommand = deserializeAws_json1_1ImportFirewallDomainsCommand;
const deserializeAws_json1_1ImportFirewallDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.route53resolver#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListFirewallConfigsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFirewallConfigsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFirewallConfigsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFirewallConfigsCommand = deserializeAws_json1_1ListFirewallConfigsCommand;
const deserializeAws_json1_1ListFirewallConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListFirewallDomainListsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFirewallDomainListsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFirewallDomainListsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFirewallDomainListsCommand = deserializeAws_json1_1ListFirewallDomainListsCommand;
const deserializeAws_json1_1ListFirewallDomainListsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListFirewallDomainsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFirewallDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFirewallDomainsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFirewallDomainsCommand = deserializeAws_json1_1ListFirewallDomainsCommand;
const deserializeAws_json1_1ListFirewallDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFirewallRuleGroupAssociationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommand = deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommand;
const deserializeAws_json1_1ListFirewallRuleGroupAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListFirewallRuleGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFirewallRuleGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFirewallRuleGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFirewallRuleGroupsCommand = deserializeAws_json1_1ListFirewallRuleGroupsCommand;
const deserializeAws_json1_1ListFirewallRuleGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListFirewallRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFirewallRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFirewallRulesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFirewallRulesCommand = deserializeAws_json1_1ListFirewallRulesCommand;
const deserializeAws_json1_1ListFirewallRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResolverDnssecConfigsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResolverDnssecConfigsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverDnssecConfigsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResolverDnssecConfigsCommand = deserializeAws_json1_1ListResolverDnssecConfigsCommand;
const deserializeAws_json1_1ListResolverDnssecConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResolverEndpointIpAddressesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResolverEndpointIpAddressesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverEndpointIpAddressesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResolverEndpointIpAddressesCommand = deserializeAws_json1_1ListResolverEndpointIpAddressesCommand;
const deserializeAws_json1_1ListResolverEndpointIpAddressesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResolverEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResolverEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverEndpointsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResolverEndpointsCommand = deserializeAws_json1_1ListResolverEndpointsCommand;
const deserializeAws_json1_1ListResolverEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverQueryLogConfigAssociationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand = deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand;
const deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResolverQueryLogConfigsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResolverQueryLogConfigsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverQueryLogConfigsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResolverQueryLogConfigsCommand = deserializeAws_json1_1ListResolverQueryLogConfigsCommand;
const deserializeAws_json1_1ListResolverQueryLogConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResolverRuleAssociationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResolverRuleAssociationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverRuleAssociationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResolverRuleAssociationsCommand = deserializeAws_json1_1ListResolverRuleAssociationsCommand;
const deserializeAws_json1_1ListResolverRuleAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResolverRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResolverRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResolverRulesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResolverRulesCommand = deserializeAws_json1_1ListResolverRulesCommand;
const deserializeAws_json1_1ListResolverRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.route53resolver#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutFirewallRuleGroupPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutFirewallRuleGroupPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand = deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand;
const deserializeAws_json1_1PutFirewallRuleGroupPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResolverQueryLogConfigPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommand = deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommand;
const deserializeAws_json1_1PutResolverQueryLogConfigPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPolicyDocument":
        case "com.amazonaws.route53resolver#InvalidPolicyDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidPolicyDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.route53resolver#UnknownResourceException":
            response = {
                ...(await deserializeAws_json1_1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutResolverRulePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutResolverRulePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResolverRulePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutResolverRulePolicyCommand = deserializeAws_json1_1PutResolverRulePolicyCommand;
const deserializeAws_json1_1PutResolverRulePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPolicyDocument":
        case "com.amazonaws.route53resolver#InvalidPolicyDocument":
            response = {
                ...(await deserializeAws_json1_1InvalidPolicyDocumentResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.route53resolver#UnknownResourceException":
            response = {
                ...(await deserializeAws_json1_1UnknownResourceExceptionResponse(parsedOutput, context)),
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
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagException":
        case "com.amazonaws.route53resolver#InvalidTagException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateFirewallConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateFirewallConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFirewallConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFirewallConfigCommand = deserializeAws_json1_1UpdateFirewallConfigCommand;
const deserializeAws_json1_1UpdateFirewallConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateFirewallDomainsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateFirewallDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFirewallDomainsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFirewallDomainsCommand = deserializeAws_json1_1UpdateFirewallDomainsCommand;
const deserializeAws_json1_1UpdateFirewallDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.route53resolver#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateFirewallRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateFirewallRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFirewallRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFirewallRuleCommand = deserializeAws_json1_1UpdateFirewallRuleCommand;
const deserializeAws_json1_1UpdateFirewallRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.route53resolver#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFirewallRuleGroupAssociationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand = deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommand;
const deserializeAws_json1_1UpdateFirewallRuleGroupAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.route53resolver#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.route53resolver#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateResolverDnssecConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateResolverDnssecConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResolverDnssecConfigResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateResolverDnssecConfigCommand = deserializeAws_json1_1UpdateResolverDnssecConfigCommand;
const deserializeAws_json1_1UpdateResolverDnssecConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.route53resolver#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateResolverEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateResolverEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResolverEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateResolverEndpointCommand = deserializeAws_json1_1UpdateResolverEndpointCommand;
const deserializeAws_json1_1UpdateResolverEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateResolverRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateResolverRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResolverRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateResolverRuleCommand = deserializeAws_json1_1UpdateResolverRuleCommand;
const deserializeAws_json1_1UpdateResolverRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceErrorException":
        case "com.amazonaws.route53resolver#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.route53resolver#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.route53resolver#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.route53resolver#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.route53resolver#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.route53resolver#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.route53resolver#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceErrorException(body, context);
    const contents = {
        name: "InternalServiceErrorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPolicyDocumentResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPolicyDocument(body, context);
    const contents = {
        name: "InvalidPolicyDocument",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagException(body, context);
    const contents = {
        name: "InvalidTagException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceExistsException(body, context);
    const contents = {
        name: "ResourceExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceUnavailableException(body, context);
    const contents = {
        name: "ResourceUnavailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnknownResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnknownResourceException(body, context);
    const contents = {
        name: "UnknownResourceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AssociateFirewallRuleGroupRequest = (input, context) => {
    var _a;
    return {
        CreatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FirewallRuleGroupId !== undefined &&
            input.FirewallRuleGroupId !== null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
        ...(input.MutationProtection !== undefined &&
            input.MutationProtection !== null && { MutationProtection: input.MutationProtection }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    };
};
const serializeAws_json1_1AssociateResolverEndpointIpAddressRequest = (input, context) => {
    return {
        ...(input.IpAddress !== undefined &&
            input.IpAddress !== null && { IpAddress: serializeAws_json1_1IpAddressUpdate(input.IpAddress, context) }),
        ...(input.ResolverEndpointId !== undefined &&
            input.ResolverEndpointId !== null && { ResolverEndpointId: input.ResolverEndpointId }),
    };
};
const serializeAws_json1_1AssociateResolverQueryLogConfigRequest = (input, context) => {
    return {
        ...(input.ResolverQueryLogConfigId !== undefined &&
            input.ResolverQueryLogConfigId !== null && { ResolverQueryLogConfigId: input.ResolverQueryLogConfigId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1AssociateResolverRuleRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ResolverRuleId !== undefined &&
            input.ResolverRuleId !== null && { ResolverRuleId: input.ResolverRuleId }),
        ...(input.VPCId !== undefined && input.VPCId !== null && { VPCId: input.VPCId }),
    };
};
const serializeAws_json1_1CreateFirewallDomainListRequest = (input, context) => {
    var _a;
    return {
        CreatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateFirewallRuleGroupRequest = (input, context) => {
    var _a;
    return {
        CreatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateFirewallRuleRequest = (input, context) => {
    var _a;
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.BlockOverrideDnsType !== undefined &&
            input.BlockOverrideDnsType !== null && { BlockOverrideDnsType: input.BlockOverrideDnsType }),
        ...(input.BlockOverrideDomain !== undefined &&
            input.BlockOverrideDomain !== null && { BlockOverrideDomain: input.BlockOverrideDomain }),
        ...(input.BlockOverrideTtl !== undefined &&
            input.BlockOverrideTtl !== null && { BlockOverrideTtl: input.BlockOverrideTtl }),
        ...(input.BlockResponse !== undefined && input.BlockResponse !== null && { BlockResponse: input.BlockResponse }),
        CreatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FirewallDomainListId !== undefined &&
            input.FirewallDomainListId !== null && { FirewallDomainListId: input.FirewallDomainListId }),
        ...(input.FirewallRuleGroupId !== undefined &&
            input.FirewallRuleGroupId !== null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    };
};
const serializeAws_json1_1CreateResolverEndpointRequest = (input, context) => {
    return {
        ...(input.CreatorRequestId !== undefined &&
            input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }),
        ...(input.Direction !== undefined && input.Direction !== null && { Direction: input.Direction }),
        ...(input.IpAddresses !== undefined &&
            input.IpAddresses !== null && {
            IpAddresses: serializeAws_json1_1IpAddressesRequest(input.IpAddresses, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateResolverQueryLogConfigRequest = (input, context) => {
    var _a;
    return {
        CreatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DestinationArn !== undefined &&
            input.DestinationArn !== null && { DestinationArn: input.DestinationArn }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateResolverRuleRequest = (input, context) => {
    return {
        ...(input.CreatorRequestId !== undefined &&
            input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ResolverEndpointId !== undefined &&
            input.ResolverEndpointId !== null && { ResolverEndpointId: input.ResolverEndpointId }),
        ...(input.RuleType !== undefined && input.RuleType !== null && { RuleType: input.RuleType }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.TargetIps !== undefined &&
            input.TargetIps !== null && { TargetIps: serializeAws_json1_1TargetList(input.TargetIps, context) }),
    };
};
const serializeAws_json1_1DeleteFirewallDomainListRequest = (input, context) => {
    return {
        ...(input.FirewallDomainListId !== undefined &&
            input.FirewallDomainListId !== null && { FirewallDomainListId: input.FirewallDomainListId }),
    };
};
const serializeAws_json1_1DeleteFirewallRuleGroupRequest = (input, context) => {
    return {
        ...(input.FirewallRuleGroupId !== undefined &&
            input.FirewallRuleGroupId !== null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
    };
};
const serializeAws_json1_1DeleteFirewallRuleRequest = (input, context) => {
    return {
        ...(input.FirewallDomainListId !== undefined &&
            input.FirewallDomainListId !== null && { FirewallDomainListId: input.FirewallDomainListId }),
        ...(input.FirewallRuleGroupId !== undefined &&
            input.FirewallRuleGroupId !== null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
    };
};
const serializeAws_json1_1DeleteResolverEndpointRequest = (input, context) => {
    return {
        ...(input.ResolverEndpointId !== undefined &&
            input.ResolverEndpointId !== null && { ResolverEndpointId: input.ResolverEndpointId }),
    };
};
const serializeAws_json1_1DeleteResolverQueryLogConfigRequest = (input, context) => {
    return {
        ...(input.ResolverQueryLogConfigId !== undefined &&
            input.ResolverQueryLogConfigId !== null && { ResolverQueryLogConfigId: input.ResolverQueryLogConfigId }),
    };
};
const serializeAws_json1_1DeleteResolverRuleRequest = (input, context) => {
    return {
        ...(input.ResolverRuleId !== undefined &&
            input.ResolverRuleId !== null && { ResolverRuleId: input.ResolverRuleId }),
    };
};
const serializeAws_json1_1DisassociateFirewallRuleGroupRequest = (input, context) => {
    return {
        ...(input.FirewallRuleGroupAssociationId !== undefined &&
            input.FirewallRuleGroupAssociationId !== null && {
            FirewallRuleGroupAssociationId: input.FirewallRuleGroupAssociationId,
        }),
    };
};
const serializeAws_json1_1DisassociateResolverEndpointIpAddressRequest = (input, context) => {
    return {
        ...(input.IpAddress !== undefined &&
            input.IpAddress !== null && { IpAddress: serializeAws_json1_1IpAddressUpdate(input.IpAddress, context) }),
        ...(input.ResolverEndpointId !== undefined &&
            input.ResolverEndpointId !== null && { ResolverEndpointId: input.ResolverEndpointId }),
    };
};
const serializeAws_json1_1DisassociateResolverQueryLogConfigRequest = (input, context) => {
    return {
        ...(input.ResolverQueryLogConfigId !== undefined &&
            input.ResolverQueryLogConfigId !== null && { ResolverQueryLogConfigId: input.ResolverQueryLogConfigId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1DisassociateResolverRuleRequest = (input, context) => {
    return {
        ...(input.ResolverRuleId !== undefined &&
            input.ResolverRuleId !== null && { ResolverRuleId: input.ResolverRuleId }),
        ...(input.VPCId !== undefined && input.VPCId !== null && { VPCId: input.VPCId }),
    };
};
const serializeAws_json1_1Filter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
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
const serializeAws_json1_1FilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1FirewallDomains = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetFirewallConfigRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1GetFirewallDomainListRequest = (input, context) => {
    return {
        ...(input.FirewallDomainListId !== undefined &&
            input.FirewallDomainListId !== null && { FirewallDomainListId: input.FirewallDomainListId }),
    };
};
const serializeAws_json1_1GetFirewallRuleGroupAssociationRequest = (input, context) => {
    return {
        ...(input.FirewallRuleGroupAssociationId !== undefined &&
            input.FirewallRuleGroupAssociationId !== null && {
            FirewallRuleGroupAssociationId: input.FirewallRuleGroupAssociationId,
        }),
    };
};
const serializeAws_json1_1GetFirewallRuleGroupPolicyRequest = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    };
};
const serializeAws_json1_1GetFirewallRuleGroupRequest = (input, context) => {
    return {
        ...(input.FirewallRuleGroupId !== undefined &&
            input.FirewallRuleGroupId !== null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
    };
};
const serializeAws_json1_1GetResolverDnssecConfigRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1GetResolverEndpointRequest = (input, context) => {
    return {
        ...(input.ResolverEndpointId !== undefined &&
            input.ResolverEndpointId !== null && { ResolverEndpointId: input.ResolverEndpointId }),
    };
};
const serializeAws_json1_1GetResolverQueryLogConfigAssociationRequest = (input, context) => {
    return {
        ...(input.ResolverQueryLogConfigAssociationId !== undefined &&
            input.ResolverQueryLogConfigAssociationId !== null && {
            ResolverQueryLogConfigAssociationId: input.ResolverQueryLogConfigAssociationId,
        }),
    };
};
const serializeAws_json1_1GetResolverQueryLogConfigPolicyRequest = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    };
};
const serializeAws_json1_1GetResolverQueryLogConfigRequest = (input, context) => {
    return {
        ...(input.ResolverQueryLogConfigId !== undefined &&
            input.ResolverQueryLogConfigId !== null && { ResolverQueryLogConfigId: input.ResolverQueryLogConfigId }),
    };
};
const serializeAws_json1_1GetResolverRuleAssociationRequest = (input, context) => {
    return {
        ...(input.ResolverRuleAssociationId !== undefined &&
            input.ResolverRuleAssociationId !== null && { ResolverRuleAssociationId: input.ResolverRuleAssociationId }),
    };
};
const serializeAws_json1_1GetResolverRulePolicyRequest = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    };
};
const serializeAws_json1_1GetResolverRuleRequest = (input, context) => {
    return {
        ...(input.ResolverRuleId !== undefined &&
            input.ResolverRuleId !== null && { ResolverRuleId: input.ResolverRuleId }),
    };
};
const serializeAws_json1_1ImportFirewallDomainsRequest = (input, context) => {
    return {
        ...(input.DomainFileUrl !== undefined && input.DomainFileUrl !== null && { DomainFileUrl: input.DomainFileUrl }),
        ...(input.FirewallDomainListId !== undefined &&
            input.FirewallDomainListId !== null && { FirewallDomainListId: input.FirewallDomainListId }),
        ...(input.Operation !== undefined && input.Operation !== null && { Operation: input.Operation }),
    };
};
const serializeAws_json1_1IpAddressesRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1IpAddressRequest(entry, context);
    });
};
const serializeAws_json1_1IpAddressRequest = (input, context) => {
    return {
        ...(input.Ip !== undefined && input.Ip !== null && { Ip: input.Ip }),
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
    };
};
const serializeAws_json1_1IpAddressUpdate = (input, context) => {
    return {
        ...(input.Ip !== undefined && input.Ip !== null && { Ip: input.Ip }),
        ...(input.IpId !== undefined && input.IpId !== null && { IpId: input.IpId }),
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
    };
};
const serializeAws_json1_1ListFirewallConfigsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListFirewallDomainListsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListFirewallDomainsRequest = (input, context) => {
    return {
        ...(input.FirewallDomainListId !== undefined &&
            input.FirewallDomainListId !== null && { FirewallDomainListId: input.FirewallDomainListId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListFirewallRuleGroupAssociationsRequest = (input, context) => {
    return {
        ...(input.FirewallRuleGroupId !== undefined &&
            input.FirewallRuleGroupId !== null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    };
};
const serializeAws_json1_1ListFirewallRuleGroupsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListFirewallRulesRequest = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.FirewallRuleGroupId !== undefined &&
            input.FirewallRuleGroupId !== null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    };
};
const serializeAws_json1_1ListResolverDnssecConfigsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListResolverEndpointIpAddressesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResolverEndpointId !== undefined &&
            input.ResolverEndpointId !== null && { ResolverEndpointId: input.ResolverEndpointId }),
    };
};
const serializeAws_json1_1ListResolverEndpointsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListResolverQueryLogConfigAssociationsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SortBy !== undefined && input.SortBy !== null && { SortBy: input.SortBy }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1ListResolverQueryLogConfigsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SortBy !== undefined && input.SortBy !== null && { SortBy: input.SortBy }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1ListResolverRuleAssociationsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListResolverRulesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1PutFirewallRuleGroupPolicyRequest = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.FirewallRuleGroupPolicy !== undefined &&
            input.FirewallRuleGroupPolicy !== null && { FirewallRuleGroupPolicy: input.FirewallRuleGroupPolicy }),
    };
};
const serializeAws_json1_1PutResolverQueryLogConfigPolicyRequest = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.ResolverQueryLogConfigPolicy !== undefined &&
            input.ResolverQueryLogConfigPolicy !== null && {
            ResolverQueryLogConfigPolicy: input.ResolverQueryLogConfigPolicy,
        }),
    };
};
const serializeAws_json1_1PutResolverRulePolicyRequest = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.ResolverRulePolicy !== undefined &&
            input.ResolverRulePolicy !== null && { ResolverRulePolicy: input.ResolverRulePolicy }),
    };
};
const serializeAws_json1_1ResolverRuleConfig = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ResolverEndpointId !== undefined &&
            input.ResolverEndpointId !== null && { ResolverEndpointId: input.ResolverEndpointId }),
        ...(input.TargetIps !== undefined &&
            input.TargetIps !== null && { TargetIps: serializeAws_json1_1TargetList(input.TargetIps, context) }),
    };
};
const serializeAws_json1_1SecurityGroupIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1TargetAddress = (input, context) => {
    return {
        ...(input.Ip !== undefined && input.Ip !== null && { Ip: input.Ip }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_json1_1TargetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TargetAddress(entry, context);
    });
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateFirewallConfigRequest = (input, context) => {
    return {
        ...(input.FirewallFailOpen !== undefined &&
            input.FirewallFailOpen !== null && { FirewallFailOpen: input.FirewallFailOpen }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1UpdateFirewallDomainsRequest = (input, context) => {
    return {
        ...(input.Domains !== undefined &&
            input.Domains !== null && { Domains: serializeAws_json1_1FirewallDomains(input.Domains, context) }),
        ...(input.FirewallDomainListId !== undefined &&
            input.FirewallDomainListId !== null && { FirewallDomainListId: input.FirewallDomainListId }),
        ...(input.Operation !== undefined && input.Operation !== null && { Operation: input.Operation }),
    };
};
const serializeAws_json1_1UpdateFirewallRuleGroupAssociationRequest = (input, context) => {
    return {
        ...(input.FirewallRuleGroupAssociationId !== undefined &&
            input.FirewallRuleGroupAssociationId !== null && {
            FirewallRuleGroupAssociationId: input.FirewallRuleGroupAssociationId,
        }),
        ...(input.MutationProtection !== undefined &&
            input.MutationProtection !== null && { MutationProtection: input.MutationProtection }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    };
};
const serializeAws_json1_1UpdateFirewallRuleRequest = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.BlockOverrideDnsType !== undefined &&
            input.BlockOverrideDnsType !== null && { BlockOverrideDnsType: input.BlockOverrideDnsType }),
        ...(input.BlockOverrideDomain !== undefined &&
            input.BlockOverrideDomain !== null && { BlockOverrideDomain: input.BlockOverrideDomain }),
        ...(input.BlockOverrideTtl !== undefined &&
            input.BlockOverrideTtl !== null && { BlockOverrideTtl: input.BlockOverrideTtl }),
        ...(input.BlockResponse !== undefined && input.BlockResponse !== null && { BlockResponse: input.BlockResponse }),
        ...(input.FirewallDomainListId !== undefined &&
            input.FirewallDomainListId !== null && { FirewallDomainListId: input.FirewallDomainListId }),
        ...(input.FirewallRuleGroupId !== undefined &&
            input.FirewallRuleGroupId !== null && { FirewallRuleGroupId: input.FirewallRuleGroupId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    };
};
const serializeAws_json1_1UpdateResolverDnssecConfigRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.Validation !== undefined && input.Validation !== null && { Validation: input.Validation }),
    };
};
const serializeAws_json1_1UpdateResolverEndpointRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ResolverEndpointId !== undefined &&
            input.ResolverEndpointId !== null && { ResolverEndpointId: input.ResolverEndpointId }),
    };
};
const serializeAws_json1_1UpdateResolverRuleRequest = (input, context) => {
    return {
        ...(input.Config !== undefined &&
            input.Config !== null && { Config: serializeAws_json1_1ResolverRuleConfig(input.Config, context) }),
        ...(input.ResolverRuleId !== undefined &&
            input.ResolverRuleId !== null && { ResolverRuleId: input.ResolverRuleId }),
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AssociateFirewallRuleGroupResponse = (output, context) => {
    return {
        FirewallRuleGroupAssociation: output.FirewallRuleGroupAssociation !== undefined && output.FirewallRuleGroupAssociation !== null
            ? deserializeAws_json1_1FirewallRuleGroupAssociation(output.FirewallRuleGroupAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssociateResolverEndpointIpAddressResponse = (output, context) => {
    return {
        ResolverEndpoint: output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
            ? deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssociateResolverQueryLogConfigResponse = (output, context) => {
    return {
        ResolverQueryLogConfigAssociation: output.ResolverQueryLogConfigAssociation !== undefined && output.ResolverQueryLogConfigAssociation !== null
            ? deserializeAws_json1_1ResolverQueryLogConfigAssociation(output.ResolverQueryLogConfigAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1AssociateResolverRuleResponse = (output, context) => {
    return {
        ResolverRuleAssociation: output.ResolverRuleAssociation !== undefined && output.ResolverRuleAssociation !== null
            ? deserializeAws_json1_1ResolverRuleAssociation(output.ResolverRuleAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CreateFirewallDomainListResponse = (output, context) => {
    return {
        FirewallDomainList: output.FirewallDomainList !== undefined && output.FirewallDomainList !== null
            ? deserializeAws_json1_1FirewallDomainList(output.FirewallDomainList, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateFirewallRuleGroupResponse = (output, context) => {
    return {
        FirewallRuleGroup: output.FirewallRuleGroup !== undefined && output.FirewallRuleGroup !== null
            ? deserializeAws_json1_1FirewallRuleGroup(output.FirewallRuleGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateFirewallRuleResponse = (output, context) => {
    return {
        FirewallRule: output.FirewallRule !== undefined && output.FirewallRule !== null
            ? deserializeAws_json1_1FirewallRule(output.FirewallRule, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateResolverEndpointResponse = (output, context) => {
    return {
        ResolverEndpoint: output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
            ? deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateResolverQueryLogConfigResponse = (output, context) => {
    return {
        ResolverQueryLogConfig: output.ResolverQueryLogConfig !== undefined && output.ResolverQueryLogConfig !== null
            ? deserializeAws_json1_1ResolverQueryLogConfig(output.ResolverQueryLogConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateResolverRuleResponse = (output, context) => {
    return {
        ResolverRule: output.ResolverRule !== undefined && output.ResolverRule !== null
            ? deserializeAws_json1_1ResolverRule(output.ResolverRule, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteFirewallDomainListResponse = (output, context) => {
    return {
        FirewallDomainList: output.FirewallDomainList !== undefined && output.FirewallDomainList !== null
            ? deserializeAws_json1_1FirewallDomainList(output.FirewallDomainList, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteFirewallRuleGroupResponse = (output, context) => {
    return {
        FirewallRuleGroup: output.FirewallRuleGroup !== undefined && output.FirewallRuleGroup !== null
            ? deserializeAws_json1_1FirewallRuleGroup(output.FirewallRuleGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteFirewallRuleResponse = (output, context) => {
    return {
        FirewallRule: output.FirewallRule !== undefined && output.FirewallRule !== null
            ? deserializeAws_json1_1FirewallRule(output.FirewallRule, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteResolverEndpointResponse = (output, context) => {
    return {
        ResolverEndpoint: output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
            ? deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteResolverQueryLogConfigResponse = (output, context) => {
    return {
        ResolverQueryLogConfig: output.ResolverQueryLogConfig !== undefined && output.ResolverQueryLogConfig !== null
            ? deserializeAws_json1_1ResolverQueryLogConfig(output.ResolverQueryLogConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteResolverRuleResponse = (output, context) => {
    return {
        ResolverRule: output.ResolverRule !== undefined && output.ResolverRule !== null
            ? deserializeAws_json1_1ResolverRule(output.ResolverRule, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisassociateFirewallRuleGroupResponse = (output, context) => {
    return {
        FirewallRuleGroupAssociation: output.FirewallRuleGroupAssociation !== undefined && output.FirewallRuleGroupAssociation !== null
            ? deserializeAws_json1_1FirewallRuleGroupAssociation(output.FirewallRuleGroupAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisassociateResolverEndpointIpAddressResponse = (output, context) => {
    return {
        ResolverEndpoint: output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
            ? deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisassociateResolverQueryLogConfigResponse = (output, context) => {
    return {
        ResolverQueryLogConfigAssociation: output.ResolverQueryLogConfigAssociation !== undefined && output.ResolverQueryLogConfigAssociation !== null
            ? deserializeAws_json1_1ResolverQueryLogConfigAssociation(output.ResolverQueryLogConfigAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisassociateResolverRuleResponse = (output, context) => {
    return {
        ResolverRuleAssociation: output.ResolverRuleAssociation !== undefined && output.ResolverRuleAssociation !== null
            ? deserializeAws_json1_1ResolverRuleAssociation(output.ResolverRuleAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1FirewallConfig = (output, context) => {
    return {
        FirewallFailOpen: output.FirewallFailOpen !== undefined && output.FirewallFailOpen !== null ? output.FirewallFailOpen : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    };
};
const deserializeAws_json1_1FirewallConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FirewallConfig(entry, context);
    });
};
const deserializeAws_json1_1FirewallDomainList = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null ? output.CreationTime : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        DomainCount: output.DomainCount !== undefined && output.DomainCount !== null ? output.DomainCount : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ManagedOwnerName: output.ManagedOwnerName !== undefined && output.ManagedOwnerName !== null ? output.ManagedOwnerName : undefined,
        ModificationTime: output.ModificationTime !== undefined && output.ModificationTime !== null ? output.ModificationTime : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_json1_1FirewallDomainListMetadata = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ManagedOwnerName: output.ManagedOwnerName !== undefined && output.ManagedOwnerName !== null ? output.ManagedOwnerName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1FirewallDomainListMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FirewallDomainListMetadata(entry, context);
    });
};
const deserializeAws_json1_1FirewallDomains = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1FirewallRule = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        BlockOverrideDnsType: output.BlockOverrideDnsType !== undefined && output.BlockOverrideDnsType !== null
            ? output.BlockOverrideDnsType
            : undefined,
        BlockOverrideDomain: output.BlockOverrideDomain !== undefined && output.BlockOverrideDomain !== null
            ? output.BlockOverrideDomain
            : undefined,
        BlockOverrideTtl: output.BlockOverrideTtl !== undefined && output.BlockOverrideTtl !== null ? output.BlockOverrideTtl : undefined,
        BlockResponse: output.BlockResponse !== undefined && output.BlockResponse !== null ? output.BlockResponse : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null ? output.CreationTime : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        FirewallDomainListId: output.FirewallDomainListId !== undefined && output.FirewallDomainListId !== null
            ? output.FirewallDomainListId
            : undefined,
        FirewallRuleGroupId: output.FirewallRuleGroupId !== undefined && output.FirewallRuleGroupId !== null
            ? output.FirewallRuleGroupId
            : undefined,
        ModificationTime: output.ModificationTime !== undefined && output.ModificationTime !== null ? output.ModificationTime : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
    };
};
const deserializeAws_json1_1FirewallRuleGroup = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null ? output.CreationTime : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ModificationTime: output.ModificationTime !== undefined && output.ModificationTime !== null ? output.ModificationTime : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        RuleCount: output.RuleCount !== undefined && output.RuleCount !== null ? output.RuleCount : undefined,
        ShareStatus: output.ShareStatus !== undefined && output.ShareStatus !== null ? output.ShareStatus : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_json1_1FirewallRuleGroupAssociation = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null ? output.CreationTime : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        FirewallRuleGroupId: output.FirewallRuleGroupId !== undefined && output.FirewallRuleGroupId !== null
            ? output.FirewallRuleGroupId
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ManagedOwnerName: output.ManagedOwnerName !== undefined && output.ManagedOwnerName !== null ? output.ManagedOwnerName : undefined,
        ModificationTime: output.ModificationTime !== undefined && output.ModificationTime !== null ? output.ModificationTime : undefined,
        MutationProtection: output.MutationProtection !== undefined && output.MutationProtection !== null
            ? output.MutationProtection
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1FirewallRuleGroupAssociations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FirewallRuleGroupAssociation(entry, context);
    });
};
const deserializeAws_json1_1FirewallRuleGroupMetadata = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        ShareStatus: output.ShareStatus !== undefined && output.ShareStatus !== null ? output.ShareStatus : undefined,
    };
};
const deserializeAws_json1_1FirewallRuleGroupMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FirewallRuleGroupMetadata(entry, context);
    });
};
const deserializeAws_json1_1FirewallRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FirewallRule(entry, context);
    });
};
const deserializeAws_json1_1GetFirewallConfigResponse = (output, context) => {
    return {
        FirewallConfig: output.FirewallConfig !== undefined && output.FirewallConfig !== null
            ? deserializeAws_json1_1FirewallConfig(output.FirewallConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetFirewallDomainListResponse = (output, context) => {
    return {
        FirewallDomainList: output.FirewallDomainList !== undefined && output.FirewallDomainList !== null
            ? deserializeAws_json1_1FirewallDomainList(output.FirewallDomainList, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetFirewallRuleGroupAssociationResponse = (output, context) => {
    return {
        FirewallRuleGroupAssociation: output.FirewallRuleGroupAssociation !== undefined && output.FirewallRuleGroupAssociation !== null
            ? deserializeAws_json1_1FirewallRuleGroupAssociation(output.FirewallRuleGroupAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetFirewallRuleGroupPolicyResponse = (output, context) => {
    return {
        FirewallRuleGroupPolicy: output.FirewallRuleGroupPolicy !== undefined && output.FirewallRuleGroupPolicy !== null
            ? output.FirewallRuleGroupPolicy
            : undefined,
    };
};
const deserializeAws_json1_1GetFirewallRuleGroupResponse = (output, context) => {
    return {
        FirewallRuleGroup: output.FirewallRuleGroup !== undefined && output.FirewallRuleGroup !== null
            ? deserializeAws_json1_1FirewallRuleGroup(output.FirewallRuleGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetResolverDnssecConfigResponse = (output, context) => {
    return {
        ResolverDNSSECConfig: output.ResolverDNSSECConfig !== undefined && output.ResolverDNSSECConfig !== null
            ? deserializeAws_json1_1ResolverDnssecConfig(output.ResolverDNSSECConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetResolverEndpointResponse = (output, context) => {
    return {
        ResolverEndpoint: output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
            ? deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetResolverQueryLogConfigAssociationResponse = (output, context) => {
    return {
        ResolverQueryLogConfigAssociation: output.ResolverQueryLogConfigAssociation !== undefined && output.ResolverQueryLogConfigAssociation !== null
            ? deserializeAws_json1_1ResolverQueryLogConfigAssociation(output.ResolverQueryLogConfigAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetResolverQueryLogConfigPolicyResponse = (output, context) => {
    return {
        ResolverQueryLogConfigPolicy: output.ResolverQueryLogConfigPolicy !== undefined && output.ResolverQueryLogConfigPolicy !== null
            ? output.ResolverQueryLogConfigPolicy
            : undefined,
    };
};
const deserializeAws_json1_1GetResolverQueryLogConfigResponse = (output, context) => {
    return {
        ResolverQueryLogConfig: output.ResolverQueryLogConfig !== undefined && output.ResolverQueryLogConfig !== null
            ? deserializeAws_json1_1ResolverQueryLogConfig(output.ResolverQueryLogConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetResolverRuleAssociationResponse = (output, context) => {
    return {
        ResolverRuleAssociation: output.ResolverRuleAssociation !== undefined && output.ResolverRuleAssociation !== null
            ? deserializeAws_json1_1ResolverRuleAssociation(output.ResolverRuleAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetResolverRulePolicyResponse = (output, context) => {
    return {
        ResolverRulePolicy: output.ResolverRulePolicy !== undefined && output.ResolverRulePolicy !== null
            ? output.ResolverRulePolicy
            : undefined,
    };
};
const deserializeAws_json1_1GetResolverRuleResponse = (output, context) => {
    return {
        ResolverRule: output.ResolverRule !== undefined && output.ResolverRule !== null
            ? deserializeAws_json1_1ResolverRule(output.ResolverRule, context)
            : undefined,
    };
};
const deserializeAws_json1_1ImportFirewallDomainsResponse = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_json1_1InternalServiceErrorException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        FieldName: output.FieldName !== undefined && output.FieldName !== null ? output.FieldName : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidPolicyDocument = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1IpAddressesResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IpAddressResponse(entry, context);
    });
};
const deserializeAws_json1_1IpAddressResponse = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null ? output.CreationTime : undefined,
        Ip: output.Ip !== undefined && output.Ip !== null ? output.Ip : undefined,
        IpId: output.IpId !== undefined && output.IpId !== null ? output.IpId : undefined,
        ModificationTime: output.ModificationTime !== undefined && output.ModificationTime !== null ? output.ModificationTime : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ListFirewallConfigsResponse = (output, context) => {
    return {
        FirewallConfigs: output.FirewallConfigs !== undefined && output.FirewallConfigs !== null
            ? deserializeAws_json1_1FirewallConfigList(output.FirewallConfigs, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListFirewallDomainListsResponse = (output, context) => {
    return {
        FirewallDomainLists: output.FirewallDomainLists !== undefined && output.FirewallDomainLists !== null
            ? deserializeAws_json1_1FirewallDomainListMetadataList(output.FirewallDomainLists, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListFirewallDomainsResponse = (output, context) => {
    return {
        Domains: output.Domains !== undefined && output.Domains !== null
            ? deserializeAws_json1_1FirewallDomains(output.Domains, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListFirewallRuleGroupAssociationsResponse = (output, context) => {
    return {
        FirewallRuleGroupAssociations: output.FirewallRuleGroupAssociations !== undefined && output.FirewallRuleGroupAssociations !== null
            ? deserializeAws_json1_1FirewallRuleGroupAssociations(output.FirewallRuleGroupAssociations, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListFirewallRuleGroupsResponse = (output, context) => {
    return {
        FirewallRuleGroups: output.FirewallRuleGroups !== undefined && output.FirewallRuleGroups !== null
            ? deserializeAws_json1_1FirewallRuleGroupMetadataList(output.FirewallRuleGroups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListFirewallRulesResponse = (output, context) => {
    return {
        FirewallRules: output.FirewallRules !== undefined && output.FirewallRules !== null
            ? deserializeAws_json1_1FirewallRules(output.FirewallRules, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListResolverDnssecConfigsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResolverDnssecConfigs: output.ResolverDnssecConfigs !== undefined && output.ResolverDnssecConfigs !== null
            ? deserializeAws_json1_1ResolverDnssecConfigList(output.ResolverDnssecConfigs, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResolverEndpointIpAddressesResponse = (output, context) => {
    return {
        IpAddresses: output.IpAddresses !== undefined && output.IpAddresses !== null
            ? deserializeAws_json1_1IpAddressesResponse(output.IpAddresses, context)
            : undefined,
        MaxResults: output.MaxResults !== undefined && output.MaxResults !== null ? output.MaxResults : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListResolverEndpointsResponse = (output, context) => {
    return {
        MaxResults: output.MaxResults !== undefined && output.MaxResults !== null ? output.MaxResults : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResolverEndpoints: output.ResolverEndpoints !== undefined && output.ResolverEndpoints !== null
            ? deserializeAws_json1_1ResolverEndpoints(output.ResolverEndpoints, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResolverQueryLogConfigAssociationsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResolverQueryLogConfigAssociations: output.ResolverQueryLogConfigAssociations !== undefined && output.ResolverQueryLogConfigAssociations !== null
            ? deserializeAws_json1_1ResolverQueryLogConfigAssociationList(output.ResolverQueryLogConfigAssociations, context)
            : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
        TotalFilteredCount: output.TotalFilteredCount !== undefined && output.TotalFilteredCount !== null
            ? output.TotalFilteredCount
            : undefined,
    };
};
const deserializeAws_json1_1ListResolverQueryLogConfigsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResolverQueryLogConfigs: output.ResolverQueryLogConfigs !== undefined && output.ResolverQueryLogConfigs !== null
            ? deserializeAws_json1_1ResolverQueryLogConfigList(output.ResolverQueryLogConfigs, context)
            : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
        TotalFilteredCount: output.TotalFilteredCount !== undefined && output.TotalFilteredCount !== null
            ? output.TotalFilteredCount
            : undefined,
    };
};
const deserializeAws_json1_1ListResolverRuleAssociationsResponse = (output, context) => {
    return {
        MaxResults: output.MaxResults !== undefined && output.MaxResults !== null ? output.MaxResults : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResolverRuleAssociations: output.ResolverRuleAssociations !== undefined && output.ResolverRuleAssociations !== null
            ? deserializeAws_json1_1ResolverRuleAssociations(output.ResolverRuleAssociations, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResolverRulesResponse = (output, context) => {
    return {
        MaxResults: output.MaxResults !== undefined && output.MaxResults !== null ? output.MaxResults : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResolverRules: output.ResolverRules !== undefined && output.ResolverRules !== null
            ? deserializeAws_json1_1ResolverRules(output.ResolverRules, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutFirewallRuleGroupPolicyResponse = (output, context) => {
    return {
        ReturnValue: output.ReturnValue !== undefined && output.ReturnValue !== null ? output.ReturnValue : undefined,
    };
};
const deserializeAws_json1_1PutResolverQueryLogConfigPolicyResponse = (output, context) => {
    return {
        ReturnValue: output.ReturnValue !== undefined && output.ReturnValue !== null ? output.ReturnValue : undefined,
    };
};
const deserializeAws_json1_1PutResolverRulePolicyResponse = (output, context) => {
    return {
        ReturnValue: output.ReturnValue !== undefined && output.ReturnValue !== null ? output.ReturnValue : undefined,
    };
};
const deserializeAws_json1_1ResolverDnssecConfig = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ValidationStatus: output.ValidationStatus !== undefined && output.ValidationStatus !== null ? output.ValidationStatus : undefined,
    };
};
const deserializeAws_json1_1ResolverDnssecConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResolverDnssecConfig(entry, context);
    });
};
const deserializeAws_json1_1ResolverEndpoint = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null ? output.CreationTime : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        Direction: output.Direction !== undefined && output.Direction !== null ? output.Direction : undefined,
        HostVPCId: output.HostVPCId !== undefined && output.HostVPCId !== null ? output.HostVPCId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IpAddressCount: output.IpAddressCount !== undefined && output.IpAddressCount !== null ? output.IpAddressCount : undefined,
        ModificationTime: output.ModificationTime !== undefined && output.ModificationTime !== null ? output.ModificationTime : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_json1_1ResolverEndpoints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResolverEndpoint(entry, context);
    });
};
const deserializeAws_json1_1ResolverQueryLogConfig = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AssociationCount: output.AssociationCount !== undefined && output.AssociationCount !== null ? output.AssociationCount : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null ? output.CreationTime : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        DestinationArn: output.DestinationArn !== undefined && output.DestinationArn !== null ? output.DestinationArn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        ShareStatus: output.ShareStatus !== undefined && output.ShareStatus !== null ? output.ShareStatus : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ResolverQueryLogConfigAssociation = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null ? output.CreationTime : undefined,
        Error: output.Error !== undefined && output.Error !== null ? output.Error : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ResolverQueryLogConfigId: output.ResolverQueryLogConfigId !== undefined && output.ResolverQueryLogConfigId !== null
            ? output.ResolverQueryLogConfigId
            : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1ResolverQueryLogConfigAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResolverQueryLogConfigAssociation(entry, context);
    });
};
const deserializeAws_json1_1ResolverQueryLogConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResolverQueryLogConfig(entry, context);
    });
};
const deserializeAws_json1_1ResolverRule = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null ? output.CreationTime : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ModificationTime: output.ModificationTime !== undefined && output.ModificationTime !== null ? output.ModificationTime : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        ResolverEndpointId: output.ResolverEndpointId !== undefined && output.ResolverEndpointId !== null
            ? output.ResolverEndpointId
            : undefined,
        RuleType: output.RuleType !== undefined && output.RuleType !== null ? output.RuleType : undefined,
        ShareStatus: output.ShareStatus !== undefined && output.ShareStatus !== null ? output.ShareStatus : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        TargetIps: output.TargetIps !== undefined && output.TargetIps !== null
            ? deserializeAws_json1_1TargetList(output.TargetIps, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResolverRuleAssociation = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ResolverRuleId: output.ResolverRuleId !== undefined && output.ResolverRuleId !== null ? output.ResolverRuleId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        VPCId: output.VPCId !== undefined && output.VPCId !== null ? output.VPCId : undefined,
    };
};
const deserializeAws_json1_1ResolverRuleAssociations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResolverRuleAssociation(entry, context);
    });
};
const deserializeAws_json1_1ResolverRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResolverRule(entry, context);
    });
};
const deserializeAws_json1_1ResourceExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ResourceUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1SecurityGroupIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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
const deserializeAws_json1_1TargetAddress = (output, context) => {
    return {
        Ip: output.Ip !== undefined && output.Ip !== null ? output.Ip : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_json1_1TargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TargetAddress(entry, context);
    });
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UnknownResourceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateFirewallConfigResponse = (output, context) => {
    return {
        FirewallConfig: output.FirewallConfig !== undefined && output.FirewallConfig !== null
            ? deserializeAws_json1_1FirewallConfig(output.FirewallConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateFirewallDomainsResponse = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_json1_1UpdateFirewallRuleGroupAssociationResponse = (output, context) => {
    return {
        FirewallRuleGroupAssociation: output.FirewallRuleGroupAssociation !== undefined && output.FirewallRuleGroupAssociation !== null
            ? deserializeAws_json1_1FirewallRuleGroupAssociation(output.FirewallRuleGroupAssociation, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateFirewallRuleResponse = (output, context) => {
    return {
        FirewallRule: output.FirewallRule !== undefined && output.FirewallRule !== null
            ? deserializeAws_json1_1FirewallRule(output.FirewallRule, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateResolverDnssecConfigResponse = (output, context) => {
    return {
        ResolverDNSSECConfig: output.ResolverDNSSECConfig !== undefined && output.ResolverDNSSECConfig !== null
            ? deserializeAws_json1_1ResolverDnssecConfig(output.ResolverDNSSECConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateResolverEndpointResponse = (output, context) => {
    return {
        ResolverEndpoint: output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
            ? deserializeAws_json1_1ResolverEndpoint(output.ResolverEndpoint, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateResolverRuleResponse = (output, context) => {
    return {
        ResolverRule: output.ResolverRule !== undefined && output.ResolverRule !== null
            ? deserializeAws_json1_1ResolverRule(output.ResolverRule, context)
            : undefined,
    };
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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