"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateEnvironmentCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1PublishMetricsCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListEnvironmentsCommand = exports.deserializeAws_restJson1GetEnvironmentCommand = exports.deserializeAws_restJson1DeleteEnvironmentCommand = exports.deserializeAws_restJson1CreateWebLoginTokenCommand = exports.deserializeAws_restJson1CreateEnvironmentCommand = exports.deserializeAws_restJson1CreateCliTokenCommand = exports.serializeAws_restJson1UpdateEnvironmentCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1PublishMetricsCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListEnvironmentsCommand = exports.serializeAws_restJson1GetEnvironmentCommand = exports.serializeAws_restJson1DeleteEnvironmentCommand = exports.serializeAws_restJson1CreateWebLoginTokenCommand = exports.serializeAws_restJson1CreateEnvironmentCommand = exports.serializeAws_restJson1CreateCliTokenCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateCliTokenCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clitoken/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "env." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateCliTokenCommand = serializeAws_restJson1CreateCliTokenCommand;
const serializeAws_restJson1CreateEnvironmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/environments/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AirflowConfigurationOptions !== undefined &&
            input.AirflowConfigurationOptions !== null && {
            AirflowConfigurationOptions: serializeAws_restJson1AirflowConfigurationOptions(input.AirflowConfigurationOptions, context),
        }),
        ...(input.AirflowVersion !== undefined &&
            input.AirflowVersion !== null && { AirflowVersion: input.AirflowVersion }),
        ...(input.DagS3Path !== undefined && input.DagS3Path !== null && { DagS3Path: input.DagS3Path }),
        ...(input.EnvironmentClass !== undefined &&
            input.EnvironmentClass !== null && { EnvironmentClass: input.EnvironmentClass }),
        ...(input.ExecutionRoleArn !== undefined &&
            input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
        ...(input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey }),
        ...(input.LoggingConfiguration !== undefined &&
            input.LoggingConfiguration !== null && {
            LoggingConfiguration: serializeAws_restJson1LoggingConfigurationInput(input.LoggingConfiguration, context),
        }),
        ...(input.MaxWorkers !== undefined && input.MaxWorkers !== null && { MaxWorkers: input.MaxWorkers }),
        ...(input.MinWorkers !== undefined && input.MinWorkers !== null && { MinWorkers: input.MinWorkers }),
        ...(input.NetworkConfiguration !== undefined &&
            input.NetworkConfiguration !== null && {
            NetworkConfiguration: serializeAws_restJson1NetworkConfiguration(input.NetworkConfiguration, context),
        }),
        ...(input.PluginsS3ObjectVersion !== undefined &&
            input.PluginsS3ObjectVersion !== null && { PluginsS3ObjectVersion: input.PluginsS3ObjectVersion }),
        ...(input.PluginsS3Path !== undefined && input.PluginsS3Path !== null && { PluginsS3Path: input.PluginsS3Path }),
        ...(input.RequirementsS3ObjectVersion !== undefined &&
            input.RequirementsS3ObjectVersion !== null && { RequirementsS3ObjectVersion: input.RequirementsS3ObjectVersion }),
        ...(input.RequirementsS3Path !== undefined &&
            input.RequirementsS3Path !== null && { RequirementsS3Path: input.RequirementsS3Path }),
        ...(input.Schedulers !== undefined && input.Schedulers !== null && { Schedulers: input.Schedulers }),
        ...(input.SourceBucketArn !== undefined &&
            input.SourceBucketArn !== null && { SourceBucketArn: input.SourceBucketArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.WebserverAccessMode !== undefined &&
            input.WebserverAccessMode !== null && { WebserverAccessMode: input.WebserverAccessMode }),
        ...(input.WeeklyMaintenanceWindowStart !== undefined &&
            input.WeeklyMaintenanceWindowStart !== null && {
            WeeklyMaintenanceWindowStart: input.WeeklyMaintenanceWindowStart,
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "api." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateEnvironmentCommand = serializeAws_restJson1CreateEnvironmentCommand;
const serializeAws_restJson1CreateWebLoginTokenCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/webtoken/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "env." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateWebLoginTokenCommand = serializeAws_restJson1CreateWebLoginTokenCommand;
const serializeAws_restJson1DeleteEnvironmentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/environments/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "api." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteEnvironmentCommand = serializeAws_restJson1DeleteEnvironmentCommand;
const serializeAws_restJson1GetEnvironmentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/environments/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "api." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetEnvironmentCommand = serializeAws_restJson1GetEnvironmentCommand;
const serializeAws_restJson1ListEnvironmentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/environments";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "api." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListEnvironmentsCommand = serializeAws_restJson1ListEnvironmentsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "api." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1PublishMetricsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/metrics/environments/{EnvironmentName}";
    if (input.EnvironmentName !== undefined) {
        const labelValue = input.EnvironmentName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EnvironmentName.");
        }
        resolvedPath = resolvedPath.replace("{EnvironmentName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EnvironmentName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MetricData !== undefined &&
            input.MetricData !== null && { MetricData: serializeAws_restJson1MetricData(input.MetricData, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "ops." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PublishMetricsCommand = serializeAws_restJson1PublishMetricsCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "api." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    const query = {
        ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
    };
    let body;
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "api." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateEnvironmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/environments/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AirflowConfigurationOptions !== undefined &&
            input.AirflowConfigurationOptions !== null && {
            AirflowConfigurationOptions: serializeAws_restJson1AirflowConfigurationOptions(input.AirflowConfigurationOptions, context),
        }),
        ...(input.AirflowVersion !== undefined &&
            input.AirflowVersion !== null && { AirflowVersion: input.AirflowVersion }),
        ...(input.DagS3Path !== undefined && input.DagS3Path !== null && { DagS3Path: input.DagS3Path }),
        ...(input.EnvironmentClass !== undefined &&
            input.EnvironmentClass !== null && { EnvironmentClass: input.EnvironmentClass }),
        ...(input.ExecutionRoleArn !== undefined &&
            input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
        ...(input.LoggingConfiguration !== undefined &&
            input.LoggingConfiguration !== null && {
            LoggingConfiguration: serializeAws_restJson1LoggingConfigurationInput(input.LoggingConfiguration, context),
        }),
        ...(input.MaxWorkers !== undefined && input.MaxWorkers !== null && { MaxWorkers: input.MaxWorkers }),
        ...(input.MinWorkers !== undefined && input.MinWorkers !== null && { MinWorkers: input.MinWorkers }),
        ...(input.NetworkConfiguration !== undefined &&
            input.NetworkConfiguration !== null && {
            NetworkConfiguration: serializeAws_restJson1UpdateNetworkConfigurationInput(input.NetworkConfiguration, context),
        }),
        ...(input.PluginsS3ObjectVersion !== undefined &&
            input.PluginsS3ObjectVersion !== null && { PluginsS3ObjectVersion: input.PluginsS3ObjectVersion }),
        ...(input.PluginsS3Path !== undefined && input.PluginsS3Path !== null && { PluginsS3Path: input.PluginsS3Path }),
        ...(input.RequirementsS3ObjectVersion !== undefined &&
            input.RequirementsS3ObjectVersion !== null && { RequirementsS3ObjectVersion: input.RequirementsS3ObjectVersion }),
        ...(input.RequirementsS3Path !== undefined &&
            input.RequirementsS3Path !== null && { RequirementsS3Path: input.RequirementsS3Path }),
        ...(input.Schedulers !== undefined && input.Schedulers !== null && { Schedulers: input.Schedulers }),
        ...(input.SourceBucketArn !== undefined &&
            input.SourceBucketArn !== null && { SourceBucketArn: input.SourceBucketArn }),
        ...(input.WebserverAccessMode !== undefined &&
            input.WebserverAccessMode !== null && { WebserverAccessMode: input.WebserverAccessMode }),
        ...(input.WeeklyMaintenanceWindowStart !== undefined &&
            input.WeeklyMaintenanceWindowStart !== null && {
            WeeklyMaintenanceWindowStart: input.WeeklyMaintenanceWindowStart,
        }),
    });
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "api." + resolvedHostname;
        if (!protocol_http_1.isValidHostname(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateEnvironmentCommand = serializeAws_restJson1UpdateEnvironmentCommand;
const deserializeAws_restJson1CreateCliTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCliTokenCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CliToken: undefined,
        WebServerHostname: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CliToken !== undefined && data.CliToken !== null) {
        contents.CliToken = data.CliToken;
    }
    if (data.WebServerHostname !== undefined && data.WebServerHostname !== null) {
        contents.WebServerHostname = data.WebServerHostname;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCliTokenCommand = deserializeAws_restJson1CreateCliTokenCommand;
const deserializeAws_restJson1CreateCliTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.mwaa#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateEnvironmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateEnvironmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateEnvironmentCommand = deserializeAws_restJson1CreateEnvironmentCommand;
const deserializeAws_restJson1CreateEnvironmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.mwaa#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mwaa#ValidationException":
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
const deserializeAws_restJson1CreateWebLoginTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateWebLoginTokenCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        WebServerHostname: undefined,
        WebToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.WebServerHostname !== undefined && data.WebServerHostname !== null) {
        contents.WebServerHostname = data.WebServerHostname;
    }
    if (data.WebToken !== undefined && data.WebToken !== null) {
        contents.WebToken = data.WebToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWebLoginTokenCommand = deserializeAws_restJson1CreateWebLoginTokenCommand;
const deserializeAws_restJson1CreateWebLoginTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.mwaa#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.mwaa#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mwaa#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mwaa#ValidationException":
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
const deserializeAws_restJson1DeleteEnvironmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteEnvironmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteEnvironmentCommand = deserializeAws_restJson1DeleteEnvironmentCommand;
const deserializeAws_restJson1DeleteEnvironmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.mwaa#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mwaa#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mwaa#ValidationException":
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
const deserializeAws_restJson1GetEnvironmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEnvironmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Environment: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Environment !== undefined && data.Environment !== null) {
        contents.Environment = deserializeAws_restJson1Environment(data.Environment, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEnvironmentCommand = deserializeAws_restJson1GetEnvironmentCommand;
const deserializeAws_restJson1GetEnvironmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.mwaa#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mwaa#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mwaa#ValidationException":
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
const deserializeAws_restJson1ListEnvironmentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListEnvironmentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Environments: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Environments !== undefined && data.Environments !== null) {
        contents.Environments = deserializeAws_restJson1EnvironmentList(data.Environments, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListEnvironmentsCommand = deserializeAws_restJson1ListEnvironmentsCommand;
const deserializeAws_restJson1ListEnvironmentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.mwaa#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mwaa#ValidationException":
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.mwaa#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mwaa#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mwaa#ValidationException":
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
const deserializeAws_restJson1PublishMetricsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PublishMetricsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PublishMetricsCommand = deserializeAws_restJson1PublishMetricsCommand;
const deserializeAws_restJson1PublishMetricsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.mwaa#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mwaa#ValidationException":
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
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.mwaa#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mwaa#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mwaa#ValidationException":
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
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.mwaa#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mwaa#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mwaa#ValidationException":
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
const deserializeAws_restJson1UpdateEnvironmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateEnvironmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateEnvironmentCommand = deserializeAws_restJson1UpdateEnvironmentCommand;
const deserializeAws_restJson1UpdateEnvironmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.mwaa#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mwaa#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mwaa#ValidationException":
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
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
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
const serializeAws_restJson1AirflowConfigurationOptions = (input, context) => {
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
const serializeAws_restJson1Dimension = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1Dimensions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Dimension(entry, context);
    });
};
const serializeAws_restJson1LoggingConfigurationInput = (input, context) => {
    return {
        ...(input.DagProcessingLogs !== undefined &&
            input.DagProcessingLogs !== null && {
            DagProcessingLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.DagProcessingLogs, context),
        }),
        ...(input.SchedulerLogs !== undefined &&
            input.SchedulerLogs !== null && {
            SchedulerLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.SchedulerLogs, context),
        }),
        ...(input.TaskLogs !== undefined &&
            input.TaskLogs !== null && {
            TaskLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.TaskLogs, context),
        }),
        ...(input.WebserverLogs !== undefined &&
            input.WebserverLogs !== null && {
            WebserverLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.WebserverLogs, context),
        }),
        ...(input.WorkerLogs !== undefined &&
            input.WorkerLogs !== null && {
            WorkerLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.WorkerLogs, context),
        }),
    };
};
const serializeAws_restJson1MetricData = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MetricDatum(entry, context);
    });
};
const serializeAws_restJson1MetricDatum = (input, context) => {
    return {
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_restJson1Dimensions(input.Dimensions, context) }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
        ...(input.StatisticValues !== undefined &&
            input.StatisticValues !== null && {
            StatisticValues: serializeAws_restJson1StatisticSet(input.StatisticValues, context),
        }),
        ...(input.Timestamp !== undefined &&
            input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
        ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1ModuleLoggingConfigurationInput = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
    };
};
const serializeAws_restJson1NetworkConfiguration = (input, context) => {
    return {
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_restJson1SecurityGroupList(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1SubnetList(input.SubnetIds, context) }),
    };
};
const serializeAws_restJson1SecurityGroupList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1StatisticSet = (input, context) => {
    return {
        ...(input.Maximum !== undefined && input.Maximum !== null && { Maximum: input.Maximum }),
        ...(input.Minimum !== undefined && input.Minimum !== null && { Minimum: input.Minimum }),
        ...(input.SampleCount !== undefined && input.SampleCount !== null && { SampleCount: input.SampleCount }),
        ...(input.Sum !== undefined && input.Sum !== null && { Sum: input.Sum }),
    };
};
const serializeAws_restJson1SubnetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagMap = (input, context) => {
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
const serializeAws_restJson1UpdateNetworkConfigurationInput = (input, context) => {
    return {
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_restJson1SecurityGroupList(input.SecurityGroupIds, context),
        }),
    };
};
const deserializeAws_restJson1AirflowConfigurationOptions = (output, context) => {
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
const deserializeAws_restJson1Environment = (output, context) => {
    return {
        AirflowConfigurationOptions: output.AirflowConfigurationOptions !== undefined && output.AirflowConfigurationOptions !== null
            ? deserializeAws_restJson1AirflowConfigurationOptions(output.AirflowConfigurationOptions, context)
            : undefined,
        AirflowVersion: output.AirflowVersion !== undefined && output.AirflowVersion !== null ? output.AirflowVersion : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DagS3Path: output.DagS3Path !== undefined && output.DagS3Path !== null ? output.DagS3Path : undefined,
        EnvironmentClass: output.EnvironmentClass !== undefined && output.EnvironmentClass !== null ? output.EnvironmentClass : undefined,
        ExecutionRoleArn: output.ExecutionRoleArn !== undefined && output.ExecutionRoleArn !== null ? output.ExecutionRoleArn : undefined,
        KmsKey: output.KmsKey !== undefined && output.KmsKey !== null ? output.KmsKey : undefined,
        LastUpdate: output.LastUpdate !== undefined && output.LastUpdate !== null
            ? deserializeAws_restJson1LastUpdate(output.LastUpdate, context)
            : undefined,
        LoggingConfiguration: output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
            ? deserializeAws_restJson1LoggingConfiguration(output.LoggingConfiguration, context)
            : undefined,
        MaxWorkers: output.MaxWorkers !== undefined && output.MaxWorkers !== null ? output.MaxWorkers : undefined,
        MinWorkers: output.MinWorkers !== undefined && output.MinWorkers !== null ? output.MinWorkers : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NetworkConfiguration: output.NetworkConfiguration !== undefined && output.NetworkConfiguration !== null
            ? deserializeAws_restJson1NetworkConfiguration(output.NetworkConfiguration, context)
            : undefined,
        PluginsS3ObjectVersion: output.PluginsS3ObjectVersion !== undefined && output.PluginsS3ObjectVersion !== null
            ? output.PluginsS3ObjectVersion
            : undefined,
        PluginsS3Path: output.PluginsS3Path !== undefined && output.PluginsS3Path !== null ? output.PluginsS3Path : undefined,
        RequirementsS3ObjectVersion: output.RequirementsS3ObjectVersion !== undefined && output.RequirementsS3ObjectVersion !== null
            ? output.RequirementsS3ObjectVersion
            : undefined,
        RequirementsS3Path: output.RequirementsS3Path !== undefined && output.RequirementsS3Path !== null
            ? output.RequirementsS3Path
            : undefined,
        Schedulers: output.Schedulers !== undefined && output.Schedulers !== null ? output.Schedulers : undefined,
        ServiceRoleArn: output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null ? output.ServiceRoleArn : undefined,
        SourceBucketArn: output.SourceBucketArn !== undefined && output.SourceBucketArn !== null ? output.SourceBucketArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        WebserverAccessMode: output.WebserverAccessMode !== undefined && output.WebserverAccessMode !== null
            ? output.WebserverAccessMode
            : undefined,
        WebserverUrl: output.WebserverUrl !== undefined && output.WebserverUrl !== null ? output.WebserverUrl : undefined,
        WeeklyMaintenanceWindowStart: output.WeeklyMaintenanceWindowStart !== undefined && output.WeeklyMaintenanceWindowStart !== null
            ? output.WeeklyMaintenanceWindowStart
            : undefined,
    };
};
const deserializeAws_restJson1EnvironmentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1LastUpdate = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1UpdateError(output.Error, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1LoggingConfiguration = (output, context) => {
    return {
        DagProcessingLogs: output.DagProcessingLogs !== undefined && output.DagProcessingLogs !== null
            ? deserializeAws_restJson1ModuleLoggingConfiguration(output.DagProcessingLogs, context)
            : undefined,
        SchedulerLogs: output.SchedulerLogs !== undefined && output.SchedulerLogs !== null
            ? deserializeAws_restJson1ModuleLoggingConfiguration(output.SchedulerLogs, context)
            : undefined,
        TaskLogs: output.TaskLogs !== undefined && output.TaskLogs !== null
            ? deserializeAws_restJson1ModuleLoggingConfiguration(output.TaskLogs, context)
            : undefined,
        WebserverLogs: output.WebserverLogs !== undefined && output.WebserverLogs !== null
            ? deserializeAws_restJson1ModuleLoggingConfiguration(output.WebserverLogs, context)
            : undefined,
        WorkerLogs: output.WorkerLogs !== undefined && output.WorkerLogs !== null
            ? deserializeAws_restJson1ModuleLoggingConfiguration(output.WorkerLogs, context)
            : undefined,
    };
};
const deserializeAws_restJson1ModuleLoggingConfiguration = (output, context) => {
    return {
        CloudWatchLogGroupArn: output.CloudWatchLogGroupArn !== undefined && output.CloudWatchLogGroupArn !== null
            ? output.CloudWatchLogGroupArn
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
    };
};
const deserializeAws_restJson1NetworkConfiguration = (output, context) => {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_restJson1SecurityGroupList(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_restJson1SubnetList(output.SubnetIds, context)
            : undefined,
    };
};
const deserializeAws_restJson1SecurityGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SubnetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TagMap = (output, context) => {
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
const deserializeAws_restJson1UpdateError = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
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