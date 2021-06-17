import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateLifecyclePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/policies";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.ExecutionRoleArn !== undefined &&
                    input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn })), (input.PolicyDetails !== undefined &&
                    input.PolicyDetails !== null && {
                    PolicyDetails: serializeAws_restJson1PolicyDetails(input.PolicyDetails, context),
                })), (input.State !== undefined && input.State !== null && { State: input.State })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1DeleteLifecyclePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/policies/{PolicyId}";
                if (input.PolicyId !== undefined) {
                    labelValue = input.PolicyId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: PolicyId.");
                    }
                    resolvedPath = resolvedPath.replace("{PolicyId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: PolicyId.");
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
export var serializeAws_restJson1GetLifecyclePoliciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/policies";
                query = __assign(__assign(__assign(__assign(__assign({}, (input.PolicyIds !== undefined && { policyIds: (input.PolicyIds || []).map(function (_entry) { return _entry; }) })), (input.State !== undefined && { state: input.State })), (input.ResourceTypes !== undefined && { resourceTypes: (input.ResourceTypes || []).map(function (_entry) { return _entry; }) })), (input.TargetTags !== undefined && { targetTags: (input.TargetTags || []).map(function (_entry) { return _entry; }) })), (input.TagsToAdd !== undefined && { tagsToAdd: (input.TagsToAdd || []).map(function (_entry) { return _entry; }) }));
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
export var serializeAws_restJson1GetLifecyclePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/policies/{PolicyId}";
                if (input.PolicyId !== undefined) {
                    labelValue = input.PolicyId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: PolicyId.");
                    }
                    resolvedPath = resolvedPath.replace("{PolicyId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: PolicyId.");
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
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
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
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
                }
                body = JSON.stringify(__assign({}, (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
                }
                query = __assign({}, (input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map(function (_entry) { return _entry; }) }));
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateLifecyclePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/policies/{PolicyId}";
                if (input.PolicyId !== undefined) {
                    labelValue = input.PolicyId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: PolicyId.");
                    }
                    resolvedPath = resolvedPath.replace("{PolicyId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: PolicyId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.ExecutionRoleArn !== undefined &&
                    input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn })), (input.PolicyDetails !== undefined &&
                    input.PolicyDetails !== null && {
                    PolicyDetails: serializeAws_restJson1PolicyDetails(input.PolicyDetails, context),
                })), (input.State !== undefined && input.State !== null && { State: input.State })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1CreateLifecyclePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateLifecyclePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    PolicyId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.PolicyId !== undefined && data.PolicyId !== null) {
                    contents.PolicyId = data.PolicyId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateLifecyclePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dlm#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.dlm#InvalidRequestException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dlm#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteLifecyclePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteLifecyclePolicyCommandError(output, context)];
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
var deserializeAws_restJson1DeleteLifecyclePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dlm#InternalServerException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.dlm#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dlm#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetLifecyclePoliciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetLifecyclePoliciesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Policies: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Policies !== undefined && data.Policies !== null) {
                    contents.Policies = deserializeAws_restJson1LifecyclePolicySummaryList(data.Policies, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetLifecyclePoliciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dlm#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.dlm#InvalidRequestException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dlm#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dlm#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetLifecyclePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetLifecyclePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Policy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Policy !== undefined && data.Policy !== null) {
                    contents.Policy = deserializeAws_restJson1LifecyclePolicy(data.Policy, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetLifecyclePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dlm#InternalServerException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.dlm#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dlm#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListTagsForResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dlm#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.dlm#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dlm#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1TagResourceCommandError(output, context)];
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
var deserializeAws_restJson1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dlm#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.dlm#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dlm#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UntagResourceCommandError(output, context)];
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
var deserializeAws_restJson1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dlm#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.dlm#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dlm#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateLifecyclePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateLifecyclePolicyCommandError(output, context)];
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
var deserializeAws_restJson1UpdateLifecyclePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dlm#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.dlm#InvalidRequestException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dlm#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dlm#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Code: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Code: undefined,
            Message: undefined,
            MutuallyExclusiveParameters: undefined,
            RequiredParameters: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.MutuallyExclusiveParameters !== undefined && data.MutuallyExclusiveParameters !== null) {
            contents.MutuallyExclusiveParameters = deserializeAws_restJson1ParameterList(data.MutuallyExclusiveParameters, context);
        }
        if (data.RequiredParameters !== undefined && data.RequiredParameters !== null) {
            contents.RequiredParameters = deserializeAws_restJson1ParameterList(data.RequiredParameters, context);
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
            Code: undefined,
            Message: undefined,
            ResourceType: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.ResourceType !== undefined && data.ResourceType !== null) {
            contents.ResourceType = data.ResourceType;
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
            Code: undefined,
            Message: undefined,
            ResourceIds: undefined,
            ResourceType: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.ResourceIds !== undefined && data.ResourceIds !== null) {
            contents.ResourceIds = deserializeAws_restJson1PolicyIdList(data.ResourceIds, context);
        }
        if (data.ResourceType !== undefined && data.ResourceType !== null) {
            contents.ResourceType = data.ResourceType;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1Action = function (input, context) {
    return __assign(__assign({}, (input.CrossRegionCopy !== undefined &&
        input.CrossRegionCopy !== null && {
        CrossRegionCopy: serializeAws_restJson1CrossRegionCopyActionList(input.CrossRegionCopy, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_restJson1ActionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Action(entry, context);
    });
};
var serializeAws_restJson1AvailabilityZoneList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1CreateRule = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CronExpression !== undefined &&
        input.CronExpression !== null && { CronExpression: input.CronExpression })), (input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval })), (input.IntervalUnit !== undefined && input.IntervalUnit !== null && { IntervalUnit: input.IntervalUnit })), (input.Location !== undefined && input.Location !== null && { Location: input.Location })), (input.Times !== undefined &&
        input.Times !== null && { Times: serializeAws_restJson1TimesList(input.Times, context) }));
};
var serializeAws_restJson1CrossRegionCopyAction = function (input, context) {
    return __assign(__assign(__assign({}, (input.EncryptionConfiguration !== undefined &&
        input.EncryptionConfiguration !== null && {
        EncryptionConfiguration: serializeAws_restJson1EncryptionConfiguration(input.EncryptionConfiguration, context),
    })), (input.RetainRule !== undefined &&
        input.RetainRule !== null && {
        RetainRule: serializeAws_restJson1CrossRegionCopyRetainRule(input.RetainRule, context),
    })), (input.Target !== undefined && input.Target !== null && { Target: input.Target }));
};
var serializeAws_restJson1CrossRegionCopyActionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CrossRegionCopyAction(entry, context);
    });
};
var serializeAws_restJson1CrossRegionCopyRetainRule = function (input, context) {
    return __assign(__assign({}, (input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval })), (input.IntervalUnit !== undefined && input.IntervalUnit !== null && { IntervalUnit: input.IntervalUnit }));
};
var serializeAws_restJson1CrossRegionCopyRule = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.CmkArn !== undefined && input.CmkArn !== null && { CmkArn: input.CmkArn })), (input.CopyTags !== undefined && input.CopyTags !== null && { CopyTags: input.CopyTags })), (input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted })), (input.RetainRule !== undefined &&
        input.RetainRule !== null && {
        RetainRule: serializeAws_restJson1CrossRegionCopyRetainRule(input.RetainRule, context),
    })), (input.Target !== undefined && input.Target !== null && { Target: input.Target })), (input.TargetRegion !== undefined && input.TargetRegion !== null && { TargetRegion: input.TargetRegion }));
};
var serializeAws_restJson1CrossRegionCopyRules = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CrossRegionCopyRule(entry, context);
    });
};
var serializeAws_restJson1EncryptionConfiguration = function (input, context) {
    return __assign(__assign({}, (input.CmkArn !== undefined && input.CmkArn !== null && { CmkArn: input.CmkArn })), (input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }));
};
var serializeAws_restJson1EventParameters = function (input, context) {
    return __assign(__assign(__assign({}, (input.DescriptionRegex !== undefined &&
        input.DescriptionRegex !== null && { DescriptionRegex: input.DescriptionRegex })), (input.EventType !== undefined && input.EventType !== null && { EventType: input.EventType })), (input.SnapshotOwner !== undefined &&
        input.SnapshotOwner !== null && {
        SnapshotOwner: serializeAws_restJson1SnapshotOwnerList(input.SnapshotOwner, context),
    }));
};
var serializeAws_restJson1EventSource = function (input, context) {
    return __assign(__assign({}, (input.Parameters !== undefined &&
        input.Parameters !== null && { Parameters: serializeAws_restJson1EventParameters(input.Parameters, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1FastRestoreRule = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AvailabilityZones !== undefined &&
        input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1AvailabilityZoneList(input.AvailabilityZones, context),
    })), (input.Count !== undefined && input.Count !== null && { Count: input.Count })), (input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval })), (input.IntervalUnit !== undefined && input.IntervalUnit !== null && { IntervalUnit: input.IntervalUnit }));
};
var serializeAws_restJson1_Parameters = function (input, context) {
    return __assign(__assign({}, (input.ExcludeBootVolume !== undefined &&
        input.ExcludeBootVolume !== null && { ExcludeBootVolume: input.ExcludeBootVolume })), (input.NoReboot !== undefined && input.NoReboot !== null && { NoReboot: input.NoReboot }));
};
var serializeAws_restJson1PolicyDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Actions !== undefined &&
        input.Actions !== null && { Actions: serializeAws_restJson1ActionList(input.Actions, context) })), (input.EventSource !== undefined &&
        input.EventSource !== null && { EventSource: serializeAws_restJson1EventSource(input.EventSource, context) })), (input.Parameters !== undefined &&
        input.Parameters !== null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) })), (input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType })), (input.ResourceLocations !== undefined &&
        input.ResourceLocations !== null && {
        ResourceLocations: serializeAws_restJson1ResourceLocationList(input.ResourceLocations, context),
    })), (input.ResourceTypes !== undefined &&
        input.ResourceTypes !== null && {
        ResourceTypes: serializeAws_restJson1ResourceTypeValuesList(input.ResourceTypes, context),
    })), (input.Schedules !== undefined &&
        input.Schedules !== null && { Schedules: serializeAws_restJson1ScheduleList(input.Schedules, context) })), (input.TargetTags !== undefined &&
        input.TargetTags !== null && { TargetTags: serializeAws_restJson1TargetTagList(input.TargetTags, context) }));
};
var serializeAws_restJson1ResourceLocationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1ResourceTypeValuesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1RetainRule = function (input, context) {
    return __assign(__assign(__assign({}, (input.Count !== undefined && input.Count !== null && { Count: input.Count })), (input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval })), (input.IntervalUnit !== undefined && input.IntervalUnit !== null && { IntervalUnit: input.IntervalUnit }));
};
var serializeAws_restJson1Schedule = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CopyTags !== undefined && input.CopyTags !== null && { CopyTags: input.CopyTags })), (input.CreateRule !== undefined &&
        input.CreateRule !== null && { CreateRule: serializeAws_restJson1CreateRule(input.CreateRule, context) })), (input.CrossRegionCopyRules !== undefined &&
        input.CrossRegionCopyRules !== null && {
        CrossRegionCopyRules: serializeAws_restJson1CrossRegionCopyRules(input.CrossRegionCopyRules, context),
    })), (input.FastRestoreRule !== undefined &&
        input.FastRestoreRule !== null && {
        FastRestoreRule: serializeAws_restJson1FastRestoreRule(input.FastRestoreRule, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RetainRule !== undefined &&
        input.RetainRule !== null && { RetainRule: serializeAws_restJson1RetainRule(input.RetainRule, context) })), (input.ShareRules !== undefined &&
        input.ShareRules !== null && { ShareRules: serializeAws_restJson1ShareRules(input.ShareRules, context) })), (input.TagsToAdd !== undefined &&
        input.TagsToAdd !== null && { TagsToAdd: serializeAws_restJson1TagsToAddList(input.TagsToAdd, context) })), (input.VariableTags !== undefined &&
        input.VariableTags !== null && {
        VariableTags: serializeAws_restJson1VariableTagsList(input.VariableTags, context),
    }));
};
var serializeAws_restJson1ScheduleList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Schedule(entry, context);
    });
};
var serializeAws_restJson1ShareRule = function (input, context) {
    return __assign(__assign(__assign({}, (input.TargetAccounts !== undefined &&
        input.TargetAccounts !== null && {
        TargetAccounts: serializeAws_restJson1ShareTargetAccountList(input.TargetAccounts, context),
    })), (input.UnshareInterval !== undefined &&
        input.UnshareInterval !== null && { UnshareInterval: input.UnshareInterval })), (input.UnshareIntervalUnit !== undefined &&
        input.UnshareIntervalUnit !== null && { UnshareIntervalUnit: input.UnshareIntervalUnit }));
};
var serializeAws_restJson1ShareRules = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ShareRule(entry, context);
    });
};
var serializeAws_restJson1ShareTargetAccountList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1SnapshotOwnerList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1TagMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1TagsToAddList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
var serializeAws_restJson1TargetTagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
var serializeAws_restJson1TimesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1VariableTagsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
var deserializeAws_restJson1Action = function (output, context) {
    return {
        CrossRegionCopy: output.CrossRegionCopy !== undefined && output.CrossRegionCopy !== null
            ? deserializeAws_restJson1CrossRegionCopyActionList(output.CrossRegionCopy, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1ActionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Action(entry, context);
    });
};
var deserializeAws_restJson1AvailabilityZoneList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1CreateRule = function (output, context) {
    return {
        CronExpression: output.CronExpression !== undefined && output.CronExpression !== null ? output.CronExpression : undefined,
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        IntervalUnit: output.IntervalUnit !== undefined && output.IntervalUnit !== null ? output.IntervalUnit : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        Times: output.Times !== undefined && output.Times !== null
            ? deserializeAws_restJson1TimesList(output.Times, context)
            : undefined,
    };
};
var deserializeAws_restJson1CrossRegionCopyAction = function (output, context) {
    return {
        EncryptionConfiguration: output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
            ? deserializeAws_restJson1EncryptionConfiguration(output.EncryptionConfiguration, context)
            : undefined,
        RetainRule: output.RetainRule !== undefined && output.RetainRule !== null
            ? deserializeAws_restJson1CrossRegionCopyRetainRule(output.RetainRule, context)
            : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
    };
};
var deserializeAws_restJson1CrossRegionCopyActionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CrossRegionCopyAction(entry, context);
    });
};
var deserializeAws_restJson1CrossRegionCopyRetainRule = function (output, context) {
    return {
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        IntervalUnit: output.IntervalUnit !== undefined && output.IntervalUnit !== null ? output.IntervalUnit : undefined,
    };
};
var deserializeAws_restJson1CrossRegionCopyRule = function (output, context) {
    return {
        CmkArn: output.CmkArn !== undefined && output.CmkArn !== null ? output.CmkArn : undefined,
        CopyTags: output.CopyTags !== undefined && output.CopyTags !== null ? output.CopyTags : undefined,
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
        RetainRule: output.RetainRule !== undefined && output.RetainRule !== null
            ? deserializeAws_restJson1CrossRegionCopyRetainRule(output.RetainRule, context)
            : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
        TargetRegion: output.TargetRegion !== undefined && output.TargetRegion !== null ? output.TargetRegion : undefined,
    };
};
var deserializeAws_restJson1CrossRegionCopyRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CrossRegionCopyRule(entry, context);
    });
};
var deserializeAws_restJson1EncryptionConfiguration = function (output, context) {
    return {
        CmkArn: output.CmkArn !== undefined && output.CmkArn !== null ? output.CmkArn : undefined,
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
    };
};
var deserializeAws_restJson1EventParameters = function (output, context) {
    return {
        DescriptionRegex: output.DescriptionRegex !== undefined && output.DescriptionRegex !== null ? output.DescriptionRegex : undefined,
        EventType: output.EventType !== undefined && output.EventType !== null ? output.EventType : undefined,
        SnapshotOwner: output.SnapshotOwner !== undefined && output.SnapshotOwner !== null
            ? deserializeAws_restJson1SnapshotOwnerList(output.SnapshotOwner, context)
            : undefined,
    };
};
var deserializeAws_restJson1EventSource = function (output, context) {
    return {
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_restJson1EventParameters(output.Parameters, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1FastRestoreRule = function (output, context) {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_restJson1AvailabilityZoneList(output.AvailabilityZones, context)
            : undefined,
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        IntervalUnit: output.IntervalUnit !== undefined && output.IntervalUnit !== null ? output.IntervalUnit : undefined,
    };
};
var deserializeAws_restJson1LifecyclePolicy = function (output, context) {
    return {
        DateCreated: output.DateCreated !== undefined && output.DateCreated !== null
            ? new Date(Math.round(output.DateCreated * 1000))
            : undefined,
        DateModified: output.DateModified !== undefined && output.DateModified !== null
            ? new Date(Math.round(output.DateModified * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ExecutionRoleArn: output.ExecutionRoleArn !== undefined && output.ExecutionRoleArn !== null ? output.ExecutionRoleArn : undefined,
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
        PolicyDetails: output.PolicyDetails !== undefined && output.PolicyDetails !== null
            ? deserializeAws_restJson1PolicyDetails(output.PolicyDetails, context)
            : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1LifecyclePolicySummary = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1LifecyclePolicySummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LifecyclePolicySummary(entry, context);
    });
};
var deserializeAws_restJson1ParameterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1_Parameters = function (output, context) {
    return {
        ExcludeBootVolume: output.ExcludeBootVolume !== undefined && output.ExcludeBootVolume !== null
            ? output.ExcludeBootVolume
            : undefined,
        NoReboot: output.NoReboot !== undefined && output.NoReboot !== null ? output.NoReboot : undefined,
    };
};
var deserializeAws_restJson1PolicyDetails = function (output, context) {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_restJson1ActionList(output.Actions, context)
            : undefined,
        EventSource: output.EventSource !== undefined && output.EventSource !== null
            ? deserializeAws_restJson1EventSource(output.EventSource, context)
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_restJson1_Parameters(output.Parameters, context)
            : undefined,
        PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
        ResourceLocations: output.ResourceLocations !== undefined && output.ResourceLocations !== null
            ? deserializeAws_restJson1ResourceLocationList(output.ResourceLocations, context)
            : undefined,
        ResourceTypes: output.ResourceTypes !== undefined && output.ResourceTypes !== null
            ? deserializeAws_restJson1ResourceTypeValuesList(output.ResourceTypes, context)
            : undefined,
        Schedules: output.Schedules !== undefined && output.Schedules !== null
            ? deserializeAws_restJson1ScheduleList(output.Schedules, context)
            : undefined,
        TargetTags: output.TargetTags !== undefined && output.TargetTags !== null
            ? deserializeAws_restJson1TargetTagList(output.TargetTags, context)
            : undefined,
    };
};
var deserializeAws_restJson1PolicyIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1ResourceLocationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1ResourceTypeValuesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1RetainRule = function (output, context) {
    return {
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        IntervalUnit: output.IntervalUnit !== undefined && output.IntervalUnit !== null ? output.IntervalUnit : undefined,
    };
};
var deserializeAws_restJson1Schedule = function (output, context) {
    return {
        CopyTags: output.CopyTags !== undefined && output.CopyTags !== null ? output.CopyTags : undefined,
        CreateRule: output.CreateRule !== undefined && output.CreateRule !== null
            ? deserializeAws_restJson1CreateRule(output.CreateRule, context)
            : undefined,
        CrossRegionCopyRules: output.CrossRegionCopyRules !== undefined && output.CrossRegionCopyRules !== null
            ? deserializeAws_restJson1CrossRegionCopyRules(output.CrossRegionCopyRules, context)
            : undefined,
        FastRestoreRule: output.FastRestoreRule !== undefined && output.FastRestoreRule !== null
            ? deserializeAws_restJson1FastRestoreRule(output.FastRestoreRule, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RetainRule: output.RetainRule !== undefined && output.RetainRule !== null
            ? deserializeAws_restJson1RetainRule(output.RetainRule, context)
            : undefined,
        ShareRules: output.ShareRules !== undefined && output.ShareRules !== null
            ? deserializeAws_restJson1ShareRules(output.ShareRules, context)
            : undefined,
        TagsToAdd: output.TagsToAdd !== undefined && output.TagsToAdd !== null
            ? deserializeAws_restJson1TagsToAddList(output.TagsToAdd, context)
            : undefined,
        VariableTags: output.VariableTags !== undefined && output.VariableTags !== null
            ? deserializeAws_restJson1VariableTagsList(output.VariableTags, context)
            : undefined,
    };
};
var deserializeAws_restJson1ScheduleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Schedule(entry, context);
    });
};
var deserializeAws_restJson1ShareRule = function (output, context) {
    return {
        TargetAccounts: output.TargetAccounts !== undefined && output.TargetAccounts !== null
            ? deserializeAws_restJson1ShareTargetAccountList(output.TargetAccounts, context)
            : undefined,
        UnshareInterval: output.UnshareInterval !== undefined && output.UnshareInterval !== null ? output.UnshareInterval : undefined,
        UnshareIntervalUnit: output.UnshareIntervalUnit !== undefined && output.UnshareIntervalUnit !== null
            ? output.UnshareIntervalUnit
            : undefined,
    };
};
var deserializeAws_restJson1ShareRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ShareRule(entry, context);
    });
};
var deserializeAws_restJson1ShareTargetAccountList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SnapshotOwnerList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1TagMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1TagsToAddList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
var deserializeAws_restJson1TargetTagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
var deserializeAws_restJson1TimesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1VariableTagsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
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