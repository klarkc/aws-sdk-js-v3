"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateServiceCommand = exports.deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1RegisterInstanceCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListServicesCommand = exports.deserializeAws_json1_1ListOperationsCommand = exports.deserializeAws_json1_1ListNamespacesCommand = exports.deserializeAws_json1_1ListInstancesCommand = exports.deserializeAws_json1_1GetServiceCommand = exports.deserializeAws_json1_1GetOperationCommand = exports.deserializeAws_json1_1GetNamespaceCommand = exports.deserializeAws_json1_1GetInstancesHealthStatusCommand = exports.deserializeAws_json1_1GetInstanceCommand = exports.deserializeAws_json1_1DiscoverInstancesCommand = exports.deserializeAws_json1_1DeregisterInstanceCommand = exports.deserializeAws_json1_1DeleteServiceCommand = exports.deserializeAws_json1_1DeleteNamespaceCommand = exports.deserializeAws_json1_1CreateServiceCommand = exports.deserializeAws_json1_1CreatePublicDnsNamespaceCommand = exports.deserializeAws_json1_1CreatePrivateDnsNamespaceCommand = exports.deserializeAws_json1_1CreateHttpNamespaceCommand = exports.serializeAws_json1_1UpdateServiceCommand = exports.serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1RegisterInstanceCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListServicesCommand = exports.serializeAws_json1_1ListOperationsCommand = exports.serializeAws_json1_1ListNamespacesCommand = exports.serializeAws_json1_1ListInstancesCommand = exports.serializeAws_json1_1GetServiceCommand = exports.serializeAws_json1_1GetOperationCommand = exports.serializeAws_json1_1GetNamespaceCommand = exports.serializeAws_json1_1GetInstancesHealthStatusCommand = exports.serializeAws_json1_1GetInstanceCommand = exports.serializeAws_json1_1DiscoverInstancesCommand = exports.serializeAws_json1_1DeregisterInstanceCommand = exports.serializeAws_json1_1DeleteServiceCommand = exports.serializeAws_json1_1DeleteNamespaceCommand = exports.serializeAws_json1_1CreateServiceCommand = exports.serializeAws_json1_1CreatePublicDnsNamespaceCommand = exports.serializeAws_json1_1CreatePrivateDnsNamespaceCommand = exports.serializeAws_json1_1CreateHttpNamespaceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1CreateHttpNamespaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.CreateHttpNamespace",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHttpNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateHttpNamespaceCommand = serializeAws_json1_1CreateHttpNamespaceCommand;
const serializeAws_json1_1CreatePrivateDnsNamespaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePrivateDnsNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePrivateDnsNamespaceCommand = serializeAws_json1_1CreatePrivateDnsNamespaceCommand;
const serializeAws_json1_1CreatePublicDnsNamespaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.CreatePublicDnsNamespace",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePublicDnsNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePublicDnsNamespaceCommand = serializeAws_json1_1CreatePublicDnsNamespaceCommand;
const serializeAws_json1_1CreateServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.CreateService",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateServiceCommand = serializeAws_json1_1CreateServiceCommand;
const serializeAws_json1_1DeleteNamespaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.DeleteNamespace",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteNamespaceCommand = serializeAws_json1_1DeleteNamespaceCommand;
const serializeAws_json1_1DeleteServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.DeleteService",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteServiceCommand = serializeAws_json1_1DeleteServiceCommand;
const serializeAws_json1_1DeregisterInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.DeregisterInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterInstanceCommand = serializeAws_json1_1DeregisterInstanceCommand;
const serializeAws_json1_1DiscoverInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.DiscoverInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DiscoverInstancesRequest(input, context));
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "data-" + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};
exports.serializeAws_json1_1DiscoverInstancesCommand = serializeAws_json1_1DiscoverInstancesCommand;
const serializeAws_json1_1GetInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.GetInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstanceCommand = serializeAws_json1_1GetInstanceCommand;
const serializeAws_json1_1GetInstancesHealthStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.GetInstancesHealthStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstancesHealthStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstancesHealthStatusCommand = serializeAws_json1_1GetInstancesHealthStatusCommand;
const serializeAws_json1_1GetNamespaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.GetNamespace",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetNamespaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetNamespaceCommand = serializeAws_json1_1GetNamespaceCommand;
const serializeAws_json1_1GetOperationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.GetOperation",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOperationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOperationCommand = serializeAws_json1_1GetOperationCommand;
const serializeAws_json1_1GetServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.GetService",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetServiceCommand = serializeAws_json1_1GetServiceCommand;
const serializeAws_json1_1ListInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.ListInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListInstancesCommand = serializeAws_json1_1ListInstancesCommand;
const serializeAws_json1_1ListNamespacesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.ListNamespaces",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListNamespacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListNamespacesCommand = serializeAws_json1_1ListNamespacesCommand;
const serializeAws_json1_1ListOperationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.ListOperations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOperationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOperationsCommand = serializeAws_json1_1ListOperationsCommand;
const serializeAws_json1_1ListServicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.ListServices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListServicesCommand = serializeAws_json1_1ListServicesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1RegisterInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.RegisterInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterInstanceCommand = serializeAws_json1_1RegisterInstanceCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateInstanceCustomHealthStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand = serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand;
const serializeAws_json1_1UpdateServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53AutoNaming_v20170314.UpdateService",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateServiceCommand = serializeAws_json1_1UpdateServiceCommand;
const deserializeAws_json1_1CreateHttpNamespaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateHttpNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHttpNamespaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateHttpNamespaceCommand = deserializeAws_json1_1CreateHttpNamespaceCommand;
const deserializeAws_json1_1CreateHttpNamespaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.servicediscovery#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NamespaceAlreadyExists":
        case "com.amazonaws.servicediscovery#NamespaceAlreadyExists":
            response = {
                ...(await deserializeAws_json1_1NamespaceAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.servicediscovery#TooManyTagsException":
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
const deserializeAws_json1_1CreatePrivateDnsNamespaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePrivateDnsNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePrivateDnsNamespaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePrivateDnsNamespaceCommand = deserializeAws_json1_1CreatePrivateDnsNamespaceCommand;
const deserializeAws_json1_1CreatePrivateDnsNamespaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.servicediscovery#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NamespaceAlreadyExists":
        case "com.amazonaws.servicediscovery#NamespaceAlreadyExists":
            response = {
                ...(await deserializeAws_json1_1NamespaceAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.servicediscovery#TooManyTagsException":
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
const deserializeAws_json1_1CreatePublicDnsNamespaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePublicDnsNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePublicDnsNamespaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePublicDnsNamespaceCommand = deserializeAws_json1_1CreatePublicDnsNamespaceCommand;
const deserializeAws_json1_1CreatePublicDnsNamespaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.servicediscovery#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NamespaceAlreadyExists":
        case "com.amazonaws.servicediscovery#NamespaceAlreadyExists":
            response = {
                ...(await deserializeAws_json1_1NamespaceAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.servicediscovery#TooManyTagsException":
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
const deserializeAws_json1_1CreateServiceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateServiceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateServiceCommand = deserializeAws_json1_1CreateServiceCommand;
const deserializeAws_json1_1CreateServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NamespaceNotFound":
        case "com.amazonaws.servicediscovery#NamespaceNotFound":
            response = {
                ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceAlreadyExists":
        case "com.amazonaws.servicediscovery#ServiceAlreadyExists":
            response = {
                ...(await deserializeAws_json1_1ServiceAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.servicediscovery#TooManyTagsException":
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
const deserializeAws_json1_1DeleteNamespaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteNamespaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteNamespaceCommand = deserializeAws_json1_1DeleteNamespaceCommand;
const deserializeAws_json1_1DeleteNamespaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.servicediscovery#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NamespaceNotFound":
        case "com.amazonaws.servicediscovery#NamespaceNotFound":
            response = {
                ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUse":
        case "com.amazonaws.servicediscovery#ResourceInUse":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteServiceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServiceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteServiceCommand = deserializeAws_json1_1DeleteServiceCommand;
const deserializeAws_json1_1DeleteServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUse":
        case "com.amazonaws.servicediscovery#ResourceInUse":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFound":
        case "com.amazonaws.servicediscovery#ServiceNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterInstanceCommand = deserializeAws_json1_1DeregisterInstanceCommand;
const deserializeAws_json1_1DeregisterInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.servicediscovery#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceNotFound":
        case "com.amazonaws.servicediscovery#InstanceNotFound":
            response = {
                ...(await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUse":
        case "com.amazonaws.servicediscovery#ResourceInUse":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFound":
        case "com.amazonaws.servicediscovery#ServiceNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DiscoverInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DiscoverInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DiscoverInstancesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DiscoverInstancesCommand = deserializeAws_json1_1DiscoverInstancesCommand;
const deserializeAws_json1_1DiscoverInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NamespaceNotFound":
        case "com.amazonaws.servicediscovery#NamespaceNotFound":
            response = {
                ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestLimitExceeded":
        case "com.amazonaws.servicediscovery#RequestLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1RequestLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFound":
        case "com.amazonaws.servicediscovery#ServiceNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstanceCommand = deserializeAws_json1_1GetInstanceCommand;
const deserializeAws_json1_1GetInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InstanceNotFound":
        case "com.amazonaws.servicediscovery#InstanceNotFound":
            response = {
                ...(await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFound":
        case "com.amazonaws.servicediscovery#ServiceNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstancesHealthStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstancesHealthStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstancesHealthStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstancesHealthStatusCommand = deserializeAws_json1_1GetInstancesHealthStatusCommand;
const deserializeAws_json1_1GetInstancesHealthStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InstanceNotFound":
        case "com.amazonaws.servicediscovery#InstanceNotFound":
            response = {
                ...(await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFound":
        case "com.amazonaws.servicediscovery#ServiceNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetNamespaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetNamespaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetNamespaceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetNamespaceCommand = deserializeAws_json1_1GetNamespaceCommand;
const deserializeAws_json1_1GetNamespaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NamespaceNotFound":
        case "com.amazonaws.servicediscovery#NamespaceNotFound":
            response = {
                ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetOperationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOperationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOperationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOperationCommand = deserializeAws_json1_1GetOperationCommand;
const deserializeAws_json1_1GetOperationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotFound":
        case "com.amazonaws.servicediscovery#OperationNotFound":
            response = {
                ...(await deserializeAws_json1_1OperationNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetServiceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetServiceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetServiceCommand = deserializeAws_json1_1GetServiceCommand;
const deserializeAws_json1_1GetServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFound":
        case "com.amazonaws.servicediscovery#ServiceNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInstancesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListInstancesCommand = deserializeAws_json1_1ListInstancesCommand;
const deserializeAws_json1_1ListInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFound":
        case "com.amazonaws.servicediscovery#ServiceNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListNamespacesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListNamespacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListNamespacesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListNamespacesCommand = deserializeAws_json1_1ListNamespacesCommand;
const deserializeAws_json1_1ListNamespacesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListOperationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOperationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOperationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOperationsCommand = deserializeAws_json1_1ListOperationsCommand;
const deserializeAws_json1_1ListOperationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
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
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
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
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicediscovery#ResourceNotFoundException":
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
const deserializeAws_json1_1RegisterInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterInstanceCommand = deserializeAws_json1_1RegisterInstanceCommand;
const deserializeAws_json1_1RegisterInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.servicediscovery#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUse":
        case "com.amazonaws.servicediscovery#ResourceInUse":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceeded":
        case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFound":
        case "com.amazonaws.servicediscovery#ServiceNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicediscovery#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.servicediscovery#TooManyTagsException":
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
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.servicediscovery#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand = deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand;
const deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomHealthNotFound":
        case "com.amazonaws.servicediscovery#CustomHealthNotFound":
            response = {
                ...(await deserializeAws_json1_1CustomHealthNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceNotFound":
        case "com.amazonaws.servicediscovery#InstanceNotFound":
            response = {
                ...(await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFound":
        case "com.amazonaws.servicediscovery#ServiceNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateServiceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServiceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateServiceCommand = deserializeAws_json1_1UpdateServiceCommand;
const deserializeAws_json1_1UpdateServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.servicediscovery#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.servicediscovery#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFound":
        case "com.amazonaws.servicediscovery#ServiceNotFound":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CustomHealthNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomHealthNotFound(body, context);
    const contents = {
        name: "CustomHealthNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateRequestResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateRequest(body, context);
    const contents = {
        name: "DuplicateRequest",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InstanceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceNotFound(body, context);
    const contents = {
        name: "InstanceNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInput(body, context);
    const contents = {
        name: "InvalidInput",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NamespaceAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NamespaceAlreadyExists(body, context);
    const contents = {
        name: "NamespaceAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NamespaceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NamespaceNotFound(body, context);
    const contents = {
        name: "NamespaceNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotFound(body, context);
    const contents = {
        name: "OperationNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RequestLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RequestLimitExceeded(body, context);
    const contents = {
        name: "RequestLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUse(body, context);
    const contents = {
        name: "ResourceInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceLimitExceeded(body, context);
    const contents = {
        name: "ResourceLimitExceeded",
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
const deserializeAws_json1_1ServiceAlreadyExistsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceAlreadyExists(body, context);
    const contents = {
        name: "ServiceAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceNotFoundResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceNotFound(body, context);
    const contents = {
        name: "ServiceNotFound",
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
const serializeAws_json1_1Attributes = (input, context) => {
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
const serializeAws_json1_1CreateHttpNamespaceRequest = (input, context) => {
    var _a;
    return {
        CreatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreatePrivateDnsNamespaceRequest = (input, context) => {
    var _a;
    return {
        CreatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.Vpc !== undefined && input.Vpc !== null && { Vpc: input.Vpc }),
    };
};
const serializeAws_json1_1CreatePublicDnsNamespaceRequest = (input, context) => {
    var _a;
    return {
        CreatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateServiceRequest = (input, context) => {
    var _a;
    return {
        CreatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DnsConfig !== undefined &&
            input.DnsConfig !== null && { DnsConfig: serializeAws_json1_1DnsConfig(input.DnsConfig, context) }),
        ...(input.HealthCheckConfig !== undefined &&
            input.HealthCheckConfig !== null && {
            HealthCheckConfig: serializeAws_json1_1HealthCheckConfig(input.HealthCheckConfig, context),
        }),
        ...(input.HealthCheckCustomConfig !== undefined &&
            input.HealthCheckCustomConfig !== null && {
            HealthCheckCustomConfig: serializeAws_json1_1HealthCheckCustomConfig(input.HealthCheckCustomConfig, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NamespaceId !== undefined && input.NamespaceId !== null && { NamespaceId: input.NamespaceId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DeleteNamespaceRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DeleteServiceRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1DeregisterInstanceRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
    };
};
const serializeAws_json1_1DiscoverInstancesRequest = (input, context) => {
    return {
        ...(input.HealthStatus !== undefined && input.HealthStatus !== null && { HealthStatus: input.HealthStatus }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NamespaceName !== undefined && input.NamespaceName !== null && { NamespaceName: input.NamespaceName }),
        ...(input.OptionalParameters !== undefined &&
            input.OptionalParameters !== null && {
            OptionalParameters: serializeAws_json1_1Attributes(input.OptionalParameters, context),
        }),
        ...(input.QueryParameters !== undefined &&
            input.QueryParameters !== null && {
            QueryParameters: serializeAws_json1_1Attributes(input.QueryParameters, context),
        }),
        ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
    };
};
const serializeAws_json1_1DnsConfig = (input, context) => {
    return {
        ...(input.DnsRecords !== undefined &&
            input.DnsRecords !== null && { DnsRecords: serializeAws_json1_1DnsRecordList(input.DnsRecords, context) }),
        ...(input.NamespaceId !== undefined && input.NamespaceId !== null && { NamespaceId: input.NamespaceId }),
        ...(input.RoutingPolicy !== undefined && input.RoutingPolicy !== null && { RoutingPolicy: input.RoutingPolicy }),
    };
};
const serializeAws_json1_1DnsConfigChange = (input, context) => {
    return {
        ...(input.DnsRecords !== undefined &&
            input.DnsRecords !== null && { DnsRecords: serializeAws_json1_1DnsRecordList(input.DnsRecords, context) }),
    };
};
const serializeAws_json1_1DnsRecord = (input, context) => {
    return {
        ...(input.TTL !== undefined && input.TTL !== null && { TTL: input.TTL }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DnsRecordList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DnsRecord(entry, context);
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
const serializeAws_json1_1GetInstanceRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
    };
};
const serializeAws_json1_1GetInstancesHealthStatusRequest = (input, context) => {
    return {
        ...(input.Instances !== undefined &&
            input.Instances !== null && { Instances: serializeAws_json1_1InstanceIdList(input.Instances, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
    };
};
const serializeAws_json1_1GetNamespaceRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1GetOperationRequest = (input, context) => {
    return {
        ...(input.OperationId !== undefined && input.OperationId !== null && { OperationId: input.OperationId }),
    };
};
const serializeAws_json1_1GetServiceRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_json1_1HealthCheckConfig = (input, context) => {
    return {
        ...(input.FailureThreshold !== undefined &&
            input.FailureThreshold !== null && { FailureThreshold: input.FailureThreshold }),
        ...(input.ResourcePath !== undefined && input.ResourcePath !== null && { ResourcePath: input.ResourcePath }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1HealthCheckCustomConfig = (input, context) => {
    return {
        ...(input.FailureThreshold !== undefined &&
            input.FailureThreshold !== null && { FailureThreshold: input.FailureThreshold }),
    };
};
const serializeAws_json1_1InstanceIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListInstancesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
    };
};
const serializeAws_json1_1ListNamespacesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1NamespaceFilters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListOperationsRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1OperationFilters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListServicesRequest = (input, context) => {
    return {
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_json1_1ServiceFilters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1NamespaceFilter = (input, context) => {
    return {
        ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1NamespaceFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1NamespaceFilter(entry, context);
    });
};
const serializeAws_json1_1OperationFilter = (input, context) => {
    return {
        ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1OperationFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1OperationFilter(entry, context);
    });
};
const serializeAws_json1_1RegisterInstanceRequest = (input, context) => {
    var _a;
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_json1_1Attributes(input.Attributes, context) }),
        CreatorRequestId: (_a = input.CreatorRequestId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
    };
};
const serializeAws_json1_1ServiceChange = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DnsConfig !== undefined &&
            input.DnsConfig !== null && { DnsConfig: serializeAws_json1_1DnsConfigChange(input.DnsConfig, context) }),
        ...(input.HealthCheckConfig !== undefined &&
            input.HealthCheckConfig !== null && {
            HealthCheckConfig: serializeAws_json1_1HealthCheckConfig(input.HealthCheckConfig, context),
        }),
    };
};
const serializeAws_json1_1ServiceFilter = (input, context) => {
    return {
        ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
    };
};
const serializeAws_json1_1ServiceFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServiceFilter(entry, context);
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
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateInstanceCustomHealthStatusRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1UpdateServiceRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Service !== undefined &&
            input.Service !== null && { Service: serializeAws_json1_1ServiceChange(input.Service, context) }),
    };
};
const deserializeAws_json1_1Attributes = (output, context) => {
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
const deserializeAws_json1_1CreateHttpNamespaceResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1CreatePrivateDnsNamespaceResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1CreatePublicDnsNamespaceResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1CreateServiceResponse = (output, context) => {
    return {
        Service: output.Service !== undefined && output.Service !== null
            ? deserializeAws_json1_1Service(output.Service, context)
            : undefined,
    };
};
const deserializeAws_json1_1CustomHealthNotFound = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DeleteNamespaceResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1DeleteServiceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeregisterInstanceResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1DiscoverInstancesResponse = (output, context) => {
    return {
        Instances: output.Instances !== undefined && output.Instances !== null
            ? deserializeAws_json1_1HttpInstanceSummaryList(output.Instances, context)
            : undefined,
    };
};
const deserializeAws_json1_1DnsConfig = (output, context) => {
    return {
        DnsRecords: output.DnsRecords !== undefined && output.DnsRecords !== null
            ? deserializeAws_json1_1DnsRecordList(output.DnsRecords, context)
            : undefined,
        NamespaceId: output.NamespaceId !== undefined && output.NamespaceId !== null ? output.NamespaceId : undefined,
        RoutingPolicy: output.RoutingPolicy !== undefined && output.RoutingPolicy !== null ? output.RoutingPolicy : undefined,
    };
};
const deserializeAws_json1_1DnsProperties = (output, context) => {
    return {
        HostedZoneId: output.HostedZoneId !== undefined && output.HostedZoneId !== null ? output.HostedZoneId : undefined,
    };
};
const deserializeAws_json1_1DnsRecord = (output, context) => {
    return {
        TTL: output.TTL !== undefined && output.TTL !== null ? output.TTL : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1DnsRecordList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DnsRecord(entry, context);
    });
};
const deserializeAws_json1_1DuplicateRequest = (output, context) => {
    return {
        DuplicateOperationId: output.DuplicateOperationId !== undefined && output.DuplicateOperationId !== null
            ? output.DuplicateOperationId
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1GetInstanceResponse = (output, context) => {
    return {
        Instance: output.Instance !== undefined && output.Instance !== null
            ? deserializeAws_json1_1Instance(output.Instance, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetInstancesHealthStatusResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1InstanceHealthStatusMap(output.Status, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetNamespaceResponse = (output, context) => {
    return {
        Namespace: output.Namespace !== undefined && output.Namespace !== null
            ? deserializeAws_json1_1Namespace(output.Namespace, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetOperationResponse = (output, context) => {
    return {
        Operation: output.Operation !== undefined && output.Operation !== null
            ? deserializeAws_json1_1Operation(output.Operation, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetServiceResponse = (output, context) => {
    return {
        Service: output.Service !== undefined && output.Service !== null
            ? deserializeAws_json1_1Service(output.Service, context)
            : undefined,
    };
};
const deserializeAws_json1_1HealthCheckConfig = (output, context) => {
    return {
        FailureThreshold: output.FailureThreshold !== undefined && output.FailureThreshold !== null ? output.FailureThreshold : undefined,
        ResourcePath: output.ResourcePath !== undefined && output.ResourcePath !== null ? output.ResourcePath : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1HealthCheckCustomConfig = (output, context) => {
    return {
        FailureThreshold: output.FailureThreshold !== undefined && output.FailureThreshold !== null ? output.FailureThreshold : undefined,
    };
};
const deserializeAws_json1_1HttpInstanceSummary = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        HealthStatus: output.HealthStatus !== undefined && output.HealthStatus !== null ? output.HealthStatus : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        NamespaceName: output.NamespaceName !== undefined && output.NamespaceName !== null ? output.NamespaceName : undefined,
        ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
    };
};
const deserializeAws_json1_1HttpInstanceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HttpInstanceSummary(entry, context);
    });
};
const deserializeAws_json1_1HttpProperties = (output, context) => {
    return {
        HttpName: output.HttpName !== undefined && output.HttpName !== null ? output.HttpName : undefined,
    };
};
const deserializeAws_json1_1Instance = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_json1_1InstanceHealthStatusMap = (output, context) => {
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
const deserializeAws_json1_1InstanceNotFound = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InstanceSummary = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1Attributes(output.Attributes, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_json1_1InstanceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceSummary(entry, context);
    });
};
const deserializeAws_json1_1InvalidInput = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListInstancesResponse = (output, context) => {
    return {
        Instances: output.Instances !== undefined && output.Instances !== null
            ? deserializeAws_json1_1InstanceSummaryList(output.Instances, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListNamespacesResponse = (output, context) => {
    return {
        Namespaces: output.Namespaces !== undefined && output.Namespaces !== null
            ? deserializeAws_json1_1NamespaceSummariesList(output.Namespaces, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListOperationsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Operations: output.Operations !== undefined && output.Operations !== null
            ? deserializeAws_json1_1OperationSummaryList(output.Operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListServicesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Services: output.Services !== undefined && output.Services !== null
            ? deserializeAws_json1_1ServiceSummariesList(output.Services, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1Namespace = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Properties: output.Properties !== undefined && output.Properties !== null
            ? deserializeAws_json1_1NamespaceProperties(output.Properties, context)
            : undefined,
        ServiceCount: output.ServiceCount !== undefined && output.ServiceCount !== null ? output.ServiceCount : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1NamespaceAlreadyExists = (output, context) => {
    return {
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        NamespaceId: output.NamespaceId !== undefined && output.NamespaceId !== null ? output.NamespaceId : undefined,
    };
};
const deserializeAws_json1_1NamespaceNotFound = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1NamespaceProperties = (output, context) => {
    return {
        DnsProperties: output.DnsProperties !== undefined && output.DnsProperties !== null
            ? deserializeAws_json1_1DnsProperties(output.DnsProperties, context)
            : undefined,
        HttpProperties: output.HttpProperties !== undefined && output.HttpProperties !== null
            ? deserializeAws_json1_1HttpProperties(output.HttpProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_1NamespaceSummariesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NamespaceSummary(entry, context);
    });
};
const deserializeAws_json1_1NamespaceSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Properties: output.Properties !== undefined && output.Properties !== null
            ? deserializeAws_json1_1NamespaceProperties(output.Properties, context)
            : undefined,
        ServiceCount: output.ServiceCount !== undefined && output.ServiceCount !== null ? output.ServiceCount : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1Operation = (output, context) => {
    return {
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1OperationTargetsMap(output.Targets, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        UpdateDate: output.UpdateDate !== undefined && output.UpdateDate !== null
            ? new Date(Math.round(output.UpdateDate * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1OperationNotFound = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OperationSummary = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1OperationSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OperationSummary(entry, context);
    });
};
const deserializeAws_json1_1OperationTargetsMap = (output, context) => {
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
const deserializeAws_json1_1RegisterInstanceResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1RequestLimitExceeded = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceInUse = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceLimitExceeded = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Service = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DnsConfig: output.DnsConfig !== undefined && output.DnsConfig !== null
            ? deserializeAws_json1_1DnsConfig(output.DnsConfig, context)
            : undefined,
        HealthCheckConfig: output.HealthCheckConfig !== undefined && output.HealthCheckConfig !== null
            ? deserializeAws_json1_1HealthCheckConfig(output.HealthCheckConfig, context)
            : undefined,
        HealthCheckCustomConfig: output.HealthCheckCustomConfig !== undefined && output.HealthCheckCustomConfig !== null
            ? deserializeAws_json1_1HealthCheckCustomConfig(output.HealthCheckCustomConfig, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InstanceCount: output.InstanceCount !== undefined && output.InstanceCount !== null ? output.InstanceCount : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NamespaceId: output.NamespaceId !== undefined && output.NamespaceId !== null ? output.NamespaceId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ServiceAlreadyExists = (output, context) => {
    return {
        CreatorRequestId: output.CreatorRequestId !== undefined && output.CreatorRequestId !== null ? output.CreatorRequestId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ServiceId: output.ServiceId !== undefined && output.ServiceId !== null ? output.ServiceId : undefined,
    };
};
const deserializeAws_json1_1ServiceNotFound = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ServiceSummariesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceSummary(entry, context);
    });
};
const deserializeAws_json1_1ServiceSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null
            ? new Date(Math.round(output.CreateDate * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DnsConfig: output.DnsConfig !== undefined && output.DnsConfig !== null
            ? deserializeAws_json1_1DnsConfig(output.DnsConfig, context)
            : undefined,
        HealthCheckConfig: output.HealthCheckConfig !== undefined && output.HealthCheckConfig !== null
            ? deserializeAws_json1_1HealthCheckConfig(output.HealthCheckConfig, context)
            : undefined,
        HealthCheckCustomConfig: output.HealthCheckCustomConfig !== undefined && output.HealthCheckCustomConfig !== null
            ? deserializeAws_json1_1HealthCheckCustomConfig(output.HealthCheckCustomConfig, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InstanceCount: output.InstanceCount !== undefined && output.InstanceCount !== null ? output.InstanceCount : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
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
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceName: output.ResourceName !== undefined && output.ResourceName !== null ? output.ResourceName : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateServiceResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
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