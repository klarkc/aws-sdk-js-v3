import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CancelJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2012-09-25/jobs/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2012-09-25/jobs";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Input !== undefined &&
                    input.Input !== null && { Input: serializeAws_restJson1JobInput(input.Input, context) })), (input.Inputs !== undefined &&
                    input.Inputs !== null && { Inputs: serializeAws_restJson1JobInputs(input.Inputs, context) })), (input.Output !== undefined &&
                    input.Output !== null && { Output: serializeAws_restJson1CreateJobOutput(input.Output, context) })), (input.OutputKeyPrefix !== undefined &&
                    input.OutputKeyPrefix !== null && { OutputKeyPrefix: input.OutputKeyPrefix })), (input.Outputs !== undefined &&
                    input.Outputs !== null && { Outputs: serializeAws_restJson1CreateJobOutputs(input.Outputs, context) })), (input.PipelineId !== undefined && input.PipelineId !== null && { PipelineId: input.PipelineId })), (input.Playlists !== undefined &&
                    input.Playlists !== null && { Playlists: serializeAws_restJson1CreateJobPlaylists(input.Playlists, context) })), (input.UserMetadata !== undefined &&
                    input.UserMetadata !== null && { UserMetadata: serializeAws_restJson1UserMetadata(input.UserMetadata, context) })));
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
export var serializeAws_restJson1CreatePipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2012-09-25/pipelines";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AwsKmsKeyArn !== undefined && input.AwsKmsKeyArn !== null && { AwsKmsKeyArn: input.AwsKmsKeyArn })), (input.ContentConfig !== undefined &&
                    input.ContentConfig !== null && {
                    ContentConfig: serializeAws_restJson1PipelineOutputConfig(input.ContentConfig, context),
                })), (input.InputBucket !== undefined && input.InputBucket !== null && { InputBucket: input.InputBucket })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Notifications !== undefined &&
                    input.Notifications !== null && {
                    Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
                })), (input.OutputBucket !== undefined && input.OutputBucket !== null && { OutputBucket: input.OutputBucket })), (input.Role !== undefined && input.Role !== null && { Role: input.Role })), (input.ThumbnailConfig !== undefined &&
                    input.ThumbnailConfig !== null && {
                    ThumbnailConfig: serializeAws_restJson1PipelineOutputConfig(input.ThumbnailConfig, context),
                })));
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
export var serializeAws_restJson1CreatePresetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2012-09-25/presets";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Audio !== undefined &&
                    input.Audio !== null && { Audio: serializeAws_restJson1AudioParameters(input.Audio, context) })), (input.Container !== undefined && input.Container !== null && { Container: input.Container })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Thumbnails !== undefined &&
                    input.Thumbnails !== null && { Thumbnails: serializeAws_restJson1Thumbnails(input.Thumbnails, context) })), (input.Video !== undefined &&
                    input.Video !== null && { Video: serializeAws_restJson1VideoParameters(input.Video, context) })));
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
export var serializeAws_restJson1DeletePipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2012-09-25/pipelines/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeletePresetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2012-09-25/presets/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListJobsByPipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2012-09-25/jobsByPipeline/{PipelineId}";
                if (input.PipelineId !== undefined) {
                    labelValue = input.PipelineId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: PipelineId.");
                    }
                    resolvedPath = resolvedPath.replace("{PipelineId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: PipelineId.");
                }
                query = __assign(__assign({}, (input.Ascending !== undefined && { Ascending: input.Ascending })), (input.PageToken !== undefined && { PageToken: input.PageToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListJobsByStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2012-09-25/jobsByStatus/{Status}";
                if (input.Status !== undefined) {
                    labelValue = input.Status;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Status.");
                    }
                    resolvedPath = resolvedPath.replace("{Status}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Status.");
                }
                query = __assign(__assign({}, (input.Ascending !== undefined && { Ascending: input.Ascending })), (input.PageToken !== undefined && { PageToken: input.PageToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListPipelinesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2012-09-25/pipelines";
                query = __assign(__assign({}, (input.Ascending !== undefined && { Ascending: input.Ascending })), (input.PageToken !== undefined && { PageToken: input.PageToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListPresetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2012-09-25/presets";
                query = __assign(__assign({}, (input.Ascending !== undefined && { Ascending: input.Ascending })), (input.PageToken !== undefined && { PageToken: input.PageToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ReadJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2012-09-25/jobs/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ReadPipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2012-09-25/pipelines/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ReadPresetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2012-09-25/presets/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1TestRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2012-09-25/roleTests";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.InputBucket !== undefined && input.InputBucket !== null && { InputBucket: input.InputBucket })), (input.OutputBucket !== undefined && input.OutputBucket !== null && { OutputBucket: input.OutputBucket })), (input.Role !== undefined && input.Role !== null && { Role: input.Role })), (input.Topics !== undefined &&
                    input.Topics !== null && { Topics: serializeAws_restJson1SnsTopics(input.Topics, context) })));
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
export var serializeAws_restJson1UpdatePipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2012-09-25/pipelines/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AwsKmsKeyArn !== undefined && input.AwsKmsKeyArn !== null && { AwsKmsKeyArn: input.AwsKmsKeyArn })), (input.ContentConfig !== undefined &&
                    input.ContentConfig !== null && {
                    ContentConfig: serializeAws_restJson1PipelineOutputConfig(input.ContentConfig, context),
                })), (input.InputBucket !== undefined && input.InputBucket !== null && { InputBucket: input.InputBucket })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Notifications !== undefined &&
                    input.Notifications !== null && {
                    Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
                })), (input.Role !== undefined && input.Role !== null && { Role: input.Role })), (input.ThumbnailConfig !== undefined &&
                    input.ThumbnailConfig !== null && {
                    ThumbnailConfig: serializeAws_restJson1PipelineOutputConfig(input.ThumbnailConfig, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdatePipelineNotificationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2012-09-25/pipelines/{Id}/notifications";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                body = JSON.stringify(__assign({}, (input.Notifications !== undefined &&
                    input.Notifications !== null && {
                    Notifications: serializeAws_restJson1Notifications(input.Notifications, context),
                })));
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
export var serializeAws_restJson1UpdatePipelineStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2012-09-25/pipelines/{Id}/status";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                body = JSON.stringify(__assign({}, (input.Status !== undefined && input.Status !== null && { Status: input.Status })));
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
export var deserializeAws_restJson1CancelJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CancelJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Job: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Job !== undefined && data.Job !== null) {
                    contents.Job = deserializeAws_restJson1Job(data.Job, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreatePipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreatePipelineCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Pipeline: undefined,
                    Warnings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Pipeline !== undefined && data.Pipeline !== null) {
                    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
                }
                if (data.Warnings !== undefined && data.Warnings !== null) {
                    contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreatePipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreatePresetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreatePresetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Preset: undefined,
                    Warning: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Preset !== undefined && data.Preset !== null) {
                    contents.Preset = deserializeAws_restJson1Preset(data.Preset, context);
                }
                if (data.Warning !== undefined && data.Warning !== null) {
                    contents.Warning = data.Warning;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreatePresetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#LimitExceededException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeletePipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeletePipelineCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeletePipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeletePresetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeletePresetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeletePresetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListJobsByPipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListJobsByPipelineCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Jobs: undefined,
                    NextPageToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Jobs !== undefined && data.Jobs !== null) {
                    contents.Jobs = deserializeAws_restJson1Jobs(data.Jobs, context);
                }
                if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
                    contents.NextPageToken = data.NextPageToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListJobsByPipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListJobsByStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListJobsByStatusCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Jobs: undefined,
                    NextPageToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Jobs !== undefined && data.Jobs !== null) {
                    contents.Jobs = deserializeAws_restJson1Jobs(data.Jobs, context);
                }
                if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
                    contents.NextPageToken = data.NextPageToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListJobsByStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListPipelinesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListPipelinesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextPageToken: undefined,
                    Pipelines: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
                    contents.NextPageToken = data.NextPageToken;
                }
                if (data.Pipelines !== undefined && data.Pipelines !== null) {
                    contents.Pipelines = deserializeAws_restJson1Pipelines(data.Pipelines, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListPipelinesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListPresetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListPresetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextPageToken: undefined,
                    Presets: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextPageToken !== undefined && data.NextPageToken !== null) {
                    contents.NextPageToken = data.NextPageToken;
                }
                if (data.Presets !== undefined && data.Presets !== null) {
                    contents.Presets = deserializeAws_restJson1Presets(data.Presets, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListPresetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ReadJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ReadJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Job: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Job !== undefined && data.Job !== null) {
                    contents.Job = deserializeAws_restJson1Job(data.Job, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ReadJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ReadPipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ReadPipelineCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Pipeline: undefined,
                    Warnings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Pipeline !== undefined && data.Pipeline !== null) {
                    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
                }
                if (data.Warnings !== undefined && data.Warnings !== null) {
                    contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ReadPipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ReadPresetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ReadPresetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Preset: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Preset !== undefined && data.Preset !== null) {
                    contents.Preset = deserializeAws_restJson1Preset(data.Preset, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ReadPresetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1TestRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1TestRoleCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Messages: undefined,
                    Success: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Messages !== undefined && data.Messages !== null) {
                    contents.Messages = deserializeAws_restJson1ExceptionMessages(data.Messages, context);
                }
                if (data.Success !== undefined && data.Success !== null) {
                    contents.Success = data.Success;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1TestRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdatePipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdatePipelineCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Pipeline: undefined,
                    Warnings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Pipeline !== undefined && data.Pipeline !== null) {
                    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
                }
                if (data.Warnings !== undefined && data.Warnings !== null) {
                    contents.Warnings = deserializeAws_restJson1Warnings(data.Warnings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdatePipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdatePipelineNotificationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdatePipelineNotificationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Pipeline: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Pipeline !== undefined && data.Pipeline !== null) {
                    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdatePipelineNotificationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdatePipelineStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdatePipelineStatusCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Pipeline: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Pipeline !== undefined && data.Pipeline !== null) {
                    contents.Pipeline = deserializeAws_restJson1Pipeline(data.Pipeline, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdatePipelineStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elastictranscoder#AccessDeniedException": return [3 /*break*/, 2];
                    case "IncompatibleVersionException": return [3 /*break*/, 4];
                    case "com.amazonaws.elastictranscoder#IncompatibleVersionException": return [3 /*break*/, 4];
                    case "InternalServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.elastictranscoder#InternalServiceException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.elastictranscoder#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elastictranscoder#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elastictranscoder#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncompatibleVersionExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "AccessDeniedException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1IncompatibleVersionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "IncompatibleVersionException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalServiceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServiceException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
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
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ResourceInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceInUseException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
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
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ValidationException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1AccessControls = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Artwork = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AlbumArtFormat !== undefined &&
        input.AlbumArtFormat !== null && { AlbumArtFormat: input.AlbumArtFormat })), (input.Encryption !== undefined &&
        input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) })), (input.InputKey !== undefined && input.InputKey !== null && { InputKey: input.InputKey })), (input.MaxHeight !== undefined && input.MaxHeight !== null && { MaxHeight: input.MaxHeight })), (input.MaxWidth !== undefined && input.MaxWidth !== null && { MaxWidth: input.MaxWidth })), (input.PaddingPolicy !== undefined && input.PaddingPolicy !== null && { PaddingPolicy: input.PaddingPolicy })), (input.SizingPolicy !== undefined && input.SizingPolicy !== null && { SizingPolicy: input.SizingPolicy }));
};
var serializeAws_restJson1Artworks = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Artwork(entry, context);
    });
};
var serializeAws_restJson1AudioCodecOptions = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.BitDepth !== undefined && input.BitDepth !== null && { BitDepth: input.BitDepth })), (input.BitOrder !== undefined && input.BitOrder !== null && { BitOrder: input.BitOrder })), (input.Profile !== undefined && input.Profile !== null && { Profile: input.Profile })), (input.Signed !== undefined && input.Signed !== null && { Signed: input.Signed }));
};
var serializeAws_restJson1AudioParameters = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioPackingMode !== undefined &&
        input.AudioPackingMode !== null && { AudioPackingMode: input.AudioPackingMode })), (input.BitRate !== undefined && input.BitRate !== null && { BitRate: input.BitRate })), (input.Channels !== undefined && input.Channels !== null && { Channels: input.Channels })), (input.Codec !== undefined && input.Codec !== null && { Codec: input.Codec })), (input.CodecOptions !== undefined &&
        input.CodecOptions !== null && {
        CodecOptions: serializeAws_restJson1AudioCodecOptions(input.CodecOptions, context),
    })), (input.SampleRate !== undefined && input.SampleRate !== null && { SampleRate: input.SampleRate }));
};
var serializeAws_restJson1CaptionFormat = function (input, context) {
    return __assign(__assign(__assign({}, (input.Encryption !== undefined &&
        input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) })), (input.Format !== undefined && input.Format !== null && { Format: input.Format })), (input.Pattern !== undefined && input.Pattern !== null && { Pattern: input.Pattern }));
};
var serializeAws_restJson1CaptionFormats = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CaptionFormat(entry, context);
    });
};
var serializeAws_restJson1Captions = function (input, context) {
    return __assign(__assign(__assign({}, (input.CaptionFormats !== undefined &&
        input.CaptionFormats !== null && {
        CaptionFormats: serializeAws_restJson1CaptionFormats(input.CaptionFormats, context),
    })), (input.CaptionSources !== undefined &&
        input.CaptionSources !== null && {
        CaptionSources: serializeAws_restJson1CaptionSources(input.CaptionSources, context),
    })), (input.MergePolicy !== undefined && input.MergePolicy !== null && { MergePolicy: input.MergePolicy }));
};
var serializeAws_restJson1CaptionSource = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Encryption !== undefined &&
        input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) })), (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Label !== undefined && input.Label !== null && { Label: input.Label })), (input.Language !== undefined && input.Language !== null && { Language: input.Language })), (input.TimeOffset !== undefined && input.TimeOffset !== null && { TimeOffset: input.TimeOffset }));
};
var serializeAws_restJson1CaptionSources = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CaptionSource(entry, context);
    });
};
var serializeAws_restJson1Clip = function (input, context) {
    return __assign({}, (input.TimeSpan !== undefined &&
        input.TimeSpan !== null && { TimeSpan: serializeAws_restJson1TimeSpan(input.TimeSpan, context) }));
};
var serializeAws_restJson1CodecOptions = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1Composition = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Clip(entry, context);
    });
};
var serializeAws_restJson1CreateJobOutput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AlbumArt !== undefined &&
        input.AlbumArt !== null && { AlbumArt: serializeAws_restJson1JobAlbumArt(input.AlbumArt, context) })), (input.Captions !== undefined &&
        input.Captions !== null && { Captions: serializeAws_restJson1Captions(input.Captions, context) })), (input.Composition !== undefined &&
        input.Composition !== null && { Composition: serializeAws_restJson1Composition(input.Composition, context) })), (input.Encryption !== undefined &&
        input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) })), (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.PresetId !== undefined && input.PresetId !== null && { PresetId: input.PresetId })), (input.Rotate !== undefined && input.Rotate !== null && { Rotate: input.Rotate })), (input.SegmentDuration !== undefined &&
        input.SegmentDuration !== null && { SegmentDuration: input.SegmentDuration })), (input.ThumbnailEncryption !== undefined &&
        input.ThumbnailEncryption !== null && {
        ThumbnailEncryption: serializeAws_restJson1Encryption(input.ThumbnailEncryption, context),
    })), (input.ThumbnailPattern !== undefined &&
        input.ThumbnailPattern !== null && { ThumbnailPattern: input.ThumbnailPattern })), (input.Watermarks !== undefined &&
        input.Watermarks !== null && { Watermarks: serializeAws_restJson1JobWatermarks(input.Watermarks, context) }));
};
var serializeAws_restJson1CreateJobOutputs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CreateJobOutput(entry, context);
    });
};
var serializeAws_restJson1CreateJobPlaylist = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Format !== undefined && input.Format !== null && { Format: input.Format })), (input.HlsContentProtection !== undefined &&
        input.HlsContentProtection !== null && {
        HlsContentProtection: serializeAws_restJson1HlsContentProtection(input.HlsContentProtection, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.OutputKeys !== undefined &&
        input.OutputKeys !== null && { OutputKeys: serializeAws_restJson1OutputKeys(input.OutputKeys, context) })), (input.PlayReadyDrm !== undefined &&
        input.PlayReadyDrm !== null && { PlayReadyDrm: serializeAws_restJson1PlayReadyDrm(input.PlayReadyDrm, context) }));
};
var serializeAws_restJson1CreateJobPlaylists = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CreateJobPlaylist(entry, context);
    });
};
var serializeAws_restJson1DetectedProperties = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.DurationMillis !== undefined &&
        input.DurationMillis !== null && { DurationMillis: input.DurationMillis })), (input.FileSize !== undefined && input.FileSize !== null && { FileSize: input.FileSize })), (input.FrameRate !== undefined && input.FrameRate !== null && { FrameRate: input.FrameRate })), (input.Height !== undefined && input.Height !== null && { Height: input.Height })), (input.Width !== undefined && input.Width !== null && { Width: input.Width }));
};
var serializeAws_restJson1Encryption = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.InitializationVector !== undefined &&
        input.InitializationVector !== null && { InitializationVector: input.InitializationVector })), (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.KeyMd5 !== undefined && input.KeyMd5 !== null && { KeyMd5: input.KeyMd5 })), (input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }));
};
var serializeAws_restJson1HlsContentProtection = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.InitializationVector !== undefined &&
        input.InitializationVector !== null && { InitializationVector: input.InitializationVector })), (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.KeyMd5 !== undefined && input.KeyMd5 !== null && { KeyMd5: input.KeyMd5 })), (input.KeyStoragePolicy !== undefined &&
        input.KeyStoragePolicy !== null && { KeyStoragePolicy: input.KeyStoragePolicy })), (input.LicenseAcquisitionUrl !== undefined &&
        input.LicenseAcquisitionUrl !== null && { LicenseAcquisitionUrl: input.LicenseAcquisitionUrl })), (input.Method !== undefined && input.Method !== null && { Method: input.Method }));
};
var serializeAws_restJson1InputCaptions = function (input, context) {
    return __assign(__assign({}, (input.CaptionSources !== undefined &&
        input.CaptionSources !== null && {
        CaptionSources: serializeAws_restJson1CaptionSources(input.CaptionSources, context),
    })), (input.MergePolicy !== undefined && input.MergePolicy !== null && { MergePolicy: input.MergePolicy }));
};
var serializeAws_restJson1JobAlbumArt = function (input, context) {
    return __assign(__assign({}, (input.Artwork !== undefined &&
        input.Artwork !== null && { Artwork: serializeAws_restJson1Artworks(input.Artwork, context) })), (input.MergePolicy !== undefined && input.MergePolicy !== null && { MergePolicy: input.MergePolicy }));
};
var serializeAws_restJson1JobInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AspectRatio !== undefined && input.AspectRatio !== null && { AspectRatio: input.AspectRatio })), (input.Container !== undefined && input.Container !== null && { Container: input.Container })), (input.DetectedProperties !== undefined &&
        input.DetectedProperties !== null && {
        DetectedProperties: serializeAws_restJson1DetectedProperties(input.DetectedProperties, context),
    })), (input.Encryption !== undefined &&
        input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) })), (input.FrameRate !== undefined && input.FrameRate !== null && { FrameRate: input.FrameRate })), (input.InputCaptions !== undefined &&
        input.InputCaptions !== null && {
        InputCaptions: serializeAws_restJson1InputCaptions(input.InputCaptions, context),
    })), (input.Interlaced !== undefined && input.Interlaced !== null && { Interlaced: input.Interlaced })), (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Resolution !== undefined && input.Resolution !== null && { Resolution: input.Resolution })), (input.TimeSpan !== undefined &&
        input.TimeSpan !== null && { TimeSpan: serializeAws_restJson1TimeSpan(input.TimeSpan, context) }));
};
var serializeAws_restJson1JobInputs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1JobInput(entry, context);
    });
};
var serializeAws_restJson1JobWatermark = function (input, context) {
    return __assign(__assign(__assign({}, (input.Encryption !== undefined &&
        input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) })), (input.InputKey !== undefined && input.InputKey !== null && { InputKey: input.InputKey })), (input.PresetWatermarkId !== undefined &&
        input.PresetWatermarkId !== null && { PresetWatermarkId: input.PresetWatermarkId }));
};
var serializeAws_restJson1JobWatermarks = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1JobWatermark(entry, context);
    });
};
var serializeAws_restJson1Notifications = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Completed !== undefined && input.Completed !== null && { Completed: input.Completed })), (input.Error !== undefined && input.Error !== null && { Error: input.Error })), (input.Progressing !== undefined && input.Progressing !== null && { Progressing: input.Progressing })), (input.Warning !== undefined && input.Warning !== null && { Warning: input.Warning }));
};
var serializeAws_restJson1OutputKeys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Permission = function (input, context) {
    return __assign(__assign(__assign({}, (input.Access !== undefined &&
        input.Access !== null && { Access: serializeAws_restJson1AccessControls(input.Access, context) })), (input.Grantee !== undefined && input.Grantee !== null && { Grantee: input.Grantee })), (input.GranteeType !== undefined && input.GranteeType !== null && { GranteeType: input.GranteeType }));
};
var serializeAws_restJson1Permissions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Permission(entry, context);
    });
};
var serializeAws_restJson1PipelineOutputConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket })), (input.Permissions !== undefined &&
        input.Permissions !== null && { Permissions: serializeAws_restJson1Permissions(input.Permissions, context) })), (input.StorageClass !== undefined && input.StorageClass !== null && { StorageClass: input.StorageClass }));
};
var serializeAws_restJson1PlayReadyDrm = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Format !== undefined && input.Format !== null && { Format: input.Format })), (input.InitializationVector !== undefined &&
        input.InitializationVector !== null && { InitializationVector: input.InitializationVector })), (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.KeyMd5 !== undefined && input.KeyMd5 !== null && { KeyMd5: input.KeyMd5 })), (input.LicenseAcquisitionUrl !== undefined &&
        input.LicenseAcquisitionUrl !== null && { LicenseAcquisitionUrl: input.LicenseAcquisitionUrl }));
};
var serializeAws_restJson1PresetWatermark = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.HorizontalAlign !== undefined &&
        input.HorizontalAlign !== null && { HorizontalAlign: input.HorizontalAlign })), (input.HorizontalOffset !== undefined &&
        input.HorizontalOffset !== null && { HorizontalOffset: input.HorizontalOffset })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.MaxHeight !== undefined && input.MaxHeight !== null && { MaxHeight: input.MaxHeight })), (input.MaxWidth !== undefined && input.MaxWidth !== null && { MaxWidth: input.MaxWidth })), (input.Opacity !== undefined && input.Opacity !== null && { Opacity: input.Opacity })), (input.SizingPolicy !== undefined && input.SizingPolicy !== null && { SizingPolicy: input.SizingPolicy })), (input.Target !== undefined && input.Target !== null && { Target: input.Target })), (input.VerticalAlign !== undefined && input.VerticalAlign !== null && { VerticalAlign: input.VerticalAlign })), (input.VerticalOffset !== undefined &&
        input.VerticalOffset !== null && { VerticalOffset: input.VerticalOffset }));
};
var serializeAws_restJson1PresetWatermarks = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1PresetWatermark(entry, context);
    });
};
var serializeAws_restJson1SnsTopics = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Thumbnails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AspectRatio !== undefined && input.AspectRatio !== null && { AspectRatio: input.AspectRatio })), (input.Format !== undefined && input.Format !== null && { Format: input.Format })), (input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval })), (input.MaxHeight !== undefined && input.MaxHeight !== null && { MaxHeight: input.MaxHeight })), (input.MaxWidth !== undefined && input.MaxWidth !== null && { MaxWidth: input.MaxWidth })), (input.PaddingPolicy !== undefined && input.PaddingPolicy !== null && { PaddingPolicy: input.PaddingPolicy })), (input.Resolution !== undefined && input.Resolution !== null && { Resolution: input.Resolution })), (input.SizingPolicy !== undefined && input.SizingPolicy !== null && { SizingPolicy: input.SizingPolicy }));
};
var serializeAws_restJson1TimeSpan = function (input, context) {
    return __assign(__assign({}, (input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration })), (input.StartTime !== undefined && input.StartTime !== null && { StartTime: input.StartTime }));
};
var serializeAws_restJson1UserMetadata = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1VideoParameters = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AspectRatio !== undefined && input.AspectRatio !== null && { AspectRatio: input.AspectRatio })), (input.BitRate !== undefined && input.BitRate !== null && { BitRate: input.BitRate })), (input.Codec !== undefined && input.Codec !== null && { Codec: input.Codec })), (input.CodecOptions !== undefined &&
        input.CodecOptions !== null && { CodecOptions: serializeAws_restJson1CodecOptions(input.CodecOptions, context) })), (input.DisplayAspectRatio !== undefined &&
        input.DisplayAspectRatio !== null && { DisplayAspectRatio: input.DisplayAspectRatio })), (input.FixedGOP !== undefined && input.FixedGOP !== null && { FixedGOP: input.FixedGOP })), (input.FrameRate !== undefined && input.FrameRate !== null && { FrameRate: input.FrameRate })), (input.KeyframesMaxDist !== undefined &&
        input.KeyframesMaxDist !== null && { KeyframesMaxDist: input.KeyframesMaxDist })), (input.MaxFrameRate !== undefined && input.MaxFrameRate !== null && { MaxFrameRate: input.MaxFrameRate })), (input.MaxHeight !== undefined && input.MaxHeight !== null && { MaxHeight: input.MaxHeight })), (input.MaxWidth !== undefined && input.MaxWidth !== null && { MaxWidth: input.MaxWidth })), (input.PaddingPolicy !== undefined && input.PaddingPolicy !== null && { PaddingPolicy: input.PaddingPolicy })), (input.Resolution !== undefined && input.Resolution !== null && { Resolution: input.Resolution })), (input.SizingPolicy !== undefined && input.SizingPolicy !== null && { SizingPolicy: input.SizingPolicy })), (input.Watermarks !== undefined &&
        input.Watermarks !== null && { Watermarks: serializeAws_restJson1PresetWatermarks(input.Watermarks, context) }));
};
var deserializeAws_restJson1AccessControls = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Artwork = function (output, context) {
    return {
        AlbumArtFormat: output.AlbumArtFormat !== undefined && output.AlbumArtFormat !== null ? output.AlbumArtFormat : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        InputKey: output.InputKey !== undefined && output.InputKey !== null ? output.InputKey : undefined,
        MaxHeight: output.MaxHeight !== undefined && output.MaxHeight !== null ? output.MaxHeight : undefined,
        MaxWidth: output.MaxWidth !== undefined && output.MaxWidth !== null ? output.MaxWidth : undefined,
        PaddingPolicy: output.PaddingPolicy !== undefined && output.PaddingPolicy !== null ? output.PaddingPolicy : undefined,
        SizingPolicy: output.SizingPolicy !== undefined && output.SizingPolicy !== null ? output.SizingPolicy : undefined,
    };
};
var deserializeAws_restJson1Artworks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Artwork(entry, context);
    });
};
var deserializeAws_restJson1AudioCodecOptions = function (output, context) {
    return {
        BitDepth: output.BitDepth !== undefined && output.BitDepth !== null ? output.BitDepth : undefined,
        BitOrder: output.BitOrder !== undefined && output.BitOrder !== null ? output.BitOrder : undefined,
        Profile: output.Profile !== undefined && output.Profile !== null ? output.Profile : undefined,
        Signed: output.Signed !== undefined && output.Signed !== null ? output.Signed : undefined,
    };
};
var deserializeAws_restJson1AudioParameters = function (output, context) {
    return {
        AudioPackingMode: output.AudioPackingMode !== undefined && output.AudioPackingMode !== null ? output.AudioPackingMode : undefined,
        BitRate: output.BitRate !== undefined && output.BitRate !== null ? output.BitRate : undefined,
        Channels: output.Channels !== undefined && output.Channels !== null ? output.Channels : undefined,
        Codec: output.Codec !== undefined && output.Codec !== null ? output.Codec : undefined,
        CodecOptions: output.CodecOptions !== undefined && output.CodecOptions !== null
            ? deserializeAws_restJson1AudioCodecOptions(output.CodecOptions, context)
            : undefined,
        SampleRate: output.SampleRate !== undefined && output.SampleRate !== null ? output.SampleRate : undefined,
    };
};
var deserializeAws_restJson1CaptionFormat = function (output, context) {
    return {
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        Pattern: output.Pattern !== undefined && output.Pattern !== null ? output.Pattern : undefined,
    };
};
var deserializeAws_restJson1CaptionFormats = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CaptionFormat(entry, context);
    });
};
var deserializeAws_restJson1Captions = function (output, context) {
    return {
        CaptionFormats: output.CaptionFormats !== undefined && output.CaptionFormats !== null
            ? deserializeAws_restJson1CaptionFormats(output.CaptionFormats, context)
            : undefined,
        CaptionSources: output.CaptionSources !== undefined && output.CaptionSources !== null
            ? deserializeAws_restJson1CaptionSources(output.CaptionSources, context)
            : undefined,
        MergePolicy: output.MergePolicy !== undefined && output.MergePolicy !== null ? output.MergePolicy : undefined,
    };
};
var deserializeAws_restJson1CaptionSource = function (output, context) {
    return {
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
        Language: output.Language !== undefined && output.Language !== null ? output.Language : undefined,
        TimeOffset: output.TimeOffset !== undefined && output.TimeOffset !== null ? output.TimeOffset : undefined,
    };
};
var deserializeAws_restJson1CaptionSources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CaptionSource(entry, context);
    });
};
var deserializeAws_restJson1Clip = function (output, context) {
    return {
        TimeSpan: output.TimeSpan !== undefined && output.TimeSpan !== null
            ? deserializeAws_restJson1TimeSpan(output.TimeSpan, context)
            : undefined,
    };
};
var deserializeAws_restJson1CodecOptions = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1Composition = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Clip(entry, context);
    });
};
var deserializeAws_restJson1DetectedProperties = function (output, context) {
    return {
        DurationMillis: output.DurationMillis !== undefined && output.DurationMillis !== null ? output.DurationMillis : undefined,
        FileSize: output.FileSize !== undefined && output.FileSize !== null ? output.FileSize : undefined,
        FrameRate: output.FrameRate !== undefined && output.FrameRate !== null ? output.FrameRate : undefined,
        Height: output.Height !== undefined && output.Height !== null ? output.Height : undefined,
        Width: output.Width !== undefined && output.Width !== null ? output.Width : undefined,
    };
};
var deserializeAws_restJson1Encryption = function (output, context) {
    return {
        InitializationVector: output.InitializationVector !== undefined && output.InitializationVector !== null
            ? output.InitializationVector
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        KeyMd5: output.KeyMd5 !== undefined && output.KeyMd5 !== null ? output.KeyMd5 : undefined,
        Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
    };
};
var deserializeAws_restJson1ExceptionMessages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1HlsContentProtection = function (output, context) {
    return {
        InitializationVector: output.InitializationVector !== undefined && output.InitializationVector !== null
            ? output.InitializationVector
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        KeyMd5: output.KeyMd5 !== undefined && output.KeyMd5 !== null ? output.KeyMd5 : undefined,
        KeyStoragePolicy: output.KeyStoragePolicy !== undefined && output.KeyStoragePolicy !== null ? output.KeyStoragePolicy : undefined,
        LicenseAcquisitionUrl: output.LicenseAcquisitionUrl !== undefined && output.LicenseAcquisitionUrl !== null
            ? output.LicenseAcquisitionUrl
            : undefined,
        Method: output.Method !== undefined && output.Method !== null ? output.Method : undefined,
    };
};
var deserializeAws_restJson1InputCaptions = function (output, context) {
    return {
        CaptionSources: output.CaptionSources !== undefined && output.CaptionSources !== null
            ? deserializeAws_restJson1CaptionSources(output.CaptionSources, context)
            : undefined,
        MergePolicy: output.MergePolicy !== undefined && output.MergePolicy !== null ? output.MergePolicy : undefined,
    };
};
var deserializeAws_restJson1Job = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Input: output.Input !== undefined && output.Input !== null
            ? deserializeAws_restJson1JobInput(output.Input, context)
            : undefined,
        Inputs: output.Inputs !== undefined && output.Inputs !== null
            ? deserializeAws_restJson1JobInputs(output.Inputs, context)
            : undefined,
        Output: output.Output !== undefined && output.Output !== null
            ? deserializeAws_restJson1JobOutput(output.Output, context)
            : undefined,
        OutputKeyPrefix: output.OutputKeyPrefix !== undefined && output.OutputKeyPrefix !== null ? output.OutputKeyPrefix : undefined,
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_restJson1JobOutputs(output.Outputs, context)
            : undefined,
        PipelineId: output.PipelineId !== undefined && output.PipelineId !== null ? output.PipelineId : undefined,
        Playlists: output.Playlists !== undefined && output.Playlists !== null
            ? deserializeAws_restJson1Playlists(output.Playlists, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Timing: output.Timing !== undefined && output.Timing !== null
            ? deserializeAws_restJson1Timing(output.Timing, context)
            : undefined,
        UserMetadata: output.UserMetadata !== undefined && output.UserMetadata !== null
            ? deserializeAws_restJson1UserMetadata(output.UserMetadata, context)
            : undefined,
    };
};
var deserializeAws_restJson1JobAlbumArt = function (output, context) {
    return {
        Artwork: output.Artwork !== undefined && output.Artwork !== null
            ? deserializeAws_restJson1Artworks(output.Artwork, context)
            : undefined,
        MergePolicy: output.MergePolicy !== undefined && output.MergePolicy !== null ? output.MergePolicy : undefined,
    };
};
var deserializeAws_restJson1JobInput = function (output, context) {
    return {
        AspectRatio: output.AspectRatio !== undefined && output.AspectRatio !== null ? output.AspectRatio : undefined,
        Container: output.Container !== undefined && output.Container !== null ? output.Container : undefined,
        DetectedProperties: output.DetectedProperties !== undefined && output.DetectedProperties !== null
            ? deserializeAws_restJson1DetectedProperties(output.DetectedProperties, context)
            : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        FrameRate: output.FrameRate !== undefined && output.FrameRate !== null ? output.FrameRate : undefined,
        InputCaptions: output.InputCaptions !== undefined && output.InputCaptions !== null
            ? deserializeAws_restJson1InputCaptions(output.InputCaptions, context)
            : undefined,
        Interlaced: output.Interlaced !== undefined && output.Interlaced !== null ? output.Interlaced : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Resolution: output.Resolution !== undefined && output.Resolution !== null ? output.Resolution : undefined,
        TimeSpan: output.TimeSpan !== undefined && output.TimeSpan !== null
            ? deserializeAws_restJson1TimeSpan(output.TimeSpan, context)
            : undefined,
    };
};
var deserializeAws_restJson1JobInputs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobInput(entry, context);
    });
};
var deserializeAws_restJson1JobOutput = function (output, context) {
    return {
        AlbumArt: output.AlbumArt !== undefined && output.AlbumArt !== null
            ? deserializeAws_restJson1JobAlbumArt(output.AlbumArt, context)
            : undefined,
        AppliedColorSpaceConversion: output.AppliedColorSpaceConversion !== undefined && output.AppliedColorSpaceConversion !== null
            ? output.AppliedColorSpaceConversion
            : undefined,
        Captions: output.Captions !== undefined && output.Captions !== null
            ? deserializeAws_restJson1Captions(output.Captions, context)
            : undefined,
        Composition: output.Composition !== undefined && output.Composition !== null
            ? deserializeAws_restJson1Composition(output.Composition, context)
            : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        DurationMillis: output.DurationMillis !== undefined && output.DurationMillis !== null ? output.DurationMillis : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        FileSize: output.FileSize !== undefined && output.FileSize !== null ? output.FileSize : undefined,
        FrameRate: output.FrameRate !== undefined && output.FrameRate !== null ? output.FrameRate : undefined,
        Height: output.Height !== undefined && output.Height !== null ? output.Height : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        PresetId: output.PresetId !== undefined && output.PresetId !== null ? output.PresetId : undefined,
        Rotate: output.Rotate !== undefined && output.Rotate !== null ? output.Rotate : undefined,
        SegmentDuration: output.SegmentDuration !== undefined && output.SegmentDuration !== null ? output.SegmentDuration : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusDetail: output.StatusDetail !== undefined && output.StatusDetail !== null ? output.StatusDetail : undefined,
        ThumbnailEncryption: output.ThumbnailEncryption !== undefined && output.ThumbnailEncryption !== null
            ? deserializeAws_restJson1Encryption(output.ThumbnailEncryption, context)
            : undefined,
        ThumbnailPattern: output.ThumbnailPattern !== undefined && output.ThumbnailPattern !== null ? output.ThumbnailPattern : undefined,
        Watermarks: output.Watermarks !== undefined && output.Watermarks !== null
            ? deserializeAws_restJson1JobWatermarks(output.Watermarks, context)
            : undefined,
        Width: output.Width !== undefined && output.Width !== null ? output.Width : undefined,
    };
};
var deserializeAws_restJson1JobOutputs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobOutput(entry, context);
    });
};
var deserializeAws_restJson1Jobs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Job(entry, context);
    });
};
var deserializeAws_restJson1JobWatermark = function (output, context) {
    return {
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        InputKey: output.InputKey !== undefined && output.InputKey !== null ? output.InputKey : undefined,
        PresetWatermarkId: output.PresetWatermarkId !== undefined && output.PresetWatermarkId !== null
            ? output.PresetWatermarkId
            : undefined,
    };
};
var deserializeAws_restJson1JobWatermarks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobWatermark(entry, context);
    });
};
var deserializeAws_restJson1Notifications = function (output, context) {
    return {
        Completed: output.Completed !== undefined && output.Completed !== null ? output.Completed : undefined,
        Error: output.Error !== undefined && output.Error !== null ? output.Error : undefined,
        Progressing: output.Progressing !== undefined && output.Progressing !== null ? output.Progressing : undefined,
        Warning: output.Warning !== undefined && output.Warning !== null ? output.Warning : undefined,
    };
};
var deserializeAws_restJson1OutputKeys = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Permission = function (output, context) {
    return {
        Access: output.Access !== undefined && output.Access !== null
            ? deserializeAws_restJson1AccessControls(output.Access, context)
            : undefined,
        Grantee: output.Grantee !== undefined && output.Grantee !== null ? output.Grantee : undefined,
        GranteeType: output.GranteeType !== undefined && output.GranteeType !== null ? output.GranteeType : undefined,
    };
};
var deserializeAws_restJson1Permissions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Permission(entry, context);
    });
};
var deserializeAws_restJson1Pipeline = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AwsKmsKeyArn: output.AwsKmsKeyArn !== undefined && output.AwsKmsKeyArn !== null ? output.AwsKmsKeyArn : undefined,
        ContentConfig: output.ContentConfig !== undefined && output.ContentConfig !== null
            ? deserializeAws_restJson1PipelineOutputConfig(output.ContentConfig, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InputBucket: output.InputBucket !== undefined && output.InputBucket !== null ? output.InputBucket : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Notifications: output.Notifications !== undefined && output.Notifications !== null
            ? deserializeAws_restJson1Notifications(output.Notifications, context)
            : undefined,
        OutputBucket: output.OutputBucket !== undefined && output.OutputBucket !== null ? output.OutputBucket : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        ThumbnailConfig: output.ThumbnailConfig !== undefined && output.ThumbnailConfig !== null
            ? deserializeAws_restJson1PipelineOutputConfig(output.ThumbnailConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1PipelineOutputConfig = function (output, context) {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_restJson1Permissions(output.Permissions, context)
            : undefined,
        StorageClass: output.StorageClass !== undefined && output.StorageClass !== null ? output.StorageClass : undefined,
    };
};
var deserializeAws_restJson1Pipelines = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Pipeline(entry, context);
    });
};
var deserializeAws_restJson1Playlist = function (output, context) {
    return {
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        HlsContentProtection: output.HlsContentProtection !== undefined && output.HlsContentProtection !== null
            ? deserializeAws_restJson1HlsContentProtection(output.HlsContentProtection, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OutputKeys: output.OutputKeys !== undefined && output.OutputKeys !== null
            ? deserializeAws_restJson1OutputKeys(output.OutputKeys, context)
            : undefined,
        PlayReadyDrm: output.PlayReadyDrm !== undefined && output.PlayReadyDrm !== null
            ? deserializeAws_restJson1PlayReadyDrm(output.PlayReadyDrm, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusDetail: output.StatusDetail !== undefined && output.StatusDetail !== null ? output.StatusDetail : undefined,
    };
};
var deserializeAws_restJson1Playlists = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Playlist(entry, context);
    });
};
var deserializeAws_restJson1PlayReadyDrm = function (output, context) {
    return {
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        InitializationVector: output.InitializationVector !== undefined && output.InitializationVector !== null
            ? output.InitializationVector
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        KeyMd5: output.KeyMd5 !== undefined && output.KeyMd5 !== null ? output.KeyMd5 : undefined,
        LicenseAcquisitionUrl: output.LicenseAcquisitionUrl !== undefined && output.LicenseAcquisitionUrl !== null
            ? output.LicenseAcquisitionUrl
            : undefined,
    };
};
var deserializeAws_restJson1Preset = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Audio: output.Audio !== undefined && output.Audio !== null
            ? deserializeAws_restJson1AudioParameters(output.Audio, context)
            : undefined,
        Container: output.Container !== undefined && output.Container !== null ? output.Container : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Thumbnails: output.Thumbnails !== undefined && output.Thumbnails !== null
            ? deserializeAws_restJson1Thumbnails(output.Thumbnails, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Video: output.Video !== undefined && output.Video !== null
            ? deserializeAws_restJson1VideoParameters(output.Video, context)
            : undefined,
    };
};
var deserializeAws_restJson1Presets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Preset(entry, context);
    });
};
var deserializeAws_restJson1PresetWatermark = function (output, context) {
    return {
        HorizontalAlign: output.HorizontalAlign !== undefined && output.HorizontalAlign !== null ? output.HorizontalAlign : undefined,
        HorizontalOffset: output.HorizontalOffset !== undefined && output.HorizontalOffset !== null ? output.HorizontalOffset : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        MaxHeight: output.MaxHeight !== undefined && output.MaxHeight !== null ? output.MaxHeight : undefined,
        MaxWidth: output.MaxWidth !== undefined && output.MaxWidth !== null ? output.MaxWidth : undefined,
        Opacity: output.Opacity !== undefined && output.Opacity !== null ? output.Opacity : undefined,
        SizingPolicy: output.SizingPolicy !== undefined && output.SizingPolicy !== null ? output.SizingPolicy : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
        VerticalAlign: output.VerticalAlign !== undefined && output.VerticalAlign !== null ? output.VerticalAlign : undefined,
        VerticalOffset: output.VerticalOffset !== undefined && output.VerticalOffset !== null ? output.VerticalOffset : undefined,
    };
};
var deserializeAws_restJson1PresetWatermarks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PresetWatermark(entry, context);
    });
};
var deserializeAws_restJson1Thumbnails = function (output, context) {
    return {
        AspectRatio: output.AspectRatio !== undefined && output.AspectRatio !== null ? output.AspectRatio : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        MaxHeight: output.MaxHeight !== undefined && output.MaxHeight !== null ? output.MaxHeight : undefined,
        MaxWidth: output.MaxWidth !== undefined && output.MaxWidth !== null ? output.MaxWidth : undefined,
        PaddingPolicy: output.PaddingPolicy !== undefined && output.PaddingPolicy !== null ? output.PaddingPolicy : undefined,
        Resolution: output.Resolution !== undefined && output.Resolution !== null ? output.Resolution : undefined,
        SizingPolicy: output.SizingPolicy !== undefined && output.SizingPolicy !== null ? output.SizingPolicy : undefined,
    };
};
var deserializeAws_restJson1TimeSpan = function (output, context) {
    return {
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    };
};
var deserializeAws_restJson1Timing = function (output, context) {
    return {
        FinishTimeMillis: output.FinishTimeMillis !== undefined && output.FinishTimeMillis !== null ? output.FinishTimeMillis : undefined,
        StartTimeMillis: output.StartTimeMillis !== undefined && output.StartTimeMillis !== null ? output.StartTimeMillis : undefined,
        SubmitTimeMillis: output.SubmitTimeMillis !== undefined && output.SubmitTimeMillis !== null ? output.SubmitTimeMillis : undefined,
    };
};
var deserializeAws_restJson1UserMetadata = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1VideoParameters = function (output, context) {
    return {
        AspectRatio: output.AspectRatio !== undefined && output.AspectRatio !== null ? output.AspectRatio : undefined,
        BitRate: output.BitRate !== undefined && output.BitRate !== null ? output.BitRate : undefined,
        Codec: output.Codec !== undefined && output.Codec !== null ? output.Codec : undefined,
        CodecOptions: output.CodecOptions !== undefined && output.CodecOptions !== null
            ? deserializeAws_restJson1CodecOptions(output.CodecOptions, context)
            : undefined,
        DisplayAspectRatio: output.DisplayAspectRatio !== undefined && output.DisplayAspectRatio !== null
            ? output.DisplayAspectRatio
            : undefined,
        FixedGOP: output.FixedGOP !== undefined && output.FixedGOP !== null ? output.FixedGOP : undefined,
        FrameRate: output.FrameRate !== undefined && output.FrameRate !== null ? output.FrameRate : undefined,
        KeyframesMaxDist: output.KeyframesMaxDist !== undefined && output.KeyframesMaxDist !== null ? output.KeyframesMaxDist : undefined,
        MaxFrameRate: output.MaxFrameRate !== undefined && output.MaxFrameRate !== null ? output.MaxFrameRate : undefined,
        MaxHeight: output.MaxHeight !== undefined && output.MaxHeight !== null ? output.MaxHeight : undefined,
        MaxWidth: output.MaxWidth !== undefined && output.MaxWidth !== null ? output.MaxWidth : undefined,
        PaddingPolicy: output.PaddingPolicy !== undefined && output.PaddingPolicy !== null ? output.PaddingPolicy : undefined,
        Resolution: output.Resolution !== undefined && output.Resolution !== null ? output.Resolution : undefined,
        SizingPolicy: output.SizingPolicy !== undefined && output.SizingPolicy !== null ? output.SizingPolicy : undefined,
        Watermarks: output.Watermarks !== undefined && output.Watermarks !== null
            ? deserializeAws_restJson1PresetWatermarks(output.Watermarks, context)
            : undefined,
    };
};
var deserializeAws_restJson1Warning = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1Warnings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Warning(entry, context);
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