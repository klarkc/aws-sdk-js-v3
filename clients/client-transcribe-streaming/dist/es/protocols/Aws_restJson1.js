import { __assign, __awaiter, __generator } from "tslib";
import { AudioStream, } from "../models/models_0";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_restJson1StartMedicalStreamTranscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (isSerializableHeaderValue(input.LanguageCode) && { "x-amzn-transcribe-language-code": input.LanguageCode })), (isSerializableHeaderValue(input.MediaSampleRateHertz) && {
                    "x-amzn-transcribe-sample-rate": input.MediaSampleRateHertz.toString(),
                })), (isSerializableHeaderValue(input.MediaEncoding) && { "x-amzn-transcribe-media-encoding": input.MediaEncoding })), (isSerializableHeaderValue(input.VocabularyName) && {
                    "x-amzn-transcribe-vocabulary-name": input.VocabularyName,
                })), (isSerializableHeaderValue(input.Specialty) && { "x-amzn-transcribe-specialty": input.Specialty })), (isSerializableHeaderValue(input.Type) && { "x-amzn-transcribe-type": input.Type })), (isSerializableHeaderValue(input.ShowSpeakerLabel) && {
                    "x-amzn-transcribe-show-speaker-label": input.ShowSpeakerLabel.toString(),
                })), (isSerializableHeaderValue(input.SessionId) && { "x-amzn-transcribe-session-id": input.SessionId })), (isSerializableHeaderValue(input.EnableChannelIdentification) && {
                    "x-amzn-transcribe-enable-channel-identification": input.EnableChannelIdentification.toString(),
                })), (isSerializableHeaderValue(input.NumberOfChannels) && {
                    "x-amzn-transcribe-number-of-channels": input.NumberOfChannels.toString(),
                })), (isSerializableHeaderValue(input.ContentIdentificationType) && {
                    "x-amzn-transcribe-content-identification-type": input.ContentIdentificationType,
                }));
                resolvedPath = "/medical-stream-transcription";
                if (input.AudioStream !== undefined) {
                    body = context.eventStreamMarshaller.serialize(input.AudioStream, function (event) {
                        return serializeAws_restJson1AudioStream_event(event, context);
                    });
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1StartStreamTranscriptionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (isSerializableHeaderValue(input.LanguageCode) && { "x-amzn-transcribe-language-code": input.LanguageCode })), (isSerializableHeaderValue(input.MediaSampleRateHertz) && {
                    "x-amzn-transcribe-sample-rate": input.MediaSampleRateHertz.toString(),
                })), (isSerializableHeaderValue(input.MediaEncoding) && { "x-amzn-transcribe-media-encoding": input.MediaEncoding })), (isSerializableHeaderValue(input.VocabularyName) && {
                    "x-amzn-transcribe-vocabulary-name": input.VocabularyName,
                })), (isSerializableHeaderValue(input.SessionId) && { "x-amzn-transcribe-session-id": input.SessionId })), (isSerializableHeaderValue(input.VocabularyFilterName) && {
                    "x-amzn-transcribe-vocabulary-filter-name": input.VocabularyFilterName,
                })), (isSerializableHeaderValue(input.VocabularyFilterMethod) && {
                    "x-amzn-transcribe-vocabulary-filter-method": input.VocabularyFilterMethod,
                })), (isSerializableHeaderValue(input.ShowSpeakerLabel) && {
                    "x-amzn-transcribe-show-speaker-label": input.ShowSpeakerLabel.toString(),
                })), (isSerializableHeaderValue(input.EnableChannelIdentification) && {
                    "x-amzn-transcribe-enable-channel-identification": input.EnableChannelIdentification.toString(),
                })), (isSerializableHeaderValue(input.NumberOfChannels) && {
                    "x-amzn-transcribe-number-of-channels": input.NumberOfChannels.toString(),
                })), (isSerializableHeaderValue(input.EnablePartialResultsStabilization) && {
                    "x-amzn-transcribe-enable-partial-results-stabilization": input.EnablePartialResultsStabilization.toString(),
                })), (isSerializableHeaderValue(input.PartialResultsStability) && {
                    "x-amzn-transcribe-partial-results-stability": input.PartialResultsStability,
                }));
                resolvedPath = "/stream-transcription";
                if (input.AudioStream !== undefined) {
                    body = context.eventStreamMarshaller.serialize(input.AudioStream, function (event) {
                        return serializeAws_restJson1AudioStream_event(event, context);
                    });
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1StartMedicalStreamTranscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StartMedicalStreamTranscriptionCommandError(output, context)];
        }
        contents = {
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
        data = context.eventStreamMarshaller.deserialize(output.body, function (event) { return __awaiter(void 0, void 0, void 0, function () {
            var eventName, eventHeaders, eventMessage, parsedEvent;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        eventName = Object.keys(event)[0];
                        eventHeaders = Object.entries(event[eventName].headers).reduce(function (accummulator, curr) {
                            accummulator[curr[0]] = curr[1].value;
                            return accummulator;
                        }, {});
                        eventMessage = {
                            headers: eventHeaders,
                            body: event[eventName].body,
                        };
                        parsedEvent = (_a = {},
                            _a[eventName] = eventMessage,
                            _a);
                        return [4 /*yield*/, deserializeAws_restJson1MedicalTranscriptResultStream_event(parsedEvent, context)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        }); });
        contents.TranscriptResultStream = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1StartMedicalStreamTranscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.transcribestreaming#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.transcribestreaming#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.transcribestreaming#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.transcribestreaming#LimitExceededException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.transcribestreaming#ServiceUnavailableException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1StartStreamTranscriptionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StartStreamTranscriptionCommandError(output, context)];
        }
        contents = {
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
        data = context.eventStreamMarshaller.deserialize(output.body, function (event) { return __awaiter(void 0, void 0, void 0, function () {
            var eventName, eventHeaders, eventMessage, parsedEvent;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        eventName = Object.keys(event)[0];
                        eventHeaders = Object.entries(event[eventName].headers).reduce(function (accummulator, curr) {
                            accummulator[curr[0]] = curr[1].value;
                            return accummulator;
                        }, {});
                        eventMessage = {
                            headers: eventHeaders,
                            body: event[eventName].body,
                        };
                        parsedEvent = (_a = {},
                            _a[eventName] = eventMessage,
                            _a);
                        return [4 /*yield*/, deserializeAws_restJson1TranscriptResultStream_event(parsedEvent, context)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        }); });
        contents.TranscriptResultStream = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1StartStreamTranscriptionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.transcribestreaming#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.transcribestreaming#ConflictException": return [3 /*break*/, 4];
                    case "InternalFailureException": return [3 /*break*/, 6];
                    case "com.amazonaws.transcribestreaming#InternalFailureException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.transcribestreaming#LimitExceededException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.transcribestreaming#ServiceUnavailableException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var serializeAws_restJson1AudioStream_event = function (input, context) {
    return AudioStream.visit(input, {
        AudioEvent: function (value) { return serializeAws_restJson1AudioEvent_event(value, context); },
        _: function (value) { return value; },
    });
};
var deserializeAws_restJson1MedicalTranscriptResultStream_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                if (!(output["TranscriptEvent"] !== undefined)) return [3 /*break*/, 2];
                _a = {};
                return [4 /*yield*/, deserializeAws_restJson1MedicalTranscriptEvent_event(output["TranscriptEvent"], context)];
            case 1: return [2 /*return*/, (_a.TranscriptEvent = _g.sent(),
                    _a)];
            case 2:
                if (!(output["BadRequestException"] !== undefined)) return [3 /*break*/, 4];
                _b = {};
                return [4 /*yield*/, deserializeAws_restJson1BadRequestException_event(output["BadRequestException"], context)];
            case 3: return [2 /*return*/, (_b.BadRequestException = _g.sent(),
                    _b)];
            case 4:
                if (!(output["LimitExceededException"] !== undefined)) return [3 /*break*/, 6];
                _c = {};
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededException_event(output["LimitExceededException"], context)];
            case 5: return [2 /*return*/, (_c.LimitExceededException = _g.sent(),
                    _c)];
            case 6:
                if (!(output["InternalFailureException"] !== undefined)) return [3 /*break*/, 8];
                _d = {};
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureException_event(output["InternalFailureException"], context)];
            case 7: return [2 /*return*/, (_d.InternalFailureException = _g.sent(),
                    _d)];
            case 8:
                if (!(output["ConflictException"] !== undefined)) return [3 /*break*/, 10];
                _e = {};
                return [4 /*yield*/, deserializeAws_restJson1ConflictException_event(output["ConflictException"], context)];
            case 9: return [2 /*return*/, (_e.ConflictException = _g.sent(),
                    _e)];
            case 10:
                if (!(output["ServiceUnavailableException"] !== undefined)) return [3 /*break*/, 12];
                _f = {};
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableException_event(output["ServiceUnavailableException"], context)];
            case 11: return [2 /*return*/, (_f.ServiceUnavailableException = _g.sent(),
                    _f)];
            case 12: return [2 /*return*/, { $unknown: output }];
        }
    });
}); };
var deserializeAws_restJson1TranscriptResultStream_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                if (!(output["TranscriptEvent"] !== undefined)) return [3 /*break*/, 2];
                _a = {};
                return [4 /*yield*/, deserializeAws_restJson1TranscriptEvent_event(output["TranscriptEvent"], context)];
            case 1: return [2 /*return*/, (_a.TranscriptEvent = _g.sent(),
                    _a)];
            case 2:
                if (!(output["BadRequestException"] !== undefined)) return [3 /*break*/, 4];
                _b = {};
                return [4 /*yield*/, deserializeAws_restJson1BadRequestException_event(output["BadRequestException"], context)];
            case 3: return [2 /*return*/, (_b.BadRequestException = _g.sent(),
                    _b)];
            case 4:
                if (!(output["LimitExceededException"] !== undefined)) return [3 /*break*/, 6];
                _c = {};
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededException_event(output["LimitExceededException"], context)];
            case 5: return [2 /*return*/, (_c.LimitExceededException = _g.sent(),
                    _c)];
            case 6:
                if (!(output["InternalFailureException"] !== undefined)) return [3 /*break*/, 8];
                _d = {};
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureException_event(output["InternalFailureException"], context)];
            case 7: return [2 /*return*/, (_d.InternalFailureException = _g.sent(),
                    _d)];
            case 8:
                if (!(output["ConflictException"] !== undefined)) return [3 /*break*/, 10];
                _e = {};
                return [4 /*yield*/, deserializeAws_restJson1ConflictException_event(output["ConflictException"], context)];
            case 9: return [2 /*return*/, (_e.ConflictException = _g.sent(),
                    _e)];
            case 10:
                if (!(output["ServiceUnavailableException"] !== undefined)) return [3 /*break*/, 12];
                _f = {};
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableException_event(output["ServiceUnavailableException"], context)];
            case 11: return [2 /*return*/, (_f.ServiceUnavailableException = _g.sent(),
                    _f)];
            case 12: return [2 /*return*/, { $unknown: output }];
        }
    });
}); };
var serializeAws_restJson1AudioEvent_event = function (input, context) {
    var message = {
        headers: {
            ":event-type": { type: "string", value: "AudioEvent" },
            ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(),
    };
    message.body = input.AudioChunk || message.body;
    return message;
};
var deserializeAws_restJson1BadRequestException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1ConflictException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1InternalFailureException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1LimitExceededException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1MedicalTranscriptEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = __assign(__assign({}, contents), deserializeAws_restJson1MedicalTranscriptEvent(data, context));
                return [2 /*return*/, contents];
        }
    });
}); };
var deserializeAws_restJson1ServiceUnavailableException_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                return [2 /*return*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
        }
    });
}); };
var deserializeAws_restJson1TranscriptEvent_event = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                contents = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = __assign(__assign({}, contents), deserializeAws_restJson1TranscriptEvent(data, context));
                return [2 /*return*/, contents];
        }
    });
}); };
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ConflictException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalFailureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalFailureException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "LimitExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ServiceUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceUnavailableException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1AudioEvent = function (input, context) {
    return __assign({}, (input.AudioChunk !== undefined &&
        input.AudioChunk !== null && { AudioChunk: context.base64Encoder(input.AudioChunk) }));
};
var serializeAws_restJson1AudioStream = function (input, context) {
    return AudioStream.visit(input, {
        AudioEvent: function (value) { return ({ AudioEvent: serializeAws_restJson1AudioEvent(value, context) }); },
        _: function (name, value) { return ({ name: value }); },
    });
};
var deserializeAws_restJson1Alternative = function (output, context) {
    return {
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_restJson1ItemList(output.Items, context)
            : undefined,
        Transcript: output.Transcript !== undefined && output.Transcript !== null ? output.Transcript : undefined,
    };
};
var deserializeAws_restJson1AlternativeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Alternative(entry, context);
    });
};
var deserializeAws_restJson1BadRequestException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1ConflictException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1InternalFailureException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1Item = function (output, context) {
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
var deserializeAws_restJson1ItemList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Item(entry, context);
    });
};
var deserializeAws_restJson1LimitExceededException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1MedicalAlternative = function (output, context) {
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
var deserializeAws_restJson1MedicalAlternativeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MedicalAlternative(entry, context);
    });
};
var deserializeAws_restJson1MedicalEntity = function (output, context) {
    return {
        Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
        Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    };
};
var deserializeAws_restJson1MedicalEntityList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MedicalEntity(entry, context);
    });
};
var deserializeAws_restJson1MedicalItem = function (output, context) {
    return {
        Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        Speaker: output.Speaker !== undefined && output.Speaker !== null ? output.Speaker : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1MedicalItemList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MedicalItem(entry, context);
    });
};
var deserializeAws_restJson1MedicalResult = function (output, context) {
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
var deserializeAws_restJson1MedicalResultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MedicalResult(entry, context);
    });
};
var deserializeAws_restJson1MedicalTranscript = function (output, context) {
    return {
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_restJson1MedicalResultList(output.Results, context)
            : undefined,
    };
};
var deserializeAws_restJson1MedicalTranscriptEvent = function (output, context) {
    return {
        Transcript: output.Transcript !== undefined && output.Transcript !== null
            ? deserializeAws_restJson1MedicalTranscript(output.Transcript, context)
            : undefined,
    };
};
var deserializeAws_restJson1MedicalTranscriptResultStream = function (output, context) {
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
var deserializeAws_restJson1Result = function (output, context) {
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
var deserializeAws_restJson1ResultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Result(entry, context);
    });
};
var deserializeAws_restJson1ServiceUnavailableException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1Transcript = function (output, context) {
    return {
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_restJson1ResultList(output.Results, context)
            : undefined,
    };
};
var deserializeAws_restJson1TranscriptEvent = function (output, context) {
    return {
        Transcript: output.Transcript !== undefined && output.Transcript !== null
            ? deserializeAws_restJson1Transcript(output.Transcript, context)
            : undefined,
    };
};
var deserializeAws_restJson1TranscriptResultStream = function (output, context) {
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
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
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