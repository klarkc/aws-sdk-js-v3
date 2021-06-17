"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1PutProtocolsListCommand = exports.deserializeAws_json1_1PutPolicyCommand = exports.deserializeAws_json1_1PutNotificationChannelCommand = exports.deserializeAws_json1_1PutAppsListCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListProtocolsListsCommand = exports.deserializeAws_json1_1ListPoliciesCommand = exports.deserializeAws_json1_1ListMemberAccountsCommand = exports.deserializeAws_json1_1ListComplianceStatusCommand = exports.deserializeAws_json1_1ListAppsListsCommand = exports.deserializeAws_json1_1GetViolationDetailsCommand = exports.deserializeAws_json1_1GetProtocolsListCommand = exports.deserializeAws_json1_1GetProtectionStatusCommand = exports.deserializeAws_json1_1GetPolicyCommand = exports.deserializeAws_json1_1GetNotificationChannelCommand = exports.deserializeAws_json1_1GetComplianceDetailCommand = exports.deserializeAws_json1_1GetAppsListCommand = exports.deserializeAws_json1_1GetAdminAccountCommand = exports.deserializeAws_json1_1DisassociateAdminAccountCommand = exports.deserializeAws_json1_1DeleteProtocolsListCommand = exports.deserializeAws_json1_1DeletePolicyCommand = exports.deserializeAws_json1_1DeleteNotificationChannelCommand = exports.deserializeAws_json1_1DeleteAppsListCommand = exports.deserializeAws_json1_1AssociateAdminAccountCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1PutProtocolsListCommand = exports.serializeAws_json1_1PutPolicyCommand = exports.serializeAws_json1_1PutNotificationChannelCommand = exports.serializeAws_json1_1PutAppsListCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListProtocolsListsCommand = exports.serializeAws_json1_1ListPoliciesCommand = exports.serializeAws_json1_1ListMemberAccountsCommand = exports.serializeAws_json1_1ListComplianceStatusCommand = exports.serializeAws_json1_1ListAppsListsCommand = exports.serializeAws_json1_1GetViolationDetailsCommand = exports.serializeAws_json1_1GetProtocolsListCommand = exports.serializeAws_json1_1GetProtectionStatusCommand = exports.serializeAws_json1_1GetPolicyCommand = exports.serializeAws_json1_1GetNotificationChannelCommand = exports.serializeAws_json1_1GetComplianceDetailCommand = exports.serializeAws_json1_1GetAppsListCommand = exports.serializeAws_json1_1GetAdminAccountCommand = exports.serializeAws_json1_1DisassociateAdminAccountCommand = exports.serializeAws_json1_1DeleteProtocolsListCommand = exports.serializeAws_json1_1DeletePolicyCommand = exports.serializeAws_json1_1DeleteNotificationChannelCommand = exports.serializeAws_json1_1DeleteAppsListCommand = exports.serializeAws_json1_1AssociateAdminAccountCommand = void 0;
exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateAdminAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.AssociateAdminAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateAdminAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateAdminAccountCommand = serializeAws_json1_1AssociateAdminAccountCommand;
const serializeAws_json1_1DeleteAppsListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.DeleteAppsList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppsListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAppsListCommand = serializeAws_json1_1DeleteAppsListCommand;
const serializeAws_json1_1DeleteNotificationChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.DeleteNotificationChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNotificationChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteNotificationChannelCommand = serializeAws_json1_1DeleteNotificationChannelCommand;
const serializeAws_json1_1DeletePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.DeletePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePolicyCommand = serializeAws_json1_1DeletePolicyCommand;
const serializeAws_json1_1DeleteProtocolsListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.DeleteProtocolsList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProtocolsListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProtocolsListCommand = serializeAws_json1_1DeleteProtocolsListCommand;
const serializeAws_json1_1DisassociateAdminAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.DisassociateAdminAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateAdminAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateAdminAccountCommand = serializeAws_json1_1DisassociateAdminAccountCommand;
const serializeAws_json1_1GetAdminAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.GetAdminAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAdminAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAdminAccountCommand = serializeAws_json1_1GetAdminAccountCommand;
const serializeAws_json1_1GetAppsListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.GetAppsList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAppsListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAppsListCommand = serializeAws_json1_1GetAppsListCommand;
const serializeAws_json1_1GetComplianceDetailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.GetComplianceDetail",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetComplianceDetailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetComplianceDetailCommand = serializeAws_json1_1GetComplianceDetailCommand;
const serializeAws_json1_1GetNotificationChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.GetNotificationChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetNotificationChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetNotificationChannelCommand = serializeAws_json1_1GetNotificationChannelCommand;
const serializeAws_json1_1GetPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.GetPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPolicyCommand = serializeAws_json1_1GetPolicyCommand;
const serializeAws_json1_1GetProtectionStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.GetProtectionStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetProtectionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetProtectionStatusCommand = serializeAws_json1_1GetProtectionStatusCommand;
const serializeAws_json1_1GetProtocolsListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.GetProtocolsList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetProtocolsListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetProtocolsListCommand = serializeAws_json1_1GetProtocolsListCommand;
const serializeAws_json1_1GetViolationDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.GetViolationDetails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetViolationDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetViolationDetailsCommand = serializeAws_json1_1GetViolationDetailsCommand;
const serializeAws_json1_1ListAppsListsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.ListAppsLists",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAppsListsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAppsListsCommand = serializeAws_json1_1ListAppsListsCommand;
const serializeAws_json1_1ListComplianceStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.ListComplianceStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListComplianceStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListComplianceStatusCommand = serializeAws_json1_1ListComplianceStatusCommand;
const serializeAws_json1_1ListMemberAccountsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.ListMemberAccounts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMemberAccountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListMemberAccountsCommand = serializeAws_json1_1ListMemberAccountsCommand;
const serializeAws_json1_1ListPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.ListPolicies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPoliciesCommand = serializeAws_json1_1ListPoliciesCommand;
const serializeAws_json1_1ListProtocolsListsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.ListProtocolsLists",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProtocolsListsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProtocolsListsCommand = serializeAws_json1_1ListProtocolsListsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PutAppsListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.PutAppsList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAppsListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAppsListCommand = serializeAws_json1_1PutAppsListCommand;
const serializeAws_json1_1PutNotificationChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.PutNotificationChannel",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutNotificationChannelRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutNotificationChannelCommand = serializeAws_json1_1PutNotificationChannelCommand;
const serializeAws_json1_1PutPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.PutPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutPolicyCommand = serializeAws_json1_1PutPolicyCommand;
const serializeAws_json1_1PutProtocolsListCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.PutProtocolsList",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutProtocolsListRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutProtocolsListCommand = serializeAws_json1_1PutProtocolsListCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSFMS_20180101.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1AssociateAdminAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateAdminAccountCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateAdminAccountCommand = deserializeAws_json1_1AssociateAdminAccountCommand;
const deserializeAws_json1_1AssociateAdminAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteAppsListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAppsListCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAppsListCommand = deserializeAws_json1_1DeleteAppsListCommand;
const deserializeAws_json1_1DeleteAppsListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteNotificationChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteNotificationChannelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteNotificationChannelCommand = deserializeAws_json1_1DeleteNotificationChannelCommand;
const deserializeAws_json1_1DeleteNotificationChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeletePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePolicyCommand = deserializeAws_json1_1DeletePolicyCommand;
const deserializeAws_json1_1DeletePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.fms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteProtocolsListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteProtocolsListCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProtocolsListCommand = deserializeAws_json1_1DeleteProtocolsListCommand;
const deserializeAws_json1_1DeleteProtocolsListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateAdminAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateAdminAccountCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateAdminAccountCommand = deserializeAws_json1_1DisassociateAdminAccountCommand;
const deserializeAws_json1_1DisassociateAdminAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAdminAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAdminAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAdminAccountResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAdminAccountCommand = deserializeAws_json1_1GetAdminAccountCommand;
const deserializeAws_json1_1GetAdminAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAppsListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAppsListCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAppsListResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAppsListCommand = deserializeAws_json1_1GetAppsListCommand;
const deserializeAws_json1_1GetAppsListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetComplianceDetailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetComplianceDetailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetComplianceDetailResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetComplianceDetailCommand = deserializeAws_json1_1GetComplianceDetailCommand;
const deserializeAws_json1_1GetComplianceDetailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetNotificationChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetNotificationChannelCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetNotificationChannelResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetNotificationChannelCommand = deserializeAws_json1_1GetNotificationChannelCommand;
const deserializeAws_json1_1GetNotificationChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPolicyCommand = deserializeAws_json1_1GetPolicyCommand;
const deserializeAws_json1_1GetPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.fms#InvalidTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetProtectionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetProtectionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetProtectionStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetProtectionStatusCommand = deserializeAws_json1_1GetProtectionStatusCommand;
const deserializeAws_json1_1GetProtectionStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetProtocolsListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetProtocolsListCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetProtocolsListResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetProtocolsListCommand = deserializeAws_json1_1GetProtocolsListCommand;
const deserializeAws_json1_1GetProtocolsListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetViolationDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetViolationDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetViolationDetailsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetViolationDetailsCommand = deserializeAws_json1_1GetViolationDetailsCommand;
const deserializeAws_json1_1GetViolationDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAppsListsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAppsListsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAppsListsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAppsListsCommand = deserializeAws_json1_1ListAppsListsCommand;
const deserializeAws_json1_1ListAppsListsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.fms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListComplianceStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListComplianceStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListComplianceStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListComplianceStatusCommand = deserializeAws_json1_1ListComplianceStatusCommand;
const deserializeAws_json1_1ListComplianceStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListMemberAccountsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListMemberAccountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMemberAccountsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListMemberAccountsCommand = deserializeAws_json1_1ListMemberAccountsCommand;
const deserializeAws_json1_1ListMemberAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPoliciesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPoliciesCommand = deserializeAws_json1_1ListPoliciesCommand;
const deserializeAws_json1_1ListPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.fms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListProtocolsListsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListProtocolsListsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProtocolsListsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProtocolsListsCommand = deserializeAws_json1_1ListProtocolsListsCommand;
const deserializeAws_json1_1ListProtocolsListsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutAppsListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAppsListCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAppsListResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAppsListCommand = deserializeAws_json1_1PutAppsListCommand;
const deserializeAws_json1_1PutAppsListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.fms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutNotificationChannelCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutNotificationChannelCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutNotificationChannelCommand = deserializeAws_json1_1PutNotificationChannelCommand;
const deserializeAws_json1_1PutNotificationChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutPolicyCommand = deserializeAws_json1_1PutPolicyCommand;
const deserializeAws_json1_1PutPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.fms#InvalidTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.fms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutProtocolsListCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutProtocolsListCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutProtocolsListResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutProtocolsListCommand = deserializeAws_json1_1PutProtocolsListCommand;
const deserializeAws_json1_1PutProtocolsListCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.fms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.fms#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
        case "InternalErrorException":
        case "com.amazonaws.fms#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.fms#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.fms#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.fms#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = {
        name: "InternalErrorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = {
        name: "InvalidInputException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
    const contents = {
        name: "InvalidOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTypeException(body, context);
    const contents = {
        name: "InvalidTypeException",
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
const serializeAws_json1_1App = (input, context) => {
    return {
        ...(input.AppName !== undefined && input.AppName !== null && { AppName: input.AppName }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
        ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    };
};
const serializeAws_json1_1AppsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1App(entry, context);
    });
};
const serializeAws_json1_1AppsListData = (input, context) => {
    return {
        ...(input.AppsList !== undefined &&
            input.AppsList !== null && { AppsList: serializeAws_json1_1AppsList(input.AppsList, context) }),
        ...(input.CreateTime !== undefined &&
            input.CreateTime !== null && { CreateTime: Math.round(input.CreateTime.getTime() / 1000) }),
        ...(input.LastUpdateTime !== undefined &&
            input.LastUpdateTime !== null && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) }),
        ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
        ...(input.ListName !== undefined && input.ListName !== null && { ListName: input.ListName }),
        ...(input.ListUpdateToken !== undefined &&
            input.ListUpdateToken !== null && { ListUpdateToken: input.ListUpdateToken }),
        ...(input.PreviousAppsList !== undefined &&
            input.PreviousAppsList !== null && {
            PreviousAppsList: serializeAws_json1_1PreviousAppsList(input.PreviousAppsList, context),
        }),
    };
};
const serializeAws_json1_1AssociateAdminAccountRequest = (input, context) => {
    return {
        ...(input.AdminAccount !== undefined && input.AdminAccount !== null && { AdminAccount: input.AdminAccount }),
    };
};
const serializeAws_json1_1CustomerPolicyScopeIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CustomerPolicyScopeMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1CustomerPolicyScopeIdList(value, context),
        };
    }, {});
};
const serializeAws_json1_1DeleteAppsListRequest = (input, context) => {
    return {
        ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
    };
};
const serializeAws_json1_1DeleteNotificationChannelRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DeletePolicyRequest = (input, context) => {
    return {
        ...(input.DeleteAllPolicyResources !== undefined &&
            input.DeleteAllPolicyResources !== null && { DeleteAllPolicyResources: input.DeleteAllPolicyResources }),
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    };
};
const serializeAws_json1_1DeleteProtocolsListRequest = (input, context) => {
    return {
        ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
    };
};
const serializeAws_json1_1DisassociateAdminAccountRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetAdminAccountRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetAppsListRequest = (input, context) => {
    return {
        ...(input.DefaultList !== undefined && input.DefaultList !== null && { DefaultList: input.DefaultList }),
        ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
    };
};
const serializeAws_json1_1GetComplianceDetailRequest = (input, context) => {
    return {
        ...(input.MemberAccount !== undefined && input.MemberAccount !== null && { MemberAccount: input.MemberAccount }),
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    };
};
const serializeAws_json1_1GetNotificationChannelRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetPolicyRequest = (input, context) => {
    return {
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    };
};
const serializeAws_json1_1GetProtectionStatusRequest = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.MemberAccountId !== undefined &&
            input.MemberAccountId !== null && { MemberAccountId: input.MemberAccountId }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1GetProtocolsListRequest = (input, context) => {
    return {
        ...(input.DefaultList !== undefined && input.DefaultList !== null && { DefaultList: input.DefaultList }),
        ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
    };
};
const serializeAws_json1_1GetViolationDetailsRequest = (input, context) => {
    return {
        ...(input.MemberAccount !== undefined && input.MemberAccount !== null && { MemberAccount: input.MemberAccount }),
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1ListAppsListsRequest = (input, context) => {
    return {
        ...(input.DefaultLists !== undefined && input.DefaultLists !== null && { DefaultLists: input.DefaultLists }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListComplianceStatusRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    };
};
const serializeAws_json1_1ListMemberAccountsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListPoliciesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListProtocolsListsRequest = (input, context) => {
    return {
        ...(input.DefaultLists !== undefined && input.DefaultLists !== null && { DefaultLists: input.DefaultLists }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1Policy = (input, context) => {
    return {
        ...(input.ExcludeMap !== undefined &&
            input.ExcludeMap !== null && {
            ExcludeMap: serializeAws_json1_1CustomerPolicyScopeMap(input.ExcludeMap, context),
        }),
        ...(input.ExcludeResourceTags !== undefined &&
            input.ExcludeResourceTags !== null && { ExcludeResourceTags: input.ExcludeResourceTags }),
        ...(input.IncludeMap !== undefined &&
            input.IncludeMap !== null && {
            IncludeMap: serializeAws_json1_1CustomerPolicyScopeMap(input.IncludeMap, context),
        }),
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
        ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
        ...(input.PolicyUpdateToken !== undefined &&
            input.PolicyUpdateToken !== null && { PolicyUpdateToken: input.PolicyUpdateToken }),
        ...(input.RemediationEnabled !== undefined &&
            input.RemediationEnabled !== null && { RemediationEnabled: input.RemediationEnabled }),
        ...(input.ResourceTags !== undefined &&
            input.ResourceTags !== null && { ResourceTags: serializeAws_json1_1ResourceTags(input.ResourceTags, context) }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.ResourceTypeList !== undefined &&
            input.ResourceTypeList !== null && {
            ResourceTypeList: serializeAws_json1_1ResourceTypeList(input.ResourceTypeList, context),
        }),
        ...(input.SecurityServicePolicyData !== undefined &&
            input.SecurityServicePolicyData !== null && {
            SecurityServicePolicyData: serializeAws_json1_1SecurityServicePolicyData(input.SecurityServicePolicyData, context),
        }),
    };
};
const serializeAws_json1_1PreviousAppsList = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1AppsList(value, context),
        };
    }, {});
};
const serializeAws_json1_1PreviousProtocolsList = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1ProtocolsList(value, context),
        };
    }, {});
};
const serializeAws_json1_1ProtocolsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ProtocolsListData = (input, context) => {
    return {
        ...(input.CreateTime !== undefined &&
            input.CreateTime !== null && { CreateTime: Math.round(input.CreateTime.getTime() / 1000) }),
        ...(input.LastUpdateTime !== undefined &&
            input.LastUpdateTime !== null && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) }),
        ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
        ...(input.ListName !== undefined && input.ListName !== null && { ListName: input.ListName }),
        ...(input.ListUpdateToken !== undefined &&
            input.ListUpdateToken !== null && { ListUpdateToken: input.ListUpdateToken }),
        ...(input.PreviousProtocolsList !== undefined &&
            input.PreviousProtocolsList !== null && {
            PreviousProtocolsList: serializeAws_json1_1PreviousProtocolsList(input.PreviousProtocolsList, context),
        }),
        ...(input.ProtocolsList !== undefined &&
            input.ProtocolsList !== null && {
            ProtocolsList: serializeAws_json1_1ProtocolsList(input.ProtocolsList, context),
        }),
    };
};
const serializeAws_json1_1PutAppsListRequest = (input, context) => {
    return {
        ...(input.AppsList !== undefined &&
            input.AppsList !== null && { AppsList: serializeAws_json1_1AppsListData(input.AppsList, context) }),
        ...(input.TagList !== undefined &&
            input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
    };
};
const serializeAws_json1_1PutNotificationChannelRequest = (input, context) => {
    return {
        ...(input.SnsRoleName !== undefined && input.SnsRoleName !== null && { SnsRoleName: input.SnsRoleName }),
        ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
    };
};
const serializeAws_json1_1PutPolicyRequest = (input, context) => {
    return {
        ...(input.Policy !== undefined &&
            input.Policy !== null && { Policy: serializeAws_json1_1Policy(input.Policy, context) }),
        ...(input.TagList !== undefined &&
            input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
    };
};
const serializeAws_json1_1PutProtocolsListRequest = (input, context) => {
    return {
        ...(input.ProtocolsList !== undefined &&
            input.ProtocolsList !== null && {
            ProtocolsList: serializeAws_json1_1ProtocolsListData(input.ProtocolsList, context),
        }),
        ...(input.TagList !== undefined &&
            input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
    };
};
const serializeAws_json1_1ResourceTag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ResourceTags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceTag(entry, context);
    });
};
const serializeAws_json1_1ResourceTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SecurityServicePolicyData = (input, context) => {
    return {
        ...(input.ManagedServiceData !== undefined &&
            input.ManagedServiceData !== null && { ManagedServiceData: input.ManagedServiceData }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagList !== undefined &&
            input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const deserializeAws_json1_1App = (output, context) => {
    return {
        AppName: output.AppName !== undefined && output.AppName !== null ? output.AppName : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    };
};
const deserializeAws_json1_1AppsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1App(entry, context);
    });
};
const deserializeAws_json1_1AppsListData = (output, context) => {
    return {
        AppsList: output.AppsList !== undefined && output.AppsList !== null
            ? deserializeAws_json1_1AppsList(output.AppsList, context)
            : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? new Date(Math.round(output.CreateTime * 1000))
            : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
        ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
        ListUpdateToken: output.ListUpdateToken !== undefined && output.ListUpdateToken !== null ? output.ListUpdateToken : undefined,
        PreviousAppsList: output.PreviousAppsList !== undefined && output.PreviousAppsList !== null
            ? deserializeAws_json1_1PreviousAppsList(output.PreviousAppsList, context)
            : undefined,
    };
};
const deserializeAws_json1_1AppsListDataSummary = (output, context) => {
    return {
        AppsList: output.AppsList !== undefined && output.AppsList !== null
            ? deserializeAws_json1_1AppsList(output.AppsList, context)
            : undefined,
        ListArn: output.ListArn !== undefined && output.ListArn !== null ? output.ListArn : undefined,
        ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
        ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
    };
};
const deserializeAws_json1_1AppsListsData = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AppsListDataSummary(entry, context);
    });
};
const deserializeAws_json1_1AwsEc2InstanceViolation = (output, context) => {
    return {
        AwsEc2NetworkInterfaceViolations: output.AwsEc2NetworkInterfaceViolations !== undefined && output.AwsEc2NetworkInterfaceViolations !== null
            ? deserializeAws_json1_1AwsEc2NetworkInterfaceViolations(output.AwsEc2NetworkInterfaceViolations, context)
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
const deserializeAws_json1_1AwsEc2NetworkInterfaceViolation = (output, context) => {
    return {
        ViolatingSecurityGroups: output.ViolatingSecurityGroups !== undefined && output.ViolatingSecurityGroups !== null
            ? deserializeAws_json1_1ResourceIdList(output.ViolatingSecurityGroups, context)
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
const deserializeAws_json1_1AwsEc2NetworkInterfaceViolations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AwsEc2NetworkInterfaceViolation(entry, context);
    });
};
const deserializeAws_json1_1AwsVPCSecurityGroupViolation = (output, context) => {
    return {
        PartialMatches: output.PartialMatches !== undefined && output.PartialMatches !== null
            ? deserializeAws_json1_1PartialMatches(output.PartialMatches, context)
            : undefined,
        PossibleSecurityGroupRemediationActions: output.PossibleSecurityGroupRemediationActions !== undefined &&
            output.PossibleSecurityGroupRemediationActions !== null
            ? deserializeAws_json1_1SecurityGroupRemediationActions(output.PossibleSecurityGroupRemediationActions, context)
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
        ViolationTargetDescription: output.ViolationTargetDescription !== undefined && output.ViolationTargetDescription !== null
            ? output.ViolationTargetDescription
            : undefined,
    };
};
const deserializeAws_json1_1ComplianceViolator = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        ViolationReason: output.ViolationReason !== undefined && output.ViolationReason !== null ? output.ViolationReason : undefined,
    };
};
const deserializeAws_json1_1ComplianceViolators = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ComplianceViolator(entry, context);
    });
};
const deserializeAws_json1_1CustomerPolicyScopeIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1CustomerPolicyScopeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1CustomerPolicyScopeIdList(value, context),
        };
    }, {});
};
const deserializeAws_json1_1DnsDuplicateRuleGroupViolation = (output, context) => {
    return {
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
        ViolationTargetDescription: output.ViolationTargetDescription !== undefined && output.ViolationTargetDescription !== null
            ? output.ViolationTargetDescription
            : undefined,
    };
};
const deserializeAws_json1_1DnsRuleGroupLimitExceededViolation = (output, context) => {
    return {
        NumberOfRuleGroupsAlreadyAssociated: output.NumberOfRuleGroupsAlreadyAssociated !== undefined && output.NumberOfRuleGroupsAlreadyAssociated !== null
            ? output.NumberOfRuleGroupsAlreadyAssociated
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
        ViolationTargetDescription: output.ViolationTargetDescription !== undefined && output.ViolationTargetDescription !== null
            ? output.ViolationTargetDescription
            : undefined,
    };
};
const deserializeAws_json1_1DnsRuleGroupPriorities = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DnsRuleGroupPriorityConflictViolation = (output, context) => {
    return {
        ConflictingPolicyId: output.ConflictingPolicyId !== undefined && output.ConflictingPolicyId !== null
            ? output.ConflictingPolicyId
            : undefined,
        ConflictingPriority: output.ConflictingPriority !== undefined && output.ConflictingPriority !== null
            ? output.ConflictingPriority
            : undefined,
        UnavailablePriorities: output.UnavailablePriorities !== undefined && output.UnavailablePriorities !== null
            ? deserializeAws_json1_1DnsRuleGroupPriorities(output.UnavailablePriorities, context)
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
        ViolationTargetDescription: output.ViolationTargetDescription !== undefined && output.ViolationTargetDescription !== null
            ? output.ViolationTargetDescription
            : undefined,
    };
};
const deserializeAws_json1_1EvaluationResult = (output, context) => {
    return {
        ComplianceStatus: output.ComplianceStatus !== undefined && output.ComplianceStatus !== null ? output.ComplianceStatus : undefined,
        EvaluationLimitExceeded: output.EvaluationLimitExceeded !== undefined && output.EvaluationLimitExceeded !== null
            ? output.EvaluationLimitExceeded
            : undefined,
        ViolatorCount: output.ViolatorCount !== undefined && output.ViolatorCount !== null ? output.ViolatorCount : undefined,
    };
};
const deserializeAws_json1_1EvaluationResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EvaluationResult(entry, context);
    });
};
const deserializeAws_json1_1GetAdminAccountResponse = (output, context) => {
    return {
        AdminAccount: output.AdminAccount !== undefined && output.AdminAccount !== null ? output.AdminAccount : undefined,
        RoleStatus: output.RoleStatus !== undefined && output.RoleStatus !== null ? output.RoleStatus : undefined,
    };
};
const deserializeAws_json1_1GetAppsListResponse = (output, context) => {
    return {
        AppsList: output.AppsList !== undefined && output.AppsList !== null
            ? deserializeAws_json1_1AppsListData(output.AppsList, context)
            : undefined,
        AppsListArn: output.AppsListArn !== undefined && output.AppsListArn !== null ? output.AppsListArn : undefined,
    };
};
const deserializeAws_json1_1GetComplianceDetailResponse = (output, context) => {
    return {
        PolicyComplianceDetail: output.PolicyComplianceDetail !== undefined && output.PolicyComplianceDetail !== null
            ? deserializeAws_json1_1PolicyComplianceDetail(output.PolicyComplianceDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetNotificationChannelResponse = (output, context) => {
    return {
        SnsRoleName: output.SnsRoleName !== undefined && output.SnsRoleName !== null ? output.SnsRoleName : undefined,
        SnsTopicArn: output.SnsTopicArn !== undefined && output.SnsTopicArn !== null ? output.SnsTopicArn : undefined,
    };
};
const deserializeAws_json1_1GetPolicyResponse = (output, context) => {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null
            ? deserializeAws_json1_1Policy(output.Policy, context)
            : undefined,
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
    };
};
const deserializeAws_json1_1GetProtectionStatusResponse = (output, context) => {
    return {
        AdminAccountId: output.AdminAccountId !== undefined && output.AdminAccountId !== null ? output.AdminAccountId : undefined,
        Data: output.Data !== undefined && output.Data !== null ? output.Data : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ServiceType: output.ServiceType !== undefined && output.ServiceType !== null ? output.ServiceType : undefined,
    };
};
const deserializeAws_json1_1GetProtocolsListResponse = (output, context) => {
    return {
        ProtocolsList: output.ProtocolsList !== undefined && output.ProtocolsList !== null
            ? deserializeAws_json1_1ProtocolsListData(output.ProtocolsList, context)
            : undefined,
        ProtocolsListArn: output.ProtocolsListArn !== undefined && output.ProtocolsListArn !== null ? output.ProtocolsListArn : undefined,
    };
};
const deserializeAws_json1_1GetViolationDetailsResponse = (output, context) => {
    return {
        ViolationDetail: output.ViolationDetail !== undefined && output.ViolationDetail !== null
            ? deserializeAws_json1_1ViolationDetail(output.ViolationDetail, context)
            : undefined,
    };
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidOperationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidTypeException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1IssueInfoMap = (output, context) => {
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
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListAppsListsResponse = (output, context) => {
    return {
        AppsLists: output.AppsLists !== undefined && output.AppsLists !== null
            ? deserializeAws_json1_1AppsListsData(output.AppsLists, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListComplianceStatusResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PolicyComplianceStatusList: output.PolicyComplianceStatusList !== undefined && output.PolicyComplianceStatusList !== null
            ? deserializeAws_json1_1PolicyComplianceStatusList(output.PolicyComplianceStatusList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListMemberAccountsResponse = (output, context) => {
    return {
        MemberAccounts: output.MemberAccounts !== undefined && output.MemberAccounts !== null
            ? deserializeAws_json1_1MemberAccounts(output.MemberAccounts, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListPoliciesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PolicyList: output.PolicyList !== undefined && output.PolicyList !== null
            ? deserializeAws_json1_1PolicySummaryList(output.PolicyList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListProtocolsListsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ProtocolsLists: output.ProtocolsLists !== undefined && output.ProtocolsLists !== null
            ? deserializeAws_json1_1ProtocolsListsData(output.ProtocolsLists, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        TagList: output.TagList !== undefined && output.TagList !== null
            ? deserializeAws_json1_1TagList(output.TagList, context)
            : undefined,
    };
};
const deserializeAws_json1_1MemberAccounts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1NetworkFirewallActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1NetworkFirewallMissingExpectedRTViolation = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        CurrentRouteTable: output.CurrentRouteTable !== undefined && output.CurrentRouteTable !== null
            ? output.CurrentRouteTable
            : undefined,
        ExpectedRouteTable: output.ExpectedRouteTable !== undefined && output.ExpectedRouteTable !== null
            ? output.ExpectedRouteTable
            : undefined,
        VPC: output.VPC !== undefined && output.VPC !== null ? output.VPC : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
const deserializeAws_json1_1NetworkFirewallMissingFirewallViolation = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        TargetViolationReason: output.TargetViolationReason !== undefined && output.TargetViolationReason !== null
            ? output.TargetViolationReason
            : undefined,
        VPC: output.VPC !== undefined && output.VPC !== null ? output.VPC : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
const deserializeAws_json1_1NetworkFirewallMissingSubnetViolation = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        TargetViolationReason: output.TargetViolationReason !== undefined && output.TargetViolationReason !== null
            ? output.TargetViolationReason
            : undefined,
        VPC: output.VPC !== undefined && output.VPC !== null ? output.VPC : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
const deserializeAws_json1_1NetworkFirewallPolicyDescription = (output, context) => {
    return {
        StatefulRuleGroups: output.StatefulRuleGroups !== undefined && output.StatefulRuleGroups !== null
            ? deserializeAws_json1_1StatefulRuleGroupList(output.StatefulRuleGroups, context)
            : undefined,
        StatelessCustomActions: output.StatelessCustomActions !== undefined && output.StatelessCustomActions !== null
            ? deserializeAws_json1_1NetworkFirewallActionList(output.StatelessCustomActions, context)
            : undefined,
        StatelessDefaultActions: output.StatelessDefaultActions !== undefined && output.StatelessDefaultActions !== null
            ? deserializeAws_json1_1NetworkFirewallActionList(output.StatelessDefaultActions, context)
            : undefined,
        StatelessFragmentDefaultActions: output.StatelessFragmentDefaultActions !== undefined && output.StatelessFragmentDefaultActions !== null
            ? deserializeAws_json1_1NetworkFirewallActionList(output.StatelessFragmentDefaultActions, context)
            : undefined,
        StatelessRuleGroups: output.StatelessRuleGroups !== undefined && output.StatelessRuleGroups !== null
            ? deserializeAws_json1_1StatelessRuleGroupList(output.StatelessRuleGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1NetworkFirewallPolicyModifiedViolation = (output, context) => {
    return {
        CurrentPolicyDescription: output.CurrentPolicyDescription !== undefined && output.CurrentPolicyDescription !== null
            ? deserializeAws_json1_1NetworkFirewallPolicyDescription(output.CurrentPolicyDescription, context)
            : undefined,
        ExpectedPolicyDescription: output.ExpectedPolicyDescription !== undefined && output.ExpectedPolicyDescription !== null
            ? deserializeAws_json1_1NetworkFirewallPolicyDescription(output.ExpectedPolicyDescription, context)
            : undefined,
        ViolationTarget: output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    };
};
const deserializeAws_json1_1PartialMatch = (output, context) => {
    return {
        Reference: output.Reference !== undefined && output.Reference !== null ? output.Reference : undefined,
        TargetViolationReasons: output.TargetViolationReasons !== undefined && output.TargetViolationReasons !== null
            ? deserializeAws_json1_1TargetViolationReasons(output.TargetViolationReasons, context)
            : undefined,
    };
};
const deserializeAws_json1_1PartialMatches = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PartialMatch(entry, context);
    });
};
const deserializeAws_json1_1Policy = (output, context) => {
    return {
        ExcludeMap: output.ExcludeMap !== undefined && output.ExcludeMap !== null
            ? deserializeAws_json1_1CustomerPolicyScopeMap(output.ExcludeMap, context)
            : undefined,
        ExcludeResourceTags: output.ExcludeResourceTags !== undefined && output.ExcludeResourceTags !== null
            ? output.ExcludeResourceTags
            : undefined,
        IncludeMap: output.IncludeMap !== undefined && output.IncludeMap !== null
            ? deserializeAws_json1_1CustomerPolicyScopeMap(output.IncludeMap, context)
            : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
        PolicyUpdateToken: output.PolicyUpdateToken !== undefined && output.PolicyUpdateToken !== null
            ? output.PolicyUpdateToken
            : undefined,
        RemediationEnabled: output.RemediationEnabled !== undefined && output.RemediationEnabled !== null
            ? output.RemediationEnabled
            : undefined,
        ResourceTags: output.ResourceTags !== undefined && output.ResourceTags !== null
            ? deserializeAws_json1_1ResourceTags(output.ResourceTags, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        ResourceTypeList: output.ResourceTypeList !== undefined && output.ResourceTypeList !== null
            ? deserializeAws_json1_1ResourceTypeList(output.ResourceTypeList, context)
            : undefined,
        SecurityServicePolicyData: output.SecurityServicePolicyData !== undefined && output.SecurityServicePolicyData !== null
            ? deserializeAws_json1_1SecurityServicePolicyData(output.SecurityServicePolicyData, context)
            : undefined,
    };
};
const deserializeAws_json1_1PolicyComplianceDetail = (output, context) => {
    return {
        EvaluationLimitExceeded: output.EvaluationLimitExceeded !== undefined && output.EvaluationLimitExceeded !== null
            ? output.EvaluationLimitExceeded
            : undefined,
        ExpiredAt: output.ExpiredAt !== undefined && output.ExpiredAt !== null
            ? new Date(Math.round(output.ExpiredAt * 1000))
            : undefined,
        IssueInfoMap: output.IssueInfoMap !== undefined && output.IssueInfoMap !== null
            ? deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context)
            : undefined,
        MemberAccount: output.MemberAccount !== undefined && output.MemberAccount !== null ? output.MemberAccount : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyOwner: output.PolicyOwner !== undefined && output.PolicyOwner !== null ? output.PolicyOwner : undefined,
        Violators: output.Violators !== undefined && output.Violators !== null
            ? deserializeAws_json1_1ComplianceViolators(output.Violators, context)
            : undefined,
    };
};
const deserializeAws_json1_1PolicyComplianceStatus = (output, context) => {
    return {
        EvaluationResults: output.EvaluationResults !== undefined && output.EvaluationResults !== null
            ? deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context)
            : undefined,
        IssueInfoMap: output.IssueInfoMap !== undefined && output.IssueInfoMap !== null
            ? deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context)
            : undefined,
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null
            ? new Date(Math.round(output.LastUpdated * 1000))
            : undefined,
        MemberAccount: output.MemberAccount !== undefined && output.MemberAccount !== null ? output.MemberAccount : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
        PolicyOwner: output.PolicyOwner !== undefined && output.PolicyOwner !== null ? output.PolicyOwner : undefined,
    };
};
const deserializeAws_json1_1PolicyComplianceStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PolicyComplianceStatus(entry, context);
    });
};
const deserializeAws_json1_1PolicySummary = (output, context) => {
    return {
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
        RemediationEnabled: output.RemediationEnabled !== undefined && output.RemediationEnabled !== null
            ? output.RemediationEnabled
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        SecurityServiceType: output.SecurityServiceType !== undefined && output.SecurityServiceType !== null
            ? output.SecurityServiceType
            : undefined,
    };
};
const deserializeAws_json1_1PolicySummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PolicySummary(entry, context);
    });
};
const deserializeAws_json1_1PreviousAppsList = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1AppsList(value, context),
        };
    }, {});
};
const deserializeAws_json1_1PreviousProtocolsList = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1ProtocolsList(value, context),
        };
    }, {});
};
const deserializeAws_json1_1ProtocolsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ProtocolsListData = (output, context) => {
    return {
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null
            ? new Date(Math.round(output.CreateTime * 1000))
            : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
        ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
        ListUpdateToken: output.ListUpdateToken !== undefined && output.ListUpdateToken !== null ? output.ListUpdateToken : undefined,
        PreviousProtocolsList: output.PreviousProtocolsList !== undefined && output.PreviousProtocolsList !== null
            ? deserializeAws_json1_1PreviousProtocolsList(output.PreviousProtocolsList, context)
            : undefined,
        ProtocolsList: output.ProtocolsList !== undefined && output.ProtocolsList !== null
            ? deserializeAws_json1_1ProtocolsList(output.ProtocolsList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ProtocolsListDataSummary = (output, context) => {
    return {
        ListArn: output.ListArn !== undefined && output.ListArn !== null ? output.ListArn : undefined,
        ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
        ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
        ProtocolsList: output.ProtocolsList !== undefined && output.ProtocolsList !== null
            ? deserializeAws_json1_1ProtocolsList(output.ProtocolsList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ProtocolsListsData = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProtocolsListDataSummary(entry, context);
    });
};
const deserializeAws_json1_1PutAppsListResponse = (output, context) => {
    return {
        AppsList: output.AppsList !== undefined && output.AppsList !== null
            ? deserializeAws_json1_1AppsListData(output.AppsList, context)
            : undefined,
        AppsListArn: output.AppsListArn !== undefined && output.AppsListArn !== null ? output.AppsListArn : undefined,
    };
};
const deserializeAws_json1_1PutPolicyResponse = (output, context) => {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null
            ? deserializeAws_json1_1Policy(output.Policy, context)
            : undefined,
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
    };
};
const deserializeAws_json1_1PutProtocolsListResponse = (output, context) => {
    return {
        ProtocolsList: output.ProtocolsList !== undefined && output.ProtocolsList !== null
            ? deserializeAws_json1_1ProtocolsListData(output.ProtocolsList, context)
            : undefined,
        ProtocolsListArn: output.ProtocolsListArn !== undefined && output.ProtocolsListArn !== null ? output.ProtocolsListArn : undefined,
    };
};
const deserializeAws_json1_1ResourceIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceTag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1ResourceTags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceTag(entry, context);
    });
};
const deserializeAws_json1_1ResourceTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ResourceViolation = (output, context) => {
    return {
        AwsEc2InstanceViolation: output.AwsEc2InstanceViolation !== undefined && output.AwsEc2InstanceViolation !== null
            ? deserializeAws_json1_1AwsEc2InstanceViolation(output.AwsEc2InstanceViolation, context)
            : undefined,
        AwsEc2NetworkInterfaceViolation: output.AwsEc2NetworkInterfaceViolation !== undefined && output.AwsEc2NetworkInterfaceViolation !== null
            ? deserializeAws_json1_1AwsEc2NetworkInterfaceViolation(output.AwsEc2NetworkInterfaceViolation, context)
            : undefined,
        AwsVPCSecurityGroupViolation: output.AwsVPCSecurityGroupViolation !== undefined && output.AwsVPCSecurityGroupViolation !== null
            ? deserializeAws_json1_1AwsVPCSecurityGroupViolation(output.AwsVPCSecurityGroupViolation, context)
            : undefined,
        DnsDuplicateRuleGroupViolation: output.DnsDuplicateRuleGroupViolation !== undefined && output.DnsDuplicateRuleGroupViolation !== null
            ? deserializeAws_json1_1DnsDuplicateRuleGroupViolation(output.DnsDuplicateRuleGroupViolation, context)
            : undefined,
        DnsRuleGroupLimitExceededViolation: output.DnsRuleGroupLimitExceededViolation !== undefined && output.DnsRuleGroupLimitExceededViolation !== null
            ? deserializeAws_json1_1DnsRuleGroupLimitExceededViolation(output.DnsRuleGroupLimitExceededViolation, context)
            : undefined,
        DnsRuleGroupPriorityConflictViolation: output.DnsRuleGroupPriorityConflictViolation !== undefined &&
            output.DnsRuleGroupPriorityConflictViolation !== null
            ? deserializeAws_json1_1DnsRuleGroupPriorityConflictViolation(output.DnsRuleGroupPriorityConflictViolation, context)
            : undefined,
        NetworkFirewallMissingExpectedRTViolation: output.NetworkFirewallMissingExpectedRTViolation !== undefined &&
            output.NetworkFirewallMissingExpectedRTViolation !== null
            ? deserializeAws_json1_1NetworkFirewallMissingExpectedRTViolation(output.NetworkFirewallMissingExpectedRTViolation, context)
            : undefined,
        NetworkFirewallMissingFirewallViolation: output.NetworkFirewallMissingFirewallViolation !== undefined &&
            output.NetworkFirewallMissingFirewallViolation !== null
            ? deserializeAws_json1_1NetworkFirewallMissingFirewallViolation(output.NetworkFirewallMissingFirewallViolation, context)
            : undefined,
        NetworkFirewallMissingSubnetViolation: output.NetworkFirewallMissingSubnetViolation !== undefined &&
            output.NetworkFirewallMissingSubnetViolation !== null
            ? deserializeAws_json1_1NetworkFirewallMissingSubnetViolation(output.NetworkFirewallMissingSubnetViolation, context)
            : undefined,
        NetworkFirewallPolicyModifiedViolation: output.NetworkFirewallPolicyModifiedViolation !== undefined &&
            output.NetworkFirewallPolicyModifiedViolation !== null
            ? deserializeAws_json1_1NetworkFirewallPolicyModifiedViolation(output.NetworkFirewallPolicyModifiedViolation, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceViolations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceViolation(entry, context);
    });
};
const deserializeAws_json1_1SecurityGroupRemediationAction = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsDefaultAction: output.IsDefaultAction !== undefined && output.IsDefaultAction !== null ? output.IsDefaultAction : undefined,
        RemediationActionType: output.RemediationActionType !== undefined && output.RemediationActionType !== null
            ? output.RemediationActionType
            : undefined,
        RemediationResult: output.RemediationResult !== undefined && output.RemediationResult !== null
            ? deserializeAws_json1_1SecurityGroupRuleDescription(output.RemediationResult, context)
            : undefined,
    };
};
const deserializeAws_json1_1SecurityGroupRemediationActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SecurityGroupRemediationAction(entry, context);
    });
};
const deserializeAws_json1_1SecurityGroupRuleDescription = (output, context) => {
    return {
        FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
        IPV4Range: output.IPV4Range !== undefined && output.IPV4Range !== null ? output.IPV4Range : undefined,
        IPV6Range: output.IPV6Range !== undefined && output.IPV6Range !== null ? output.IPV6Range : undefined,
        PrefixListId: output.PrefixListId !== undefined && output.PrefixListId !== null ? output.PrefixListId : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
    };
};
const deserializeAws_json1_1SecurityServicePolicyData = (output, context) => {
    return {
        ManagedServiceData: output.ManagedServiceData !== undefined && output.ManagedServiceData !== null
            ? output.ManagedServiceData
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1StatefulRuleGroup = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        RuleGroupName: output.RuleGroupName !== undefined && output.RuleGroupName !== null ? output.RuleGroupName : undefined,
    };
};
const deserializeAws_json1_1StatefulRuleGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StatefulRuleGroup(entry, context);
    });
};
const deserializeAws_json1_1StatelessRuleGroup = (output, context) => {
    return {
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        RuleGroupName: output.RuleGroupName !== undefined && output.RuleGroupName !== null ? output.RuleGroupName : undefined,
    };
};
const deserializeAws_json1_1StatelessRuleGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StatelessRuleGroup(entry, context);
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
const deserializeAws_json1_1TargetViolationReasons = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ViolationDetail = (output, context) => {
    return {
        MemberAccount: output.MemberAccount !== undefined && output.MemberAccount !== null ? output.MemberAccount : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        ResourceDescription: output.ResourceDescription !== undefined && output.ResourceDescription !== null
            ? output.ResourceDescription
            : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceTags: output.ResourceTags !== undefined && output.ResourceTags !== null
            ? deserializeAws_json1_1TagList(output.ResourceTags, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
        ResourceViolations: output.ResourceViolations !== undefined && output.ResourceViolations !== null
            ? deserializeAws_json1_1ResourceViolations(output.ResourceViolations, context)
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