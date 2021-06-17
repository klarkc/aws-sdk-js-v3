"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0TagResourceCommand = exports.deserializeAws_json1_0PutResourcePolicyCommand = exports.deserializeAws_json1_0ListTagsForResourceCommand = exports.deserializeAws_json1_0ListRuleGroupsCommand = exports.deserializeAws_json1_0ListFirewallsCommand = exports.deserializeAws_json1_0ListFirewallPoliciesCommand = exports.deserializeAws_json1_0DisassociateSubnetsCommand = exports.deserializeAws_json1_0DescribeRuleGroupCommand = exports.deserializeAws_json1_0DescribeResourcePolicyCommand = exports.deserializeAws_json1_0DescribeLoggingConfigurationCommand = exports.deserializeAws_json1_0DescribeFirewallPolicyCommand = exports.deserializeAws_json1_0DescribeFirewallCommand = exports.deserializeAws_json1_0DeleteRuleGroupCommand = exports.deserializeAws_json1_0DeleteResourcePolicyCommand = exports.deserializeAws_json1_0DeleteFirewallPolicyCommand = exports.deserializeAws_json1_0DeleteFirewallCommand = exports.deserializeAws_json1_0CreateRuleGroupCommand = exports.deserializeAws_json1_0CreateFirewallPolicyCommand = exports.deserializeAws_json1_0CreateFirewallCommand = exports.deserializeAws_json1_0AssociateSubnetsCommand = exports.deserializeAws_json1_0AssociateFirewallPolicyCommand = exports.serializeAws_json1_0UpdateSubnetChangeProtectionCommand = exports.serializeAws_json1_0UpdateRuleGroupCommand = exports.serializeAws_json1_0UpdateLoggingConfigurationCommand = exports.serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand = exports.serializeAws_json1_0UpdateFirewallPolicyCommand = exports.serializeAws_json1_0UpdateFirewallDescriptionCommand = exports.serializeAws_json1_0UpdateFirewallDeleteProtectionCommand = exports.serializeAws_json1_0UntagResourceCommand = exports.serializeAws_json1_0TagResourceCommand = exports.serializeAws_json1_0PutResourcePolicyCommand = exports.serializeAws_json1_0ListTagsForResourceCommand = exports.serializeAws_json1_0ListRuleGroupsCommand = exports.serializeAws_json1_0ListFirewallsCommand = exports.serializeAws_json1_0ListFirewallPoliciesCommand = exports.serializeAws_json1_0DisassociateSubnetsCommand = exports.serializeAws_json1_0DescribeRuleGroupCommand = exports.serializeAws_json1_0DescribeResourcePolicyCommand = exports.serializeAws_json1_0DescribeLoggingConfigurationCommand = exports.serializeAws_json1_0DescribeFirewallPolicyCommand = exports.serializeAws_json1_0DescribeFirewallCommand = exports.serializeAws_json1_0DeleteRuleGroupCommand = exports.serializeAws_json1_0DeleteResourcePolicyCommand = exports.serializeAws_json1_0DeleteFirewallPolicyCommand = exports.serializeAws_json1_0DeleteFirewallCommand = exports.serializeAws_json1_0CreateRuleGroupCommand = exports.serializeAws_json1_0CreateFirewallPolicyCommand = exports.serializeAws_json1_0CreateFirewallCommand = exports.serializeAws_json1_0AssociateSubnetsCommand = exports.serializeAws_json1_0AssociateFirewallPolicyCommand = void 0;
exports.deserializeAws_json1_0UpdateSubnetChangeProtectionCommand = exports.deserializeAws_json1_0UpdateRuleGroupCommand = exports.deserializeAws_json1_0UpdateLoggingConfigurationCommand = exports.deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand = exports.deserializeAws_json1_0UpdateFirewallPolicyCommand = exports.deserializeAws_json1_0UpdateFirewallDescriptionCommand = exports.deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand = exports.deserializeAws_json1_0UntagResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_0AssociateFirewallPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.AssociateFirewallPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0AssociateFirewallPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0AssociateFirewallPolicyCommand = serializeAws_json1_0AssociateFirewallPolicyCommand;
const serializeAws_json1_0AssociateSubnetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.AssociateSubnets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0AssociateSubnetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0AssociateSubnetsCommand = serializeAws_json1_0AssociateSubnetsCommand;
const serializeAws_json1_0CreateFirewallCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.CreateFirewall",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateFirewallRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateFirewallCommand = serializeAws_json1_0CreateFirewallCommand;
const serializeAws_json1_0CreateFirewallPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.CreateFirewallPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateFirewallPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateFirewallPolicyCommand = serializeAws_json1_0CreateFirewallPolicyCommand;
const serializeAws_json1_0CreateRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.CreateRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0CreateRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateRuleGroupCommand = serializeAws_json1_0CreateRuleGroupCommand;
const serializeAws_json1_0DeleteFirewallCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.DeleteFirewall",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteFirewallRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteFirewallCommand = serializeAws_json1_0DeleteFirewallCommand;
const serializeAws_json1_0DeleteFirewallPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.DeleteFirewallPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteFirewallPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteFirewallPolicyCommand = serializeAws_json1_0DeleteFirewallPolicyCommand;
const serializeAws_json1_0DeleteResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.DeleteResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteResourcePolicyCommand = serializeAws_json1_0DeleteResourcePolicyCommand;
const serializeAws_json1_0DeleteRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.DeleteRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DeleteRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteRuleGroupCommand = serializeAws_json1_0DeleteRuleGroupCommand;
const serializeAws_json1_0DescribeFirewallCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.DescribeFirewall",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeFirewallRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeFirewallCommand = serializeAws_json1_0DescribeFirewallCommand;
const serializeAws_json1_0DescribeFirewallPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.DescribeFirewallPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeFirewallPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeFirewallPolicyCommand = serializeAws_json1_0DescribeFirewallPolicyCommand;
const serializeAws_json1_0DescribeLoggingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.DescribeLoggingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeLoggingConfigurationCommand = serializeAws_json1_0DescribeLoggingConfigurationCommand;
const serializeAws_json1_0DescribeResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.DescribeResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeResourcePolicyCommand = serializeAws_json1_0DescribeResourcePolicyCommand;
const serializeAws_json1_0DescribeRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.DescribeRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeRuleGroupCommand = serializeAws_json1_0DescribeRuleGroupCommand;
const serializeAws_json1_0DisassociateSubnetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.DisassociateSubnets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DisassociateSubnetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DisassociateSubnetsCommand = serializeAws_json1_0DisassociateSubnetsCommand;
const serializeAws_json1_0ListFirewallPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.ListFirewallPolicies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListFirewallPoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListFirewallPoliciesCommand = serializeAws_json1_0ListFirewallPoliciesCommand;
const serializeAws_json1_0ListFirewallsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.ListFirewalls",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListFirewallsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListFirewallsCommand = serializeAws_json1_0ListFirewallsCommand;
const serializeAws_json1_0ListRuleGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.ListRuleGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListRuleGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListRuleGroupsCommand = serializeAws_json1_0ListRuleGroupsCommand;
const serializeAws_json1_0ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListTagsForResourceCommand = serializeAws_json1_0ListTagsForResourceCommand;
const serializeAws_json1_0PutResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.PutResourcePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0PutResourcePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0PutResourcePolicyCommand = serializeAws_json1_0PutResourcePolicyCommand;
const serializeAws_json1_0TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
const serializeAws_json1_0UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
const serializeAws_json1_0UpdateFirewallDeleteProtectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallDeleteProtection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateFirewallDeleteProtectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateFirewallDeleteProtectionCommand = serializeAws_json1_0UpdateFirewallDeleteProtectionCommand;
const serializeAws_json1_0UpdateFirewallDescriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallDescription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateFirewallDescriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateFirewallDescriptionCommand = serializeAws_json1_0UpdateFirewallDescriptionCommand;
const serializeAws_json1_0UpdateFirewallPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateFirewallPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateFirewallPolicyCommand = serializeAws_json1_0UpdateFirewallPolicyCommand;
const serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateFirewallPolicyChangeProtectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand = serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand;
const serializeAws_json1_0UpdateLoggingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.UpdateLoggingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateLoggingConfigurationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateLoggingConfigurationCommand = serializeAws_json1_0UpdateLoggingConfigurationCommand;
const serializeAws_json1_0UpdateRuleGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.UpdateRuleGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateRuleGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateRuleGroupCommand = serializeAws_json1_0UpdateRuleGroupCommand;
const serializeAws_json1_0UpdateSubnetChangeProtectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "NetworkFirewall_20201112.UpdateSubnetChangeProtection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0UpdateSubnetChangeProtectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateSubnetChangeProtectionCommand = serializeAws_json1_0UpdateSubnetChangeProtectionCommand;
const deserializeAws_json1_0AssociateFirewallPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0AssociateFirewallPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0AssociateFirewallPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0AssociateFirewallPolicyCommand = deserializeAws_json1_0AssociateFirewallPolicyCommand;
const deserializeAws_json1_0AssociateFirewallPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.networkfirewall#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.networkfirewall#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0AssociateSubnetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0AssociateSubnetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0AssociateSubnetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0AssociateSubnetsCommand = deserializeAws_json1_0AssociateSubnetsCommand;
const deserializeAws_json1_0AssociateSubnetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientCapacityException":
        case "com.amazonaws.networkfirewall#InsufficientCapacityException":
            response = {
                ...(await deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.networkfirewall#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.networkfirewall#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0CreateFirewallCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateFirewallCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateFirewallResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateFirewallCommand = deserializeAws_json1_0CreateFirewallCommand;
const deserializeAws_json1_0CreateFirewallCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientCapacityException":
        case "com.amazonaws.networkfirewall#InsufficientCapacityException":
            response = {
                ...(await deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.networkfirewall#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.networkfirewall#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0CreateFirewallPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateFirewallPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateFirewallPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateFirewallPolicyCommand = deserializeAws_json1_0CreateFirewallPolicyCommand;
const deserializeAws_json1_0CreateFirewallPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientCapacityException":
        case "com.amazonaws.networkfirewall#InsufficientCapacityException":
            response = {
                ...(await deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.networkfirewall#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0CreateRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0CreateRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0CreateRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateRuleGroupCommand = deserializeAws_json1_0CreateRuleGroupCommand;
const deserializeAws_json1_0CreateRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientCapacityException":
        case "com.amazonaws.networkfirewall#InsufficientCapacityException":
            response = {
                ...(await deserializeAws_json1_0InsufficientCapacityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.networkfirewall#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteFirewallCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteFirewallCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteFirewallResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteFirewallCommand = deserializeAws_json1_0DeleteFirewallCommand;
const deserializeAws_json1_0DeleteFirewallCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.networkfirewall#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.networkfirewall#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteFirewallPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteFirewallPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteFirewallPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteFirewallPolicyCommand = deserializeAws_json1_0DeleteFirewallPolicyCommand;
const deserializeAws_json1_0DeleteFirewallPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.networkfirewall#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.networkfirewall#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteResourcePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteResourcePolicyCommand = deserializeAws_json1_0DeleteResourcePolicyCommand;
const deserializeAws_json1_0DeleteResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DeleteRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DeleteRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DeleteRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteRuleGroupCommand = deserializeAws_json1_0DeleteRuleGroupCommand;
const deserializeAws_json1_0DeleteRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.networkfirewall#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.networkfirewall#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeFirewallCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeFirewallCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeFirewallResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeFirewallCommand = deserializeAws_json1_0DescribeFirewallCommand;
const deserializeAws_json1_0DescribeFirewallCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeFirewallPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeFirewallPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeFirewallPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeFirewallPolicyCommand = deserializeAws_json1_0DescribeFirewallPolicyCommand;
const deserializeAws_json1_0DescribeFirewallPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeLoggingConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeLoggingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeLoggingConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeLoggingConfigurationCommand = deserializeAws_json1_0DescribeLoggingConfigurationCommand;
const deserializeAws_json1_0DescribeLoggingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeResourcePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeResourcePolicyCommand = deserializeAws_json1_0DescribeResourcePolicyCommand;
const deserializeAws_json1_0DescribeResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DescribeRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeRuleGroupCommand = deserializeAws_json1_0DescribeRuleGroupCommand;
const deserializeAws_json1_0DescribeRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0DisassociateSubnetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DisassociateSubnetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DisassociateSubnetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DisassociateSubnetsCommand = deserializeAws_json1_0DisassociateSubnetsCommand;
const deserializeAws_json1_0DisassociateSubnetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.networkfirewall#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_0InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.networkfirewall#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListFirewallPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListFirewallPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListFirewallPoliciesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListFirewallPoliciesCommand = deserializeAws_json1_0ListFirewallPoliciesCommand;
const deserializeAws_json1_0ListFirewallPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListFirewallsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListFirewallsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListFirewallsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListFirewallsCommand = deserializeAws_json1_0ListFirewallsCommand;
const deserializeAws_json1_0ListFirewallsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListRuleGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListRuleGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListRuleGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListRuleGroupsCommand = deserializeAws_json1_0ListRuleGroupsCommand;
const deserializeAws_json1_0ListRuleGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListTagsForResourceCommand = deserializeAws_json1_0ListTagsForResourceCommand;
const deserializeAws_json1_0ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0PutResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0PutResourcePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0PutResourcePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0PutResourcePolicyCommand = deserializeAws_json1_0PutResourcePolicyCommand;
const deserializeAws_json1_0PutResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourcePolicyException":
        case "com.amazonaws.networkfirewall#InvalidResourcePolicyException":
            response = {
                ...(await deserializeAws_json1_0InvalidResourcePolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0TagResourceCommand = deserializeAws_json1_0TagResourceCommand;
const deserializeAws_json1_0TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UntagResourceCommand = deserializeAws_json1_0UntagResourceCommand;
const deserializeAws_json1_0UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateFirewallDeleteProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateFirewallDeleteProtectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand = deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand;
const deserializeAws_json1_0UpdateFirewallDeleteProtectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.networkfirewall#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceOwnerCheckException":
        case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
            response = {
                ...(await deserializeAws_json1_0ResourceOwnerCheckExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateFirewallDescriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateFirewallDescriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateFirewallDescriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateFirewallDescriptionCommand = deserializeAws_json1_0UpdateFirewallDescriptionCommand;
const deserializeAws_json1_0UpdateFirewallDescriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.networkfirewall#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateFirewallPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateFirewallPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateFirewallPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateFirewallPolicyCommand = deserializeAws_json1_0UpdateFirewallPolicyCommand;
const deserializeAws_json1_0UpdateFirewallPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.networkfirewall#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand = deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand;
const deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.networkfirewall#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceOwnerCheckException":
        case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
            response = {
                ...(await deserializeAws_json1_0ResourceOwnerCheckExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateLoggingConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateLoggingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateLoggingConfigurationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateLoggingConfigurationCommand = deserializeAws_json1_0UpdateLoggingConfigurationCommand;
const deserializeAws_json1_0UpdateLoggingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.networkfirewall#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LogDestinationPermissionException":
        case "com.amazonaws.networkfirewall#LogDestinationPermissionException":
            response = {
                ...(await deserializeAws_json1_0LogDestinationPermissionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateRuleGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateRuleGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateRuleGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateRuleGroupCommand = deserializeAws_json1_0UpdateRuleGroupCommand;
const deserializeAws_json1_0UpdateRuleGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.networkfirewall#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0UpdateSubnetChangeProtectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0UpdateSubnetChangeProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0UpdateSubnetChangeProtectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateSubnetChangeProtectionCommand = deserializeAws_json1_0UpdateSubnetChangeProtectionCommand;
const deserializeAws_json1_0UpdateSubnetChangeProtectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.networkfirewall#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.networkfirewall#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.networkfirewall#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_0InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.networkfirewall#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceOwnerCheckException":
        case "com.amazonaws.networkfirewall#ResourceOwnerCheckException":
            response = {
                ...(await deserializeAws_json1_0ResourceOwnerCheckExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.networkfirewall#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0InsufficientCapacityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InsufficientCapacityException(body, context);
    const contents = {
        name: "InsufficientCapacityException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InternalServerError(body, context);
    const contents = {
        name: "InternalServerError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidOperationException(body, context);
    const contents = {
        name: "InvalidOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidRequestException(body, context);
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidResourcePolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidResourcePolicyException(body, context);
    const contents = {
        name: "InvalidResourcePolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidTokenException(body, context);
    const contents = {
        name: "InvalidTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0LogDestinationPermissionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LogDestinationPermissionException(body, context);
    const contents = {
        name: "LogDestinationPermissionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ResourceOwnerCheckExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceOwnerCheckException(body, context);
    const contents = {
        name: "ResourceOwnerCheckException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ThrottlingException(body, context);
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0UnsupportedOperationException(body, context);
    const contents = {
        name: "UnsupportedOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_0ActionDefinition = (input, context) => {
    return {
        ...(input.PublishMetricAction !== undefined &&
            input.PublishMetricAction !== null && {
            PublishMetricAction: serializeAws_json1_0PublishMetricAction(input.PublishMetricAction, context),
        }),
    };
};
const serializeAws_json1_0Address = (input, context) => {
    return {
        ...(input.AddressDefinition !== undefined &&
            input.AddressDefinition !== null && { AddressDefinition: input.AddressDefinition }),
    };
};
const serializeAws_json1_0Addresses = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Address(entry, context);
    });
};
const serializeAws_json1_0AssociateFirewallPolicyRequest = (input, context) => {
    return {
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
        ...(input.FirewallPolicyArn !== undefined &&
            input.FirewallPolicyArn !== null && { FirewallPolicyArn: input.FirewallPolicyArn }),
        ...(input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }),
    };
};
const serializeAws_json1_0AssociateSubnetsRequest = (input, context) => {
    return {
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
        ...(input.SubnetMappings !== undefined &&
            input.SubnetMappings !== null && {
            SubnetMappings: serializeAws_json1_0SubnetMappings(input.SubnetMappings, context),
        }),
        ...(input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }),
    };
};
const serializeAws_json1_0AzSubnets = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0CreateFirewallPolicyRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.FirewallPolicy !== undefined &&
            input.FirewallPolicy !== null && {
            FirewallPolicy: serializeAws_json1_0FirewallPolicy(input.FirewallPolicy, context),
        }),
        ...(input.FirewallPolicyName !== undefined &&
            input.FirewallPolicyName !== null && { FirewallPolicyName: input.FirewallPolicyName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0CreateFirewallRequest = (input, context) => {
    return {
        ...(input.DeleteProtection !== undefined &&
            input.DeleteProtection !== null && { DeleteProtection: input.DeleteProtection }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
        ...(input.FirewallPolicyArn !== undefined &&
            input.FirewallPolicyArn !== null && { FirewallPolicyArn: input.FirewallPolicyArn }),
        ...(input.FirewallPolicyChangeProtection !== undefined &&
            input.FirewallPolicyChangeProtection !== null && {
            FirewallPolicyChangeProtection: input.FirewallPolicyChangeProtection,
        }),
        ...(input.SubnetChangeProtection !== undefined &&
            input.SubnetChangeProtection !== null && { SubnetChangeProtection: input.SubnetChangeProtection }),
        ...(input.SubnetMappings !== undefined &&
            input.SubnetMappings !== null && {
            SubnetMappings: serializeAws_json1_0SubnetMappings(input.SubnetMappings, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    };
};
const serializeAws_json1_0CreateRuleGroupRequest = (input, context) => {
    return {
        ...(input.Capacity !== undefined && input.Capacity !== null && { Capacity: input.Capacity }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.RuleGroup !== undefined &&
            input.RuleGroup !== null && { RuleGroup: serializeAws_json1_0RuleGroup(input.RuleGroup, context) }),
        ...(input.RuleGroupName !== undefined && input.RuleGroupName !== null && { RuleGroupName: input.RuleGroupName }),
        ...(input.Rules !== undefined && input.Rules !== null && { Rules: input.Rules }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_0CustomAction = (input, context) => {
    return {
        ...(input.ActionDefinition !== undefined &&
            input.ActionDefinition !== null && {
            ActionDefinition: serializeAws_json1_0ActionDefinition(input.ActionDefinition, context),
        }),
        ...(input.ActionName !== undefined && input.ActionName !== null && { ActionName: input.ActionName }),
    };
};
const serializeAws_json1_0CustomActions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0CustomAction(entry, context);
    });
};
const serializeAws_json1_0DeleteFirewallPolicyRequest = (input, context) => {
    return {
        ...(input.FirewallPolicyArn !== undefined &&
            input.FirewallPolicyArn !== null && { FirewallPolicyArn: input.FirewallPolicyArn }),
        ...(input.FirewallPolicyName !== undefined &&
            input.FirewallPolicyName !== null && { FirewallPolicyName: input.FirewallPolicyName }),
    };
};
const serializeAws_json1_0DeleteFirewallRequest = (input, context) => {
    return {
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
    };
};
const serializeAws_json1_0DeleteResourcePolicyRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_0DeleteRuleGroupRequest = (input, context) => {
    return {
        ...(input.RuleGroupArn !== undefined && input.RuleGroupArn !== null && { RuleGroupArn: input.RuleGroupArn }),
        ...(input.RuleGroupName !== undefined && input.RuleGroupName !== null && { RuleGroupName: input.RuleGroupName }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_0DescribeFirewallPolicyRequest = (input, context) => {
    return {
        ...(input.FirewallPolicyArn !== undefined &&
            input.FirewallPolicyArn !== null && { FirewallPolicyArn: input.FirewallPolicyArn }),
        ...(input.FirewallPolicyName !== undefined &&
            input.FirewallPolicyName !== null && { FirewallPolicyName: input.FirewallPolicyName }),
    };
};
const serializeAws_json1_0DescribeFirewallRequest = (input, context) => {
    return {
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
    };
};
const serializeAws_json1_0DescribeLoggingConfigurationRequest = (input, context) => {
    return {
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
    };
};
const serializeAws_json1_0DescribeResourcePolicyRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_0DescribeRuleGroupRequest = (input, context) => {
    return {
        ...(input.RuleGroupArn !== undefined && input.RuleGroupArn !== null && { RuleGroupArn: input.RuleGroupArn }),
        ...(input.RuleGroupName !== undefined && input.RuleGroupName !== null && { RuleGroupName: input.RuleGroupName }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_0Dimension = (input, context) => {
    return {
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_0Dimensions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Dimension(entry, context);
    });
};
const serializeAws_json1_0DisassociateSubnetsRequest = (input, context) => {
    return {
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_0AzSubnets(input.SubnetIds, context) }),
        ...(input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }),
    };
};
const serializeAws_json1_0FirewallPolicy = (input, context) => {
    return {
        ...(input.StatefulRuleGroupReferences !== undefined &&
            input.StatefulRuleGroupReferences !== null && {
            StatefulRuleGroupReferences: serializeAws_json1_0StatefulRuleGroupReferences(input.StatefulRuleGroupReferences, context),
        }),
        ...(input.StatelessCustomActions !== undefined &&
            input.StatelessCustomActions !== null && {
            StatelessCustomActions: serializeAws_json1_0CustomActions(input.StatelessCustomActions, context),
        }),
        ...(input.StatelessDefaultActions !== undefined &&
            input.StatelessDefaultActions !== null && {
            StatelessDefaultActions: serializeAws_json1_0StatelessActions(input.StatelessDefaultActions, context),
        }),
        ...(input.StatelessFragmentDefaultActions !== undefined &&
            input.StatelessFragmentDefaultActions !== null && {
            StatelessFragmentDefaultActions: serializeAws_json1_0StatelessActions(input.StatelessFragmentDefaultActions, context),
        }),
        ...(input.StatelessRuleGroupReferences !== undefined &&
            input.StatelessRuleGroupReferences !== null && {
            StatelessRuleGroupReferences: serializeAws_json1_0StatelessRuleGroupReferences(input.StatelessRuleGroupReferences, context),
        }),
    };
};
const serializeAws_json1_0Flags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0Header = (input, context) => {
    return {
        ...(input.Destination !== undefined && input.Destination !== null && { Destination: input.Destination }),
        ...(input.DestinationPort !== undefined &&
            input.DestinationPort !== null && { DestinationPort: input.DestinationPort }),
        ...(input.Direction !== undefined && input.Direction !== null && { Direction: input.Direction }),
        ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
        ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
        ...(input.SourcePort !== undefined && input.SourcePort !== null && { SourcePort: input.SourcePort }),
    };
};
const serializeAws_json1_0IPSet = (input, context) => {
    return {
        ...(input.Definition !== undefined &&
            input.Definition !== null && {
            Definition: serializeAws_json1_0VariableDefinitionList(input.Definition, context),
        }),
    };
};
const serializeAws_json1_0IPSets = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0IPSet(value, context),
        };
    }, {});
};
const serializeAws_json1_0ListFirewallPoliciesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_0ListFirewallsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.VpcIds !== undefined &&
            input.VpcIds !== null && { VpcIds: serializeAws_json1_0VpcIds(input.VpcIds, context) }),
    };
};
const serializeAws_json1_0ListRuleGroupsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_0ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_0LogDestinationConfig = (input, context) => {
    return {
        ...(input.LogDestination !== undefined &&
            input.LogDestination !== null && {
            LogDestination: serializeAws_json1_0LogDestinationMap(input.LogDestination, context),
        }),
        ...(input.LogDestinationType !== undefined &&
            input.LogDestinationType !== null && { LogDestinationType: input.LogDestinationType }),
        ...(input.LogType !== undefined && input.LogType !== null && { LogType: input.LogType }),
    };
};
const serializeAws_json1_0LogDestinationConfigs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0LogDestinationConfig(entry, context);
    });
};
const serializeAws_json1_0LogDestinationMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_0LoggingConfiguration = (input, context) => {
    return {
        ...(input.LogDestinationConfigs !== undefined &&
            input.LogDestinationConfigs !== null && {
            LogDestinationConfigs: serializeAws_json1_0LogDestinationConfigs(input.LogDestinationConfigs, context),
        }),
    };
};
const serializeAws_json1_0MatchAttributes = (input, context) => {
    return {
        ...(input.DestinationPorts !== undefined &&
            input.DestinationPorts !== null && {
            DestinationPorts: serializeAws_json1_0PortRanges(input.DestinationPorts, context),
        }),
        ...(input.Destinations !== undefined &&
            input.Destinations !== null && { Destinations: serializeAws_json1_0Addresses(input.Destinations, context) }),
        ...(input.Protocols !== undefined &&
            input.Protocols !== null && { Protocols: serializeAws_json1_0ProtocolNumbers(input.Protocols, context) }),
        ...(input.SourcePorts !== undefined &&
            input.SourcePorts !== null && { SourcePorts: serializeAws_json1_0PortRanges(input.SourcePorts, context) }),
        ...(input.Sources !== undefined &&
            input.Sources !== null && { Sources: serializeAws_json1_0Addresses(input.Sources, context) }),
        ...(input.TCPFlags !== undefined &&
            input.TCPFlags !== null && { TCPFlags: serializeAws_json1_0TCPFlags(input.TCPFlags, context) }),
    };
};
const serializeAws_json1_0PortRange = (input, context) => {
    return {
        ...(input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort }),
        ...(input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort }),
    };
};
const serializeAws_json1_0PortRanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0PortRange(entry, context);
    });
};
const serializeAws_json1_0PortSet = (input, context) => {
    return {
        ...(input.Definition !== undefined &&
            input.Definition !== null && {
            Definition: serializeAws_json1_0VariableDefinitionList(input.Definition, context),
        }),
    };
};
const serializeAws_json1_0PortSets = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_0PortSet(value, context),
        };
    }, {});
};
const serializeAws_json1_0ProtocolNumbers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0PublishMetricAction = (input, context) => {
    return {
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_json1_0Dimensions(input.Dimensions, context) }),
    };
};
const serializeAws_json1_0PutResourcePolicyRequest = (input, context) => {
    return {
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_0RuleDefinition = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_json1_0StatelessActions(input.Actions, context) }),
        ...(input.MatchAttributes !== undefined &&
            input.MatchAttributes !== null && {
            MatchAttributes: serializeAws_json1_0MatchAttributes(input.MatchAttributes, context),
        }),
    };
};
const serializeAws_json1_0RuleGroup = (input, context) => {
    return {
        ...(input.RuleVariables !== undefined &&
            input.RuleVariables !== null && {
            RuleVariables: serializeAws_json1_0RuleVariables(input.RuleVariables, context),
        }),
        ...(input.RulesSource !== undefined &&
            input.RulesSource !== null && { RulesSource: serializeAws_json1_0RulesSource(input.RulesSource, context) }),
    };
};
const serializeAws_json1_0RuleOption = (input, context) => {
    return {
        ...(input.Keyword !== undefined && input.Keyword !== null && { Keyword: input.Keyword }),
        ...(input.Settings !== undefined &&
            input.Settings !== null && { Settings: serializeAws_json1_0Settings(input.Settings, context) }),
    };
};
const serializeAws_json1_0RuleOptions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0RuleOption(entry, context);
    });
};
const serializeAws_json1_0RulesSource = (input, context) => {
    return {
        ...(input.RulesSourceList !== undefined &&
            input.RulesSourceList !== null && {
            RulesSourceList: serializeAws_json1_0RulesSourceList(input.RulesSourceList, context),
        }),
        ...(input.RulesString !== undefined && input.RulesString !== null && { RulesString: input.RulesString }),
        ...(input.StatefulRules !== undefined &&
            input.StatefulRules !== null && {
            StatefulRules: serializeAws_json1_0StatefulRules(input.StatefulRules, context),
        }),
        ...(input.StatelessRulesAndCustomActions !== undefined &&
            input.StatelessRulesAndCustomActions !== null && {
            StatelessRulesAndCustomActions: serializeAws_json1_0StatelessRulesAndCustomActions(input.StatelessRulesAndCustomActions, context),
        }),
    };
};
const serializeAws_json1_0RulesSourceList = (input, context) => {
    return {
        ...(input.GeneratedRulesType !== undefined &&
            input.GeneratedRulesType !== null && { GeneratedRulesType: input.GeneratedRulesType }),
        ...(input.TargetTypes !== undefined &&
            input.TargetTypes !== null && { TargetTypes: serializeAws_json1_0TargetTypes(input.TargetTypes, context) }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_0RuleTargets(input.Targets, context) }),
    };
};
const serializeAws_json1_0RuleTargets = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0RuleVariables = (input, context) => {
    return {
        ...(input.IPSets !== undefined &&
            input.IPSets !== null && { IPSets: serializeAws_json1_0IPSets(input.IPSets, context) }),
        ...(input.PortSets !== undefined &&
            input.PortSets !== null && { PortSets: serializeAws_json1_0PortSets(input.PortSets, context) }),
    };
};
const serializeAws_json1_0Settings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0StatefulRule = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Header !== undefined &&
            input.Header !== null && { Header: serializeAws_json1_0Header(input.Header, context) }),
        ...(input.RuleOptions !== undefined &&
            input.RuleOptions !== null && { RuleOptions: serializeAws_json1_0RuleOptions(input.RuleOptions, context) }),
    };
};
const serializeAws_json1_0StatefulRuleGroupReference = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_0StatefulRuleGroupReferences = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0StatefulRuleGroupReference(entry, context);
    });
};
const serializeAws_json1_0StatefulRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0StatefulRule(entry, context);
    });
};
const serializeAws_json1_0StatelessActions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0StatelessRule = (input, context) => {
    return {
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.RuleDefinition !== undefined &&
            input.RuleDefinition !== null && {
            RuleDefinition: serializeAws_json1_0RuleDefinition(input.RuleDefinition, context),
        }),
    };
};
const serializeAws_json1_0StatelessRuleGroupReference = (input, context) => {
    return {
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_0StatelessRuleGroupReferences = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0StatelessRuleGroupReference(entry, context);
    });
};
const serializeAws_json1_0StatelessRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0StatelessRule(entry, context);
    });
};
const serializeAws_json1_0StatelessRulesAndCustomActions = (input, context) => {
    return {
        ...(input.CustomActions !== undefined &&
            input.CustomActions !== null && {
            CustomActions: serializeAws_json1_0CustomActions(input.CustomActions, context),
        }),
        ...(input.StatelessRules !== undefined &&
            input.StatelessRules !== null && {
            StatelessRules: serializeAws_json1_0StatelessRules(input.StatelessRules, context),
        }),
    };
};
const serializeAws_json1_0SubnetMapping = (input, context) => {
    return {
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
    };
};
const serializeAws_json1_0SubnetMappings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0SubnetMapping(entry, context);
    });
};
const serializeAws_json1_0Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_0TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Tag(entry, context);
    });
};
const serializeAws_json1_0TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_0TargetTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0TCPFlagField = (input, context) => {
    return {
        ...(input.Flags !== undefined &&
            input.Flags !== null && { Flags: serializeAws_json1_0Flags(input.Flags, context) }),
        ...(input.Masks !== undefined &&
            input.Masks !== null && { Masks: serializeAws_json1_0Flags(input.Masks, context) }),
    };
};
const serializeAws_json1_0TCPFlags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0TCPFlagField(entry, context);
    });
};
const serializeAws_json1_0UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_0UpdateFirewallDeleteProtectionRequest = (input, context) => {
    return {
        ...(input.DeleteProtection !== undefined &&
            input.DeleteProtection !== null && { DeleteProtection: input.DeleteProtection }),
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
        ...(input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }),
    };
};
const serializeAws_json1_0UpdateFirewallDescriptionRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
        ...(input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }),
    };
};
const serializeAws_json1_0UpdateFirewallPolicyChangeProtectionRequest = (input, context) => {
    return {
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
        ...(input.FirewallPolicyChangeProtection !== undefined &&
            input.FirewallPolicyChangeProtection !== null && {
            FirewallPolicyChangeProtection: input.FirewallPolicyChangeProtection,
        }),
        ...(input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }),
    };
};
const serializeAws_json1_0UpdateFirewallPolicyRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.FirewallPolicy !== undefined &&
            input.FirewallPolicy !== null && {
            FirewallPolicy: serializeAws_json1_0FirewallPolicy(input.FirewallPolicy, context),
        }),
        ...(input.FirewallPolicyArn !== undefined &&
            input.FirewallPolicyArn !== null && { FirewallPolicyArn: input.FirewallPolicyArn }),
        ...(input.FirewallPolicyName !== undefined &&
            input.FirewallPolicyName !== null && { FirewallPolicyName: input.FirewallPolicyName }),
        ...(input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }),
    };
};
const serializeAws_json1_0UpdateLoggingConfigurationRequest = (input, context) => {
    return {
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
        ...(input.LoggingConfiguration !== undefined &&
            input.LoggingConfiguration !== null && {
            LoggingConfiguration: serializeAws_json1_0LoggingConfiguration(input.LoggingConfiguration, context),
        }),
    };
};
const serializeAws_json1_0UpdateRuleGroupRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.RuleGroup !== undefined &&
            input.RuleGroup !== null && { RuleGroup: serializeAws_json1_0RuleGroup(input.RuleGroup, context) }),
        ...(input.RuleGroupArn !== undefined && input.RuleGroupArn !== null && { RuleGroupArn: input.RuleGroupArn }),
        ...(input.RuleGroupName !== undefined && input.RuleGroupName !== null && { RuleGroupName: input.RuleGroupName }),
        ...(input.Rules !== undefined && input.Rules !== null && { Rules: input.Rules }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }),
    };
};
const serializeAws_json1_0UpdateSubnetChangeProtectionRequest = (input, context) => {
    return {
        ...(input.FirewallArn !== undefined && input.FirewallArn !== null && { FirewallArn: input.FirewallArn }),
        ...(input.FirewallName !== undefined && input.FirewallName !== null && { FirewallName: input.FirewallName }),
        ...(input.SubnetChangeProtection !== undefined &&
            input.SubnetChangeProtection !== null && { SubnetChangeProtection: input.SubnetChangeProtection }),
        ...(input.UpdateToken !== undefined && input.UpdateToken !== null && { UpdateToken: input.UpdateToken }),
    };
};
const serializeAws_json1_0VariableDefinitionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_0VpcIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0ActionDefinition = (output, context) => {
    return {
        PublishMetricAction: output.PublishMetricAction !== undefined && output.PublishMetricAction !== null
            ? deserializeAws_json1_0PublishMetricAction(output.PublishMetricAction, context)
            : undefined,
    };
};
const deserializeAws_json1_0Address = (output, context) => {
    return {
        AddressDefinition: output.AddressDefinition !== undefined && output.AddressDefinition !== null
            ? output.AddressDefinition
            : undefined,
    };
};
const deserializeAws_json1_0Addresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Address(entry, context);
    });
};
const deserializeAws_json1_0AssociateFirewallPolicyResponse = (output, context) => {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        FirewallPolicyArn: output.FirewallPolicyArn !== undefined && output.FirewallPolicyArn !== null
            ? output.FirewallPolicyArn
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0AssociateSubnetsResponse = (output, context) => {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        SubnetMappings: output.SubnetMappings !== undefined && output.SubnetMappings !== null
            ? deserializeAws_json1_0SubnetMappings(output.SubnetMappings, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0Attachment = (output, context) => {
    return {
        EndpointId: output.EndpointId !== undefined && output.EndpointId !== null ? output.EndpointId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    };
};
const deserializeAws_json1_0CreateFirewallPolicyResponse = (output, context) => {
    return {
        FirewallPolicyResponse: output.FirewallPolicyResponse !== undefined && output.FirewallPolicyResponse !== null
            ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0CreateFirewallResponse = (output, context) => {
    return {
        Firewall: output.Firewall !== undefined && output.Firewall !== null
            ? deserializeAws_json1_0Firewall(output.Firewall, context)
            : undefined,
        FirewallStatus: output.FirewallStatus !== undefined && output.FirewallStatus !== null
            ? deserializeAws_json1_0FirewallStatus(output.FirewallStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_0CreateRuleGroupResponse = (output, context) => {
    return {
        RuleGroupResponse: output.RuleGroupResponse !== undefined && output.RuleGroupResponse !== null
            ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0CustomAction = (output, context) => {
    return {
        ActionDefinition: output.ActionDefinition !== undefined && output.ActionDefinition !== null
            ? deserializeAws_json1_0ActionDefinition(output.ActionDefinition, context)
            : undefined,
        ActionName: output.ActionName !== undefined && output.ActionName !== null ? output.ActionName : undefined,
    };
};
const deserializeAws_json1_0CustomActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0CustomAction(entry, context);
    });
};
const deserializeAws_json1_0DeleteFirewallPolicyResponse = (output, context) => {
    return {
        FirewallPolicyResponse: output.FirewallPolicyResponse !== undefined && output.FirewallPolicyResponse !== null
            ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
            : undefined,
    };
};
const deserializeAws_json1_0DeleteFirewallResponse = (output, context) => {
    return {
        Firewall: output.Firewall !== undefined && output.Firewall !== null
            ? deserializeAws_json1_0Firewall(output.Firewall, context)
            : undefined,
        FirewallStatus: output.FirewallStatus !== undefined && output.FirewallStatus !== null
            ? deserializeAws_json1_0FirewallStatus(output.FirewallStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_0DeleteResourcePolicyResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_0DeleteRuleGroupResponse = (output, context) => {
    return {
        RuleGroupResponse: output.RuleGroupResponse !== undefined && output.RuleGroupResponse !== null
            ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeFirewallPolicyResponse = (output, context) => {
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
const deserializeAws_json1_0DescribeFirewallResponse = (output, context) => {
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
const deserializeAws_json1_0DescribeLoggingConfigurationResponse = (output, context) => {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        LoggingConfiguration: output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
            ? deserializeAws_json1_0LoggingConfiguration(output.LoggingConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_0DescribeResourcePolicyResponse = (output, context) => {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
const deserializeAws_json1_0DescribeRuleGroupResponse = (output, context) => {
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
const deserializeAws_json1_0Dimension = (output, context) => {
    return {
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_0Dimensions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Dimension(entry, context);
    });
};
const deserializeAws_json1_0DisassociateSubnetsResponse = (output, context) => {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        SubnetMappings: output.SubnetMappings !== undefined && output.SubnetMappings !== null
            ? deserializeAws_json1_0SubnetMappings(output.SubnetMappings, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0Firewall = (output, context) => {
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
const deserializeAws_json1_0FirewallMetadata = (output, context) => {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
    };
};
const deserializeAws_json1_0FirewallPolicies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0FirewallPolicyMetadata(entry, context);
    });
};
const deserializeAws_json1_0FirewallPolicy = (output, context) => {
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
const deserializeAws_json1_0FirewallPolicyMetadata = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_0FirewallPolicyResponse = (output, context) => {
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
const deserializeAws_json1_0Firewalls = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0FirewallMetadata(entry, context);
    });
};
const deserializeAws_json1_0FirewallStatus = (output, context) => {
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
const deserializeAws_json1_0Flags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0Header = (output, context) => {
    return {
        Destination: output.Destination !== undefined && output.Destination !== null ? output.Destination : undefined,
        DestinationPort: output.DestinationPort !== undefined && output.DestinationPort !== null ? output.DestinationPort : undefined,
        Direction: output.Direction !== undefined && output.Direction !== null ? output.Direction : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
        SourcePort: output.SourcePort !== undefined && output.SourcePort !== null ? output.SourcePort : undefined,
    };
};
const deserializeAws_json1_0InsufficientCapacityException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0InternalServerError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0InvalidOperationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0InvalidRequestException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0InvalidResourcePolicyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0InvalidTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0IPSet = (output, context) => {
    return {
        Definition: output.Definition !== undefined && output.Definition !== null
            ? deserializeAws_json1_0VariableDefinitionList(output.Definition, context)
            : undefined,
    };
};
const deserializeAws_json1_0IPSets = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0IPSet(value, context),
        };
    }, {});
};
const deserializeAws_json1_0LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0ListFirewallPoliciesResponse = (output, context) => {
    return {
        FirewallPolicies: output.FirewallPolicies !== undefined && output.FirewallPolicies !== null
            ? deserializeAws_json1_0FirewallPolicies(output.FirewallPolicies, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListFirewallsResponse = (output, context) => {
    return {
        Firewalls: output.Firewalls !== undefined && output.Firewalls !== null
            ? deserializeAws_json1_0Firewalls(output.Firewalls, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_0ListRuleGroupsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RuleGroups: output.RuleGroups !== undefined && output.RuleGroups !== null
            ? deserializeAws_json1_0RuleGroups(output.RuleGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_0ListTagsForResourceResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_0LogDestinationConfig = (output, context) => {
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
const deserializeAws_json1_0LogDestinationConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LogDestinationConfig(entry, context);
    });
};
const deserializeAws_json1_0LogDestinationMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_0LogDestinationPermissionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0LoggingConfiguration = (output, context) => {
    return {
        LogDestinationConfigs: output.LogDestinationConfigs !== undefined && output.LogDestinationConfigs !== null
            ? deserializeAws_json1_0LogDestinationConfigs(output.LogDestinationConfigs, context)
            : undefined,
    };
};
const deserializeAws_json1_0MatchAttributes = (output, context) => {
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
const deserializeAws_json1_0PerObjectStatus = (output, context) => {
    return {
        SyncStatus: output.SyncStatus !== undefined && output.SyncStatus !== null ? output.SyncStatus : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0PortRange = (output, context) => {
    return {
        FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
        ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
    };
};
const deserializeAws_json1_0PortRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0PortRange(entry, context);
    });
};
const deserializeAws_json1_0PortSet = (output, context) => {
    return {
        Definition: output.Definition !== undefined && output.Definition !== null
            ? deserializeAws_json1_0VariableDefinitionList(output.Definition, context)
            : undefined,
    };
};
const deserializeAws_json1_0PortSets = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0PortSet(value, context),
        };
    }, {});
};
const deserializeAws_json1_0ProtocolNumbers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0PublishMetricAction = (output, context) => {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_json1_0Dimensions(output.Dimensions, context)
            : undefined,
    };
};
const deserializeAws_json1_0PutResourcePolicyResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0ResourceOwnerCheckException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0RuleDefinition = (output, context) => {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_json1_0StatelessActions(output.Actions, context)
            : undefined,
        MatchAttributes: output.MatchAttributes !== undefined && output.MatchAttributes !== null
            ? deserializeAws_json1_0MatchAttributes(output.MatchAttributes, context)
            : undefined,
    };
};
const deserializeAws_json1_0RuleGroup = (output, context) => {
    return {
        RuleVariables: output.RuleVariables !== undefined && output.RuleVariables !== null
            ? deserializeAws_json1_0RuleVariables(output.RuleVariables, context)
            : undefined,
        RulesSource: output.RulesSource !== undefined && output.RulesSource !== null
            ? deserializeAws_json1_0RulesSource(output.RulesSource, context)
            : undefined,
    };
};
const deserializeAws_json1_0RuleGroupMetadata = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_0RuleGroupResponse = (output, context) => {
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
const deserializeAws_json1_0RuleGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RuleGroupMetadata(entry, context);
    });
};
const deserializeAws_json1_0RuleOption = (output, context) => {
    return {
        Keyword: output.Keyword !== undefined && output.Keyword !== null ? output.Keyword : undefined,
        Settings: output.Settings !== undefined && output.Settings !== null
            ? deserializeAws_json1_0Settings(output.Settings, context)
            : undefined,
    };
};
const deserializeAws_json1_0RuleOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0RuleOption(entry, context);
    });
};
const deserializeAws_json1_0RulesSource = (output, context) => {
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
const deserializeAws_json1_0RulesSourceList = (output, context) => {
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
const deserializeAws_json1_0RuleTargets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0RuleVariables = (output, context) => {
    return {
        IPSets: output.IPSets !== undefined && output.IPSets !== null
            ? deserializeAws_json1_0IPSets(output.IPSets, context)
            : undefined,
        PortSets: output.PortSets !== undefined && output.PortSets !== null
            ? deserializeAws_json1_0PortSets(output.PortSets, context)
            : undefined,
    };
};
const deserializeAws_json1_0Settings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0StatefulRule = (output, context) => {
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
const deserializeAws_json1_0StatefulRuleGroupReference = (output, context) => {
    return {
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
const deserializeAws_json1_0StatefulRuleGroupReferences = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0StatefulRuleGroupReference(entry, context);
    });
};
const deserializeAws_json1_0StatefulRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0StatefulRule(entry, context);
    });
};
const deserializeAws_json1_0StatelessActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0StatelessRule = (output, context) => {
    return {
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        RuleDefinition: output.RuleDefinition !== undefined && output.RuleDefinition !== null
            ? deserializeAws_json1_0RuleDefinition(output.RuleDefinition, context)
            : undefined,
    };
};
const deserializeAws_json1_0StatelessRuleGroupReference = (output, context) => {
    return {
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
const deserializeAws_json1_0StatelessRuleGroupReferences = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0StatelessRuleGroupReference(entry, context);
    });
};
const deserializeAws_json1_0StatelessRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0StatelessRule(entry, context);
    });
};
const deserializeAws_json1_0StatelessRulesAndCustomActions = (output, context) => {
    return {
        CustomActions: output.CustomActions !== undefined && output.CustomActions !== null
            ? deserializeAws_json1_0CustomActions(output.CustomActions, context)
            : undefined,
        StatelessRules: output.StatelessRules !== undefined && output.StatelessRules !== null
            ? deserializeAws_json1_0StatelessRules(output.StatelessRules, context)
            : undefined,
    };
};
const deserializeAws_json1_0SubnetMapping = (output, context) => {
    return {
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    };
};
const deserializeAws_json1_0SubnetMappings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0SubnetMapping(entry, context);
    });
};
const deserializeAws_json1_0SyncState = (output, context) => {
    return {
        Attachment: output.Attachment !== undefined && output.Attachment !== null
            ? deserializeAws_json1_0Attachment(output.Attachment, context)
            : undefined,
        Config: output.Config !== undefined && output.Config !== null
            ? deserializeAws_json1_0SyncStateConfig(output.Config, context)
            : undefined,
    };
};
const deserializeAws_json1_0SyncStateConfig = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0PerObjectStatus(value, context),
        };
    }, {});
};
const deserializeAws_json1_0SyncStates = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0SyncState(value, context),
        };
    }, {});
};
const deserializeAws_json1_0Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_0TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Tag(entry, context);
    });
};
const deserializeAws_json1_0TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_0TargetTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0TCPFlagField = (output, context) => {
    return {
        Flags: output.Flags !== undefined && output.Flags !== null
            ? deserializeAws_json1_0Flags(output.Flags, context)
            : undefined,
        Masks: output.Masks !== undefined && output.Masks !== null
            ? deserializeAws_json1_0Flags(output.Masks, context)
            : undefined,
    };
};
const deserializeAws_json1_0TCPFlags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0TCPFlagField(entry, context);
    });
};
const deserializeAws_json1_0ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0UnsupportedOperationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_0UpdateFirewallDeleteProtectionResponse = (output, context) => {
    return {
        DeleteProtection: output.DeleteProtection !== undefined && output.DeleteProtection !== null ? output.DeleteProtection : undefined,
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0UpdateFirewallDescriptionResponse = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionResponse = (output, context) => {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        FirewallPolicyChangeProtection: output.FirewallPolicyChangeProtection !== undefined && output.FirewallPolicyChangeProtection !== null
            ? output.FirewallPolicyChangeProtection
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0UpdateFirewallPolicyResponse = (output, context) => {
    return {
        FirewallPolicyResponse: output.FirewallPolicyResponse !== undefined && output.FirewallPolicyResponse !== null
            ? deserializeAws_json1_0FirewallPolicyResponse(output.FirewallPolicyResponse, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0UpdateLoggingConfigurationResponse = (output, context) => {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        LoggingConfiguration: output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
            ? deserializeAws_json1_0LoggingConfiguration(output.LoggingConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_0UpdateRuleGroupResponse = (output, context) => {
    return {
        RuleGroupResponse: output.RuleGroupResponse !== undefined && output.RuleGroupResponse !== null
            ? deserializeAws_json1_0RuleGroupResponse(output.RuleGroupResponse, context)
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0UpdateSubnetChangeProtectionResponse = (output, context) => {
    return {
        FirewallArn: output.FirewallArn !== undefined && output.FirewallArn !== null ? output.FirewallArn : undefined,
        FirewallName: output.FirewallName !== undefined && output.FirewallName !== null ? output.FirewallName : undefined,
        SubnetChangeProtection: output.SubnetChangeProtection !== undefined && output.SubnetChangeProtection !== null
            ? output.SubnetChangeProtection
            : undefined,
        UpdateToken: output.UpdateToken !== undefined && output.UpdateToken !== null ? output.UpdateToken : undefined,
    };
};
const deserializeAws_json1_0VariableDefinitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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
//# sourceMappingURL=Aws_json1_0.js.map