import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_restJson1GetClipCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/getClip";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.ClipFragmentSelector !== undefined &&
                    input.ClipFragmentSelector !== null && {
                    ClipFragmentSelector: serializeAws_restJson1ClipFragmentSelector(input.ClipFragmentSelector, context),
                })), (input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN })), (input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName })));
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
export var serializeAws_restJson1GetDASHStreamingSessionURLCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/getDASHStreamingSessionURL";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DASHFragmentSelector !== undefined &&
                    input.DASHFragmentSelector !== null && {
                    DASHFragmentSelector: serializeAws_restJson1DASHFragmentSelector(input.DASHFragmentSelector, context),
                })), (input.DisplayFragmentNumber !== undefined &&
                    input.DisplayFragmentNumber !== null && { DisplayFragmentNumber: input.DisplayFragmentNumber })), (input.DisplayFragmentTimestamp !== undefined &&
                    input.DisplayFragmentTimestamp !== null && { DisplayFragmentTimestamp: input.DisplayFragmentTimestamp })), (input.Expires !== undefined && input.Expires !== null && { Expires: input.Expires })), (input.MaxManifestFragmentResults !== undefined &&
                    input.MaxManifestFragmentResults !== null && { MaxManifestFragmentResults: input.MaxManifestFragmentResults })), (input.PlaybackMode !== undefined && input.PlaybackMode !== null && { PlaybackMode: input.PlaybackMode })), (input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN })), (input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName })));
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
export var serializeAws_restJson1GetHLSStreamingSessionURLCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/getHLSStreamingSessionURL";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ContainerFormat !== undefined &&
                    input.ContainerFormat !== null && { ContainerFormat: input.ContainerFormat })), (input.DiscontinuityMode !== undefined &&
                    input.DiscontinuityMode !== null && { DiscontinuityMode: input.DiscontinuityMode })), (input.DisplayFragmentTimestamp !== undefined &&
                    input.DisplayFragmentTimestamp !== null && { DisplayFragmentTimestamp: input.DisplayFragmentTimestamp })), (input.Expires !== undefined && input.Expires !== null && { Expires: input.Expires })), (input.HLSFragmentSelector !== undefined &&
                    input.HLSFragmentSelector !== null && {
                    HLSFragmentSelector: serializeAws_restJson1HLSFragmentSelector(input.HLSFragmentSelector, context),
                })), (input.MaxMediaPlaylistFragmentResults !== undefined &&
                    input.MaxMediaPlaylistFragmentResults !== null && {
                    MaxMediaPlaylistFragmentResults: input.MaxMediaPlaylistFragmentResults,
                })), (input.PlaybackMode !== undefined && input.PlaybackMode !== null && { PlaybackMode: input.PlaybackMode })), (input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN })), (input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName })));
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
export var serializeAws_restJson1GetMediaForFragmentListCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/getMediaForFragmentList";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Fragments !== undefined &&
                    input.Fragments !== null && { Fragments: serializeAws_restJson1FragmentNumberList(input.Fragments, context) })), (input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN })), (input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName })));
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
export var serializeAws_restJson1ListFragmentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listFragments";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.FragmentSelector !== undefined &&
                    input.FragmentSelector !== null && {
                    FragmentSelector: serializeAws_restJson1FragmentSelector(input.FragmentSelector, context),
                })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StreamARN !== undefined && input.StreamARN !== null && { StreamARN: input.StreamARN })), (input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName })));
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
export var deserializeAws_restJson1GetClipCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetClipCommandError(output, context)];
        }
        contents = {
            $metadata: deserializeMetadata(output),
            ContentType: undefined,
            Payload: undefined,
        };
        if (output.headers["content-type"] !== undefined) {
            contents.ContentType = output.headers["content-type"];
        }
        data = output.body;
        contents.Payload = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1GetClipCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidCodecPrivateDataException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException": return [3 /*break*/, 6];
                    case "InvalidMediaFrameException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidMediaFrameException": return [3 /*break*/, 8];
                    case "MissingCodecPrivateDataException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException": return [3 /*break*/, 10];
                    case "NoDataRetentionException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException": return [3 /*break*/, 12];
                    case "NotAuthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException": return [3 /*break*/, 14];
                    case "ResourceNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException": return [3 /*break*/, 16];
                    case "UnsupportedStreamMediaTypeException": return [3 /*break*/, 18];
                    case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidMediaFrameExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetDASHStreamingSessionURLCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetDASHStreamingSessionURLCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DASHStreamingSessionURL: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DASHStreamingSessionURL !== undefined && data.DASHStreamingSessionURL !== null) {
                    contents.DASHStreamingSessionURL = data.DASHStreamingSessionURL;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetDASHStreamingSessionURLCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidCodecPrivateDataException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException": return [3 /*break*/, 6];
                    case "MissingCodecPrivateDataException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException": return [3 /*break*/, 8];
                    case "NoDataRetentionException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException": return [3 /*break*/, 10];
                    case "NotAuthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "UnsupportedStreamMediaTypeException": return [3 /*break*/, 16];
                    case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetHLSStreamingSessionURLCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetHLSStreamingSessionURLCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HLSStreamingSessionURL: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HLSStreamingSessionURL !== undefined && data.HLSStreamingSessionURL !== null) {
                    contents.HLSStreamingSessionURL = data.HLSStreamingSessionURL;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetHLSStreamingSessionURLCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException": return [3 /*break*/, 4];
                    case "InvalidCodecPrivateDataException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException": return [3 /*break*/, 6];
                    case "MissingCodecPrivateDataException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException": return [3 /*break*/, 8];
                    case "NoDataRetentionException": return [3 /*break*/, 10];
                    case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException": return [3 /*break*/, 10];
                    case "NotAuthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "UnsupportedStreamMediaTypeException": return [3 /*break*/, 16];
                    case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetMediaForFragmentListCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetMediaForFragmentListCommandError(output, context)];
        }
        contents = {
            $metadata: deserializeMetadata(output),
            ContentType: undefined,
            Payload: undefined,
        };
        if (output.headers["content-type"] !== undefined) {
            contents.ContentType = output.headers["content-type"];
        }
        data = output.body;
        contents.Payload = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1GetMediaForFragmentListCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListFragmentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFragmentsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Fragments: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Fragments !== undefined && data.Fragments !== null) {
                    contents.Fragments = deserializeAws_restJson1FragmentList(data.Fragments, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFragmentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException": return [3 /*break*/, 2];
                    case "InvalidArgumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException": return [3 /*break*/, 4];
                    case "NotAuthorizedException": return [3 /*break*/, 6];
                    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1ClientLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ClientLimitExceededException",
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
var deserializeAws_restJson1InvalidArgumentExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidArgumentException",
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
var deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidCodecPrivateDataException",
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
var deserializeAws_restJson1InvalidMediaFrameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidMediaFrameException",
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
var deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "MissingCodecPrivateDataException",
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
var deserializeAws_restJson1NoDataRetentionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoDataRetentionException",
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
var deserializeAws_restJson1NotAuthorizedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NotAuthorizedException",
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
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceNotFoundException",
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
var deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "UnsupportedStreamMediaTypeException",
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
var serializeAws_restJson1ClipFragmentSelector = function (input, context) {
    return __assign(__assign({}, (input.FragmentSelectorType !== undefined &&
        input.FragmentSelectorType !== null && { FragmentSelectorType: input.FragmentSelectorType })), (input.TimestampRange !== undefined &&
        input.TimestampRange !== null && {
        TimestampRange: serializeAws_restJson1ClipTimestampRange(input.TimestampRange, context),
    }));
};
var serializeAws_restJson1ClipTimestampRange = function (input, context) {
    return __assign(__assign({}, (input.EndTimestamp !== undefined &&
        input.EndTimestamp !== null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) })), (input.StartTimestamp !== undefined &&
        input.StartTimestamp !== null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }));
};
var serializeAws_restJson1DASHFragmentSelector = function (input, context) {
    return __assign(__assign({}, (input.FragmentSelectorType !== undefined &&
        input.FragmentSelectorType !== null && { FragmentSelectorType: input.FragmentSelectorType })), (input.TimestampRange !== undefined &&
        input.TimestampRange !== null && {
        TimestampRange: serializeAws_restJson1DASHTimestampRange(input.TimestampRange, context),
    }));
};
var serializeAws_restJson1DASHTimestampRange = function (input, context) {
    return __assign(__assign({}, (input.EndTimestamp !== undefined &&
        input.EndTimestamp !== null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) })), (input.StartTimestamp !== undefined &&
        input.StartTimestamp !== null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }));
};
var serializeAws_restJson1FragmentNumberList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1FragmentSelector = function (input, context) {
    return __assign(__assign({}, (input.FragmentSelectorType !== undefined &&
        input.FragmentSelectorType !== null && { FragmentSelectorType: input.FragmentSelectorType })), (input.TimestampRange !== undefined &&
        input.TimestampRange !== null && {
        TimestampRange: serializeAws_restJson1TimestampRange(input.TimestampRange, context),
    }));
};
var serializeAws_restJson1HLSFragmentSelector = function (input, context) {
    return __assign(__assign({}, (input.FragmentSelectorType !== undefined &&
        input.FragmentSelectorType !== null && { FragmentSelectorType: input.FragmentSelectorType })), (input.TimestampRange !== undefined &&
        input.TimestampRange !== null && {
        TimestampRange: serializeAws_restJson1HLSTimestampRange(input.TimestampRange, context),
    }));
};
var serializeAws_restJson1HLSTimestampRange = function (input, context) {
    return __assign(__assign({}, (input.EndTimestamp !== undefined &&
        input.EndTimestamp !== null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) })), (input.StartTimestamp !== undefined &&
        input.StartTimestamp !== null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }));
};
var serializeAws_restJson1TimestampRange = function (input, context) {
    return __assign(__assign({}, (input.EndTimestamp !== undefined &&
        input.EndTimestamp !== null && { EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000) })), (input.StartTimestamp !== undefined &&
        input.StartTimestamp !== null && { StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000) }));
};
var deserializeAws_restJson1Fragment = function (output, context) {
    return {
        FragmentLengthInMilliseconds: output.FragmentLengthInMilliseconds !== undefined && output.FragmentLengthInMilliseconds !== null
            ? output.FragmentLengthInMilliseconds
            : undefined,
        FragmentNumber: output.FragmentNumber !== undefined && output.FragmentNumber !== null ? output.FragmentNumber : undefined,
        FragmentSizeInBytes: output.FragmentSizeInBytes !== undefined && output.FragmentSizeInBytes !== null
            ? output.FragmentSizeInBytes
            : undefined,
        ProducerTimestamp: output.ProducerTimestamp !== undefined && output.ProducerTimestamp !== null
            ? new Date(Math.round(output.ProducerTimestamp * 1000))
            : undefined,
        ServerTimestamp: output.ServerTimestamp !== undefined && output.ServerTimestamp !== null
            ? new Date(Math.round(output.ServerTimestamp * 1000))
            : undefined,
    };
};
var deserializeAws_restJson1FragmentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Fragment(entry, context);
    });
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