"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdatePipelineStatusCommand = exports.deserializeAws_restJson1UpdatePipelineNotificationsCommand = exports.deserializeAws_restJson1UpdatePipelineCommand = exports.deserializeAws_restJson1TestRoleCommand = exports.deserializeAws_restJson1ReadPresetCommand = exports.deserializeAws_restJson1ReadPipelineCommand = exports.deserializeAws_restJson1ReadJobCommand = exports.deserializeAws_restJson1ListPresetsCommand = exports.deserializeAws_restJson1ListPipelinesCommand = exports.deserializeAws_restJson1ListJobsByStatusCommand = exports.deserializeAws_restJson1ListJobsByPipelineCommand = exports.deserializeAws_restJson1DeletePresetCommand = exports.deserializeAws_restJson1DeletePipelineCommand = exports.deserializeAws_restJson1CreatePresetCommand = exports.deserializeAws_restJson1CreatePipelineCommand = exports.deserializeAws_restJson1CreateJobCommand = exports.deserializeAws_restJson1CancelJobCommand = exports.serializeAws_restJson1UpdatePipelineStatusCommand = exports.serializeAws_restJson1UpdatePipelineNotificationsCommand = exports.serializeAws_restJson1UpdatePipelineCommand = exports.serializeAws_restJson1TestRoleCommand = exports.serializeAws_restJson1ReadPresetCommand = exports.serializeAws_restJson1ReadPipelineCommand = exports.serializeAws_restJson1ReadJobCommand = exports.serializeAws_restJson1ListPresetsCommand = exports.serializeAws_restJson1ListPipelinesCommand = exports.serializeAws_restJson1ListJobsByStatusCommand = exports.serializeAws_restJson1ListJobsByPipelineCommand = exports.serializeAws_restJson1DeletePresetCommand = exports.serializeAws_restJson1DeletePipelineCommand = exports.serializeAws_restJson1CreatePresetCommand = exports.serializeAws_restJson1CreatePipelineCommand = exports.serializeAws_restJson1CreateJobCommand = exports.serializeAws_restJson1CancelJobCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CancelJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2012-09-25/jobs/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CancelJobCommand = serializeAws_restJson1CancelJobCommand;
const serializeAws_restJson1CreateJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2012-09-25/jobs";
    let body;
    body = JSON.stringify({
        ...(input.Input !== undefined &&
            input.Input !== null && { Input: serializeAws_restJson1JobInput(input.Input, context) }),
        ...(input.Inputs !== undefined &&
            input.Inputs !== null && { Inputs: serializeAws_restJson1JobInputs(input.Inputs, context) }),
        ...(input.Output !== undefined &&
            input.Output !== null && { Output: serializeAws_restJson1CreateJobOutput(input.Output, context) }),
        ...(input.OutputKeyPrefix !== undefined &&
            input.OutputKeyPrefix !== null && { OutputKeyPrefix: input.OutputKeyPrefix }),
        ...(input.Outputs !== undefined &&
            input.Outputs !== null && { Outputs: serializeAws_restJson1CreateJobOutputs(input.Outputs, context) }),
        ...(input.PipelineId !== undefined && input.PipelineId !== null && { PipelineId: input.PipelineId }),
        ...(input.Playlists !== undefined &&
            input.Playlists !== null && { Playlists: serializeAws_restJson1CreateJobPlaylists(input.Playlists, context) }),
        ...(input.UserMetadata !== undefined &&
            input.UserMetadata !== null && { UserMetadata: serializeAws_restJson1UserMetadata(input.UserMetadata, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateJobCommand = serializeAws_restJson1CreateJobCommand;
const serializeAws_restJson1CreatePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2012-09-25/pipelines";
    let body;
    body = JSON.stringify({
        ...(input.AwsKmsKeyArn !== undefined && input.AwsKmsKeyArn !== null && { AwsKmsKeyArn: input.AwsKmsKeyArn }),
        ...(input.ContentConfig !== undefined &&
            input.ContentConfig !== null && {
            ContentConfig: serializeAws_restJson1PipelineOutputConfig(input.ContentConfig, context),
        }),
        ...(input.InputBucket !== undefined && input.InputBucket !== null && { InputBucket: input.InputBucket }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Notifications !== undefined &&
            input.Notifications !== null && {
            Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
        }),
        ...(input.OutputBucket !== undefined && input.OutputBucket !== null && { OutputBucket: input.OutputBucket }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.ThumbnailConfig !== undefined &&
            input.ThumbnailConfig !== null && {
            ThumbnailConfig: serializeAws_restJson1PipelineOutputConfig(input.ThumbnailConfig, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreatePipelineCommand = serializeAws_restJson1CreatePipelineCommand;
const serializeAws_restJson1CreatePresetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2012-09-25/presets";
    let body;
    body = JSON.stringify({
        ...(input.Audio !== undefined &&
            input.Audio !== null && { Audio: serializeAws_restJson1AudioParameters(input.Audio, context) }),
        ...(input.Container !== undefined && input.Container !== null && { Container: input.Container }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Thumbnails !== undefined &&
            input.Thumbnails !== null && { Thumbnails: serializeAws_restJson1Thumbnails(input.Thumbnails, context) }),
        ...(input.Video !== undefined &&
            input.Video !== null && { Video: serializeAws_restJson1VideoParameters(input.Video, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreatePresetCommand = serializeAws_restJson1CreatePresetCommand;
const serializeAws_restJson1DeletePipelineCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2012-09-25/pipelines/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeletePipelineCommand = serializeAws_restJson1DeletePipelineCommand;
const serializeAws_restJson1DeletePresetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2012-09-25/presets/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeletePresetCommand = serializeAws_restJson1DeletePresetCommand;
const serializeAws_restJson1ListJobsByPipelineCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2012-09-25/jobsByPipeline/{PipelineId}";
    if (input.PipelineId !== undefined) {
        const labelValue = input.PipelineId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PipelineId.");
        }
        resolvedPath = resolvedPath.replace("{PipelineId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PipelineId.");
    }
    const query = {
        ...(input.Ascending !== undefined && { Ascending: input.Ascending }),
        ...(input.PageToken !== undefined && { PageToken: input.PageToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListJobsByPipelineCommand = serializeAws_restJson1ListJobsByPipelineCommand;
const serializeAws_restJson1ListJobsByStatusCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2012-09-25/jobsByStatus/{Status}";
    if (input.Status !== undefined) {
        const labelValue = input.Status;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Status.");
        }
        resolvedPath = resolvedPath.replace("{Status}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Status.");
    }
    const query = {
        ...(input.Ascending !== undefined && { Ascending: input.Ascending }),
        ...(input.PageToken !== undefined && { PageToken: input.PageToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListJobsByStatusCommand = serializeAws_restJson1ListJobsByStatusCommand;
const serializeAws_restJson1ListPipelinesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2012-09-25/pipelines";
    const query = {
        ...(input.Ascending !== undefined && { Ascending: input.Ascending }),
        ...(input.PageToken !== undefined && { PageToken: input.PageToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListPipelinesCommand = serializeAws_restJson1ListPipelinesCommand;
const serializeAws_restJson1ListPresetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2012-09-25/presets";
    const query = {
        ...(input.Ascending !== undefined && { Ascending: input.Ascending }),
        ...(input.PageToken !== undefined && { PageToken: input.PageToken }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListPresetsCommand = serializeAws_restJson1ListPresetsCommand;
const serializeAws_restJson1ReadJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2012-09-25/jobs/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ReadJobCommand = serializeAws_restJson1ReadJobCommand;
const serializeAws_restJson1ReadPipelineCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2012-09-25/pipelines/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ReadPipelineCommand = serializeAws_restJson1ReadPipelineCommand;
const serializeAws_restJson1ReadPresetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2012-09-25/presets/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ReadPresetCommand = serializeAws_restJson1ReadPresetCommand;
const serializeAws_restJson1TestRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2012-09-25/roleTests";
    let body;
    body = JSON.stringify({
        ...(input.InputBucket !== undefined && input.InputBucket !== null && { InputBucket: input.InputBucket }),
        ...(input.OutputBucket !== undefined && input.OutputBucket !== null && { OutputBucket: input.OutputBucket }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.Topics !== undefined &&
            input.Topics !== null && { Topics: serializeAws_restJson1SnsTopics(input.Topics, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TestRoleCommand = serializeAws_restJson1TestRoleCommand;
const serializeAws_restJson1UpdatePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2012-09-25/pipelines/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AwsKmsKeyArn !== undefined && input.AwsKmsKeyArn !== null && { AwsKmsKeyArn: input.AwsKmsKeyArn }),
        ...(input.ContentConfig !== undefined &&
            input.ContentConfig !== null && {
            ContentConfig: serializeAws_restJson1PipelineOutputConfig(input.ContentConfig, context),
        }),
        ...(input.InputBucket !== undefined && input.InputBucket !== null && { InputBucket: input.InputBucket }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Notifications !== undefined &&
            input.Notifications !== null && {
            Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
        }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.ThumbnailConfig !== undefined &&
            input.ThumbnailConfig !== null && {
            ThumbnailConfig: serializeAws_restJson1PipelineOutputConfig(input.ThumbnailConfig, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdatePipelineCommand = serializeAws_restJson1UpdatePipelineCommand;
const serializeAws_restJson1UpdatePipelineNotificationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2012-09-25/pipelines/{Id}/notifications";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Notifications !== undefined &&
            input.Notifications !== null && {
            Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdatePipelineNotificationsCommand = serializeAws_restJson1UpdatePipelineNotificationsCommand;
const serializeAws_restJson1UpdatePipelineStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2012-09-25/pipelines/{Id}/status";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdatePipelineStatusCommand = serializeAws_restJson1UpdatePipelineStatusCommand;
const deserializeAws_restJson1CancelJobCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelJobCommand = deserializeAws_restJson1CancelJobCommand;
const deserializeAws_restJson1CancelJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.elastictranscoder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateJobCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Job: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Job !== undefined && data.Job !== null) {
        contents.Job = deserializeAws_restJson1Job(data.Job, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateJobCommand = deserializeAws_restJson1CreateJobCommand;
const deserializeAws_restJson1CreateJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elastictranscoder#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreatePipelineCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Pipeline: undefined,
        Warnings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Pipeline !== undefined && data.Pipeline !== null) {
        contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
    }
    if (data.Warnings !== undefined && data.Warnings !== null) {
        contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePipelineCommand = deserializeAws_restJson1CreatePipelineCommand;
const deserializeAws_restJson1CreatePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elastictranscoder#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreatePresetCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePresetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Preset: undefined,
        Warning: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Preset !== undefined && data.Preset !== null) {
        contents.Preset = deserializeAws_restJson1Preset(data.Preset, context);
    }
    if (data.Warning !== undefined && data.Warning !== null) {
        contents.Warning = data.Warning;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePresetCommand = deserializeAws_restJson1CreatePresetCommand;
const deserializeAws_restJson1CreatePresetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.elastictranscoder#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeletePipelineCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePipelineCommand = deserializeAws_restJson1DeletePipelineCommand;
const deserializeAws_restJson1DeletePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.elastictranscoder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeletePresetCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePresetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePresetCommand = deserializeAws_restJson1DeletePresetCommand;
const deserializeAws_restJson1DeletePresetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListJobsByPipelineCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJobsByPipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Jobs: undefined,
        NextPageToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Jobs !== undefined && data.Jobs !== null) {
        contents.Jobs = deserializeAws_restJson1Jobs(data.Jobs, context);
    }
    if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
        contents.NextPageToken = data.NextPageToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJobsByPipelineCommand = deserializeAws_restJson1ListJobsByPipelineCommand;
const deserializeAws_restJson1ListJobsByPipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListJobsByStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJobsByStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Jobs: undefined,
        NextPageToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Jobs !== undefined && data.Jobs !== null) {
        contents.Jobs = deserializeAws_restJson1Jobs(data.Jobs, context);
    }
    if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
        contents.NextPageToken = data.NextPageToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJobsByStatusCommand = deserializeAws_restJson1ListJobsByStatusCommand;
const deserializeAws_restJson1ListJobsByStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPipelinesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPipelinesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextPageToken: undefined,
        Pipelines: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
        contents.NextPageToken = data.NextPageToken;
    }
    if (data.Pipelines !== undefined && data.Pipelines !== null) {
        contents.Pipelines = deserializeAws_restJson1Pipelines(data.Pipelines, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPipelinesCommand = deserializeAws_restJson1ListPipelinesCommand;
const deserializeAws_restJson1ListPipelinesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPresetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPresetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextPageToken: undefined,
        Presets: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
        contents.NextPageToken = data.NextPageToken;
    }
    if (data.Presets !== undefined && data.Presets !== null) {
        contents.Presets = deserializeAws_restJson1Presets(data.Presets, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPresetsCommand = deserializeAws_restJson1ListPresetsCommand;
const deserializeAws_restJson1ListPresetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ReadJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ReadJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Job: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Job !== undefined && data.Job !== null) {
        contents.Job = deserializeAws_restJson1Job(data.Job, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ReadJobCommand = deserializeAws_restJson1ReadJobCommand;
const deserializeAws_restJson1ReadJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ReadPipelineCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ReadPipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Pipeline: undefined,
        Warnings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Pipeline !== undefined && data.Pipeline !== null) {
        contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
    }
    if (data.Warnings !== undefined && data.Warnings !== null) {
        contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ReadPipelineCommand = deserializeAws_restJson1ReadPipelineCommand;
const deserializeAws_restJson1ReadPipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ReadPresetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ReadPresetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Preset: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Preset !== undefined && data.Preset !== null) {
        contents.Preset = deserializeAws_restJson1Preset(data.Preset, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ReadPresetCommand = deserializeAws_restJson1ReadPresetCommand;
const deserializeAws_restJson1ReadPresetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1TestRoleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TestRoleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Messages: undefined,
        Success: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Messages !== undefined && data.Messages !== null) {
        contents.Messages = deserializeAws_restJson1ExceptionMessages(data.Messages, context);
    }
    if (data.Success !== undefined && data.Success !== null) {
        contents.Success = data.Success;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TestRoleCommand = deserializeAws_restJson1TestRoleCommand;
const deserializeAws_restJson1TestRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdatePipelineCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Pipeline: undefined,
        Warnings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Pipeline !== undefined && data.Pipeline !== null) {
        contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
    }
    if (data.Warnings !== undefined && data.Warnings !== null) {
        contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePipelineCommand = deserializeAws_restJson1UpdatePipelineCommand;
const deserializeAws_restJson1UpdatePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.elastictranscoder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdatePipelineNotificationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePipelineNotificationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Pipeline: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Pipeline !== undefined && data.Pipeline !== null) {
        contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePipelineNotificationsCommand = deserializeAws_restJson1UpdatePipelineNotificationsCommand;
const deserializeAws_restJson1UpdatePipelineNotificationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.elastictranscoder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdatePipelineStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePipelineStatusCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Pipeline: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Pipeline !== undefined && data.Pipeline !== null) {
        contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePipelineStatusCommand = deserializeAws_restJson1UpdatePipelineStatusCommand;
const deserializeAws_restJson1UpdatePipelineStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.elastictranscoder#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleVersionException":
        case "com.amazonaws.elastictranscoder#IncompatibleVersionException":
            response = {
                ...(await deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.elastictranscoder#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.elastictranscoder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.elastictranscoder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.elastictranscoder#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1IncompatibleVersionExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IncompatibleVersionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1AccessControls = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Artwork = (input, context) => {
    return {
        ...(input.AlbumArtFormat !== undefined &&
            input.AlbumArtFormat !== null && { AlbumArtFormat: input.AlbumArtFormat }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
        ...(input.InputKey !== undefined && input.InputKey !== null && { InputKey: input.InputKey }),
        ...(input.MaxHeight !== undefined && input.MaxHeight !== null && { MaxHeight: input.MaxHeight }),
        ...(input.MaxWidth !== undefined && input.MaxWidth !== null && { MaxWidth: input.MaxWidth }),
        ...(input.PaddingPolicy !== undefined && input.PaddingPolicy !== null && { PaddingPolicy: input.PaddingPolicy }),
        ...(input.SizingPolicy !== undefined && input.SizingPolicy !== null && { SizingPolicy: input.SizingPolicy }),
    };
};
const serializeAws_restJson1Artworks = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Artwork(entry, context);
    });
};
const serializeAws_restJson1AudioCodecOptions = (input, context) => {
    return {
        ...(input.BitDepth !== undefined && input.BitDepth !== null && { BitDepth: input.BitDepth }),
        ...(input.BitOrder !== undefined && input.BitOrder !== null && { BitOrder: input.BitOrder }),
        ...(input.Profile !== undefined && input.Profile !== null && { Profile: input.Profile }),
        ...(input.Signed !== undefined && input.Signed !== null && { Signed: input.Signed }),
    };
};
const serializeAws_restJson1AudioParameters = (input, context) => {
    return {
        ...(input.AudioPackingMode !== undefined &&
            input.AudioPackingMode !== null && { AudioPackingMode: input.AudioPackingMode }),
        ...(input.BitRate !== undefined && input.BitRate !== null && { BitRate: input.BitRate }),
        ...(input.Channels !== undefined && input.Channels !== null && { Channels: input.Channels }),
        ...(input.Codec !== undefined && input.Codec !== null && { Codec: input.Codec }),
        ...(input.CodecOptions !== undefined &&
            input.CodecOptions !== null && {
            CodecOptions: serializeAws_restJson1AudioCodecOptions(input.CodecOptions, context),
        }),
        ...(input.SampleRate !== undefined && input.SampleRate !== null && { SampleRate: input.SampleRate }),
    };
};
const serializeAws_restJson1CaptionFormat = (input, context) => {
    return {
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.Pattern !== undefined && input.Pattern !== null && { Pattern: input.Pattern }),
    };
};
const serializeAws_restJson1CaptionFormats = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CaptionFormat(entry, context);
    });
};
const serializeAws_restJson1Captions = (input, context) => {
    return {
        ...(input.CaptionFormats !== undefined &&
            input.CaptionFormats !== null && {
            CaptionFormats: serializeAws_restJson1CaptionFormats(input.CaptionFormats, context),
        }),
        ...(input.CaptionSources !== undefined &&
            input.CaptionSources !== null && {
            CaptionSources: serializeAws_restJson1CaptionSources(input.CaptionSources, context),
        }),
        ...(input.MergePolicy !== undefined && input.MergePolicy !== null && { MergePolicy: input.MergePolicy }),
    };
};
const serializeAws_restJson1CaptionSource = (input, context) => {
    return {
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Label !== undefined && input.Label !== null && { Label: input.Label }),
        ...(input.Language !== undefined && input.Language !== null && { Language: input.Language }),
        ...(input.TimeOffset !== undefined && input.TimeOffset !== null && { TimeOffset: input.TimeOffset }),
    };
};
const serializeAws_restJson1CaptionSources = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CaptionSource(entry, context);
    });
};
const serializeAws_restJson1Clip = (input, context) => {
    return {
        ...(input.TimeSpan !== undefined &&
            input.TimeSpan !== null && { TimeSpan: serializeAws_restJson1TimeSpan(input.TimeSpan, context) }),
    };
};
const serializeAws_restJson1CodecOptions = (input, context) => {
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
const serializeAws_restJson1Composition = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Clip(entry, context);
    });
};
const serializeAws_restJson1CreateJobOutput = (input, context) => {
    return {
        ...(input.AlbumArt !== undefined &&
            input.AlbumArt !== null && { AlbumArt: serializeAws_restJson1JobAlbumArt(input.AlbumArt, context) }),
        ...(input.Captions !== undefined &&
            input.Captions !== null && { Captions: serializeAws_restJson1Captions(input.Captions, context) }),
        ...(input.Composition !== undefined &&
            input.Composition !== null && { Composition: serializeAws_restJson1Composition(input.Composition, context) }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.PresetId !== undefined && input.PresetId !== null && { PresetId: input.PresetId }),
        ...(input.Rotate !== undefined && input.Rotate !== null && { Rotate: input.Rotate }),
        ...(input.SegmentDuration !== undefined &&
            input.SegmentDuration !== null && { SegmentDuration: input.SegmentDuration }),
        ...(input.ThumbnailEncryption !== undefined &&
            input.ThumbnailEncryption !== null && {
            ThumbnailEncryption: serializeAws_restJson1Encryption(input.ThumbnailEncryption, context),
        }),
        ...(input.ThumbnailPattern !== undefined &&
            input.ThumbnailPattern !== null && { ThumbnailPattern: input.ThumbnailPattern }),
        ...(input.Watermarks !== undefined &&
            input.Watermarks !== null && { Watermarks: serializeAws_restJson1JobWatermarks(input.Watermarks, context) }),
    };
};
const serializeAws_restJson1CreateJobOutputs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CreateJobOutput(entry, context);
    });
};
const serializeAws_restJson1CreateJobPlaylist = (input, context) => {
    return {
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.HlsContentProtection !== undefined &&
            input.HlsContentProtection !== null && {
            HlsContentProtection: serializeAws_restJson1HlsContentProtection(input.HlsContentProtection, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OutputKeys !== undefined &&
            input.OutputKeys !== null && { OutputKeys: serializeAws_restJson1OutputKeys(input.OutputKeys, context) }),
        ...(input.PlayReadyDrm !== undefined &&
            input.PlayReadyDrm !== null && { PlayReadyDrm: serializeAws_restJson1PlayReadyDrm(input.PlayReadyDrm, context) }),
    };
};
const serializeAws_restJson1CreateJobPlaylists = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CreateJobPlaylist(entry, context);
    });
};
const serializeAws_restJson1DetectedProperties = (input, context) => {
    return {
        ...(input.DurationMillis !== undefined &&
            input.DurationMillis !== null && { DurationMillis: input.DurationMillis }),
        ...(input.FileSize !== undefined && input.FileSize !== null && { FileSize: input.FileSize }),
        ...(input.FrameRate !== undefined && input.FrameRate !== null && { FrameRate: input.FrameRate }),
        ...(input.Height !== undefined && input.Height !== null && { Height: input.Height }),
        ...(input.Width !== undefined && input.Width !== null && { Width: input.Width }),
    };
};
const serializeAws_restJson1Encryption = (input, context) => {
    return {
        ...(input.InitializationVector !== undefined &&
            input.InitializationVector !== null && { InitializationVector: input.InitializationVector }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.KeyMd5 !== undefined && input.KeyMd5 !== null && { KeyMd5: input.KeyMd5 }),
        ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
    };
};
const serializeAws_restJson1HlsContentProtection = (input, context) => {
    return {
        ...(input.InitializationVector !== undefined &&
            input.InitializationVector !== null && { InitializationVector: input.InitializationVector }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.KeyMd5 !== undefined && input.KeyMd5 !== null && { KeyMd5: input.KeyMd5 }),
        ...(input.KeyStoragePolicy !== undefined &&
            input.KeyStoragePolicy !== null && { KeyStoragePolicy: input.KeyStoragePolicy }),
        ...(input.LicenseAcquisitionUrl !== undefined &&
            input.LicenseAcquisitionUrl !== null && { LicenseAcquisitionUrl: input.LicenseAcquisitionUrl }),
        ...(input.Method !== undefined && input.Method !== null && { Method: input.Method }),
    };
};
const serializeAws_restJson1InputCaptions = (input, context) => {
    return {
        ...(input.CaptionSources !== undefined &&
            input.CaptionSources !== null && {
            CaptionSources: serializeAws_restJson1CaptionSources(input.CaptionSources, context),
        }),
        ...(input.MergePolicy !== undefined && input.MergePolicy !== null && { MergePolicy: input.MergePolicy }),
    };
};
const serializeAws_restJson1JobAlbumArt = (input, context) => {
    return {
        ...(input.Artwork !== undefined &&
            input.Artwork !== null && { Artwork: serializeAws_restJson1Artworks(input.Artwork, context) }),
        ...(input.MergePolicy !== undefined && input.MergePolicy !== null && { MergePolicy: input.MergePolicy }),
    };
};
const serializeAws_restJson1JobInput = (input, context) => {
    return {
        ...(input.AspectRatio !== undefined && input.AspectRatio !== null && { AspectRatio: input.AspectRatio }),
        ...(input.Container !== undefined && input.Container !== null && { Container: input.Container }),
        ...(input.DetectedProperties !== undefined &&
            input.DetectedProperties !== null && {
            DetectedProperties: serializeAws_restJson1DetectedProperties(input.DetectedProperties, context),
        }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
        ...(input.FrameRate !== undefined && input.FrameRate !== null && { FrameRate: input.FrameRate }),
        ...(input.InputCaptions !== undefined &&
            input.InputCaptions !== null && {
            InputCaptions: serializeAws_restJson1InputCaptions(input.InputCaptions, context),
        }),
        ...(input.Interlaced !== undefined && input.Interlaced !== null && { Interlaced: input.Interlaced }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Resolution !== undefined && input.Resolution !== null && { Resolution: input.Resolution }),
        ...(input.TimeSpan !== undefined &&
            input.TimeSpan !== null && { TimeSpan: serializeAws_restJson1TimeSpan(input.TimeSpan, context) }),
    };
};
const serializeAws_restJson1JobInputs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1JobInput(entry, context);
    });
};
const serializeAws_restJson1JobWatermark = (input, context) => {
    return {
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
        ...(input.InputKey !== undefined && input.InputKey !== null && { InputKey: input.InputKey }),
        ...(input.PresetWatermarkId !== undefined &&
            input.PresetWatermarkId !== null && { PresetWatermarkId: input.PresetWatermarkId }),
    };
};
const serializeAws_restJson1JobWatermarks = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1JobWatermark(entry, context);
    });
};
const serializeAws_restJson1Notifications = (input, context) => {
    return {
        ...(input.Completed !== undefined && input.Completed !== null && { Completed: input.Completed }),
        ...(input.Error !== undefined && input.Error !== null && { Error: input.Error }),
        ...(input.Progressing !== undefined && input.Progressing !== null && { Progressing: input.Progressing }),
        ...(input.Warning !== undefined && input.Warning !== null && { Warning: input.Warning }),
    };
};
const serializeAws_restJson1OutputKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Permission = (input, context) => {
    return {
        ...(input.Access !== undefined &&
            input.Access !== null && { Access: serializeAws_restJson1AccessControls(input.Access, context) }),
        ...(input.Grantee !== undefined && input.Grantee !== null && { Grantee: input.Grantee }),
        ...(input.GranteeType !== undefined && input.GranteeType !== null && { GranteeType: input.GranteeType }),
    };
};
const serializeAws_restJson1Permissions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Permission(entry, context);
    });
};
const serializeAws_restJson1PipelineOutputConfig = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && { Permissions: serializeAws_restJson1Permissions(input.Permissions, context) }),
        ...(input.StorageClass !== undefined && input.StorageClass !== null && { StorageClass: input.StorageClass }),
    };
};
const serializeAws_restJson1PlayReadyDrm = (input, context) => {
    return {
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.InitializationVector !== undefined &&
            input.InitializationVector !== null && { InitializationVector: input.InitializationVector }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.KeyMd5 !== undefined && input.KeyMd5 !== null && { KeyMd5: input.KeyMd5 }),
        ...(input.LicenseAcquisitionUrl !== undefined &&
            input.LicenseAcquisitionUrl !== null && { LicenseAcquisitionUrl: input.LicenseAcquisitionUrl }),
    };
};
const serializeAws_restJson1PresetWatermark = (input, context) => {
    return {
        ...(input.HorizontalAlign !== undefined &&
            input.HorizontalAlign !== null && { HorizontalAlign: input.HorizontalAlign }),
        ...(input.HorizontalOffset !== undefined &&
            input.HorizontalOffset !== null && { HorizontalOffset: input.HorizontalOffset }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.MaxHeight !== undefined && input.MaxHeight !== null && { MaxHeight: input.MaxHeight }),
        ...(input.MaxWidth !== undefined && input.MaxWidth !== null && { MaxWidth: input.MaxWidth }),
        ...(input.Opacity !== undefined && input.Opacity !== null && { Opacity: input.Opacity }),
        ...(input.SizingPolicy !== undefined && input.SizingPolicy !== null && { SizingPolicy: input.SizingPolicy }),
        ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
        ...(input.VerticalAlign !== undefined && input.VerticalAlign !== null && { VerticalAlign: input.VerticalAlign }),
        ...(input.VerticalOffset !== undefined &&
            input.VerticalOffset !== null && { VerticalOffset: input.VerticalOffset }),
    };
};
const serializeAws_restJson1PresetWatermarks = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1PresetWatermark(entry, context);
    });
};
const serializeAws_restJson1SnsTopics = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Thumbnails = (input, context) => {
    return {
        ...(input.AspectRatio !== undefined && input.AspectRatio !== null && { AspectRatio: input.AspectRatio }),
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
        ...(input.MaxHeight !== undefined && input.MaxHeight !== null && { MaxHeight: input.MaxHeight }),
        ...(input.MaxWidth !== undefined && input.MaxWidth !== null && { MaxWidth: input.MaxWidth }),
        ...(input.PaddingPolicy !== undefined && input.PaddingPolicy !== null && { PaddingPolicy: input.PaddingPolicy }),
        ...(input.Resolution !== undefined && input.Resolution !== null && { Resolution: input.Resolution }),
        ...(input.SizingPolicy !== undefined && input.SizingPolicy !== null && { SizingPolicy: input.SizingPolicy }),
    };
};
const serializeAws_restJson1TimeSpan = (input, context) => {
    return {
        ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
        ...(input.StartTime !== undefined && input.StartTime !== null && { StartTime: input.StartTime }),
    };
};
const serializeAws_restJson1UserMetadata = (input, context) => {
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
const serializeAws_restJson1VideoParameters = (input, context) => {
    return {
        ...(input.AspectRatio !== undefined && input.AspectRatio !== null && { AspectRatio: input.AspectRatio }),
        ...(input.BitRate !== undefined && input.BitRate !== null && { BitRate: input.BitRate }),
        ...(input.Codec !== undefined && input.Codec !== null && { Codec: input.Codec }),
        ...(input.CodecOptions !== undefined &&
            input.CodecOptions !== null && { CodecOptions: serializeAws_restJson1CodecOptions(input.CodecOptions, context) }),
        ...(input.DisplayAspectRatio !== undefined &&
            input.DisplayAspectRatio !== null && { DisplayAspectRatio: input.DisplayAspectRatio }),
        ...(input.FixedGOP !== undefined && input.FixedGOP !== null && { FixedGOP: input.FixedGOP }),
        ...(input.FrameRate !== undefined && input.FrameRate !== null && { FrameRate: input.FrameRate }),
        ...(input.KeyframesMaxDist !== undefined &&
            input.KeyframesMaxDist !== null && { KeyframesMaxDist: input.KeyframesMaxDist }),
        ...(input.MaxFrameRate !== undefined && input.MaxFrameRate !== null && { MaxFrameRate: input.MaxFrameRate }),
        ...(input.MaxHeight !== undefined && input.MaxHeight !== null && { MaxHeight: input.MaxHeight }),
        ...(input.MaxWidth !== undefined && input.MaxWidth !== null && { MaxWidth: input.MaxWidth }),
        ...(input.PaddingPolicy !== undefined && input.PaddingPolicy !== null && { PaddingPolicy: input.PaddingPolicy }),
        ...(input.Resolution !== undefined && input.Resolution !== null && { Resolution: input.Resolution }),
        ...(input.SizingPolicy !== undefined && input.SizingPolicy !== null && { SizingPolicy: input.SizingPolicy }),
        ...(input.Watermarks !== undefined &&
            input.Watermarks !== null && { Watermarks: serializeAws_restJson1PresetWatermarks(input.Watermarks, context) }),
    };
};
const deserializeAws_restJson1AccessControls = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Artwork = (output, context) => {
    return {
        AlbumArtFormat: output.AlbumArtFormat !== undefined && output.AlbumArtFormat !== null ? output.AlbumArtFormat : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        InputKey: output.InputKey !== undefined && output.InputKey !== null ? output.InputKey : undefined,
        MaxHeight: output.MaxHeight !== undefined && output.MaxHeight !== null ? output.MaxHeight : undefined,
        MaxWidth: output.MaxWidth !== undefined && output.MaxWidth !== null ? output.MaxWidth : undefined,
        PaddingPolicy: output.PaddingPolicy !== undefined && output.PaddingPolicy !== null ? output.PaddingPolicy : undefined,
        SizingPolicy: output.SizingPolicy !== undefined && output.SizingPolicy !== null ? output.SizingPolicy : undefined,
    };
};
const deserializeAws_restJson1Artworks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Artwork(entry, context);
    });
};
const deserializeAws_restJson1AudioCodecOptions = (output, context) => {
    return {
        BitDepth: output.BitDepth !== undefined && output.BitDepth !== null ? output.BitDepth : undefined,
        BitOrder: output.BitOrder !== undefined && output.BitOrder !== null ? output.BitOrder : undefined,
        Profile: output.Profile !== undefined && output.Profile !== null ? output.Profile : undefined,
        Signed: output.Signed !== undefined && output.Signed !== null ? output.Signed : undefined,
    };
};
const deserializeAws_restJson1AudioParameters = (output, context) => {
    return {
        AudioPackingMode: output.AudioPackingMode !== undefined && output.AudioPackingMode !== null ? output.AudioPackingMode : undefined,
        BitRate: output.BitRate !== undefined && output.BitRate !== null ? output.BitRate : undefined,
        Channels: output.Channels !== undefined && output.Channels !== null ? output.Channels : undefined,
        Codec: output.Codec !== undefined && output.Codec !== null ? output.Codec : undefined,
        CodecOptions: output.CodecOptions !== undefined && output.CodecOptions !== null
            ? deserializeAws_restJson1AudioCodecOptions(output.CodecOptions, context)
            : undefined,
        SampleRate: output.SampleRate !== undefined && output.SampleRate !== null ? output.SampleRate : undefined,
    };
};
const deserializeAws_restJson1CaptionFormat = (output, context) => {
    return {
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        Pattern: output.Pattern !== undefined && output.Pattern !== null ? output.Pattern : undefined,
    };
};
const deserializeAws_restJson1CaptionFormats = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CaptionFormat(entry, context);
    });
};
const deserializeAws_restJson1Captions = (output, context) => {
    return {
        CaptionFormats: output.CaptionFormats !== undefined && output.CaptionFormats !== null
            ? deserializeAws_restJson1CaptionFormats(output.CaptionFormats, context)
            : undefined,
        CaptionSources: output.CaptionSources !== undefined && output.CaptionSources !== null
            ? deserializeAws_restJson1CaptionSources(output.CaptionSources, context)
            : undefined,
        MergePolicy: output.MergePolicy !== undefined && output.MergePolicy !== null ? output.MergePolicy : undefined,
    };
};
const deserializeAws_restJson1CaptionSource = (output, context) => {
    return {
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
        Language: output.Language !== undefined && output.Language !== null ? output.Language : undefined,
        TimeOffset: output.TimeOffset !== undefined && output.TimeOffset !== null ? output.TimeOffset : undefined,
    };
};
const deserializeAws_restJson1CaptionSources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CaptionSource(entry, context);
    });
};
const deserializeAws_restJson1Clip = (output, context) => {
    return {
        TimeSpan: output.TimeSpan !== undefined && output.TimeSpan !== null
            ? deserializeAws_restJson1TimeSpan(output.TimeSpan, context)
            : undefined,
    };
};
const deserializeAws_restJson1CodecOptions = (output, context) => {
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
const deserializeAws_restJson1Composition = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Clip(entry, context);
    });
};
const deserializeAws_restJson1DetectedProperties = (output, context) => {
    return {
        DurationMillis: output.DurationMillis !== undefined && output.DurationMillis !== null ? output.DurationMillis : undefined,
        FileSize: output.FileSize !== undefined && output.FileSize !== null ? output.FileSize : undefined,
        FrameRate: output.FrameRate !== undefined && output.FrameRate !== null ? output.FrameRate : undefined,
        Height: output.Height !== undefined && output.Height !== null ? output.Height : undefined,
        Width: output.Width !== undefined && output.Width !== null ? output.Width : undefined,
    };
};
const deserializeAws_restJson1Encryption = (output, context) => {
    return {
        InitializationVector: output.InitializationVector !== undefined && output.InitializationVector !== null
            ? output.InitializationVector
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        KeyMd5: output.KeyMd5 !== undefined && output.KeyMd5 !== null ? output.KeyMd5 : undefined,
        Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
    };
};
const deserializeAws_restJson1ExceptionMessages = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1HlsContentProtection = (output, context) => {
    return {
        InitializationVector: output.InitializationVector !== undefined && output.InitializationVector !== null
            ? output.InitializationVector
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        KeyMd5: output.KeyMd5 !== undefined && output.KeyMd5 !== null ? output.KeyMd5 : undefined,
        KeyStoragePolicy: output.KeyStoragePolicy !== undefined && output.KeyStoragePolicy !== null ? output.KeyStoragePolicy : undefined,
        LicenseAcquisitionUrl: output.LicenseAcquisitionUrl !== undefined && output.LicenseAcquisitionUrl !== null
            ? output.LicenseAcquisitionUrl
            : undefined,
        Method: output.Method !== undefined && output.Method !== null ? output.Method : undefined,
    };
};
const deserializeAws_restJson1InputCaptions = (output, context) => {
    return {
        CaptionSources: output.CaptionSources !== undefined && output.CaptionSources !== null
            ? deserializeAws_restJson1CaptionSources(output.CaptionSources, context)
            : undefined,
        MergePolicy: output.MergePolicy !== undefined && output.MergePolicy !== null ? output.MergePolicy : undefined,
    };
};
const deserializeAws_restJson1Job = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Input: output.Input !== undefined && output.Input !== null
            ? deserializeAws_restJson1JobInput(output.Input, context)
            : undefined,
        Inputs: output.Inputs !== undefined && output.Inputs !== null
            ? deserializeAws_restJson1JobInputs(output.Inputs, context)
            : undefined,
        Output: output.Output !== undefined && output.Output !== null
            ? deserializeAws_restJson1JobOutput(output.Output, context)
            : undefined,
        OutputKeyPrefix: output.OutputKeyPrefix !== undefined && output.OutputKeyPrefix !== null ? output.OutputKeyPrefix : undefined,
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_restJson1JobOutputs(output.Outputs, context)
            : undefined,
        PipelineId: output.PipelineId !== undefined && output.PipelineId !== null ? output.PipelineId : undefined,
        Playlists: output.Playlists !== undefined && output.Playlists !== null
            ? deserializeAws_restJson1Playlists(output.Playlists, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Timing: output.Timing !== undefined && output.Timing !== null
            ? deserializeAws_restJson1Timing(output.Timing, context)
            : undefined,
        UserMetadata: output.UserMetadata !== undefined && output.UserMetadata !== null
            ? deserializeAws_restJson1UserMetadata(output.UserMetadata, context)
            : undefined,
    };
};
const deserializeAws_restJson1JobAlbumArt = (output, context) => {
    return {
        Artwork: output.Artwork !== undefined && output.Artwork !== null
            ? deserializeAws_restJson1Artworks(output.Artwork, context)
            : undefined,
        MergePolicy: output.MergePolicy !== undefined && output.MergePolicy !== null ? output.MergePolicy : undefined,
    };
};
const deserializeAws_restJson1JobInput = (output, context) => {
    return {
        AspectRatio: output.AspectRatio !== undefined && output.AspectRatio !== null ? output.AspectRatio : undefined,
        Container: output.Container !== undefined && output.Container !== null ? output.Container : undefined,
        DetectedProperties: output.DetectedProperties !== undefined && output.DetectedProperties !== null
            ? deserializeAws_restJson1DetectedProperties(output.DetectedProperties, context)
            : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        FrameRate: output.FrameRate !== undefined && output.FrameRate !== null ? output.FrameRate : undefined,
        InputCaptions: output.InputCaptions !== undefined && output.InputCaptions !== null
            ? deserializeAws_restJson1InputCaptions(output.InputCaptions, context)
            : undefined,
        Interlaced: output.Interlaced !== undefined && output.Interlaced !== null ? output.Interlaced : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Resolution: output.Resolution !== undefined && output.Resolution !== null ? output.Resolution : undefined,
        TimeSpan: output.TimeSpan !== undefined && output.TimeSpan !== null
            ? deserializeAws_restJson1TimeSpan(output.TimeSpan, context)
            : undefined,
    };
};
const deserializeAws_restJson1JobInputs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobInput(entry, context);
    });
};
const deserializeAws_restJson1JobOutput = (output, context) => {
    return {
        AlbumArt: output.AlbumArt !== undefined && output.AlbumArt !== null
            ? deserializeAws_restJson1JobAlbumArt(output.AlbumArt, context)
            : undefined,
        AppliedColorSpaceConversion: output.AppliedColorSpaceConversion !== undefined && output.AppliedColorSpaceConversion !== null
            ? output.AppliedColorSpaceConversion
            : undefined,
        Captions: output.Captions !== undefined && output.Captions !== null
            ? deserializeAws_restJson1Captions(output.Captions, context)
            : undefined,
        Composition: output.Composition !== undefined && output.Composition !== null
            ? deserializeAws_restJson1Composition(output.Composition, context)
            : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        DurationMillis: output.DurationMillis !== undefined && output.DurationMillis !== null ? output.DurationMillis : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        FileSize: output.FileSize !== undefined && output.FileSize !== null ? output.FileSize : undefined,
        FrameRate: output.FrameRate !== undefined && output.FrameRate !== null ? output.FrameRate : undefined,
        Height: output.Height !== undefined && output.Height !== null ? output.Height : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        PresetId: output.PresetId !== undefined && output.PresetId !== null ? output.PresetId : undefined,
        Rotate: output.Rotate !== undefined && output.Rotate !== null ? output.Rotate : undefined,
        SegmentDuration: output.SegmentDuration !== undefined && output.SegmentDuration !== null ? output.SegmentDuration : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusDetail: output.StatusDetail !== undefined && output.StatusDetail !== null ? output.StatusDetail : undefined,
        ThumbnailEncryption: output.ThumbnailEncryption !== undefined && output.ThumbnailEncryption !== null
            ? deserializeAws_restJson1Encryption(output.ThumbnailEncryption, context)
            : undefined,
        ThumbnailPattern: output.ThumbnailPattern !== undefined && output.ThumbnailPattern !== null ? output.ThumbnailPattern : undefined,
        Watermarks: output.Watermarks !== undefined && output.Watermarks !== null
            ? deserializeAws_restJson1JobWatermarks(output.Watermarks, context)
            : undefined,
        Width: output.Width !== undefined && output.Width !== null ? output.Width : undefined,
    };
};
const deserializeAws_restJson1JobOutputs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobOutput(entry, context);
    });
};
const deserializeAws_restJson1Jobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Job(entry, context);
    });
};
const deserializeAws_restJson1JobWatermark = (output, context) => {
    return {
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        InputKey: output.InputKey !== undefined && output.InputKey !== null ? output.InputKey : undefined,
        PresetWatermarkId: output.PresetWatermarkId !== undefined && output.PresetWatermarkId !== null
            ? output.PresetWatermarkId
            : undefined,
    };
};
const deserializeAws_restJson1JobWatermarks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobWatermark(entry, context);
    });
};
const deserializeAws_restJson1Notifications = (output, context) => {
    return {
        Completed: output.Completed !== undefined && output.Completed !== null ? output.Completed : undefined,
        Error: output.Error !== undefined && output.Error !== null ? output.Error : undefined,
        Progressing: output.Progressing !== undefined && output.Progressing !== null ? output.Progressing : undefined,
        Warning: output.Warning !== undefined && output.Warning !== null ? output.Warning : undefined,
    };
};
const deserializeAws_restJson1OutputKeys = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Permission = (output, context) => {
    return {
        Access: output.Access !== undefined && output.Access !== null
            ? deserializeAws_restJson1AccessControls(output.Access, context)
            : undefined,
        Grantee: output.Grantee !== undefined && output.Grantee !== null ? output.Grantee : undefined,
        GranteeType: output.GranteeType !== undefined && output.GranteeType !== null ? output.GranteeType : undefined,
    };
};
const deserializeAws_restJson1Permissions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Permission(entry, context);
    });
};
const deserializeAws_restJson1Pipeline = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AwsKmsKeyArn: output.AwsKmsKeyArn !== undefined && output.AwsKmsKeyArn !== null ? output.AwsKmsKeyArn : undefined,
        ContentConfig: output.ContentConfig !== undefined && output.ContentConfig !== null
            ? deserializeAws_restJson1PipelineOutputConfig(output.ContentConfig, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InputBucket: output.InputBucket !== undefined && output.InputBucket !== null ? output.InputBucket : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Notifications: output.Notifications !== undefined && output.Notifications !== null
            ? deserializeAws_restJson1Notifications(output.Notifications, context)
            : undefined,
        OutputBucket: output.OutputBucket !== undefined && output.OutputBucket !== null ? output.OutputBucket : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        ThumbnailConfig: output.ThumbnailConfig !== undefined && output.ThumbnailConfig !== null
            ? deserializeAws_restJson1PipelineOutputConfig(output.ThumbnailConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1PipelineOutputConfig = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_restJson1Permissions(output.Permissions, context)
            : undefined,
        StorageClass: output.StorageClass !== undefined && output.StorageClass !== null ? output.StorageClass : undefined,
    };
};
const deserializeAws_restJson1Pipelines = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Pipeline(entry, context);
    });
};
const deserializeAws_restJson1Playlist = (output, context) => {
    return {
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        HlsContentProtection: output.HlsContentProtection !== undefined && output.HlsContentProtection !== null
            ? deserializeAws_restJson1HlsContentProtection(output.HlsContentProtection, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OutputKeys: output.OutputKeys !== undefined && output.OutputKeys !== null
            ? deserializeAws_restJson1OutputKeys(output.OutputKeys, context)
            : undefined,
        PlayReadyDrm: output.PlayReadyDrm !== undefined && output.PlayReadyDrm !== null
            ? deserializeAws_restJson1PlayReadyDrm(output.PlayReadyDrm, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusDetail: output.StatusDetail !== undefined && output.StatusDetail !== null ? output.StatusDetail : undefined,
    };
};
const deserializeAws_restJson1Playlists = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Playlist(entry, context);
    });
};
const deserializeAws_restJson1PlayReadyDrm = (output, context) => {
    return {
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        InitializationVector: output.InitializationVector !== undefined && output.InitializationVector !== null
            ? output.InitializationVector
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        KeyMd5: output.KeyMd5 !== undefined && output.KeyMd5 !== null ? output.KeyMd5 : undefined,
        LicenseAcquisitionUrl: output.LicenseAcquisitionUrl !== undefined && output.LicenseAcquisitionUrl !== null
            ? output.LicenseAcquisitionUrl
            : undefined,
    };
};
const deserializeAws_restJson1Preset = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Audio: output.Audio !== undefined && output.Audio !== null
            ? deserializeAws_restJson1AudioParameters(output.Audio, context)
            : undefined,
        Container: output.Container !== undefined && output.Container !== null ? output.Container : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Thumbnails: output.Thumbnails !== undefined && output.Thumbnails !== null
            ? deserializeAws_restJson1Thumbnails(output.Thumbnails, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Video: output.Video !== undefined && output.Video !== null
            ? deserializeAws_restJson1VideoParameters(output.Video, context)
            : undefined,
    };
};
const deserializeAws_restJson1Presets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Preset(entry, context);
    });
};
const deserializeAws_restJson1PresetWatermark = (output, context) => {
    return {
        HorizontalAlign: output.HorizontalAlign !== undefined && output.HorizontalAlign !== null ? output.HorizontalAlign : undefined,
        HorizontalOffset: output.HorizontalOffset !== undefined && output.HorizontalOffset !== null ? output.HorizontalOffset : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        MaxHeight: output.MaxHeight !== undefined && output.MaxHeight !== null ? output.MaxHeight : undefined,
        MaxWidth: output.MaxWidth !== undefined && output.MaxWidth !== null ? output.MaxWidth : undefined,
        Opacity: output.Opacity !== undefined && output.Opacity !== null ? output.Opacity : undefined,
        SizingPolicy: output.SizingPolicy !== undefined && output.SizingPolicy !== null ? output.SizingPolicy : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
        VerticalAlign: output.VerticalAlign !== undefined && output.VerticalAlign !== null ? output.VerticalAlign : undefined,
        VerticalOffset: output.VerticalOffset !== undefined && output.VerticalOffset !== null ? output.VerticalOffset : undefined,
    };
};
const deserializeAws_restJson1PresetWatermarks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PresetWatermark(entry, context);
    });
};
const deserializeAws_restJson1Thumbnails = (output, context) => {
    return {
        AspectRatio: output.AspectRatio !== undefined && output.AspectRatio !== null ? output.AspectRatio : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        MaxHeight: output.MaxHeight !== undefined && output.MaxHeight !== null ? output.MaxHeight : undefined,
        MaxWidth: output.MaxWidth !== undefined && output.MaxWidth !== null ? output.MaxWidth : undefined,
        PaddingPolicy: output.PaddingPolicy !== undefined && output.PaddingPolicy !== null ? output.PaddingPolicy : undefined,
        Resolution: output.Resolution !== undefined && output.Resolution !== null ? output.Resolution : undefined,
        SizingPolicy: output.SizingPolicy !== undefined && output.SizingPolicy !== null ? output.SizingPolicy : undefined,
    };
};
const deserializeAws_restJson1TimeSpan = (output, context) => {
    return {
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    };
};
const deserializeAws_restJson1Timing = (output, context) => {
    return {
        FinishTimeMillis: output.FinishTimeMillis !== undefined && output.FinishTimeMillis !== null ? output.FinishTimeMillis : undefined,
        StartTimeMillis: output.StartTimeMillis !== undefined && output.StartTimeMillis !== null ? output.StartTimeMillis : undefined,
        SubmitTimeMillis: output.SubmitTimeMillis !== undefined && output.SubmitTimeMillis !== null ? output.SubmitTimeMillis : undefined,
    };
};
const deserializeAws_restJson1UserMetadata = (output, context) => {
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
const deserializeAws_restJson1VideoParameters = (output, context) => {
    return {
        AspectRatio: output.AspectRatio !== undefined && output.AspectRatio !== null ? output.AspectRatio : undefined,
        BitRate: output.BitRate !== undefined && output.BitRate !== null ? output.BitRate : undefined,
        Codec: output.Codec !== undefined && output.Codec !== null ? output.Codec : undefined,
        CodecOptions: output.CodecOptions !== undefined && output.CodecOptions !== null
            ? deserializeAws_restJson1CodecOptions(output.CodecOptions, context)
            : undefined,
        DisplayAspectRatio: output.DisplayAspectRatio !== undefined && output.DisplayAspectRatio !== null
            ? output.DisplayAspectRatio
            : undefined,
        FixedGOP: output.FixedGOP !== undefined && output.FixedGOP !== null ? output.FixedGOP : undefined,
        FrameRate: output.FrameRate !== undefined && output.FrameRate !== null ? output.FrameRate : undefined,
        KeyframesMaxDist: output.KeyframesMaxDist !== undefined && output.KeyframesMaxDist !== null ? output.KeyframesMaxDist : undefined,
        MaxFrameRate: output.MaxFrameRate !== undefined && output.MaxFrameRate !== null ? output.MaxFrameRate : undefined,
        MaxHeight: output.MaxHeight !== undefined && output.MaxHeight !== null ? output.MaxHeight : undefined,
        MaxWidth: output.MaxWidth !== undefined && output.MaxWidth !== null ? output.MaxWidth : undefined,
        PaddingPolicy: output.PaddingPolicy !== undefined && output.PaddingPolicy !== null ? output.PaddingPolicy : undefined,
        Resolution: output.Resolution !== undefined && output.Resolution !== null ? output.Resolution : undefined,
        SizingPolicy: output.SizingPolicy !== undefined && output.SizingPolicy !== null ? output.SizingPolicy : undefined,
        Watermarks: output.Watermarks !== undefined && output.Watermarks !== null
            ? deserializeAws_restJson1PresetWatermarks(output.Watermarks, context)
            : undefined,
    };
};
const deserializeAws_restJson1Warning = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1Warnings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Warning(entry, context);
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
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
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
//# sourceMappingURL=Aws_restJson1.js.map