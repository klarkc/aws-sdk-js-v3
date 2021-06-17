"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1StartChangeSetCommand = exports.deserializeAws_restJson1ListEntitiesCommand = exports.deserializeAws_restJson1ListChangeSetsCommand = exports.deserializeAws_restJson1DescribeEntityCommand = exports.deserializeAws_restJson1DescribeChangeSetCommand = exports.deserializeAws_restJson1CancelChangeSetCommand = exports.serializeAws_restJson1StartChangeSetCommand = exports.serializeAws_restJson1ListEntitiesCommand = exports.serializeAws_restJson1ListChangeSetsCommand = exports.serializeAws_restJson1DescribeEntityCommand = exports.serializeAws_restJson1DescribeChangeSetCommand = exports.serializeAws_restJson1CancelChangeSetCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1CancelChangeSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/CancelChangeSet";
    const query = {
        ...(input.Catalog !== undefined && { catalog: input.Catalog }),
        ...(input.ChangeSetId !== undefined && { changeSetId: input.ChangeSetId }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1CancelChangeSetCommand = serializeAws_restJson1CancelChangeSetCommand;
const serializeAws_restJson1DescribeChangeSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/DescribeChangeSet";
    const query = {
        ...(input.Catalog !== undefined && { catalog: input.Catalog }),
        ...(input.ChangeSetId !== undefined && { changeSetId: input.ChangeSetId }),
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
exports.serializeAws_restJson1DescribeChangeSetCommand = serializeAws_restJson1DescribeChangeSetCommand;
const serializeAws_restJson1DescribeEntityCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/DescribeEntity";
    const query = {
        ...(input.Catalog !== undefined && { catalog: input.Catalog }),
        ...(input.EntityId !== undefined && { entityId: input.EntityId }),
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
exports.serializeAws_restJson1DescribeEntityCommand = serializeAws_restJson1DescribeEntityCommand;
const serializeAws_restJson1ListChangeSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListChangeSets";
    let body;
    body = JSON.stringify({
        ...(input.Catalog !== undefined && input.Catalog !== null && { Catalog: input.Catalog }),
        ...(input.FilterList !== undefined &&
            input.FilterList !== null && { FilterList: serializeAws_restJson1FilterList(input.FilterList, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Sort !== undefined && input.Sort !== null && { Sort: serializeAws_restJson1Sort(input.Sort, context) }),
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
exports.serializeAws_restJson1ListChangeSetsCommand = serializeAws_restJson1ListChangeSetsCommand;
const serializeAws_restJson1ListEntitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListEntities";
    let body;
    body = JSON.stringify({
        ...(input.Catalog !== undefined && input.Catalog !== null && { Catalog: input.Catalog }),
        ...(input.EntityType !== undefined && input.EntityType !== null && { EntityType: input.EntityType }),
        ...(input.FilterList !== undefined &&
            input.FilterList !== null && { FilterList: serializeAws_restJson1FilterList(input.FilterList, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Sort !== undefined && input.Sort !== null && { Sort: serializeAws_restJson1Sort(input.Sort, context) }),
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
exports.serializeAws_restJson1ListEntitiesCommand = serializeAws_restJson1ListEntitiesCommand;
const serializeAws_restJson1StartChangeSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/StartChangeSet";
    let body;
    body = JSON.stringify({
        ...(input.Catalog !== undefined && input.Catalog !== null && { Catalog: input.Catalog }),
        ...(input.ChangeSet !== undefined &&
            input.ChangeSet !== null && { ChangeSet: serializeAws_restJson1RequestedChangeList(input.ChangeSet, context) }),
        ...(input.ChangeSetName !== undefined && input.ChangeSetName !== null && { ChangeSetName: input.ChangeSetName }),
        ...(input.ClientRequestToken !== undefined &&
            input.ClientRequestToken !== null && { ClientRequestToken: input.ClientRequestToken }),
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
exports.serializeAws_restJson1StartChangeSetCommand = serializeAws_restJson1StartChangeSetCommand;
const deserializeAws_restJson1CancelChangeSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelChangeSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeSetArn: undefined,
        ChangeSetId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ChangeSetArn !== undefined && data.ChangeSetArn !== null) {
        contents.ChangeSetArn = data.ChangeSetArn;
    }
    if (data.ChangeSetId !== undefined && data.ChangeSetId !== null) {
        contents.ChangeSetId = data.ChangeSetId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelChangeSetCommand = deserializeAws_restJson1CancelChangeSetCommand;
const deserializeAws_restJson1CancelChangeSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.marketplacecatalog#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.marketplacecatalog#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.marketplacecatalog#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplacecatalog#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.marketplacecatalog#ValidationException":
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
const deserializeAws_restJson1DescribeChangeSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeChangeSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeSet: undefined,
        ChangeSetArn: undefined,
        ChangeSetId: undefined,
        ChangeSetName: undefined,
        EndTime: undefined,
        FailureCode: undefined,
        FailureDescription: undefined,
        StartTime: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ChangeSet !== undefined && data.ChangeSet !== null) {
        contents.ChangeSet = deserializeAws_restJson1ChangeSetDescription(data.ChangeSet, context);
    }
    if (data.ChangeSetArn !== undefined && data.ChangeSetArn !== null) {
        contents.ChangeSetArn = data.ChangeSetArn;
    }
    if (data.ChangeSetId !== undefined && data.ChangeSetId !== null) {
        contents.ChangeSetId = data.ChangeSetId;
    }
    if (data.ChangeSetName !== undefined && data.ChangeSetName !== null) {
        contents.ChangeSetName = data.ChangeSetName;
    }
    if (data.EndTime !== undefined && data.EndTime !== null) {
        contents.EndTime = data.EndTime;
    }
    if (data.FailureCode !== undefined && data.FailureCode !== null) {
        contents.FailureCode = data.FailureCode;
    }
    if (data.FailureDescription !== undefined && data.FailureDescription !== null) {
        contents.FailureDescription = data.FailureDescription;
    }
    if (data.StartTime !== undefined && data.StartTime !== null) {
        contents.StartTime = data.StartTime;
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeChangeSetCommand = deserializeAws_restJson1DescribeChangeSetCommand;
const deserializeAws_restJson1DescribeChangeSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.marketplacecatalog#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.marketplacecatalog#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplacecatalog#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.marketplacecatalog#ValidationException":
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
const deserializeAws_restJson1DescribeEntityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeEntityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Details: undefined,
        EntityArn: undefined,
        EntityIdentifier: undefined,
        EntityType: undefined,
        LastModifiedDate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Details !== undefined && data.Details !== null) {
        contents.Details = data.Details;
    }
    if (data.EntityArn !== undefined && data.EntityArn !== null) {
        contents.EntityArn = data.EntityArn;
    }
    if (data.EntityIdentifier !== undefined && data.EntityIdentifier !== null) {
        contents.EntityIdentifier = data.EntityIdentifier;
    }
    if (data.EntityType !== undefined && data.EntityType !== null) {
        contents.EntityType = data.EntityType;
    }
    if (data.LastModifiedDate !== undefined && data.LastModifiedDate !== null) {
        contents.LastModifiedDate = data.LastModifiedDate;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeEntityCommand = deserializeAws_restJson1DescribeEntityCommand;
const deserializeAws_restJson1DescribeEntityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.marketplacecatalog#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.marketplacecatalog#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotSupportedException":
        case "com.amazonaws.marketplacecatalog#ResourceNotSupportedException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplacecatalog#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.marketplacecatalog#ValidationException":
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
const deserializeAws_restJson1ListChangeSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListChangeSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeSetSummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ChangeSetSummaryList !== undefined && data.ChangeSetSummaryList !== null) {
        contents.ChangeSetSummaryList = deserializeAws_restJson1ChangeSetSummaryList(data.ChangeSetSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListChangeSetsCommand = deserializeAws_restJson1ListChangeSetsCommand;
const deserializeAws_restJson1ListChangeSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.marketplacecatalog#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.marketplacecatalog#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplacecatalog#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.marketplacecatalog#ValidationException":
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
const deserializeAws_restJson1ListEntitiesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListEntitiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EntitySummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.EntitySummaryList !== undefined && data.EntitySummaryList !== null) {
        contents.EntitySummaryList = deserializeAws_restJson1EntitySummaryList(data.EntitySummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListEntitiesCommand = deserializeAws_restJson1ListEntitiesCommand;
const deserializeAws_restJson1ListEntitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.marketplacecatalog#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.marketplacecatalog#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplacecatalog#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.marketplacecatalog#ValidationException":
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
const deserializeAws_restJson1StartChangeSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartChangeSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChangeSetArn: undefined,
        ChangeSetId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ChangeSetArn !== undefined && data.ChangeSetArn !== null) {
        contents.ChangeSetArn = data.ChangeSetArn;
    }
    if (data.ChangeSetId !== undefined && data.ChangeSetId !== null) {
        contents.ChangeSetId = data.ChangeSetId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartChangeSetCommand = deserializeAws_restJson1StartChangeSetCommand;
const deserializeAws_restJson1StartChangeSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.marketplacecatalog#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.marketplacecatalog#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.marketplacecatalog#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.marketplacecatalog#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.marketplacecatalog#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.marketplacecatalog#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.marketplacecatalog#ValidationException":
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
const deserializeAws_restJson1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServiceException",
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
const deserializeAws_restJson1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceInUseException",
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
const deserializeAws_restJson1ResourceNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotSupportedException",
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
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
const serializeAws_restJson1Change = (input, context) => {
    return {
        ...(input.ChangeName !== undefined && input.ChangeName !== null && { ChangeName: input.ChangeName }),
        ...(input.ChangeType !== undefined && input.ChangeType !== null && { ChangeType: input.ChangeType }),
        ...(input.Details !== undefined && input.Details !== null && { Details: input.Details }),
        ...(input.Entity !== undefined &&
            input.Entity !== null && { Entity: serializeAws_restJson1Entity(input.Entity, context) }),
    };
};
const serializeAws_restJson1Entity = (input, context) => {
    return {
        ...(input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1Filter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ValueList !== undefined &&
            input.ValueList !== null && { ValueList: serializeAws_restJson1ValueList(input.ValueList, context) }),
    };
};
const serializeAws_restJson1FilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Filter(entry, context);
    });
};
const serializeAws_restJson1RequestedChangeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Change(entry, context);
    });
};
const serializeAws_restJson1Sort = (input, context) => {
    return {
        ...(input.SortBy !== undefined && input.SortBy !== null && { SortBy: input.SortBy }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_restJson1ValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ChangeSetDescription = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ChangeSummary(entry, context);
    });
};
const deserializeAws_restJson1ChangeSetSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ChangeSetSummaryListItem(entry, context);
    });
};
const deserializeAws_restJson1ChangeSetSummaryListItem = (output, context) => {
    return {
        ChangeSetArn: output.ChangeSetArn !== undefined && output.ChangeSetArn !== null ? output.ChangeSetArn : undefined,
        ChangeSetId: output.ChangeSetId !== undefined && output.ChangeSetId !== null ? output.ChangeSetId : undefined,
        ChangeSetName: output.ChangeSetName !== undefined && output.ChangeSetName !== null ? output.ChangeSetName : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        EntityIdList: output.EntityIdList !== undefined && output.EntityIdList !== null
            ? deserializeAws_restJson1ResourceIdList(output.EntityIdList, context)
            : undefined,
        FailureCode: output.FailureCode !== undefined && output.FailureCode !== null ? output.FailureCode : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1ChangeSummary = (output, context) => {
    return {
        ChangeName: output.ChangeName !== undefined && output.ChangeName !== null ? output.ChangeName : undefined,
        ChangeType: output.ChangeType !== undefined && output.ChangeType !== null ? output.ChangeType : undefined,
        Details: output.Details !== undefined && output.Details !== null ? output.Details : undefined,
        Entity: output.Entity !== undefined && output.Entity !== null
            ? deserializeAws_restJson1Entity(output.Entity, context)
            : undefined,
        ErrorDetailList: output.ErrorDetailList !== undefined && output.ErrorDetailList !== null
            ? deserializeAws_restJson1ErrorDetailList(output.ErrorDetailList, context)
            : undefined,
    };
};
const deserializeAws_restJson1Entity = (output, context) => {
    return {
        Identifier: output.Identifier !== undefined && output.Identifier !== null ? output.Identifier : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1EntitySummary = (output, context) => {
    return {
        EntityArn: output.EntityArn !== undefined && output.EntityArn !== null ? output.EntityArn : undefined,
        EntityId: output.EntityId !== undefined && output.EntityId !== null ? output.EntityId : undefined,
        EntityType: output.EntityType !== undefined && output.EntityType !== null ? output.EntityType : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Visibility: output.Visibility !== undefined && output.Visibility !== null ? output.Visibility : undefined,
    };
};
const deserializeAws_restJson1EntitySummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EntitySummary(entry, context);
    });
};
const deserializeAws_restJson1ErrorDetail = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    };
};
const deserializeAws_restJson1ErrorDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ErrorDetail(entry, context);
    });
};
const deserializeAws_restJson1ResourceIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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