"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_queryDescribeLoadBalancersCommand = exports.deserializeAws_queryDescribeLoadBalancerAttributesCommand = exports.deserializeAws_queryDescribeListenersCommand = exports.deserializeAws_queryDescribeListenerCertificatesCommand = exports.deserializeAws_queryDescribeAccountLimitsCommand = exports.deserializeAws_queryDeregisterTargetsCommand = exports.deserializeAws_queryDeleteTargetGroupCommand = exports.deserializeAws_queryDeleteRuleCommand = exports.deserializeAws_queryDeleteLoadBalancerCommand = exports.deserializeAws_queryDeleteListenerCommand = exports.deserializeAws_queryCreateTargetGroupCommand = exports.deserializeAws_queryCreateRuleCommand = exports.deserializeAws_queryCreateLoadBalancerCommand = exports.deserializeAws_queryCreateListenerCommand = exports.deserializeAws_queryAddTagsCommand = exports.deserializeAws_queryAddListenerCertificatesCommand = exports.serializeAws_querySetSubnetsCommand = exports.serializeAws_querySetSecurityGroupsCommand = exports.serializeAws_querySetRulePrioritiesCommand = exports.serializeAws_querySetIpAddressTypeCommand = exports.serializeAws_queryRemoveTagsCommand = exports.serializeAws_queryRemoveListenerCertificatesCommand = exports.serializeAws_queryRegisterTargetsCommand = exports.serializeAws_queryModifyTargetGroupAttributesCommand = exports.serializeAws_queryModifyTargetGroupCommand = exports.serializeAws_queryModifyRuleCommand = exports.serializeAws_queryModifyLoadBalancerAttributesCommand = exports.serializeAws_queryModifyListenerCommand = exports.serializeAws_queryDescribeTargetHealthCommand = exports.serializeAws_queryDescribeTargetGroupsCommand = exports.serializeAws_queryDescribeTargetGroupAttributesCommand = exports.serializeAws_queryDescribeTagsCommand = exports.serializeAws_queryDescribeSSLPoliciesCommand = exports.serializeAws_queryDescribeRulesCommand = exports.serializeAws_queryDescribeLoadBalancersCommand = exports.serializeAws_queryDescribeLoadBalancerAttributesCommand = exports.serializeAws_queryDescribeListenersCommand = exports.serializeAws_queryDescribeListenerCertificatesCommand = exports.serializeAws_queryDescribeAccountLimitsCommand = exports.serializeAws_queryDeregisterTargetsCommand = exports.serializeAws_queryDeleteTargetGroupCommand = exports.serializeAws_queryDeleteRuleCommand = exports.serializeAws_queryDeleteLoadBalancerCommand = exports.serializeAws_queryDeleteListenerCommand = exports.serializeAws_queryCreateTargetGroupCommand = exports.serializeAws_queryCreateRuleCommand = exports.serializeAws_queryCreateLoadBalancerCommand = exports.serializeAws_queryCreateListenerCommand = exports.serializeAws_queryAddTagsCommand = exports.serializeAws_queryAddListenerCertificatesCommand = void 0;
exports.deserializeAws_querySetSubnetsCommand = exports.deserializeAws_querySetSecurityGroupsCommand = exports.deserializeAws_querySetRulePrioritiesCommand = exports.deserializeAws_querySetIpAddressTypeCommand = exports.deserializeAws_queryRemoveTagsCommand = exports.deserializeAws_queryRemoveListenerCertificatesCommand = exports.deserializeAws_queryRegisterTargetsCommand = exports.deserializeAws_queryModifyTargetGroupAttributesCommand = exports.deserializeAws_queryModifyTargetGroupCommand = exports.deserializeAws_queryModifyRuleCommand = exports.deserializeAws_queryModifyLoadBalancerAttributesCommand = exports.deserializeAws_queryModifyListenerCommand = exports.deserializeAws_queryDescribeTargetHealthCommand = exports.deserializeAws_queryDescribeTargetGroupsCommand = exports.deserializeAws_queryDescribeTargetGroupAttributesCommand = exports.deserializeAws_queryDescribeTagsCommand = exports.deserializeAws_queryDescribeSSLPoliciesCommand = exports.deserializeAws_queryDescribeRulesCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryAddListenerCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddListenerCertificatesInput(input, context),
        Action: "AddListenerCertificates",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddListenerCertificatesCommand = serializeAws_queryAddListenerCertificatesCommand;
const serializeAws_queryAddTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddTagsInput(input, context),
        Action: "AddTags",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddTagsCommand = serializeAws_queryAddTagsCommand;
const serializeAws_queryCreateListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateListenerInput(input, context),
        Action: "CreateListener",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateListenerCommand = serializeAws_queryCreateListenerCommand;
const serializeAws_queryCreateLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateLoadBalancerInput(input, context),
        Action: "CreateLoadBalancer",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateLoadBalancerCommand = serializeAws_queryCreateLoadBalancerCommand;
const serializeAws_queryCreateRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateRuleInput(input, context),
        Action: "CreateRule",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateRuleCommand = serializeAws_queryCreateRuleCommand;
const serializeAws_queryCreateTargetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateTargetGroupInput(input, context),
        Action: "CreateTargetGroup",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateTargetGroupCommand = serializeAws_queryCreateTargetGroupCommand;
const serializeAws_queryDeleteListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteListenerInput(input, context),
        Action: "DeleteListener",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteListenerCommand = serializeAws_queryDeleteListenerCommand;
const serializeAws_queryDeleteLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteLoadBalancerInput(input, context),
        Action: "DeleteLoadBalancer",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteLoadBalancerCommand = serializeAws_queryDeleteLoadBalancerCommand;
const serializeAws_queryDeleteRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteRuleInput(input, context),
        Action: "DeleteRule",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteRuleCommand = serializeAws_queryDeleteRuleCommand;
const serializeAws_queryDeleteTargetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteTargetGroupInput(input, context),
        Action: "DeleteTargetGroup",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteTargetGroupCommand = serializeAws_queryDeleteTargetGroupCommand;
const serializeAws_queryDeregisterTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeregisterTargetsInput(input, context),
        Action: "DeregisterTargets",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeregisterTargetsCommand = serializeAws_queryDeregisterTargetsCommand;
const serializeAws_queryDescribeAccountLimitsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAccountLimitsInput(input, context),
        Action: "DescribeAccountLimits",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAccountLimitsCommand = serializeAws_queryDescribeAccountLimitsCommand;
const serializeAws_queryDescribeListenerCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeListenerCertificatesInput(input, context),
        Action: "DescribeListenerCertificates",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeListenerCertificatesCommand = serializeAws_queryDescribeListenerCertificatesCommand;
const serializeAws_queryDescribeListenersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeListenersInput(input, context),
        Action: "DescribeListeners",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeListenersCommand = serializeAws_queryDescribeListenersCommand;
const serializeAws_queryDescribeLoadBalancerAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeLoadBalancerAttributesInput(input, context),
        Action: "DescribeLoadBalancerAttributes",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLoadBalancerAttributesCommand = serializeAws_queryDescribeLoadBalancerAttributesCommand;
const serializeAws_queryDescribeLoadBalancersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeLoadBalancersInput(input, context),
        Action: "DescribeLoadBalancers",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLoadBalancersCommand = serializeAws_queryDescribeLoadBalancersCommand;
const serializeAws_queryDescribeRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeRulesInput(input, context),
        Action: "DescribeRules",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeRulesCommand = serializeAws_queryDescribeRulesCommand;
const serializeAws_queryDescribeSSLPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeSSLPoliciesInput(input, context),
        Action: "DescribeSSLPolicies",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeSSLPoliciesCommand = serializeAws_queryDescribeSSLPoliciesCommand;
const serializeAws_queryDescribeTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeTagsInput(input, context),
        Action: "DescribeTags",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTagsCommand = serializeAws_queryDescribeTagsCommand;
const serializeAws_queryDescribeTargetGroupAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeTargetGroupAttributesInput(input, context),
        Action: "DescribeTargetGroupAttributes",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTargetGroupAttributesCommand = serializeAws_queryDescribeTargetGroupAttributesCommand;
const serializeAws_queryDescribeTargetGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeTargetGroupsInput(input, context),
        Action: "DescribeTargetGroups",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTargetGroupsCommand = serializeAws_queryDescribeTargetGroupsCommand;
const serializeAws_queryDescribeTargetHealthCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeTargetHealthInput(input, context),
        Action: "DescribeTargetHealth",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTargetHealthCommand = serializeAws_queryDescribeTargetHealthCommand;
const serializeAws_queryModifyListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyListenerInput(input, context),
        Action: "ModifyListener",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyListenerCommand = serializeAws_queryModifyListenerCommand;
const serializeAws_queryModifyLoadBalancerAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyLoadBalancerAttributesInput(input, context),
        Action: "ModifyLoadBalancerAttributes",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyLoadBalancerAttributesCommand = serializeAws_queryModifyLoadBalancerAttributesCommand;
const serializeAws_queryModifyRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyRuleInput(input, context),
        Action: "ModifyRule",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyRuleCommand = serializeAws_queryModifyRuleCommand;
const serializeAws_queryModifyTargetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyTargetGroupInput(input, context),
        Action: "ModifyTargetGroup",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyTargetGroupCommand = serializeAws_queryModifyTargetGroupCommand;
const serializeAws_queryModifyTargetGroupAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyTargetGroupAttributesInput(input, context),
        Action: "ModifyTargetGroupAttributes",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyTargetGroupAttributesCommand = serializeAws_queryModifyTargetGroupAttributesCommand;
const serializeAws_queryRegisterTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRegisterTargetsInput(input, context),
        Action: "RegisterTargets",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRegisterTargetsCommand = serializeAws_queryRegisterTargetsCommand;
const serializeAws_queryRemoveListenerCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveListenerCertificatesInput(input, context),
        Action: "RemoveListenerCertificates",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveListenerCertificatesCommand = serializeAws_queryRemoveListenerCertificatesCommand;
const serializeAws_queryRemoveTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveTagsInput(input, context),
        Action: "RemoveTags",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveTagsCommand = serializeAws_queryRemoveTagsCommand;
const serializeAws_querySetIpAddressTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetIpAddressTypeInput(input, context),
        Action: "SetIpAddressType",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetIpAddressTypeCommand = serializeAws_querySetIpAddressTypeCommand;
const serializeAws_querySetRulePrioritiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetRulePrioritiesInput(input, context),
        Action: "SetRulePriorities",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetRulePrioritiesCommand = serializeAws_querySetRulePrioritiesCommand;
const serializeAws_querySetSecurityGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetSecurityGroupsInput(input, context),
        Action: "SetSecurityGroups",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetSecurityGroupsCommand = serializeAws_querySetSecurityGroupsCommand;
const serializeAws_querySetSubnetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetSubnetsInput(input, context),
        Action: "SetSubnets",
        Version: "2015-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetSubnetsCommand = serializeAws_querySetSubnetsCommand;
const deserializeAws_queryAddListenerCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddListenerCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAddListenerCertificatesOutput(data.AddListenerCertificatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddListenerCertificatesCommand = deserializeAws_queryAddListenerCertificatesCommand;
const deserializeAws_queryAddListenerCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
            response = {
                ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyCertificatesException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
            response = {
                ...(await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAddTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAddTagsOutput(data.AddTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddTagsCommand = deserializeAws_queryAddTagsCommand;
const deserializeAws_queryAddTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateTagKeysException":
        case "com.amazonaws.elasticloadbalancingv2#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
            response = {
                ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateListenerOutput(data.CreateListenerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateListenerCommand = deserializeAws_queryCreateListenerCommand;
const deserializeAws_queryCreateListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ALPNPolicyNotSupportedException":
        case "com.amazonaws.elasticloadbalancingv2#ALPNPolicyNotSupportedException":
            response = {
                ...(await deserializeAws_queryALPNPolicyNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CertificateNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
            response = {
                ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateListenerException":
        case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException":
            response = {
                ...(await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleProtocolsException":
        case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
            response = {
                ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLoadBalancerActionException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
            response = {
                ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SSLPolicyNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
            response = {
                ...(await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupAssociationLimitException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
            response = {
                ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyActionsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
            response = {
                ...(await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyCertificatesException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
            response = {
                ...(await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyListenersException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException":
            response = {
                ...(await deserializeAws_queryTooManyListenersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRegistrationsForTargetIdException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
            response = {
                ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
            response = {
                ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTargetsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
            response = {
                ...(await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUniqueTargetGroupsPerLoadBalancerException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
            response = {
                ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedProtocolException":
        case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
            response = {
                ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateLoadBalancerOutput(data.CreateLoadBalancerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateLoadBalancerCommand = deserializeAws_queryCreateLoadBalancerCommand;
const deserializeAws_queryCreateLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AllocationIdNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#AllocationIdNotFoundException":
            response = {
                ...(await deserializeAws_queryAllocationIdNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AvailabilityZoneNotSupportedException":
        case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException":
            response = {
                ...(await deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateLoadBalancerNameException":
        case "com.amazonaws.elasticloadbalancingv2#DuplicateLoadBalancerNameException":
            response = {
                ...(await deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.elasticloadbalancingv2#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSchemeException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidSchemeException":
            response = {
                ...(await deserializeAws_queryInvalidSchemeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityGroupException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException":
            response = {
                ...(await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnetException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
            response = {
                ...(await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException":
            response = {
                ...(await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyLoadBalancersException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyLoadBalancersException":
            response = {
                ...(await deserializeAws_queryTooManyLoadBalancersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
            response = {
                ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateRuleOutput(data.CreateRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateRuleCommand = deserializeAws_queryCreateRuleCommand;
const deserializeAws_queryCreateRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IncompatibleProtocolsException":
        case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
            response = {
                ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLoadBalancerActionException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
            response = {
                ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PriorityInUseException":
        case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException":
            response = {
                ...(await deserializeAws_queryPriorityInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupAssociationLimitException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
            response = {
                ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyActionsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
            response = {
                ...(await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRegistrationsForTargetIdException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
            response = {
                ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRulesException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyRulesException":
            response = {
                ...(await deserializeAws_queryTooManyRulesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
            response = {
                ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTargetGroupsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException":
            response = {
                ...(await deserializeAws_queryTooManyTargetGroupsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTargetsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
            response = {
                ...(await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUniqueTargetGroupsPerLoadBalancerException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
            response = {
                ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedProtocolException":
        case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
            response = {
                ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateTargetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateTargetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateTargetGroupOutput(data.CreateTargetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateTargetGroupCommand = deserializeAws_queryCreateTargetGroupCommand;
const deserializeAws_queryCreateTargetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateTargetGroupNameException":
        case "com.amazonaws.elasticloadbalancingv2#DuplicateTargetGroupNameException":
            response = {
                ...(await deserializeAws_queryDuplicateTargetGroupNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
            response = {
                ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTargetGroupsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTargetGroupsException":
            response = {
                ...(await deserializeAws_queryTooManyTargetGroupsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteListenerOutput(data.DeleteListenerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteListenerCommand = deserializeAws_queryDeleteListenerCommand;
const deserializeAws_queryDeleteListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteLoadBalancerOutput(data.DeleteLoadBalancerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteLoadBalancerCommand = deserializeAws_queryDeleteLoadBalancerCommand;
const deserializeAws_queryDeleteLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteRuleOutput(data.DeleteRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteRuleCommand = deserializeAws_queryDeleteRuleCommand;
const deserializeAws_queryDeleteRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedException":
        case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
            response = {
                ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteTargetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteTargetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteTargetGroupOutput(data.DeleteTargetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteTargetGroupCommand = deserializeAws_queryDeleteTargetGroupCommand;
const deserializeAws_queryDeleteTargetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazonaws.elasticloadbalancingv2#ResourceInUseException":
            response = {
                ...(await deserializeAws_queryResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeregisterTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeregisterTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeregisterTargetsOutput(data.DeregisterTargetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeregisterTargetsCommand = deserializeAws_queryDeregisterTargetsCommand;
const deserializeAws_queryDeregisterTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTargetException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
            response = {
                ...(await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeAccountLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeAccountLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAccountLimitsOutput(data.DescribeAccountLimitsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAccountLimitsCommand = deserializeAws_queryDescribeAccountLimitsCommand;
const deserializeAws_queryDescribeAccountLimitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeListenerCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeListenerCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeListenerCertificatesOutput(data.DescribeListenerCertificatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeListenerCertificatesCommand = deserializeAws_queryDescribeListenerCertificatesCommand;
const deserializeAws_queryDescribeListenerCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeListenersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeListenersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeListenersOutput(data.DescribeListenersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeListenersCommand = deserializeAws_queryDescribeListenersCommand;
const deserializeAws_queryDescribeListenersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedProtocolException":
        case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
            response = {
                ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeLoadBalancerAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeLoadBalancerAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLoadBalancerAttributesOutput(data.DescribeLoadBalancerAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeLoadBalancerAttributesCommand = deserializeAws_queryDescribeLoadBalancerAttributesCommand;
const deserializeAws_queryDescribeLoadBalancerAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeLoadBalancersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeLoadBalancersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLoadBalancersOutput(data.DescribeLoadBalancersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeLoadBalancersCommand = deserializeAws_queryDescribeLoadBalancersCommand;
const deserializeAws_queryDescribeLoadBalancersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeRulesOutput(data.DescribeRulesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeRulesCommand = deserializeAws_queryDescribeRulesCommand;
const deserializeAws_queryDescribeRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
            response = {
                ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedProtocolException":
        case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
            response = {
                ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeSSLPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeSSLPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeSSLPoliciesOutput(data.DescribeSSLPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeSSLPoliciesCommand = deserializeAws_queryDescribeSSLPoliciesCommand;
const deserializeAws_queryDescribeSSLPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "SSLPolicyNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
            response = {
                ...(await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTagsOutput(data.DescribeTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeTagsCommand = deserializeAws_queryDescribeTagsCommand;
const deserializeAws_queryDescribeTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
            response = {
                ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeTargetGroupAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeTargetGroupAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTargetGroupAttributesOutput(data.DescribeTargetGroupAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeTargetGroupAttributesCommand = deserializeAws_queryDescribeTargetGroupAttributesCommand;
const deserializeAws_queryDescribeTargetGroupAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeTargetGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeTargetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTargetGroupsOutput(data.DescribeTargetGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeTargetGroupsCommand = deserializeAws_queryDescribeTargetGroupsCommand;
const deserializeAws_queryDescribeTargetGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeTargetHealthCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeTargetHealthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeTargetHealthOutput(data.DescribeTargetHealthResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeTargetHealthCommand = deserializeAws_queryDescribeTargetHealthCommand;
const deserializeAws_queryDescribeTargetHealthCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HealthUnavailableException":
        case "com.amazonaws.elasticloadbalancingv2#HealthUnavailableException":
            response = {
                ...(await deserializeAws_queryHealthUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
            response = {
                ...(await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyListenerOutput(data.ModifyListenerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyListenerCommand = deserializeAws_queryModifyListenerCommand;
const deserializeAws_queryModifyListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ALPNPolicyNotSupportedException":
        case "com.amazonaws.elasticloadbalancingv2#ALPNPolicyNotSupportedException":
            response = {
                ...(await deserializeAws_queryALPNPolicyNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CertificateNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#CertificateNotFoundException":
            response = {
                ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateListenerException":
        case "com.amazonaws.elasticloadbalancingv2#DuplicateListenerException":
            response = {
                ...(await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleProtocolsException":
        case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
            response = {
                ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLoadBalancerActionException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
            response = {
                ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SSLPolicyNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#SSLPolicyNotFoundException":
            response = {
                ...(await deserializeAws_querySSLPolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupAssociationLimitException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
            response = {
                ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyActionsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
            response = {
                ...(await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyCertificatesException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyCertificatesException":
            response = {
                ...(await deserializeAws_queryTooManyCertificatesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyListenersException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyListenersException":
            response = {
                ...(await deserializeAws_queryTooManyListenersExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRegistrationsForTargetIdException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
            response = {
                ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTargetsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
            response = {
                ...(await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUniqueTargetGroupsPerLoadBalancerException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
            response = {
                ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedProtocolException":
        case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
            response = {
                ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyLoadBalancerAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyLoadBalancerAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyLoadBalancerAttributesOutput(data.ModifyLoadBalancerAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyLoadBalancerAttributesCommand = deserializeAws_queryModifyLoadBalancerAttributesCommand;
const deserializeAws_queryModifyLoadBalancerAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyRuleOutput(data.ModifyRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyRuleCommand = deserializeAws_queryModifyRuleCommand;
const deserializeAws_queryModifyRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IncompatibleProtocolsException":
        case "com.amazonaws.elasticloadbalancingv2#IncompatibleProtocolsException":
            response = {
                ...(await deserializeAws_queryIncompatibleProtocolsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLoadBalancerActionException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidLoadBalancerActionException":
            response = {
                ...(await deserializeAws_queryInvalidLoadBalancerActionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
            response = {
                ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupAssociationLimitException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupAssociationLimitException":
            response = {
                ...(await deserializeAws_queryTargetGroupAssociationLimitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyActionsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyActionsException":
            response = {
                ...(await deserializeAws_queryTooManyActionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRegistrationsForTargetIdException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
            response = {
                ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTargetsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
            response = {
                ...(await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyUniqueTargetGroupsPerLoadBalancerException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyUniqueTargetGroupsPerLoadBalancerException":
            response = {
                ...(await deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedProtocolException":
        case "com.amazonaws.elasticloadbalancingv2#UnsupportedProtocolException":
            response = {
                ...(await deserializeAws_queryUnsupportedProtocolExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyTargetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyTargetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyTargetGroupOutput(data.ModifyTargetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyTargetGroupCommand = deserializeAws_queryModifyTargetGroupCommand;
const deserializeAws_queryModifyTargetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyTargetGroupAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyTargetGroupAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyTargetGroupAttributesOutput(data.ModifyTargetGroupAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyTargetGroupAttributesCommand = deserializeAws_queryModifyTargetGroupAttributesCommand;
const deserializeAws_queryModifyTargetGroupAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRegisterTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRegisterTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRegisterTargetsOutput(data.RegisterTargetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRegisterTargetsCommand = deserializeAws_queryRegisterTargetsCommand;
const deserializeAws_queryRegisterTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTargetException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidTargetException":
            response = {
                ...(await deserializeAws_queryInvalidTargetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRegistrationsForTargetIdException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyRegistrationsForTargetIdException":
            response = {
                ...(await deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTargetsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTargetsException":
            response = {
                ...(await deserializeAws_queryTooManyTargetsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRemoveListenerCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemoveListenerCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRemoveListenerCertificatesOutput(data.RemoveListenerCertificatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemoveListenerCertificatesCommand = deserializeAws_queryRemoveListenerCertificatesCommand;
const deserializeAws_queryRemoveListenerCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRemoveTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemoveTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRemoveTagsOutput(data.RemoveTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemoveTagsCommand = deserializeAws_queryRemoveTagsCommand;
const deserializeAws_queryRemoveTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
            response = {
                ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetGroupNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#TargetGroupNotFoundException":
            response = {
                ...(await deserializeAws_queryTargetGroupNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.elasticloadbalancingv2#TooManyTagsException":
            response = {
                ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetIpAddressTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetIpAddressTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetIpAddressTypeOutput(data.SetIpAddressTypeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetIpAddressTypeCommand = deserializeAws_querySetIpAddressTypeCommand;
const deserializeAws_querySetIpAddressTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnetException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
            response = {
                ...(await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetRulePrioritiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetRulePrioritiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetRulePrioritiesOutput(data.SetRulePrioritiesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetRulePrioritiesCommand = deserializeAws_querySetRulePrioritiesCommand;
const deserializeAws_querySetRulePrioritiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedException":
        case "com.amazonaws.elasticloadbalancingv2#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PriorityInUseException":
        case "com.amazonaws.elasticloadbalancingv2#PriorityInUseException":
            response = {
                ...(await deserializeAws_queryPriorityInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#RuleNotFoundException":
            response = {
                ...(await deserializeAws_queryRuleNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetSecurityGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetSecurityGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetSecurityGroupsOutput(data.SetSecurityGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetSecurityGroupsCommand = deserializeAws_querySetSecurityGroupsCommand;
const deserializeAws_querySetSecurityGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityGroupException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidSecurityGroupException":
            response = {
                ...(await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetSubnetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetSubnetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetSubnetsOutput(data.SetSubnetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetSubnetsCommand = deserializeAws_querySetSubnetsCommand;
const deserializeAws_querySetSubnetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AllocationIdNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#AllocationIdNotFoundException":
            response = {
                ...(await deserializeAws_queryAllocationIdNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AvailabilityZoneNotSupportedException":
        case "com.amazonaws.elasticloadbalancingv2#AvailabilityZoneNotSupportedException":
            response = {
                ...(await deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnetException":
        case "com.amazonaws.elasticloadbalancingv2#InvalidSubnetException":
            response = {
                ...(await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#LoadBalancerNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetNotFoundException":
        case "com.amazonaws.elasticloadbalancingv2#SubnetNotFoundException":
            response = {
                ...(await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAllocationIdNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAllocationIdNotFoundException(body.Error, context);
    const contents = {
        name: "AllocationIdNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryALPNPolicyNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryALPNPolicyNotSupportedException(body.Error, context);
    const contents = {
        name: "ALPNPolicyNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryAvailabilityZoneNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAvailabilityZoneNotSupportedException(body.Error, context);
    const contents = {
        name: "AvailabilityZoneNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCertificateNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCertificateNotFoundException(body.Error, context);
    const contents = {
        name: "CertificateNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDuplicateListenerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateListenerException(body.Error, context);
    const contents = {
        name: "DuplicateListenerException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDuplicateLoadBalancerNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateLoadBalancerNameException(body.Error, context);
    const contents = {
        name: "DuplicateLoadBalancerNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDuplicateTagKeysExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateTagKeysException(body.Error, context);
    const contents = {
        name: "DuplicateTagKeysException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDuplicateTargetGroupNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateTargetGroupNameException(body.Error, context);
    const contents = {
        name: "DuplicateTargetGroupNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryHealthUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHealthUnavailableException(body.Error, context);
    const contents = {
        name: "HealthUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryIncompatibleProtocolsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIncompatibleProtocolsException(body.Error, context);
    const contents = {
        name: "IncompatibleProtocolsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidConfigurationRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidConfigurationRequestException(body.Error, context);
    const contents = {
        name: "InvalidConfigurationRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidLoadBalancerActionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidLoadBalancerActionException(body.Error, context);
    const contents = {
        name: "InvalidLoadBalancerActionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidSchemeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSchemeException(body.Error, context);
    const contents = {
        name: "InvalidSchemeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidSecurityGroupExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSecurityGroupException(body.Error, context);
    const contents = {
        name: "InvalidSecurityGroupException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidSubnetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSubnetException(body.Error, context);
    const contents = {
        name: "InvalidSubnetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidTargetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTargetException(body.Error, context);
    const contents = {
        name: "InvalidTargetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryListenerNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryListenerNotFoundException(body.Error, context);
    const contents = {
        name: "ListenerNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryLoadBalancerNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLoadBalancerNotFoundException(body.Error, context);
    const contents = {
        name: "LoadBalancerNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryOperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOperationNotPermittedException(body.Error, context);
    const contents = {
        name: "OperationNotPermittedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryPriorityInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPriorityInUseException(body.Error, context);
    const contents = {
        name: "PriorityInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceInUseException(body.Error, context);
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryRuleNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryRuleNotFoundException(body.Error, context);
    const contents = {
        name: "RuleNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySSLPolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySSLPolicyNotFoundException(body.Error, context);
    const contents = {
        name: "SSLPolicyNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySubnetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubnetNotFoundException(body.Error, context);
    const contents = {
        name: "SubnetNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTargetGroupAssociationLimitExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTargetGroupAssociationLimitException(body.Error, context);
    const contents = {
        name: "TargetGroupAssociationLimitException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTargetGroupNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTargetGroupNotFoundException(body.Error, context);
    const contents = {
        name: "TargetGroupNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyActionsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyActionsException(body.Error, context);
    const contents = {
        name: "TooManyActionsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyCertificatesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyCertificatesException(body.Error, context);
    const contents = {
        name: "TooManyCertificatesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyListenersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyListenersException(body.Error, context);
    const contents = {
        name: "TooManyListenersException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyLoadBalancersExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyLoadBalancersException(body.Error, context);
    const contents = {
        name: "TooManyLoadBalancersException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyRegistrationsForTargetIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyRegistrationsForTargetIdException(body.Error, context);
    const contents = {
        name: "TooManyRegistrationsForTargetIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyRulesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyRulesException(body.Error, context);
    const contents = {
        name: "TooManyRulesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyTagsException(body.Error, context);
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyTargetGroupsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyTargetGroupsException(body.Error, context);
    const contents = {
        name: "TooManyTargetGroupsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyTargetsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyTargetsException(body.Error, context);
    const contents = {
        name: "TooManyTargetsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException(body.Error, context);
    const contents = {
        name: "TooManyUniqueTargetGroupsPerLoadBalancerException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUnsupportedProtocolExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnsupportedProtocolException(body.Error, context);
    const contents = {
        name: "UnsupportedProtocolException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_queryAction = (input, context) => {
    const entries = {};
    if (input.Type !== undefined && input.Type !== null) {
        entries["Type"] = input.Type;
    }
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.AuthenticateOidcConfig !== undefined && input.AuthenticateOidcConfig !== null) {
        const memberEntries = serializeAws_queryAuthenticateOidcActionConfig(input.AuthenticateOidcConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AuthenticateOidcConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AuthenticateCognitoConfig !== undefined && input.AuthenticateCognitoConfig !== null) {
        const memberEntries = serializeAws_queryAuthenticateCognitoActionConfig(input.AuthenticateCognitoConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AuthenticateCognitoConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Order !== undefined && input.Order !== null) {
        entries["Order"] = input.Order;
    }
    if (input.RedirectConfig !== undefined && input.RedirectConfig !== null) {
        const memberEntries = serializeAws_queryRedirectActionConfig(input.RedirectConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RedirectConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.FixedResponseConfig !== undefined && input.FixedResponseConfig !== null) {
        const memberEntries = serializeAws_queryFixedResponseActionConfig(input.FixedResponseConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `FixedResponseConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ForwardConfig !== undefined && input.ForwardConfig !== null) {
        const memberEntries = serializeAws_queryForwardActionConfig(input.ForwardConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ForwardConfig.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryActions = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryAction(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryAddListenerCertificatesInput = (input, context) => {
    const entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Certificates !== undefined && input.Certificates !== null) {
        const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Certificates.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryAddTagsInput = (input, context) => {
    const entries = {};
    if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
        const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResourceArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryAlpnPolicyName = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryAuthenticateCognitoActionConfig = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(input.AuthenticationRequestExtraParams, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AuthenticationRequestExtraParams.${key}`;
            entries[loc] = value;
        });
    }
    if (input.OnUnauthenticatedRequest !== undefined && input.OnUnauthenticatedRequest !== null) {
        entries["OnUnauthenticatedRequest"] = input.OnUnauthenticatedRequest;
    }
    return entries;
};
const serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryAuthenticateOidcActionConfig = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(input.AuthenticationRequestExtraParams, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AuthenticationRequestExtraParams.${key}`;
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
const serializeAws_queryCertificate = (input, context) => {
    const entries = {};
    if (input.CertificateArn !== undefined && input.CertificateArn !== null) {
        entries["CertificateArn"] = input.CertificateArn;
    }
    if (input.IsDefault !== undefined && input.IsDefault !== null) {
        entries["IsDefault"] = input.IsDefault;
    }
    return entries;
};
const serializeAws_queryCertificateList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryCertificate(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryCreateListenerInput = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Certificates.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DefaultActions !== undefined && input.DefaultActions !== null) {
        const memberEntries = serializeAws_queryActions(input.DefaultActions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DefaultActions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AlpnPolicy !== undefined && input.AlpnPolicy !== null) {
        const memberEntries = serializeAws_queryAlpnPolicyName(input.AlpnPolicy, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AlpnPolicy.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateLoadBalancerInput = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Subnets !== undefined && input.Subnets !== null) {
        const memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Subnets.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SubnetMappings !== undefined && input.SubnetMappings !== null) {
        const memberEntries = serializeAws_querySubnetMappings(input.SubnetMappings, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SubnetMappings.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SecurityGroups !== undefined && input.SecurityGroups !== null) {
        const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SecurityGroups.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Scheme !== undefined && input.Scheme !== null) {
        entries["Scheme"] = input.Scheme;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
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
const serializeAws_queryCreateRuleInput = (input, context) => {
    const entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Conditions !== undefined && input.Conditions !== null) {
        const memberEntries = serializeAws_queryRuleConditionList(input.Conditions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Conditions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Priority !== undefined && input.Priority !== null) {
        entries["Priority"] = input.Priority;
    }
    if (input.Actions !== undefined && input.Actions !== null) {
        const memberEntries = serializeAws_queryActions(input.Actions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Actions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateTargetGroupInput = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryMatcher(input.Matcher, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Matcher.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TargetType !== undefined && input.TargetType !== null) {
        entries["TargetType"] = input.TargetType;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDeleteListenerInput = (input, context) => {
    const entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    return entries;
};
const serializeAws_queryDeleteLoadBalancerInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    return entries;
};
const serializeAws_queryDeleteRuleInput = (input, context) => {
    const entries = {};
    if (input.RuleArn !== undefined && input.RuleArn !== null) {
        entries["RuleArn"] = input.RuleArn;
    }
    return entries;
};
const serializeAws_queryDeleteTargetGroupInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    return entries;
};
const serializeAws_queryDeregisterTargetsInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Targets !== undefined && input.Targets !== null) {
        const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Targets.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeAccountLimitsInput = (input, context) => {
    const entries = {};
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.PageSize !== undefined && input.PageSize !== null) {
        entries["PageSize"] = input.PageSize;
    }
    return entries;
};
const serializeAws_queryDescribeListenerCertificatesInput = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeListenersInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.ListenerArns !== undefined && input.ListenerArns !== null) {
        const memberEntries = serializeAws_queryListenerArns(input.ListenerArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ListenerArns.${key}`;
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
const serializeAws_queryDescribeLoadBalancerAttributesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancersInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArns !== undefined && input.LoadBalancerArns !== null) {
        const memberEntries = serializeAws_queryLoadBalancerArns(input.LoadBalancerArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LoadBalancerArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Names !== undefined && input.Names !== null) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.Names, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Names.${key}`;
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
const serializeAws_queryDescribeRulesInput = (input, context) => {
    const entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.RuleArns !== undefined && input.RuleArns !== null) {
        const memberEntries = serializeAws_queryRuleArns(input.RuleArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RuleArns.${key}`;
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
const serializeAws_queryDescribeSSLPoliciesInput = (input, context) => {
    const entries = {};
    if (input.Names !== undefined && input.Names !== null) {
        const memberEntries = serializeAws_querySslPolicyNames(input.Names, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Names.${key}`;
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
const serializeAws_queryDescribeTagsInput = (input, context) => {
    const entries = {};
    if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
        const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResourceArns.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeTargetGroupAttributesInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    return entries;
};
const serializeAws_queryDescribeTargetGroupsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.TargetGroupArns !== undefined && input.TargetGroupArns !== null) {
        const memberEntries = serializeAws_queryTargetGroupArns(input.TargetGroupArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TargetGroupArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Names !== undefined && input.Names !== null) {
        const memberEntries = serializeAws_queryTargetGroupNames(input.Names, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Names.${key}`;
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
const serializeAws_queryDescribeTargetHealthInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Targets !== undefined && input.Targets !== null) {
        const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Targets.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryFixedResponseActionConfig = (input, context) => {
    const entries = {};
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
const serializeAws_queryForwardActionConfig = (input, context) => {
    const entries = {};
    if (input.TargetGroups !== undefined && input.TargetGroups !== null) {
        const memberEntries = serializeAws_queryTargetGroupList(input.TargetGroups, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TargetGroups.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TargetGroupStickinessConfig !== undefined && input.TargetGroupStickinessConfig !== null) {
        const memberEntries = serializeAws_queryTargetGroupStickinessConfig(input.TargetGroupStickinessConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TargetGroupStickinessConfig.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryHostHeaderConditionConfig = (input, context) => {
    const entries = {};
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryHttpHeaderConditionConfig = (input, context) => {
    const entries = {};
    if (input.HttpHeaderName !== undefined && input.HttpHeaderName !== null) {
        entries["HttpHeaderName"] = input.HttpHeaderName;
    }
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryHttpRequestMethodConditionConfig = (input, context) => {
    const entries = {};
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryListenerArns = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryListOfString = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryLoadBalancerArns = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryLoadBalancerAttribute = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryLoadBalancerAttributes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryLoadBalancerAttribute(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryLoadBalancerNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryMatcher = (input, context) => {
    const entries = {};
    if (input.HttpCode !== undefined && input.HttpCode !== null) {
        entries["HttpCode"] = input.HttpCode;
    }
    if (input.GrpcCode !== undefined && input.GrpcCode !== null) {
        entries["GrpcCode"] = input.GrpcCode;
    }
    return entries;
};
const serializeAws_queryModifyListenerInput = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Certificates.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DefaultActions !== undefined && input.DefaultActions !== null) {
        const memberEntries = serializeAws_queryActions(input.DefaultActions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DefaultActions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AlpnPolicy !== undefined && input.AlpnPolicy !== null) {
        const memberEntries = serializeAws_queryAlpnPolicyName(input.AlpnPolicy, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AlpnPolicy.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyLoadBalancerAttributesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        const memberEntries = serializeAws_queryLoadBalancerAttributes(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyRuleInput = (input, context) => {
    const entries = {};
    if (input.RuleArn !== undefined && input.RuleArn !== null) {
        entries["RuleArn"] = input.RuleArn;
    }
    if (input.Conditions !== undefined && input.Conditions !== null) {
        const memberEntries = serializeAws_queryRuleConditionList(input.Conditions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Conditions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Actions !== undefined && input.Actions !== null) {
        const memberEntries = serializeAws_queryActions(input.Actions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Actions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyTargetGroupAttributesInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        const memberEntries = serializeAws_queryTargetGroupAttributes(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyTargetGroupInput = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryMatcher(input.Matcher, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Matcher.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryPathPatternConditionConfig = (input, context) => {
    const entries = {};
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryQueryStringConditionConfig = (input, context) => {
    const entries = {};
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryQueryStringKeyValuePairList(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryQueryStringKeyValuePair = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryQueryStringKeyValuePairList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryQueryStringKeyValuePair(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRedirectActionConfig = (input, context) => {
    const entries = {};
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
const serializeAws_queryRegisterTargetsInput = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Targets !== undefined && input.Targets !== null) {
        const memberEntries = serializeAws_queryTargetDescriptions(input.Targets, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Targets.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRemoveListenerCertificatesInput = (input, context) => {
    const entries = {};
    if (input.ListenerArn !== undefined && input.ListenerArn !== null) {
        entries["ListenerArn"] = input.ListenerArn;
    }
    if (input.Certificates !== undefined && input.Certificates !== null) {
        const memberEntries = serializeAws_queryCertificateList(input.Certificates, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Certificates.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRemoveTagsInput = (input, context) => {
    const entries = {};
    if (input.ResourceArns !== undefined && input.ResourceArns !== null) {
        const memberEntries = serializeAws_queryResourceArns(input.ResourceArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResourceArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_queryTagKeys(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryResourceArns = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRuleArns = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRuleCondition = (input, context) => {
    const entries = {};
    if (input.Field !== undefined && input.Field !== null) {
        entries["Field"] = input.Field;
    }
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    if (input.HostHeaderConfig !== undefined && input.HostHeaderConfig !== null) {
        const memberEntries = serializeAws_queryHostHeaderConditionConfig(input.HostHeaderConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `HostHeaderConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.PathPatternConfig !== undefined && input.PathPatternConfig !== null) {
        const memberEntries = serializeAws_queryPathPatternConditionConfig(input.PathPatternConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PathPatternConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.HttpHeaderConfig !== undefined && input.HttpHeaderConfig !== null) {
        const memberEntries = serializeAws_queryHttpHeaderConditionConfig(input.HttpHeaderConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `HttpHeaderConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.QueryStringConfig !== undefined && input.QueryStringConfig !== null) {
        const memberEntries = serializeAws_queryQueryStringConditionConfig(input.QueryStringConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `QueryStringConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.HttpRequestMethodConfig !== undefined && input.HttpRequestMethodConfig !== null) {
        const memberEntries = serializeAws_queryHttpRequestMethodConditionConfig(input.HttpRequestMethodConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `HttpRequestMethodConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SourceIpConfig !== undefined && input.SourceIpConfig !== null) {
        const memberEntries = serializeAws_querySourceIpConditionConfig(input.SourceIpConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SourceIpConfig.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRuleConditionList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryRuleCondition(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRulePriorityList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryRulePriorityPair(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRulePriorityPair = (input, context) => {
    const entries = {};
    if (input.RuleArn !== undefined && input.RuleArn !== null) {
        entries["RuleArn"] = input.RuleArn;
    }
    if (input.Priority !== undefined && input.Priority !== null) {
        entries["Priority"] = input.Priority;
    }
    return entries;
};
const serializeAws_querySecurityGroups = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySetIpAddressTypeInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.IpAddressType !== undefined && input.IpAddressType !== null) {
        entries["IpAddressType"] = input.IpAddressType;
    }
    return entries;
};
const serializeAws_querySetRulePrioritiesInput = (input, context) => {
    const entries = {};
    if (input.RulePriorities !== undefined && input.RulePriorities !== null) {
        const memberEntries = serializeAws_queryRulePriorityList(input.RulePriorities, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RulePriorities.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querySetSecurityGroupsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.SecurityGroups !== undefined && input.SecurityGroups !== null) {
        const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SecurityGroups.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querySetSubnetsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerArn !== undefined && input.LoadBalancerArn !== null) {
        entries["LoadBalancerArn"] = input.LoadBalancerArn;
    }
    if (input.Subnets !== undefined && input.Subnets !== null) {
        const memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Subnets.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SubnetMappings !== undefined && input.SubnetMappings !== null) {
        const memberEntries = serializeAws_querySubnetMappings(input.SubnetMappings, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SubnetMappings.${key}`;
            entries[loc] = value;
        });
    }
    if (input.IpAddressType !== undefined && input.IpAddressType !== null) {
        entries["IpAddressType"] = input.IpAddressType;
    }
    return entries;
};
const serializeAws_querySourceIpConditionConfig = (input, context) => {
    const entries = {};
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryListOfString(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querySslPolicyNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySubnetMapping = (input, context) => {
    const entries = {};
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
const serializeAws_querySubnetMappings = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_querySubnetMapping(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_querySubnets = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTagKeys = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetDescription = (input, context) => {
    const entries = {};
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
const serializeAws_queryTargetDescriptions = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTargetDescription(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetGroupArns = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetGroupAttribute = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTargetGroupAttributes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTargetGroupAttribute(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetGroupList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTargetGroupTuple(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetGroupNames = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTargetGroupStickinessConfig = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
const serializeAws_queryTargetGroupTuple = (input, context) => {
    const entries = {};
    if (input.TargetGroupArn !== undefined && input.TargetGroupArn !== null) {
        entries["TargetGroupArn"] = input.TargetGroupArn;
    }
    if (input.Weight !== undefined && input.Weight !== null) {
        entries["Weight"] = input.Weight;
    }
    return entries;
};
const deserializeAws_queryAction = (output, context) => {
    let contents = {
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
const deserializeAws_queryActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAction(entry, context);
    });
};
const deserializeAws_queryAddListenerCertificatesOutput = (output, context) => {
    let contents = {
        Certificates: undefined,
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
        contents.Certificates = deserializeAws_queryCertificateList(smithy_client_1.getArrayIfSingleItem(output["Certificates"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryAddTagsOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryAllocationIdNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryAlpnPolicyName = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryALPNPolicyNotSupportedException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: pair["value"],
        };
    }, {});
};
const deserializeAws_queryAuthenticateCognitoActionConfig = (output, context) => {
    let contents = {
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
            deserializeAws_queryAuthenticateCognitoActionAuthenticationRequestExtraParams(smithy_client_1.getArrayIfSingleItem(output["AuthenticationRequestExtraParams"]["entry"]), context);
    }
    if (output["OnUnauthenticatedRequest"] !== undefined) {
        contents.OnUnauthenticatedRequest = output["OnUnauthenticatedRequest"];
    }
    return contents;
};
const deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: pair["value"],
        };
    }, {});
};
const deserializeAws_queryAuthenticateOidcActionConfig = (output, context) => {
    let contents = {
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
            deserializeAws_queryAuthenticateOidcActionAuthenticationRequestExtraParams(smithy_client_1.getArrayIfSingleItem(output["AuthenticationRequestExtraParams"]["entry"]), context);
    }
    if (output["OnUnauthenticatedRequest"] !== undefined) {
        contents.OnUnauthenticatedRequest = output["OnUnauthenticatedRequest"];
    }
    if (output["UseExistingClientSecret"] !== undefined) {
        contents.UseExistingClientSecret = output["UseExistingClientSecret"] == "true";
    }
    return contents;
};
const deserializeAws_queryAvailabilityZone = (output, context) => {
    let contents = {
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
        contents.LoadBalancerAddresses = deserializeAws_queryLoadBalancerAddresses(smithy_client_1.getArrayIfSingleItem(output["LoadBalancerAddresses"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryAvailabilityZoneNotSupportedException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryAvailabilityZones = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAvailabilityZone(entry, context);
    });
};
const deserializeAws_queryCertificate = (output, context) => {
    let contents = {
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
const deserializeAws_queryCertificateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCertificate(entry, context);
    });
};
const deserializeAws_queryCertificateNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryCipher = (output, context) => {
    let contents = {
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
const deserializeAws_queryCiphers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCipher(entry, context);
    });
};
const deserializeAws_queryCreateListenerOutput = (output, context) => {
    let contents = {
        Listeners: undefined,
    };
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
        contents.Listeners = deserializeAws_queryListeners(smithy_client_1.getArrayIfSingleItem(output["Listeners"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryCreateLoadBalancerOutput = (output, context) => {
    let contents = {
        LoadBalancers: undefined,
    };
    if (output.LoadBalancers === "") {
        contents.LoadBalancers = [];
    }
    if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
        contents.LoadBalancers = deserializeAws_queryLoadBalancers(smithy_client_1.getArrayIfSingleItem(output["LoadBalancers"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryCreateRuleOutput = (output, context) => {
    let contents = {
        Rules: undefined,
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = deserializeAws_queryRules(smithy_client_1.getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryCreateTargetGroupOutput = (output, context) => {
    let contents = {
        TargetGroups: undefined,
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
        contents.TargetGroups = deserializeAws_queryTargetGroups(smithy_client_1.getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDeleteListenerOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteLoadBalancerOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteRuleOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteTargetGroupOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeregisterTargetsOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDescribeAccountLimitsOutput = (output, context) => {
    let contents = {
        Limits: undefined,
        NextMarker: undefined,
    };
    if (output.Limits === "") {
        contents.Limits = [];
    }
    if (output["Limits"] !== undefined && output["Limits"]["member"] !== undefined) {
        contents.Limits = deserializeAws_queryLimits(smithy_client_1.getArrayIfSingleItem(output["Limits"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeListenerCertificatesOutput = (output, context) => {
    let contents = {
        Certificates: undefined,
        NextMarker: undefined,
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
        contents.Certificates = deserializeAws_queryCertificateList(smithy_client_1.getArrayIfSingleItem(output["Certificates"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeListenersOutput = (output, context) => {
    let contents = {
        Listeners: undefined,
        NextMarker: undefined,
    };
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
        contents.Listeners = deserializeAws_queryListeners(smithy_client_1.getArrayIfSingleItem(output["Listeners"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancerAttributesOutput = (output, context) => {
    let contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
        contents.Attributes = deserializeAws_queryLoadBalancerAttributes(smithy_client_1.getArrayIfSingleItem(output["Attributes"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancersOutput = (output, context) => {
    let contents = {
        LoadBalancers: undefined,
        NextMarker: undefined,
    };
    if (output.LoadBalancers === "") {
        contents.LoadBalancers = [];
    }
    if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
        contents.LoadBalancers = deserializeAws_queryLoadBalancers(smithy_client_1.getArrayIfSingleItem(output["LoadBalancers"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeRulesOutput = (output, context) => {
    let contents = {
        Rules: undefined,
        NextMarker: undefined,
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = deserializeAws_queryRules(smithy_client_1.getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeSSLPoliciesOutput = (output, context) => {
    let contents = {
        SslPolicies: undefined,
        NextMarker: undefined,
    };
    if (output.SslPolicies === "") {
        contents.SslPolicies = [];
    }
    if (output["SslPolicies"] !== undefined && output["SslPolicies"]["member"] !== undefined) {
        contents.SslPolicies = deserializeAws_querySslPolicies(smithy_client_1.getArrayIfSingleItem(output["SslPolicies"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeTagsOutput = (output, context) => {
    let contents = {
        TagDescriptions: undefined,
    };
    if (output.TagDescriptions === "") {
        contents.TagDescriptions = [];
    }
    if (output["TagDescriptions"] !== undefined && output["TagDescriptions"]["member"] !== undefined) {
        contents.TagDescriptions = deserializeAws_queryTagDescriptions(smithy_client_1.getArrayIfSingleItem(output["TagDescriptions"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeTargetGroupAttributesOutput = (output, context) => {
    let contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
        contents.Attributes = deserializeAws_queryTargetGroupAttributes(smithy_client_1.getArrayIfSingleItem(output["Attributes"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeTargetGroupsOutput = (output, context) => {
    let contents = {
        TargetGroups: undefined,
        NextMarker: undefined,
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
        contents.TargetGroups = deserializeAws_queryTargetGroups(smithy_client_1.getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
    return contents;
};
const deserializeAws_queryDescribeTargetHealthOutput = (output, context) => {
    let contents = {
        TargetHealthDescriptions: undefined,
    };
    if (output.TargetHealthDescriptions === "") {
        contents.TargetHealthDescriptions = [];
    }
    if (output["TargetHealthDescriptions"] !== undefined && output["TargetHealthDescriptions"]["member"] !== undefined) {
        contents.TargetHealthDescriptions = deserializeAws_queryTargetHealthDescriptions(smithy_client_1.getArrayIfSingleItem(output["TargetHealthDescriptions"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDuplicateListenerException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDuplicateLoadBalancerNameException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDuplicateTagKeysException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDuplicateTargetGroupNameException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryFixedResponseActionConfig = (output, context) => {
    let contents = {
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
const deserializeAws_queryForwardActionConfig = (output, context) => {
    let contents = {
        TargetGroups: undefined,
        TargetGroupStickinessConfig: undefined,
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
        contents.TargetGroups = deserializeAws_queryTargetGroupList(smithy_client_1.getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
    }
    if (output["TargetGroupStickinessConfig"] !== undefined) {
        contents.TargetGroupStickinessConfig = deserializeAws_queryTargetGroupStickinessConfig(output["TargetGroupStickinessConfig"], context);
    }
    return contents;
};
const deserializeAws_queryHealthUnavailableException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryHostHeaderConditionConfig = (output, context) => {
    let contents = {
        Values: undefined,
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryListOfString(smithy_client_1.getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryHttpHeaderConditionConfig = (output, context) => {
    let contents = {
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
        contents.Values = deserializeAws_queryListOfString(smithy_client_1.getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryHttpRequestMethodConditionConfig = (output, context) => {
    let contents = {
        Values: undefined,
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryListOfString(smithy_client_1.getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryIncompatibleProtocolsException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidConfigurationRequestException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidLoadBalancerActionException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSchemeException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSecurityGroupException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSubnetException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInvalidTargetException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryLimit = (output, context) => {
    let contents = {
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
const deserializeAws_queryLimits = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLimit(entry, context);
    });
};
const deserializeAws_queryListener = (output, context) => {
    let contents = {
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
        contents.Certificates = deserializeAws_queryCertificateList(smithy_client_1.getArrayIfSingleItem(output["Certificates"]["member"]), context);
    }
    if (output["SslPolicy"] !== undefined) {
        contents.SslPolicy = output["SslPolicy"];
    }
    if (output.DefaultActions === "") {
        contents.DefaultActions = [];
    }
    if (output["DefaultActions"] !== undefined && output["DefaultActions"]["member"] !== undefined) {
        contents.DefaultActions = deserializeAws_queryActions(smithy_client_1.getArrayIfSingleItem(output["DefaultActions"]["member"]), context);
    }
    if (output.AlpnPolicy === "") {
        contents.AlpnPolicy = [];
    }
    if (output["AlpnPolicy"] !== undefined && output["AlpnPolicy"]["member"] !== undefined) {
        contents.AlpnPolicy = deserializeAws_queryAlpnPolicyName(smithy_client_1.getArrayIfSingleItem(output["AlpnPolicy"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListenerNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryListeners = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryListener(entry, context);
    });
};
const deserializeAws_queryListOfString = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryLoadBalancer = (output, context) => {
    let contents = {
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
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(smithy_client_1.getArrayIfSingleItem(output["AvailabilityZones"]["member"]), context);
    }
    if (output.SecurityGroups === "") {
        contents.SecurityGroups = [];
    }
    if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
        contents.SecurityGroups = deserializeAws_querySecurityGroups(smithy_client_1.getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
    }
    if (output["IpAddressType"] !== undefined) {
        contents.IpAddressType = output["IpAddressType"];
    }
    if (output["CustomerOwnedIpv4Pool"] !== undefined) {
        contents.CustomerOwnedIpv4Pool = output["CustomerOwnedIpv4Pool"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerAddress = (output, context) => {
    let contents = {
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
const deserializeAws_queryLoadBalancerAddresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLoadBalancerAddress(entry, context);
    });
};
const deserializeAws_queryLoadBalancerArns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryLoadBalancerAttribute = (output, context) => {
    let contents = {
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
const deserializeAws_queryLoadBalancerAttributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLoadBalancerAttribute(entry, context);
    });
};
const deserializeAws_queryLoadBalancerNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLoadBalancer(entry, context);
    });
};
const deserializeAws_queryLoadBalancerState = (output, context) => {
    let contents = {
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
const deserializeAws_queryMatcher = (output, context) => {
    let contents = {
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
const deserializeAws_queryModifyListenerOutput = (output, context) => {
    let contents = {
        Listeners: undefined,
    };
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
        contents.Listeners = deserializeAws_queryListeners(smithy_client_1.getArrayIfSingleItem(output["Listeners"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryModifyLoadBalancerAttributesOutput = (output, context) => {
    let contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
        contents.Attributes = deserializeAws_queryLoadBalancerAttributes(smithy_client_1.getArrayIfSingleItem(output["Attributes"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryModifyRuleOutput = (output, context) => {
    let contents = {
        Rules: undefined,
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = deserializeAws_queryRules(smithy_client_1.getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryModifyTargetGroupAttributesOutput = (output, context) => {
    let contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = [];
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["member"] !== undefined) {
        contents.Attributes = deserializeAws_queryTargetGroupAttributes(smithy_client_1.getArrayIfSingleItem(output["Attributes"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryModifyTargetGroupOutput = (output, context) => {
    let contents = {
        TargetGroups: undefined,
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
        contents.TargetGroups = deserializeAws_queryTargetGroups(smithy_client_1.getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryOperationNotPermittedException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryPathPatternConditionConfig = (output, context) => {
    let contents = {
        Values: undefined,
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryListOfString(smithy_client_1.getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryPriorityInUseException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryQueryStringConditionConfig = (output, context) => {
    let contents = {
        Values: undefined,
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryQueryStringKeyValuePairList(smithy_client_1.getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryQueryStringKeyValuePair = (output, context) => {
    let contents = {
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
const deserializeAws_queryQueryStringKeyValuePairList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryQueryStringKeyValuePair(entry, context);
    });
};
const deserializeAws_queryRedirectActionConfig = (output, context) => {
    let contents = {
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
const deserializeAws_queryRegisterTargetsOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryRemoveListenerCertificatesOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryRemoveTagsOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryResourceInUseException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryRule = (output, context) => {
    let contents = {
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
        contents.Conditions = deserializeAws_queryRuleConditionList(smithy_client_1.getArrayIfSingleItem(output["Conditions"]["member"]), context);
    }
    if (output.Actions === "") {
        contents.Actions = [];
    }
    if (output["Actions"] !== undefined && output["Actions"]["member"] !== undefined) {
        contents.Actions = deserializeAws_queryActions(smithy_client_1.getArrayIfSingleItem(output["Actions"]["member"]), context);
    }
    if (output["IsDefault"] !== undefined) {
        contents.IsDefault = output["IsDefault"] == "true";
    }
    return contents;
};
const deserializeAws_queryRuleCondition = (output, context) => {
    let contents = {
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
        contents.Values = deserializeAws_queryListOfString(smithy_client_1.getArrayIfSingleItem(output["Values"]["member"]), context);
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
const deserializeAws_queryRuleConditionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRuleCondition(entry, context);
    });
};
const deserializeAws_queryRuleNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRule(entry, context);
    });
};
const deserializeAws_querySecurityGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_querySetIpAddressTypeOutput = (output, context) => {
    let contents = {
        IpAddressType: undefined,
    };
    if (output["IpAddressType"] !== undefined) {
        contents.IpAddressType = output["IpAddressType"];
    }
    return contents;
};
const deserializeAws_querySetRulePrioritiesOutput = (output, context) => {
    let contents = {
        Rules: undefined,
    };
    if (output.Rules === "") {
        contents.Rules = [];
    }
    if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = deserializeAws_queryRules(smithy_client_1.getArrayIfSingleItem(output["Rules"]["member"]), context);
    }
    return contents;
};
const deserializeAws_querySetSecurityGroupsOutput = (output, context) => {
    let contents = {
        SecurityGroupIds: undefined,
    };
    if (output.SecurityGroupIds === "") {
        contents.SecurityGroupIds = [];
    }
    if (output["SecurityGroupIds"] !== undefined && output["SecurityGroupIds"]["member"] !== undefined) {
        contents.SecurityGroupIds = deserializeAws_querySecurityGroups(smithy_client_1.getArrayIfSingleItem(output["SecurityGroupIds"]["member"]), context);
    }
    return contents;
};
const deserializeAws_querySetSubnetsOutput = (output, context) => {
    let contents = {
        AvailabilityZones: undefined,
        IpAddressType: undefined,
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(smithy_client_1.getArrayIfSingleItem(output["AvailabilityZones"]["member"]), context);
    }
    if (output["IpAddressType"] !== undefined) {
        contents.IpAddressType = output["IpAddressType"];
    }
    return contents;
};
const deserializeAws_querySourceIpConditionConfig = (output, context) => {
    let contents = {
        Values: undefined,
    };
    if (output.Values === "") {
        contents.Values = [];
    }
    if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
        contents.Values = deserializeAws_queryListOfString(smithy_client_1.getArrayIfSingleItem(output["Values"]["member"]), context);
    }
    return contents;
};
const deserializeAws_querySslPolicies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySslPolicy(entry, context);
    });
};
const deserializeAws_querySslPolicy = (output, context) => {
    let contents = {
        SslProtocols: undefined,
        Ciphers: undefined,
        Name: undefined,
    };
    if (output.SslProtocols === "") {
        contents.SslProtocols = [];
    }
    if (output["SslProtocols"] !== undefined && output["SslProtocols"]["member"] !== undefined) {
        contents.SslProtocols = deserializeAws_querySslProtocols(smithy_client_1.getArrayIfSingleItem(output["SslProtocols"]["member"]), context);
    }
    if (output.Ciphers === "") {
        contents.Ciphers = [];
    }
    if (output["Ciphers"] !== undefined && output["Ciphers"]["member"] !== undefined) {
        contents.Ciphers = deserializeAws_queryCiphers(smithy_client_1.getArrayIfSingleItem(output["Ciphers"]["member"]), context);
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_querySSLPolicyNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_querySslProtocols = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_querySubnetNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTag = (output, context) => {
    let contents = {
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
const deserializeAws_queryTagDescription = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryTagDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTagDescription(entry, context);
    });
};
const deserializeAws_queryTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
const deserializeAws_queryTargetDescription = (output, context) => {
    let contents = {
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
const deserializeAws_queryTargetGroup = (output, context) => {
    let contents = {
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
        contents.LoadBalancerArns = deserializeAws_queryLoadBalancerArns(smithy_client_1.getArrayIfSingleItem(output["LoadBalancerArns"]["member"]), context);
    }
    if (output["TargetType"] !== undefined) {
        contents.TargetType = output["TargetType"];
    }
    if (output["ProtocolVersion"] !== undefined) {
        contents.ProtocolVersion = output["ProtocolVersion"];
    }
    return contents;
};
const deserializeAws_queryTargetGroupAssociationLimitException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTargetGroupAttribute = (output, context) => {
    let contents = {
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
const deserializeAws_queryTargetGroupAttributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTargetGroupAttribute(entry, context);
    });
};
const deserializeAws_queryTargetGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTargetGroupTuple(entry, context);
    });
};
const deserializeAws_queryTargetGroupNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTargetGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTargetGroup(entry, context);
    });
};
const deserializeAws_queryTargetGroupStickinessConfig = (output, context) => {
    let contents = {
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
const deserializeAws_queryTargetGroupTuple = (output, context) => {
    let contents = {
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
const deserializeAws_queryTargetHealth = (output, context) => {
    let contents = {
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
const deserializeAws_queryTargetHealthDescription = (output, context) => {
    let contents = {
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
const deserializeAws_queryTargetHealthDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTargetHealthDescription(entry, context);
    });
};
const deserializeAws_queryTooManyActionsException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyCertificatesException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyListenersException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyLoadBalancersException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyRegistrationsForTargetIdException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyRulesException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyTagsException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyTargetGroupsException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyTargetsException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyUniqueTargetGroupsPerLoadBalancerException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryUnsupportedProtocolException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
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
        const parsedObj = fast_xml_parser_1.parse(encoded, {
            attributeNamePrefix: "",
            ignoreAttributes: false,
            parseNodeValue: false,
            trimValues: false,
            tagValueProcessor: (val, tagName) => (val.trim() === "" ? "" : entities_1.decodeHTML(val)),
        });
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return smithy_client_1.getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => smithy_client_1.extendedEncodeURIComponent(key) + "=" + smithy_client_1.extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map