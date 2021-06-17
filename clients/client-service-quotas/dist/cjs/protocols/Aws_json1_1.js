"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1RequestServiceQuotaIncreaseCommand = exports.deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListServicesCommand = exports.deserializeAws_json1_1ListServiceQuotasCommand = exports.deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = exports.deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = exports.deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = exports.deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand = exports.deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = exports.deserializeAws_json1_1GetServiceQuotaCommand = exports.deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand = exports.deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand = exports.deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = exports.deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand = exports.deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = exports.deserializeAws_json1_1AssociateServiceQuotaTemplateCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1RequestServiceQuotaIncreaseCommand = exports.serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListServicesCommand = exports.serializeAws_json1_1ListServiceQuotasCommand = exports.serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = exports.serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = exports.serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = exports.serializeAws_json1_1ListAWSDefaultServiceQuotasCommand = exports.serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = exports.serializeAws_json1_1GetServiceQuotaCommand = exports.serializeAws_json1_1GetRequestedServiceQuotaChangeCommand = exports.serializeAws_json1_1GetAWSDefaultServiceQuotaCommand = exports.serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = exports.serializeAws_json1_1DisassociateServiceQuotaTemplateCommand = exports.serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = exports.serializeAws_json1_1AssociateServiceQuotaTemplateCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateServiceQuotaTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateServiceQuotaTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateServiceQuotaTemplateCommand = serializeAws_json1_1AssociateServiceQuotaTemplateCommand;
const serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand;
const serializeAws_json1_1DisassociateServiceQuotaTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateServiceQuotaTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateServiceQuotaTemplateCommand = serializeAws_json1_1DisassociateServiceQuotaTemplateCommand;
const serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand;
const serializeAws_json1_1GetAWSDefaultServiceQuotaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.GetAWSDefaultServiceQuota",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAWSDefaultServiceQuotaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAWSDefaultServiceQuotaCommand = serializeAws_json1_1GetAWSDefaultServiceQuotaCommand;
const serializeAws_json1_1GetRequestedServiceQuotaChangeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.GetRequestedServiceQuotaChange",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRequestedServiceQuotaChangeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRequestedServiceQuotaChangeCommand = serializeAws_json1_1GetRequestedServiceQuotaChangeCommand;
const serializeAws_json1_1GetServiceQuotaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.GetServiceQuota",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServiceQuotaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetServiceQuotaCommand = serializeAws_json1_1GetServiceQuotaCommand;
const serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand;
const serializeAws_json1_1ListAWSDefaultServiceQuotasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAWSDefaultServiceQuotasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAWSDefaultServiceQuotasCommand = serializeAws_json1_1ListAWSDefaultServiceQuotasCommand;
const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand;
const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand;
const serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand;
const serializeAws_json1_1ListServiceQuotasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.ListServiceQuotas",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServiceQuotasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListServiceQuotasCommand = serializeAws_json1_1ListServiceQuotasCommand;
const serializeAws_json1_1ListServicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.ListServices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListServicesCommand = serializeAws_json1_1ListServicesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand;
const serializeAws_json1_1RequestServiceQuotaIncreaseCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.RequestServiceQuotaIncrease",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RequestServiceQuotaIncreaseRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RequestServiceQuotaIncreaseCommand = serializeAws_json1_1RequestServiceQuotaIncreaseCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ServiceQuotasV20190624.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1AssociateServiceQuotaTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateServiceQuotaTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateServiceQuotaTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateServiceQuotaTemplateCommand = deserializeAws_json1_1AssociateServiceQuotaTemplateCommand;
const deserializeAws_json1_1AssociateServiceQuotaTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotInAllFeaturesModeException":
        case "com.amazonaws.servicequotas#OrganizationNotInAllFeaturesModeException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = {
                ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand;
const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = {
                ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateServiceQuotaTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateServiceQuotaTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand = deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand;
const deserializeAws_json1_1DisassociateServiceQuotaTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaTemplateNotInUseException":
        case "com.amazonaws.servicequotas#ServiceQuotaTemplateNotInUseException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = {
                ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAssociationForServiceQuotaTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand;
const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaTemplateNotInUseException":
        case "com.amazonaws.servicequotas#ServiceQuotaTemplateNotInUseException":
            response = {
                ...(await deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = {
                ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAWSDefaultServiceQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand = deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand;
const deserializeAws_json1_1GetAWSDefaultServiceQuotaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRequestedServiceQuotaChangeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand = deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand;
const deserializeAws_json1_1GetRequestedServiceQuotaChangeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetServiceQuotaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetServiceQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServiceQuotaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetServiceQuotaCommand = deserializeAws_json1_1GetServiceQuotaCommand;
const deserializeAws_json1_1GetServiceQuotaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand;
const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = {
                ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAWSDefaultServiceQuotasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand = deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand;
const deserializeAws_json1_1ListAWSDefaultServiceQuotasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand;
const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand;
const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand;
const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = {
                ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListServiceQuotasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListServiceQuotasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServiceQuotasResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListServiceQuotasCommand = deserializeAws_json1_1ListServiceQuotasCommand;
const deserializeAws_json1_1ListServiceQuotasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListServicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListServicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServicesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListServicesCommand = deserializeAws_json1_1ListServicesCommand;
const deserializeAws_json1_1ListServicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand;
const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSServiceAccessNotEnabledException":
        case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAvailableOrganizationException":
        case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
            response = {
                ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "QuotaExceededException":
        case "com.amazonaws.servicequotas#QuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1QuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TemplatesNotAvailableInRegionException":
        case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
            response = {
                ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RequestServiceQuotaIncreaseCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RequestServiceQuotaIncreaseCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RequestServiceQuotaIncreaseResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RequestServiceQuotaIncreaseCommand = deserializeAws_json1_1RequestServiceQuotaIncreaseCommand;
const deserializeAws_json1_1RequestServiceQuotaIncreaseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyAccessDeniedException":
        case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.servicequotas#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "QuotaExceededException":
        case "com.amazonaws.servicequotas#QuotaExceededException":
            response = {
                ...(await deserializeAws_json1_1QuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.servicequotas#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyViolationException":
        case "com.amazonaws.servicequotas#TagPolicyViolationException":
            response = {
                ...(await deserializeAws_json1_1TagPolicyViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.servicequotas#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.servicequotas#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalArgumentException":
        case "com.amazonaws.servicequotas#IllegalArgumentException":
            response = {
                ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoSuchResourceException":
        case "com.amazonaws.servicequotas#NoSuchResourceException":
            response = {
                ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.servicequotas#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.servicequotas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AWSServiceAccessNotEnabledException(body, context);
    const contents = {
        name: "AWSServiceAccessNotEnabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DependencyAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DependencyAccessDeniedException(body, context);
    const contents = {
        name: "DependencyAccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IllegalArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IllegalArgumentException(body, context);
    const contents = {
        name: "IllegalArgumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPaginationTokenException(body, context);
    const contents = {
        name: "InvalidPaginationTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceStateException(body, context);
    const contents = {
        name: "InvalidResourceStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoAvailableOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAvailableOrganizationException(body, context);
    const contents = {
        name: "NoAvailableOrganizationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoSuchResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoSuchResourceException(body, context);
    const contents = {
        name: "NoSuchResourceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationNotInAllFeaturesModeException(body, context);
    const contents = {
        name: "OrganizationNotInAllFeaturesModeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1QuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1QuotaExceededException(body, context);
    const contents = {
        name: "QuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = {
        name: "ResourceAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceException(body, context);
    const contents = {
        name: "ServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceQuotaTemplateNotInUseException(body, context);
    const contents = {
        name: "ServiceQuotaTemplateNotInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagPolicyViolationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagPolicyViolationException(body, context);
    const contents = {
        name: "TagPolicyViolationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TemplatesNotAvailableInRegionException(body, context);
    const contents = {
        name: "TemplatesNotAvailableInRegionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AssociateServiceQuotaTemplateRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest = (input, context) => {
    return {
        ...(input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }),
        ...(input.QuotaCode !== undefined && input.QuotaCode !== null && { QuotaCode: input.QuotaCode }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
    };
};
const serializeAws_json1_1DisassociateServiceQuotaTemplateRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetAWSDefaultServiceQuotaRequest = (input, context) => {
    return {
        ...(input.QuotaCode !== undefined && input.QuotaCode !== null && { QuotaCode: input.QuotaCode }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
    };
};
const serializeAws_json1_1GetRequestedServiceQuotaChangeRequest = (input, context) => {
    return {
        ...(input.RequestId !== undefined && input.RequestId !== null && { RequestId: input.RequestId }),
    };
};
const serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest = (input, context) => {
    return {
        ...(input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }),
        ...(input.QuotaCode !== undefined && input.QuotaCode !== null && { QuotaCode: input.QuotaCode }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
    };
};
const serializeAws_json1_1GetServiceQuotaRequest = (input, context) => {
    return {
        ...(input.QuotaCode !== undefined && input.QuotaCode !== null && { QuotaCode: input.QuotaCode }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
    };
};
const serializeAws_json1_1InputTagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InputTags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1ListAWSDefaultServiceQuotasRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
    };
};
const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.QuotaCode !== undefined && input.QuotaCode !== null && { QuotaCode: input.QuotaCode }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest = (input, context) => {
    return {
        ...(input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
    };
};
const serializeAws_json1_1ListServiceQuotasRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
    };
};
const serializeAws_json1_1ListServicesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest = (input, context) => {
    return {
        ...(input.AwsRegion !== undefined && input.AwsRegion !== null && { AwsRegion: input.AwsRegion }),
        ...(input.DesiredValue !== undefined && input.DesiredValue !== null && { DesiredValue: input.DesiredValue }),
        ...(input.QuotaCode !== undefined && input.QuotaCode !== null && { QuotaCode: input.QuotaCode }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
    };
};
const serializeAws_json1_1RequestServiceQuotaIncreaseRequest = (input, context) => {
    return {
        ...(input.DesiredValue !== undefined && input.DesiredValue !== null && { DesiredValue: input.DesiredValue }),
        ...(input.QuotaCode !== undefined && input.QuotaCode !== null && { QuotaCode: input.QuotaCode }),
        ...(input.ServiceCode !== undefined && input.ServiceCode !== null && { ServiceCode: input.ServiceCode }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_json1_1InputTags(input.Tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1InputTagKeys(input.TagKeys, context) }),
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AssociateServiceQuotaTemplateResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AWSServiceAccessNotEnabledException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DependencyAccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DisassociateServiceQuotaTemplateResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ErrorReason = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    };
};
const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateResponse = (output, context) => {
    return {
        ServiceQuotaTemplateAssociationStatus: output.ServiceQuotaTemplateAssociationStatus !== undefined &&
            output.ServiceQuotaTemplateAssociationStatus !== null
            ? output.ServiceQuotaTemplateAssociationStatus
            : undefined,
    };
};
const deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse = (output, context) => {
    return {
        Quota: output.Quota !== undefined && output.Quota !== null
            ? deserializeAws_json1_1ServiceQuota(output.Quota, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse = (output, context) => {
    return {
        RequestedQuota: output.RequestedQuota !== undefined && output.RequestedQuota !== null
            ? deserializeAws_json1_1RequestedServiceQuotaChange(output.RequestedQuota, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse = (output, context) => {
    return {
        ServiceQuotaIncreaseRequestInTemplate: output.ServiceQuotaIncreaseRequestInTemplate !== undefined &&
            output.ServiceQuotaIncreaseRequestInTemplate !== null
            ? deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(output.ServiceQuotaIncreaseRequestInTemplate, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetServiceQuotaResponse = (output, context) => {
    return {
        Quota: output.Quota !== undefined && output.Quota !== null
            ? deserializeAws_json1_1ServiceQuota(output.Quota, context)
            : undefined,
    };
};
const deserializeAws_json1_1IllegalArgumentException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidPaginationTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidResourceStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Quotas: output.Quotas !== undefined && output.Quotas !== null
            ? deserializeAws_json1_1ServiceQuotaListDefinition(output.Quotas, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RequestedQuotas: output.RequestedQuotas !== undefined && output.RequestedQuotas !== null
            ? deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition(output.RequestedQuotas, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RequestedQuotas: output.RequestedQuotas !== undefined && output.RequestedQuotas !== null
            ? deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition(output.RequestedQuotas, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ServiceQuotaIncreaseRequestInTemplateList: output.ServiceQuotaIncreaseRequestInTemplateList !== undefined &&
            output.ServiceQuotaIncreaseRequestInTemplateList !== null
            ? deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList(output.ServiceQuotaIncreaseRequestInTemplateList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListServiceQuotasResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Quotas: output.Quotas !== undefined && output.Quotas !== null
            ? deserializeAws_json1_1ServiceQuotaListDefinition(output.Quotas, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListServicesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Services: output.Services !== undefined && output.Services !== null
            ? deserializeAws_json1_1ServiceInfoListDefinition(output.Services, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1OutputTags(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetricDimensionsMapDefinition = (output, context) => {
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
const deserializeAws_json1_1MetricInfo = (output, context) => {
    return {
        MetricDimensions: output.MetricDimensions !== undefined && output.MetricDimensions !== null
            ? deserializeAws_json1_1MetricDimensionsMapDefinition(output.MetricDimensions, context)
            : undefined,
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        MetricNamespace: output.MetricNamespace !== undefined && output.MetricNamespace !== null ? output.MetricNamespace : undefined,
        MetricStatisticRecommendation: output.MetricStatisticRecommendation !== undefined && output.MetricStatisticRecommendation !== null
            ? output.MetricStatisticRecommendation
            : undefined,
    };
};
const deserializeAws_json1_1NoAvailableOrganizationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1NoSuchResourceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OrganizationNotInAllFeaturesModeException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OutputTags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse = (output, context) => {
    return {
        ServiceQuotaIncreaseRequestInTemplate: output.ServiceQuotaIncreaseRequestInTemplate !== undefined &&
            output.ServiceQuotaIncreaseRequestInTemplate !== null
            ? deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(output.ServiceQuotaIncreaseRequestInTemplate, context)
            : undefined,
    };
};
const deserializeAws_json1_1QuotaExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1QuotaPeriod = (output, context) => {
    return {
        PeriodUnit: output.PeriodUnit !== undefined && output.PeriodUnit !== null ? output.PeriodUnit : undefined,
        PeriodValue: output.PeriodValue !== undefined && output.PeriodValue !== null ? output.PeriodValue : undefined,
    };
};
const deserializeAws_json1_1RequestedServiceQuotaChange = (output, context) => {
    return {
        CaseId: output.CaseId !== undefined && output.CaseId !== null ? output.CaseId : undefined,
        Created: output.Created !== undefined && output.Created !== null ? new Date(Math.round(output.Created * 1000)) : undefined,
        DesiredValue: output.DesiredValue !== undefined && output.DesiredValue !== null ? output.DesiredValue : undefined,
        GlobalQuota: output.GlobalQuota !== undefined && output.GlobalQuota !== null ? output.GlobalQuota : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null
            ? new Date(Math.round(output.LastUpdated * 1000))
            : undefined,
        QuotaArn: output.QuotaArn !== undefined && output.QuotaArn !== null ? output.QuotaArn : undefined,
        QuotaCode: output.QuotaCode !== undefined && output.QuotaCode !== null ? output.QuotaCode : undefined,
        QuotaName: output.QuotaName !== undefined && output.QuotaName !== null ? output.QuotaName : undefined,
        Requester: output.Requester !== undefined && output.Requester !== null ? output.Requester : undefined,
        ServiceCode: output.ServiceCode !== undefined && output.ServiceCode !== null ? output.ServiceCode : undefined,
        ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
const deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RequestedServiceQuotaChange(entry, context);
    });
};
const deserializeAws_json1_1RequestServiceQuotaIncreaseResponse = (output, context) => {
    return {
        RequestedQuota: output.RequestedQuota !== undefined && output.RequestedQuota !== null
            ? deserializeAws_json1_1RequestedServiceQuotaChange(output.RequestedQuota, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ServiceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ServiceInfo = (output, context) => {
    return {
        ServiceCode: output.ServiceCode !== undefined && output.ServiceCode !== null ? output.ServiceCode : undefined,
        ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
    };
};
const deserializeAws_json1_1ServiceInfoListDefinition = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceInfo(entry, context);
    });
};
const deserializeAws_json1_1ServiceQuota = (output, context) => {
    return {
        Adjustable: output.Adjustable !== undefined && output.Adjustable !== null ? output.Adjustable : undefined,
        ErrorReason: output.ErrorReason !== undefined && output.ErrorReason !== null
            ? deserializeAws_json1_1ErrorReason(output.ErrorReason, context)
            : undefined,
        GlobalQuota: output.GlobalQuota !== undefined && output.GlobalQuota !== null ? output.GlobalQuota : undefined,
        Period: output.Period !== undefined && output.Period !== null
            ? deserializeAws_json1_1QuotaPeriod(output.Period, context)
            : undefined,
        QuotaArn: output.QuotaArn !== undefined && output.QuotaArn !== null ? output.QuotaArn : undefined,
        QuotaCode: output.QuotaCode !== undefined && output.QuotaCode !== null ? output.QuotaCode : undefined,
        QuotaName: output.QuotaName !== undefined && output.QuotaName !== null ? output.QuotaName : undefined,
        ServiceCode: output.ServiceCode !== undefined && output.ServiceCode !== null ? output.ServiceCode : undefined,
        ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
        UsageMetric: output.UsageMetric !== undefined && output.UsageMetric !== null
            ? deserializeAws_json1_1MetricInfo(output.UsageMetric, context)
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate = (output, context) => {
    return {
        AwsRegion: output.AwsRegion !== undefined && output.AwsRegion !== null ? output.AwsRegion : undefined,
        DesiredValue: output.DesiredValue !== undefined && output.DesiredValue !== null ? output.DesiredValue : undefined,
        GlobalQuota: output.GlobalQuota !== undefined && output.GlobalQuota !== null ? output.GlobalQuota : undefined,
        QuotaCode: output.QuotaCode !== undefined && output.QuotaCode !== null ? output.QuotaCode : undefined,
        QuotaName: output.QuotaName !== undefined && output.QuotaName !== null ? output.QuotaName : undefined,
        ServiceCode: output.ServiceCode !== undefined && output.ServiceCode !== null ? output.ServiceCode : undefined,
        ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
const deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(entry, context);
    });
};
const deserializeAws_json1_1ServiceQuotaListDefinition = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceQuota(entry, context);
    });
};
const deserializeAws_json1_1ServiceQuotaTemplateNotInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagPolicyViolationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TemplatesNotAvailableInRegionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
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