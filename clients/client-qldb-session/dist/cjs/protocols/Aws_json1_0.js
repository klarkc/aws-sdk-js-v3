"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0SendCommandCommand = exports.serializeAws_json1_0SendCommandCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_0SendCommandCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "QLDBSession.SendCommand",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0SendCommandRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0SendCommandCommand = serializeAws_json1_0SendCommandCommand;
const deserializeAws_json1_0SendCommandCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0SendCommandCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0SendCommandResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0SendCommandCommand = deserializeAws_json1_0SendCommandCommand;
const deserializeAws_json1_0SendCommandCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.qldbsession#BadRequestException":
            response = {
                ...(await deserializeAws_json1_0BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CapacityExceededException":
        case "com.amazonaws.qldbsession#CapacityExceededException":
            response = {
                ...(await deserializeAws_json1_0CapacityExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSessionException":
        case "com.amazonaws.qldbsession#InvalidSessionException":
            response = {
                ...(await deserializeAws_json1_0InvalidSessionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.qldbsession#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OccConflictException":
        case "com.amazonaws.qldbsession#OccConflictException":
            response = {
                ...(await deserializeAws_json1_0OccConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RateExceededException":
        case "com.amazonaws.qldbsession#RateExceededException":
            response = {
                ...(await deserializeAws_json1_0RateExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0BadRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0BadRequestException(body, context);
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0CapacityExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0CapacityExceededException(body, context);
    const contents = {
        name: "CapacityExceededException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InvalidSessionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidSessionException(body, context);
    const contents = {
        name: "InvalidSessionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0OccConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0OccConflictException(body, context);
    const contents = {
        name: "OccConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0RateExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0RateExceededException(body, context);
    const contents = {
        name: "RateExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_0AbortTransactionRequest = (input, context) => {
    return {};
};
const serializeAws_json1_0CommitTransactionRequest = (input, context) => {
    return {
        ...(input.CommitDigest !== undefined &&
            input.CommitDigest !== null && { CommitDigest: context.base64Encoder(input.CommitDigest) }),
        ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
    };
};
const serializeAws_json1_0EndSessionRequest = (input, context) => {
    return {};
};
const serializeAws_json1_0ExecuteStatementRequest = (input, context) => {
    return {
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_json1_0StatementParameters(input.Parameters, context) }),
        ...(input.Statement !== undefined && input.Statement !== null && { Statement: input.Statement }),
        ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
    };
};
const serializeAws_json1_0FetchPageRequest = (input, context) => {
    return {
        ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
        ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
    };
};
const serializeAws_json1_0SendCommandRequest = (input, context) => {
    return {
        ...(input.AbortTransaction !== undefined &&
            input.AbortTransaction !== null && {
            AbortTransaction: serializeAws_json1_0AbortTransactionRequest(input.AbortTransaction, context),
        }),
        ...(input.CommitTransaction !== undefined &&
            input.CommitTransaction !== null && {
            CommitTransaction: serializeAws_json1_0CommitTransactionRequest(input.CommitTransaction, context),
        }),
        ...(input.EndSession !== undefined &&
            input.EndSession !== null && { EndSession: serializeAws_json1_0EndSessionRequest(input.EndSession, context) }),
        ...(input.ExecuteStatement !== undefined &&
            input.ExecuteStatement !== null && {
            ExecuteStatement: serializeAws_json1_0ExecuteStatementRequest(input.ExecuteStatement, context),
        }),
        ...(input.FetchPage !== undefined &&
            input.FetchPage !== null && { FetchPage: serializeAws_json1_0FetchPageRequest(input.FetchPage, context) }),
        ...(input.SessionToken !== undefined && input.SessionToken !== null && { SessionToken: input.SessionToken }),
        ...(input.StartSession !== undefined &&
            input.StartSession !== null && {
            StartSession: serializeAws_json1_0StartSessionRequest(input.StartSession, context),
        }),
        ...(input.StartTransaction !== undefined &&
            input.StartTransaction !== null && {
            StartTransaction: serializeAws_json1_0StartTransactionRequest(input.StartTransaction, context),
        }),
    };
};
const serializeAws_json1_0StartSessionRequest = (input, context) => {
    return {
        ...(input.LedgerName !== undefined && input.LedgerName !== null && { LedgerName: input.LedgerName }),
    };
};
const serializeAws_json1_0StartTransactionRequest = (input, context) => {
    return {};
};
const serializeAws_json1_0StatementParameters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ValueHolder(entry, context);
    });
};
const serializeAws_json1_0ValueHolder = (input, context) => {
    return {
        ...(input.IonBinary !== undefined &&
            input.IonBinary !== null && { IonBinary: context.base64Encoder(input.IonBinary) }),
        ...(input.IonText !== undefined && input.IonText !== null && { IonText: input.IonText }),
    };
};
const deserializeAws_json1_0AbortTransactionResult = (output, context) => {
    return {
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
    };
};
const deserializeAws_json1_0BadRequestException = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0CapacityExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0CommitTransactionResult = (output, context) => {
    return {
        CommitDigest: output.CommitDigest !== undefined && output.CommitDigest !== null
            ? context.base64Decoder(output.CommitDigest)
            : undefined,
        ConsumedIOs: output.ConsumedIOs !== undefined && output.ConsumedIOs !== null
            ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context)
            : undefined,
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
        TransactionId: output.TransactionId !== undefined && output.TransactionId !== null ? output.TransactionId : undefined,
    };
};
const deserializeAws_json1_0EndSessionResult = (output, context) => {
    return {
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExecuteStatementResult = (output, context) => {
    return {
        ConsumedIOs: output.ConsumedIOs !== undefined && output.ConsumedIOs !== null
            ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context)
            : undefined,
        FirstPage: output.FirstPage !== undefined && output.FirstPage !== null
            ? deserializeAws_json1_0Page(output.FirstPage, context)
            : undefined,
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
    };
};
const deserializeAws_json1_0FetchPageResult = (output, context) => {
    return {
        ConsumedIOs: output.ConsumedIOs !== undefined && output.ConsumedIOs !== null
            ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context)
            : undefined,
        Page: output.Page !== undefined && output.Page !== null ? deserializeAws_json1_0Page(output.Page, context) : undefined,
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
    };
};
const deserializeAws_json1_0InvalidSessionException = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0IOUsage = (output, context) => {
    return {
        ReadIOs: output.ReadIOs !== undefined && output.ReadIOs !== null ? output.ReadIOs : undefined,
        WriteIOs: output.WriteIOs !== undefined && output.WriteIOs !== null ? output.WriteIOs : undefined,
    };
};
const deserializeAws_json1_0LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0OccConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0Page = (output, context) => {
    return {
        NextPageToken: output.NextPageToken !== undefined && output.NextPageToken !== null ? output.NextPageToken : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_0ValueHolders(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_0RateExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_0SendCommandResult = (output, context) => {
    return {
        AbortTransaction: output.AbortTransaction !== undefined && output.AbortTransaction !== null
            ? deserializeAws_json1_0AbortTransactionResult(output.AbortTransaction, context)
            : undefined,
        CommitTransaction: output.CommitTransaction !== undefined && output.CommitTransaction !== null
            ? deserializeAws_json1_0CommitTransactionResult(output.CommitTransaction, context)
            : undefined,
        EndSession: output.EndSession !== undefined && output.EndSession !== null
            ? deserializeAws_json1_0EndSessionResult(output.EndSession, context)
            : undefined,
        ExecuteStatement: output.ExecuteStatement !== undefined && output.ExecuteStatement !== null
            ? deserializeAws_json1_0ExecuteStatementResult(output.ExecuteStatement, context)
            : undefined,
        FetchPage: output.FetchPage !== undefined && output.FetchPage !== null
            ? deserializeAws_json1_0FetchPageResult(output.FetchPage, context)
            : undefined,
        StartSession: output.StartSession !== undefined && output.StartSession !== null
            ? deserializeAws_json1_0StartSessionResult(output.StartSession, context)
            : undefined,
        StartTransaction: output.StartTransaction !== undefined && output.StartTransaction !== null
            ? deserializeAws_json1_0StartTransactionResult(output.StartTransaction, context)
            : undefined,
    };
};
const deserializeAws_json1_0StartSessionResult = (output, context) => {
    return {
        SessionToken: output.SessionToken !== undefined && output.SessionToken !== null ? output.SessionToken : undefined,
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
    };
};
const deserializeAws_json1_0StartTransactionResult = (output, context) => {
    return {
        TimingInformation: output.TimingInformation !== undefined && output.TimingInformation !== null
            ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
            : undefined,
        TransactionId: output.TransactionId !== undefined && output.TransactionId !== null ? output.TransactionId : undefined,
    };
};
const deserializeAws_json1_0TimingInformation = (output, context) => {
    return {
        ProcessingTimeMilliseconds: output.ProcessingTimeMilliseconds !== undefined && output.ProcessingTimeMilliseconds !== null
            ? output.ProcessingTimeMilliseconds
            : undefined,
    };
};
const deserializeAws_json1_0ValueHolder = (output, context) => {
    return {
        IonBinary: output.IonBinary !== undefined && output.IonBinary !== null ? context.base64Decoder(output.IonBinary) : undefined,
        IonText: output.IonText !== undefined && output.IonText !== null ? output.IonText : undefined,
    };
};
const deserializeAws_json1_0ValueHolders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ValueHolder(entry, context);
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
//# sourceMappingURL=Aws_json1_0.js.map