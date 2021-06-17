"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0ListStreamsCommand = exports.deserializeAws_json1_0GetShardIteratorCommand = exports.deserializeAws_json1_0GetRecordsCommand = exports.deserializeAws_json1_0DescribeStreamCommand = exports.serializeAws_json1_0ListStreamsCommand = exports.serializeAws_json1_0GetShardIteratorCommand = exports.serializeAws_json1_0GetRecordsCommand = exports.serializeAws_json1_0DescribeStreamCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_0DescribeStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDBStreams_20120810.DescribeStream",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeStreamCommand = serializeAws_json1_0DescribeStreamCommand;
const serializeAws_json1_0GetRecordsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDBStreams_20120810.GetRecords",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetRecordsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetRecordsCommand = serializeAws_json1_0GetRecordsCommand;
const serializeAws_json1_0GetShardIteratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDBStreams_20120810.GetShardIterator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0GetShardIteratorInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0GetShardIteratorCommand = serializeAws_json1_0GetShardIteratorCommand;
const serializeAws_json1_0ListStreamsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "DynamoDBStreams_20120810.ListStreams",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_0ListStreamsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListStreamsCommand = serializeAws_json1_0ListStreamsCommand;
const deserializeAws_json1_0DescribeStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0DescribeStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeStreamOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeStreamCommand = deserializeAws_json1_0DescribeStreamCommand;
const deserializeAws_json1_0DescribeStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodbstreams#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0GetRecordsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetRecordsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetRecordsCommand = deserializeAws_json1_0GetRecordsCommand;
const deserializeAws_json1_0GetRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredIteratorException":
        case "com.amazonaws.dynamodbstreams#ExpiredIteratorException":
            response = {
                ...(await deserializeAws_json1_0ExpiredIteratorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodbstreams#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodbstreams#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrimmedDataAccessException":
        case "com.amazonaws.dynamodbstreams#TrimmedDataAccessException":
            response = {
                ...(await deserializeAws_json1_0TrimmedDataAccessExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0GetShardIteratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0GetShardIteratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetShardIteratorOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0GetShardIteratorCommand = deserializeAws_json1_0GetShardIteratorCommand;
const deserializeAws_json1_0GetShardIteratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodbstreams#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrimmedDataAccessException":
        case "com.amazonaws.dynamodbstreams#TrimmedDataAccessException":
            response = {
                ...(await deserializeAws_json1_0TrimmedDataAccessExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ListStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_0ListStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListStreamsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListStreamsCommand = deserializeAws_json1_0ListStreamsCommand;
const deserializeAws_json1_0ListStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodbstreams#InternalServerError":
            response = {
                ...(await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodbstreams#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_0ExpiredIteratorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExpiredIteratorException(body, context);
    const contents = {
        name: "ExpiredIteratorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InternalServerError(body, context);
    const contents = {
        name: "InternalServerError",
        $fault: "server",
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
const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_0TrimmedDataAccessExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TrimmedDataAccessException(body, context);
    const contents = {
        name: "TrimmedDataAccessException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_0DescribeStreamInput = (input, context) => {
    return {
        ...(input.ExclusiveStartShardId !== undefined &&
            input.ExclusiveStartShardId !== null && { ExclusiveStartShardId: input.ExclusiveStartShardId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }),
    };
};
const serializeAws_json1_0GetRecordsInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.ShardIterator !== undefined && input.ShardIterator !== null && { ShardIterator: input.ShardIterator }),
    };
};
const serializeAws_json1_0GetShardIteratorInput = (input, context) => {
    return {
        ...(input.SequenceNumber !== undefined &&
            input.SequenceNumber !== null && { SequenceNumber: input.SequenceNumber }),
        ...(input.ShardId !== undefined && input.ShardId !== null && { ShardId: input.ShardId }),
        ...(input.ShardIteratorType !== undefined &&
            input.ShardIteratorType !== null && { ShardIteratorType: input.ShardIteratorType }),
        ...(input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }),
    };
};
const serializeAws_json1_0ListStreamsInput = (input, context) => {
    return {
        ...(input.ExclusiveStartStreamArn !== undefined &&
            input.ExclusiveStartStreamArn !== null && { ExclusiveStartStreamArn: input.ExclusiveStartStreamArn }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    };
};
const deserializeAws_json1_0AttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_0AttributeValue = (output, context) => {
    if (output.B !== undefined && output.B !== null) {
        return {
            B: context.base64Decoder(output.B),
        };
    }
    if (output.BOOL !== undefined && output.BOOL !== null) {
        return {
            BOOL: output.BOOL,
        };
    }
    if (output.BS !== undefined && output.BS !== null) {
        return {
            BS: deserializeAws_json1_0BinarySetAttributeValue(output.BS, context),
        };
    }
    if (output.L !== undefined && output.L !== null) {
        return {
            L: deserializeAws_json1_0ListAttributeValue(output.L, context),
        };
    }
    if (output.M !== undefined && output.M !== null) {
        return {
            M: deserializeAws_json1_0MapAttributeValue(output.M, context),
        };
    }
    if (output.N !== undefined && output.N !== null) {
        return {
            N: output.N,
        };
    }
    if (output.NS !== undefined && output.NS !== null) {
        return {
            NS: deserializeAws_json1_0NumberSetAttributeValue(output.NS, context),
        };
    }
    if (output.NULL !== undefined && output.NULL !== null) {
        return {
            NULL: output.NULL,
        };
    }
    if (output.S !== undefined && output.S !== null) {
        return {
            S: output.S,
        };
    }
    if (output.SS !== undefined && output.SS !== null) {
        return {
            SS: deserializeAws_json1_0StringSetAttributeValue(output.SS, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_json1_0BinarySetAttributeValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return context.base64Decoder(entry);
    });
};
const deserializeAws_json1_0DescribeStreamOutput = (output, context) => {
    return {
        StreamDescription: output.StreamDescription !== undefined && output.StreamDescription !== null
            ? deserializeAws_json1_0StreamDescription(output.StreamDescription, context)
            : undefined,
    };
};
const deserializeAws_json1_0ExpiredIteratorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0GetRecordsOutput = (output, context) => {
    return {
        NextShardIterator: output.NextShardIterator !== undefined && output.NextShardIterator !== null
            ? output.NextShardIterator
            : undefined,
        Records: output.Records !== undefined && output.Records !== null
            ? deserializeAws_json1_0RecordList(output.Records, context)
            : undefined,
    };
};
const deserializeAws_json1_0GetShardIteratorOutput = (output, context) => {
    return {
        ShardIterator: output.ShardIterator !== undefined && output.ShardIterator !== null ? output.ShardIterator : undefined,
    };
};
const deserializeAws_json1_0Identity = (output, context) => {
    return {
        PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_0InternalServerError = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0KeySchema = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0KeySchemaElement(entry, context);
    });
};
const deserializeAws_json1_0KeySchemaElement = (output, context) => {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        KeyType: output.KeyType !== undefined && output.KeyType !== null ? output.KeyType : undefined,
    };
};
const deserializeAws_json1_0LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0ListAttributeValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AttributeValue(entry, context);
    });
};
const deserializeAws_json1_0ListStreamsOutput = (output, context) => {
    return {
        LastEvaluatedStreamArn: output.LastEvaluatedStreamArn !== undefined && output.LastEvaluatedStreamArn !== null
            ? output.LastEvaluatedStreamArn
            : undefined,
        Streams: output.Streams !== undefined && output.Streams !== null
            ? deserializeAws_json1_0StreamList(output.Streams, context)
            : undefined,
    };
};
const deserializeAws_json1_0MapAttributeValue = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_0AttributeValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_0NumberSetAttributeValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0_Record = (output, context) => {
    return {
        awsRegion: output.awsRegion !== undefined && output.awsRegion !== null ? output.awsRegion : undefined,
        dynamodb: output.dynamodb !== undefined && output.dynamodb !== null
            ? deserializeAws_json1_0StreamRecord(output.dynamodb, context)
            : undefined,
        eventID: output.eventID !== undefined && output.eventID !== null ? output.eventID : undefined,
        eventName: output.eventName !== undefined && output.eventName !== null ? output.eventName : undefined,
        eventSource: output.eventSource !== undefined && output.eventSource !== null ? output.eventSource : undefined,
        eventVersion: output.eventVersion !== undefined && output.eventVersion !== null ? output.eventVersion : undefined,
        userIdentity: output.userIdentity !== undefined && output.userIdentity !== null
            ? deserializeAws_json1_0Identity(output.userIdentity, context)
            : undefined,
    };
};
const deserializeAws_json1_0RecordList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0_Record(entry, context);
    });
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_0SequenceNumberRange = (output, context) => {
    return {
        EndingSequenceNumber: output.EndingSequenceNumber !== undefined && output.EndingSequenceNumber !== null
            ? output.EndingSequenceNumber
            : undefined,
        StartingSequenceNumber: output.StartingSequenceNumber !== undefined && output.StartingSequenceNumber !== null
            ? output.StartingSequenceNumber
            : undefined,
    };
};
const deserializeAws_json1_0Shard = (output, context) => {
    return {
        ParentShardId: output.ParentShardId !== undefined && output.ParentShardId !== null ? output.ParentShardId : undefined,
        SequenceNumberRange: output.SequenceNumberRange !== undefined && output.SequenceNumberRange !== null
            ? deserializeAws_json1_0SequenceNumberRange(output.SequenceNumberRange, context)
            : undefined,
        ShardId: output.ShardId !== undefined && output.ShardId !== null ? output.ShardId : undefined,
    };
};
const deserializeAws_json1_0ShardDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Shard(entry, context);
    });
};
const deserializeAws_json1_0_Stream = (output, context) => {
    return {
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
        StreamLabel: output.StreamLabel !== undefined && output.StreamLabel !== null ? output.StreamLabel : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_0StreamDescription = (output, context) => {
    return {
        CreationRequestDateTime: output.CreationRequestDateTime !== undefined && output.CreationRequestDateTime !== null
            ? new Date(Math.round(output.CreationRequestDateTime * 1000))
            : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        LastEvaluatedShardId: output.LastEvaluatedShardId !== undefined && output.LastEvaluatedShardId !== null
            ? output.LastEvaluatedShardId
            : undefined,
        Shards: output.Shards !== undefined && output.Shards !== null
            ? deserializeAws_json1_0ShardDescriptionList(output.Shards, context)
            : undefined,
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
        StreamLabel: output.StreamLabel !== undefined && output.StreamLabel !== null ? output.StreamLabel : undefined,
        StreamStatus: output.StreamStatus !== undefined && output.StreamStatus !== null ? output.StreamStatus : undefined,
        StreamViewType: output.StreamViewType !== undefined && output.StreamViewType !== null ? output.StreamViewType : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
const deserializeAws_json1_0StreamList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0_Stream(entry, context);
    });
};
const deserializeAws_json1_0StreamRecord = (output, context) => {
    return {
        ApproximateCreationDateTime: output.ApproximateCreationDateTime !== undefined && output.ApproximateCreationDateTime !== null
            ? new Date(Math.round(output.ApproximateCreationDateTime * 1000))
            : undefined,
        Keys: output.Keys !== undefined && output.Keys !== null
            ? deserializeAws_json1_0AttributeMap(output.Keys, context)
            : undefined,
        NewImage: output.NewImage !== undefined && output.NewImage !== null
            ? deserializeAws_json1_0AttributeMap(output.NewImage, context)
            : undefined,
        OldImage: output.OldImage !== undefined && output.OldImage !== null
            ? deserializeAws_json1_0AttributeMap(output.OldImage, context)
            : undefined,
        SequenceNumber: output.SequenceNumber !== undefined && output.SequenceNumber !== null ? output.SequenceNumber : undefined,
        SizeBytes: output.SizeBytes !== undefined && output.SizeBytes !== null ? output.SizeBytes : undefined,
        StreamViewType: output.StreamViewType !== undefined && output.StreamViewType !== null ? output.StreamViewType : undefined,
    };
};
const deserializeAws_json1_0StringSetAttributeValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_0TrimmedDataAccessException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
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
//# sourceMappingURL=Aws_json1_0.js.map