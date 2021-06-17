"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UploadDocumentsCommand = exports.deserializeAws_restJson1SuggestCommand = exports.deserializeAws_restJson1SearchCommand = exports.serializeAws_restJson1UploadDocumentsCommand = exports.serializeAws_restJson1SuggestCommand = exports.serializeAws_restJson1SearchCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1SearchCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-01-01/search";
    const query = {
        format: "sdk",
        pretty: "true",
        ...(input.cursor !== undefined && { cursor: input.cursor }),
        ...(input.expr !== undefined && { expr: input.expr }),
        ...(input.facet !== undefined && { facet: input.facet }),
        ...(input.filterQuery !== undefined && { fq: input.filterQuery }),
        ...(input.highlight !== undefined && { highlight: input.highlight }),
        ...(input.partial !== undefined && { partial: input.partial.toString() }),
        ...(input.query !== undefined && { q: input.query }),
        ...(input.queryOptions !== undefined && { "q.options": input.queryOptions }),
        ...(input.queryParser !== undefined && { "q.parser": input.queryParser }),
        ...(input.return !== undefined && { return: input.return }),
        ...(input.size !== undefined && { size: input.size.toString() }),
        ...(input.sort !== undefined && { sort: input.sort }),
        ...(input.start !== undefined && { start: input.start.toString() }),
        ...(input.stats !== undefined && { stats: input.stats }),
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
exports.serializeAws_restJson1SearchCommand = serializeAws_restJson1SearchCommand;
const serializeAws_restJson1SuggestCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2013-01-01/suggest";
    const query = {
        format: "sdk",
        pretty: "true",
        ...(input.query !== undefined && { q: input.query }),
        ...(input.suggester !== undefined && { suggester: input.suggester }),
        ...(input.size !== undefined && { size: input.size.toString() }),
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
exports.serializeAws_restJson1SuggestCommand = serializeAws_restJson1SuggestCommand;
const serializeAws_restJson1UploadDocumentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
        ...(isSerializableHeaderValue(input.contentType) && { "content-type": input.contentType }),
    };
    let resolvedPath = "/2013-01-01/documents/batch";
    const query = {
        format: "sdk",
    };
    let body;
    if (input.documents !== undefined) {
        body = input.documents;
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UploadDocumentsCommand = serializeAws_restJson1UploadDocumentsCommand;
const deserializeAws_restJson1SearchCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        facets: undefined,
        hits: undefined,
        stats: undefined,
        status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.facets !== undefined && data.facets !== null) {
        contents.facets = deserializeAws_restJson1Facets(data.facets, context);
    }
    if (data.hits !== undefined && data.hits !== null) {
        contents.hits = deserializeAws_restJson1Hits(data.hits, context);
    }
    if (data.stats !== undefined && data.stats !== null) {
        contents.stats = deserializeAws_restJson1Stats(data.stats, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = deserializeAws_restJson1SearchStatus(data.status, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchCommand = deserializeAws_restJson1SearchCommand;
const deserializeAws_restJson1SearchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "SearchException":
        case "com.amazonaws.cloudsearchdomain#SearchException":
            response = {
                ...(await deserializeAws_restJson1SearchExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SuggestCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SuggestCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        status: undefined,
        suggest: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.status !== undefined && data.status !== null) {
        contents.status = deserializeAws_restJson1SuggestStatus(data.status, context);
    }
    if (data.suggest !== undefined && data.suggest !== null) {
        contents.suggest = deserializeAws_restJson1SuggestModel(data.suggest, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SuggestCommand = deserializeAws_restJson1SuggestCommand;
const deserializeAws_restJson1SuggestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "SearchException":
        case "com.amazonaws.cloudsearchdomain#SearchException":
            response = {
                ...(await deserializeAws_restJson1SearchExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UploadDocumentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UploadDocumentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        adds: undefined,
        deletes: undefined,
        status: undefined,
        warnings: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.adds !== undefined && data.adds !== null) {
        contents.adds = data.adds;
    }
    if (data.deletes !== undefined && data.deletes !== null) {
        contents.deletes = data.deletes;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.warnings !== undefined && data.warnings !== null) {
        contents.warnings = deserializeAws_restJson1DocumentServiceWarnings(data.warnings, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UploadDocumentsCommand = deserializeAws_restJson1UploadDocumentsCommand;
const deserializeAws_restJson1UploadDocumentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DocumentServiceException":
        case "com.amazonaws.cloudsearchdomain#DocumentServiceException":
            response = {
                ...(await deserializeAws_restJson1DocumentServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DocumentServiceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DocumentServiceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        status: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    return contents;
};
const deserializeAws_restJson1SearchExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "SearchException",
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
const deserializeAws_restJson1Bucket = (output, context) => {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1BucketInfo = (output, context) => {
    return {
        buckets: output.buckets !== undefined && output.buckets !== null
            ? deserializeAws_restJson1BucketList(output.buckets, context)
            : undefined,
    };
};
const deserializeAws_restJson1BucketList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Bucket(entry, context);
    });
};
const deserializeAws_restJson1DocumentServiceWarning = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_restJson1DocumentServiceWarnings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DocumentServiceWarning(entry, context);
    });
};
const deserializeAws_restJson1Exprs = (output, context) => {
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
const deserializeAws_restJson1Facets = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1BucketInfo(value, context),
        };
    }, {});
};
const deserializeAws_restJson1Fields = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1FieldValue(value, context),
        };
    }, {});
};
const deserializeAws_restJson1FieldStats = (output, context) => {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        max: output.max !== undefined && output.max !== null ? output.max : undefined,
        mean: output.mean !== undefined && output.mean !== null ? output.mean : undefined,
        min: output.min !== undefined && output.min !== null ? output.min : undefined,
        missing: output.missing !== undefined && output.missing !== null ? output.missing : undefined,
        stddev: output.stddev !== undefined && output.stddev !== null ? output.stddev : undefined,
        sum: output.sum !== undefined && output.sum !== null ? output.sum : undefined,
        sumOfSquares: output.sumOfSquares !== undefined && output.sumOfSquares !== null ? output.sumOfSquares : undefined,
    };
};
const deserializeAws_restJson1FieldValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Highlights = (output, context) => {
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
const deserializeAws_restJson1Hit = (output, context) => {
    return {
        exprs: output.exprs !== undefined && output.exprs !== null
            ? deserializeAws_restJson1Exprs(output.exprs, context)
            : undefined,
        fields: output.fields !== undefined && output.fields !== null
            ? deserializeAws_restJson1Fields(output.fields, context)
            : undefined,
        highlights: output.highlights !== undefined && output.highlights !== null
            ? deserializeAws_restJson1Highlights(output.highlights, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
const deserializeAws_restJson1HitList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Hit(entry, context);
    });
};
const deserializeAws_restJson1Hits = (output, context) => {
    return {
        cursor: output.cursor !== undefined && output.cursor !== null ? output.cursor : undefined,
        found: output.found !== undefined && output.found !== null ? output.found : undefined,
        hit: output.hit !== undefined && output.hit !== null
            ? deserializeAws_restJson1HitList(output.hit, context)
            : undefined,
        start: output.start !== undefined && output.start !== null ? output.start : undefined,
    };
};
const deserializeAws_restJson1SearchStatus = (output, context) => {
    return {
        rid: output.rid !== undefined && output.rid !== null ? output.rid : undefined,
        timems: output.timems !== undefined && output.timems !== null ? output.timems : undefined,
    };
};
const deserializeAws_restJson1Stats = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1FieldStats(value, context),
        };
    }, {});
};
const deserializeAws_restJson1SuggestionMatch = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        score: output.score !== undefined && output.score !== null ? output.score : undefined,
        suggestion: output.suggestion !== undefined && output.suggestion !== null ? output.suggestion : undefined,
    };
};
const deserializeAws_restJson1Suggestions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SuggestionMatch(entry, context);
    });
};
const deserializeAws_restJson1SuggestModel = (output, context) => {
    return {
        found: output.found !== undefined && output.found !== null ? output.found : undefined,
        query: output.query !== undefined && output.query !== null ? output.query : undefined,
        suggestions: output.suggestions !== undefined && output.suggestions !== null
            ? deserializeAws_restJson1Suggestions(output.suggestions, context)
            : undefined,
    };
};
const deserializeAws_restJson1SuggestStatus = (output, context) => {
    return {
        rid: output.rid !== undefined && output.rid !== null ? output.rid : undefined,
        timems: output.timems !== undefined && output.timems !== null ? output.timems : undefined,
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