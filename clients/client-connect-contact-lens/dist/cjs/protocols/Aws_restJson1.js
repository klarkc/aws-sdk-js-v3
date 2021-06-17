"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand = exports.serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/realtime-contact-analysis/analysis-segments";
    let body;
    body = JSON.stringify({
        ...(input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand = serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand;
const deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Segments: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Segments !== undefined && data.Segments !== null) {
        contents.Segments = deserializeAws_restJson1RealtimeContactAnalysisSegments(data.Segments, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand = deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand;
const deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.connectcontactlens#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.connectcontactlens#InternalServiceException":
            response = {
                ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.connectcontactlens#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.connectcontactlens#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.connectcontactlens#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
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
const deserializeAws_restJson1Categories = (output, context) => {
    return {
        MatchedCategories: output.MatchedCategories !== undefined && output.MatchedCategories !== null
            ? deserializeAws_restJson1MatchedCategories(output.MatchedCategories, context)
            : undefined,
        MatchedDetails: output.MatchedDetails !== undefined && output.MatchedDetails !== null
            ? deserializeAws_restJson1MatchedDetails(output.MatchedDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1CategoryDetails = (output, context) => {
    return {
        PointsOfInterest: output.PointsOfInterest !== undefined && output.PointsOfInterest !== null
            ? deserializeAws_restJson1PointsOfInterest(output.PointsOfInterest, context)
            : undefined,
    };
};
const deserializeAws_restJson1CharacterOffsets = (output, context) => {
    return {
        BeginOffsetChar: output.BeginOffsetChar !== undefined && output.BeginOffsetChar !== null ? output.BeginOffsetChar : undefined,
        EndOffsetChar: output.EndOffsetChar !== undefined && output.EndOffsetChar !== null ? output.EndOffsetChar : undefined,
    };
};
const deserializeAws_restJson1IssueDetected = (output, context) => {
    return {
        CharacterOffsets: output.CharacterOffsets !== undefined && output.CharacterOffsets !== null
            ? deserializeAws_restJson1CharacterOffsets(output.CharacterOffsets, context)
            : undefined,
    };
};
const deserializeAws_restJson1IssuesDetected = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IssueDetected(entry, context);
    });
};
const deserializeAws_restJson1MatchedCategories = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1MatchedDetails = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1CategoryDetails(value, context),
        };
    }, {});
};
const deserializeAws_restJson1PointOfInterest = (output, context) => {
    return {
        BeginOffsetMillis: output.BeginOffsetMillis !== undefined && output.BeginOffsetMillis !== null
            ? output.BeginOffsetMillis
            : undefined,
        EndOffsetMillis: output.EndOffsetMillis !== undefined && output.EndOffsetMillis !== null ? output.EndOffsetMillis : undefined,
    };
};
const deserializeAws_restJson1PointsOfInterest = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PointOfInterest(entry, context);
    });
};
const deserializeAws_restJson1RealtimeContactAnalysisSegment = (output, context) => {
    return {
        Categories: output.Categories !== undefined && output.Categories !== null
            ? deserializeAws_restJson1Categories(output.Categories, context)
            : undefined,
        Transcript: output.Transcript !== undefined && output.Transcript !== null
            ? deserializeAws_restJson1Transcript(output.Transcript, context)
            : undefined,
    };
};
const deserializeAws_restJson1RealtimeContactAnalysisSegments = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RealtimeContactAnalysisSegment(entry, context);
    });
};
const deserializeAws_restJson1Transcript = (output, context) => {
    return {
        BeginOffsetMillis: output.BeginOffsetMillis !== undefined && output.BeginOffsetMillis !== null
            ? output.BeginOffsetMillis
            : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        EndOffsetMillis: output.EndOffsetMillis !== undefined && output.EndOffsetMillis !== null ? output.EndOffsetMillis : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IssuesDetected: output.IssuesDetected !== undefined && output.IssuesDetected !== null
            ? deserializeAws_restJson1IssuesDetected(output.IssuesDetected, context)
            : undefined,
        ParticipantId: output.ParticipantId !== undefined && output.ParticipantId !== null ? output.ParticipantId : undefined,
        ParticipantRole: output.ParticipantRole !== undefined && output.ParticipantRole !== null ? output.ParticipantRole : undefined,
        Sentiment: output.Sentiment !== undefined && output.Sentiment !== null ? output.Sentiment : undefined,
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