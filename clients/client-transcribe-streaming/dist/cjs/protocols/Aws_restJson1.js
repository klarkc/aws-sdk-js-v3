"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1StartStreamTranscriptionCommand = exports.deserializeAws_restJson1StartMedicalStreamTranscriptionCommand = exports.serializeAws_restJson1StartStreamTranscriptionCommand = exports.serializeAws_restJson1StartMedicalStreamTranscriptionCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1StartMedicalStreamTranscriptionCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.LanguageCode) && { "x-amzn-transcribe-language-code": input.LanguageCode }),
        ...(isSerializableHeaderValue(input.MediaSampleRateHertz) && {
            "x-amzn-transcribe-sample-rate": input.MediaSampleRateHertz.toString(),
        }),
        ...(isSerializableHeaderValue(input.MediaEncoding) && { "x-amzn-transcribe-media-encoding": input.MediaEncoding }),
        ...(isSerializableHeaderValue(input.VocabularyName) && {
            "x-amzn-transcribe-vocabulary-name": input.VocabularyName,
        }),
        ...(isSerializableHeaderValue(input.Specialty) && { "x-amzn-transcribe-specialty": input.Specialty }),
        ...(isSerializableHeaderValue(input.Type) && { "x-amzn-transcribe-type": input.Type }),
        ...(isSerializableHeaderValue(input.ShowSpeakerLabel) && {
            "x-amzn-transcribe-show-speaker-label": input.ShowSpeakerLabel.toString(),
        }),
        ...(isSerializableHeaderValue(input.SessionId) && { "x-amzn-transcribe-session-id": input.SessionId }),
        ...(isSerializableHeaderValue(input.EnableChannelIdentification) && {
            "x-amzn-transcribe-enable-channel-identification": input.EnableChannelIdentification.toString(),
        }),
        ...(isSerializableHeaderValue(input.NumberOfChannels) && {
            "x-amzn-transcribe-number-of-channels": input.NumberOfChannels.toString(),
        }),
        ...(isSerializableHeaderValue(input.ContentIdentificationType) && {
            "x-amzn-transcribe-content-identification-type": input.ContentIdentificationType,
        }),
    };
    let resolvedPath = "/medical-stream-transcription";
    let body;
    if (input.AudioStream !== undefined) {
        body = context.eventStreamMarshaller.serialize(input.AudioStream, (event) => serializeAws_restJson1AudioStream_event(event, context));
    }
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
exports.serializeAws_restJson1StartMedicalStreamTranscriptionCommand = serializeAws_restJson1StartMedicalStreamTranscriptionCommand;
const serializeAws_restJson1StartStreamTranscriptionCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.LanguageCode) && { "x-amzn-transcribe-language-code": input.LanguageCode }),
        ...(isSerializableHeaderValue(input.MediaSampleRateHertz) && {
            "x-amzn-transcribe-sample-rate": input.MediaSampleRateHertz.toString(),
        }),
        ...(isSerializableHeaderValue(input.MediaEncoding) && { "x-amzn-transcribe-media-encoding": input.MediaEncoding }),
        ...(isSerializableHeaderValue(input.VocabularyName) && {
            "x-amzn-transcribe-vocabulary-name": input.VocabularyName,
        }),
        ...(isSerializableHeaderValue(input.SessionId) && { "x-amzn-transcribe-session-id": input.SessionId }),
        ...(isSerializableHeaderValue(input.VocabularyFilterName) && {
            "x-amzn-transcribe-vocabulary-filter-name": input.VocabularyFilterName,
        }),
        ...(isSerializableHeaderValue(input.VocabularyFilterMethod) && {
            "x-amzn-transcribe-vocabulary-filter-method": input.VocabularyFilterMethod,
        }),
        ...(isSerializableHeaderValue(input.ShowSpeakerLabel) && {
            "x-amzn-transcribe-show-speaker-label": input.ShowSpeakerLabel.toString(),
        }),
        ...(isSerializableHeaderValue(input.EnableChannelIdentification) && {
            "x-amzn-transcribe-enable-channel-identification": input.EnableChannelIdentification.toString(),
        }),
        ...(isSerializableHeaderValue(input.NumberOfChannels) && {
            "x-amzn-transcribe-number-of-channels": input.NumberOfChannels.toString(),
        }),
        ...(isSerializableHeaderValue(input.EnablePartialResultsStabilization) && {
            "x-amzn-transcribe-enable-partial-results-stabilization": input.EnablePartialResultsStabilization.toString(),
        }),
        ...(isSerializableHeaderValue(input.PartialResultsStability) && {
            "x-amzn-transcribe-partial-results-stability": input.PartialResultsStability,
        }),
    };
    let resolvedPath = "/stream-transcription";
    let body;
    if (input.AudioStream !== undefined) {
        body = context.eventStreamMarshaller.serialize(input.AudioStream, (event) => serializeAws_restJson1AudioStream_event(event, context));
    }
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
exports.serializeAws_restJson1StartStreamTranscriptionCommand = serializeAws_restJson1StartStreamTranscriptionCommand;
const deserializeAws_restJson1StartMedicalStreamTranscriptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartMedicalStreamTranscriptionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContentIdentificationType: undefined,
        EnableChannelIdentification: undefined,
        LanguageCode: undefined,
        MediaEncoding: undefined,
        MediaSampleRateHertz: undefined,
        NumberOfChannels: undefined,
        RequestId: undefined,
        SessionId: undefined,
        ShowSpeakerLabel: undefined,
        Specialty: undefined,
        TranscriptResultStream: undefined,
        Type: undefined,
        VocabularyName: undefined,
    };
    if (output.headers["x-amzn-request-id"] !== undefined) {
        contents.RequestId = output.headers["x-amzn-request-id"];
    }
    if (output.headers["x-amzn-transcribe-language-code"] !== undefined) {
        contents.LanguageCode = output.headers["x-amzn-transcribe-language-code"];
    }
    if (output.headers["x-amzn-transcribe-sample-rate"] !== undefined) {
        contents.MediaSampleRateHertz = parseInt(output.headers["x-amzn-transcribe-sample-rate"], 10);
    }
    if (output.headers["x-amzn-transcribe-media-encoding"] !== undefined) {
        contents.MediaEncoding = output.headers["x-amzn-transcribe-media-encoding"];
    }
    if (output.headers["x-amzn-transcribe-vocabulary-name"] !== undefined) {
        contents.VocabularyName = output.headers["x-amzn-transcribe-vocabulary-name"];
    }
    if (output.headers["x-amzn-transcribe-specialty"] !== undefined) {
        contents.Specialty = output.headers["x-amzn-transcribe-specialty"];
    }
    if (output.headers["x-amzn-transcribe-type"] !== undefined) {
        contents.Type = output.headers["x-amzn-transcribe-type"];
    }
    if (output.headers["x-amzn-transcribe-show-speaker-label"] !== undefined) {
        contents.ShowSpeakerLabel = output.headers["x-amzn-transcribe-show-speaker-label"] === "true";
    }
    if (output.headers["x-amzn-transcribe-session-id"] !== undefined) {
        contents.SessionId = output.headers["x-amzn-transcribe-session-id"];
    }
    if (output.headers["x-amzn-transcribe-enable-channel-identification"] !== undefined) {
        contents.EnableChannelIdentification = output.headers["x-amzn-transcribe-enable-channel-identification"] === "true";
    }
    if (output.headers["x-amzn-transcribe-number-of-channels"] !== undefined) {
        contents.NumberOfChannels = parseInt(output.headers["x-amzn-transcribe-number-of-channels"], 10);
    }
    if (output.headers["x-amzn-transcribe-content-identification-type"] !== undefined) {
        contents.ContentIdentificationType = output.headers["x-amzn-transcribe-content-identification-type"];
    }
    const data = context.eventStreamMarshaller.deserialize(output.body, async (event) => {
        const eventName = Object.keys(event)[0];
        const eventHeaders = Object.entries(event[eventName].headers).reduce((accummulator, curr) => {
            accummulator[curr[0]] = curr[1].value;
            return accummulator;
        }, {});
        const eventMessage = {
            headers: eventHeaders,
            body: event[eventName].body,
        };
        const parsedEvent = {
            [eventName]: eventMessage,
        };
        return await deserializeAws_restJson1MedicalTranscriptResultStream_event(parsedEvent, context);
    });
    contents.TranscriptResultStream = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartMedicalStreamTranscriptionCommand = deserializeAws_restJson1StartMedicalStreamTranscriptionCommand;
const deserializeAws_restJson1StartMedicalStreamTranscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribestreaming#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transcribestreaming#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribestreaming#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribestreaming#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartStreamTranscriptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartStreamTranscriptionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EnableChannelIdentification: undefined,
        EnablePartialResultsStabilization: undefined,
        LanguageCode: undefined,
        MediaEncoding: undefined,
        MediaSampleRateHertz: undefined,
        NumberOfChannels: undefined,
        PartialResultsStability: undefined,
        RequestId: undefined,
        SessionId: undefined,
        ShowSpeakerLabel: undefined,
        TranscriptResultStream: undefined,
        VocabularyFilterMethod: undefined,
        VocabularyFilterName: undefined,
        VocabularyName: undefined,
    };
    if (output.headers["x-amzn-request-id"] !== undefined) {
        contents.RequestId = output.headers["x-amzn-request-id"];
    }
    if (output.headers["x-amzn-transcribe-language-code"] !== undefined) {
        contents.LanguageCode = output.headers["x-amzn-transcribe-language-code"];
    }
    if (output.headers["x-amzn-transcribe-sample-rate"] !== undefined) {
        contents.MediaSampleRateHertz = parseInt(output.headers["x-amzn-transcribe-sample-rate"], 10);
    }
    if (output.headers["x-amzn-transcribe-media-encoding"] !== undefined) {
        contents.MediaEncoding = output.headers["x-amzn-transcribe-media-encoding"];
    }
    if (output.headers["x-amzn-transcribe-vocabulary-name"] !== undefined) {
        contents.VocabularyName = output.headers["x-amzn-transcribe-vocabulary-name"];
    }
    if (output.headers["x-amzn-transcribe-session-id"] !== undefined) {
        contents.SessionId = output.headers["x-amzn-transcribe-session-id"];
    }
    if (output.headers["x-amzn-transcribe-vocabulary-filter-name"] !== undefined) {
        contents.VocabularyFilterName = output.headers["x-amzn-transcribe-vocabulary-filter-name"];
    }
    if (output.headers["x-amzn-transcribe-vocabulary-filter-method"] !== undefined) {
        contents.VocabularyFilterMethod = output.headers["x-amzn-transcribe-vocabulary-filter-method"];
    }
    if (output.headers["x-amzn-transcribe-show-speaker-label"] !== undefined) {
        contents.ShowSpeakerLabel = output.headers["x-amzn-transcribe-show-speaker-label"] === "true";
    }
    if (output.headers["x-amzn-transcribe-enable-channel-identification"] !== undefined) {
        contents.EnableChannelIdentification = output.headers["x-amzn-transcribe-enable-channel-identification"] === "true";
    }
    if (output.headers["x-amzn-transcribe-number-of-channels"] !== undefined) {
        contents.NumberOfChannels = parseInt(output.headers["x-amzn-transcribe-number-of-channels"], 10);
    }
    if (output.headers["x-amzn-transcribe-enable-partial-results-stabilization"] !== undefined) {
        contents.EnablePartialResultsStabilization =
            output.headers["x-amzn-transcribe-enable-partial-results-stabilization"] === "true";
    }
    if (output.headers["x-amzn-transcribe-partial-results-stability"] !== undefined) {
        contents.PartialResultsStability = output.headers["x-amzn-transcribe-partial-results-stability"];
    }
    const data = context.eventStreamMarshaller.deserialize(output.body, async (event) => {
        const eventName = Object.keys(event)[0];
        const eventHeaders = Object.entries(event[eventName].headers).reduce((accummulator, curr) => {
            accummulator[curr[0]] = curr[1].value;
            return accummulator;
        }, {});
        const eventMessage = {
            headers: eventHeaders,
            body: event[eventName].body,
        };
        const parsedEvent = {
            [eventName]: eventMessage,
        };
        return await deserializeAws_restJson1TranscriptResultStream_event(parsedEvent, context);
    });
    contents.TranscriptResultStream = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartStreamTranscriptionCommand = deserializeAws_restJson1StartStreamTranscriptionCommand;
const deserializeAws_restJson1StartStreamTranscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.transcribestreaming#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.transcribestreaming#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.transcribestreaming#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.transcribestreaming#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const serializeAws_restJson1AudioStream_event = (input, context) => {
    return models_0_1.AudioStream.visit(input, {
        AudioEvent: (value) => serializeAws_restJson1AudioEvent_event(value, context),
        _: (value) => value,
    });
};
const deserializeAws_restJson1MedicalTranscriptResultStream_event = async (output, context) => {
    if (output["TranscriptEvent"] !== undefined) {
        return {
            TranscriptEvent: await deserializeAws_restJson1MedicalTranscriptEvent_event(output["TranscriptEvent"], context),
        };
    }
    if (output["BadRequestException"] !== undefined) {
        return {
            BadRequestException: await deserializeAws_restJson1BadRequestException_event(output["BadRequestException"], context),
        };
    }
    if (output["LimitExceededException"] !== undefined) {
        return {
            LimitExceededException: await deserializeAws_restJson1LimitExceededException_event(output["LimitExceededException"], context),
        };
    }
    if (output["InternalFailureException"] !== undefined) {
        return {
            InternalFailureException: await deserializeAws_restJson1InternalFailureException_event(output["InternalFailureException"], context),
        };
    }
    if (output["ConflictException"] !== undefined) {
        return {
            ConflictException: await deserializeAws_restJson1ConflictException_event(output["ConflictException"], context),
        };
    }
    if (output["ServiceUnavailableException"] !== undefined) {
        return {
            ServiceUnavailableException: await deserializeAws_restJson1ServiceUnavailableException_event(output["ServiceUnavailableException"], context),
        };
    }
    return { $unknown: output };
};
const deserializeAws_restJson1TranscriptResultStream_event = async (output, context) => {
    if (output["TranscriptEvent"] !== undefined) {
        return {
            TranscriptEvent: await deserializeAws_restJson1TranscriptEvent_event(output["TranscriptEvent"], context),
        };
    }
    if (output["BadRequestException"] !== undefined) {
        return {
            BadRequestException: await deserializeAws_restJson1BadRequestException_event(output["BadRequestException"], context),
        };
    }
    if (output["LimitExceededException"] !== undefined) {
        return {
            LimitExceededException: await deserializeAws_restJson1LimitExceededException_event(output["LimitExceededException"], context),
        };
    }
    if (output["InternalFailureException"] !== undefined) {
        return {
            InternalFailureException: await deserializeAws_restJson1InternalFailureException_event(output["InternalFailureException"], context),
        };
    }
    if (output["ConflictException"] !== undefined) {
        return {
            ConflictException: await deserializeAws_restJson1ConflictException_event(output["ConflictException"], context),
        };
    }
    if (output["ServiceUnavailableException"] !== undefined) {
        return {
            ServiceUnavailableException: await deserializeAws_restJson1ServiceUnavailableException_event(output["ServiceUnavailableException"], context),
        };
    }
    return { $unknown: output };
};
const serializeAws_restJson1AudioEvent_event = (input, context) => {
    const message = {
        headers: {
            ":event-type": { type: "string", value: "AudioEvent" },
            ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(),
    };
    message.body = input.AudioChunk || message.body;
    return message;
};
const deserializeAws_restJson1BadRequestException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1ConflictException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1InternalFailureException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1LimitExceededException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1MedicalTranscriptEvent_event = async (output, context) => {
    let contents = {};
    const data = await parseBody(output.body, context);
    contents = {
        ...contents,
        ...deserializeAws_restJson1MedicalTranscriptEvent(data, context),
    };
    return contents;
};
const deserializeAws_restJson1ServiceUnavailableException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1TranscriptEvent_event = async (output, context) => {
    let contents = {};
    const data = await parseBody(output.body, context);
    contents = {
        ...contents,
        ...deserializeAws_restJson1TranscriptEvent(data, context),
    };
    return contents;
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
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
const deserializeAws_restJson1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalFailureException",
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
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
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
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
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
const serializeAws_restJson1AudioEvent = (input, context) => {
    return {
        ...(input.AudioChunk !== undefined &&
            input.AudioChunk !== null && { AudioChunk: context.base64Encoder(input.AudioChunk) }),
    };
};
const serializeAws_restJson1AudioStream = (input, context) => {
    return models_0_1.AudioStream.visit(input, {
        AudioEvent: (value) => ({ AudioEvent: serializeAws_restJson1AudioEvent(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const deserializeAws_restJson1Alternative = (output, context) => {
    return {
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_restJson1ItemList(output.Items, context)
            : undefined,
        Transcript: output.Transcript !== undefined && output.Transcript !== null ? output.Transcript : undefined,
    };
};
const deserializeAws_restJson1AlternativeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Alternative(entry, context);
    });
};
const deserializeAws_restJson1BadRequestException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1InternalFailureException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1Item = (output, context) => {
    return {
        Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        Speaker: output.Speaker !== undefined && output.Speaker !== null ? output.Speaker : undefined,
        Stable: output.Stable !== undefined && output.Stable !== null ? output.Stable : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        VocabularyFilterMatch: output.VocabularyFilterMatch !== undefined && output.VocabularyFilterMatch !== null
            ? output.VocabularyFilterMatch
            : undefined,
    };
};
const deserializeAws_restJson1ItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Item(entry, context);
    });
};
const deserializeAws_restJson1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1MedicalAlternative = (output, context) => {
    return {
        Entities: output.Entities !== undefined && output.Entities !== null
            ? deserializeAws_restJson1MedicalEntityList(output.Entities, context)
            : undefined,
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_restJson1MedicalItemList(output.Items, context)
            : undefined,
        Transcript: output.Transcript !== undefined && output.Transcript !== null ? output.Transcript : undefined,
    };
};
const deserializeAws_restJson1MedicalAlternativeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MedicalAlternative(entry, context);
    });
};
const deserializeAws_restJson1MedicalEntity = (output, context) => {
    return {
        Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
        Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    };
};
const deserializeAws_restJson1MedicalEntityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MedicalEntity(entry, context);
    });
};
const deserializeAws_restJson1MedicalItem = (output, context) => {
    return {
        Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        Speaker: output.Speaker !== undefined && output.Speaker !== null ? output.Speaker : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1MedicalItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MedicalItem(entry, context);
    });
};
const deserializeAws_restJson1MedicalResult = (output, context) => {
    return {
        Alternatives: output.Alternatives !== undefined && output.Alternatives !== null
            ? deserializeAws_restJson1MedicalAlternativeList(output.Alternatives, context)
            : undefined,
        ChannelId: output.ChannelId !== undefined && output.ChannelId !== null ? output.ChannelId : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        IsPartial: output.IsPartial !== undefined && output.IsPartial !== null ? output.IsPartial : undefined,
        ResultId: output.ResultId !== undefined && output.ResultId !== null ? output.ResultId : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    };
};
const deserializeAws_restJson1MedicalResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MedicalResult(entry, context);
    });
};
const deserializeAws_restJson1MedicalTranscript = (output, context) => {
    return {
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_restJson1MedicalResultList(output.Results, context)
            : undefined,
    };
};
const deserializeAws_restJson1MedicalTranscriptEvent = (output, context) => {
    return {
        Transcript: output.Transcript !== undefined && output.Transcript !== null
            ? deserializeAws_restJson1MedicalTranscript(output.Transcript, context)
            : undefined,
    };
};
const deserializeAws_restJson1MedicalTranscriptResultStream = (output, context) => {
    if (output.BadRequestException !== undefined && output.BadRequestException !== null) {
        return {
            BadRequestException: deserializeAws_restJson1BadRequestException(output.BadRequestException, context),
        };
    }
    if (output.ConflictException !== undefined && output.ConflictException !== null) {
        return {
            ConflictException: deserializeAws_restJson1ConflictException(output.ConflictException, context),
        };
    }
    if (output.InternalFailureException !== undefined && output.InternalFailureException !== null) {
        return {
            InternalFailureException: deserializeAws_restJson1InternalFailureException(output.InternalFailureException, context),
        };
    }
    if (output.LimitExceededException !== undefined && output.LimitExceededException !== null) {
        return {
            LimitExceededException: deserializeAws_restJson1LimitExceededException(output.LimitExceededException, context),
        };
    }
    if (output.ServiceUnavailableException !== undefined && output.ServiceUnavailableException !== null) {
        return {
            ServiceUnavailableException: deserializeAws_restJson1ServiceUnavailableException(output.ServiceUnavailableException, context),
        };
    }
    if (output.TranscriptEvent !== undefined && output.TranscriptEvent !== null) {
        return {
            TranscriptEvent: deserializeAws_restJson1MedicalTranscriptEvent(output.TranscriptEvent, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1Result = (output, context) => {
    return {
        Alternatives: output.Alternatives !== undefined && output.Alternatives !== null
            ? deserializeAws_restJson1AlternativeList(output.Alternatives, context)
            : undefined,
        ChannelId: output.ChannelId !== undefined && output.ChannelId !== null ? output.ChannelId : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        IsPartial: output.IsPartial !== undefined && output.IsPartial !== null ? output.IsPartial : undefined,
        ResultId: output.ResultId !== undefined && output.ResultId !== null ? output.ResultId : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    };
};
const deserializeAws_restJson1ResultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Result(entry, context);
    });
};
const deserializeAws_restJson1ServiceUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1Transcript = (output, context) => {
    return {
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_restJson1ResultList(output.Results, context)
            : undefined,
    };
};
const deserializeAws_restJson1TranscriptEvent = (output, context) => {
    return {
        Transcript: output.Transcript !== undefined && output.Transcript !== null
            ? deserializeAws_restJson1Transcript(output.Transcript, context)
            : undefined,
    };
};
const deserializeAws_restJson1TranscriptResultStream = (output, context) => {
    if (output.BadRequestException !== undefined && output.BadRequestException !== null) {
        return {
            BadRequestException: deserializeAws_restJson1BadRequestException(output.BadRequestException, context),
        };
    }
    if (output.ConflictException !== undefined && output.ConflictException !== null) {
        return {
            ConflictException: deserializeAws_restJson1ConflictException(output.ConflictException, context),
        };
    }
    if (output.InternalFailureException !== undefined && output.InternalFailureException !== null) {
        return {
            InternalFailureException: deserializeAws_restJson1InternalFailureException(output.InternalFailureException, context),
        };
    }
    if (output.LimitExceededException !== undefined && output.LimitExceededException !== null) {
        return {
            LimitExceededException: deserializeAws_restJson1LimitExceededException(output.LimitExceededException, context),
        };
    }
    if (output.ServiceUnavailableException !== undefined && output.ServiceUnavailableException !== null) {
        return {
            ServiceUnavailableException: deserializeAws_restJson1ServiceUnavailableException(output.ServiceUnavailableException, context),
        };
    }
    if (output.TranscriptEvent !== undefined && output.TranscriptEvent !== null) {
        return {
            TranscriptEvent: deserializeAws_restJson1TranscriptEvent(output.TranscriptEvent, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
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