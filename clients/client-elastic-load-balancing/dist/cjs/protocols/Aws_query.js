"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_queryDetachLoadBalancerFromSubnetsCommand = exports.deserializeAws_queryDescribeTagsCommand = exports.deserializeAws_queryDescribeLoadBalancersCommand = exports.deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand = exports.deserializeAws_queryDescribeLoadBalancerPoliciesCommand = exports.deserializeAws_queryDescribeLoadBalancerAttributesCommand = exports.deserializeAws_queryDescribeInstanceHealthCommand = exports.deserializeAws_queryDescribeAccountLimitsCommand = exports.deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand = exports.deserializeAws_queryDeleteLoadBalancerPolicyCommand = exports.deserializeAws_queryDeleteLoadBalancerListenersCommand = exports.deserializeAws_queryDeleteLoadBalancerCommand = exports.deserializeAws_queryCreateLoadBalancerPolicyCommand = exports.deserializeAws_queryCreateLoadBalancerListenersCommand = exports.deserializeAws_queryCreateLoadBalancerCommand = exports.deserializeAws_queryCreateLBCookieStickinessPolicyCommand = exports.deserializeAws_queryCreateAppCookieStickinessPolicyCommand = exports.deserializeAws_queryConfigureHealthCheckCommand = exports.deserializeAws_queryAttachLoadBalancerToSubnetsCommand = exports.deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand = exports.deserializeAws_queryAddTagsCommand = exports.serializeAws_querySetLoadBalancerPoliciesOfListenerCommand = exports.serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = exports.serializeAws_querySetLoadBalancerListenerSSLCertificateCommand = exports.serializeAws_queryRemoveTagsCommand = exports.serializeAws_queryRegisterInstancesWithLoadBalancerCommand = exports.serializeAws_queryModifyLoadBalancerAttributesCommand = exports.serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = exports.serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = exports.serializeAws_queryDetachLoadBalancerFromSubnetsCommand = exports.serializeAws_queryDescribeTagsCommand = exports.serializeAws_queryDescribeLoadBalancersCommand = exports.serializeAws_queryDescribeLoadBalancerPolicyTypesCommand = exports.serializeAws_queryDescribeLoadBalancerPoliciesCommand = exports.serializeAws_queryDescribeLoadBalancerAttributesCommand = exports.serializeAws_queryDescribeInstanceHealthCommand = exports.serializeAws_queryDescribeAccountLimitsCommand = exports.serializeAws_queryDeregisterInstancesFromLoadBalancerCommand = exports.serializeAws_queryDeleteLoadBalancerPolicyCommand = exports.serializeAws_queryDeleteLoadBalancerListenersCommand = exports.serializeAws_queryDeleteLoadBalancerCommand = exports.serializeAws_queryCreateLoadBalancerPolicyCommand = exports.serializeAws_queryCreateLoadBalancerListenersCommand = exports.serializeAws_queryCreateLoadBalancerCommand = exports.serializeAws_queryCreateLBCookieStickinessPolicyCommand = exports.serializeAws_queryCreateAppCookieStickinessPolicyCommand = exports.serializeAws_queryConfigureHealthCheckCommand = exports.serializeAws_queryAttachLoadBalancerToSubnetsCommand = exports.serializeAws_queryApplySecurityGroupsToLoadBalancerCommand = exports.serializeAws_queryAddTagsCommand = void 0;
exports.deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand = exports.deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = exports.deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand = exports.deserializeAws_queryRemoveTagsCommand = exports.deserializeAws_queryRegisterInstancesWithLoadBalancerCommand = exports.deserializeAws_queryModifyLoadBalancerAttributesCommand = exports.deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = exports.deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryAddTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddTagsInput(input, context),
        Action: "AddTags",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddTagsCommand = serializeAws_queryAddTagsCommand;
const serializeAws_queryApplySecurityGroupsToLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryApplySecurityGroupsToLoadBalancerInput(input, context),
        Action: "ApplySecurityGroupsToLoadBalancer",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryApplySecurityGroupsToLoadBalancerCommand = serializeAws_queryApplySecurityGroupsToLoadBalancerCommand;
const serializeAws_queryAttachLoadBalancerToSubnetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAttachLoadBalancerToSubnetsInput(input, context),
        Action: "AttachLoadBalancerToSubnets",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAttachLoadBalancerToSubnetsCommand = serializeAws_queryAttachLoadBalancerToSubnetsCommand;
const serializeAws_queryConfigureHealthCheckCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryConfigureHealthCheckInput(input, context),
        Action: "ConfigureHealthCheck",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryConfigureHealthCheckCommand = serializeAws_queryConfigureHealthCheckCommand;
const serializeAws_queryCreateAppCookieStickinessPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateAppCookieStickinessPolicyInput(input, context),
        Action: "CreateAppCookieStickinessPolicy",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateAppCookieStickinessPolicyCommand = serializeAws_queryCreateAppCookieStickinessPolicyCommand;
const serializeAws_queryCreateLBCookieStickinessPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateLBCookieStickinessPolicyInput(input, context),
        Action: "CreateLBCookieStickinessPolicy",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateLBCookieStickinessPolicyCommand = serializeAws_queryCreateLBCookieStickinessPolicyCommand;
const serializeAws_queryCreateLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateAccessPointInput(input, context),
        Action: "CreateLoadBalancer",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateLoadBalancerCommand = serializeAws_queryCreateLoadBalancerCommand;
const serializeAws_queryCreateLoadBalancerListenersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateLoadBalancerListenerInput(input, context),
        Action: "CreateLoadBalancerListeners",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateLoadBalancerListenersCommand = serializeAws_queryCreateLoadBalancerListenersCommand;
const serializeAws_queryCreateLoadBalancerPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateLoadBalancerPolicyInput(input, context),
        Action: "CreateLoadBalancerPolicy",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateLoadBalancerPolicyCommand = serializeAws_queryCreateLoadBalancerPolicyCommand;
const serializeAws_queryDeleteLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteAccessPointInput(input, context),
        Action: "DeleteLoadBalancer",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteLoadBalancerCommand = serializeAws_queryDeleteLoadBalancerCommand;
const serializeAws_queryDeleteLoadBalancerListenersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteLoadBalancerListenerInput(input, context),
        Action: "DeleteLoadBalancerListeners",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteLoadBalancerListenersCommand = serializeAws_queryDeleteLoadBalancerListenersCommand;
const serializeAws_queryDeleteLoadBalancerPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteLoadBalancerPolicyInput(input, context),
        Action: "DeleteLoadBalancerPolicy",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteLoadBalancerPolicyCommand = serializeAws_queryDeleteLoadBalancerPolicyCommand;
const serializeAws_queryDeregisterInstancesFromLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeregisterEndPointsInput(input, context),
        Action: "DeregisterInstancesFromLoadBalancer",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeregisterInstancesFromLoadBalancerCommand = serializeAws_queryDeregisterInstancesFromLoadBalancerCommand;
const serializeAws_queryDescribeAccountLimitsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAccountLimitsInput(input, context),
        Action: "DescribeAccountLimits",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAccountLimitsCommand = serializeAws_queryDescribeAccountLimitsCommand;
const serializeAws_queryDescribeInstanceHealthCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEndPointStateInput(input, context),
        Action: "DescribeInstanceHealth",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeInstanceHealthCommand = serializeAws_queryDescribeInstanceHealthCommand;
const serializeAws_queryDescribeLoadBalancerAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeLoadBalancerAttributesInput(input, context),
        Action: "DescribeLoadBalancerAttributes",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLoadBalancerAttributesCommand = serializeAws_queryDescribeLoadBalancerAttributesCommand;
const serializeAws_queryDescribeLoadBalancerPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeLoadBalancerPoliciesInput(input, context),
        Action: "DescribeLoadBalancerPolicies",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLoadBalancerPoliciesCommand = serializeAws_queryDescribeLoadBalancerPoliciesCommand;
const serializeAws_queryDescribeLoadBalancerPolicyTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeLoadBalancerPolicyTypesInput(input, context),
        Action: "DescribeLoadBalancerPolicyTypes",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLoadBalancerPolicyTypesCommand = serializeAws_queryDescribeLoadBalancerPolicyTypesCommand;
const serializeAws_queryDescribeLoadBalancersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAccessPointsInput(input, context),
        Action: "DescribeLoadBalancers",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLoadBalancersCommand = serializeAws_queryDescribeLoadBalancersCommand;
const serializeAws_queryDescribeTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeTagsInput(input, context),
        Action: "DescribeTags",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTagsCommand = serializeAws_queryDescribeTagsCommand;
const serializeAws_queryDetachLoadBalancerFromSubnetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDetachLoadBalancerFromSubnetsInput(input, context),
        Action: "DetachLoadBalancerFromSubnets",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDetachLoadBalancerFromSubnetsCommand = serializeAws_queryDetachLoadBalancerFromSubnetsCommand;
const serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveAvailabilityZonesInput(input, context),
        Action: "DisableAvailabilityZonesForLoadBalancer",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand;
const serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddAvailabilityZonesInput(input, context),
        Action: "EnableAvailabilityZonesForLoadBalancer",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand;
const serializeAws_queryModifyLoadBalancerAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyLoadBalancerAttributesInput(input, context),
        Action: "ModifyLoadBalancerAttributes",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyLoadBalancerAttributesCommand = serializeAws_queryModifyLoadBalancerAttributesCommand;
const serializeAws_queryRegisterInstancesWithLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRegisterEndPointsInput(input, context),
        Action: "RegisterInstancesWithLoadBalancer",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRegisterInstancesWithLoadBalancerCommand = serializeAws_queryRegisterInstancesWithLoadBalancerCommand;
const serializeAws_queryRemoveTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveTagsInput(input, context),
        Action: "RemoveTags",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveTagsCommand = serializeAws_queryRemoveTagsCommand;
const serializeAws_querySetLoadBalancerListenerSSLCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetLoadBalancerListenerSSLCertificateInput(input, context),
        Action: "SetLoadBalancerListenerSSLCertificate",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetLoadBalancerListenerSSLCertificateCommand = serializeAws_querySetLoadBalancerListenerSSLCertificateCommand;
const serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetLoadBalancerPoliciesForBackendServerInput(input, context),
        Action: "SetLoadBalancerPoliciesForBackendServer",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = serializeAws_querySetLoadBalancerPoliciesForBackendServerCommand;
const serializeAws_querySetLoadBalancerPoliciesOfListenerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetLoadBalancerPoliciesOfListenerInput(input, context),
        Action: "SetLoadBalancerPoliciesOfListener",
        Version: "2012-06-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetLoadBalancerPoliciesOfListenerCommand = serializeAws_querySetLoadBalancerPoliciesOfListenerCommand;
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
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.elasticloadbalancing#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.elasticloadbalancing#TooManyTagsException":
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
const deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput(data.ApplySecurityGroupsToLoadBalancerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand = deserializeAws_queryApplySecurityGroupsToLoadBalancerCommand;
const deserializeAws_queryApplySecurityGroupsToLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityGroupException":
        case "com.amazonaws.elasticloadbalancing#InvalidSecurityGroupException":
            response = {
                ...(await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryAttachLoadBalancerToSubnetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAttachLoadBalancerToSubnetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAttachLoadBalancerToSubnetsOutput(data.AttachLoadBalancerToSubnetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAttachLoadBalancerToSubnetsCommand = deserializeAws_queryAttachLoadBalancerToSubnetsCommand;
const deserializeAws_queryAttachLoadBalancerToSubnetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnetException":
        case "com.amazonaws.elasticloadbalancing#InvalidSubnetException":
            response = {
                ...(await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetNotFoundException":
        case "com.amazonaws.elasticloadbalancing#SubnetNotFoundException":
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
const deserializeAws_queryConfigureHealthCheckCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryConfigureHealthCheckCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfigureHealthCheckOutput(data.ConfigureHealthCheckResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryConfigureHealthCheckCommand = deserializeAws_queryConfigureHealthCheckCommand;
const deserializeAws_queryConfigureHealthCheckCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateAppCookieStickinessPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateAppCookieStickinessPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateAppCookieStickinessPolicyOutput(data.CreateAppCookieStickinessPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateAppCookieStickinessPolicyCommand = deserializeAws_queryCreateAppCookieStickinessPolicyCommand;
const deserializeAws_queryCreateAppCookieStickinessPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicatePolicyNameException":
        case "com.amazonaws.elasticloadbalancing#DuplicatePolicyNameException":
            response = {
                ...(await deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyPoliciesException":
        case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException":
            response = {
                ...(await deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateLBCookieStickinessPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateLBCookieStickinessPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateLBCookieStickinessPolicyOutput(data.CreateLBCookieStickinessPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateLBCookieStickinessPolicyCommand = deserializeAws_queryCreateLBCookieStickinessPolicyCommand;
const deserializeAws_queryCreateLBCookieStickinessPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicatePolicyNameException":
        case "com.amazonaws.elasticloadbalancing#DuplicatePolicyNameException":
            response = {
                ...(await deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyPoliciesException":
        case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException":
            response = {
                ...(await deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_queryCreateAccessPointOutput(data.CreateLoadBalancerResult, context);
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
        case "CertificateNotFoundException":
        case "com.amazonaws.elasticloadbalancing#CertificateNotFoundException":
            response = {
                ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateAccessPointNameException":
        case "com.amazonaws.elasticloadbalancing#DuplicateAccessPointNameException":
            response = {
                ...(await deserializeAws_queryDuplicateAccessPointNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateTagKeysException":
        case "com.amazonaws.elasticloadbalancing#DuplicateTagKeysException":
            response = {
                ...(await deserializeAws_queryDuplicateTagKeysExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSchemeException":
        case "com.amazonaws.elasticloadbalancing#InvalidSchemeException":
            response = {
                ...(await deserializeAws_queryInvalidSchemeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityGroupException":
        case "com.amazonaws.elasticloadbalancing#InvalidSecurityGroupException":
            response = {
                ...(await deserializeAws_queryInvalidSecurityGroupExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnetException":
        case "com.amazonaws.elasticloadbalancing#InvalidSubnetException":
            response = {
                ...(await deserializeAws_queryInvalidSubnetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.elasticloadbalancing#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_queryOperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetNotFoundException":
        case "com.amazonaws.elasticloadbalancing#SubnetNotFoundException":
            response = {
                ...(await deserializeAws_querySubnetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyAccessPointsException":
        case "com.amazonaws.elasticloadbalancing#TooManyAccessPointsException":
            response = {
                ...(await deserializeAws_queryTooManyAccessPointsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.elasticloadbalancing#TooManyTagsException":
            response = {
                ...(await deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedProtocolException":
        case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException":
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
const deserializeAws_queryCreateLoadBalancerListenersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateLoadBalancerListenersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateLoadBalancerListenerOutput(data.CreateLoadBalancerListenersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateLoadBalancerListenersCommand = deserializeAws_queryCreateLoadBalancerListenersCommand;
const deserializeAws_queryCreateLoadBalancerListenersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CertificateNotFoundException":
        case "com.amazonaws.elasticloadbalancing#CertificateNotFoundException":
            response = {
                ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateListenerException":
        case "com.amazonaws.elasticloadbalancing#DuplicateListenerException":
            response = {
                ...(await deserializeAws_queryDuplicateListenerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedProtocolException":
        case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException":
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
const deserializeAws_queryCreateLoadBalancerPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateLoadBalancerPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateLoadBalancerPolicyOutput(data.CreateLoadBalancerPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateLoadBalancerPolicyCommand = deserializeAws_queryCreateLoadBalancerPolicyCommand;
const deserializeAws_queryCreateLoadBalancerPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicatePolicyNameException":
        case "com.amazonaws.elasticloadbalancing#DuplicatePolicyNameException":
            response = {
                ...(await deserializeAws_queryDuplicatePolicyNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyTypeNotFoundException":
        case "com.amazonaws.elasticloadbalancing#PolicyTypeNotFoundException":
            response = {
                ...(await deserializeAws_queryPolicyTypeNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyPoliciesException":
        case "com.amazonaws.elasticloadbalancing#TooManyPoliciesException":
            response = {
                ...(await deserializeAws_queryTooManyPoliciesExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_queryDeleteAccessPointOutput(data.DeleteLoadBalancerResult, context);
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
const deserializeAws_queryDeleteLoadBalancerListenersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteLoadBalancerListenersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteLoadBalancerListenerOutput(data.DeleteLoadBalancerListenersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteLoadBalancerListenersCommand = deserializeAws_queryDeleteLoadBalancerListenersCommand;
const deserializeAws_queryDeleteLoadBalancerListenersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteLoadBalancerPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteLoadBalancerPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteLoadBalancerPolicyOutput(data.DeleteLoadBalancerPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteLoadBalancerPolicyCommand = deserializeAws_queryDeleteLoadBalancerPolicyCommand;
const deserializeAws_queryDeleteLoadBalancerPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeregisterEndPointsOutput(data.DeregisterInstancesFromLoadBalancerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand = deserializeAws_queryDeregisterInstancesFromLoadBalancerCommand;
const deserializeAws_queryDeregisterInstancesFromLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndPointException":
        case "com.amazonaws.elasticloadbalancing#InvalidEndPointException":
            response = {
                ...(await deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeInstanceHealthCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeInstanceHealthCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEndPointStateOutput(data.DescribeInstanceHealthResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeInstanceHealthCommand = deserializeAws_queryDescribeInstanceHealthCommand;
const deserializeAws_queryDescribeInstanceHealthCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndPointException":
        case "com.amazonaws.elasticloadbalancing#InvalidEndPointException":
            response = {
                ...(await deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context)),
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
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerAttributeNotFoundException":
        case "com.amazonaws.elasticloadbalancing#LoadBalancerAttributeNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeLoadBalancerPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeLoadBalancerPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLoadBalancerPoliciesOutput(data.DescribeLoadBalancerPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeLoadBalancerPoliciesCommand = deserializeAws_queryDescribeLoadBalancerPoliciesCommand;
const deserializeAws_queryDescribeLoadBalancerPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput(data.DescribeLoadBalancerPolicyTypesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand = deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand;
const deserializeAws_queryDescribeLoadBalancerPolicyTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "PolicyTypeNotFoundException":
        case "com.amazonaws.elasticloadbalancing#PolicyTypeNotFoundException":
            response = {
                ...(await deserializeAws_queryPolicyTypeNotFoundExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_queryDescribeAccessPointsOutput(data.DescribeLoadBalancersResult, context);
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
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyThrottleException":
        case "com.amazonaws.elasticloadbalancing#DependencyThrottleException":
            response = {
                ...(await deserializeAws_queryDependencyThrottleExceptionResponse(parsedOutput, context)),
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
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDetachLoadBalancerFromSubnetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDetachLoadBalancerFromSubnetsOutput(data.DetachLoadBalancerFromSubnetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDetachLoadBalancerFromSubnetsCommand = deserializeAws_queryDetachLoadBalancerFromSubnetsCommand;
const deserializeAws_queryDetachLoadBalancerFromSubnetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRemoveAvailabilityZonesOutput(data.DisableAvailabilityZonesForLoadBalancerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand = deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand;
const deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAddAvailabilityZonesOutput(data.EnableAvailabilityZonesForLoadBalancerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand = deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand;
const deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
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
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LoadBalancerAttributeNotFoundException":
        case "com.amazonaws.elasticloadbalancing#LoadBalancerAttributeNotFoundException":
            response = {
                ...(await deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryRegisterInstancesWithLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRegisterEndPointsOutput(data.RegisterInstancesWithLoadBalancerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRegisterInstancesWithLoadBalancerCommand = deserializeAws_queryRegisterInstancesWithLoadBalancerCommand;
const deserializeAws_queryRegisterInstancesWithLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndPointException":
        case "com.amazonaws.elasticloadbalancing#InvalidEndPointException":
            response = {
                ...(await deserializeAws_queryInvalidEndPointExceptionResponse(parsedOutput, context)),
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
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput(data.SetLoadBalancerListenerSSLCertificateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand = deserializeAws_querySetLoadBalancerListenerSSLCertificateCommand;
const deserializeAws_querySetLoadBalancerListenerSSLCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CertificateNotFoundException":
        case "com.amazonaws.elasticloadbalancing#CertificateNotFoundException":
            response = {
                ...(await deserializeAws_queryCertificateNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancing#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedProtocolException":
        case "com.amazonaws.elasticloadbalancing#UnsupportedProtocolException":
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
const deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput(data.SetLoadBalancerPoliciesForBackendServerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand = deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommand;
const deserializeAws_querySetLoadBalancerPoliciesForBackendServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput(data.SetLoadBalancerPoliciesOfListenerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand = deserializeAws_querySetLoadBalancerPoliciesOfListenerCommand;
const deserializeAws_querySetLoadBalancerPoliciesOfListenerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFoundException":
        case "com.amazonaws.elasticloadbalancing#AccessPointNotFoundException":
            response = {
                ...(await deserializeAws_queryAccessPointNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationRequestException":
        case "com.amazonaws.elasticloadbalancing#InvalidConfigurationRequestException":
            response = {
                ...(await deserializeAws_queryInvalidConfigurationRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ListenerNotFoundException":
        case "com.amazonaws.elasticloadbalancing#ListenerNotFoundException":
            response = {
                ...(await deserializeAws_queryListenerNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.elasticloadbalancing#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_queryPolicyNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryAccessPointNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAccessPointNotFoundException(body.Error, context);
    const contents = {
        name: "AccessPointNotFoundException",
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
const deserializeAws_queryDependencyThrottleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDependencyThrottleException(body.Error, context);
    const contents = {
        name: "DependencyThrottleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDuplicateAccessPointNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateAccessPointNameException(body.Error, context);
    const contents = {
        name: "DuplicateAccessPointNameException",
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
const deserializeAws_queryDuplicatePolicyNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicatePolicyNameException(body.Error, context);
    const contents = {
        name: "DuplicatePolicyNameException",
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
const deserializeAws_queryInvalidEndPointExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidEndPointException(body.Error, context);
    const contents = {
        name: "InvalidEndPointException",
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
const deserializeAws_queryLoadBalancerAttributeNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLoadBalancerAttributeNotFoundException(body.Error, context);
    const contents = {
        name: "LoadBalancerAttributeNotFoundException",
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
const deserializeAws_queryPolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPolicyNotFoundException(body.Error, context);
    const contents = {
        name: "PolicyNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryPolicyTypeNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPolicyTypeNotFoundException(body.Error, context);
    const contents = {
        name: "PolicyTypeNotFoundException",
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
const deserializeAws_queryTooManyAccessPointsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyAccessPointsException(body.Error, context);
    const contents = {
        name: "TooManyAccessPointsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTooManyPoliciesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTooManyPoliciesException(body.Error, context);
    const contents = {
        name: "TooManyPoliciesException",
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
const serializeAws_queryAccessLog = (input, context) => {
    const entries = {};
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
const serializeAws_queryAddAvailabilityZonesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryAdditionalAttribute = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryAdditionalAttributes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryAdditionalAttribute(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryAddTagsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LoadBalancerNames.${key}`;
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
const serializeAws_queryApplySecurityGroupsToLoadBalancerInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
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
const serializeAws_queryAttachLoadBalancerToSubnetsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Subnets !== undefined && input.Subnets !== null) {
        const memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Subnets.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryAvailabilityZones = (input, context) => {
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
const serializeAws_queryConfigureHealthCheckInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.HealthCheck !== undefined && input.HealthCheck !== null) {
        const memberEntries = serializeAws_queryHealthCheck(input.HealthCheck, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `HealthCheck.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryConnectionDraining = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.Timeout !== undefined && input.Timeout !== null) {
        entries["Timeout"] = input.Timeout;
    }
    return entries;
};
const serializeAws_queryConnectionSettings = (input, context) => {
    const entries = {};
    if (input.IdleTimeout !== undefined && input.IdleTimeout !== null) {
        entries["IdleTimeout"] = input.IdleTimeout;
    }
    return entries;
};
const serializeAws_queryCreateAccessPointInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Listeners !== undefined && input.Listeners !== null) {
        const memberEntries = serializeAws_queryListeners(input.Listeners, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Listeners.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Subnets !== undefined && input.Subnets !== null) {
        const memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Subnets.${key}`;
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
    return entries;
};
const serializeAws_queryCreateAppCookieStickinessPolicyInput = (input, context) => {
    const entries = {};
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
const serializeAws_queryCreateLBCookieStickinessPolicyInput = (input, context) => {
    const entries = {};
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
const serializeAws_queryCreateLoadBalancerListenerInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Listeners !== undefined && input.Listeners !== null) {
        const memberEntries = serializeAws_queryListeners(input.Listeners, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Listeners.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateLoadBalancerPolicyInput = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryPolicyAttributes(input.PolicyAttributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyAttributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCrossZoneLoadBalancing = (input, context) => {
    const entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryDeleteAccessPointInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryDeleteLoadBalancerListenerInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.LoadBalancerPorts !== undefined && input.LoadBalancerPorts !== null) {
        const memberEntries = serializeAws_queryPorts(input.LoadBalancerPorts, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LoadBalancerPorts.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDeleteLoadBalancerPolicyInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyName !== undefined && input.PolicyName !== null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const serializeAws_queryDeregisterEndPointsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Instances !== undefined && input.Instances !== null) {
        const memberEntries = serializeAws_queryInstances(input.Instances, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Instances.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeAccessPointsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LoadBalancerNames.${key}`;
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
const serializeAws_queryDescribeEndPointStateInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Instances !== undefined && input.Instances !== null) {
        const memberEntries = serializeAws_queryInstances(input.Instances, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Instances.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancerAttributesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancerPoliciesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
        const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeLoadBalancerPolicyTypesInput = (input, context) => {
    const entries = {};
    if (input.PolicyTypeNames !== undefined && input.PolicyTypeNames !== null) {
        const memberEntries = serializeAws_queryPolicyTypeNames(input.PolicyTypeNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyTypeNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeTagsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
        const memberEntries = serializeAws_queryLoadBalancerNamesMax20(input.LoadBalancerNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LoadBalancerNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDetachLoadBalancerFromSubnetsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Subnets !== undefined && input.Subnets !== null) {
        const memberEntries = serializeAws_querySubnets(input.Subnets, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Subnets.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryHealthCheck = (input, context) => {
    const entries = {};
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
const serializeAws_queryInstance = (input, context) => {
    const entries = {};
    if (input.InstanceId !== undefined && input.InstanceId !== null) {
        entries["InstanceId"] = input.InstanceId;
    }
    return entries;
};
const serializeAws_queryInstances = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryInstance(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryListener = (input, context) => {
    const entries = {};
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
const serializeAws_queryListeners = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryListener(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryLoadBalancerAttributes = (input, context) => {
    const entries = {};
    if (input.CrossZoneLoadBalancing !== undefined && input.CrossZoneLoadBalancing !== null) {
        const memberEntries = serializeAws_queryCrossZoneLoadBalancing(input.CrossZoneLoadBalancing, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CrossZoneLoadBalancing.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AccessLog !== undefined && input.AccessLog !== null) {
        const memberEntries = serializeAws_queryAccessLog(input.AccessLog, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AccessLog.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ConnectionDraining !== undefined && input.ConnectionDraining !== null) {
        const memberEntries = serializeAws_queryConnectionDraining(input.ConnectionDraining, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ConnectionDraining.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ConnectionSettings !== undefined && input.ConnectionSettings !== null) {
        const memberEntries = serializeAws_queryConnectionSettings(input.ConnectionSettings, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ConnectionSettings.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AdditionalAttributes !== undefined && input.AdditionalAttributes !== null) {
        const memberEntries = serializeAws_queryAdditionalAttributes(input.AdditionalAttributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AdditionalAttributes.${key}`;
            entries[loc] = value;
        });
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
const serializeAws_queryLoadBalancerNamesMax20 = (input, context) => {
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
const serializeAws_queryModifyLoadBalancerAttributesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.LoadBalancerAttributes !== undefined && input.LoadBalancerAttributes !== null) {
        const memberEntries = serializeAws_queryLoadBalancerAttributes(input.LoadBalancerAttributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LoadBalancerAttributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryPolicyAttribute = (input, context) => {
    const entries = {};
    if (input.AttributeName !== undefined && input.AttributeName !== null) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeValue !== undefined && input.AttributeValue !== null) {
        entries["AttributeValue"] = input.AttributeValue;
    }
    return entries;
};
const serializeAws_queryPolicyAttributes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryPolicyAttribute(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPolicyNames = (input, context) => {
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
const serializeAws_queryPolicyTypeNames = (input, context) => {
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
const serializeAws_queryPorts = (input, context) => {
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
const serializeAws_queryRegisterEndPointsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.Instances !== undefined && input.Instances !== null) {
        const memberEntries = serializeAws_queryInstances(input.Instances, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Instances.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRemoveAvailabilityZonesInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AvailabilityZones.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRemoveTagsInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerNames !== undefined && input.LoadBalancerNames !== null) {
        const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LoadBalancerNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagKeyList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
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
const serializeAws_querySetLoadBalancerListenerSSLCertificateInput = (input, context) => {
    const entries = {};
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
const serializeAws_querySetLoadBalancerPoliciesForBackendServerInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.InstancePort !== undefined && input.InstancePort !== null) {
        entries["InstancePort"] = input.InstancePort;
    }
    if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
        const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querySetLoadBalancerPoliciesOfListenerInput = (input, context) => {
    const entries = {};
    if (input.LoadBalancerName !== undefined && input.LoadBalancerName !== null) {
        entries["LoadBalancerName"] = input.LoadBalancerName;
    }
    if (input.LoadBalancerPort !== undefined && input.LoadBalancerPort !== null) {
        entries["LoadBalancerPort"] = input.LoadBalancerPort;
    }
    if (input.PolicyNames !== undefined && input.PolicyNames !== null) {
        const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyNames.${key}`;
            entries[loc] = value;
        });
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
const serializeAws_queryTagKeyList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTagKeyOnly(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTagKeyOnly = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
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
const deserializeAws_queryAccessLog = (output, context) => {
    let contents = {
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
const deserializeAws_queryAccessPointNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryAddAvailabilityZonesOutput = (output, context) => {
    let contents = {
        AvailabilityZones: undefined,
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(smithy_client_1.getArrayIfSingleItem(output["AvailabilityZones"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryAdditionalAttribute = (output, context) => {
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
const deserializeAws_queryAdditionalAttributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAdditionalAttribute(entry, context);
    });
};
const deserializeAws_queryAddTagsOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryAppCookieStickinessPolicies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAppCookieStickinessPolicy(entry, context);
    });
};
const deserializeAws_queryAppCookieStickinessPolicy = (output, context) => {
    let contents = {
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
const deserializeAws_queryApplySecurityGroupsToLoadBalancerOutput = (output, context) => {
    let contents = {
        SecurityGroups: undefined,
    };
    if (output.SecurityGroups === "") {
        contents.SecurityGroups = [];
    }
    if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
        contents.SecurityGroups = deserializeAws_querySecurityGroups(smithy_client_1.getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryAttachLoadBalancerToSubnetsOutput = (output, context) => {
    let contents = {
        Subnets: undefined,
    };
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
        contents.Subnets = deserializeAws_querySubnets(smithy_client_1.getArrayIfSingleItem(output["Subnets"]["member"]), context);
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
        return entry;
    });
};
const deserializeAws_queryBackendServerDescription = (output, context) => {
    let contents = {
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
        contents.PolicyNames = deserializeAws_queryPolicyNames(smithy_client_1.getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryBackendServerDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryBackendServerDescription(entry, context);
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
const deserializeAws_queryConfigureHealthCheckOutput = (output, context) => {
    let contents = {
        HealthCheck: undefined,
    };
    if (output["HealthCheck"] !== undefined) {
        contents.HealthCheck = deserializeAws_queryHealthCheck(output["HealthCheck"], context);
    }
    return contents;
};
const deserializeAws_queryConnectionDraining = (output, context) => {
    let contents = {
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
const deserializeAws_queryConnectionSettings = (output, context) => {
    let contents = {
        IdleTimeout: undefined,
    };
    if (output["IdleTimeout"] !== undefined) {
        contents.IdleTimeout = parseInt(output["IdleTimeout"]);
    }
    return contents;
};
const deserializeAws_queryCreateAccessPointOutput = (output, context) => {
    let contents = {
        DNSName: undefined,
    };
    if (output["DNSName"] !== undefined) {
        contents.DNSName = output["DNSName"];
    }
    return contents;
};
const deserializeAws_queryCreateAppCookieStickinessPolicyOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCreateLBCookieStickinessPolicyOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCreateLoadBalancerListenerOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCreateLoadBalancerPolicyOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCrossZoneLoadBalancing = (output, context) => {
    let contents = {
        Enabled: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryDeleteAccessPointOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteLoadBalancerListenerOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDeleteLoadBalancerPolicyOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryDependencyThrottleException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDeregisterEndPointsOutput = (output, context) => {
    let contents = {
        Instances: undefined,
    };
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
        contents.Instances = deserializeAws_queryInstances(smithy_client_1.getArrayIfSingleItem(output["Instances"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeAccessPointsOutput = (output, context) => {
    let contents = {
        LoadBalancerDescriptions: undefined,
        NextMarker: undefined,
    };
    if (output.LoadBalancerDescriptions === "") {
        contents.LoadBalancerDescriptions = [];
    }
    if (output["LoadBalancerDescriptions"] !== undefined && output["LoadBalancerDescriptions"]["member"] !== undefined) {
        contents.LoadBalancerDescriptions = deserializeAws_queryLoadBalancerDescriptions(smithy_client_1.getArrayIfSingleItem(output["LoadBalancerDescriptions"]["member"]), context);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = output["NextMarker"];
    }
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
const deserializeAws_queryDescribeEndPointStateOutput = (output, context) => {
    let contents = {
        InstanceStates: undefined,
    };
    if (output.InstanceStates === "") {
        contents.InstanceStates = [];
    }
    if (output["InstanceStates"] !== undefined && output["InstanceStates"]["member"] !== undefined) {
        contents.InstanceStates = deserializeAws_queryInstanceStates(smithy_client_1.getArrayIfSingleItem(output["InstanceStates"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancerAttributesOutput = (output, context) => {
    let contents = {
        LoadBalancerAttributes: undefined,
    };
    if (output["LoadBalancerAttributes"] !== undefined) {
        contents.LoadBalancerAttributes = deserializeAws_queryLoadBalancerAttributes(output["LoadBalancerAttributes"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancerPoliciesOutput = (output, context) => {
    let contents = {
        PolicyDescriptions: undefined,
    };
    if (output.PolicyDescriptions === "") {
        contents.PolicyDescriptions = [];
    }
    if (output["PolicyDescriptions"] !== undefined && output["PolicyDescriptions"]["member"] !== undefined) {
        contents.PolicyDescriptions = deserializeAws_queryPolicyDescriptions(smithy_client_1.getArrayIfSingleItem(output["PolicyDescriptions"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeLoadBalancerPolicyTypesOutput = (output, context) => {
    let contents = {
        PolicyTypeDescriptions: undefined,
    };
    if (output.PolicyTypeDescriptions === "") {
        contents.PolicyTypeDescriptions = [];
    }
    if (output["PolicyTypeDescriptions"] !== undefined && output["PolicyTypeDescriptions"]["member"] !== undefined) {
        contents.PolicyTypeDescriptions = deserializeAws_queryPolicyTypeDescriptions(smithy_client_1.getArrayIfSingleItem(output["PolicyTypeDescriptions"]["member"]), context);
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
const deserializeAws_queryDetachLoadBalancerFromSubnetsOutput = (output, context) => {
    let contents = {
        Subnets: undefined,
    };
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
        contents.Subnets = deserializeAws_querySubnets(smithy_client_1.getArrayIfSingleItem(output["Subnets"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDuplicateAccessPointNameException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
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
const deserializeAws_queryDuplicatePolicyNameException = (output, context) => {
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
const deserializeAws_queryHealthCheck = (output, context) => {
    let contents = {
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
const deserializeAws_queryInstance = (output, context) => {
    let contents = {
        InstanceId: undefined,
    };
    if (output["InstanceId"] !== undefined) {
        contents.InstanceId = output["InstanceId"];
    }
    return contents;
};
const deserializeAws_queryInstances = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInstance(entry, context);
    });
};
const deserializeAws_queryInstanceState = (output, context) => {
    let contents = {
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
const deserializeAws_queryInstanceStates = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInstanceState(entry, context);
    });
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
const deserializeAws_queryInvalidEndPointException = (output, context) => {
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
const deserializeAws_queryLBCookieStickinessPolicies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLBCookieStickinessPolicy(entry, context);
    });
};
const deserializeAws_queryLBCookieStickinessPolicy = (output, context) => {
    let contents = {
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
const deserializeAws_queryListenerDescription = (output, context) => {
    let contents = {
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
        contents.PolicyNames = deserializeAws_queryPolicyNames(smithy_client_1.getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListenerDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryListenerDescription(entry, context);
    });
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
const deserializeAws_queryLoadBalancerAttributeNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerAttributes = (output, context) => {
    let contents = {
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
        contents.AdditionalAttributes = deserializeAws_queryAdditionalAttributes(smithy_client_1.getArrayIfSingleItem(output["AdditionalAttributes"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryLoadBalancerDescription = (output, context) => {
    let contents = {
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
        contents.ListenerDescriptions = deserializeAws_queryListenerDescriptions(smithy_client_1.getArrayIfSingleItem(output["ListenerDescriptions"]["member"]), context);
    }
    if (output["Policies"] !== undefined) {
        contents.Policies = deserializeAws_queryPolicies(output["Policies"], context);
    }
    if (output.BackendServerDescriptions === "") {
        contents.BackendServerDescriptions = [];
    }
    if (output["BackendServerDescriptions"] !== undefined &&
        output["BackendServerDescriptions"]["member"] !== undefined) {
        contents.BackendServerDescriptions = deserializeAws_queryBackendServerDescriptions(smithy_client_1.getArrayIfSingleItem(output["BackendServerDescriptions"]["member"]), context);
    }
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(smithy_client_1.getArrayIfSingleItem(output["AvailabilityZones"]["member"]), context);
    }
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined && output["Subnets"]["member"] !== undefined) {
        contents.Subnets = deserializeAws_querySubnets(smithy_client_1.getArrayIfSingleItem(output["Subnets"]["member"]), context);
    }
    if (output["VPCId"] !== undefined) {
        contents.VPCId = output["VPCId"];
    }
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
        contents.Instances = deserializeAws_queryInstances(smithy_client_1.getArrayIfSingleItem(output["Instances"]["member"]), context);
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
        contents.SecurityGroups = deserializeAws_querySecurityGroups(smithy_client_1.getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = new Date(output["CreatedTime"]);
    }
    if (output["Scheme"] !== undefined) {
        contents.Scheme = output["Scheme"];
    }
    return contents;
};
const deserializeAws_queryLoadBalancerDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLoadBalancerDescription(entry, context);
    });
};
const deserializeAws_queryModifyLoadBalancerAttributesOutput = (output, context) => {
    let contents = {
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
const deserializeAws_queryOperationNotPermittedException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryPolicies = (output, context) => {
    let contents = {
        AppCookieStickinessPolicies: undefined,
        LBCookieStickinessPolicies: undefined,
        OtherPolicies: undefined,
    };
    if (output.AppCookieStickinessPolicies === "") {
        contents.AppCookieStickinessPolicies = [];
    }
    if (output["AppCookieStickinessPolicies"] !== undefined &&
        output["AppCookieStickinessPolicies"]["member"] !== undefined) {
        contents.AppCookieStickinessPolicies = deserializeAws_queryAppCookieStickinessPolicies(smithy_client_1.getArrayIfSingleItem(output["AppCookieStickinessPolicies"]["member"]), context);
    }
    if (output.LBCookieStickinessPolicies === "") {
        contents.LBCookieStickinessPolicies = [];
    }
    if (output["LBCookieStickinessPolicies"] !== undefined &&
        output["LBCookieStickinessPolicies"]["member"] !== undefined) {
        contents.LBCookieStickinessPolicies = deserializeAws_queryLBCookieStickinessPolicies(smithy_client_1.getArrayIfSingleItem(output["LBCookieStickinessPolicies"]["member"]), context);
    }
    if (output.OtherPolicies === "") {
        contents.OtherPolicies = [];
    }
    if (output["OtherPolicies"] !== undefined && output["OtherPolicies"]["member"] !== undefined) {
        contents.OtherPolicies = deserializeAws_queryPolicyNames(smithy_client_1.getArrayIfSingleItem(output["OtherPolicies"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryPolicyAttributeDescription = (output, context) => {
    let contents = {
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
const deserializeAws_queryPolicyAttributeDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyAttributeDescription(entry, context);
    });
};
const deserializeAws_queryPolicyAttributeTypeDescription = (output, context) => {
    let contents = {
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
const deserializeAws_queryPolicyAttributeTypeDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyAttributeTypeDescription(entry, context);
    });
};
const deserializeAws_queryPolicyDescription = (output, context) => {
    let contents = {
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
        contents.PolicyAttributeDescriptions = deserializeAws_queryPolicyAttributeDescriptions(smithy_client_1.getArrayIfSingleItem(output["PolicyAttributeDescriptions"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryPolicyDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyDescription(entry, context);
    });
};
const deserializeAws_queryPolicyNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryPolicyNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryPolicyTypeDescription = (output, context) => {
    let contents = {
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
        contents.PolicyAttributeTypeDescriptions = deserializeAws_queryPolicyAttributeTypeDescriptions(smithy_client_1.getArrayIfSingleItem(output["PolicyAttributeTypeDescriptions"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryPolicyTypeDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPolicyTypeDescription(entry, context);
    });
};
const deserializeAws_queryPolicyTypeNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryRegisterEndPointsOutput = (output, context) => {
    let contents = {
        Instances: undefined,
    };
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
        contents.Instances = deserializeAws_queryInstances(smithy_client_1.getArrayIfSingleItem(output["Instances"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryRemoveAvailabilityZonesOutput = (output, context) => {
    let contents = {
        AvailabilityZones: undefined,
    };
    if (output.AvailabilityZones === "") {
        contents.AvailabilityZones = [];
    }
    if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(smithy_client_1.getArrayIfSingleItem(output["AvailabilityZones"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryRemoveTagsOutput = (output, context) => {
    let contents = {};
    return contents;
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
const deserializeAws_querySetLoadBalancerListenerSSLCertificateOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySetLoadBalancerPoliciesForBackendServerOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySetLoadBalancerPoliciesOfListenerOutput = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySourceSecurityGroup = (output, context) => {
    let contents = {
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
const deserializeAws_querySubnetNotFoundException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_querySubnets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const deserializeAws_queryTooManyAccessPointsException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryTooManyPoliciesException = (output, context) => {
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