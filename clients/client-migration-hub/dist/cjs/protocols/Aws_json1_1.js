"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1PutResourceAttributesCommand = exports.deserializeAws_json1_1NotifyMigrationTaskStateCommand = exports.deserializeAws_json1_1NotifyApplicationStateCommand = exports.deserializeAws_json1_1ListProgressUpdateStreamsCommand = exports.deserializeAws_json1_1ListMigrationTasksCommand = exports.deserializeAws_json1_1ListDiscoveredResourcesCommand = exports.deserializeAws_json1_1ListCreatedArtifactsCommand = exports.deserializeAws_json1_1ListApplicationStatesCommand = exports.deserializeAws_json1_1ImportMigrationTaskCommand = exports.deserializeAws_json1_1DisassociateDiscoveredResourceCommand = exports.deserializeAws_json1_1DisassociateCreatedArtifactCommand = exports.deserializeAws_json1_1DescribeMigrationTaskCommand = exports.deserializeAws_json1_1DescribeApplicationStateCommand = exports.deserializeAws_json1_1DeleteProgressUpdateStreamCommand = exports.deserializeAws_json1_1CreateProgressUpdateStreamCommand = exports.deserializeAws_json1_1AssociateDiscoveredResourceCommand = exports.deserializeAws_json1_1AssociateCreatedArtifactCommand = exports.serializeAws_json1_1PutResourceAttributesCommand = exports.serializeAws_json1_1NotifyMigrationTaskStateCommand = exports.serializeAws_json1_1NotifyApplicationStateCommand = exports.serializeAws_json1_1ListProgressUpdateStreamsCommand = exports.serializeAws_json1_1ListMigrationTasksCommand = exports.serializeAws_json1_1ListDiscoveredResourcesCommand = exports.serializeAws_json1_1ListCreatedArtifactsCommand = exports.serializeAws_json1_1ListApplicationStatesCommand = exports.serializeAws_json1_1ImportMigrationTaskCommand = exports.serializeAws_json1_1DisassociateDiscoveredResourceCommand = exports.serializeAws_json1_1DisassociateCreatedArtifactCommand = exports.serializeAws_json1_1DescribeMigrationTaskCommand = exports.serializeAws_json1_1DescribeApplicationStateCommand = exports.serializeAws_json1_1DeleteProgressUpdateStreamCommand = exports.serializeAws_json1_1CreateProgressUpdateStreamCommand = exports.serializeAws_json1_1AssociateDiscoveredResourceCommand = exports.serializeAws_json1_1AssociateCreatedArtifactCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateCreatedArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.AssociateCreatedArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateCreatedArtifactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateCreatedArtifactCommand = serializeAws_json1_1AssociateCreatedArtifactCommand;
const serializeAws_json1_1AssociateDiscoveredResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.AssociateDiscoveredResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateDiscoveredResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateDiscoveredResourceCommand = serializeAws_json1_1AssociateDiscoveredResourceCommand;
const serializeAws_json1_1CreateProgressUpdateStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.CreateProgressUpdateStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProgressUpdateStreamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateProgressUpdateStreamCommand = serializeAws_json1_1CreateProgressUpdateStreamCommand;
const serializeAws_json1_1DeleteProgressUpdateStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.DeleteProgressUpdateStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProgressUpdateStreamRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProgressUpdateStreamCommand = serializeAws_json1_1DeleteProgressUpdateStreamCommand;
const serializeAws_json1_1DescribeApplicationStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.DescribeApplicationState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApplicationStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeApplicationStateCommand = serializeAws_json1_1DescribeApplicationStateCommand;
const serializeAws_json1_1DescribeMigrationTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.DescribeMigrationTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMigrationTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMigrationTaskCommand = serializeAws_json1_1DescribeMigrationTaskCommand;
const serializeAws_json1_1DisassociateCreatedArtifactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.DisassociateCreatedArtifact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateCreatedArtifactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateCreatedArtifactCommand = serializeAws_json1_1DisassociateCreatedArtifactCommand;
const serializeAws_json1_1DisassociateDiscoveredResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.DisassociateDiscoveredResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateDiscoveredResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateDiscoveredResourceCommand = serializeAws_json1_1DisassociateDiscoveredResourceCommand;
const serializeAws_json1_1ImportMigrationTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.ImportMigrationTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportMigrationTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportMigrationTaskCommand = serializeAws_json1_1ImportMigrationTaskCommand;
const serializeAws_json1_1ListApplicationStatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.ListApplicationStates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationStatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListApplicationStatesCommand = serializeAws_json1_1ListApplicationStatesCommand;
const serializeAws_json1_1ListCreatedArtifactsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.ListCreatedArtifacts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCreatedArtifactsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCreatedArtifactsCommand = serializeAws_json1_1ListCreatedArtifactsCommand;
const serializeAws_json1_1ListDiscoveredResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.ListDiscoveredResources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDiscoveredResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDiscoveredResourcesCommand = serializeAws_json1_1ListDiscoveredResourcesCommand;
const serializeAws_json1_1ListMigrationTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.ListMigrationTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMigrationTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListMigrationTasksCommand = serializeAws_json1_1ListMigrationTasksCommand;
const serializeAws_json1_1ListProgressUpdateStreamsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.ListProgressUpdateStreams",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProgressUpdateStreamsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProgressUpdateStreamsCommand = serializeAws_json1_1ListProgressUpdateStreamsCommand;
const serializeAws_json1_1NotifyApplicationStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.NotifyApplicationState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1NotifyApplicationStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1NotifyApplicationStateCommand = serializeAws_json1_1NotifyApplicationStateCommand;
const serializeAws_json1_1NotifyMigrationTaskStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.NotifyMigrationTaskState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1NotifyMigrationTaskStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1NotifyMigrationTaskStateCommand = serializeAws_json1_1NotifyMigrationTaskStateCommand;
const serializeAws_json1_1PutResourceAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSMigrationHub.PutResourceAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutResourceAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutResourceAttributesCommand = serializeAws_json1_1PutResourceAttributesCommand;
const deserializeAws_json1_1AssociateCreatedArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateCreatedArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateCreatedArtifactResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateCreatedArtifactCommand = deserializeAws_json1_1AssociateCreatedArtifactCommand;
const deserializeAws_json1_1AssociateCreatedArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhub#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.migrationhub#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AssociateDiscoveredResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateDiscoveredResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateDiscoveredResourceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateDiscoveredResourceCommand = deserializeAws_json1_1AssociateDiscoveredResourceCommand;
const deserializeAws_json1_1AssociateDiscoveredResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhub#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyErrorException":
        case "com.amazonaws.migrationhub#PolicyErrorException":
            response = {
                ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.migrationhub#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateProgressUpdateStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateProgressUpdateStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProgressUpdateStreamResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateProgressUpdateStreamCommand = deserializeAws_json1_1CreateProgressUpdateStreamCommand;
const deserializeAws_json1_1CreateProgressUpdateStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhub#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.migrationhub#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteProgressUpdateStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteProgressUpdateStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProgressUpdateStreamResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProgressUpdateStreamCommand = deserializeAws_json1_1DeleteProgressUpdateStreamCommand;
const deserializeAws_json1_1DeleteProgressUpdateStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhub#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.migrationhub#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeApplicationStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeApplicationStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeApplicationStateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeApplicationStateCommand = deserializeAws_json1_1DescribeApplicationStateCommand;
const deserializeAws_json1_1DescribeApplicationStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyErrorException":
        case "com.amazonaws.migrationhub#PolicyErrorException":
            response = {
                ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
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
const deserializeAws_json1_1DescribeMigrationTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMigrationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMigrationTaskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMigrationTaskCommand = deserializeAws_json1_1DescribeMigrationTaskCommand;
const deserializeAws_json1_1DescribeMigrationTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
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
const deserializeAws_json1_1DisassociateCreatedArtifactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateCreatedArtifactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateCreatedArtifactResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateCreatedArtifactCommand = deserializeAws_json1_1DisassociateCreatedArtifactCommand;
const deserializeAws_json1_1DisassociateCreatedArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhub#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.migrationhub#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisassociateDiscoveredResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateDiscoveredResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateDiscoveredResourceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateDiscoveredResourceCommand = deserializeAws_json1_1DisassociateDiscoveredResourceCommand;
const deserializeAws_json1_1DisassociateDiscoveredResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhub#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.migrationhub#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ImportMigrationTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportMigrationTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportMigrationTaskResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportMigrationTaskCommand = deserializeAws_json1_1ImportMigrationTaskCommand;
const deserializeAws_json1_1ImportMigrationTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhub#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.migrationhub#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListApplicationStatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListApplicationStatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationStatesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListApplicationStatesCommand = deserializeAws_json1_1ListApplicationStatesCommand;
const deserializeAws_json1_1ListApplicationStatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
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
const deserializeAws_json1_1ListCreatedArtifactsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCreatedArtifactsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCreatedArtifactsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCreatedArtifactsCommand = deserializeAws_json1_1ListCreatedArtifactsCommand;
const deserializeAws_json1_1ListCreatedArtifactsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
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
const deserializeAws_json1_1ListDiscoveredResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDiscoveredResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDiscoveredResourcesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDiscoveredResourcesCommand = deserializeAws_json1_1ListDiscoveredResourcesCommand;
const deserializeAws_json1_1ListDiscoveredResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
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
const deserializeAws_json1_1ListMigrationTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListMigrationTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMigrationTasksResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListMigrationTasksCommand = deserializeAws_json1_1ListMigrationTasksCommand;
const deserializeAws_json1_1ListMigrationTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyErrorException":
        case "com.amazonaws.migrationhub#PolicyErrorException":
            response = {
                ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
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
const deserializeAws_json1_1ListProgressUpdateStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListProgressUpdateStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProgressUpdateStreamsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProgressUpdateStreamsCommand = deserializeAws_json1_1ListProgressUpdateStreamsCommand;
const deserializeAws_json1_1ListProgressUpdateStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
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
const deserializeAws_json1_1NotifyApplicationStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1NotifyApplicationStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1NotifyApplicationStateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1NotifyApplicationStateCommand = deserializeAws_json1_1NotifyApplicationStateCommand;
const deserializeAws_json1_1NotifyApplicationStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhub#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyErrorException":
        case "com.amazonaws.migrationhub#PolicyErrorException":
            response = {
                ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.migrationhub#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1NotifyMigrationTaskStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1NotifyMigrationTaskStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1NotifyMigrationTaskStateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1NotifyMigrationTaskStateCommand = deserializeAws_json1_1NotifyMigrationTaskStateCommand;
const deserializeAws_json1_1NotifyMigrationTaskStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhub#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.migrationhub#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutResourceAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutResourceAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutResourceAttributesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutResourceAttributesCommand = deserializeAws_json1_1PutResourceAttributesCommand;
const deserializeAws_json1_1PutResourceAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.migrationhub#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DryRunOperation":
        case "com.amazonaws.migrationhub#DryRunOperation":
            response = {
                ...(await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HomeRegionNotSetException":
        case "com.amazonaws.migrationhub#HomeRegionNotSetException":
            response = {
                ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.migrationhub#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.migrationhub#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.migrationhub#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.migrationhub#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.migrationhub#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.migrationhub#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
const deserializeAws_json1_1DryRunOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DryRunOperation(body, context);
    const contents = {
        name: "DryRunOperation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1HomeRegionNotSetExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HomeRegionNotSetException(body, context);
    const contents = {
        name: "HomeRegionNotSetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = {
        name: "InternalServerError",
        $fault: "server",
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
const deserializeAws_json1_1PolicyErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyErrorException(body, context);
    const contents = {
        name: "PolicyErrorException",
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
const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceUnavailableException(body, context);
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
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
const deserializeAws_json1_1UnauthorizedOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnauthorizedOperation(body, context);
    const contents = {
        name: "UnauthorizedOperation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1ApplicationIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AssociateCreatedArtifactRequest = (input, context) => {
    return {
        ...(input.CreatedArtifact !== undefined &&
            input.CreatedArtifact !== null && {
            CreatedArtifact: serializeAws_json1_1CreatedArtifact(input.CreatedArtifact, context),
        }),
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.MigrationTaskName !== undefined &&
            input.MigrationTaskName !== null && { MigrationTaskName: input.MigrationTaskName }),
        ...(input.ProgressUpdateStream !== undefined &&
            input.ProgressUpdateStream !== null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    };
};
const serializeAws_json1_1AssociateDiscoveredResourceRequest = (input, context) => {
    return {
        ...(input.DiscoveredResource !== undefined &&
            input.DiscoveredResource !== null && {
            DiscoveredResource: serializeAws_json1_1DiscoveredResource(input.DiscoveredResource, context),
        }),
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.MigrationTaskName !== undefined &&
            input.MigrationTaskName !== null && { MigrationTaskName: input.MigrationTaskName }),
        ...(input.ProgressUpdateStream !== undefined &&
            input.ProgressUpdateStream !== null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    };
};
const serializeAws_json1_1CreatedArtifact = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateProgressUpdateStreamRequest = (input, context) => {
    return {
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.ProgressUpdateStreamName !== undefined &&
            input.ProgressUpdateStreamName !== null && { ProgressUpdateStreamName: input.ProgressUpdateStreamName }),
    };
};
const serializeAws_json1_1DeleteProgressUpdateStreamRequest = (input, context) => {
    return {
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.ProgressUpdateStreamName !== undefined &&
            input.ProgressUpdateStreamName !== null && { ProgressUpdateStreamName: input.ProgressUpdateStreamName }),
    };
};
const serializeAws_json1_1DescribeApplicationStateRequest = (input, context) => {
    return {
        ...(input.ApplicationId !== undefined && input.ApplicationId !== null && { ApplicationId: input.ApplicationId }),
    };
};
const serializeAws_json1_1DescribeMigrationTaskRequest = (input, context) => {
    return {
        ...(input.MigrationTaskName !== undefined &&
            input.MigrationTaskName !== null && { MigrationTaskName: input.MigrationTaskName }),
        ...(input.ProgressUpdateStream !== undefined &&
            input.ProgressUpdateStream !== null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    };
};
const serializeAws_json1_1DisassociateCreatedArtifactRequest = (input, context) => {
    return {
        ...(input.CreatedArtifactName !== undefined &&
            input.CreatedArtifactName !== null && { CreatedArtifactName: input.CreatedArtifactName }),
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.MigrationTaskName !== undefined &&
            input.MigrationTaskName !== null && { MigrationTaskName: input.MigrationTaskName }),
        ...(input.ProgressUpdateStream !== undefined &&
            input.ProgressUpdateStream !== null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    };
};
const serializeAws_json1_1DisassociateDiscoveredResourceRequest = (input, context) => {
    return {
        ...(input.ConfigurationId !== undefined &&
            input.ConfigurationId !== null && { ConfigurationId: input.ConfigurationId }),
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.MigrationTaskName !== undefined &&
            input.MigrationTaskName !== null && { MigrationTaskName: input.MigrationTaskName }),
        ...(input.ProgressUpdateStream !== undefined &&
            input.ProgressUpdateStream !== null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    };
};
const serializeAws_json1_1DiscoveredResource = (input, context) => {
    return {
        ...(input.ConfigurationId !== undefined &&
            input.ConfigurationId !== null && { ConfigurationId: input.ConfigurationId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    };
};
const serializeAws_json1_1ImportMigrationTaskRequest = (input, context) => {
    return {
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.MigrationTaskName !== undefined &&
            input.MigrationTaskName !== null && { MigrationTaskName: input.MigrationTaskName }),
        ...(input.ProgressUpdateStream !== undefined &&
            input.ProgressUpdateStream !== null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    };
};
const serializeAws_json1_1ListApplicationStatesRequest = (input, context) => {
    return {
        ...(input.ApplicationIds !== undefined &&
            input.ApplicationIds !== null && {
            ApplicationIds: serializeAws_json1_1ApplicationIds(input.ApplicationIds, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListCreatedArtifactsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.MigrationTaskName !== undefined &&
            input.MigrationTaskName !== null && { MigrationTaskName: input.MigrationTaskName }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ProgressUpdateStream !== undefined &&
            input.ProgressUpdateStream !== null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    };
};
const serializeAws_json1_1ListDiscoveredResourcesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.MigrationTaskName !== undefined &&
            input.MigrationTaskName !== null && { MigrationTaskName: input.MigrationTaskName }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ProgressUpdateStream !== undefined &&
            input.ProgressUpdateStream !== null && { ProgressUpdateStream: input.ProgressUpdateStream }),
    };
};
const serializeAws_json1_1ListMigrationTasksRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName }),
    };
};
const serializeAws_json1_1ListProgressUpdateStreamsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1NotifyApplicationStateRequest = (input, context) => {
    return {
        ...(input.ApplicationId !== undefined && input.ApplicationId !== null && { ApplicationId: input.ApplicationId }),
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
        ...(input.UpdateDateTime !== undefined &&
            input.UpdateDateTime !== null && { UpdateDateTime: Math.round(input.UpdateDateTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1NotifyMigrationTaskStateRequest = (input, context) => {
    return {
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.MigrationTaskName !== undefined &&
            input.MigrationTaskName !== null && { MigrationTaskName: input.MigrationTaskName }),
        ...(input.NextUpdateSeconds !== undefined &&
            input.NextUpdateSeconds !== null && { NextUpdateSeconds: input.NextUpdateSeconds }),
        ...(input.ProgressUpdateStream !== undefined &&
            input.ProgressUpdateStream !== null && { ProgressUpdateStream: input.ProgressUpdateStream }),
        ...(input.Task !== undefined && input.Task !== null && { Task: serializeAws_json1_1Task(input.Task, context) }),
        ...(input.UpdateDateTime !== undefined &&
            input.UpdateDateTime !== null && { UpdateDateTime: Math.round(input.UpdateDateTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1PutResourceAttributesRequest = (input, context) => {
    return {
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.MigrationTaskName !== undefined &&
            input.MigrationTaskName !== null && { MigrationTaskName: input.MigrationTaskName }),
        ...(input.ProgressUpdateStream !== undefined &&
            input.ProgressUpdateStream !== null && { ProgressUpdateStream: input.ProgressUpdateStream }),
        ...(input.ResourceAttributeList !== undefined &&
            input.ResourceAttributeList !== null && {
            ResourceAttributeList: serializeAws_json1_1ResourceAttributeList(input.ResourceAttributeList, context),
        }),
    };
};
const serializeAws_json1_1ResourceAttribute = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ResourceAttributeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceAttribute(entry, context);
    });
};
const serializeAws_json1_1Task = (input, context) => {
    return {
        ...(input.ProgressPercent !== undefined &&
            input.ProgressPercent !== null && { ProgressPercent: input.ProgressPercent }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
        ...(input.StatusDetail !== undefined && input.StatusDetail !== null && { StatusDetail: input.StatusDetail }),
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ApplicationState = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1ApplicationStateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ApplicationState(entry, context);
    });
};
const deserializeAws_json1_1AssociateCreatedArtifactResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociateDiscoveredResourceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreatedArtifact = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1CreatedArtifactList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CreatedArtifact(entry, context);
    });
};
const deserializeAws_json1_1CreateProgressUpdateStreamResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteProgressUpdateStreamResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeApplicationStateResult = (output, context) => {
    return {
        ApplicationStatus: output.ApplicationStatus !== undefined && output.ApplicationStatus !== null
            ? output.ApplicationStatus
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMigrationTaskResult = (output, context) => {
    return {
        MigrationTask: output.MigrationTask !== undefined && output.MigrationTask !== null
            ? deserializeAws_json1_1MigrationTask(output.MigrationTask, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisassociateCreatedArtifactResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateDiscoveredResourceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DiscoveredResource = (output, context) => {
    return {
        ConfigurationId: output.ConfigurationId !== undefined && output.ConfigurationId !== null ? output.ConfigurationId : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    };
};
const deserializeAws_json1_1DiscoveredResourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DiscoveredResource(entry, context);
    });
};
const deserializeAws_json1_1DryRunOperation = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1HomeRegionNotSetException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ImportMigrationTaskResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1LatestResourceAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceAttribute(entry, context);
    });
};
const deserializeAws_json1_1ListApplicationStatesResult = (output, context) => {
    return {
        ApplicationStateList: output.ApplicationStateList !== undefined && output.ApplicationStateList !== null
            ? deserializeAws_json1_1ApplicationStateList(output.ApplicationStateList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListCreatedArtifactsResult = (output, context) => {
    return {
        CreatedArtifactList: output.CreatedArtifactList !== undefined && output.CreatedArtifactList !== null
            ? deserializeAws_json1_1CreatedArtifactList(output.CreatedArtifactList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListDiscoveredResourcesResult = (output, context) => {
    return {
        DiscoveredResourceList: output.DiscoveredResourceList !== undefined && output.DiscoveredResourceList !== null
            ? deserializeAws_json1_1DiscoveredResourceList(output.DiscoveredResourceList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListMigrationTasksResult = (output, context) => {
    return {
        MigrationTaskSummaryList: output.MigrationTaskSummaryList !== undefined && output.MigrationTaskSummaryList !== null
            ? deserializeAws_json1_1MigrationTaskSummaryList(output.MigrationTaskSummaryList, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListProgressUpdateStreamsResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ProgressUpdateStreamSummaryList: output.ProgressUpdateStreamSummaryList !== undefined && output.ProgressUpdateStreamSummaryList !== null
            ? deserializeAws_json1_1ProgressUpdateStreamSummaryList(output.ProgressUpdateStreamSummaryList, context)
            : undefined,
    };
};
const deserializeAws_json1_1MigrationTask = (output, context) => {
    return {
        MigrationTaskName: output.MigrationTaskName !== undefined && output.MigrationTaskName !== null
            ? output.MigrationTaskName
            : undefined,
        ProgressUpdateStream: output.ProgressUpdateStream !== undefined && output.ProgressUpdateStream !== null
            ? output.ProgressUpdateStream
            : undefined,
        ResourceAttributeList: output.ResourceAttributeList !== undefined && output.ResourceAttributeList !== null
            ? deserializeAws_json1_1LatestResourceAttributeList(output.ResourceAttributeList, context)
            : undefined,
        Task: output.Task !== undefined && output.Task !== null ? deserializeAws_json1_1Task(output.Task, context) : undefined,
        UpdateDateTime: output.UpdateDateTime !== undefined && output.UpdateDateTime !== null
            ? new Date(Math.round(output.UpdateDateTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1MigrationTaskSummary = (output, context) => {
    return {
        MigrationTaskName: output.MigrationTaskName !== undefined && output.MigrationTaskName !== null
            ? output.MigrationTaskName
            : undefined,
        ProgressPercent: output.ProgressPercent !== undefined && output.ProgressPercent !== null ? output.ProgressPercent : undefined,
        ProgressUpdateStream: output.ProgressUpdateStream !== undefined && output.ProgressUpdateStream !== null
            ? output.ProgressUpdateStream
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusDetail: output.StatusDetail !== undefined && output.StatusDetail !== null ? output.StatusDetail : undefined,
        UpdateDateTime: output.UpdateDateTime !== undefined && output.UpdateDateTime !== null
            ? new Date(Math.round(output.UpdateDateTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1MigrationTaskSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MigrationTaskSummary(entry, context);
    });
};
const deserializeAws_json1_1NotifyApplicationStateResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1NotifyMigrationTaskStateResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1PolicyErrorException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ProgressUpdateStreamSummary = (output, context) => {
    return {
        ProgressUpdateStreamName: output.ProgressUpdateStreamName !== undefined && output.ProgressUpdateStreamName !== null
            ? output.ProgressUpdateStreamName
            : undefined,
    };
};
const deserializeAws_json1_1ProgressUpdateStreamSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProgressUpdateStreamSummary(entry, context);
    });
};
const deserializeAws_json1_1PutResourceAttributesResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ResourceAttribute = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ServiceUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Task = (output, context) => {
    return {
        ProgressPercent: output.ProgressPercent !== undefined && output.ProgressPercent !== null ? output.ProgressPercent : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusDetail: output.StatusDetail !== undefined && output.StatusDetail !== null ? output.StatusDetail : undefined,
    };
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RetryAfterSeconds: output.RetryAfterSeconds !== undefined && output.RetryAfterSeconds !== null
            ? output.RetryAfterSeconds
            : undefined,
    };
};
const deserializeAws_json1_1UnauthorizedOperation = (output, context) => {
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