"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UploadLayerPartCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1SetRepositoryPolicyCommand = exports.deserializeAws_json1_1PutRepositoryCatalogDataCommand = exports.deserializeAws_json1_1PutRegistryCatalogDataCommand = exports.deserializeAws_json1_1PutImageCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1InitiateLayerUploadCommand = exports.deserializeAws_json1_1GetRepositoryPolicyCommand = exports.deserializeAws_json1_1GetRepositoryCatalogDataCommand = exports.deserializeAws_json1_1GetRegistryCatalogDataCommand = exports.deserializeAws_json1_1GetAuthorizationTokenCommand = exports.deserializeAws_json1_1DescribeRepositoriesCommand = exports.deserializeAws_json1_1DescribeRegistriesCommand = exports.deserializeAws_json1_1DescribeImageTagsCommand = exports.deserializeAws_json1_1DescribeImagesCommand = exports.deserializeAws_json1_1DeleteRepositoryPolicyCommand = exports.deserializeAws_json1_1DeleteRepositoryCommand = exports.deserializeAws_json1_1CreateRepositoryCommand = exports.deserializeAws_json1_1CompleteLayerUploadCommand = exports.deserializeAws_json1_1BatchDeleteImageCommand = exports.deserializeAws_json1_1BatchCheckLayerAvailabilityCommand = exports.serializeAws_json1_1UploadLayerPartCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1SetRepositoryPolicyCommand = exports.serializeAws_json1_1PutRepositoryCatalogDataCommand = exports.serializeAws_json1_1PutRegistryCatalogDataCommand = exports.serializeAws_json1_1PutImageCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1InitiateLayerUploadCommand = exports.serializeAws_json1_1GetRepositoryPolicyCommand = exports.serializeAws_json1_1GetRepositoryCatalogDataCommand = exports.serializeAws_json1_1GetRegistryCatalogDataCommand = exports.serializeAws_json1_1GetAuthorizationTokenCommand = exports.serializeAws_json1_1DescribeRepositoriesCommand = exports.serializeAws_json1_1DescribeRegistriesCommand = exports.serializeAws_json1_1DescribeImageTagsCommand = exports.serializeAws_json1_1DescribeImagesCommand = exports.serializeAws_json1_1DeleteRepositoryPolicyCommand = exports.serializeAws_json1_1DeleteRepositoryCommand = exports.serializeAws_json1_1CreateRepositoryCommand = exports.serializeAws_json1_1CompleteLayerUploadCommand = exports.serializeAws_json1_1BatchDeleteImageCommand = exports.serializeAws_json1_1BatchCheckLayerAvailabilityCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1BatchCheckLayerAvailabilityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.BatchCheckLayerAvailability",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchCheckLayerAvailabilityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchCheckLayerAvailabilityCommand = serializeAws_json1_1BatchCheckLayerAvailabilityCommand;
const serializeAws_json1_1BatchDeleteImageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.BatchDeleteImage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDeleteImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchDeleteImageCommand = serializeAws_json1_1BatchDeleteImageCommand;
const serializeAws_json1_1CompleteLayerUploadCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.CompleteLayerUpload",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CompleteLayerUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CompleteLayerUploadCommand = serializeAws_json1_1CompleteLayerUploadCommand;
const serializeAws_json1_1CreateRepositoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.CreateRepository",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateRepositoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateRepositoryCommand = serializeAws_json1_1CreateRepositoryCommand;
const serializeAws_json1_1DeleteRepositoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.DeleteRepository",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRepositoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRepositoryCommand = serializeAws_json1_1DeleteRepositoryCommand;
const serializeAws_json1_1DeleteRepositoryPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.DeleteRepositoryPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRepositoryPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRepositoryPolicyCommand = serializeAws_json1_1DeleteRepositoryPolicyCommand;
const serializeAws_json1_1DescribeImagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.DescribeImages",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeImagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeImagesCommand = serializeAws_json1_1DescribeImagesCommand;
const serializeAws_json1_1DescribeImageTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.DescribeImageTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeImageTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeImageTagsCommand = serializeAws_json1_1DescribeImageTagsCommand;
const serializeAws_json1_1DescribeRegistriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.DescribeRegistries",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRegistriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRegistriesCommand = serializeAws_json1_1DescribeRegistriesCommand;
const serializeAws_json1_1DescribeRepositoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.DescribeRepositories",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRepositoriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRepositoriesCommand = serializeAws_json1_1DescribeRepositoriesCommand;
const serializeAws_json1_1GetAuthorizationTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.GetAuthorizationToken",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAuthorizationTokenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAuthorizationTokenCommand = serializeAws_json1_1GetAuthorizationTokenCommand;
const serializeAws_json1_1GetRegistryCatalogDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.GetRegistryCatalogData",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRegistryCatalogDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRegistryCatalogDataCommand = serializeAws_json1_1GetRegistryCatalogDataCommand;
const serializeAws_json1_1GetRepositoryCatalogDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.GetRepositoryCatalogData",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRepositoryCatalogDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRepositoryCatalogDataCommand = serializeAws_json1_1GetRepositoryCatalogDataCommand;
const serializeAws_json1_1GetRepositoryPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.GetRepositoryPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetRepositoryPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetRepositoryPolicyCommand = serializeAws_json1_1GetRepositoryPolicyCommand;
const serializeAws_json1_1InitiateLayerUploadCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.InitiateLayerUpload",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1InitiateLayerUploadRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1InitiateLayerUploadCommand = serializeAws_json1_1InitiateLayerUploadCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PutImageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.PutImage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutImageCommand = serializeAws_json1_1PutImageCommand;
const serializeAws_json1_1PutRegistryCatalogDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.PutRegistryCatalogData",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRegistryCatalogDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRegistryCatalogDataCommand = serializeAws_json1_1PutRegistryCatalogDataCommand;
const serializeAws_json1_1PutRepositoryCatalogDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.PutRepositoryCatalogData",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRepositoryCatalogDataRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRepositoryCatalogDataCommand = serializeAws_json1_1PutRepositoryCatalogDataCommand;
const serializeAws_json1_1SetRepositoryPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.SetRepositoryPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetRepositoryPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetRepositoryPolicyCommand = serializeAws_json1_1SetRepositoryPolicyCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UploadLayerPartCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "SpencerFrontendService.UploadLayerPart",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UploadLayerPartRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UploadLayerPartCommand = serializeAws_json1_1UploadLayerPartCommand;
const deserializeAws_json1_1BatchCheckLayerAvailabilityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchCheckLayerAvailabilityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchCheckLayerAvailabilityCommand = deserializeAws_json1_1BatchCheckLayerAvailabilityCommand;
const deserializeAws_json1_1BatchCheckLayerAvailabilityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RegistryNotFoundException":
        case "com.amazonaws.ecrpublic#RegistryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RegistryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1BatchDeleteImageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchDeleteImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDeleteImageResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchDeleteImageCommand = deserializeAws_json1_1BatchDeleteImageCommand;
const deserializeAws_json1_1BatchDeleteImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CompleteLayerUploadCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CompleteLayerUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CompleteLayerUploadResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CompleteLayerUploadCommand = deserializeAws_json1_1CompleteLayerUploadCommand;
const deserializeAws_json1_1CompleteLayerUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EmptyUploadException":
        case "com.amazonaws.ecrpublic#EmptyUploadException":
            response = {
                ...(await deserializeAws_json1_1EmptyUploadExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLayerException":
        case "com.amazonaws.ecrpublic#InvalidLayerException":
            response = {
                ...(await deserializeAws_json1_1InvalidLayerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LayerAlreadyExistsException":
        case "com.amazonaws.ecrpublic#LayerAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1LayerAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LayerPartTooSmallException":
        case "com.amazonaws.ecrpublic#LayerPartTooSmallException":
            response = {
                ...(await deserializeAws_json1_1LayerPartTooSmallExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RegistryNotFoundException":
        case "com.amazonaws.ecrpublic#RegistryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RegistryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedCommandException":
        case "com.amazonaws.ecrpublic#UnsupportedCommandException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UploadNotFoundException":
        case "com.amazonaws.ecrpublic#UploadNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UploadNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateRepositoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateRepositoryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateRepositoryCommand = deserializeAws_json1_1CreateRepositoryCommand;
const deserializeAws_json1_1CreateRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.ecrpublic#InvalidTagParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ecrpublic#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryAlreadyExistsException":
        case "com.amazonaws.ecrpublic#RepositoryAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.ecrpublic#TooManyTagsException":
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
const deserializeAws_json1_1DeleteRepositoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRepositoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRepositoryResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRepositoryCommand = deserializeAws_json1_1DeleteRepositoryCommand;
const deserializeAws_json1_1DeleteRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotEmptyException":
        case "com.amazonaws.ecrpublic#RepositoryNotEmptyException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotEmptyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRepositoryPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRepositoryPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRepositoryPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRepositoryPolicyCommand = deserializeAws_json1_1DeleteRepositoryPolicyCommand;
const deserializeAws_json1_1DeleteRepositoryPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryPolicyNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryPolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeImagesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeImagesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeImagesCommand = deserializeAws_json1_1DescribeImagesCommand;
const deserializeAws_json1_1DescribeImagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ImageNotFoundException":
        case "com.amazonaws.ecrpublic#ImageNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ImageNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeImageTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeImageTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeImageTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeImageTagsCommand = deserializeAws_json1_1DescribeImageTagsCommand;
const deserializeAws_json1_1DescribeImageTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeRegistriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRegistriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRegistriesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRegistriesCommand = deserializeAws_json1_1DescribeRegistriesCommand;
const deserializeAws_json1_1DescribeRegistriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedCommandException":
        case "com.amazonaws.ecrpublic#UnsupportedCommandException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeRepositoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRepositoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRepositoriesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRepositoriesCommand = deserializeAws_json1_1DescribeRepositoriesCommand;
const deserializeAws_json1_1DescribeRepositoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAuthorizationTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAuthorizationTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAuthorizationTokenResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAuthorizationTokenCommand = deserializeAws_json1_1GetAuthorizationTokenCommand;
const deserializeAws_json1_1GetAuthorizationTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRegistryCatalogDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRegistryCatalogDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRegistryCatalogDataResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRegistryCatalogDataCommand = deserializeAws_json1_1GetRegistryCatalogDataCommand;
const deserializeAws_json1_1GetRegistryCatalogDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedCommandException":
        case "com.amazonaws.ecrpublic#UnsupportedCommandException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRepositoryCatalogDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRepositoryCatalogDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRepositoryCatalogDataResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRepositoryCatalogDataCommand = deserializeAws_json1_1GetRepositoryCatalogDataCommand;
const deserializeAws_json1_1GetRepositoryCatalogDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetRepositoryPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetRepositoryPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetRepositoryPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetRepositoryPolicyCommand = deserializeAws_json1_1GetRepositoryPolicyCommand;
const deserializeAws_json1_1GetRepositoryPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryPolicyNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryPolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1InitiateLayerUploadCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1InitiateLayerUploadCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InitiateLayerUploadResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1InitiateLayerUploadCommand = deserializeAws_json1_1InitiateLayerUploadCommand;
const deserializeAws_json1_1InitiateLayerUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RegistryNotFoundException":
        case "com.amazonaws.ecrpublic#RegistryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RegistryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedCommandException":
        case "com.amazonaws.ecrpublic#UnsupportedCommandException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutImageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutImageResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutImageCommand = deserializeAws_json1_1PutImageCommand;
const deserializeAws_json1_1PutImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ImageAlreadyExistsException":
        case "com.amazonaws.ecrpublic#ImageAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ImageAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ImageDigestDoesNotMatchException":
        case "com.amazonaws.ecrpublic#ImageDigestDoesNotMatchException":
            response = {
                ...(await deserializeAws_json1_1ImageDigestDoesNotMatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ImageTagAlreadyExistsException":
        case "com.amazonaws.ecrpublic#ImageTagAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LayersNotFoundException":
        case "com.amazonaws.ecrpublic#LayersNotFoundException":
            response = {
                ...(await deserializeAws_json1_1LayersNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ecrpublic#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReferencedImagesNotFoundException":
        case "com.amazonaws.ecrpublic#ReferencedImagesNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ReferencedImagesNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RegistryNotFoundException":
        case "com.amazonaws.ecrpublic#RegistryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RegistryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedCommandException":
        case "com.amazonaws.ecrpublic#UnsupportedCommandException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutRegistryCatalogDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRegistryCatalogDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRegistryCatalogDataResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRegistryCatalogDataCommand = deserializeAws_json1_1PutRegistryCatalogDataCommand;
const deserializeAws_json1_1PutRegistryCatalogDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedCommandException":
        case "com.amazonaws.ecrpublic#UnsupportedCommandException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutRepositoryCatalogDataCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRepositoryCatalogDataCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRepositoryCatalogDataResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRepositoryCatalogDataCommand = deserializeAws_json1_1PutRepositoryCatalogDataCommand;
const deserializeAws_json1_1PutRepositoryCatalogDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SetRepositoryPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetRepositoryPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SetRepositoryPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetRepositoryPolicyCommand = deserializeAws_json1_1SetRepositoryPolicyCommand;
const deserializeAws_json1_1SetRepositoryPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.ecrpublic#InvalidTagParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.ecrpublic#TooManyTagsException":
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
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.ecrpublic#InvalidTagParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.ecrpublic#TooManyTagsException":
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
const deserializeAws_json1_1UploadLayerPartCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UploadLayerPartCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UploadLayerPartResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UploadLayerPartCommand = deserializeAws_json1_1UploadLayerPartCommand;
const deserializeAws_json1_1UploadLayerPartCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLayerPartException":
        case "com.amazonaws.ecrpublic#InvalidLayerPartException":
            response = {
                ...(await deserializeAws_json1_1InvalidLayerPartExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecrpublic#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ecrpublic#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RegistryNotFoundException":
        case "com.amazonaws.ecrpublic#RegistryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RegistryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RepositoryNotFoundException":
        case "com.amazonaws.ecrpublic#RepositoryNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RepositoryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecrpublic#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedCommandException":
        case "com.amazonaws.ecrpublic#UnsupportedCommandException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedCommandExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UploadNotFoundException":
        case "com.amazonaws.ecrpublic#UploadNotFoundException":
            response = {
                ...(await deserializeAws_json1_1UploadNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1EmptyUploadExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EmptyUploadException(body, context);
    const contents = {
        name: "EmptyUploadException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ImageAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ImageAlreadyExistsException(body, context);
    const contents = {
        name: "ImageAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ImageDigestDoesNotMatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ImageDigestDoesNotMatchException(body, context);
    const contents = {
        name: "ImageDigestDoesNotMatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ImageNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ImageNotFoundException(body, context);
    const contents = {
        name: "ImageNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ImageTagAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ImageTagAlreadyExistsException(body, context);
    const contents = {
        name: "ImageTagAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidLayerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLayerException(body, context);
    const contents = {
        name: "InvalidLayerException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidLayerPartExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLayerPartException(body, context);
    const contents = {
        name: "InvalidLayerPartException",
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
const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagParameterException(body, context);
    const contents = {
        name: "InvalidTagParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LayerAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LayerAlreadyExistsException(body, context);
    const contents = {
        name: "LayerAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LayerPartTooSmallExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LayerPartTooSmallException(body, context);
    const contents = {
        name: "LayerPartTooSmallException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LayersNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LayersNotFoundException(body, context);
    const contents = {
        name: "LayersNotFoundException",
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
const deserializeAws_json1_1ReferencedImagesNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReferencedImagesNotFoundException(body, context);
    const contents = {
        name: "ReferencedImagesNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RegistryNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RegistryNotFoundException(body, context);
    const contents = {
        name: "RegistryNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryAlreadyExistsException(body, context);
    const contents = {
        name: "RepositoryAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryNotEmptyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNotEmptyException(body, context);
    const contents = {
        name: "RepositoryNotEmptyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryNotFoundException(body, context);
    const contents = {
        name: "RepositoryNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RepositoryPolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RepositoryPolicyNotFoundException(body, context);
    const contents = {
        name: "RepositoryPolicyNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServerException(body, context);
    const contents = {
        name: "ServerException",
        $fault: "server",
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
const deserializeAws_json1_1UnsupportedCommandExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedCommandException(body, context);
    const contents = {
        name: "UnsupportedCommandException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UploadNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UploadNotFoundException(body, context);
    const contents = {
        name: "UploadNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1ArchitectureList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BatchCheckLayerAvailabilityRequest = (input, context) => {
    return {
        ...(input.layerDigests !== undefined &&
            input.layerDigests !== null && {
            layerDigests: serializeAws_json1_1BatchedOperationLayerDigestList(input.layerDigests, context),
        }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1BatchDeleteImageRequest = (input, context) => {
    return {
        ...(input.imageIds !== undefined &&
            input.imageIds !== null && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1BatchedOperationLayerDigestList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CompleteLayerUploadRequest = (input, context) => {
    return {
        ...(input.layerDigests !== undefined &&
            input.layerDigests !== null && {
            layerDigests: serializeAws_json1_1LayerDigestList(input.layerDigests, context),
        }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.uploadId !== undefined && input.uploadId !== null && { uploadId: input.uploadId }),
    };
};
const serializeAws_json1_1CreateRepositoryRequest = (input, context) => {
    return {
        ...(input.catalogData !== undefined &&
            input.catalogData !== null && {
            catalogData: serializeAws_json1_1RepositoryCatalogDataInput(input.catalogData, context),
        }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1DeleteRepositoryPolicyRequest = (input, context) => {
    return {
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1DeleteRepositoryRequest = (input, context) => {
    return {
        ...(input.force !== undefined && input.force !== null && { force: input.force }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1DescribeImagesRequest = (input, context) => {
    return {
        ...(input.imageIds !== undefined &&
            input.imageIds !== null && { imageIds: serializeAws_json1_1ImageIdentifierList(input.imageIds, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1DescribeImageTagsRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1DescribeRegistriesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeRepositoriesRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryNames !== undefined &&
            input.repositoryNames !== null && {
            repositoryNames: serializeAws_json1_1RepositoryNameList(input.repositoryNames, context),
        }),
    };
};
const serializeAws_json1_1GetAuthorizationTokenRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetRegistryCatalogDataRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetRepositoryCatalogDataRequest = (input, context) => {
    return {
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1GetRepositoryPolicyRequest = (input, context) => {
    return {
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1ImageIdentifier = (input, context) => {
    return {
        ...(input.imageDigest !== undefined && input.imageDigest !== null && { imageDigest: input.imageDigest }),
        ...(input.imageTag !== undefined && input.imageTag !== null && { imageTag: input.imageTag }),
    };
};
const serializeAws_json1_1ImageIdentifierList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ImageIdentifier(entry, context);
    });
};
const serializeAws_json1_1InitiateLayerUploadRequest = (input, context) => {
    return {
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1LayerDigestList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1OperatingSystemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PutImageRequest = (input, context) => {
    return {
        ...(input.imageDigest !== undefined && input.imageDigest !== null && { imageDigest: input.imageDigest }),
        ...(input.imageManifest !== undefined && input.imageManifest !== null && { imageManifest: input.imageManifest }),
        ...(input.imageManifestMediaType !== undefined &&
            input.imageManifestMediaType !== null && { imageManifestMediaType: input.imageManifestMediaType }),
        ...(input.imageTag !== undefined && input.imageTag !== null && { imageTag: input.imageTag }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1PutRegistryCatalogDataRequest = (input, context) => {
    return {
        ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
    };
};
const serializeAws_json1_1PutRepositoryCatalogDataRequest = (input, context) => {
    return {
        ...(input.catalogData !== undefined &&
            input.catalogData !== null && {
            catalogData: serializeAws_json1_1RepositoryCatalogDataInput(input.catalogData, context),
        }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
    };
};
const serializeAws_json1_1RepositoryCatalogDataInput = (input, context) => {
    return {
        ...(input.aboutText !== undefined && input.aboutText !== null && { aboutText: input.aboutText }),
        ...(input.architectures !== undefined &&
            input.architectures !== null && {
            architectures: serializeAws_json1_1ArchitectureList(input.architectures, context),
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.logoImageBlob !== undefined &&
            input.logoImageBlob !== null && { logoImageBlob: context.base64Encoder(input.logoImageBlob) }),
        ...(input.operatingSystems !== undefined &&
            input.operatingSystems !== null && {
            operatingSystems: serializeAws_json1_1OperatingSystemList(input.operatingSystems, context),
        }),
        ...(input.usageText !== undefined && input.usageText !== null && { usageText: input.usageText }),
    };
};
const serializeAws_json1_1RepositoryNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SetRepositoryPolicyRequest = (input, context) => {
    return {
        ...(input.force !== undefined && input.force !== null && { force: input.force }),
        ...(input.policyText !== undefined && input.policyText !== null && { policyText: input.policyText }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
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
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
    };
};
const serializeAws_json1_1UploadLayerPartRequest = (input, context) => {
    return {
        ...(input.layerPartBlob !== undefined &&
            input.layerPartBlob !== null && { layerPartBlob: context.base64Encoder(input.layerPartBlob) }),
        ...(input.partFirstByte !== undefined && input.partFirstByte !== null && { partFirstByte: input.partFirstByte }),
        ...(input.partLastByte !== undefined && input.partLastByte !== null && { partLastByte: input.partLastByte }),
        ...(input.registryId !== undefined && input.registryId !== null && { registryId: input.registryId }),
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.uploadId !== undefined && input.uploadId !== null && { uploadId: input.uploadId }),
    };
};
const deserializeAws_json1_1ArchitectureList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AuthorizationData = (output, context) => {
    return {
        authorizationToken: output.authorizationToken !== undefined && output.authorizationToken !== null
            ? output.authorizationToken
            : undefined,
        expiresAt: output.expiresAt !== undefined && output.expiresAt !== null
            ? new Date(Math.round(output.expiresAt * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1BatchCheckLayerAvailabilityResponse = (output, context) => {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1LayerFailureList(output.failures, context)
            : undefined,
        layers: output.layers !== undefined && output.layers !== null
            ? deserializeAws_json1_1LayerList(output.layers, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchDeleteImageResponse = (output, context) => {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1ImageFailureList(output.failures, context)
            : undefined,
        imageIds: output.imageIds !== undefined && output.imageIds !== null
            ? deserializeAws_json1_1ImageIdentifierList(output.imageIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1CompleteLayerUploadResponse = (output, context) => {
    return {
        layerDigest: output.layerDigest !== undefined && output.layerDigest !== null ? output.layerDigest : undefined,
        registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
        uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
    };
};
const deserializeAws_json1_1CreateRepositoryResponse = (output, context) => {
    return {
        catalogData: output.catalogData !== undefined && output.catalogData !== null
            ? deserializeAws_json1_1RepositoryCatalogData(output.catalogData, context)
            : undefined,
        repository: output.repository !== undefined && output.repository !== null
            ? deserializeAws_json1_1Repository(output.repository, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteRepositoryPolicyResponse = (output, context) => {
    return {
        policyText: output.policyText !== undefined && output.policyText !== null ? output.policyText : undefined,
        registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1DeleteRepositoryResponse = (output, context) => {
    return {
        repository: output.repository !== undefined && output.repository !== null
            ? deserializeAws_json1_1Repository(output.repository, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeImagesResponse = (output, context) => {
    return {
        imageDetails: output.imageDetails !== undefined && output.imageDetails !== null
            ? deserializeAws_json1_1ImageDetailList(output.imageDetails, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeImageTagsResponse = (output, context) => {
    return {
        imageTagDetails: output.imageTagDetails !== undefined && output.imageTagDetails !== null
            ? deserializeAws_json1_1ImageTagDetailList(output.imageTagDetails, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeRegistriesResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        registries: output.registries !== undefined && output.registries !== null
            ? deserializeAws_json1_1RegistryList(output.registries, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRepositoriesResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        repositories: output.repositories !== undefined && output.repositories !== null
            ? deserializeAws_json1_1RepositoryList(output.repositories, context)
            : undefined,
    };
};
const deserializeAws_json1_1EmptyUploadException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1GetAuthorizationTokenResponse = (output, context) => {
    return {
        authorizationData: output.authorizationData !== undefined && output.authorizationData !== null
            ? deserializeAws_json1_1AuthorizationData(output.authorizationData, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRegistryCatalogDataResponse = (output, context) => {
    return {
        registryCatalogData: output.registryCatalogData !== undefined && output.registryCatalogData !== null
            ? deserializeAws_json1_1RegistryCatalogData(output.registryCatalogData, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRepositoryCatalogDataResponse = (output, context) => {
    return {
        catalogData: output.catalogData !== undefined && output.catalogData !== null
            ? deserializeAws_json1_1RepositoryCatalogData(output.catalogData, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetRepositoryPolicyResponse = (output, context) => {
    return {
        policyText: output.policyText !== undefined && output.policyText !== null ? output.policyText : undefined,
        registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1Image = (output, context) => {
    return {
        imageId: output.imageId !== undefined && output.imageId !== null
            ? deserializeAws_json1_1ImageIdentifier(output.imageId, context)
            : undefined,
        imageManifest: output.imageManifest !== undefined && output.imageManifest !== null ? output.imageManifest : undefined,
        imageManifestMediaType: output.imageManifestMediaType !== undefined && output.imageManifestMediaType !== null
            ? output.imageManifestMediaType
            : undefined,
        registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1ImageAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ImageDetail = (output, context) => {
    return {
        artifactMediaType: output.artifactMediaType !== undefined && output.artifactMediaType !== null
            ? output.artifactMediaType
            : undefined,
        imageDigest: output.imageDigest !== undefined && output.imageDigest !== null ? output.imageDigest : undefined,
        imageManifestMediaType: output.imageManifestMediaType !== undefined && output.imageManifestMediaType !== null
            ? output.imageManifestMediaType
            : undefined,
        imagePushedAt: output.imagePushedAt !== undefined && output.imagePushedAt !== null
            ? new Date(Math.round(output.imagePushedAt * 1000))
            : undefined,
        imageSizeInBytes: output.imageSizeInBytes !== undefined && output.imageSizeInBytes !== null ? output.imageSizeInBytes : undefined,
        imageTags: output.imageTags !== undefined && output.imageTags !== null
            ? deserializeAws_json1_1ImageTagList(output.imageTags, context)
            : undefined,
        registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
    };
};
const deserializeAws_json1_1ImageDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ImageDetail(entry, context);
    });
};
const deserializeAws_json1_1ImageDigestDoesNotMatchException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ImageFailure = (output, context) => {
    return {
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        imageId: output.imageId !== undefined && output.imageId !== null
            ? deserializeAws_json1_1ImageIdentifier(output.imageId, context)
            : undefined,
    };
};
const deserializeAws_json1_1ImageFailureList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ImageFailure(entry, context);
    });
};
const deserializeAws_json1_1ImageIdentifier = (output, context) => {
    return {
        imageDigest: output.imageDigest !== undefined && output.imageDigest !== null ? output.imageDigest : undefined,
        imageTag: output.imageTag !== undefined && output.imageTag !== null ? output.imageTag : undefined,
    };
};
const deserializeAws_json1_1ImageIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ImageIdentifier(entry, context);
    });
};
const deserializeAws_json1_1ImageNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ImageTagAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ImageTagDetail = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        imageDetail: output.imageDetail !== undefined && output.imageDetail !== null
            ? deserializeAws_json1_1ReferencedImageDetail(output.imageDetail, context)
            : undefined,
        imageTag: output.imageTag !== undefined && output.imageTag !== null ? output.imageTag : undefined,
    };
};
const deserializeAws_json1_1ImageTagDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ImageTagDetail(entry, context);
    });
};
const deserializeAws_json1_1ImageTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InitiateLayerUploadResponse = (output, context) => {
    return {
        partSize: output.partSize !== undefined && output.partSize !== null ? output.partSize : undefined,
        uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
    };
};
const deserializeAws_json1_1InvalidLayerException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidLayerPartException = (output, context) => {
    return {
        lastValidByteReceived: output.lastValidByteReceived !== undefined && output.lastValidByteReceived !== null
            ? output.lastValidByteReceived
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
        uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagParameterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Layer = (output, context) => {
    return {
        layerAvailability: output.layerAvailability !== undefined && output.layerAvailability !== null
            ? output.layerAvailability
            : undefined,
        layerDigest: output.layerDigest !== undefined && output.layerDigest !== null ? output.layerDigest : undefined,
        layerSize: output.layerSize !== undefined && output.layerSize !== null ? output.layerSize : undefined,
        mediaType: output.mediaType !== undefined && output.mediaType !== null ? output.mediaType : undefined,
    };
};
const deserializeAws_json1_1LayerAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LayerFailure = (output, context) => {
    return {
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        layerDigest: output.layerDigest !== undefined && output.layerDigest !== null ? output.layerDigest : undefined,
    };
};
const deserializeAws_json1_1LayerFailureList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LayerFailure(entry, context);
    });
};
const deserializeAws_json1_1LayerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Layer(entry, context);
    });
};
const deserializeAws_json1_1LayerPartTooSmallException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LayersNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1OperatingSystemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PutImageResponse = (output, context) => {
    return {
        image: output.image !== undefined && output.image !== null
            ? deserializeAws_json1_1Image(output.image, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutRegistryCatalogDataResponse = (output, context) => {
    return {
        registryCatalogData: output.registryCatalogData !== undefined && output.registryCatalogData !== null
            ? deserializeAws_json1_1RegistryCatalogData(output.registryCatalogData, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutRepositoryCatalogDataResponse = (output, context) => {
    return {
        catalogData: output.catalogData !== undefined && output.catalogData !== null
            ? deserializeAws_json1_1RepositoryCatalogData(output.catalogData, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReferencedImageDetail = (output, context) => {
    return {
        artifactMediaType: output.artifactMediaType !== undefined && output.artifactMediaType !== null
            ? output.artifactMediaType
            : undefined,
        imageDigest: output.imageDigest !== undefined && output.imageDigest !== null ? output.imageDigest : undefined,
        imageManifestMediaType: output.imageManifestMediaType !== undefined && output.imageManifestMediaType !== null
            ? output.imageManifestMediaType
            : undefined,
        imagePushedAt: output.imagePushedAt !== undefined && output.imagePushedAt !== null
            ? new Date(Math.round(output.imagePushedAt * 1000))
            : undefined,
        imageSizeInBytes: output.imageSizeInBytes !== undefined && output.imageSizeInBytes !== null ? output.imageSizeInBytes : undefined,
    };
};
const deserializeAws_json1_1ReferencedImagesNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Registry = (output, context) => {
    return {
        aliases: output.aliases !== undefined && output.aliases !== null
            ? deserializeAws_json1_1RegistryAliasList(output.aliases, context)
            : undefined,
        registryArn: output.registryArn !== undefined && output.registryArn !== null ? output.registryArn : undefined,
        registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
        registryUri: output.registryUri !== undefined && output.registryUri !== null ? output.registryUri : undefined,
        verified: output.verified !== undefined && output.verified !== null ? output.verified : undefined,
    };
};
const deserializeAws_json1_1RegistryAlias = (output, context) => {
    return {
        defaultRegistryAlias: output.defaultRegistryAlias !== undefined && output.defaultRegistryAlias !== null
            ? output.defaultRegistryAlias
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        primaryRegistryAlias: output.primaryRegistryAlias !== undefined && output.primaryRegistryAlias !== null
            ? output.primaryRegistryAlias
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1RegistryAliasList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RegistryAlias(entry, context);
    });
};
const deserializeAws_json1_1RegistryCatalogData = (output, context) => {
    return {
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
    };
};
const deserializeAws_json1_1RegistryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Registry(entry, context);
    });
};
const deserializeAws_json1_1RegistryNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Repository = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
        repositoryArn: output.repositoryArn !== undefined && output.repositoryArn !== null ? output.repositoryArn : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
        repositoryUri: output.repositoryUri !== undefined && output.repositoryUri !== null ? output.repositoryUri : undefined,
    };
};
const deserializeAws_json1_1RepositoryAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryCatalogData = (output, context) => {
    return {
        aboutText: output.aboutText !== undefined && output.aboutText !== null ? output.aboutText : undefined,
        architectures: output.architectures !== undefined && output.architectures !== null
            ? deserializeAws_json1_1ArchitectureList(output.architectures, context)
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        logoUrl: output.logoUrl !== undefined && output.logoUrl !== null ? output.logoUrl : undefined,
        marketplaceCertified: output.marketplaceCertified !== undefined && output.marketplaceCertified !== null
            ? output.marketplaceCertified
            : undefined,
        operatingSystems: output.operatingSystems !== undefined && output.operatingSystems !== null
            ? deserializeAws_json1_1OperatingSystemList(output.operatingSystems, context)
            : undefined,
        usageText: output.usageText !== undefined && output.usageText !== null ? output.usageText : undefined,
    };
};
const deserializeAws_json1_1RepositoryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Repository(entry, context);
    });
};
const deserializeAws_json1_1RepositoryNotEmptyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RepositoryPolicyNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ServerException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SetRepositoryPolicyResponse = (output, context) => {
    return {
        policyText: output.policyText !== undefined && output.policyText !== null ? output.policyText : undefined,
        registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
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
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UnsupportedCommandException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UploadLayerPartResponse = (output, context) => {
    return {
        lastByteReceived: output.lastByteReceived !== undefined && output.lastByteReceived !== null ? output.lastByteReceived : undefined,
        registryId: output.registryId !== undefined && output.registryId !== null ? output.registryId : undefined,
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
        uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
    };
};
const deserializeAws_json1_1UploadNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
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