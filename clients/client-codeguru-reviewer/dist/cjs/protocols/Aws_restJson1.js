"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1PutRecommendationFeedbackCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListRepositoryAssociationsCommand = exports.deserializeAws_restJson1ListRecommendationsCommand = exports.deserializeAws_restJson1ListRecommendationFeedbackCommand = exports.deserializeAws_restJson1ListCodeReviewsCommand = exports.deserializeAws_restJson1DisassociateRepositoryCommand = exports.deserializeAws_restJson1DescribeRepositoryAssociationCommand = exports.deserializeAws_restJson1DescribeRecommendationFeedbackCommand = exports.deserializeAws_restJson1DescribeCodeReviewCommand = exports.deserializeAws_restJson1CreateCodeReviewCommand = exports.deserializeAws_restJson1AssociateRepositoryCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1PutRecommendationFeedbackCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListRepositoryAssociationsCommand = exports.serializeAws_restJson1ListRecommendationsCommand = exports.serializeAws_restJson1ListRecommendationFeedbackCommand = exports.serializeAws_restJson1ListCodeReviewsCommand = exports.serializeAws_restJson1DisassociateRepositoryCommand = exports.serializeAws_restJson1DescribeRepositoryAssociationCommand = exports.serializeAws_restJson1DescribeRecommendationFeedbackCommand = exports.serializeAws_restJson1DescribeCodeReviewCommand = exports.serializeAws_restJson1CreateCodeReviewCommand = exports.serializeAws_restJson1AssociateRepositoryCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AssociateRepositoryCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/associations";
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.KMSKeyDetails !== undefined &&
            input.KMSKeyDetails !== null && {
            KMSKeyDetails: serializeAws_restJson1KMSKeyDetails(input.KMSKeyDetails, context),
        }),
        ...(input.Repository !== undefined &&
            input.Repository !== null && { Repository: serializeAws_restJson1Repository(input.Repository, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1AssociateRepositoryCommand = serializeAws_restJson1AssociateRepositoryCommand;
const serializeAws_restJson1CreateCodeReviewCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/codereviews";
    let body;
    body = JSON.stringify({
        ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RepositoryAssociationArn !== undefined &&
            input.RepositoryAssociationArn !== null && { RepositoryAssociationArn: input.RepositoryAssociationArn }),
        ...(input.Type !== undefined &&
            input.Type !== null && { Type: serializeAws_restJson1CodeReviewType(input.Type, context) }),
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
exports.serializeAws_restJson1CreateCodeReviewCommand = serializeAws_restJson1CreateCodeReviewCommand;
const serializeAws_restJson1DescribeCodeReviewCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/codereviews/{CodeReviewArn}";
    if (input.CodeReviewArn !== undefined) {
        const labelValue = input.CodeReviewArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
        }
        resolvedPath = resolvedPath.replace("{CodeReviewArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CodeReviewArn.");
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
exports.serializeAws_restJson1DescribeCodeReviewCommand = serializeAws_restJson1DescribeCodeReviewCommand;
const serializeAws_restJson1DescribeRecommendationFeedbackCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/feedback/{CodeReviewArn}";
    if (input.CodeReviewArn !== undefined) {
        const labelValue = input.CodeReviewArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
        }
        resolvedPath = resolvedPath.replace("{CodeReviewArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CodeReviewArn.");
    }
    const query = {
        ...(input.RecommendationId !== undefined && { RecommendationId: input.RecommendationId }),
        ...(input.UserId !== undefined && { UserId: input.UserId }),
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
exports.serializeAws_restJson1DescribeRecommendationFeedbackCommand = serializeAws_restJson1DescribeRecommendationFeedbackCommand;
const serializeAws_restJson1DescribeRepositoryAssociationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/associations/{AssociationArn}";
    if (input.AssociationArn !== undefined) {
        const labelValue = input.AssociationArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssociationArn.");
        }
        resolvedPath = resolvedPath.replace("{AssociationArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssociationArn.");
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
exports.serializeAws_restJson1DescribeRepositoryAssociationCommand = serializeAws_restJson1DescribeRepositoryAssociationCommand;
const serializeAws_restJson1DisassociateRepositoryCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/associations/{AssociationArn}";
    if (input.AssociationArn !== undefined) {
        const labelValue = input.AssociationArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssociationArn.");
        }
        resolvedPath = resolvedPath.replace("{AssociationArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssociationArn.");
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
exports.serializeAws_restJson1DisassociateRepositoryCommand = serializeAws_restJson1DisassociateRepositoryCommand;
const serializeAws_restJson1ListCodeReviewsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/codereviews";
    const query = {
        ...(input.ProviderTypes !== undefined && { ProviderTypes: (input.ProviderTypes || []).map((_entry) => _entry) }),
        ...(input.States !== undefined && { States: (input.States || []).map((_entry) => _entry) }),
        ...(input.RepositoryNames !== undefined && {
            RepositoryNames: (input.RepositoryNames || []).map((_entry) => _entry),
        }),
        ...(input.Type !== undefined && { Type: input.Type }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListCodeReviewsCommand = serializeAws_restJson1ListCodeReviewsCommand;
const serializeAws_restJson1ListRecommendationFeedbackCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/feedback/{CodeReviewArn}/RecommendationFeedback";
    if (input.CodeReviewArn !== undefined) {
        const labelValue = input.CodeReviewArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
        }
        resolvedPath = resolvedPath.replace("{CodeReviewArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CodeReviewArn.");
    }
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
        ...(input.UserIds !== undefined && { UserIds: (input.UserIds || []).map((_entry) => _entry) }),
        ...(input.RecommendationIds !== undefined && {
            RecommendationIds: (input.RecommendationIds || []).map((_entry) => _entry),
        }),
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
exports.serializeAws_restJson1ListRecommendationFeedbackCommand = serializeAws_restJson1ListRecommendationFeedbackCommand;
const serializeAws_restJson1ListRecommendationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/codereviews/{CodeReviewArn}/Recommendations";
    if (input.CodeReviewArn !== undefined) {
        const labelValue = input.CodeReviewArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CodeReviewArn.");
        }
        resolvedPath = resolvedPath.replace("{CodeReviewArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CodeReviewArn.");
    }
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListRecommendationsCommand = serializeAws_restJson1ListRecommendationsCommand;
const serializeAws_restJson1ListRepositoryAssociationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/associations";
    const query = {
        ...(input.ProviderTypes !== undefined && { ProviderType: (input.ProviderTypes || []).map((_entry) => _entry) }),
        ...(input.States !== undefined && { State: (input.States || []).map((_entry) => _entry) }),
        ...(input.Names !== undefined && { Name: (input.Names || []).map((_entry) => _entry) }),
        ...(input.Owners !== undefined && { Owner: (input.Owners || []).map((_entry) => _entry) }),
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListRepositoryAssociationsCommand = serializeAws_restJson1ListRepositoryAssociationsCommand;
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
const serializeAws_restJson1PutRecommendationFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/feedback";
    let body;
    body = JSON.stringify({
        ...(input.CodeReviewArn !== undefined && input.CodeReviewArn !== null && { CodeReviewArn: input.CodeReviewArn }),
        ...(input.Reactions !== undefined &&
            input.Reactions !== null && { Reactions: serializeAws_restJson1Reactions(input.Reactions, context) }),
        ...(input.RecommendationId !== undefined &&
            input.RecommendationId !== null && { RecommendationId: input.RecommendationId }),
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
exports.serializeAws_restJson1PutRecommendationFeedbackCommand = serializeAws_restJson1PutRecommendationFeedbackCommand;
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
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
        ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
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
const deserializeAws_restJson1AssociateRepositoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateRepositoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RepositoryAssociation: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RepositoryAssociation !== undefined && data.RepositoryAssociation !== null) {
        contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateRepositoryCommand = deserializeAws_restJson1AssociateRepositoryCommand;
const deserializeAws_restJson1AssociateRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codegurureviewer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codegurureviewer#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1CreateCodeReviewCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCodeReviewCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeReview: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeReview !== undefined && data.CodeReview !== null) {
        contents.CodeReview = deserializeAws_restJson1CodeReview(data.CodeReview, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCodeReviewCommand = deserializeAws_restJson1CreateCodeReviewCommand;
const deserializeAws_restJson1CreateCodeReviewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codegurureviewer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codegurureviewer#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1DescribeCodeReviewCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeCodeReviewCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeReview: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeReview !== undefined && data.CodeReview !== null) {
        contents.CodeReview = deserializeAws_restJson1CodeReview(data.CodeReview, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeCodeReviewCommand = deserializeAws_restJson1DescribeCodeReviewCommand;
const deserializeAws_restJson1DescribeCodeReviewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codegurureviewer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1DescribeRecommendationFeedbackCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRecommendationFeedbackCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RecommendationFeedback: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RecommendationFeedback !== undefined && data.RecommendationFeedback !== null) {
        contents.RecommendationFeedback = deserializeAws_restJson1RecommendationFeedback(data.RecommendationFeedback, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRecommendationFeedbackCommand = deserializeAws_restJson1DescribeRecommendationFeedbackCommand;
const deserializeAws_restJson1DescribeRecommendationFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codegurureviewer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1DescribeRepositoryAssociationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRepositoryAssociationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RepositoryAssociation: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RepositoryAssociation !== undefined && data.RepositoryAssociation !== null) {
        contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRepositoryAssociationCommand = deserializeAws_restJson1DescribeRepositoryAssociationCommand;
const deserializeAws_restJson1DescribeRepositoryAssociationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codegurureviewer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.codegurureviewer#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1DisassociateRepositoryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateRepositoryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RepositoryAssociation: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RepositoryAssociation !== undefined && data.RepositoryAssociation !== null) {
        contents.RepositoryAssociation = deserializeAws_restJson1RepositoryAssociation(data.RepositoryAssociation, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateRepositoryCommand = deserializeAws_restJson1DisassociateRepositoryCommand;
const deserializeAws_restJson1DisassociateRepositoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codegurureviewer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.codegurureviewer#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.codegurureviewer#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1ListCodeReviewsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListCodeReviewsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeReviewSummaries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeReviewSummaries !== undefined && data.CodeReviewSummaries !== null) {
        contents.CodeReviewSummaries = deserializeAws_restJson1CodeReviewSummaries(data.CodeReviewSummaries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListCodeReviewsCommand = deserializeAws_restJson1ListCodeReviewsCommand;
const deserializeAws_restJson1ListCodeReviewsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codegurureviewer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1ListRecommendationFeedbackCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRecommendationFeedbackCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RecommendationFeedbackSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RecommendationFeedbackSummaries !== undefined && data.RecommendationFeedbackSummaries !== null) {
        contents.RecommendationFeedbackSummaries = deserializeAws_restJson1RecommendationFeedbackSummaries(data.RecommendationFeedbackSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRecommendationFeedbackCommand = deserializeAws_restJson1ListRecommendationFeedbackCommand;
const deserializeAws_restJson1ListRecommendationFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codegurureviewer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1ListRecommendationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRecommendationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RecommendationSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RecommendationSummaries !== undefined && data.RecommendationSummaries !== null) {
        contents.RecommendationSummaries = deserializeAws_restJson1RecommendationSummaries(data.RecommendationSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRecommendationsCommand = deserializeAws_restJson1ListRecommendationsCommand;
const deserializeAws_restJson1ListRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codegurureviewer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1ListRepositoryAssociationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRepositoryAssociationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RepositoryAssociationSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RepositoryAssociationSummaries !== undefined && data.RepositoryAssociationSummaries !== null) {
        contents.RepositoryAssociationSummaries = deserializeAws_restJson1RepositoryAssociationSummaries(data.RepositoryAssociationSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRepositoryAssociationsCommand = deserializeAws_restJson1ListRepositoryAssociationsCommand;
const deserializeAws_restJson1ListRepositoryAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1PutRecommendationFeedbackCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutRecommendationFeedbackCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutRecommendationFeedbackCommand = deserializeAws_restJson1PutRecommendationFeedbackCommand;
const deserializeAws_restJson1PutRecommendationFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.codegurureviewer#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codegurureviewer#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
        case "com.amazonaws.codegurureviewer#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codegurureviewer#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codegurureviewer#ValidationException":
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
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
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
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
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
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
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
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
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
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
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
const serializeAws_restJson1CodeCommitRepository = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_restJson1CodeReviewType = (input, context) => {
    return {
        ...(input.RepositoryAnalysis !== undefined &&
            input.RepositoryAnalysis !== null && {
            RepositoryAnalysis: serializeAws_restJson1RepositoryAnalysis(input.RepositoryAnalysis, context),
        }),
    };
};
const serializeAws_restJson1KMSKeyDetails = (input, context) => {
    return {
        ...(input.EncryptionOption !== undefined &&
            input.EncryptionOption !== null && { EncryptionOption: input.EncryptionOption }),
        ...(input.KMSKeyId !== undefined && input.KMSKeyId !== null && { KMSKeyId: input.KMSKeyId }),
    };
};
const serializeAws_restJson1Reactions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Repository = (input, context) => {
    return {
        ...(input.Bitbucket !== undefined &&
            input.Bitbucket !== null && {
            Bitbucket: serializeAws_restJson1ThirdPartySourceRepository(input.Bitbucket, context),
        }),
        ...(input.CodeCommit !== undefined &&
            input.CodeCommit !== null && {
            CodeCommit: serializeAws_restJson1CodeCommitRepository(input.CodeCommit, context),
        }),
        ...(input.GitHubEnterpriseServer !== undefined &&
            input.GitHubEnterpriseServer !== null && {
            GitHubEnterpriseServer: serializeAws_restJson1ThirdPartySourceRepository(input.GitHubEnterpriseServer, context),
        }),
    };
};
const serializeAws_restJson1RepositoryAnalysis = (input, context) => {
    return {
        ...(input.RepositoryHead !== undefined &&
            input.RepositoryHead !== null && {
            RepositoryHead: serializeAws_restJson1RepositoryHeadSourceCodeType(input.RepositoryHead, context),
        }),
    };
};
const serializeAws_restJson1RepositoryHeadSourceCodeType = (input, context) => {
    return {
        ...(input.BranchName !== undefined && input.BranchName !== null && { BranchName: input.BranchName }),
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
const serializeAws_restJson1ThirdPartySourceRepository = (input, context) => {
    return {
        ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner }),
    };
};
const deserializeAws_restJson1CodeReview = (output, context) => {
    return {
        AssociationArn: output.AssociationArn !== undefined && output.AssociationArn !== null ? output.AssociationArn : undefined,
        CodeReviewArn: output.CodeReviewArn !== undefined && output.CodeReviewArn !== null ? output.CodeReviewArn : undefined,
        CreatedTimeStamp: output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
            ? new Date(Math.round(output.CreatedTimeStamp * 1000))
            : undefined,
        LastUpdatedTimeStamp: output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
            ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
            : undefined,
        Metrics: output.Metrics !== undefined && output.Metrics !== null
            ? deserializeAws_restJson1Metrics(output.Metrics, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
        PullRequestId: output.PullRequestId !== undefined && output.PullRequestId !== null ? output.PullRequestId : undefined,
        RepositoryName: output.RepositoryName !== undefined && output.RepositoryName !== null ? output.RepositoryName : undefined,
        SourceCodeType: output.SourceCodeType !== undefined && output.SourceCodeType !== null
            ? deserializeAws_restJson1SourceCodeType(output.SourceCodeType, context)
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1CodeReviewSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CodeReviewSummary(entry, context);
    });
};
const deserializeAws_restJson1CodeReviewSummary = (output, context) => {
    return {
        CodeReviewArn: output.CodeReviewArn !== undefined && output.CodeReviewArn !== null ? output.CodeReviewArn : undefined,
        CreatedTimeStamp: output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
            ? new Date(Math.round(output.CreatedTimeStamp * 1000))
            : undefined,
        LastUpdatedTimeStamp: output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
            ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
            : undefined,
        MetricsSummary: output.MetricsSummary !== undefined && output.MetricsSummary !== null
            ? deserializeAws_restJson1MetricsSummary(output.MetricsSummary, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
        PullRequestId: output.PullRequestId !== undefined && output.PullRequestId !== null ? output.PullRequestId : undefined,
        RepositoryName: output.RepositoryName !== undefined && output.RepositoryName !== null ? output.RepositoryName : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1CommitDiffSourceCodeType = (output, context) => {
    return {
        DestinationCommit: output.DestinationCommit !== undefined && output.DestinationCommit !== null
            ? output.DestinationCommit
            : undefined,
        SourceCommit: output.SourceCommit !== undefined && output.SourceCommit !== null ? output.SourceCommit : undefined,
    };
};
const deserializeAws_restJson1KMSKeyDetails = (output, context) => {
    return {
        EncryptionOption: output.EncryptionOption !== undefined && output.EncryptionOption !== null ? output.EncryptionOption : undefined,
        KMSKeyId: output.KMSKeyId !== undefined && output.KMSKeyId !== null ? output.KMSKeyId : undefined,
    };
};
const deserializeAws_restJson1Metrics = (output, context) => {
    return {
        FindingsCount: output.FindingsCount !== undefined && output.FindingsCount !== null ? output.FindingsCount : undefined,
        MeteredLinesOfCodeCount: output.MeteredLinesOfCodeCount !== undefined && output.MeteredLinesOfCodeCount !== null
            ? output.MeteredLinesOfCodeCount
            : undefined,
    };
};
const deserializeAws_restJson1MetricsSummary = (output, context) => {
    return {
        FindingsCount: output.FindingsCount !== undefined && output.FindingsCount !== null ? output.FindingsCount : undefined,
        MeteredLinesOfCodeCount: output.MeteredLinesOfCodeCount !== undefined && output.MeteredLinesOfCodeCount !== null
            ? output.MeteredLinesOfCodeCount
            : undefined,
    };
};
const deserializeAws_restJson1Reactions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1RecommendationFeedback = (output, context) => {
    return {
        CodeReviewArn: output.CodeReviewArn !== undefined && output.CodeReviewArn !== null ? output.CodeReviewArn : undefined,
        CreatedTimeStamp: output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
            ? new Date(Math.round(output.CreatedTimeStamp * 1000))
            : undefined,
        LastUpdatedTimeStamp: output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
            ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
            : undefined,
        Reactions: output.Reactions !== undefined && output.Reactions !== null
            ? deserializeAws_restJson1Reactions(output.Reactions, context)
            : undefined,
        RecommendationId: output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
        UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
    };
};
const deserializeAws_restJson1RecommendationFeedbackSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecommendationFeedbackSummary(entry, context);
    });
};
const deserializeAws_restJson1RecommendationFeedbackSummary = (output, context) => {
    return {
        Reactions: output.Reactions !== undefined && output.Reactions !== null
            ? deserializeAws_restJson1Reactions(output.Reactions, context)
            : undefined,
        RecommendationId: output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
        UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
    };
};
const deserializeAws_restJson1RecommendationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecommendationSummary(entry, context);
    });
};
const deserializeAws_restJson1RecommendationSummary = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EndLine: output.EndLine !== undefined && output.EndLine !== null ? output.EndLine : undefined,
        FilePath: output.FilePath !== undefined && output.FilePath !== null ? output.FilePath : undefined,
        RecommendationId: output.RecommendationId !== undefined && output.RecommendationId !== null ? output.RecommendationId : undefined,
        StartLine: output.StartLine !== undefined && output.StartLine !== null ? output.StartLine : undefined,
    };
};
const deserializeAws_restJson1RepositoryAssociation = (output, context) => {
    return {
        AssociationArn: output.AssociationArn !== undefined && output.AssociationArn !== null ? output.AssociationArn : undefined,
        AssociationId: output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        CreatedTimeStamp: output.CreatedTimeStamp !== undefined && output.CreatedTimeStamp !== null
            ? new Date(Math.round(output.CreatedTimeStamp * 1000))
            : undefined,
        KMSKeyDetails: output.KMSKeyDetails !== undefined && output.KMSKeyDetails !== null
            ? deserializeAws_restJson1KMSKeyDetails(output.KMSKeyDetails, context)
            : undefined,
        LastUpdatedTimeStamp: output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
            ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_restJson1RepositoryAssociationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RepositoryAssociationSummary(entry, context);
    });
};
const deserializeAws_restJson1RepositoryAssociationSummary = (output, context) => {
    return {
        AssociationArn: output.AssociationArn !== undefined && output.AssociationArn !== null ? output.AssociationArn : undefined,
        AssociationId: output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        LastUpdatedTimeStamp: output.LastUpdatedTimeStamp !== undefined && output.LastUpdatedTimeStamp !== null
            ? new Date(Math.round(output.LastUpdatedTimeStamp * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_restJson1RepositoryHeadSourceCodeType = (output, context) => {
    return {
        BranchName: output.BranchName !== undefined && output.BranchName !== null ? output.BranchName : undefined,
    };
};
const deserializeAws_restJson1SourceCodeType = (output, context) => {
    return {
        CommitDiff: output.CommitDiff !== undefined && output.CommitDiff !== null
            ? deserializeAws_restJson1CommitDiffSourceCodeType(output.CommitDiff, context)
            : undefined,
        RepositoryHead: output.RepositoryHead !== undefined && output.RepositoryHead !== null
            ? deserializeAws_restJson1RepositoryHeadSourceCodeType(output.RepositoryHead, context)
            : undefined,
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