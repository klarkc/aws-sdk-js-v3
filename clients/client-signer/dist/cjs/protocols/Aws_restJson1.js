"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StartSigningJobCommand = exports.deserializeAws_restJson1RevokeSigningProfileCommand = exports.deserializeAws_restJson1RevokeSignatureCommand = exports.deserializeAws_restJson1RemoveProfilePermissionCommand = exports.deserializeAws_restJson1PutSigningProfileCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListSigningProfilesCommand = exports.deserializeAws_restJson1ListSigningPlatformsCommand = exports.deserializeAws_restJson1ListSigningJobsCommand = exports.deserializeAws_restJson1ListProfilePermissionsCommand = exports.deserializeAws_restJson1GetSigningProfileCommand = exports.deserializeAws_restJson1GetSigningPlatformCommand = exports.deserializeAws_restJson1DescribeSigningJobCommand = exports.deserializeAws_restJson1CancelSigningProfileCommand = exports.deserializeAws_restJson1AddProfilePermissionCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StartSigningJobCommand = exports.serializeAws_restJson1RevokeSigningProfileCommand = exports.serializeAws_restJson1RevokeSignatureCommand = exports.serializeAws_restJson1RemoveProfilePermissionCommand = exports.serializeAws_restJson1PutSigningProfileCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListSigningProfilesCommand = exports.serializeAws_restJson1ListSigningPlatformsCommand = exports.serializeAws_restJson1ListSigningJobsCommand = exports.serializeAws_restJson1ListProfilePermissionsCommand = exports.serializeAws_restJson1GetSigningProfileCommand = exports.serializeAws_restJson1GetSigningPlatformCommand = exports.serializeAws_restJson1DescribeSigningJobCommand = exports.serializeAws_restJson1CancelSigningProfileCommand = exports.serializeAws_restJson1AddProfilePermissionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AddProfilePermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/signing-profiles/{profileName}/permissions";
    if (input.profileName !== undefined) {
        const labelValue = input.profileName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profileName.");
        }
        resolvedPath = resolvedPath.replace("{profileName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profileName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.action !== undefined && input.action !== null && { action: input.action }),
        ...(input.principal !== undefined && input.principal !== null && { principal: input.principal }),
        ...(input.profileVersion !== undefined &&
            input.profileVersion !== null && { profileVersion: input.profileVersion }),
        ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
        ...(input.statementId !== undefined && input.statementId !== null && { statementId: input.statementId }),
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
exports.serializeAws_restJson1AddProfilePermissionCommand = serializeAws_restJson1AddProfilePermissionCommand;
const serializeAws_restJson1CancelSigningProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/signing-profiles/{profileName}";
    if (input.profileName !== undefined) {
        const labelValue = input.profileName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profileName.");
        }
        resolvedPath = resolvedPath.replace("{profileName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profileName.");
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
exports.serializeAws_restJson1CancelSigningProfileCommand = serializeAws_restJson1CancelSigningProfileCommand;
const serializeAws_restJson1DescribeSigningJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/signing-jobs/{jobId}";
    if (input.jobId !== undefined) {
        const labelValue = input.jobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: jobId.");
        }
        resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: jobId.");
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
exports.serializeAws_restJson1DescribeSigningJobCommand = serializeAws_restJson1DescribeSigningJobCommand;
const serializeAws_restJson1GetSigningPlatformCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/signing-platforms/{platformId}";
    if (input.platformId !== undefined) {
        const labelValue = input.platformId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: platformId.");
        }
        resolvedPath = resolvedPath.replace("{platformId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: platformId.");
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
exports.serializeAws_restJson1GetSigningPlatformCommand = serializeAws_restJson1GetSigningPlatformCommand;
const serializeAws_restJson1GetSigningProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/signing-profiles/{profileName}";
    if (input.profileName !== undefined) {
        const labelValue = input.profileName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profileName.");
        }
        resolvedPath = resolvedPath.replace("{profileName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profileName.");
    }
    const query = {
        ...(input.profileOwner !== undefined && { profileOwner: input.profileOwner }),
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
exports.serializeAws_restJson1GetSigningProfileCommand = serializeAws_restJson1GetSigningProfileCommand;
const serializeAws_restJson1ListProfilePermissionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/signing-profiles/{profileName}/permissions";
    if (input.profileName !== undefined) {
        const labelValue = input.profileName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profileName.");
        }
        resolvedPath = resolvedPath.replace("{profileName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profileName.");
    }
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListProfilePermissionsCommand = serializeAws_restJson1ListProfilePermissionsCommand;
const serializeAws_restJson1ListSigningJobsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/signing-jobs";
    const query = {
        ...(input.status !== undefined && { status: input.status }),
        ...(input.platformId !== undefined && { platformId: input.platformId }),
        ...(input.requestedBy !== undefined && { requestedBy: input.requestedBy }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.isRevoked !== undefined && { isRevoked: input.isRevoked.toString() }),
        ...(input.signatureExpiresBefore !== undefined && {
            signatureExpiresBefore: (input.signatureExpiresBefore.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.signatureExpiresAfter !== undefined && {
            signatureExpiresAfter: (input.signatureExpiresAfter.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.jobInvoker !== undefined && { jobInvoker: input.jobInvoker }),
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
exports.serializeAws_restJson1ListSigningJobsCommand = serializeAws_restJson1ListSigningJobsCommand;
const serializeAws_restJson1ListSigningPlatformsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/signing-platforms";
    const query = {
        ...(input.category !== undefined && { category: input.category }),
        ...(input.partner !== undefined && { partner: input.partner }),
        ...(input.target !== undefined && { target: input.target }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListSigningPlatformsCommand = serializeAws_restJson1ListSigningPlatformsCommand;
const serializeAws_restJson1ListSigningProfilesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/signing-profiles";
    const query = {
        ...(input.includeCanceled !== undefined && { includeCanceled: input.includeCanceled.toString() }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.platformId !== undefined && { platformId: input.platformId }),
        ...(input.statuses !== undefined && { statuses: (input.statuses || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1ListSigningProfilesCommand = serializeAws_restJson1ListSigningProfilesCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1PutSigningProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/signing-profiles/{profileName}";
    if (input.profileName !== undefined) {
        const labelValue = input.profileName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profileName.");
        }
        resolvedPath = resolvedPath.replace("{profileName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profileName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.overrides !== undefined &&
            input.overrides !== null && {
            overrides: serializeAws_restJson1SigningPlatformOverrides(input.overrides, context),
        }),
        ...(input.platformId !== undefined && input.platformId !== null && { platformId: input.platformId }),
        ...(input.signatureValidityPeriod !== undefined &&
            input.signatureValidityPeriod !== null && {
            signatureValidityPeriod: serializeAws_restJson1SignatureValidityPeriod(input.signatureValidityPeriod, context),
        }),
        ...(input.signingMaterial !== undefined &&
            input.signingMaterial !== null && {
            signingMaterial: serializeAws_restJson1SigningMaterial(input.signingMaterial, context),
        }),
        ...(input.signingParameters !== undefined &&
            input.signingParameters !== null && {
            signingParameters: serializeAws_restJson1SigningParameters(input.signingParameters, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1PutSigningProfileCommand = serializeAws_restJson1PutSigningProfileCommand;
const serializeAws_restJson1RemoveProfilePermissionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/signing-profiles/{profileName}/permissions/{statementId}";
    if (input.profileName !== undefined) {
        const labelValue = input.profileName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profileName.");
        }
        resolvedPath = resolvedPath.replace("{profileName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profileName.");
    }
    if (input.statementId !== undefined) {
        const labelValue = input.statementId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: statementId.");
        }
        resolvedPath = resolvedPath.replace("{statementId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: statementId.");
    }
    const query = {
        ...(input.revisionId !== undefined && { revisionId: input.revisionId }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1RemoveProfilePermissionCommand = serializeAws_restJson1RemoveProfilePermissionCommand;
const serializeAws_restJson1RevokeSignatureCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/signing-jobs/{jobId}/revoke";
    if (input.jobId !== undefined) {
        const labelValue = input.jobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: jobId.");
        }
        resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: jobId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.jobOwner !== undefined && input.jobOwner !== null && { jobOwner: input.jobOwner }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
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
exports.serializeAws_restJson1RevokeSignatureCommand = serializeAws_restJson1RevokeSignatureCommand;
const serializeAws_restJson1RevokeSigningProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/signing-profiles/{profileName}/revoke";
    if (input.profileName !== undefined) {
        const labelValue = input.profileName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profileName.");
        }
        resolvedPath = resolvedPath.replace("{profileName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profileName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.effectiveTime !== undefined &&
            input.effectiveTime !== null && { effectiveTime: Math.round(input.effectiveTime.getTime() / 1000) }),
        ...(input.profileVersion !== undefined &&
            input.profileVersion !== null && { profileVersion: input.profileVersion }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
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
exports.serializeAws_restJson1RevokeSigningProfileCommand = serializeAws_restJson1RevokeSigningProfileCommand;
const serializeAws_restJson1StartSigningJobCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/signing-jobs";
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.destination !== undefined &&
            input.destination !== null && { destination: serializeAws_restJson1Destination(input.destination, context) }),
        ...(input.profileName !== undefined && input.profileName !== null && { profileName: input.profileName }),
        ...(input.profileOwner !== undefined && input.profileOwner !== null && { profileOwner: input.profileOwner }),
        ...(input.source !== undefined &&
            input.source !== null && { source: serializeAws_restJson1Source(input.source, context) }),
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
exports.serializeAws_restJson1StartSigningJobCommand = serializeAws_restJson1StartSigningJobCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {
        ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1AddProfilePermissionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddProfilePermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddProfilePermissionCommand = deserializeAws_restJson1AddProfilePermissionCommand;
const deserializeAws_restJson1AddProfilePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.signer#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLimitExceededException":
        case "com.amazonaws.signer#ServiceLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.signer#ValidationException":
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
const deserializeAws_restJson1CancelSigningProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelSigningProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelSigningProfileCommand = deserializeAws_restJson1CancelSigningProfileCommand;
const deserializeAws_restJson1CancelSigningProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSigningJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSigningJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        completedAt: undefined,
        createdAt: undefined,
        jobId: undefined,
        jobInvoker: undefined,
        jobOwner: undefined,
        overrides: undefined,
        platformDisplayName: undefined,
        platformId: undefined,
        profileName: undefined,
        profileVersion: undefined,
        requestedBy: undefined,
        revocationRecord: undefined,
        signatureExpiresAt: undefined,
        signedObject: undefined,
        signingMaterial: undefined,
        signingParameters: undefined,
        source: undefined,
        status: undefined,
        statusReason: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.completedAt !== undefined && data.completedAt !== null) {
        contents.completedAt = new Date(Math.round(data.completedAt * 1000));
    }
    if (data.createdAt !== undefined && data.createdAt !== null) {
        contents.createdAt = new Date(Math.round(data.createdAt * 1000));
    }
    if (data.jobId !== undefined && data.jobId !== null) {
        contents.jobId = data.jobId;
    }
    if (data.jobInvoker !== undefined && data.jobInvoker !== null) {
        contents.jobInvoker = data.jobInvoker;
    }
    if (data.jobOwner !== undefined && data.jobOwner !== null) {
        contents.jobOwner = data.jobOwner;
    }
    if (data.overrides !== undefined && data.overrides !== null) {
        contents.overrides = deserializeAws_restJson1SigningPlatformOverrides(data.overrides, context);
    }
    if (data.platformDisplayName !== undefined && data.platformDisplayName !== null) {
        contents.platformDisplayName = data.platformDisplayName;
    }
    if (data.platformId !== undefined && data.platformId !== null) {
        contents.platformId = data.platformId;
    }
    if (data.profileName !== undefined && data.profileName !== null) {
        contents.profileName = data.profileName;
    }
    if (data.profileVersion !== undefined && data.profileVersion !== null) {
        contents.profileVersion = data.profileVersion;
    }
    if (data.requestedBy !== undefined && data.requestedBy !== null) {
        contents.requestedBy = data.requestedBy;
    }
    if (data.revocationRecord !== undefined && data.revocationRecord !== null) {
        contents.revocationRecord = deserializeAws_restJson1SigningJobRevocationRecord(data.revocationRecord, context);
    }
    if (data.signatureExpiresAt !== undefined && data.signatureExpiresAt !== null) {
        contents.signatureExpiresAt = new Date(Math.round(data.signatureExpiresAt * 1000));
    }
    if (data.signedObject !== undefined && data.signedObject !== null) {
        contents.signedObject = deserializeAws_restJson1SignedObject(data.signedObject, context);
    }
    if (data.signingMaterial !== undefined && data.signingMaterial !== null) {
        contents.signingMaterial = deserializeAws_restJson1SigningMaterial(data.signingMaterial, context);
    }
    if (data.signingParameters !== undefined && data.signingParameters !== null) {
        contents.signingParameters = deserializeAws_restJson1SigningParameters(data.signingParameters, context);
    }
    if (data.source !== undefined && data.source !== null) {
        contents.source = deserializeAws_restJson1Source(data.source, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.statusReason !== undefined && data.statusReason !== null) {
        contents.statusReason = data.statusReason;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSigningJobCommand = deserializeAws_restJson1DescribeSigningJobCommand;
const deserializeAws_restJson1DescribeSigningJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetSigningPlatformCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSigningPlatformCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        category: undefined,
        displayName: undefined,
        maxSizeInMB: undefined,
        partner: undefined,
        platformId: undefined,
        revocationSupported: undefined,
        signingConfiguration: undefined,
        signingImageFormat: undefined,
        target: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.category !== undefined && data.category !== null) {
        contents.category = data.category;
    }
    if (data.displayName !== undefined && data.displayName !== null) {
        contents.displayName = data.displayName;
    }
    if (data.maxSizeInMB !== undefined && data.maxSizeInMB !== null) {
        contents.maxSizeInMB = data.maxSizeInMB;
    }
    if (data.partner !== undefined && data.partner !== null) {
        contents.partner = data.partner;
    }
    if (data.platformId !== undefined && data.platformId !== null) {
        contents.platformId = data.platformId;
    }
    if (data.revocationSupported !== undefined && data.revocationSupported !== null) {
        contents.revocationSupported = data.revocationSupported;
    }
    if (data.signingConfiguration !== undefined && data.signingConfiguration !== null) {
        contents.signingConfiguration = deserializeAws_restJson1SigningConfiguration(data.signingConfiguration, context);
    }
    if (data.signingImageFormat !== undefined && data.signingImageFormat !== null) {
        contents.signingImageFormat = deserializeAws_restJson1SigningImageFormat(data.signingImageFormat, context);
    }
    if (data.target !== undefined && data.target !== null) {
        contents.target = data.target;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSigningPlatformCommand = deserializeAws_restJson1GetSigningPlatformCommand;
const deserializeAws_restJson1GetSigningPlatformCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetSigningProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSigningProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        overrides: undefined,
        platformDisplayName: undefined,
        platformId: undefined,
        profileName: undefined,
        profileVersion: undefined,
        profileVersionArn: undefined,
        revocationRecord: undefined,
        signatureValidityPeriod: undefined,
        signingMaterial: undefined,
        signingParameters: undefined,
        status: undefined,
        statusReason: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.overrides !== undefined && data.overrides !== null) {
        contents.overrides = deserializeAws_restJson1SigningPlatformOverrides(data.overrides, context);
    }
    if (data.platformDisplayName !== undefined && data.platformDisplayName !== null) {
        contents.platformDisplayName = data.platformDisplayName;
    }
    if (data.platformId !== undefined && data.platformId !== null) {
        contents.platformId = data.platformId;
    }
    if (data.profileName !== undefined && data.profileName !== null) {
        contents.profileName = data.profileName;
    }
    if (data.profileVersion !== undefined && data.profileVersion !== null) {
        contents.profileVersion = data.profileVersion;
    }
    if (data.profileVersionArn !== undefined && data.profileVersionArn !== null) {
        contents.profileVersionArn = data.profileVersionArn;
    }
    if (data.revocationRecord !== undefined && data.revocationRecord !== null) {
        contents.revocationRecord = deserializeAws_restJson1SigningProfileRevocationRecord(data.revocationRecord, context);
    }
    if (data.signatureValidityPeriod !== undefined && data.signatureValidityPeriod !== null) {
        contents.signatureValidityPeriod = deserializeAws_restJson1SignatureValidityPeriod(data.signatureValidityPeriod, context);
    }
    if (data.signingMaterial !== undefined && data.signingMaterial !== null) {
        contents.signingMaterial = deserializeAws_restJson1SigningMaterial(data.signingMaterial, context);
    }
    if (data.signingParameters !== undefined && data.signingParameters !== null) {
        contents.signingParameters = deserializeAws_restJson1SigningParameters(data.signingParameters, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.statusReason !== undefined && data.statusReason !== null) {
        contents.statusReason = data.statusReason;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSigningProfileCommand = deserializeAws_restJson1GetSigningProfileCommand;
const deserializeAws_restJson1GetSigningProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListProfilePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProfilePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        permissions: undefined,
        policySizeBytes: undefined,
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.permissions !== undefined && data.permissions !== null) {
        contents.permissions = deserializeAws_restJson1Permissions(data.permissions, context);
    }
    if (data.policySizeBytes !== undefined && data.policySizeBytes !== null) {
        contents.policySizeBytes = data.policySizeBytes;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProfilePermissionsCommand = deserializeAws_restJson1ListProfilePermissionsCommand;
const deserializeAws_restJson1ListProfilePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.signer#ValidationException":
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
const deserializeAws_restJson1ListSigningJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSigningJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        jobs: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.jobs !== undefined && data.jobs !== null) {
        contents.jobs = deserializeAws_restJson1SigningJobs(data.jobs, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSigningJobsCommand = deserializeAws_restJson1ListSigningJobsCommand;
const deserializeAws_restJson1ListSigningJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.signer#ValidationException":
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
const deserializeAws_restJson1ListSigningPlatformsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSigningPlatformsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        platforms: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.platforms !== undefined && data.platforms !== null) {
        contents.platforms = deserializeAws_restJson1SigningPlatforms(data.platforms, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSigningPlatformsCommand = deserializeAws_restJson1ListSigningPlatformsCommand;
const deserializeAws_restJson1ListSigningPlatformsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.signer#ValidationException":
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
const deserializeAws_restJson1ListSigningProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSigningProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        profiles: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.profiles !== undefined && data.profiles !== null) {
        contents.profiles = deserializeAws_restJson1SigningProfiles(data.profiles, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSigningProfilesCommand = deserializeAws_restJson1ListSigningProfilesCommand;
const deserializeAws_restJson1ListSigningProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
        case "BadRequestException":
        case "com.amazonaws.signer#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.signer#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutSigningProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutSigningProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        profileVersion: undefined,
        profileVersionArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.profileVersion !== undefined && data.profileVersion !== null) {
        contents.profileVersion = data.profileVersion;
    }
    if (data.profileVersionArn !== undefined && data.profileVersionArn !== null) {
        contents.profileVersionArn = data.profileVersionArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutSigningProfileCommand = deserializeAws_restJson1PutSigningProfileCommand;
const deserializeAws_restJson1PutSigningProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.signer#ValidationException":
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
const deserializeAws_restJson1RemoveProfilePermissionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveProfilePermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveProfilePermissionCommand = deserializeAws_restJson1RemoveProfilePermissionCommand;
const deserializeAws_restJson1RemoveProfilePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.signer#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.signer#ValidationException":
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
const deserializeAws_restJson1RevokeSignatureCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RevokeSignatureCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RevokeSignatureCommand = deserializeAws_restJson1RevokeSignatureCommand;
const deserializeAws_restJson1RevokeSignatureCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.signer#ValidationException":
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
const deserializeAws_restJson1RevokeSigningProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RevokeSigningProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RevokeSigningProfileCommand = deserializeAws_restJson1RevokeSigningProfileCommand;
const deserializeAws_restJson1RevokeSigningProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.signer#ValidationException":
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
const deserializeAws_restJson1StartSigningJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartSigningJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        jobId: undefined,
        jobOwner: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.jobId !== undefined && data.jobId !== null) {
        contents.jobId = data.jobId;
    }
    if (data.jobOwner !== undefined && data.jobOwner !== null) {
        contents.jobOwner = data.jobOwner;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartSigningJobCommand = deserializeAws_restJson1StartSigningJobCommand;
const deserializeAws_restJson1StartSigningJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.signer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.signer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.signer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.signer#ValidationException":
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
        case "BadRequestException":
        case "com.amazonaws.signer#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.signer#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.signer#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceErrorException":
        case "com.amazonaws.signer#InternalServiceErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.signer#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.signer#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServiceErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
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
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
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
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1Destination = (input, context) => {
    return {
        ...(input.s3 !== undefined && input.s3 !== null && { s3: serializeAws_restJson1S3Destination(input.s3, context) }),
    };
};
const serializeAws_restJson1S3Destination = (input, context) => {
    return {
        ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
        ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
    };
};
const serializeAws_restJson1S3Source = (input, context) => {
    return {
        ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_restJson1SignatureValidityPeriod = (input, context) => {
    return {
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1SigningConfigurationOverrides = (input, context) => {
    return {
        ...(input.encryptionAlgorithm !== undefined &&
            input.encryptionAlgorithm !== null && { encryptionAlgorithm: input.encryptionAlgorithm }),
        ...(input.hashAlgorithm !== undefined && input.hashAlgorithm !== null && { hashAlgorithm: input.hashAlgorithm }),
    };
};
const serializeAws_restJson1SigningMaterial = (input, context) => {
    return {
        ...(input.certificateArn !== undefined &&
            input.certificateArn !== null && { certificateArn: input.certificateArn }),
    };
};
const serializeAws_restJson1SigningParameters = (input, context) => {
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
const serializeAws_restJson1SigningPlatformOverrides = (input, context) => {
    return {
        ...(input.signingConfiguration !== undefined &&
            input.signingConfiguration !== null && {
            signingConfiguration: serializeAws_restJson1SigningConfigurationOverrides(input.signingConfiguration, context),
        }),
        ...(input.signingImageFormat !== undefined &&
            input.signingImageFormat !== null && { signingImageFormat: input.signingImageFormat }),
    };
};
const serializeAws_restJson1Source = (input, context) => {
    return {
        ...(input.s3 !== undefined && input.s3 !== null && { s3: serializeAws_restJson1S3Source(input.s3, context) }),
    };
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
const deserializeAws_restJson1EncryptionAlgorithmOptions = (output, context) => {
    return {
        allowedValues: output.allowedValues !== undefined && output.allowedValues !== null
            ? deserializeAws_restJson1EncryptionAlgorithms(output.allowedValues, context)
            : undefined,
        defaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
    };
};
const deserializeAws_restJson1EncryptionAlgorithms = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1HashAlgorithmOptions = (output, context) => {
    return {
        allowedValues: output.allowedValues !== undefined && output.allowedValues !== null
            ? deserializeAws_restJson1HashAlgorithms(output.allowedValues, context)
            : undefined,
        defaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
    };
};
const deserializeAws_restJson1HashAlgorithms = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ImageFormats = (output, context) => {
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
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
        principal: output.principal !== undefined && output.principal !== null ? output.principal : undefined,
        profileVersion: output.profileVersion !== undefined && output.profileVersion !== null ? output.profileVersion : undefined,
        statementId: output.statementId !== undefined && output.statementId !== null ? output.statementId : undefined,
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
const deserializeAws_restJson1S3SignedObject = (output, context) => {
    return {
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
    };
};
const deserializeAws_restJson1S3Source = (output, context) => {
    return {
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1SignatureValidityPeriod = (output, context) => {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1SignedObject = (output, context) => {
    return {
        s3: output.s3 !== undefined && output.s3 !== null
            ? deserializeAws_restJson1S3SignedObject(output.s3, context)
            : undefined,
    };
};
const deserializeAws_restJson1SigningConfiguration = (output, context) => {
    return {
        encryptionAlgorithmOptions: output.encryptionAlgorithmOptions !== undefined && output.encryptionAlgorithmOptions !== null
            ? deserializeAws_restJson1EncryptionAlgorithmOptions(output.encryptionAlgorithmOptions, context)
            : undefined,
        hashAlgorithmOptions: output.hashAlgorithmOptions !== undefined && output.hashAlgorithmOptions !== null
            ? deserializeAws_restJson1HashAlgorithmOptions(output.hashAlgorithmOptions, context)
            : undefined,
    };
};
const deserializeAws_restJson1SigningConfigurationOverrides = (output, context) => {
    return {
        encryptionAlgorithm: output.encryptionAlgorithm !== undefined && output.encryptionAlgorithm !== null
            ? output.encryptionAlgorithm
            : undefined,
        hashAlgorithm: output.hashAlgorithm !== undefined && output.hashAlgorithm !== null ? output.hashAlgorithm : undefined,
    };
};
const deserializeAws_restJson1SigningImageFormat = (output, context) => {
    return {
        defaultFormat: output.defaultFormat !== undefined && output.defaultFormat !== null ? output.defaultFormat : undefined,
        supportedFormats: output.supportedFormats !== undefined && output.supportedFormats !== null
            ? deserializeAws_restJson1ImageFormats(output.supportedFormats, context)
            : undefined,
    };
};
const deserializeAws_restJson1SigningJob = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        isRevoked: output.isRevoked !== undefined && output.isRevoked !== null ? output.isRevoked : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        jobInvoker: output.jobInvoker !== undefined && output.jobInvoker !== null ? output.jobInvoker : undefined,
        jobOwner: output.jobOwner !== undefined && output.jobOwner !== null ? output.jobOwner : undefined,
        platformDisplayName: output.platformDisplayName !== undefined && output.platformDisplayName !== null
            ? output.platformDisplayName
            : undefined,
        platformId: output.platformId !== undefined && output.platformId !== null ? output.platformId : undefined,
        profileName: output.profileName !== undefined && output.profileName !== null ? output.profileName : undefined,
        profileVersion: output.profileVersion !== undefined && output.profileVersion !== null ? output.profileVersion : undefined,
        signatureExpiresAt: output.signatureExpiresAt !== undefined && output.signatureExpiresAt !== null
            ? new Date(Math.round(output.signatureExpiresAt * 1000))
            : undefined,
        signedObject: output.signedObject !== undefined && output.signedObject !== null
            ? deserializeAws_restJson1SignedObject(output.signedObject, context)
            : undefined,
        signingMaterial: output.signingMaterial !== undefined && output.signingMaterial !== null
            ? deserializeAws_restJson1SigningMaterial(output.signingMaterial, context)
            : undefined,
        source: output.source !== undefined && output.source !== null
            ? deserializeAws_restJson1Source(output.source, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1SigningJobRevocationRecord = (output, context) => {
    return {
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        revokedAt: output.revokedAt !== undefined && output.revokedAt !== null
            ? new Date(Math.round(output.revokedAt * 1000))
            : undefined,
        revokedBy: output.revokedBy !== undefined && output.revokedBy !== null ? output.revokedBy : undefined,
    };
};
const deserializeAws_restJson1SigningJobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SigningJob(entry, context);
    });
};
const deserializeAws_restJson1SigningMaterial = (output, context) => {
    return {
        certificateArn: output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
    };
};
const deserializeAws_restJson1SigningParameters = (output, context) => {
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
const deserializeAws_restJson1SigningPlatform = (output, context) => {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        maxSizeInMB: output.maxSizeInMB !== undefined && output.maxSizeInMB !== null ? output.maxSizeInMB : undefined,
        partner: output.partner !== undefined && output.partner !== null ? output.partner : undefined,
        platformId: output.platformId !== undefined && output.platformId !== null ? output.platformId : undefined,
        revocationSupported: output.revocationSupported !== undefined && output.revocationSupported !== null
            ? output.revocationSupported
            : undefined,
        signingConfiguration: output.signingConfiguration !== undefined && output.signingConfiguration !== null
            ? deserializeAws_restJson1SigningConfiguration(output.signingConfiguration, context)
            : undefined,
        signingImageFormat: output.signingImageFormat !== undefined && output.signingImageFormat !== null
            ? deserializeAws_restJson1SigningImageFormat(output.signingImageFormat, context)
            : undefined,
        target: output.target !== undefined && output.target !== null ? output.target : undefined,
    };
};
const deserializeAws_restJson1SigningPlatformOverrides = (output, context) => {
    return {
        signingConfiguration: output.signingConfiguration !== undefined && output.signingConfiguration !== null
            ? deserializeAws_restJson1SigningConfigurationOverrides(output.signingConfiguration, context)
            : undefined,
        signingImageFormat: output.signingImageFormat !== undefined && output.signingImageFormat !== null
            ? output.signingImageFormat
            : undefined,
    };
};
const deserializeAws_restJson1SigningPlatforms = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SigningPlatform(entry, context);
    });
};
const deserializeAws_restJson1SigningProfile = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        platformDisplayName: output.platformDisplayName !== undefined && output.platformDisplayName !== null
            ? output.platformDisplayName
            : undefined,
        platformId: output.platformId !== undefined && output.platformId !== null ? output.platformId : undefined,
        profileName: output.profileName !== undefined && output.profileName !== null ? output.profileName : undefined,
        profileVersion: output.profileVersion !== undefined && output.profileVersion !== null ? output.profileVersion : undefined,
        profileVersionArn: output.profileVersionArn !== undefined && output.profileVersionArn !== null
            ? output.profileVersionArn
            : undefined,
        signatureValidityPeriod: output.signatureValidityPeriod !== undefined && output.signatureValidityPeriod !== null
            ? deserializeAws_restJson1SignatureValidityPeriod(output.signatureValidityPeriod, context)
            : undefined,
        signingMaterial: output.signingMaterial !== undefined && output.signingMaterial !== null
            ? deserializeAws_restJson1SigningMaterial(output.signingMaterial, context)
            : undefined,
        signingParameters: output.signingParameters !== undefined && output.signingParameters !== null
            ? deserializeAws_restJson1SigningParameters(output.signingParameters, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1SigningProfileRevocationRecord = (output, context) => {
    return {
        revocationEffectiveFrom: output.revocationEffectiveFrom !== undefined && output.revocationEffectiveFrom !== null
            ? new Date(Math.round(output.revocationEffectiveFrom * 1000))
            : undefined,
        revokedAt: output.revokedAt !== undefined && output.revokedAt !== null
            ? new Date(Math.round(output.revokedAt * 1000))
            : undefined,
        revokedBy: output.revokedBy !== undefined && output.revokedBy !== null ? output.revokedBy : undefined,
    };
};
const deserializeAws_restJson1SigningProfiles = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SigningProfile(entry, context);
    });
};
const deserializeAws_restJson1Source = (output, context) => {
    return {
        s3: output.s3 !== undefined && output.s3 !== null ? deserializeAws_restJson1S3Source(output.s3, context) : undefined,
    };
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