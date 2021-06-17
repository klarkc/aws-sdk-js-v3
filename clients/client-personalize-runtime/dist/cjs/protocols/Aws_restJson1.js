"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1GetRecommendationsCommand = exports.deserializeAws_restJson1GetPersonalizedRankingCommand = exports.serializeAws_restJson1GetRecommendationsCommand = exports.serializeAws_restJson1GetPersonalizedRankingCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1GetPersonalizedRankingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/personalize-ranking";
    let body;
    body = JSON.stringify({
        ...(input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }),
        ...(input.context !== undefined &&
            input.context !== null && { context: serializeAws_restJson1Context(input.context, context) }),
        ...(input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }),
        ...(input.filterValues !== undefined &&
            input.filterValues !== null && { filterValues: serializeAws_restJson1FilterValues(input.filterValues, context) }),
        ...(input.inputList !== undefined &&
            input.inputList !== null && { inputList: serializeAws_restJson1InputList(input.inputList, context) }),
        ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
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
exports.serializeAws_restJson1GetPersonalizedRankingCommand = serializeAws_restJson1GetPersonalizedRankingCommand;
const serializeAws_restJson1GetRecommendationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/recommendations";
    let body;
    body = JSON.stringify({
        ...(input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }),
        ...(input.context !== undefined &&
            input.context !== null && { context: serializeAws_restJson1Context(input.context, context) }),
        ...(input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }),
        ...(input.filterValues !== undefined &&
            input.filterValues !== null && { filterValues: serializeAws_restJson1FilterValues(input.filterValues, context) }),
        ...(input.itemId !== undefined && input.itemId !== null && { itemId: input.itemId }),
        ...(input.numResults !== undefined && input.numResults !== null && { numResults: input.numResults }),
        ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
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
exports.serializeAws_restJson1GetRecommendationsCommand = serializeAws_restJson1GetRecommendationsCommand;
const deserializeAws_restJson1GetPersonalizedRankingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPersonalizedRankingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        personalizedRanking: undefined,
        recommendationId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.personalizedRanking !== undefined && data.personalizedRanking !== null) {
        contents.personalizedRanking = deserializeAws_restJson1ItemList(data.personalizedRanking, context);
    }
    if (data.recommendationId !== undefined && data.recommendationId !== null) {
        contents.recommendationId = data.recommendationId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPersonalizedRankingCommand = deserializeAws_restJson1GetPersonalizedRankingCommand;
const deserializeAws_restJson1GetPersonalizedRankingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalizeruntime#InvalidInputException":
            response = {
                ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalizeruntime#ResourceNotFoundException":
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
const deserializeAws_restJson1GetRecommendationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRecommendationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        itemList: undefined,
        recommendationId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.itemList !== undefined && data.itemList !== null) {
        contents.itemList = deserializeAws_restJson1ItemList(data.itemList, context);
    }
    if (data.recommendationId !== undefined && data.recommendationId !== null) {
        contents.recommendationId = data.recommendationId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRecommendationsCommand = deserializeAws_restJson1GetRecommendationsCommand;
const deserializeAws_restJson1GetRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalizeruntime#InvalidInputException":
            response = {
                ...(await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.personalizeruntime#ResourceNotFoundException":
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
const deserializeAws_restJson1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidInputException",
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
const serializeAws_restJson1Context = (input, context) => {
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
const serializeAws_restJson1FilterValues = (input, context) => {
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
const serializeAws_restJson1InputList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PredictedItem(entry, context);
    });
};
const deserializeAws_restJson1PredictedItem = (output, context) => {
    return {
        itemId: output.itemId !== undefined && output.itemId !== null ? output.itemId : undefined,
        score: output.score !== undefined && output.score !== null ? output.score : undefined,
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