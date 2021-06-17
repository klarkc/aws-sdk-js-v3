import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateAlarmModelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/alarm-models";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.alarmCapabilities !== undefined &&
                    input.alarmCapabilities !== null && {
                    alarmCapabilities: serializeAws_restJson1AlarmCapabilities(input.alarmCapabilities, context),
                })), (input.alarmEventActions !== undefined &&
                    input.alarmEventActions !== null && {
                    alarmEventActions: serializeAws_restJson1AlarmEventActions(input.alarmEventActions, context),
                })), (input.alarmModelDescription !== undefined &&
                    input.alarmModelDescription !== null && { alarmModelDescription: input.alarmModelDescription })), (input.alarmModelName !== undefined &&
                    input.alarmModelName !== null && { alarmModelName: input.alarmModelName })), (input.alarmNotification !== undefined &&
                    input.alarmNotification !== null && {
                    alarmNotification: serializeAws_restJson1AlarmNotification(input.alarmNotification, context),
                })), (input.alarmRule !== undefined &&
                    input.alarmRule !== null && { alarmRule: serializeAws_restJson1AlarmRule(input.alarmRule, context) })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.severity !== undefined && input.severity !== null && { severity: input.severity })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) })));
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
export var serializeAws_restJson1CreateDetectorModelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector-models";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.detectorModelDefinition !== undefined &&
                    input.detectorModelDefinition !== null && {
                    detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
                })), (input.detectorModelDescription !== undefined &&
                    input.detectorModelDescription !== null && { detectorModelDescription: input.detectorModelDescription })), (input.detectorModelName !== undefined &&
                    input.detectorModelName !== null && { detectorModelName: input.detectorModelName })), (input.evaluationMethod !== undefined &&
                    input.evaluationMethod !== null && { evaluationMethod: input.evaluationMethod })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) })));
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
export var serializeAws_restJson1CreateInputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/inputs";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.inputDefinition !== undefined &&
                    input.inputDefinition !== null && {
                    inputDefinition: serializeAws_restJson1InputDefinition(input.inputDefinition, context),
                })), (input.inputDescription !== undefined &&
                    input.inputDescription !== null && { inputDescription: input.inputDescription })), (input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) })));
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
export var serializeAws_restJson1DeleteAlarmModelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/alarm-models/{alarmModelName}";
                if (input.alarmModelName !== undefined) {
                    labelValue = input.alarmModelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: alarmModelName.");
                    }
                    resolvedPath = resolvedPath.replace("{alarmModelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: alarmModelName.");
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
export var serializeAws_restJson1DeleteDetectorModelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector-models/{detectorModelName}";
                if (input.detectorModelName !== undefined) {
                    labelValue = input.detectorModelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: detectorModelName.");
                    }
                    resolvedPath = resolvedPath.replace("{detectorModelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: detectorModelName.");
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
export var serializeAws_restJson1DeleteInputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/inputs/{inputName}";
                if (input.inputName !== undefined) {
                    labelValue = input.inputName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: inputName.");
                    }
                    resolvedPath = resolvedPath.replace("{inputName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: inputName.");
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
export var serializeAws_restJson1DescribeAlarmModelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/alarm-models/{alarmModelName}";
                if (input.alarmModelName !== undefined) {
                    labelValue = input.alarmModelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: alarmModelName.");
                    }
                    resolvedPath = resolvedPath.replace("{alarmModelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: alarmModelName.");
                }
                query = __assign({}, (input.alarmModelVersion !== undefined && { version: input.alarmModelVersion }));
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
export var serializeAws_restJson1DescribeDetectorModelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector-models/{detectorModelName}";
                if (input.detectorModelName !== undefined) {
                    labelValue = input.detectorModelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: detectorModelName.");
                    }
                    resolvedPath = resolvedPath.replace("{detectorModelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: detectorModelName.");
                }
                query = __assign({}, (input.detectorModelVersion !== undefined && { version: input.detectorModelVersion }));
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
export var serializeAws_restJson1DescribeDetectorModelAnalysisCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/analysis/detector-models/{analysisId}";
                if (input.analysisId !== undefined) {
                    labelValue = input.analysisId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: analysisId.");
                    }
                    resolvedPath = resolvedPath.replace("{analysisId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: analysisId.");
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
export var serializeAws_restJson1DescribeInputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/inputs/{inputName}";
                if (input.inputName !== undefined) {
                    labelValue = input.inputName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: inputName.");
                    }
                    resolvedPath = resolvedPath.replace("{inputName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: inputName.");
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
export var serializeAws_restJson1DescribeLoggingOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/logging";
                body = "";
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
export var serializeAws_restJson1GetDetectorModelAnalysisResultsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/analysis/detector-models/{analysisId}/results";
                if (input.analysisId !== undefined) {
                    labelValue = input.analysisId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: analysisId.");
                    }
                    resolvedPath = resolvedPath.replace("{analysisId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: analysisId.");
                }
                query = __assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1ListAlarmModelsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/alarm-models";
                query = __assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1ListAlarmModelVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/alarm-models/{alarmModelName}/versions";
                if (input.alarmModelName !== undefined) {
                    labelValue = input.alarmModelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: alarmModelName.");
                    }
                    resolvedPath = resolvedPath.replace("{alarmModelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: alarmModelName.");
                }
                query = __assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1ListDetectorModelsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector-models";
                query = __assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1ListDetectorModelVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector-models/{detectorModelName}/versions";
                if (input.detectorModelName !== undefined) {
                    labelValue = input.detectorModelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: detectorModelName.");
                    }
                    resolvedPath = resolvedPath.replace("{detectorModelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: detectorModelName.");
                }
                query = __assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1ListInputRoutingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/input-routings";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.inputIdentifier !== undefined &&
                    input.inputIdentifier !== null && {
                    inputIdentifier: serializeAws_restJson1InputIdentifier(input.inputIdentifier, context),
                })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListInputsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/inputs";
                query = __assign(__assign({}, (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
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
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags";
                query = __assign({}, (input.resourceArn !== undefined && { resourceArn: input.resourceArn }));
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
export var serializeAws_restJson1PutLoggingOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/logging";
                body = JSON.stringify(__assign({}, (input.loggingOptions !== undefined &&
                    input.loggingOptions !== null && {
                    loggingOptions: serializeAws_restJson1LoggingOptions(input.loggingOptions, context),
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
export var serializeAws_restJson1StartDetectorModelAnalysisCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/analysis/detector-models";
                body = JSON.stringify(__assign({}, (input.detectorModelDefinition !== undefined &&
                    input.detectorModelDefinition !== null && {
                    detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
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
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/tags";
                query = __assign({}, (input.resourceArn !== undefined && { resourceArn: input.resourceArn }));
                body = JSON.stringify(__assign({}, (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) })));
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags";
                query = __assign(__assign({}, (input.resourceArn !== undefined && { resourceArn: input.resourceArn })), (input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map(function (_entry) { return _entry; }) }));
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
export var serializeAws_restJson1UpdateAlarmModelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/alarm-models/{alarmModelName}";
                if (input.alarmModelName !== undefined) {
                    labelValue = input.alarmModelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: alarmModelName.");
                    }
                    resolvedPath = resolvedPath.replace("{alarmModelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: alarmModelName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.alarmCapabilities !== undefined &&
                    input.alarmCapabilities !== null && {
                    alarmCapabilities: serializeAws_restJson1AlarmCapabilities(input.alarmCapabilities, context),
                })), (input.alarmEventActions !== undefined &&
                    input.alarmEventActions !== null && {
                    alarmEventActions: serializeAws_restJson1AlarmEventActions(input.alarmEventActions, context),
                })), (input.alarmModelDescription !== undefined &&
                    input.alarmModelDescription !== null && { alarmModelDescription: input.alarmModelDescription })), (input.alarmNotification !== undefined &&
                    input.alarmNotification !== null && {
                    alarmNotification: serializeAws_restJson1AlarmNotification(input.alarmNotification, context),
                })), (input.alarmRule !== undefined &&
                    input.alarmRule !== null && { alarmRule: serializeAws_restJson1AlarmRule(input.alarmRule, context) })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.severity !== undefined && input.severity !== null && { severity: input.severity })));
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
export var serializeAws_restJson1UpdateDetectorModelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector-models/{detectorModelName}";
                if (input.detectorModelName !== undefined) {
                    labelValue = input.detectorModelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: detectorModelName.");
                    }
                    resolvedPath = resolvedPath.replace("{detectorModelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: detectorModelName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.detectorModelDefinition !== undefined &&
                    input.detectorModelDefinition !== null && {
                    detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
                })), (input.detectorModelDescription !== undefined &&
                    input.detectorModelDescription !== null && { detectorModelDescription: input.detectorModelDescription })), (input.evaluationMethod !== undefined &&
                    input.evaluationMethod !== null && { evaluationMethod: input.evaluationMethod })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })));
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
export var serializeAws_restJson1UpdateInputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/inputs/{inputName}";
                if (input.inputName !== undefined) {
                    labelValue = input.inputName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: inputName.");
                    }
                    resolvedPath = resolvedPath.replace("{inputName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: inputName.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.inputDefinition !== undefined &&
                    input.inputDefinition !== null && {
                    inputDefinition: serializeAws_restJson1InputDefinition(input.inputDefinition, context),
                })), (input.inputDescription !== undefined &&
                    input.inputDescription !== null && { inputDescription: input.inputDescription })));
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
export var deserializeAws_restJson1CreateAlarmModelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateAlarmModelCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    alarmModelArn: undefined,
                    alarmModelVersion: undefined,
                    creationTime: undefined,
                    lastUpdateTime: undefined,
                    status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.alarmModelArn !== undefined && data.alarmModelArn !== null) {
                    contents.alarmModelArn = data.alarmModelArn;
                }
                if (data.alarmModelVersion !== undefined && data.alarmModelVersion !== null) {
                    contents.alarmModelVersion = data.alarmModelVersion;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.creationTime = new Date(Math.round(data.creationTime * 1000));
                }
                if (data.lastUpdateTime !== undefined && data.lastUpdateTime !== null) {
                    contents.lastUpdateTime = new Date(Math.round(data.lastUpdateTime * 1000));
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateAlarmModelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateDetectorModelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateDetectorModelCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    detectorModelConfiguration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.detectorModelConfiguration !== undefined && data.detectorModelConfiguration !== null) {
                    contents.detectorModelConfiguration = deserializeAws_restJson1DetectorModelConfiguration(data.detectorModelConfiguration, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateDetectorModelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "ResourceInUseException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateInputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateInputCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    inputConfiguration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.inputConfiguration !== undefined && data.inputConfiguration !== null) {
                    contents.inputConfiguration = deserializeAws_restJson1InputConfiguration(data.inputConfiguration, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateInputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceAlreadyExistsException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteAlarmModelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteAlarmModelCommandError(output, context)];
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
var deserializeAws_restJson1DeleteAlarmModelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteDetectorModelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteDetectorModelCommandError(output, context)];
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
var deserializeAws_restJson1DeleteDetectorModelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteInputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteInputCommandError(output, context)];
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
var deserializeAws_restJson1DeleteInputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeAlarmModelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeAlarmModelCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    alarmCapabilities: undefined,
                    alarmEventActions: undefined,
                    alarmModelArn: undefined,
                    alarmModelDescription: undefined,
                    alarmModelName: undefined,
                    alarmModelVersion: undefined,
                    alarmNotification: undefined,
                    alarmRule: undefined,
                    creationTime: undefined,
                    key: undefined,
                    lastUpdateTime: undefined,
                    roleArn: undefined,
                    severity: undefined,
                    status: undefined,
                    statusMessage: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.alarmCapabilities !== undefined && data.alarmCapabilities !== null) {
                    contents.alarmCapabilities = deserializeAws_restJson1AlarmCapabilities(data.alarmCapabilities, context);
                }
                if (data.alarmEventActions !== undefined && data.alarmEventActions !== null) {
                    contents.alarmEventActions = deserializeAws_restJson1AlarmEventActions(data.alarmEventActions, context);
                }
                if (data.alarmModelArn !== undefined && data.alarmModelArn !== null) {
                    contents.alarmModelArn = data.alarmModelArn;
                }
                if (data.alarmModelDescription !== undefined && data.alarmModelDescription !== null) {
                    contents.alarmModelDescription = data.alarmModelDescription;
                }
                if (data.alarmModelName !== undefined && data.alarmModelName !== null) {
                    contents.alarmModelName = data.alarmModelName;
                }
                if (data.alarmModelVersion !== undefined && data.alarmModelVersion !== null) {
                    contents.alarmModelVersion = data.alarmModelVersion;
                }
                if (data.alarmNotification !== undefined && data.alarmNotification !== null) {
                    contents.alarmNotification = deserializeAws_restJson1AlarmNotification(data.alarmNotification, context);
                }
                if (data.alarmRule !== undefined && data.alarmRule !== null) {
                    contents.alarmRule = deserializeAws_restJson1AlarmRule(data.alarmRule, context);
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.creationTime = new Date(Math.round(data.creationTime * 1000));
                }
                if (data.key !== undefined && data.key !== null) {
                    contents.key = data.key;
                }
                if (data.lastUpdateTime !== undefined && data.lastUpdateTime !== null) {
                    contents.lastUpdateTime = new Date(Math.round(data.lastUpdateTime * 1000));
                }
                if (data.roleArn !== undefined && data.roleArn !== null) {
                    contents.roleArn = data.roleArn;
                }
                if (data.severity !== undefined && data.severity !== null) {
                    contents.severity = data.severity;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.statusMessage !== undefined && data.statusMessage !== null) {
                    contents.statusMessage = data.statusMessage;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeAlarmModelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeDetectorModelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeDetectorModelCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    detectorModel: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.detectorModel !== undefined && data.detectorModel !== null) {
                    contents.detectorModel = deserializeAws_restJson1DetectorModel(data.detectorModel, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeDetectorModelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeDetectorModelAnalysisCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeDetectorModelAnalysisCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeDetectorModelAnalysisCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeInputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeInputCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    input: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.input !== undefined && data.input !== null) {
                    contents.input = deserializeAws_restJson1Input(data.input, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeInputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeLoggingOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeLoggingOptionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    loggingOptions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.loggingOptions !== undefined && data.loggingOptions !== null) {
                    contents.loggingOptions = deserializeAws_restJson1LoggingOptions(data.loggingOptions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeLoggingOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetDetectorModelAnalysisResultsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    analysisResults: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.analysisResults !== undefined && data.analysisResults !== null) {
                    contents.analysisResults = deserializeAws_restJson1AnalysisResults(data.analysisResults, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetDetectorModelAnalysisResultsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListAlarmModelsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListAlarmModelsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    alarmModelSummaries: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.alarmModelSummaries !== undefined && data.alarmModelSummaries !== null) {
                    contents.alarmModelSummaries = deserializeAws_restJson1AlarmModelSummaries(data.alarmModelSummaries, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListAlarmModelsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListAlarmModelVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListAlarmModelVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    alarmModelVersionSummaries: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.alarmModelVersionSummaries !== undefined && data.alarmModelVersionSummaries !== null) {
                    contents.alarmModelVersionSummaries = deserializeAws_restJson1AlarmModelVersionSummaries(data.alarmModelVersionSummaries, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListAlarmModelVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDetectorModelsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListDetectorModelsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    detectorModelSummaries: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.detectorModelSummaries !== undefined && data.detectorModelSummaries !== null) {
                    contents.detectorModelSummaries = deserializeAws_restJson1DetectorModelSummaries(data.detectorModelSummaries, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListDetectorModelsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDetectorModelVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListDetectorModelVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    detectorModelVersionSummaries: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.detectorModelVersionSummaries !== undefined && data.detectorModelVersionSummaries !== null) {
                    contents.detectorModelVersionSummaries = deserializeAws_restJson1DetectorModelVersionSummaries(data.detectorModelVersionSummaries, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListDetectorModelVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListInputRoutingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListInputRoutingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    routedResources: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.routedResources !== undefined && data.routedResources !== null) {
                    contents.routedResources = deserializeAws_restJson1RoutedResources(data.routedResources, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListInputRoutingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListInputsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListInputsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    inputSummaries: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.inputSummaries !== undefined && data.inputSummaries !== null) {
                    contents.inputSummaries = deserializeAws_restJson1InputSummaries(data.inputSummaries, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListInputsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutLoggingOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutLoggingOptionsCommandError(output, context)];
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
var deserializeAws_restJson1PutLoggingOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                    case "UnsupportedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#UnsupportedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartDetectorModelAnalysisCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartDetectorModelAnalysisCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    analysisId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.analysisId !== undefined && data.analysisId !== null) {
                    contents.analysisId = data.analysisId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartDetectorModelAnalysisCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#LimitExceededException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateAlarmModelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateAlarmModelCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    alarmModelArn: undefined,
                    alarmModelVersion: undefined,
                    creationTime: undefined,
                    lastUpdateTime: undefined,
                    status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.alarmModelArn !== undefined && data.alarmModelArn !== null) {
                    contents.alarmModelArn = data.alarmModelArn;
                }
                if (data.alarmModelVersion !== undefined && data.alarmModelVersion !== null) {
                    contents.alarmModelVersion = data.alarmModelVersion;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.creationTime = new Date(Math.round(data.creationTime * 1000));
                }
                if (data.lastUpdateTime !== undefined && data.lastUpdateTime !== null) {
                    contents.lastUpdateTime = new Date(Math.round(data.lastUpdateTime * 1000));
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateAlarmModelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateDetectorModelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateDetectorModelCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    detectorModelConfiguration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.detectorModelConfiguration !== undefined && data.detectorModelConfiguration !== null) {
                    contents.detectorModelConfiguration = deserializeAws_restJson1DetectorModelConfiguration(data.detectorModelConfiguration, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateDetectorModelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateInputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateInputCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    inputConfiguration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.inputConfiguration !== undefined && data.inputConfiguration !== null) {
                    contents.inputConfiguration = deserializeAws_restJson1InputConfiguration(data.inputConfiguration, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateInputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalFailureException": return [3 /*break*/, 2];
                    case "com.amazonaws.iotevents#InternalFailureException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.iotevents#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.iotevents#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.iotevents#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.iotevents#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.iotevents#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1InternalFailureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalFailureException",
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
var deserializeAws_restJson1InvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidRequestException",
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
var deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceAlreadyExistsException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
            resourceArn: undefined,
            resourceId: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.resourceArn !== undefined && data.resourceArn !== null) {
            contents.resourceArn = data.resourceArn;
        }
        if (data.resourceId !== undefined && data.resourceId !== null) {
            contents.resourceId = data.resourceId;
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
var deserializeAws_restJson1ServiceUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceUnavailableException",
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
var deserializeAws_restJson1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ThrottlingException",
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
var deserializeAws_restJson1UnsupportedOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "UnsupportedOperationException",
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
var serializeAws_restJson1AcknowledgeFlow = function (input, context) {
    return __assign({}, (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }));
};
var serializeAws_restJson1Action = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.clearTimer !== undefined &&
        input.clearTimer !== null && { clearTimer: serializeAws_restJson1ClearTimerAction(input.clearTimer, context) })), (input.dynamoDB !== undefined &&
        input.dynamoDB !== null && { dynamoDB: serializeAws_restJson1DynamoDBAction(input.dynamoDB, context) })), (input.dynamoDBv2 !== undefined &&
        input.dynamoDBv2 !== null && { dynamoDBv2: serializeAws_restJson1DynamoDBv2Action(input.dynamoDBv2, context) })), (input.firehose !== undefined &&
        input.firehose !== null && { firehose: serializeAws_restJson1FirehoseAction(input.firehose, context) })), (input.iotEvents !== undefined &&
        input.iotEvents !== null && { iotEvents: serializeAws_restJson1IotEventsAction(input.iotEvents, context) })), (input.iotSiteWise !== undefined &&
        input.iotSiteWise !== null && {
        iotSiteWise: serializeAws_restJson1IotSiteWiseAction(input.iotSiteWise, context),
    })), (input.iotTopicPublish !== undefined &&
        input.iotTopicPublish !== null && {
        iotTopicPublish: serializeAws_restJson1IotTopicPublishAction(input.iotTopicPublish, context),
    })), (input.lambda !== undefined &&
        input.lambda !== null && { lambda: serializeAws_restJson1LambdaAction(input.lambda, context) })), (input.resetTimer !== undefined &&
        input.resetTimer !== null && { resetTimer: serializeAws_restJson1ResetTimerAction(input.resetTimer, context) })), (input.setTimer !== undefined &&
        input.setTimer !== null && { setTimer: serializeAws_restJson1SetTimerAction(input.setTimer, context) })), (input.setVariable !== undefined &&
        input.setVariable !== null && {
        setVariable: serializeAws_restJson1SetVariableAction(input.setVariable, context),
    })), (input.sns !== undefined &&
        input.sns !== null && { sns: serializeAws_restJson1SNSTopicPublishAction(input.sns, context) })), (input.sqs !== undefined && input.sqs !== null && { sqs: serializeAws_restJson1SqsAction(input.sqs, context) }));
};
var serializeAws_restJson1Actions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Action(entry, context);
    });
};
var serializeAws_restJson1AlarmAction = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.dynamoDB !== undefined &&
        input.dynamoDB !== null && { dynamoDB: serializeAws_restJson1DynamoDBAction(input.dynamoDB, context) })), (input.dynamoDBv2 !== undefined &&
        input.dynamoDBv2 !== null && { dynamoDBv2: serializeAws_restJson1DynamoDBv2Action(input.dynamoDBv2, context) })), (input.firehose !== undefined &&
        input.firehose !== null && { firehose: serializeAws_restJson1FirehoseAction(input.firehose, context) })), (input.iotEvents !== undefined &&
        input.iotEvents !== null && { iotEvents: serializeAws_restJson1IotEventsAction(input.iotEvents, context) })), (input.iotSiteWise !== undefined &&
        input.iotSiteWise !== null && {
        iotSiteWise: serializeAws_restJson1IotSiteWiseAction(input.iotSiteWise, context),
    })), (input.iotTopicPublish !== undefined &&
        input.iotTopicPublish !== null && {
        iotTopicPublish: serializeAws_restJson1IotTopicPublishAction(input.iotTopicPublish, context),
    })), (input.lambda !== undefined &&
        input.lambda !== null && { lambda: serializeAws_restJson1LambdaAction(input.lambda, context) })), (input.sns !== undefined &&
        input.sns !== null && { sns: serializeAws_restJson1SNSTopicPublishAction(input.sns, context) })), (input.sqs !== undefined && input.sqs !== null && { sqs: serializeAws_restJson1SqsAction(input.sqs, context) }));
};
var serializeAws_restJson1AlarmActions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AlarmAction(entry, context);
    });
};
var serializeAws_restJson1AlarmCapabilities = function (input, context) {
    return __assign(__assign({}, (input.acknowledgeFlow !== undefined &&
        input.acknowledgeFlow !== null && {
        acknowledgeFlow: serializeAws_restJson1AcknowledgeFlow(input.acknowledgeFlow, context),
    })), (input.initializationConfiguration !== undefined &&
        input.initializationConfiguration !== null && {
        initializationConfiguration: serializeAws_restJson1InitializationConfiguration(input.initializationConfiguration, context),
    }));
};
var serializeAws_restJson1AlarmEventActions = function (input, context) {
    return __assign({}, (input.alarmActions !== undefined &&
        input.alarmActions !== null && { alarmActions: serializeAws_restJson1AlarmActions(input.alarmActions, context) }));
};
var serializeAws_restJson1AlarmNotification = function (input, context) {
    return __assign({}, (input.notificationActions !== undefined &&
        input.notificationActions !== null && {
        notificationActions: serializeAws_restJson1NotificationActions(input.notificationActions, context),
    }));
};
var serializeAws_restJson1AlarmRule = function (input, context) {
    return __assign({}, (input.simpleRule !== undefined &&
        input.simpleRule !== null && { simpleRule: serializeAws_restJson1SimpleRule(input.simpleRule, context) }));
};
var serializeAws_restJson1AssetPropertyTimestamp = function (input, context) {
    return __assign(__assign({}, (input.offsetInNanos !== undefined && input.offsetInNanos !== null && { offsetInNanos: input.offsetInNanos })), (input.timeInSeconds !== undefined && input.timeInSeconds !== null && { timeInSeconds: input.timeInSeconds }));
};
var serializeAws_restJson1AssetPropertyValue = function (input, context) {
    return __assign(__assign(__assign({}, (input.quality !== undefined && input.quality !== null && { quality: input.quality })), (input.timestamp !== undefined &&
        input.timestamp !== null && {
        timestamp: serializeAws_restJson1AssetPropertyTimestamp(input.timestamp, context),
    })), (input.value !== undefined &&
        input.value !== null && { value: serializeAws_restJson1AssetPropertyVariant(input.value, context) }));
};
var serializeAws_restJson1AssetPropertyVariant = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.booleanValue !== undefined && input.booleanValue !== null && { booleanValue: input.booleanValue })), (input.doubleValue !== undefined && input.doubleValue !== null && { doubleValue: input.doubleValue })), (input.integerValue !== undefined && input.integerValue !== null && { integerValue: input.integerValue })), (input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }));
};
var serializeAws_restJson1Attribute = function (input, context) {
    return __assign({}, (input.jsonPath !== undefined && input.jsonPath !== null && { jsonPath: input.jsonPath }));
};
var serializeAws_restJson1Attributes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Attribute(entry, context);
    });
};
var serializeAws_restJson1ClearTimerAction = function (input, context) {
    return __assign({}, (input.timerName !== undefined && input.timerName !== null && { timerName: input.timerName }));
};
var serializeAws_restJson1DetectorDebugOption = function (input, context) {
    return __assign(__assign({}, (input.detectorModelName !== undefined &&
        input.detectorModelName !== null && { detectorModelName: input.detectorModelName })), (input.keyValue !== undefined && input.keyValue !== null && { keyValue: input.keyValue }));
};
var serializeAws_restJson1DetectorDebugOptions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DetectorDebugOption(entry, context);
    });
};
var serializeAws_restJson1DetectorModelDefinition = function (input, context) {
    return __assign(__assign({}, (input.initialStateName !== undefined &&
        input.initialStateName !== null && { initialStateName: input.initialStateName })), (input.states !== undefined &&
        input.states !== null && { states: serializeAws_restJson1States(input.states, context) }));
};
var serializeAws_restJson1DynamoDBAction = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.hashKeyField !== undefined && input.hashKeyField !== null && { hashKeyField: input.hashKeyField })), (input.hashKeyType !== undefined && input.hashKeyType !== null && { hashKeyType: input.hashKeyType })), (input.hashKeyValue !== undefined && input.hashKeyValue !== null && { hashKeyValue: input.hashKeyValue })), (input.operation !== undefined && input.operation !== null && { operation: input.operation })), (input.payload !== undefined &&
        input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) })), (input.payloadField !== undefined && input.payloadField !== null && { payloadField: input.payloadField })), (input.rangeKeyField !== undefined && input.rangeKeyField !== null && { rangeKeyField: input.rangeKeyField })), (input.rangeKeyType !== undefined && input.rangeKeyType !== null && { rangeKeyType: input.rangeKeyType })), (input.rangeKeyValue !== undefined && input.rangeKeyValue !== null && { rangeKeyValue: input.rangeKeyValue })), (input.tableName !== undefined && input.tableName !== null && { tableName: input.tableName }));
};
var serializeAws_restJson1DynamoDBv2Action = function (input, context) {
    return __assign(__assign({}, (input.payload !== undefined &&
        input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) })), (input.tableName !== undefined && input.tableName !== null && { tableName: input.tableName }));
};
var serializeAws_restJson1EmailConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.content !== undefined &&
        input.content !== null && { content: serializeAws_restJson1EmailContent(input.content, context) })), (input.from !== undefined && input.from !== null && { from: input.from })), (input.recipients !== undefined &&
        input.recipients !== null && { recipients: serializeAws_restJson1EmailRecipients(input.recipients, context) }));
};
var serializeAws_restJson1EmailConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1EmailConfiguration(entry, context);
    });
};
var serializeAws_restJson1EmailContent = function (input, context) {
    return __assign(__assign({}, (input.additionalMessage !== undefined &&
        input.additionalMessage !== null && { additionalMessage: input.additionalMessage })), (input.subject !== undefined && input.subject !== null && { subject: input.subject }));
};
var serializeAws_restJson1EmailRecipients = function (input, context) {
    return __assign({}, (input.to !== undefined &&
        input.to !== null && { to: serializeAws_restJson1RecipientDetails(input.to, context) }));
};
var serializeAws_restJson1Event = function (input, context) {
    return __assign(__assign(__assign({}, (input.actions !== undefined &&
        input.actions !== null && { actions: serializeAws_restJson1Actions(input.actions, context) })), (input.condition !== undefined && input.condition !== null && { condition: input.condition })), (input.eventName !== undefined && input.eventName !== null && { eventName: input.eventName }));
};
var serializeAws_restJson1Events = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Event(entry, context);
    });
};
var serializeAws_restJson1FirehoseAction = function (input, context) {
    return __assign(__assign(__assign({}, (input.deliveryStreamName !== undefined &&
        input.deliveryStreamName !== null && { deliveryStreamName: input.deliveryStreamName })), (input.payload !== undefined &&
        input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) })), (input.separator !== undefined && input.separator !== null && { separator: input.separator }));
};
var serializeAws_restJson1InitializationConfiguration = function (input, context) {
    return __assign({}, (input.disabledOnInitialization !== undefined &&
        input.disabledOnInitialization !== null && { disabledOnInitialization: input.disabledOnInitialization }));
};
var serializeAws_restJson1InputDefinition = function (input, context) {
    return __assign({}, (input.attributes !== undefined &&
        input.attributes !== null && { attributes: serializeAws_restJson1Attributes(input.attributes, context) }));
};
var serializeAws_restJson1InputIdentifier = function (input, context) {
    return __assign(__assign({}, (input.iotEventsInputIdentifier !== undefined &&
        input.iotEventsInputIdentifier !== null && {
        iotEventsInputIdentifier: serializeAws_restJson1IotEventsInputIdentifier(input.iotEventsInputIdentifier, context),
    })), (input.iotSiteWiseInputIdentifier !== undefined &&
        input.iotSiteWiseInputIdentifier !== null && {
        iotSiteWiseInputIdentifier: serializeAws_restJson1IotSiteWiseInputIdentifier(input.iotSiteWiseInputIdentifier, context),
    }));
};
var serializeAws_restJson1IotEventsAction = function (input, context) {
    return __assign(__assign({}, (input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName })), (input.payload !== undefined &&
        input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }));
};
var serializeAws_restJson1IotEventsInputIdentifier = function (input, context) {
    return __assign({}, (input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName }));
};
var serializeAws_restJson1IotSiteWiseAction = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.assetId !== undefined && input.assetId !== null && { assetId: input.assetId })), (input.entryId !== undefined && input.entryId !== null && { entryId: input.entryId })), (input.propertyAlias !== undefined && input.propertyAlias !== null && { propertyAlias: input.propertyAlias })), (input.propertyId !== undefined && input.propertyId !== null && { propertyId: input.propertyId })), (input.propertyValue !== undefined &&
        input.propertyValue !== null && {
        propertyValue: serializeAws_restJson1AssetPropertyValue(input.propertyValue, context),
    }));
};
var serializeAws_restJson1IotSiteWiseAssetModelPropertyIdentifier = function (input, context) {
    return __assign(__assign({}, (input.assetModelId !== undefined && input.assetModelId !== null && { assetModelId: input.assetModelId })), (input.propertyId !== undefined && input.propertyId !== null && { propertyId: input.propertyId }));
};
var serializeAws_restJson1IotSiteWiseInputIdentifier = function (input, context) {
    return __assign({}, (input.iotSiteWiseAssetModelPropertyIdentifier !== undefined &&
        input.iotSiteWiseAssetModelPropertyIdentifier !== null && {
        iotSiteWiseAssetModelPropertyIdentifier: serializeAws_restJson1IotSiteWiseAssetModelPropertyIdentifier(input.iotSiteWiseAssetModelPropertyIdentifier, context),
    }));
};
var serializeAws_restJson1IotTopicPublishAction = function (input, context) {
    return __assign(__assign({}, (input.mqttTopic !== undefined && input.mqttTopic !== null && { mqttTopic: input.mqttTopic })), (input.payload !== undefined &&
        input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }));
};
var serializeAws_restJson1LambdaAction = function (input, context) {
    return __assign(__assign({}, (input.functionArn !== undefined && input.functionArn !== null && { functionArn: input.functionArn })), (input.payload !== undefined &&
        input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }));
};
var serializeAws_restJson1LoggingOptions = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.detectorDebugOptions !== undefined &&
        input.detectorDebugOptions !== null && {
        detectorDebugOptions: serializeAws_restJson1DetectorDebugOptions(input.detectorDebugOptions, context),
    })), (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled })), (input.level !== undefined && input.level !== null && { level: input.level })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }));
};
var serializeAws_restJson1NotificationAction = function (input, context) {
    return __assign(__assign(__assign({}, (input.action !== undefined &&
        input.action !== null && { action: serializeAws_restJson1NotificationTargetActions(input.action, context) })), (input.emailConfigurations !== undefined &&
        input.emailConfigurations !== null && {
        emailConfigurations: serializeAws_restJson1EmailConfigurations(input.emailConfigurations, context),
    })), (input.smsConfigurations !== undefined &&
        input.smsConfigurations !== null && {
        smsConfigurations: serializeAws_restJson1SMSConfigurations(input.smsConfigurations, context),
    }));
};
var serializeAws_restJson1NotificationActions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1NotificationAction(entry, context);
    });
};
var serializeAws_restJson1NotificationTargetActions = function (input, context) {
    return __assign({}, (input.lambdaAction !== undefined &&
        input.lambdaAction !== null && { lambdaAction: serializeAws_restJson1LambdaAction(input.lambdaAction, context) }));
};
var serializeAws_restJson1OnEnterLifecycle = function (input, context) {
    return __assign({}, (input.events !== undefined &&
        input.events !== null && { events: serializeAws_restJson1Events(input.events, context) }));
};
var serializeAws_restJson1OnExitLifecycle = function (input, context) {
    return __assign({}, (input.events !== undefined &&
        input.events !== null && { events: serializeAws_restJson1Events(input.events, context) }));
};
var serializeAws_restJson1OnInputLifecycle = function (input, context) {
    return __assign(__assign({}, (input.events !== undefined &&
        input.events !== null && { events: serializeAws_restJson1Events(input.events, context) })), (input.transitionEvents !== undefined &&
        input.transitionEvents !== null && {
        transitionEvents: serializeAws_restJson1TransitionEvents(input.transitionEvents, context),
    }));
};
var serializeAws_restJson1Payload = function (input, context) {
    return __assign(__assign({}, (input.contentExpression !== undefined &&
        input.contentExpression !== null && { contentExpression: input.contentExpression })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_restJson1RecipientDetail = function (input, context) {
    return __assign({}, (input.ssoIdentity !== undefined &&
        input.ssoIdentity !== null && { ssoIdentity: serializeAws_restJson1SSOIdentity(input.ssoIdentity, context) }));
};
var serializeAws_restJson1RecipientDetails = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RecipientDetail(entry, context);
    });
};
var serializeAws_restJson1ResetTimerAction = function (input, context) {
    return __assign({}, (input.timerName !== undefined && input.timerName !== null && { timerName: input.timerName }));
};
var serializeAws_restJson1SetTimerAction = function (input, context) {
    return __assign(__assign(__assign({}, (input.durationExpression !== undefined &&
        input.durationExpression !== null && { durationExpression: input.durationExpression })), (input.seconds !== undefined && input.seconds !== null && { seconds: input.seconds })), (input.timerName !== undefined && input.timerName !== null && { timerName: input.timerName }));
};
var serializeAws_restJson1SetVariableAction = function (input, context) {
    return __assign(__assign({}, (input.value !== undefined && input.value !== null && { value: input.value })), (input.variableName !== undefined && input.variableName !== null && { variableName: input.variableName }));
};
var serializeAws_restJson1SimpleRule = function (input, context) {
    return __assign(__assign(__assign({}, (input.comparisonOperator !== undefined &&
        input.comparisonOperator !== null && { comparisonOperator: input.comparisonOperator })), (input.inputProperty !== undefined && input.inputProperty !== null && { inputProperty: input.inputProperty })), (input.threshold !== undefined && input.threshold !== null && { threshold: input.threshold }));
};
var serializeAws_restJson1SMSConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.additionalMessage !== undefined &&
        input.additionalMessage !== null && { additionalMessage: input.additionalMessage })), (input.recipients !== undefined &&
        input.recipients !== null && { recipients: serializeAws_restJson1RecipientDetails(input.recipients, context) })), (input.senderId !== undefined && input.senderId !== null && { senderId: input.senderId }));
};
var serializeAws_restJson1SMSConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SMSConfiguration(entry, context);
    });
};
var serializeAws_restJson1SNSTopicPublishAction = function (input, context) {
    return __assign(__assign({}, (input.payload !== undefined &&
        input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) })), (input.targetArn !== undefined && input.targetArn !== null && { targetArn: input.targetArn }));
};
var serializeAws_restJson1SqsAction = function (input, context) {
    return __assign(__assign(__assign({}, (input.payload !== undefined &&
        input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) })), (input.queueUrl !== undefined && input.queueUrl !== null && { queueUrl: input.queueUrl })), (input.useBase64 !== undefined && input.useBase64 !== null && { useBase64: input.useBase64 }));
};
var serializeAws_restJson1SSOIdentity = function (input, context) {
    return __assign(__assign({}, (input.identityStoreId !== undefined &&
        input.identityStoreId !== null && { identityStoreId: input.identityStoreId })), (input.userId !== undefined && input.userId !== null && { userId: input.userId }));
};
var serializeAws_restJson1State = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.onEnter !== undefined &&
        input.onEnter !== null && { onEnter: serializeAws_restJson1OnEnterLifecycle(input.onEnter, context) })), (input.onExit !== undefined &&
        input.onExit !== null && { onExit: serializeAws_restJson1OnExitLifecycle(input.onExit, context) })), (input.onInput !== undefined &&
        input.onInput !== null && { onInput: serializeAws_restJson1OnInputLifecycle(input.onInput, context) })), (input.stateName !== undefined && input.stateName !== null && { stateName: input.stateName }));
};
var serializeAws_restJson1States = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1State(entry, context);
    });
};
var serializeAws_restJson1Tag = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1Tags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
var serializeAws_restJson1TransitionEvent = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.actions !== undefined &&
        input.actions !== null && { actions: serializeAws_restJson1Actions(input.actions, context) })), (input.condition !== undefined && input.condition !== null && { condition: input.condition })), (input.eventName !== undefined && input.eventName !== null && { eventName: input.eventName })), (input.nextState !== undefined && input.nextState !== null && { nextState: input.nextState }));
};
var serializeAws_restJson1TransitionEvents = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TransitionEvent(entry, context);
    });
};
var deserializeAws_restJson1AcknowledgeFlow = function (output, context) {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
var deserializeAws_restJson1Action = function (output, context) {
    return {
        clearTimer: output.clearTimer !== undefined && output.clearTimer !== null
            ? deserializeAws_restJson1ClearTimerAction(output.clearTimer, context)
            : undefined,
        dynamoDB: output.dynamoDB !== undefined && output.dynamoDB !== null
            ? deserializeAws_restJson1DynamoDBAction(output.dynamoDB, context)
            : undefined,
        dynamoDBv2: output.dynamoDBv2 !== undefined && output.dynamoDBv2 !== null
            ? deserializeAws_restJson1DynamoDBv2Action(output.dynamoDBv2, context)
            : undefined,
        firehose: output.firehose !== undefined && output.firehose !== null
            ? deserializeAws_restJson1FirehoseAction(output.firehose, context)
            : undefined,
        iotEvents: output.iotEvents !== undefined && output.iotEvents !== null
            ? deserializeAws_restJson1IotEventsAction(output.iotEvents, context)
            : undefined,
        iotSiteWise: output.iotSiteWise !== undefined && output.iotSiteWise !== null
            ? deserializeAws_restJson1IotSiteWiseAction(output.iotSiteWise, context)
            : undefined,
        iotTopicPublish: output.iotTopicPublish !== undefined && output.iotTopicPublish !== null
            ? deserializeAws_restJson1IotTopicPublishAction(output.iotTopicPublish, context)
            : undefined,
        lambda: output.lambda !== undefined && output.lambda !== null
            ? deserializeAws_restJson1LambdaAction(output.lambda, context)
            : undefined,
        resetTimer: output.resetTimer !== undefined && output.resetTimer !== null
            ? deserializeAws_restJson1ResetTimerAction(output.resetTimer, context)
            : undefined,
        setTimer: output.setTimer !== undefined && output.setTimer !== null
            ? deserializeAws_restJson1SetTimerAction(output.setTimer, context)
            : undefined,
        setVariable: output.setVariable !== undefined && output.setVariable !== null
            ? deserializeAws_restJson1SetVariableAction(output.setVariable, context)
            : undefined,
        sns: output.sns !== undefined && output.sns !== null
            ? deserializeAws_restJson1SNSTopicPublishAction(output.sns, context)
            : undefined,
        sqs: output.sqs !== undefined && output.sqs !== null
            ? deserializeAws_restJson1SqsAction(output.sqs, context)
            : undefined,
    };
};
var deserializeAws_restJson1Actions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Action(entry, context);
    });
};
var deserializeAws_restJson1AlarmAction = function (output, context) {
    return {
        dynamoDB: output.dynamoDB !== undefined && output.dynamoDB !== null
            ? deserializeAws_restJson1DynamoDBAction(output.dynamoDB, context)
            : undefined,
        dynamoDBv2: output.dynamoDBv2 !== undefined && output.dynamoDBv2 !== null
            ? deserializeAws_restJson1DynamoDBv2Action(output.dynamoDBv2, context)
            : undefined,
        firehose: output.firehose !== undefined && output.firehose !== null
            ? deserializeAws_restJson1FirehoseAction(output.firehose, context)
            : undefined,
        iotEvents: output.iotEvents !== undefined && output.iotEvents !== null
            ? deserializeAws_restJson1IotEventsAction(output.iotEvents, context)
            : undefined,
        iotSiteWise: output.iotSiteWise !== undefined && output.iotSiteWise !== null
            ? deserializeAws_restJson1IotSiteWiseAction(output.iotSiteWise, context)
            : undefined,
        iotTopicPublish: output.iotTopicPublish !== undefined && output.iotTopicPublish !== null
            ? deserializeAws_restJson1IotTopicPublishAction(output.iotTopicPublish, context)
            : undefined,
        lambda: output.lambda !== undefined && output.lambda !== null
            ? deserializeAws_restJson1LambdaAction(output.lambda, context)
            : undefined,
        sns: output.sns !== undefined && output.sns !== null
            ? deserializeAws_restJson1SNSTopicPublishAction(output.sns, context)
            : undefined,
        sqs: output.sqs !== undefined && output.sqs !== null
            ? deserializeAws_restJson1SqsAction(output.sqs, context)
            : undefined,
    };
};
var deserializeAws_restJson1AlarmActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AlarmAction(entry, context);
    });
};
var deserializeAws_restJson1AlarmCapabilities = function (output, context) {
    return {
        acknowledgeFlow: output.acknowledgeFlow !== undefined && output.acknowledgeFlow !== null
            ? deserializeAws_restJson1AcknowledgeFlow(output.acknowledgeFlow, context)
            : undefined,
        initializationConfiguration: output.initializationConfiguration !== undefined && output.initializationConfiguration !== null
            ? deserializeAws_restJson1InitializationConfiguration(output.initializationConfiguration, context)
            : undefined,
    };
};
var deserializeAws_restJson1AlarmEventActions = function (output, context) {
    return {
        alarmActions: output.alarmActions !== undefined && output.alarmActions !== null
            ? deserializeAws_restJson1AlarmActions(output.alarmActions, context)
            : undefined,
    };
};
var deserializeAws_restJson1AlarmModelSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AlarmModelSummary(entry, context);
    });
};
var deserializeAws_restJson1AlarmModelSummary = function (output, context) {
    return {
        alarmModelDescription: output.alarmModelDescription !== undefined && output.alarmModelDescription !== null
            ? output.alarmModelDescription
            : undefined,
        alarmModelName: output.alarmModelName !== undefined && output.alarmModelName !== null ? output.alarmModelName : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
    };
};
var deserializeAws_restJson1AlarmModelVersionSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AlarmModelVersionSummary(entry, context);
    });
};
var deserializeAws_restJson1AlarmModelVersionSummary = function (output, context) {
    return {
        alarmModelArn: output.alarmModelArn !== undefined && output.alarmModelArn !== null ? output.alarmModelArn : undefined,
        alarmModelName: output.alarmModelName !== undefined && output.alarmModelName !== null ? output.alarmModelName : undefined,
        alarmModelVersion: output.alarmModelVersion !== undefined && output.alarmModelVersion !== null
            ? output.alarmModelVersion
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
    };
};
var deserializeAws_restJson1AlarmNotification = function (output, context) {
    return {
        notificationActions: output.notificationActions !== undefined && output.notificationActions !== null
            ? deserializeAws_restJson1NotificationActions(output.notificationActions, context)
            : undefined,
    };
};
var deserializeAws_restJson1AlarmRule = function (output, context) {
    return {
        simpleRule: output.simpleRule !== undefined && output.simpleRule !== null
            ? deserializeAws_restJson1SimpleRule(output.simpleRule, context)
            : undefined,
    };
};
var deserializeAws_restJson1AnalysisResult = function (output, context) {
    return {
        level: output.level !== undefined && output.level !== null ? output.level : undefined,
        locations: output.locations !== undefined && output.locations !== null
            ? deserializeAws_restJson1AnalysisResultLocations(output.locations, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1AnalysisResultLocation = function (output, context) {
    return {
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
    };
};
var deserializeAws_restJson1AnalysisResultLocations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnalysisResultLocation(entry, context);
    });
};
var deserializeAws_restJson1AnalysisResults = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnalysisResult(entry, context);
    });
};
var deserializeAws_restJson1AssetPropertyTimestamp = function (output, context) {
    return {
        offsetInNanos: output.offsetInNanos !== undefined && output.offsetInNanos !== null ? output.offsetInNanos : undefined,
        timeInSeconds: output.timeInSeconds !== undefined && output.timeInSeconds !== null ? output.timeInSeconds : undefined,
    };
};
var deserializeAws_restJson1AssetPropertyValue = function (output, context) {
    return {
        quality: output.quality !== undefined && output.quality !== null ? output.quality : undefined,
        timestamp: output.timestamp !== undefined && output.timestamp !== null
            ? deserializeAws_restJson1AssetPropertyTimestamp(output.timestamp, context)
            : undefined,
        value: output.value !== undefined && output.value !== null
            ? deserializeAws_restJson1AssetPropertyVariant(output.value, context)
            : undefined,
    };
};
var deserializeAws_restJson1AssetPropertyVariant = function (output, context) {
    return {
        booleanValue: output.booleanValue !== undefined && output.booleanValue !== null ? output.booleanValue : undefined,
        doubleValue: output.doubleValue !== undefined && output.doubleValue !== null ? output.doubleValue : undefined,
        integerValue: output.integerValue !== undefined && output.integerValue !== null ? output.integerValue : undefined,
        stringValue: output.stringValue !== undefined && output.stringValue !== null ? output.stringValue : undefined,
    };
};
var deserializeAws_restJson1Attribute = function (output, context) {
    return {
        jsonPath: output.jsonPath !== undefined && output.jsonPath !== null ? output.jsonPath : undefined,
    };
};
var deserializeAws_restJson1Attributes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Attribute(entry, context);
    });
};
var deserializeAws_restJson1ClearTimerAction = function (output, context) {
    return {
        timerName: output.timerName !== undefined && output.timerName !== null ? output.timerName : undefined,
    };
};
var deserializeAws_restJson1DetectorDebugOption = function (output, context) {
    return {
        detectorModelName: output.detectorModelName !== undefined && output.detectorModelName !== null
            ? output.detectorModelName
            : undefined,
        keyValue: output.keyValue !== undefined && output.keyValue !== null ? output.keyValue : undefined,
    };
};
var deserializeAws_restJson1DetectorDebugOptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DetectorDebugOption(entry, context);
    });
};
var deserializeAws_restJson1DetectorModel = function (output, context) {
    return {
        detectorModelConfiguration: output.detectorModelConfiguration !== undefined && output.detectorModelConfiguration !== null
            ? deserializeAws_restJson1DetectorModelConfiguration(output.detectorModelConfiguration, context)
            : undefined,
        detectorModelDefinition: output.detectorModelDefinition !== undefined && output.detectorModelDefinition !== null
            ? deserializeAws_restJson1DetectorModelDefinition(output.detectorModelDefinition, context)
            : undefined,
    };
};
var deserializeAws_restJson1DetectorModelConfiguration = function (output, context) {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        detectorModelArn: output.detectorModelArn !== undefined && output.detectorModelArn !== null ? output.detectorModelArn : undefined,
        detectorModelDescription: output.detectorModelDescription !== undefined && output.detectorModelDescription !== null
            ? output.detectorModelDescription
            : undefined,
        detectorModelName: output.detectorModelName !== undefined && output.detectorModelName !== null
            ? output.detectorModelName
            : undefined,
        detectorModelVersion: output.detectorModelVersion !== undefined && output.detectorModelVersion !== null
            ? output.detectorModelVersion
            : undefined,
        evaluationMethod: output.evaluationMethod !== undefined && output.evaluationMethod !== null ? output.evaluationMethod : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1DetectorModelDefinition = function (output, context) {
    return {
        initialStateName: output.initialStateName !== undefined && output.initialStateName !== null ? output.initialStateName : undefined,
        states: output.states !== undefined && output.states !== null
            ? deserializeAws_restJson1States(output.states, context)
            : undefined,
    };
};
var deserializeAws_restJson1DetectorModelSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DetectorModelSummary(entry, context);
    });
};
var deserializeAws_restJson1DetectorModelSummary = function (output, context) {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        detectorModelDescription: output.detectorModelDescription !== undefined && output.detectorModelDescription !== null
            ? output.detectorModelDescription
            : undefined,
        detectorModelName: output.detectorModelName !== undefined && output.detectorModelName !== null
            ? output.detectorModelName
            : undefined,
    };
};
var deserializeAws_restJson1DetectorModelVersionSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DetectorModelVersionSummary(entry, context);
    });
};
var deserializeAws_restJson1DetectorModelVersionSummary = function (output, context) {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        detectorModelArn: output.detectorModelArn !== undefined && output.detectorModelArn !== null ? output.detectorModelArn : undefined,
        detectorModelName: output.detectorModelName !== undefined && output.detectorModelName !== null
            ? output.detectorModelName
            : undefined,
        detectorModelVersion: output.detectorModelVersion !== undefined && output.detectorModelVersion !== null
            ? output.detectorModelVersion
            : undefined,
        evaluationMethod: output.evaluationMethod !== undefined && output.evaluationMethod !== null ? output.evaluationMethod : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1DynamoDBAction = function (output, context) {
    return {
        hashKeyField: output.hashKeyField !== undefined && output.hashKeyField !== null ? output.hashKeyField : undefined,
        hashKeyType: output.hashKeyType !== undefined && output.hashKeyType !== null ? output.hashKeyType : undefined,
        hashKeyValue: output.hashKeyValue !== undefined && output.hashKeyValue !== null ? output.hashKeyValue : undefined,
        operation: output.operation !== undefined && output.operation !== null ? output.operation : undefined,
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
        payloadField: output.payloadField !== undefined && output.payloadField !== null ? output.payloadField : undefined,
        rangeKeyField: output.rangeKeyField !== undefined && output.rangeKeyField !== null ? output.rangeKeyField : undefined,
        rangeKeyType: output.rangeKeyType !== undefined && output.rangeKeyType !== null ? output.rangeKeyType : undefined,
        rangeKeyValue: output.rangeKeyValue !== undefined && output.rangeKeyValue !== null ? output.rangeKeyValue : undefined,
        tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
    };
};
var deserializeAws_restJson1DynamoDBv2Action = function (output, context) {
    return {
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
        tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
    };
};
var deserializeAws_restJson1EmailConfiguration = function (output, context) {
    return {
        content: output.content !== undefined && output.content !== null
            ? deserializeAws_restJson1EmailContent(output.content, context)
            : undefined,
        from: output.from !== undefined && output.from !== null ? output.from : undefined,
        recipients: output.recipients !== undefined && output.recipients !== null
            ? deserializeAws_restJson1EmailRecipients(output.recipients, context)
            : undefined,
    };
};
var deserializeAws_restJson1EmailConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EmailConfiguration(entry, context);
    });
};
var deserializeAws_restJson1EmailContent = function (output, context) {
    return {
        additionalMessage: output.additionalMessage !== undefined && output.additionalMessage !== null
            ? output.additionalMessage
            : undefined,
        subject: output.subject !== undefined && output.subject !== null ? output.subject : undefined,
    };
};
var deserializeAws_restJson1EmailRecipients = function (output, context) {
    return {
        to: output.to !== undefined && output.to !== null
            ? deserializeAws_restJson1RecipientDetails(output.to, context)
            : undefined,
    };
};
var deserializeAws_restJson1Event = function (output, context) {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_restJson1Actions(output.actions, context)
            : undefined,
        condition: output.condition !== undefined && output.condition !== null ? output.condition : undefined,
        eventName: output.eventName !== undefined && output.eventName !== null ? output.eventName : undefined,
    };
};
var deserializeAws_restJson1Events = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Event(entry, context);
    });
};
var deserializeAws_restJson1FirehoseAction = function (output, context) {
    return {
        deliveryStreamName: output.deliveryStreamName !== undefined && output.deliveryStreamName !== null
            ? output.deliveryStreamName
            : undefined,
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
        separator: output.separator !== undefined && output.separator !== null ? output.separator : undefined,
    };
};
var deserializeAws_restJson1InitializationConfiguration = function (output, context) {
    return {
        disabledOnInitialization: output.disabledOnInitialization !== undefined && output.disabledOnInitialization !== null
            ? output.disabledOnInitialization
            : undefined,
    };
};
var deserializeAws_restJson1Input = function (output, context) {
    return {
        inputConfiguration: output.inputConfiguration !== undefined && output.inputConfiguration !== null
            ? deserializeAws_restJson1InputConfiguration(output.inputConfiguration, context)
            : undefined,
        inputDefinition: output.inputDefinition !== undefined && output.inputDefinition !== null
            ? deserializeAws_restJson1InputDefinition(output.inputDefinition, context)
            : undefined,
    };
};
var deserializeAws_restJson1InputConfiguration = function (output, context) {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        inputArn: output.inputArn !== undefined && output.inputArn !== null ? output.inputArn : undefined,
        inputDescription: output.inputDescription !== undefined && output.inputDescription !== null ? output.inputDescription : undefined,
        inputName: output.inputName !== undefined && output.inputName !== null ? output.inputName : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1InputDefinition = function (output, context) {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1Attributes(output.attributes, context)
            : undefined,
    };
};
var deserializeAws_restJson1InputSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputSummary(entry, context);
    });
};
var deserializeAws_restJson1InputSummary = function (output, context) {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        inputArn: output.inputArn !== undefined && output.inputArn !== null ? output.inputArn : undefined,
        inputDescription: output.inputDescription !== undefined && output.inputDescription !== null ? output.inputDescription : undefined,
        inputName: output.inputName !== undefined && output.inputName !== null ? output.inputName : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1IotEventsAction = function (output, context) {
    return {
        inputName: output.inputName !== undefined && output.inputName !== null ? output.inputName : undefined,
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
    };
};
var deserializeAws_restJson1IotSiteWiseAction = function (output, context) {
    return {
        assetId: output.assetId !== undefined && output.assetId !== null ? output.assetId : undefined,
        entryId: output.entryId !== undefined && output.entryId !== null ? output.entryId : undefined,
        propertyAlias: output.propertyAlias !== undefined && output.propertyAlias !== null ? output.propertyAlias : undefined,
        propertyId: output.propertyId !== undefined && output.propertyId !== null ? output.propertyId : undefined,
        propertyValue: output.propertyValue !== undefined && output.propertyValue !== null
            ? deserializeAws_restJson1AssetPropertyValue(output.propertyValue, context)
            : undefined,
    };
};
var deserializeAws_restJson1IotTopicPublishAction = function (output, context) {
    return {
        mqttTopic: output.mqttTopic !== undefined && output.mqttTopic !== null ? output.mqttTopic : undefined,
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
    };
};
var deserializeAws_restJson1LambdaAction = function (output, context) {
    return {
        functionArn: output.functionArn !== undefined && output.functionArn !== null ? output.functionArn : undefined,
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
    };
};
var deserializeAws_restJson1LoggingOptions = function (output, context) {
    return {
        detectorDebugOptions: output.detectorDebugOptions !== undefined && output.detectorDebugOptions !== null
            ? deserializeAws_restJson1DetectorDebugOptions(output.detectorDebugOptions, context)
            : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        level: output.level !== undefined && output.level !== null ? output.level : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
var deserializeAws_restJson1NotificationAction = function (output, context) {
    return {
        action: output.action !== undefined && output.action !== null
            ? deserializeAws_restJson1NotificationTargetActions(output.action, context)
            : undefined,
        emailConfigurations: output.emailConfigurations !== undefined && output.emailConfigurations !== null
            ? deserializeAws_restJson1EmailConfigurations(output.emailConfigurations, context)
            : undefined,
        smsConfigurations: output.smsConfigurations !== undefined && output.smsConfigurations !== null
            ? deserializeAws_restJson1SMSConfigurations(output.smsConfigurations, context)
            : undefined,
    };
};
var deserializeAws_restJson1NotificationActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NotificationAction(entry, context);
    });
};
var deserializeAws_restJson1NotificationTargetActions = function (output, context) {
    return {
        lambdaAction: output.lambdaAction !== undefined && output.lambdaAction !== null
            ? deserializeAws_restJson1LambdaAction(output.lambdaAction, context)
            : undefined,
    };
};
var deserializeAws_restJson1OnEnterLifecycle = function (output, context) {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_restJson1Events(output.events, context)
            : undefined,
    };
};
var deserializeAws_restJson1OnExitLifecycle = function (output, context) {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_restJson1Events(output.events, context)
            : undefined,
    };
};
var deserializeAws_restJson1OnInputLifecycle = function (output, context) {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_restJson1Events(output.events, context)
            : undefined,
        transitionEvents: output.transitionEvents !== undefined && output.transitionEvents !== null
            ? deserializeAws_restJson1TransitionEvents(output.transitionEvents, context)
            : undefined,
    };
};
var deserializeAws_restJson1Payload = function (output, context) {
    return {
        contentExpression: output.contentExpression !== undefined && output.contentExpression !== null
            ? output.contentExpression
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1RecipientDetail = function (output, context) {
    return {
        ssoIdentity: output.ssoIdentity !== undefined && output.ssoIdentity !== null
            ? deserializeAws_restJson1SSOIdentity(output.ssoIdentity, context)
            : undefined,
    };
};
var deserializeAws_restJson1RecipientDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecipientDetail(entry, context);
    });
};
var deserializeAws_restJson1ResetTimerAction = function (output, context) {
    return {
        timerName: output.timerName !== undefined && output.timerName !== null ? output.timerName : undefined,
    };
};
var deserializeAws_restJson1RoutedResource = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1RoutedResources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RoutedResource(entry, context);
    });
};
var deserializeAws_restJson1SetTimerAction = function (output, context) {
    return {
        durationExpression: output.durationExpression !== undefined && output.durationExpression !== null
            ? output.durationExpression
            : undefined,
        seconds: output.seconds !== undefined && output.seconds !== null ? output.seconds : undefined,
        timerName: output.timerName !== undefined && output.timerName !== null ? output.timerName : undefined,
    };
};
var deserializeAws_restJson1SetVariableAction = function (output, context) {
    return {
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
        variableName: output.variableName !== undefined && output.variableName !== null ? output.variableName : undefined,
    };
};
var deserializeAws_restJson1SimpleRule = function (output, context) {
    return {
        comparisonOperator: output.comparisonOperator !== undefined && output.comparisonOperator !== null
            ? output.comparisonOperator
            : undefined,
        inputProperty: output.inputProperty !== undefined && output.inputProperty !== null ? output.inputProperty : undefined,
        threshold: output.threshold !== undefined && output.threshold !== null ? output.threshold : undefined,
    };
};
var deserializeAws_restJson1SMSConfiguration = function (output, context) {
    return {
        additionalMessage: output.additionalMessage !== undefined && output.additionalMessage !== null
            ? output.additionalMessage
            : undefined,
        recipients: output.recipients !== undefined && output.recipients !== null
            ? deserializeAws_restJson1RecipientDetails(output.recipients, context)
            : undefined,
        senderId: output.senderId !== undefined && output.senderId !== null ? output.senderId : undefined,
    };
};
var deserializeAws_restJson1SMSConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SMSConfiguration(entry, context);
    });
};
var deserializeAws_restJson1SNSTopicPublishAction = function (output, context) {
    return {
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
        targetArn: output.targetArn !== undefined && output.targetArn !== null ? output.targetArn : undefined,
    };
};
var deserializeAws_restJson1SqsAction = function (output, context) {
    return {
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
        queueUrl: output.queueUrl !== undefined && output.queueUrl !== null ? output.queueUrl : undefined,
        useBase64: output.useBase64 !== undefined && output.useBase64 !== null ? output.useBase64 : undefined,
    };
};
var deserializeAws_restJson1SSOIdentity = function (output, context) {
    return {
        identityStoreId: output.identityStoreId !== undefined && output.identityStoreId !== null ? output.identityStoreId : undefined,
        userId: output.userId !== undefined && output.userId !== null ? output.userId : undefined,
    };
};
var deserializeAws_restJson1State = function (output, context) {
    return {
        onEnter: output.onEnter !== undefined && output.onEnter !== null
            ? deserializeAws_restJson1OnEnterLifecycle(output.onEnter, context)
            : undefined,
        onExit: output.onExit !== undefined && output.onExit !== null
            ? deserializeAws_restJson1OnExitLifecycle(output.onExit, context)
            : undefined,
        onInput: output.onInput !== undefined && output.onInput !== null
            ? deserializeAws_restJson1OnInputLifecycle(output.onInput, context)
            : undefined,
        stateName: output.stateName !== undefined && output.stateName !== null ? output.stateName : undefined,
    };
};
var deserializeAws_restJson1States = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1State(entry, context);
    });
};
var deserializeAws_restJson1Tag = function (output, context) {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1Tags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
var deserializeAws_restJson1TransitionEvent = function (output, context) {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_restJson1Actions(output.actions, context)
            : undefined,
        condition: output.condition !== undefined && output.condition !== null ? output.condition : undefined,
        eventName: output.eventName !== undefined && output.eventName !== null ? output.eventName : undefined,
        nextState: output.nextState !== undefined && output.nextState !== null ? output.nextState : undefined,
    };
};
var deserializeAws_restJson1TransitionEvents = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TransitionEvent(entry, context);
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