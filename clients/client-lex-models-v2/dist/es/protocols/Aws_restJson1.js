import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1BuildBotLocaleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
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
export var serializeAws_restJson1CreateBotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.botName !== undefined && input.botName !== null && { botName: input.botName })), (input.botTags !== undefined &&
                    input.botTags !== null && { botTags: serializeAws_restJson1TagMap(input.botTags, context) })), (input.dataPrivacy !== undefined &&
                    input.dataPrivacy !== null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.idleSessionTTLInSeconds !== undefined &&
                    input.idleSessionTTLInSeconds !== null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.testBotAliasTags !== undefined &&
                    input.testBotAliasTags !== null && {
                    testBotAliasTags: serializeAws_restJson1TagMap(input.testBotAliasTags, context),
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
export var serializeAws_restJson1CreateBotAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botaliases";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.botAliasLocaleSettings !== undefined &&
                    input.botAliasLocaleSettings !== null && {
                    botAliasLocaleSettings: serializeAws_restJson1BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
                })), (input.botAliasName !== undefined && input.botAliasName !== null && { botAliasName: input.botAliasName })), (input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion })), (input.conversationLogSettings !== undefined &&
                    input.conversationLogSettings !== null && {
                    conversationLogSettings: serializeAws_restJson1ConversationLogSettings(input.conversationLogSettings, context),
                })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.sentimentAnalysisSettings !== undefined &&
                    input.sentimentAnalysisSettings !== null && {
                    sentimentAnalysisSettings: serializeAws_restJson1SentimentAnalysisSettings(input.sentimentAnalysisSettings, context),
                })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
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
export var serializeAws_restJson1CreateBotLocaleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.localeId !== undefined && input.localeId !== null && { localeId: input.localeId })), (input.nluIntentConfidenceThreshold !== undefined &&
                    input.nluIntentConfidenceThreshold !== null && {
                    nluIntentConfidenceThreshold: input.nluIntentConfidenceThreshold,
                })), (input.voiceSettings !== undefined &&
                    input.voiceSettings !== null && {
                    voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
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
export var serializeAws_restJson1CreateBotVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.botVersionLocaleSpecification !== undefined &&
                    input.botVersionLocaleSpecification !== null && {
                    botVersionLocaleSpecification: serializeAws_restJson1BotVersionLocaleSpecification(input.botVersionLocaleSpecification, context),
                })), (input.description !== undefined && input.description !== null && { description: input.description })));
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
export var serializeAws_restJson1CreateExportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/exports";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat })), (input.filePassword !== undefined && input.filePassword !== null && { filePassword: input.filePassword })), (input.resourceSpecification !== undefined &&
                    input.resourceSpecification !== null && {
                    resourceSpecification: serializeAws_restJson1ExportResourceSpecification(input.resourceSpecification, context),
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
export var serializeAws_restJson1CreateIntentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.dialogCodeHook !== undefined &&
                    input.dialogCodeHook !== null && {
                    dialogCodeHook: serializeAws_restJson1DialogCodeHookSettings(input.dialogCodeHook, context),
                })), (input.fulfillmentCodeHook !== undefined &&
                    input.fulfillmentCodeHook !== null && {
                    fulfillmentCodeHook: serializeAws_restJson1FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
                })), (input.inputContexts !== undefined &&
                    input.inputContexts !== null && {
                    inputContexts: serializeAws_restJson1InputContextsList(input.inputContexts, context),
                })), (input.intentClosingSetting !== undefined &&
                    input.intentClosingSetting !== null && {
                    intentClosingSetting: serializeAws_restJson1IntentClosingSetting(input.intentClosingSetting, context),
                })), (input.intentConfirmationSetting !== undefined &&
                    input.intentConfirmationSetting !== null && {
                    intentConfirmationSetting: serializeAws_restJson1IntentConfirmationSetting(input.intentConfirmationSetting, context),
                })), (input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName })), (input.kendraConfiguration !== undefined &&
                    input.kendraConfiguration !== null && {
                    kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
                })), (input.outputContexts !== undefined &&
                    input.outputContexts !== null && {
                    outputContexts: serializeAws_restJson1OutputContextsList(input.outputContexts, context),
                })), (input.parentIntentSignature !== undefined &&
                    input.parentIntentSignature !== null && { parentIntentSignature: input.parentIntentSignature })), (input.sampleUtterances !== undefined &&
                    input.sampleUtterances !== null && {
                    sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
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
export var serializeAws_restJson1CreateResourcePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/policy/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                body = JSON.stringify(__assign({}, (input.policy !== undefined && input.policy !== null && { policy: input.policy })));
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
export var serializeAws_restJson1CreateResourcePolicyStatementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/policy/{resourceArn}/statements";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                query = __assign({}, (input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }));
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.action !== undefined &&
                    input.action !== null && { action: serializeAws_restJson1OperationList(input.action, context) })), (input.condition !== undefined &&
                    input.condition !== null && { condition: serializeAws_restJson1ConditionMap(input.condition, context) })), (input.effect !== undefined && input.effect !== null && { effect: input.effect })), (input.principal !== undefined &&
                    input.principal !== null && { principal: serializeAws_restJson1PrincipalList(input.principal, context) })), (input.statementId !== undefined && input.statementId !== null && { statementId: input.statementId })));
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
export var serializeAws_restJson1CreateSlotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.intentId !== undefined) {
                    labelValue = input.intentId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: intentId.");
                    }
                    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: intentId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.obfuscationSetting !== undefined &&
                    input.obfuscationSetting !== null && {
                    obfuscationSetting: serializeAws_restJson1ObfuscationSetting(input.obfuscationSetting, context),
                })), (input.slotName !== undefined && input.slotName !== null && { slotName: input.slotName })), (input.slotTypeId !== undefined && input.slotTypeId !== null && { slotTypeId: input.slotTypeId })), (input.valueElicitationSetting !== undefined &&
                    input.valueElicitationSetting !== null && {
                    valueElicitationSetting: serializeAws_restJson1SlotValueElicitationSetting(input.valueElicitationSetting, context),
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
export var serializeAws_restJson1CreateSlotTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.parentSlotTypeSignature !== undefined &&
                    input.parentSlotTypeSignature !== null && { parentSlotTypeSignature: input.parentSlotTypeSignature })), (input.slotTypeName !== undefined && input.slotTypeName !== null && { slotTypeName: input.slotTypeName })), (input.slotTypeValues !== undefined &&
                    input.slotTypeValues !== null && {
                    slotTypeValues: serializeAws_restJson1SlotTypeValues(input.slotTypeValues, context),
                })), (input.valueSelectionSetting !== undefined &&
                    input.valueSelectionSetting !== null && {
                    valueSelectionSetting: serializeAws_restJson1SlotValueSelectionSetting(input.valueSelectionSetting, context),
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
export var serializeAws_restJson1CreateUploadUrlCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createuploadurl";
                body = "";
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
export var serializeAws_restJson1DeleteBotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                query = __assign({}, (input.skipResourceInUseCheck !== undefined && {
                    skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
                }));
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
export var serializeAws_restJson1DeleteBotAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botaliases/{botAliasId}";
                if (input.botAliasId !== undefined) {
                    labelValue = input.botAliasId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAliasId.");
                    }
                    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAliasId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                query = __assign({}, (input.skipResourceInUseCheck !== undefined && {
                    skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
                }));
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
export var serializeAws_restJson1DeleteBotLocaleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
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
export var serializeAws_restJson1DeleteBotVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                query = __assign({}, (input.skipResourceInUseCheck !== undefined && {
                    skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
                }));
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
export var serializeAws_restJson1DeleteExportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/exports/{exportId}";
                if (input.exportId !== undefined) {
                    labelValue = input.exportId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: exportId.");
                    }
                    resolvedPath = resolvedPath.replace("{exportId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: exportId.");
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
export var serializeAws_restJson1DeleteImportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/imports/{importId}";
                if (input.importId !== undefined) {
                    labelValue = input.importId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: importId.");
                    }
                    resolvedPath = resolvedPath.replace("{importId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: importId.");
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
export var serializeAws_restJson1DeleteIntentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
                if (input.intentId !== undefined) {
                    labelValue = input.intentId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: intentId.");
                    }
                    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: intentId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
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
export var serializeAws_restJson1DeleteResourcePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/policy/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                query = __assign({}, (input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }));
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
export var serializeAws_restJson1DeleteResourcePolicyStatementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/policy/{resourceArn}/statements/{statementId}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                if (input.statementId !== undefined) {
                    labelValue = input.statementId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: statementId.");
                    }
                    resolvedPath = resolvedPath.replace("{statementId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: statementId.");
                }
                query = __assign({}, (input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }));
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
export var serializeAws_restJson1DeleteSlotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
                if (input.slotId !== undefined) {
                    labelValue = input.slotId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: slotId.");
                    }
                    resolvedPath = resolvedPath.replace("{slotId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: slotId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.intentId !== undefined) {
                    labelValue = input.intentId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: intentId.");
                    }
                    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: intentId.");
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
export var serializeAws_restJson1DeleteSlotTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
                if (input.slotTypeId !== undefined) {
                    labelValue = input.slotTypeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: slotTypeId.");
                    }
                    resolvedPath = resolvedPath.replace("{slotTypeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: slotTypeId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                query = __assign({}, (input.skipResourceInUseCheck !== undefined && {
                    skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
                }));
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
export var serializeAws_restJson1DescribeBotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
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
export var serializeAws_restJson1DescribeBotAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botaliases/{botAliasId}";
                if (input.botAliasId !== undefined) {
                    labelValue = input.botAliasId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAliasId.");
                    }
                    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAliasId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
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
export var serializeAws_restJson1DescribeBotLocaleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
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
export var serializeAws_restJson1DescribeBotVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
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
export var serializeAws_restJson1DescribeExportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/exports/{exportId}";
                if (input.exportId !== undefined) {
                    labelValue = input.exportId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: exportId.");
                    }
                    resolvedPath = resolvedPath.replace("{exportId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: exportId.");
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
export var serializeAws_restJson1DescribeImportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/imports/{importId}";
                if (input.importId !== undefined) {
                    labelValue = input.importId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: importId.");
                    }
                    resolvedPath = resolvedPath.replace("{importId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: importId.");
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
export var serializeAws_restJson1DescribeIntentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
                if (input.intentId !== undefined) {
                    labelValue = input.intentId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: intentId.");
                    }
                    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: intentId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
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
export var serializeAws_restJson1DescribeResourcePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/policy/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
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
export var serializeAws_restJson1DescribeSlotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
                if (input.slotId !== undefined) {
                    labelValue = input.slotId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: slotId.");
                    }
                    resolvedPath = resolvedPath.replace("{slotId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: slotId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.intentId !== undefined) {
                    labelValue = input.intentId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: intentId.");
                    }
                    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: intentId.");
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
export var serializeAws_restJson1DescribeSlotTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
                if (input.slotTypeId !== undefined) {
                    labelValue = input.slotTypeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: slotTypeId.");
                    }
                    resolvedPath = resolvedPath.replace("{slotTypeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: slotTypeId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
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
export var serializeAws_restJson1ListBotAliasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botaliases";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListBotLocalesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1BotLocaleFilters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1BotLocaleSortBy(input.sortBy, context) })));
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
export var serializeAws_restJson1ListBotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1BotFilters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1BotSortBy(input.sortBy, context) })));
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
export var serializeAws_restJson1ListBotVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1BotVersionSortBy(input.sortBy, context) })));
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
export var serializeAws_restJson1ListBuiltInIntentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/builtins/locales/{localeId}/intents";
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1BuiltInIntentSortBy(input.sortBy, context) })));
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
export var serializeAws_restJson1ListBuiltInSlotTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/builtins/locales/{localeId}/slottypes";
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1BuiltInSlotTypeSortBy(input.sortBy, context) })));
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
export var serializeAws_restJson1ListExportsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/exports";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.botId !== undefined && input.botId !== null && { botId: input.botId })), (input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion })), (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1ExportFilters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1ExportSortBy(input.sortBy, context) })));
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
export var serializeAws_restJson1ListImportsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/imports";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.botId !== undefined && input.botId !== null && { botId: input.botId })), (input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion })), (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1ImportFilters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1ImportSortBy(input.sortBy, context) })));
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
export var serializeAws_restJson1ListIntentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1IntentFilters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1IntentSortBy(input.sortBy, context) })));
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
export var serializeAws_restJson1ListSlotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.intentId !== undefined) {
                    labelValue = input.intentId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: intentId.");
                    }
                    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: intentId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1SlotFilters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1SlotSortBy(input.sortBy, context) })));
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
export var serializeAws_restJson1ListSlotTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1SlotTypeFilters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1SlotTypeSortBy(input.sortBy, context) })));
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
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{resourceARN}";
                if (input.resourceARN !== undefined) {
                    labelValue = input.resourceARN;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceARN.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceARN}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceARN.");
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
export var serializeAws_restJson1StartImportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/imports";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filePassword !== undefined && input.filePassword !== null && { filePassword: input.filePassword })), (input.importId !== undefined && input.importId !== null && { importId: input.importId })), (input.mergeStrategy !== undefined && input.mergeStrategy !== null && { mergeStrategy: input.mergeStrategy })), (input.resourceSpecification !== undefined &&
                    input.resourceSpecification !== null && {
                    resourceSpecification: serializeAws_restJson1ImportResourceSpecification(input.resourceSpecification, context),
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
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/tags/{resourceARN}";
                if (input.resourceARN !== undefined) {
                    labelValue = input.resourceARN;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceARN.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceARN}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceARN.");
                }
                body = JSON.stringify(__assign({}, (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
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
                resolvedPath = "/tags/{resourceARN}";
                if (input.resourceARN !== undefined) {
                    labelValue = input.resourceARN;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceARN.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceARN}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceARN.");
                }
                query = __assign({}, (input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map(function (_entry) { return _entry; }) }));
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
export var serializeAws_restJson1UpdateBotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.botName !== undefined && input.botName !== null && { botName: input.botName })), (input.dataPrivacy !== undefined &&
                    input.dataPrivacy !== null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.idleSessionTTLInSeconds !== undefined &&
                    input.idleSessionTTLInSeconds !== null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })));
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
export var serializeAws_restJson1UpdateBotAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botaliases/{botAliasId}";
                if (input.botAliasId !== undefined) {
                    labelValue = input.botAliasId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botAliasId.");
                    }
                    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botAliasId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.botAliasLocaleSettings !== undefined &&
                    input.botAliasLocaleSettings !== null && {
                    botAliasLocaleSettings: serializeAws_restJson1BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
                })), (input.botAliasName !== undefined && input.botAliasName !== null && { botAliasName: input.botAliasName })), (input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion })), (input.conversationLogSettings !== undefined &&
                    input.conversationLogSettings !== null && {
                    conversationLogSettings: serializeAws_restJson1ConversationLogSettings(input.conversationLogSettings, context),
                })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.sentimentAnalysisSettings !== undefined &&
                    input.sentimentAnalysisSettings !== null && {
                    sentimentAnalysisSettings: serializeAws_restJson1SentimentAnalysisSettings(input.sentimentAnalysisSettings, context),
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
export var serializeAws_restJson1UpdateBotLocaleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.nluIntentConfidenceThreshold !== undefined &&
                    input.nluIntentConfidenceThreshold !== null && {
                    nluIntentConfidenceThreshold: input.nluIntentConfidenceThreshold,
                })), (input.voiceSettings !== undefined &&
                    input.voiceSettings !== null && {
                    voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
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
export var serializeAws_restJson1UpdateExportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/exports/{exportId}";
                if (input.exportId !== undefined) {
                    labelValue = input.exportId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: exportId.");
                    }
                    resolvedPath = resolvedPath.replace("{exportId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: exportId.");
                }
                body = JSON.stringify(__assign({}, (input.filePassword !== undefined && input.filePassword !== null && { filePassword: input.filePassword })));
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
export var serializeAws_restJson1UpdateIntentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
                if (input.intentId !== undefined) {
                    labelValue = input.intentId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: intentId.");
                    }
                    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: intentId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.dialogCodeHook !== undefined &&
                    input.dialogCodeHook !== null && {
                    dialogCodeHook: serializeAws_restJson1DialogCodeHookSettings(input.dialogCodeHook, context),
                })), (input.fulfillmentCodeHook !== undefined &&
                    input.fulfillmentCodeHook !== null && {
                    fulfillmentCodeHook: serializeAws_restJson1FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
                })), (input.inputContexts !== undefined &&
                    input.inputContexts !== null && {
                    inputContexts: serializeAws_restJson1InputContextsList(input.inputContexts, context),
                })), (input.intentClosingSetting !== undefined &&
                    input.intentClosingSetting !== null && {
                    intentClosingSetting: serializeAws_restJson1IntentClosingSetting(input.intentClosingSetting, context),
                })), (input.intentConfirmationSetting !== undefined &&
                    input.intentConfirmationSetting !== null && {
                    intentConfirmationSetting: serializeAws_restJson1IntentConfirmationSetting(input.intentConfirmationSetting, context),
                })), (input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName })), (input.kendraConfiguration !== undefined &&
                    input.kendraConfiguration !== null && {
                    kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
                })), (input.outputContexts !== undefined &&
                    input.outputContexts !== null && {
                    outputContexts: serializeAws_restJson1OutputContextsList(input.outputContexts, context),
                })), (input.parentIntentSignature !== undefined &&
                    input.parentIntentSignature !== null && { parentIntentSignature: input.parentIntentSignature })), (input.sampleUtterances !== undefined &&
                    input.sampleUtterances !== null && {
                    sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
                })), (input.slotPriorities !== undefined &&
                    input.slotPriorities !== null && {
                    slotPriorities: serializeAws_restJson1SlotPrioritiesList(input.slotPriorities, context),
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
export var serializeAws_restJson1UpdateResourcePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/policy/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                query = __assign({}, (input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }));
                body = JSON.stringify(__assign({}, (input.policy !== undefined && input.policy !== null && { policy: input.policy })));
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateSlotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
                if (input.slotId !== undefined) {
                    labelValue = input.slotId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: slotId.");
                    }
                    resolvedPath = resolvedPath.replace("{slotId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: slotId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                if (input.intentId !== undefined) {
                    labelValue = input.intentId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: intentId.");
                    }
                    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: intentId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.obfuscationSetting !== undefined &&
                    input.obfuscationSetting !== null && {
                    obfuscationSetting: serializeAws_restJson1ObfuscationSetting(input.obfuscationSetting, context),
                })), (input.slotName !== undefined && input.slotName !== null && { slotName: input.slotName })), (input.slotTypeId !== undefined && input.slotTypeId !== null && { slotTypeId: input.slotTypeId })), (input.valueElicitationSetting !== undefined &&
                    input.valueElicitationSetting !== null && {
                    valueElicitationSetting: serializeAws_restJson1SlotValueElicitationSetting(input.valueElicitationSetting, context),
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
export var serializeAws_restJson1UpdateSlotTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
                if (input.slotTypeId !== undefined) {
                    labelValue = input.slotTypeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: slotTypeId.");
                    }
                    resolvedPath = resolvedPath.replace("{slotTypeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: slotTypeId.");
                }
                if (input.botId !== undefined) {
                    labelValue = input.botId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botId.");
                    }
                    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botId.");
                }
                if (input.botVersion !== undefined) {
                    labelValue = input.botVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: botVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: botVersion.");
                }
                if (input.localeId !== undefined) {
                    labelValue = input.localeId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: localeId.");
                    }
                    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: localeId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.parentSlotTypeSignature !== undefined &&
                    input.parentSlotTypeSignature !== null && { parentSlotTypeSignature: input.parentSlotTypeSignature })), (input.slotTypeName !== undefined && input.slotTypeName !== null && { slotTypeName: input.slotTypeName })), (input.slotTypeValues !== undefined &&
                    input.slotTypeValues !== null && {
                    slotTypeValues: serializeAws_restJson1SlotTypeValues(input.slotTypeValues, context),
                })), (input.valueSelectionSetting !== undefined &&
                    input.valueSelectionSetting !== null && {
                    valueSelectionSetting: serializeAws_restJson1SlotValueSelectionSetting(input.valueSelectionSetting, context),
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
export var deserializeAws_restJson1BuildBotLocaleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BuildBotLocaleCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botLocaleStatus: undefined,
                    botVersion: undefined,
                    lastBuildSubmittedDateTime: undefined,
                    localeId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
                    contents.botLocaleStatus = data.botLocaleStatus;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.lastBuildSubmittedDateTime !== undefined && data.lastBuildSubmittedDateTime !== null) {
                    contents.lastBuildSubmittedDateTime = new Date(Math.round(data.lastBuildSubmittedDateTime * 1000));
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BuildBotLocaleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateBotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateBotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botName: undefined,
                    botStatus: undefined,
                    botTags: undefined,
                    creationDateTime: undefined,
                    dataPrivacy: undefined,
                    description: undefined,
                    idleSessionTTLInSeconds: undefined,
                    roleArn: undefined,
                    testBotAliasTags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botName !== undefined && data.botName !== null) {
                    contents.botName = data.botName;
                }
                if (data.botStatus !== undefined && data.botStatus !== null) {
                    contents.botStatus = data.botStatus;
                }
                if (data.botTags !== undefined && data.botTags !== null) {
                    contents.botTags = deserializeAws_restJson1TagMap(data.botTags, context);
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
                    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
                    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
                }
                if (data.roleArn !== undefined && data.roleArn !== null) {
                    contents.roleArn = data.roleArn;
                }
                if (data.testBotAliasTags !== undefined && data.testBotAliasTags !== null) {
                    contents.testBotAliasTags = deserializeAws_restJson1TagMap(data.testBotAliasTags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateBotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateBotAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateBotAliasCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botAliasId: undefined,
                    botAliasLocaleSettings: undefined,
                    botAliasName: undefined,
                    botAliasStatus: undefined,
                    botId: undefined,
                    botVersion: undefined,
                    conversationLogSettings: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    sentimentAnalysisSettings: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botAliasId !== undefined && data.botAliasId !== null) {
                    contents.botAliasId = data.botAliasId;
                }
                if (data.botAliasLocaleSettings !== undefined && data.botAliasLocaleSettings !== null) {
                    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(data.botAliasLocaleSettings, context);
                }
                if (data.botAliasName !== undefined && data.botAliasName !== null) {
                    contents.botAliasName = data.botAliasName;
                }
                if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
                    contents.botAliasStatus = data.botAliasStatus;
                }
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.conversationLogSettings !== undefined && data.conversationLogSettings !== null) {
                    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(data.conversationLogSettings, context);
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.sentimentAnalysisSettings !== undefined && data.sentimentAnalysisSettings !== null) {
                    contents.sentimentAnalysisSettings = deserializeAws_restJson1SentimentAnalysisSettings(data.sentimentAnalysisSettings, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateBotAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateBotLocaleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateBotLocaleCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botLocaleStatus: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    localeId: undefined,
                    localeName: undefined,
                    nluIntentConfidenceThreshold: undefined,
                    voiceSettings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
                    contents.botLocaleStatus = data.botLocaleStatus;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.localeName !== undefined && data.localeName !== null) {
                    contents.localeName = data.localeName;
                }
                if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
                    contents.nluIntentConfidenceThreshold = data.nluIntentConfidenceThreshold;
                }
                if (data.voiceSettings !== undefined && data.voiceSettings !== null) {
                    contents.voiceSettings = deserializeAws_restJson1VoiceSettings(data.voiceSettings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateBotLocaleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateBotVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateBotVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botStatus: undefined,
                    botVersion: undefined,
                    botVersionLocaleSpecification: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botStatus !== undefined && data.botStatus !== null) {
                    contents.botStatus = data.botStatus;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.botVersionLocaleSpecification !== undefined && data.botVersionLocaleSpecification !== null) {
                    contents.botVersionLocaleSpecification = deserializeAws_restJson1BotVersionLocaleSpecification(data.botVersionLocaleSpecification, context);
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateBotVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateExportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateExportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    creationDateTime: undefined,
                    exportId: undefined,
                    exportStatus: undefined,
                    fileFormat: undefined,
                    resourceSpecification: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.exportId !== undefined && data.exportId !== null) {
                    contents.exportId = data.exportId;
                }
                if (data.exportStatus !== undefined && data.exportStatus !== null) {
                    contents.exportStatus = data.exportStatus;
                }
                if (data.fileFormat !== undefined && data.fileFormat !== null) {
                    contents.fileFormat = data.fileFormat;
                }
                if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
                    contents.resourceSpecification = deserializeAws_restJson1ExportResourceSpecification(data.resourceSpecification, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateExportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateIntentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateIntentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    dialogCodeHook: undefined,
                    fulfillmentCodeHook: undefined,
                    inputContexts: undefined,
                    intentClosingSetting: undefined,
                    intentConfirmationSetting: undefined,
                    intentId: undefined,
                    intentName: undefined,
                    kendraConfiguration: undefined,
                    localeId: undefined,
                    outputContexts: undefined,
                    parentIntentSignature: undefined,
                    sampleUtterances: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
                    contents.dialogCodeHook = deserializeAws_restJson1DialogCodeHookSettings(data.dialogCodeHook, context);
                }
                if (data.fulfillmentCodeHook !== undefined && data.fulfillmentCodeHook !== null) {
                    contents.fulfillmentCodeHook = deserializeAws_restJson1FulfillmentCodeHookSettings(data.fulfillmentCodeHook, context);
                }
                if (data.inputContexts !== undefined && data.inputContexts !== null) {
                    contents.inputContexts = deserializeAws_restJson1InputContextsList(data.inputContexts, context);
                }
                if (data.intentClosingSetting !== undefined && data.intentClosingSetting !== null) {
                    contents.intentClosingSetting = deserializeAws_restJson1IntentClosingSetting(data.intentClosingSetting, context);
                }
                if (data.intentConfirmationSetting !== undefined && data.intentConfirmationSetting !== null) {
                    contents.intentConfirmationSetting = deserializeAws_restJson1IntentConfirmationSetting(data.intentConfirmationSetting, context);
                }
                if (data.intentId !== undefined && data.intentId !== null) {
                    contents.intentId = data.intentId;
                }
                if (data.intentName !== undefined && data.intentName !== null) {
                    contents.intentName = data.intentName;
                }
                if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
                    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.outputContexts !== undefined && data.outputContexts !== null) {
                    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
                }
                if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
                    contents.parentIntentSignature = data.parentIntentSignature;
                }
                if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
                    contents.sampleUtterances = deserializeAws_restJson1SampleUtterancesList(data.sampleUtterances, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateIntentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateResourcePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateResourcePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    resourceArn: undefined,
                    revisionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.resourceArn !== undefined && data.resourceArn !== null) {
                    contents.resourceArn = data.resourceArn;
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateResourcePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "PreconditionFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateResourcePolicyStatementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateResourcePolicyStatementCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    resourceArn: undefined,
                    revisionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.resourceArn !== undefined && data.resourceArn !== null) {
                    contents.resourceArn = data.resourceArn;
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateResourcePolicyStatementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateSlotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateSlotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    intentId: undefined,
                    localeId: undefined,
                    obfuscationSetting: undefined,
                    slotId: undefined,
                    slotName: undefined,
                    slotTypeId: undefined,
                    valueElicitationSetting: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.intentId !== undefined && data.intentId !== null) {
                    contents.intentId = data.intentId;
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.obfuscationSetting !== undefined && data.obfuscationSetting !== null) {
                    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
                }
                if (data.slotId !== undefined && data.slotId !== null) {
                    contents.slotId = data.slotId;
                }
                if (data.slotName !== undefined && data.slotName !== null) {
                    contents.slotName = data.slotName;
                }
                if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
                    contents.slotTypeId = data.slotTypeId;
                }
                if (data.valueElicitationSetting !== undefined && data.valueElicitationSetting !== null) {
                    contents.valueElicitationSetting = deserializeAws_restJson1SlotValueElicitationSetting(data.valueElicitationSetting, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateSlotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateSlotTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateSlotTypeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    localeId: undefined,
                    parentSlotTypeSignature: undefined,
                    slotTypeId: undefined,
                    slotTypeName: undefined,
                    slotTypeValues: undefined,
                    valueSelectionSetting: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
                    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
                }
                if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
                    contents.slotTypeId = data.slotTypeId;
                }
                if (data.slotTypeName !== undefined && data.slotTypeName !== null) {
                    contents.slotTypeName = data.slotTypeName;
                }
                if (data.slotTypeValues !== undefined && data.slotTypeValues !== null) {
                    contents.slotTypeValues = deserializeAws_restJson1SlotTypeValues(data.slotTypeValues, context);
                }
                if (data.valueSelectionSetting !== undefined && data.valueSelectionSetting !== null) {
                    contents.valueSelectionSetting = deserializeAws_restJson1SlotValueSelectionSetting(data.valueSelectionSetting, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateSlotTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateUploadUrlCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateUploadUrlCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    importId: undefined,
                    uploadUrl: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.importId !== undefined && data.importId !== null) {
                    contents.importId = data.importId;
                }
                if (data.uploadUrl !== undefined && data.uploadUrl !== null) {
                    contents.uploadUrl = data.uploadUrl;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateUploadUrlCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteBotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botStatus: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botStatus !== undefined && data.botStatus !== null) {
                    contents.botStatus = data.botStatus;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteBotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBotAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteBotAliasCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botAliasId: undefined,
                    botAliasStatus: undefined,
                    botId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botAliasId !== undefined && data.botAliasId !== null) {
                    contents.botAliasId = data.botAliasId;
                }
                if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
                    contents.botAliasStatus = data.botAliasStatus;
                }
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteBotAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBotLocaleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteBotLocaleCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botLocaleStatus: undefined,
                    botVersion: undefined,
                    localeId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
                    contents.botLocaleStatus = data.botLocaleStatus;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteBotLocaleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteBotVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteBotVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botStatus: undefined,
                    botVersion: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botStatus !== undefined && data.botStatus !== null) {
                    contents.botStatus = data.botStatus;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteBotVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteExportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteExportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    exportId: undefined,
                    exportStatus: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.exportId !== undefined && data.exportId !== null) {
                    contents.exportId = data.exportId;
                }
                if (data.exportStatus !== undefined && data.exportStatus !== null) {
                    contents.exportStatus = data.exportStatus;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteExportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "PreconditionFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 4];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteImportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteImportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    importId: undefined,
                    importStatus: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.importId !== undefined && data.importId !== null) {
                    contents.importId = data.importId;
                }
                if (data.importStatus !== undefined && data.importStatus !== null) {
                    contents.importStatus = data.importStatus;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteImportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "PreconditionFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 4];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteIntentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteIntentCommandError(output, context)];
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
var deserializeAws_restJson1DeleteIntentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteResourcePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    resourceArn: undefined,
                    revisionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.resourceArn !== undefined && data.resourceArn !== null) {
                    contents.resourceArn = data.resourceArn;
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteResourcePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "PreconditionFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteResourcePolicyStatementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteResourcePolicyStatementCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    resourceArn: undefined,
                    revisionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.resourceArn !== undefined && data.resourceArn !== null) {
                    contents.resourceArn = data.resourceArn;
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteResourcePolicyStatementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "PreconditionFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteSlotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteSlotCommandError(output, context)];
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
var deserializeAws_restJson1DeleteSlotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteSlotTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteSlotTypeCommandError(output, context)];
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
var deserializeAws_restJson1DeleteSlotTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeBotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeBotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botName: undefined,
                    botStatus: undefined,
                    creationDateTime: undefined,
                    dataPrivacy: undefined,
                    description: undefined,
                    idleSessionTTLInSeconds: undefined,
                    lastUpdatedDateTime: undefined,
                    roleArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botName !== undefined && data.botName !== null) {
                    contents.botName = data.botName;
                }
                if (data.botStatus !== undefined && data.botStatus !== null) {
                    contents.botStatus = data.botStatus;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
                    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
                    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.roleArn !== undefined && data.roleArn !== null) {
                    contents.roleArn = data.roleArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeBotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeBotAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeBotAliasCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botAliasHistoryEvents: undefined,
                    botAliasId: undefined,
                    botAliasLocaleSettings: undefined,
                    botAliasName: undefined,
                    botAliasStatus: undefined,
                    botId: undefined,
                    botVersion: undefined,
                    conversationLogSettings: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    lastUpdatedDateTime: undefined,
                    sentimentAnalysisSettings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botAliasHistoryEvents !== undefined && data.botAliasHistoryEvents !== null) {
                    contents.botAliasHistoryEvents = deserializeAws_restJson1BotAliasHistoryEventsList(data.botAliasHistoryEvents, context);
                }
                if (data.botAliasId !== undefined && data.botAliasId !== null) {
                    contents.botAliasId = data.botAliasId;
                }
                if (data.botAliasLocaleSettings !== undefined && data.botAliasLocaleSettings !== null) {
                    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(data.botAliasLocaleSettings, context);
                }
                if (data.botAliasName !== undefined && data.botAliasName !== null) {
                    contents.botAliasName = data.botAliasName;
                }
                if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
                    contents.botAliasStatus = data.botAliasStatus;
                }
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.conversationLogSettings !== undefined && data.conversationLogSettings !== null) {
                    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(data.conversationLogSettings, context);
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.sentimentAnalysisSettings !== undefined && data.sentimentAnalysisSettings !== null) {
                    contents.sentimentAnalysisSettings = deserializeAws_restJson1SentimentAnalysisSettings(data.sentimentAnalysisSettings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeBotAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeBotLocaleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeBotLocaleCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botLocaleHistoryEvents: undefined,
                    botLocaleStatus: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    failureReasons: undefined,
                    intentsCount: undefined,
                    lastBuildSubmittedDateTime: undefined,
                    lastUpdatedDateTime: undefined,
                    localeId: undefined,
                    localeName: undefined,
                    nluIntentConfidenceThreshold: undefined,
                    slotTypesCount: undefined,
                    voiceSettings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botLocaleHistoryEvents !== undefined && data.botLocaleHistoryEvents !== null) {
                    contents.botLocaleHistoryEvents = deserializeAws_restJson1BotLocaleHistoryEventsList(data.botLocaleHistoryEvents, context);
                }
                if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
                    contents.botLocaleStatus = data.botLocaleStatus;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.failureReasons !== undefined && data.failureReasons !== null) {
                    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
                }
                if (data.intentsCount !== undefined && data.intentsCount !== null) {
                    contents.intentsCount = data.intentsCount;
                }
                if (data.lastBuildSubmittedDateTime !== undefined && data.lastBuildSubmittedDateTime !== null) {
                    contents.lastBuildSubmittedDateTime = new Date(Math.round(data.lastBuildSubmittedDateTime * 1000));
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.localeName !== undefined && data.localeName !== null) {
                    contents.localeName = data.localeName;
                }
                if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
                    contents.nluIntentConfidenceThreshold = data.nluIntentConfidenceThreshold;
                }
                if (data.slotTypesCount !== undefined && data.slotTypesCount !== null) {
                    contents.slotTypesCount = data.slotTypesCount;
                }
                if (data.voiceSettings !== undefined && data.voiceSettings !== null) {
                    contents.voiceSettings = deserializeAws_restJson1VoiceSettings(data.voiceSettings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeBotLocaleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeBotVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeBotVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botName: undefined,
                    botStatus: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    dataPrivacy: undefined,
                    description: undefined,
                    failureReasons: undefined,
                    idleSessionTTLInSeconds: undefined,
                    roleArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botName !== undefined && data.botName !== null) {
                    contents.botName = data.botName;
                }
                if (data.botStatus !== undefined && data.botStatus !== null) {
                    contents.botStatus = data.botStatus;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
                    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.failureReasons !== undefined && data.failureReasons !== null) {
                    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
                }
                if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
                    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
                }
                if (data.roleArn !== undefined && data.roleArn !== null) {
                    contents.roleArn = data.roleArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeBotVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeExportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeExportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    creationDateTime: undefined,
                    downloadUrl: undefined,
                    exportId: undefined,
                    exportStatus: undefined,
                    failureReasons: undefined,
                    fileFormat: undefined,
                    lastUpdatedDateTime: undefined,
                    resourceSpecification: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.downloadUrl !== undefined && data.downloadUrl !== null) {
                    contents.downloadUrl = data.downloadUrl;
                }
                if (data.exportId !== undefined && data.exportId !== null) {
                    contents.exportId = data.exportId;
                }
                if (data.exportStatus !== undefined && data.exportStatus !== null) {
                    contents.exportStatus = data.exportStatus;
                }
                if (data.failureReasons !== undefined && data.failureReasons !== null) {
                    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
                }
                if (data.fileFormat !== undefined && data.fileFormat !== null) {
                    contents.fileFormat = data.fileFormat;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
                    contents.resourceSpecification = deserializeAws_restJson1ExportResourceSpecification(data.resourceSpecification, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeExportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeImportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeImportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    creationDateTime: undefined,
                    failureReasons: undefined,
                    importId: undefined,
                    importStatus: undefined,
                    importedResourceId: undefined,
                    importedResourceName: undefined,
                    lastUpdatedDateTime: undefined,
                    mergeStrategy: undefined,
                    resourceSpecification: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.failureReasons !== undefined && data.failureReasons !== null) {
                    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
                }
                if (data.importId !== undefined && data.importId !== null) {
                    contents.importId = data.importId;
                }
                if (data.importStatus !== undefined && data.importStatus !== null) {
                    contents.importStatus = data.importStatus;
                }
                if (data.importedResourceId !== undefined && data.importedResourceId !== null) {
                    contents.importedResourceId = data.importedResourceId;
                }
                if (data.importedResourceName !== undefined && data.importedResourceName !== null) {
                    contents.importedResourceName = data.importedResourceName;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.mergeStrategy !== undefined && data.mergeStrategy !== null) {
                    contents.mergeStrategy = data.mergeStrategy;
                }
                if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
                    contents.resourceSpecification = deserializeAws_restJson1ImportResourceSpecification(data.resourceSpecification, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeImportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeIntentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeIntentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    dialogCodeHook: undefined,
                    fulfillmentCodeHook: undefined,
                    inputContexts: undefined,
                    intentClosingSetting: undefined,
                    intentConfirmationSetting: undefined,
                    intentId: undefined,
                    intentName: undefined,
                    kendraConfiguration: undefined,
                    lastUpdatedDateTime: undefined,
                    localeId: undefined,
                    outputContexts: undefined,
                    parentIntentSignature: undefined,
                    sampleUtterances: undefined,
                    slotPriorities: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
                    contents.dialogCodeHook = deserializeAws_restJson1DialogCodeHookSettings(data.dialogCodeHook, context);
                }
                if (data.fulfillmentCodeHook !== undefined && data.fulfillmentCodeHook !== null) {
                    contents.fulfillmentCodeHook = deserializeAws_restJson1FulfillmentCodeHookSettings(data.fulfillmentCodeHook, context);
                }
                if (data.inputContexts !== undefined && data.inputContexts !== null) {
                    contents.inputContexts = deserializeAws_restJson1InputContextsList(data.inputContexts, context);
                }
                if (data.intentClosingSetting !== undefined && data.intentClosingSetting !== null) {
                    contents.intentClosingSetting = deserializeAws_restJson1IntentClosingSetting(data.intentClosingSetting, context);
                }
                if (data.intentConfirmationSetting !== undefined && data.intentConfirmationSetting !== null) {
                    contents.intentConfirmationSetting = deserializeAws_restJson1IntentConfirmationSetting(data.intentConfirmationSetting, context);
                }
                if (data.intentId !== undefined && data.intentId !== null) {
                    contents.intentId = data.intentId;
                }
                if (data.intentName !== undefined && data.intentName !== null) {
                    contents.intentName = data.intentName;
                }
                if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
                    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.outputContexts !== undefined && data.outputContexts !== null) {
                    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
                }
                if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
                    contents.parentIntentSignature = data.parentIntentSignature;
                }
                if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
                    contents.sampleUtterances = deserializeAws_restJson1SampleUtterancesList(data.sampleUtterances, context);
                }
                if (data.slotPriorities !== undefined && data.slotPriorities !== null) {
                    contents.slotPriorities = deserializeAws_restJson1SlotPrioritiesList(data.slotPriorities, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeIntentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeResourcePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeResourcePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    policy: undefined,
                    resourceArn: undefined,
                    revisionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.policy !== undefined && data.policy !== null) {
                    contents.policy = data.policy;
                }
                if (data.resourceArn !== undefined && data.resourceArn !== null) {
                    contents.resourceArn = data.resourceArn;
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeResourcePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeSlotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeSlotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    intentId: undefined,
                    lastUpdatedDateTime: undefined,
                    localeId: undefined,
                    obfuscationSetting: undefined,
                    slotId: undefined,
                    slotName: undefined,
                    slotTypeId: undefined,
                    valueElicitationSetting: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.intentId !== undefined && data.intentId !== null) {
                    contents.intentId = data.intentId;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.obfuscationSetting !== undefined && data.obfuscationSetting !== null) {
                    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
                }
                if (data.slotId !== undefined && data.slotId !== null) {
                    contents.slotId = data.slotId;
                }
                if (data.slotName !== undefined && data.slotName !== null) {
                    contents.slotName = data.slotName;
                }
                if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
                    contents.slotTypeId = data.slotTypeId;
                }
                if (data.valueElicitationSetting !== undefined && data.valueElicitationSetting !== null) {
                    contents.valueElicitationSetting = deserializeAws_restJson1SlotValueElicitationSetting(data.valueElicitationSetting, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeSlotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeSlotTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeSlotTypeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    lastUpdatedDateTime: undefined,
                    localeId: undefined,
                    parentSlotTypeSignature: undefined,
                    slotTypeId: undefined,
                    slotTypeName: undefined,
                    slotTypeValues: undefined,
                    valueSelectionSetting: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
                    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
                }
                if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
                    contents.slotTypeId = data.slotTypeId;
                }
                if (data.slotTypeName !== undefined && data.slotTypeName !== null) {
                    contents.slotTypeName = data.slotTypeName;
                }
                if (data.slotTypeValues !== undefined && data.slotTypeValues !== null) {
                    contents.slotTypeValues = deserializeAws_restJson1SlotTypeValues(data.slotTypeValues, context);
                }
                if (data.valueSelectionSetting !== undefined && data.valueSelectionSetting !== null) {
                    contents.valueSelectionSetting = deserializeAws_restJson1SlotValueSelectionSetting(data.valueSelectionSetting, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeSlotTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBotAliasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListBotAliasesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botAliasSummaries: undefined,
                    botId: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botAliasSummaries !== undefined && data.botAliasSummaries !== null) {
                    contents.botAliasSummaries = deserializeAws_restJson1BotAliasSummaryList(data.botAliasSummaries, context);
                }
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListBotAliasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBotLocalesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListBotLocalesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botLocaleSummaries: undefined,
                    botVersion: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botLocaleSummaries !== undefined && data.botLocaleSummaries !== null) {
                    contents.botLocaleSummaries = deserializeAws_restJson1BotLocaleSummaryList(data.botLocaleSummaries, context);
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListBotLocalesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListBotsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botSummaries: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botSummaries !== undefined && data.botSummaries !== null) {
                    contents.botSummaries = deserializeAws_restJson1BotSummaryList(data.botSummaries, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListBotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBotVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListBotVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersionSummaries: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersionSummaries !== undefined && data.botVersionSummaries !== null) {
                    contents.botVersionSummaries = deserializeAws_restJson1BotVersionSummaryList(data.botVersionSummaries, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListBotVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBuiltInIntentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListBuiltInIntentsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    builtInIntentSummaries: undefined,
                    localeId: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.builtInIntentSummaries !== undefined && data.builtInIntentSummaries !== null) {
                    contents.builtInIntentSummaries = deserializeAws_restJson1BuiltInIntentSummaryList(data.builtInIntentSummaries, context);
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListBuiltInIntentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListBuiltInSlotTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListBuiltInSlotTypesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    builtInSlotTypeSummaries: undefined,
                    localeId: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.builtInSlotTypeSummaries !== undefined && data.builtInSlotTypeSummaries !== null) {
                    contents.builtInSlotTypeSummaries = deserializeAws_restJson1BuiltInSlotTypeSummaryList(data.builtInSlotTypeSummaries, context);
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListBuiltInSlotTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListExportsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListExportsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    exportSummaries: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.exportSummaries !== undefined && data.exportSummaries !== null) {
                    contents.exportSummaries = deserializeAws_restJson1ExportSummaryList(data.exportSummaries, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListExportsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ThrottlingException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListImportsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListImportsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    importSummaries: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.importSummaries !== undefined && data.importSummaries !== null) {
                    contents.importSummaries = deserializeAws_restJson1ImportSummaryList(data.importSummaries, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListImportsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ThrottlingException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListIntentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListIntentsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    intentSummaries: undefined,
                    localeId: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.intentSummaries !== undefined && data.intentSummaries !== null) {
                    contents.intentSummaries = deserializeAws_restJson1IntentSummaryList(data.intentSummaries, context);
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListIntentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListSlotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListSlotsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    intentId: undefined,
                    localeId: undefined,
                    nextToken: undefined,
                    slotSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.intentId !== undefined && data.intentId !== null) {
                    contents.intentId = data.intentId;
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.slotSummaries !== undefined && data.slotSummaries !== null) {
                    contents.slotSummaries = deserializeAws_restJson1SlotSummaryList(data.slotSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListSlotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListSlotTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListSlotTypesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    localeId: undefined,
                    nextToken: undefined,
                    slotTypeSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.slotTypeSummaries !== undefined && data.slotTypeSummaries !== null) {
                    contents.slotTypeSummaries = deserializeAws_restJson1SlotTypeSummaryList(data.slotTypeSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListSlotTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartImportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartImportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    creationDateTime: undefined,
                    importId: undefined,
                    importStatus: undefined,
                    mergeStrategy: undefined,
                    resourceSpecification: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.importId !== undefined && data.importId !== null) {
                    contents.importId = data.importId;
                }
                if (data.importStatus !== undefined && data.importStatus !== null) {
                    contents.importStatus = data.importStatus;
                }
                if (data.mergeStrategy !== undefined && data.mergeStrategy !== null) {
                    contents.mergeStrategy = data.mergeStrategy;
                }
                if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
                    contents.resourceSpecification = deserializeAws_restJson1ImportResourceSpecification(data.resourceSpecification, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartImportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateBotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botName: undefined,
                    botStatus: undefined,
                    creationDateTime: undefined,
                    dataPrivacy: undefined,
                    description: undefined,
                    idleSessionTTLInSeconds: undefined,
                    lastUpdatedDateTime: undefined,
                    roleArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botName !== undefined && data.botName !== null) {
                    contents.botName = data.botName;
                }
                if (data.botStatus !== undefined && data.botStatus !== null) {
                    contents.botStatus = data.botStatus;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
                    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
                    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.roleArn !== undefined && data.roleArn !== null) {
                    contents.roleArn = data.roleArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateBotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBotAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateBotAliasCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botAliasId: undefined,
                    botAliasLocaleSettings: undefined,
                    botAliasName: undefined,
                    botAliasStatus: undefined,
                    botId: undefined,
                    botVersion: undefined,
                    conversationLogSettings: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    lastUpdatedDateTime: undefined,
                    sentimentAnalysisSettings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botAliasId !== undefined && data.botAliasId !== null) {
                    contents.botAliasId = data.botAliasId;
                }
                if (data.botAliasLocaleSettings !== undefined && data.botAliasLocaleSettings !== null) {
                    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(data.botAliasLocaleSettings, context);
                }
                if (data.botAliasName !== undefined && data.botAliasName !== null) {
                    contents.botAliasName = data.botAliasName;
                }
                if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
                    contents.botAliasStatus = data.botAliasStatus;
                }
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.conversationLogSettings !== undefined && data.conversationLogSettings !== null) {
                    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(data.conversationLogSettings, context);
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.sentimentAnalysisSettings !== undefined && data.sentimentAnalysisSettings !== null) {
                    contents.sentimentAnalysisSettings = deserializeAws_restJson1SentimentAnalysisSettings(data.sentimentAnalysisSettings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateBotAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBotLocaleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateBotLocaleCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botLocaleStatus: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    failureReasons: undefined,
                    lastUpdatedDateTime: undefined,
                    localeId: undefined,
                    localeName: undefined,
                    nluIntentConfidenceThreshold: undefined,
                    voiceSettings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
                    contents.botLocaleStatus = data.botLocaleStatus;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.failureReasons !== undefined && data.failureReasons !== null) {
                    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.localeName !== undefined && data.localeName !== null) {
                    contents.localeName = data.localeName;
                }
                if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
                    contents.nluIntentConfidenceThreshold = data.nluIntentConfidenceThreshold;
                }
                if (data.voiceSettings !== undefined && data.voiceSettings !== null) {
                    contents.voiceSettings = deserializeAws_restJson1VoiceSettings(data.voiceSettings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateBotLocaleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateExportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateExportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    creationDateTime: undefined,
                    exportId: undefined,
                    exportStatus: undefined,
                    fileFormat: undefined,
                    lastUpdatedDateTime: undefined,
                    resourceSpecification: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.exportId !== undefined && data.exportId !== null) {
                    contents.exportId = data.exportId;
                }
                if (data.exportStatus !== undefined && data.exportStatus !== null) {
                    contents.exportStatus = data.exportStatus;
                }
                if (data.fileFormat !== undefined && data.fileFormat !== null) {
                    contents.fileFormat = data.fileFormat;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
                    contents.resourceSpecification = deserializeAws_restJson1ExportResourceSpecification(data.resourceSpecification, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateExportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateIntentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateIntentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    dialogCodeHook: undefined,
                    fulfillmentCodeHook: undefined,
                    inputContexts: undefined,
                    intentClosingSetting: undefined,
                    intentConfirmationSetting: undefined,
                    intentId: undefined,
                    intentName: undefined,
                    kendraConfiguration: undefined,
                    lastUpdatedDateTime: undefined,
                    localeId: undefined,
                    outputContexts: undefined,
                    parentIntentSignature: undefined,
                    sampleUtterances: undefined,
                    slotPriorities: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
                    contents.dialogCodeHook = deserializeAws_restJson1DialogCodeHookSettings(data.dialogCodeHook, context);
                }
                if (data.fulfillmentCodeHook !== undefined && data.fulfillmentCodeHook !== null) {
                    contents.fulfillmentCodeHook = deserializeAws_restJson1FulfillmentCodeHookSettings(data.fulfillmentCodeHook, context);
                }
                if (data.inputContexts !== undefined && data.inputContexts !== null) {
                    contents.inputContexts = deserializeAws_restJson1InputContextsList(data.inputContexts, context);
                }
                if (data.intentClosingSetting !== undefined && data.intentClosingSetting !== null) {
                    contents.intentClosingSetting = deserializeAws_restJson1IntentClosingSetting(data.intentClosingSetting, context);
                }
                if (data.intentConfirmationSetting !== undefined && data.intentConfirmationSetting !== null) {
                    contents.intentConfirmationSetting = deserializeAws_restJson1IntentConfirmationSetting(data.intentConfirmationSetting, context);
                }
                if (data.intentId !== undefined && data.intentId !== null) {
                    contents.intentId = data.intentId;
                }
                if (data.intentName !== undefined && data.intentName !== null) {
                    contents.intentName = data.intentName;
                }
                if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
                    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.outputContexts !== undefined && data.outputContexts !== null) {
                    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
                }
                if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
                    contents.parentIntentSignature = data.parentIntentSignature;
                }
                if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
                    contents.sampleUtterances = deserializeAws_restJson1SampleUtterancesList(data.sampleUtterances, context);
                }
                if (data.slotPriorities !== undefined && data.slotPriorities !== null) {
                    contents.slotPriorities = deserializeAws_restJson1SlotPrioritiesList(data.slotPriorities, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateIntentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateResourcePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateResourcePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    resourceArn: undefined,
                    revisionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.resourceArn !== undefined && data.resourceArn !== null) {
                    contents.resourceArn = data.resourceArn;
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateResourcePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 2];
                    case "PreconditionFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateSlotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateSlotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    intentId: undefined,
                    lastUpdatedDateTime: undefined,
                    localeId: undefined,
                    obfuscationSetting: undefined,
                    slotId: undefined,
                    slotName: undefined,
                    slotTypeId: undefined,
                    valueElicitationSetting: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.intentId !== undefined && data.intentId !== null) {
                    contents.intentId = data.intentId;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.obfuscationSetting !== undefined && data.obfuscationSetting !== null) {
                    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
                }
                if (data.slotId !== undefined && data.slotId !== null) {
                    contents.slotId = data.slotId;
                }
                if (data.slotName !== undefined && data.slotName !== null) {
                    contents.slotName = data.slotName;
                }
                if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
                    contents.slotTypeId = data.slotTypeId;
                }
                if (data.valueElicitationSetting !== undefined && data.valueElicitationSetting !== null) {
                    contents.valueElicitationSetting = deserializeAws_restJson1SlotValueElicitationSetting(data.valueElicitationSetting, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateSlotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateSlotTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateSlotTypeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    botId: undefined,
                    botVersion: undefined,
                    creationDateTime: undefined,
                    description: undefined,
                    lastUpdatedDateTime: undefined,
                    localeId: undefined,
                    parentSlotTypeSignature: undefined,
                    slotTypeId: undefined,
                    slotTypeName: undefined,
                    slotTypeValues: undefined,
                    valueSelectionSetting: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.botId !== undefined && data.botId !== null) {
                    contents.botId = data.botId;
                }
                if (data.botVersion !== undefined && data.botVersion !== null) {
                    contents.botVersion = data.botVersion;
                }
                if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
                    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
                    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
                }
                if (data.localeId !== undefined && data.localeId !== null) {
                    contents.localeId = data.localeId;
                }
                if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
                    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
                }
                if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
                    contents.slotTypeId = data.slotTypeId;
                }
                if (data.slotTypeName !== undefined && data.slotTypeName !== null) {
                    contents.slotTypeName = data.slotTypeName;
                }
                if (data.slotTypeValues !== undefined && data.slotTypeValues !== null) {
                    contents.slotTypeValues = deserializeAws_restJson1SlotTypeValues(data.slotTypeValues, context);
                }
                if (data.valueSelectionSetting !== undefined && data.valueSelectionSetting !== null) {
                    contents.valueSelectionSetting = deserializeAws_restJson1SlotValueSelectionSetting(data.valueSelectionSetting, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateSlotTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.lexmodelsv2#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.lexmodelsv2#InternalServerException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lexmodelsv2#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.lexmodelsv2#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.lexmodelsv2#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ConflictException",
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
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerException",
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
var deserializeAws_restJson1PreconditionFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "PreconditionFailedException",
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
var deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceQuotaExceededException",
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
var deserializeAws_restJson1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ThrottlingException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
            retryAfterSeconds: undefined,
        };
        if (parsedOutput.headers["retry-after"] !== undefined) {
            contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
        }
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
var serializeAws_restJson1AudioLogDestination = function (input, context) {
    return __assign({}, (input.s3Bucket !== undefined &&
        input.s3Bucket !== null && { s3Bucket: serializeAws_restJson1S3BucketLogDestination(input.s3Bucket, context) }));
};
var serializeAws_restJson1AudioLogSetting = function (input, context) {
    return __assign(__assign({}, (input.destination !== undefined &&
        input.destination !== null && {
        destination: serializeAws_restJson1AudioLogDestination(input.destination, context),
    })), (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }));
};
var serializeAws_restJson1AudioLogSettingsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AudioLogSetting(entry, context);
    });
};
var serializeAws_restJson1BotAliasLocaleSettings = function (input, context) {
    return __assign(__assign({}, (input.codeHookSpecification !== undefined &&
        input.codeHookSpecification !== null && {
        codeHookSpecification: serializeAws_restJson1CodeHookSpecification(input.codeHookSpecification, context),
    })), (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }));
};
var serializeAws_restJson1BotAliasLocaleSettingsMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1BotAliasLocaleSettings(value, context), _b));
    }, {});
};
var serializeAws_restJson1BotExportSpecification = function (input, context) {
    return __assign(__assign({}, (input.botId !== undefined && input.botId !== null && { botId: input.botId })), (input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }));
};
var serializeAws_restJson1BotFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.operator !== undefined && input.operator !== null && { operator: input.operator })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }));
};
var serializeAws_restJson1BotFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1BotFilter(entry, context);
    });
};
var serializeAws_restJson1BotImportSpecification = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.botName !== undefined && input.botName !== null && { botName: input.botName })), (input.botTags !== undefined &&
        input.botTags !== null && { botTags: serializeAws_restJson1TagMap(input.botTags, context) })), (input.dataPrivacy !== undefined &&
        input.dataPrivacy !== null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) })), (input.idleSessionTTLInSeconds !== undefined &&
        input.idleSessionTTLInSeconds !== null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.testBotAliasTags !== undefined &&
        input.testBotAliasTags !== null && {
        testBotAliasTags: serializeAws_restJson1TagMap(input.testBotAliasTags, context),
    }));
};
var serializeAws_restJson1BotLocaleExportSpecification = function (input, context) {
    return __assign(__assign(__assign({}, (input.botId !== undefined && input.botId !== null && { botId: input.botId })), (input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion })), (input.localeId !== undefined && input.localeId !== null && { localeId: input.localeId }));
};
var serializeAws_restJson1BotLocaleFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.operator !== undefined && input.operator !== null && { operator: input.operator })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }));
};
var serializeAws_restJson1BotLocaleFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1BotLocaleFilter(entry, context);
    });
};
var serializeAws_restJson1BotLocaleImportSpecification = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.botId !== undefined && input.botId !== null && { botId: input.botId })), (input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion })), (input.localeId !== undefined && input.localeId !== null && { localeId: input.localeId })), (input.nluIntentConfidenceThreshold !== undefined &&
        input.nluIntentConfidenceThreshold !== null && {
        nluIntentConfidenceThreshold: input.nluIntentConfidenceThreshold,
    })), (input.voiceSettings !== undefined &&
        input.voiceSettings !== null && {
        voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
    }));
};
var serializeAws_restJson1BotLocaleSortBy = function (input, context) {
    return __assign(__assign({}, (input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute })), (input.order !== undefined && input.order !== null && { order: input.order }));
};
var serializeAws_restJson1BotSortBy = function (input, context) {
    return __assign(__assign({}, (input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute })), (input.order !== undefined && input.order !== null && { order: input.order }));
};
var serializeAws_restJson1BotVersionLocaleDetails = function (input, context) {
    return __assign({}, (input.sourceBotVersion !== undefined &&
        input.sourceBotVersion !== null && { sourceBotVersion: input.sourceBotVersion }));
};
var serializeAws_restJson1BotVersionLocaleSpecification = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1BotVersionLocaleDetails(value, context), _b));
    }, {});
};
var serializeAws_restJson1BotVersionSortBy = function (input, context) {
    return __assign(__assign({}, (input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute })), (input.order !== undefined && input.order !== null && { order: input.order }));
};
var serializeAws_restJson1BuiltInIntentSortBy = function (input, context) {
    return __assign(__assign({}, (input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute })), (input.order !== undefined && input.order !== null && { order: input.order }));
};
var serializeAws_restJson1BuiltInSlotTypeSortBy = function (input, context) {
    return __assign(__assign({}, (input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute })), (input.order !== undefined && input.order !== null && { order: input.order }));
};
var serializeAws_restJson1Button = function (input, context) {
    return __assign(__assign({}, (input.text !== undefined && input.text !== null && { text: input.text })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1ButtonsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Button(entry, context);
    });
};
var serializeAws_restJson1CloudWatchLogGroupLogDestination = function (input, context) {
    return __assign(__assign({}, (input.cloudWatchLogGroupArn !== undefined &&
        input.cloudWatchLogGroupArn !== null && { cloudWatchLogGroupArn: input.cloudWatchLogGroupArn })), (input.logPrefix !== undefined && input.logPrefix !== null && { logPrefix: input.logPrefix }));
};
var serializeAws_restJson1CodeHookSpecification = function (input, context) {
    return __assign({}, (input.lambdaCodeHook !== undefined &&
        input.lambdaCodeHook !== null && {
        lambdaCodeHook: serializeAws_restJson1LambdaCodeHook(input.lambdaCodeHook, context),
    }));
};
var serializeAws_restJson1ConditionKeyValueMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1ConditionMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1ConditionKeyValueMap(value, context), _b));
    }, {});
};
var serializeAws_restJson1ConversationLogSettings = function (input, context) {
    return __assign(__assign({}, (input.audioLogSettings !== undefined &&
        input.audioLogSettings !== null && {
        audioLogSettings: serializeAws_restJson1AudioLogSettingsList(input.audioLogSettings, context),
    })), (input.textLogSettings !== undefined &&
        input.textLogSettings !== null && {
        textLogSettings: serializeAws_restJson1TextLogSettingsList(input.textLogSettings, context),
    }));
};
var serializeAws_restJson1CustomPayload = function (input, context) {
    return __assign({}, (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1DataPrivacy = function (input, context) {
    return __assign({}, (input.childDirected !== undefined && input.childDirected !== null && { childDirected: input.childDirected }));
};
var serializeAws_restJson1DialogCodeHookSettings = function (input, context) {
    return __assign({}, (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }));
};
var serializeAws_restJson1ExportFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.operator !== undefined && input.operator !== null && { operator: input.operator })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }));
};
var serializeAws_restJson1ExportFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ExportFilter(entry, context);
    });
};
var serializeAws_restJson1ExportResourceSpecification = function (input, context) {
    return __assign(__assign({}, (input.botExportSpecification !== undefined &&
        input.botExportSpecification !== null && {
        botExportSpecification: serializeAws_restJson1BotExportSpecification(input.botExportSpecification, context),
    })), (input.botLocaleExportSpecification !== undefined &&
        input.botLocaleExportSpecification !== null && {
        botLocaleExportSpecification: serializeAws_restJson1BotLocaleExportSpecification(input.botLocaleExportSpecification, context),
    }));
};
var serializeAws_restJson1ExportSortBy = function (input, context) {
    return __assign(__assign({}, (input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute })), (input.order !== undefined && input.order !== null && { order: input.order }));
};
var serializeAws_restJson1FilterValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1FulfillmentCodeHookSettings = function (input, context) {
    return __assign({}, (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }));
};
var serializeAws_restJson1ImageResponseCard = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.buttons !== undefined &&
        input.buttons !== null && { buttons: serializeAws_restJson1ButtonsList(input.buttons, context) })), (input.imageUrl !== undefined && input.imageUrl !== null && { imageUrl: input.imageUrl })), (input.subtitle !== undefined && input.subtitle !== null && { subtitle: input.subtitle })), (input.title !== undefined && input.title !== null && { title: input.title }));
};
var serializeAws_restJson1ImportFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.operator !== undefined && input.operator !== null && { operator: input.operator })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }));
};
var serializeAws_restJson1ImportFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ImportFilter(entry, context);
    });
};
var serializeAws_restJson1ImportResourceSpecification = function (input, context) {
    return __assign(__assign({}, (input.botImportSpecification !== undefined &&
        input.botImportSpecification !== null && {
        botImportSpecification: serializeAws_restJson1BotImportSpecification(input.botImportSpecification, context),
    })), (input.botLocaleImportSpecification !== undefined &&
        input.botLocaleImportSpecification !== null && {
        botLocaleImportSpecification: serializeAws_restJson1BotLocaleImportSpecification(input.botLocaleImportSpecification, context),
    }));
};
var serializeAws_restJson1ImportSortBy = function (input, context) {
    return __assign(__assign({}, (input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute })), (input.order !== undefined && input.order !== null && { order: input.order }));
};
var serializeAws_restJson1InputContext = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_restJson1InputContextsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputContext(entry, context);
    });
};
var serializeAws_restJson1IntentClosingSetting = function (input, context) {
    return __assign({}, (input.closingResponse !== undefined &&
        input.closingResponse !== null && {
        closingResponse: serializeAws_restJson1ResponseSpecification(input.closingResponse, context),
    }));
};
var serializeAws_restJson1IntentConfirmationSetting = function (input, context) {
    return __assign(__assign({}, (input.declinationResponse !== undefined &&
        input.declinationResponse !== null && {
        declinationResponse: serializeAws_restJson1ResponseSpecification(input.declinationResponse, context),
    })), (input.promptSpecification !== undefined &&
        input.promptSpecification !== null && {
        promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
    }));
};
var serializeAws_restJson1IntentFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.operator !== undefined && input.operator !== null && { operator: input.operator })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }));
};
var serializeAws_restJson1IntentFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1IntentFilter(entry, context);
    });
};
var serializeAws_restJson1IntentSortBy = function (input, context) {
    return __assign(__assign({}, (input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute })), (input.order !== undefined && input.order !== null && { order: input.order }));
};
var serializeAws_restJson1KendraConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.kendraIndex !== undefined && input.kendraIndex !== null && { kendraIndex: input.kendraIndex })), (input.queryFilterString !== undefined &&
        input.queryFilterString !== null && { queryFilterString: input.queryFilterString })), (input.queryFilterStringEnabled !== undefined &&
        input.queryFilterStringEnabled !== null && { queryFilterStringEnabled: input.queryFilterStringEnabled }));
};
var serializeAws_restJson1LambdaCodeHook = function (input, context) {
    return __assign(__assign({}, (input.codeHookInterfaceVersion !== undefined &&
        input.codeHookInterfaceVersion !== null && { codeHookInterfaceVersion: input.codeHookInterfaceVersion })), (input.lambdaARN !== undefined && input.lambdaARN !== null && { lambdaARN: input.lambdaARN }));
};
var serializeAws_restJson1Message = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.customPayload !== undefined &&
        input.customPayload !== null && {
        customPayload: serializeAws_restJson1CustomPayload(input.customPayload, context),
    })), (input.imageResponseCard !== undefined &&
        input.imageResponseCard !== null && {
        imageResponseCard: serializeAws_restJson1ImageResponseCard(input.imageResponseCard, context),
    })), (input.plainTextMessage !== undefined &&
        input.plainTextMessage !== null && {
        plainTextMessage: serializeAws_restJson1PlainTextMessage(input.plainTextMessage, context),
    })), (input.ssmlMessage !== undefined &&
        input.ssmlMessage !== null && { ssmlMessage: serializeAws_restJson1SSMLMessage(input.ssmlMessage, context) }));
};
var serializeAws_restJson1MessageGroup = function (input, context) {
    return __assign(__assign({}, (input.message !== undefined &&
        input.message !== null && { message: serializeAws_restJson1Message(input.message, context) })), (input.variations !== undefined &&
        input.variations !== null && {
        variations: serializeAws_restJson1MessageVariationsList(input.variations, context),
    }));
};
var serializeAws_restJson1MessageGroupsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MessageGroup(entry, context);
    });
};
var serializeAws_restJson1MessageVariationsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Message(entry, context);
    });
};
var serializeAws_restJson1ObfuscationSetting = function (input, context) {
    return __assign({}, (input.obfuscationSettingType !== undefined &&
        input.obfuscationSettingType !== null && { obfuscationSettingType: input.obfuscationSettingType }));
};
var serializeAws_restJson1OperationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1OutputContext = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.timeToLiveInSeconds !== undefined &&
        input.timeToLiveInSeconds !== null && { timeToLiveInSeconds: input.timeToLiveInSeconds })), (input.turnsToLive !== undefined && input.turnsToLive !== null && { turnsToLive: input.turnsToLive }));
};
var serializeAws_restJson1OutputContextsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1OutputContext(entry, context);
    });
};
var serializeAws_restJson1PlainTextMessage = function (input, context) {
    return __assign({}, (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1Principal = function (input, context) {
    return __assign(__assign({}, (input.arn !== undefined && input.arn !== null && { arn: input.arn })), (input.service !== undefined && input.service !== null && { service: input.service }));
};
var serializeAws_restJson1PrincipalList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Principal(entry, context);
    });
};
var serializeAws_restJson1PromptSpecification = function (input, context) {
    return __assign(__assign(__assign({}, (input.allowInterrupt !== undefined &&
        input.allowInterrupt !== null && { allowInterrupt: input.allowInterrupt })), (input.maxRetries !== undefined && input.maxRetries !== null && { maxRetries: input.maxRetries })), (input.messageGroups !== undefined &&
        input.messageGroups !== null && {
        messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }));
};
var serializeAws_restJson1ResponseSpecification = function (input, context) {
    return __assign(__assign({}, (input.allowInterrupt !== undefined &&
        input.allowInterrupt !== null && { allowInterrupt: input.allowInterrupt })), (input.messageGroups !== undefined &&
        input.messageGroups !== null && {
        messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }));
};
var serializeAws_restJson1S3BucketLogDestination = function (input, context) {
    return __assign(__assign(__assign({}, (input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn })), (input.logPrefix !== undefined && input.logPrefix !== null && { logPrefix: input.logPrefix })), (input.s3BucketArn !== undefined && input.s3BucketArn !== null && { s3BucketArn: input.s3BucketArn }));
};
var serializeAws_restJson1SampleUtterance = function (input, context) {
    return __assign({}, (input.utterance !== undefined && input.utterance !== null && { utterance: input.utterance }));
};
var serializeAws_restJson1SampleUtterancesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SampleUtterance(entry, context);
    });
};
var serializeAws_restJson1SampleValue = function (input, context) {
    return __assign({}, (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1SentimentAnalysisSettings = function (input, context) {
    return __assign({}, (input.detectSentiment !== undefined &&
        input.detectSentiment !== null && { detectSentiment: input.detectSentiment }));
};
var serializeAws_restJson1SlotDefaultValue = function (input, context) {
    return __assign({}, (input.defaultValue !== undefined && input.defaultValue !== null && { defaultValue: input.defaultValue }));
};
var serializeAws_restJson1SlotDefaultValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotDefaultValue(entry, context);
    });
};
var serializeAws_restJson1SlotDefaultValueSpecification = function (input, context) {
    return __assign({}, (input.defaultValueList !== undefined &&
        input.defaultValueList !== null && {
        defaultValueList: serializeAws_restJson1SlotDefaultValueList(input.defaultValueList, context),
    }));
};
var serializeAws_restJson1SlotFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.operator !== undefined && input.operator !== null && { operator: input.operator })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }));
};
var serializeAws_restJson1SlotFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotFilter(entry, context);
    });
};
var serializeAws_restJson1SlotPrioritiesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotPriority(entry, context);
    });
};
var serializeAws_restJson1SlotPriority = function (input, context) {
    return __assign(__assign({}, (input.priority !== undefined && input.priority !== null && { priority: input.priority })), (input.slotId !== undefined && input.slotId !== null && { slotId: input.slotId }));
};
var serializeAws_restJson1SlotSortBy = function (input, context) {
    return __assign(__assign({}, (input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute })), (input.order !== undefined && input.order !== null && { order: input.order }));
};
var serializeAws_restJson1SlotTypeFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.operator !== undefined && input.operator !== null && { operator: input.operator })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }));
};
var serializeAws_restJson1SlotTypeFilters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotTypeFilter(entry, context);
    });
};
var serializeAws_restJson1SlotTypeSortBy = function (input, context) {
    return __assign(__assign({}, (input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute })), (input.order !== undefined && input.order !== null && { order: input.order }));
};
var serializeAws_restJson1SlotTypeValue = function (input, context) {
    return __assign(__assign({}, (input.sampleValue !== undefined &&
        input.sampleValue !== null && { sampleValue: serializeAws_restJson1SampleValue(input.sampleValue, context) })), (input.synonyms !== undefined &&
        input.synonyms !== null && { synonyms: serializeAws_restJson1SynonymList(input.synonyms, context) }));
};
var serializeAws_restJson1SlotTypeValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotTypeValue(entry, context);
    });
};
var serializeAws_restJson1SlotValueElicitationSetting = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.defaultValueSpecification !== undefined &&
        input.defaultValueSpecification !== null && {
        defaultValueSpecification: serializeAws_restJson1SlotDefaultValueSpecification(input.defaultValueSpecification, context),
    })), (input.promptSpecification !== undefined &&
        input.promptSpecification !== null && {
        promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
    })), (input.sampleUtterances !== undefined &&
        input.sampleUtterances !== null && {
        sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
    })), (input.slotConstraint !== undefined &&
        input.slotConstraint !== null && { slotConstraint: input.slotConstraint })), (input.waitAndContinueSpecification !== undefined &&
        input.waitAndContinueSpecification !== null && {
        waitAndContinueSpecification: serializeAws_restJson1WaitAndContinueSpecification(input.waitAndContinueSpecification, context),
    }));
};
var serializeAws_restJson1SlotValueRegexFilter = function (input, context) {
    return __assign({}, (input.pattern !== undefined && input.pattern !== null && { pattern: input.pattern }));
};
var serializeAws_restJson1SlotValueSelectionSetting = function (input, context) {
    return __assign(__assign({}, (input.regexFilter !== undefined &&
        input.regexFilter !== null && {
        regexFilter: serializeAws_restJson1SlotValueRegexFilter(input.regexFilter, context),
    })), (input.resolutionStrategy !== undefined &&
        input.resolutionStrategy !== null && { resolutionStrategy: input.resolutionStrategy }));
};
var serializeAws_restJson1SSMLMessage = function (input, context) {
    return __assign({}, (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1StillWaitingResponseSpecification = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.allowInterrupt !== undefined &&
        input.allowInterrupt !== null && { allowInterrupt: input.allowInterrupt })), (input.frequencyInSeconds !== undefined &&
        input.frequencyInSeconds !== null && { frequencyInSeconds: input.frequencyInSeconds })), (input.messageGroups !== undefined &&
        input.messageGroups !== null && {
        messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    })), (input.timeoutInSeconds !== undefined &&
        input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }));
};
var serializeAws_restJson1SynonymList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SampleValue(entry, context);
    });
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
var serializeAws_restJson1TextLogDestination = function (input, context) {
    return __assign({}, (input.cloudWatch !== undefined &&
        input.cloudWatch !== null && {
        cloudWatch: serializeAws_restJson1CloudWatchLogGroupLogDestination(input.cloudWatch, context),
    }));
};
var serializeAws_restJson1TextLogSetting = function (input, context) {
    return __assign(__assign({}, (input.destination !== undefined &&
        input.destination !== null && {
        destination: serializeAws_restJson1TextLogDestination(input.destination, context),
    })), (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }));
};
var serializeAws_restJson1TextLogSettingsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TextLogSetting(entry, context);
    });
};
var serializeAws_restJson1VoiceSettings = function (input, context) {
    return __assign({}, (input.voiceId !== undefined && input.voiceId !== null && { voiceId: input.voiceId }));
};
var serializeAws_restJson1WaitAndContinueSpecification = function (input, context) {
    return __assign(__assign(__assign({}, (input.continueResponse !== undefined &&
        input.continueResponse !== null && {
        continueResponse: serializeAws_restJson1ResponseSpecification(input.continueResponse, context),
    })), (input.stillWaitingResponse !== undefined &&
        input.stillWaitingResponse !== null && {
        stillWaitingResponse: serializeAws_restJson1StillWaitingResponseSpecification(input.stillWaitingResponse, context),
    })), (input.waitingResponse !== undefined &&
        input.waitingResponse !== null && {
        waitingResponse: serializeAws_restJson1ResponseSpecification(input.waitingResponse, context),
    }));
};
var deserializeAws_restJson1AudioLogDestination = function (output, context) {
    return {
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null
            ? deserializeAws_restJson1S3BucketLogDestination(output.s3Bucket, context)
            : undefined,
    };
};
var deserializeAws_restJson1AudioLogSetting = function (output, context) {
    return {
        destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1AudioLogDestination(output.destination, context)
            : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
var deserializeAws_restJson1AudioLogSettingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AudioLogSetting(entry, context);
    });
};
var deserializeAws_restJson1BotAliasHistoryEvent = function (output, context) {
    return {
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
        endDate: output.endDate !== undefined && output.endDate !== null ? new Date(Math.round(output.endDate * 1000)) : undefined,
        startDate: output.startDate !== undefined && output.startDate !== null
            ? new Date(Math.round(output.startDate * 1000))
            : undefined,
    };
};
var deserializeAws_restJson1BotAliasHistoryEventsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotAliasHistoryEvent(entry, context);
    });
};
var deserializeAws_restJson1BotAliasLocaleSettings = function (output, context) {
    return {
        codeHookSpecification: output.codeHookSpecification !== undefined && output.codeHookSpecification !== null
            ? deserializeAws_restJson1CodeHookSpecification(output.codeHookSpecification, context)
            : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
var deserializeAws_restJson1BotAliasLocaleSettingsMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1BotAliasLocaleSettings(value, context), _b));
    }, {});
};
var deserializeAws_restJson1BotAliasSummary = function (output, context) {
    return {
        botAliasId: output.botAliasId !== undefined && output.botAliasId !== null ? output.botAliasId : undefined,
        botAliasName: output.botAliasName !== undefined && output.botAliasName !== null ? output.botAliasName : undefined,
        botAliasStatus: output.botAliasStatus !== undefined && output.botAliasStatus !== null ? output.botAliasStatus : undefined,
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
    };
};
var deserializeAws_restJson1BotAliasSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotAliasSummary(entry, context);
    });
};
var deserializeAws_restJson1BotExportSpecification = function (output, context) {
    return {
        botId: output.botId !== undefined && output.botId !== null ? output.botId : undefined,
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
    };
};
var deserializeAws_restJson1BotImportSpecification = function (output, context) {
    return {
        botName: output.botName !== undefined && output.botName !== null ? output.botName : undefined,
        botTags: output.botTags !== undefined && output.botTags !== null
            ? deserializeAws_restJson1TagMap(output.botTags, context)
            : undefined,
        dataPrivacy: output.dataPrivacy !== undefined && output.dataPrivacy !== null
            ? deserializeAws_restJson1DataPrivacy(output.dataPrivacy, context)
            : undefined,
        idleSessionTTLInSeconds: output.idleSessionTTLInSeconds !== undefined && output.idleSessionTTLInSeconds !== null
            ? output.idleSessionTTLInSeconds
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        testBotAliasTags: output.testBotAliasTags !== undefined && output.testBotAliasTags !== null
            ? deserializeAws_restJson1TagMap(output.testBotAliasTags, context)
            : undefined,
    };
};
var deserializeAws_restJson1BotLocaleExportSpecification = function (output, context) {
    return {
        botId: output.botId !== undefined && output.botId !== null ? output.botId : undefined,
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
        localeId: output.localeId !== undefined && output.localeId !== null ? output.localeId : undefined,
    };
};
var deserializeAws_restJson1BotLocaleHistoryEvent = function (output, context) {
    return {
        event: output.event !== undefined && output.event !== null ? output.event : undefined,
        eventDate: output.eventDate !== undefined && output.eventDate !== null
            ? new Date(Math.round(output.eventDate * 1000))
            : undefined,
    };
};
var deserializeAws_restJson1BotLocaleHistoryEventsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotLocaleHistoryEvent(entry, context);
    });
};
var deserializeAws_restJson1BotLocaleImportSpecification = function (output, context) {
    return {
        botId: output.botId !== undefined && output.botId !== null ? output.botId : undefined,
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
        localeId: output.localeId !== undefined && output.localeId !== null ? output.localeId : undefined,
        nluIntentConfidenceThreshold: output.nluIntentConfidenceThreshold !== undefined && output.nluIntentConfidenceThreshold !== null
            ? output.nluIntentConfidenceThreshold
            : undefined,
        voiceSettings: output.voiceSettings !== undefined && output.voiceSettings !== null
            ? deserializeAws_restJson1VoiceSettings(output.voiceSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1BotLocaleSummary = function (output, context) {
    return {
        botLocaleStatus: output.botLocaleStatus !== undefined && output.botLocaleStatus !== null ? output.botLocaleStatus : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastBuildSubmittedDateTime: output.lastBuildSubmittedDateTime !== undefined && output.lastBuildSubmittedDateTime !== null
            ? new Date(Math.round(output.lastBuildSubmittedDateTime * 1000))
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        localeId: output.localeId !== undefined && output.localeId !== null ? output.localeId : undefined,
        localeName: output.localeName !== undefined && output.localeName !== null ? output.localeName : undefined,
    };
};
var deserializeAws_restJson1BotLocaleSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotLocaleSummary(entry, context);
    });
};
var deserializeAws_restJson1BotSummary = function (output, context) {
    return {
        botId: output.botId !== undefined && output.botId !== null ? output.botId : undefined,
        botName: output.botName !== undefined && output.botName !== null ? output.botName : undefined,
        botStatus: output.botStatus !== undefined && output.botStatus !== null ? output.botStatus : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        latestBotVersion: output.latestBotVersion !== undefined && output.latestBotVersion !== null ? output.latestBotVersion : undefined,
    };
};
var deserializeAws_restJson1BotSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotSummary(entry, context);
    });
};
var deserializeAws_restJson1BotVersionLocaleDetails = function (output, context) {
    return {
        sourceBotVersion: output.sourceBotVersion !== undefined && output.sourceBotVersion !== null ? output.sourceBotVersion : undefined,
    };
};
var deserializeAws_restJson1BotVersionLocaleSpecification = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1BotVersionLocaleDetails(value, context), _b));
    }, {});
};
var deserializeAws_restJson1BotVersionSummary = function (output, context) {
    return {
        botName: output.botName !== undefined && output.botName !== null ? output.botName : undefined,
        botStatus: output.botStatus !== undefined && output.botStatus !== null ? output.botStatus : undefined,
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
    };
};
var deserializeAws_restJson1BotVersionSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotVersionSummary(entry, context);
    });
};
var deserializeAws_restJson1BuiltInIntentSummary = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        intentSignature: output.intentSignature !== undefined && output.intentSignature !== null ? output.intentSignature : undefined,
    };
};
var deserializeAws_restJson1BuiltInIntentSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BuiltInIntentSummary(entry, context);
    });
};
var deserializeAws_restJson1BuiltInSlotTypeSummary = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        slotTypeSignature: output.slotTypeSignature !== undefined && output.slotTypeSignature !== null
            ? output.slotTypeSignature
            : undefined,
    };
};
var deserializeAws_restJson1BuiltInSlotTypeSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BuiltInSlotTypeSummary(entry, context);
    });
};
var deserializeAws_restJson1Button = function (output, context) {
    return {
        text: output.text !== undefined && output.text !== null ? output.text : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1ButtonsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Button(entry, context);
    });
};
var deserializeAws_restJson1CloudWatchLogGroupLogDestination = function (output, context) {
    return {
        cloudWatchLogGroupArn: output.cloudWatchLogGroupArn !== undefined && output.cloudWatchLogGroupArn !== null
            ? output.cloudWatchLogGroupArn
            : undefined,
        logPrefix: output.logPrefix !== undefined && output.logPrefix !== null ? output.logPrefix : undefined,
    };
};
var deserializeAws_restJson1CodeHookSpecification = function (output, context) {
    return {
        lambdaCodeHook: output.lambdaCodeHook !== undefined && output.lambdaCodeHook !== null
            ? deserializeAws_restJson1LambdaCodeHook(output.lambdaCodeHook, context)
            : undefined,
    };
};
var deserializeAws_restJson1ConversationLogSettings = function (output, context) {
    return {
        audioLogSettings: output.audioLogSettings !== undefined && output.audioLogSettings !== null
            ? deserializeAws_restJson1AudioLogSettingsList(output.audioLogSettings, context)
            : undefined,
        textLogSettings: output.textLogSettings !== undefined && output.textLogSettings !== null
            ? deserializeAws_restJson1TextLogSettingsList(output.textLogSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1CustomPayload = function (output, context) {
    return {
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1DataPrivacy = function (output, context) {
    return {
        childDirected: output.childDirected !== undefined && output.childDirected !== null ? output.childDirected : undefined,
    };
};
var deserializeAws_restJson1DialogCodeHookSettings = function (output, context) {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
var deserializeAws_restJson1ExportResourceSpecification = function (output, context) {
    return {
        botExportSpecification: output.botExportSpecification !== undefined && output.botExportSpecification !== null
            ? deserializeAws_restJson1BotExportSpecification(output.botExportSpecification, context)
            : undefined,
        botLocaleExportSpecification: output.botLocaleExportSpecification !== undefined && output.botLocaleExportSpecification !== null
            ? deserializeAws_restJson1BotLocaleExportSpecification(output.botLocaleExportSpecification, context)
            : undefined,
    };
};
var deserializeAws_restJson1ExportSummary = function (output, context) {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
        exportStatus: output.exportStatus !== undefined && output.exportStatus !== null ? output.exportStatus : undefined,
        fileFormat: output.fileFormat !== undefined && output.fileFormat !== null ? output.fileFormat : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        resourceSpecification: output.resourceSpecification !== undefined && output.resourceSpecification !== null
            ? deserializeAws_restJson1ExportResourceSpecification(output.resourceSpecification, context)
            : undefined,
    };
};
var deserializeAws_restJson1ExportSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExportSummary(entry, context);
    });
};
var deserializeAws_restJson1FailureReasons = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1FulfillmentCodeHookSettings = function (output, context) {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
var deserializeAws_restJson1ImageResponseCard = function (output, context) {
    return {
        buttons: output.buttons !== undefined && output.buttons !== null
            ? deserializeAws_restJson1ButtonsList(output.buttons, context)
            : undefined,
        imageUrl: output.imageUrl !== undefined && output.imageUrl !== null ? output.imageUrl : undefined,
        subtitle: output.subtitle !== undefined && output.subtitle !== null ? output.subtitle : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
var deserializeAws_restJson1ImportResourceSpecification = function (output, context) {
    return {
        botImportSpecification: output.botImportSpecification !== undefined && output.botImportSpecification !== null
            ? deserializeAws_restJson1BotImportSpecification(output.botImportSpecification, context)
            : undefined,
        botLocaleImportSpecification: output.botLocaleImportSpecification !== undefined && output.botLocaleImportSpecification !== null
            ? deserializeAws_restJson1BotLocaleImportSpecification(output.botLocaleImportSpecification, context)
            : undefined,
    };
};
var deserializeAws_restJson1ImportSummary = function (output, context) {
    return {
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null
            ? new Date(Math.round(output.creationDateTime * 1000))
            : undefined,
        importId: output.importId !== undefined && output.importId !== null ? output.importId : undefined,
        importStatus: output.importStatus !== undefined && output.importStatus !== null ? output.importStatus : undefined,
        importedResourceId: output.importedResourceId !== undefined && output.importedResourceId !== null
            ? output.importedResourceId
            : undefined,
        importedResourceName: output.importedResourceName !== undefined && output.importedResourceName !== null
            ? output.importedResourceName
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        mergeStrategy: output.mergeStrategy !== undefined && output.mergeStrategy !== null ? output.mergeStrategy : undefined,
    };
};
var deserializeAws_restJson1ImportSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImportSummary(entry, context);
    });
};
var deserializeAws_restJson1InputContext = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1InputContextsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputContext(entry, context);
    });
};
var deserializeAws_restJson1IntentClosingSetting = function (output, context) {
    return {
        closingResponse: output.closingResponse !== undefined && output.closingResponse !== null
            ? deserializeAws_restJson1ResponseSpecification(output.closingResponse, context)
            : undefined,
    };
};
var deserializeAws_restJson1IntentConfirmationSetting = function (output, context) {
    return {
        declinationResponse: output.declinationResponse !== undefined && output.declinationResponse !== null
            ? deserializeAws_restJson1ResponseSpecification(output.declinationResponse, context)
            : undefined,
        promptSpecification: output.promptSpecification !== undefined && output.promptSpecification !== null
            ? deserializeAws_restJson1PromptSpecification(output.promptSpecification, context)
            : undefined,
    };
};
var deserializeAws_restJson1IntentSummary = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        inputContexts: output.inputContexts !== undefined && output.inputContexts !== null
            ? deserializeAws_restJson1InputContextsList(output.inputContexts, context)
            : undefined,
        intentId: output.intentId !== undefined && output.intentId !== null ? output.intentId : undefined,
        intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        outputContexts: output.outputContexts !== undefined && output.outputContexts !== null
            ? deserializeAws_restJson1OutputContextsList(output.outputContexts, context)
            : undefined,
        parentIntentSignature: output.parentIntentSignature !== undefined && output.parentIntentSignature !== null
            ? output.parentIntentSignature
            : undefined,
    };
};
var deserializeAws_restJson1IntentSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IntentSummary(entry, context);
    });
};
var deserializeAws_restJson1KendraConfiguration = function (output, context) {
    return {
        kendraIndex: output.kendraIndex !== undefined && output.kendraIndex !== null ? output.kendraIndex : undefined,
        queryFilterString: output.queryFilterString !== undefined && output.queryFilterString !== null
            ? output.queryFilterString
            : undefined,
        queryFilterStringEnabled: output.queryFilterStringEnabled !== undefined && output.queryFilterStringEnabled !== null
            ? output.queryFilterStringEnabled
            : undefined,
    };
};
var deserializeAws_restJson1LambdaCodeHook = function (output, context) {
    return {
        codeHookInterfaceVersion: output.codeHookInterfaceVersion !== undefined && output.codeHookInterfaceVersion !== null
            ? output.codeHookInterfaceVersion
            : undefined,
        lambdaARN: output.lambdaARN !== undefined && output.lambdaARN !== null ? output.lambdaARN : undefined,
    };
};
var deserializeAws_restJson1Message = function (output, context) {
    return {
        customPayload: output.customPayload !== undefined && output.customPayload !== null
            ? deserializeAws_restJson1CustomPayload(output.customPayload, context)
            : undefined,
        imageResponseCard: output.imageResponseCard !== undefined && output.imageResponseCard !== null
            ? deserializeAws_restJson1ImageResponseCard(output.imageResponseCard, context)
            : undefined,
        plainTextMessage: output.plainTextMessage !== undefined && output.plainTextMessage !== null
            ? deserializeAws_restJson1PlainTextMessage(output.plainTextMessage, context)
            : undefined,
        ssmlMessage: output.ssmlMessage !== undefined && output.ssmlMessage !== null
            ? deserializeAws_restJson1SSMLMessage(output.ssmlMessage, context)
            : undefined,
    };
};
var deserializeAws_restJson1MessageGroup = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null
            ? deserializeAws_restJson1Message(output.message, context)
            : undefined,
        variations: output.variations !== undefined && output.variations !== null
            ? deserializeAws_restJson1MessageVariationsList(output.variations, context)
            : undefined,
    };
};
var deserializeAws_restJson1MessageGroupsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MessageGroup(entry, context);
    });
};
var deserializeAws_restJson1MessageVariationsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Message(entry, context);
    });
};
var deserializeAws_restJson1ObfuscationSetting = function (output, context) {
    return {
        obfuscationSettingType: output.obfuscationSettingType !== undefined && output.obfuscationSettingType !== null
            ? output.obfuscationSettingType
            : undefined,
    };
};
var deserializeAws_restJson1OutputContext = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        timeToLiveInSeconds: output.timeToLiveInSeconds !== undefined && output.timeToLiveInSeconds !== null
            ? output.timeToLiveInSeconds
            : undefined,
        turnsToLive: output.turnsToLive !== undefined && output.turnsToLive !== null ? output.turnsToLive : undefined,
    };
};
var deserializeAws_restJson1OutputContextsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputContext(entry, context);
    });
};
var deserializeAws_restJson1PlainTextMessage = function (output, context) {
    return {
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1PromptSpecification = function (output, context) {
    return {
        allowInterrupt: output.allowInterrupt !== undefined && output.allowInterrupt !== null ? output.allowInterrupt : undefined,
        maxRetries: output.maxRetries !== undefined && output.maxRetries !== null ? output.maxRetries : undefined,
        messageGroups: output.messageGroups !== undefined && output.messageGroups !== null
            ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
            : undefined,
    };
};
var deserializeAws_restJson1ResponseSpecification = function (output, context) {
    return {
        allowInterrupt: output.allowInterrupt !== undefined && output.allowInterrupt !== null ? output.allowInterrupt : undefined,
        messageGroups: output.messageGroups !== undefined && output.messageGroups !== null
            ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3BucketLogDestination = function (output, context) {
    return {
        kmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
        logPrefix: output.logPrefix !== undefined && output.logPrefix !== null ? output.logPrefix : undefined,
        s3BucketArn: output.s3BucketArn !== undefined && output.s3BucketArn !== null ? output.s3BucketArn : undefined,
    };
};
var deserializeAws_restJson1SampleUtterance = function (output, context) {
    return {
        utterance: output.utterance !== undefined && output.utterance !== null ? output.utterance : undefined,
    };
};
var deserializeAws_restJson1SampleUtterancesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SampleUtterance(entry, context);
    });
};
var deserializeAws_restJson1SampleValue = function (output, context) {
    return {
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1SentimentAnalysisSettings = function (output, context) {
    return {
        detectSentiment: output.detectSentiment !== undefined && output.detectSentiment !== null ? output.detectSentiment : undefined,
    };
};
var deserializeAws_restJson1SlotDefaultValue = function (output, context) {
    return {
        defaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
    };
};
var deserializeAws_restJson1SlotDefaultValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotDefaultValue(entry, context);
    });
};
var deserializeAws_restJson1SlotDefaultValueSpecification = function (output, context) {
    return {
        defaultValueList: output.defaultValueList !== undefined && output.defaultValueList !== null
            ? deserializeAws_restJson1SlotDefaultValueList(output.defaultValueList, context)
            : undefined,
    };
};
var deserializeAws_restJson1SlotPrioritiesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotPriority(entry, context);
    });
};
var deserializeAws_restJson1SlotPriority = function (output, context) {
    return {
        priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
        slotId: output.slotId !== undefined && output.slotId !== null ? output.slotId : undefined,
    };
};
var deserializeAws_restJson1SlotSummary = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        slotConstraint: output.slotConstraint !== undefined && output.slotConstraint !== null ? output.slotConstraint : undefined,
        slotId: output.slotId !== undefined && output.slotId !== null ? output.slotId : undefined,
        slotName: output.slotName !== undefined && output.slotName !== null ? output.slotName : undefined,
        slotTypeId: output.slotTypeId !== undefined && output.slotTypeId !== null ? output.slotTypeId : undefined,
        valueElicitationPromptSpecification: output.valueElicitationPromptSpecification !== undefined && output.valueElicitationPromptSpecification !== null
            ? deserializeAws_restJson1PromptSpecification(output.valueElicitationPromptSpecification, context)
            : undefined,
    };
};
var deserializeAws_restJson1SlotSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotSummary(entry, context);
    });
};
var deserializeAws_restJson1SlotTypeSummary = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
            : undefined,
        parentSlotTypeSignature: output.parentSlotTypeSignature !== undefined && output.parentSlotTypeSignature !== null
            ? output.parentSlotTypeSignature
            : undefined,
        slotTypeId: output.slotTypeId !== undefined && output.slotTypeId !== null ? output.slotTypeId : undefined,
        slotTypeName: output.slotTypeName !== undefined && output.slotTypeName !== null ? output.slotTypeName : undefined,
    };
};
var deserializeAws_restJson1SlotTypeSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotTypeSummary(entry, context);
    });
};
var deserializeAws_restJson1SlotTypeValue = function (output, context) {
    return {
        sampleValue: output.sampleValue !== undefined && output.sampleValue !== null
            ? deserializeAws_restJson1SampleValue(output.sampleValue, context)
            : undefined,
        synonyms: output.synonyms !== undefined && output.synonyms !== null
            ? deserializeAws_restJson1SynonymList(output.synonyms, context)
            : undefined,
    };
};
var deserializeAws_restJson1SlotTypeValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotTypeValue(entry, context);
    });
};
var deserializeAws_restJson1SlotValueElicitationSetting = function (output, context) {
    return {
        defaultValueSpecification: output.defaultValueSpecification !== undefined && output.defaultValueSpecification !== null
            ? deserializeAws_restJson1SlotDefaultValueSpecification(output.defaultValueSpecification, context)
            : undefined,
        promptSpecification: output.promptSpecification !== undefined && output.promptSpecification !== null
            ? deserializeAws_restJson1PromptSpecification(output.promptSpecification, context)
            : undefined,
        sampleUtterances: output.sampleUtterances !== undefined && output.sampleUtterances !== null
            ? deserializeAws_restJson1SampleUtterancesList(output.sampleUtterances, context)
            : undefined,
        slotConstraint: output.slotConstraint !== undefined && output.slotConstraint !== null ? output.slotConstraint : undefined,
        waitAndContinueSpecification: output.waitAndContinueSpecification !== undefined && output.waitAndContinueSpecification !== null
            ? deserializeAws_restJson1WaitAndContinueSpecification(output.waitAndContinueSpecification, context)
            : undefined,
    };
};
var deserializeAws_restJson1SlotValueRegexFilter = function (output, context) {
    return {
        pattern: output.pattern !== undefined && output.pattern !== null ? output.pattern : undefined,
    };
};
var deserializeAws_restJson1SlotValueSelectionSetting = function (output, context) {
    return {
        regexFilter: output.regexFilter !== undefined && output.regexFilter !== null
            ? deserializeAws_restJson1SlotValueRegexFilter(output.regexFilter, context)
            : undefined,
        resolutionStrategy: output.resolutionStrategy !== undefined && output.resolutionStrategy !== null
            ? output.resolutionStrategy
            : undefined,
    };
};
var deserializeAws_restJson1SSMLMessage = function (output, context) {
    return {
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1StillWaitingResponseSpecification = function (output, context) {
    return {
        allowInterrupt: output.allowInterrupt !== undefined && output.allowInterrupt !== null ? output.allowInterrupt : undefined,
        frequencyInSeconds: output.frequencyInSeconds !== undefined && output.frequencyInSeconds !== null
            ? output.frequencyInSeconds
            : undefined,
        messageGroups: output.messageGroups !== undefined && output.messageGroups !== null
            ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
            : undefined,
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
var deserializeAws_restJson1SynonymList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SampleValue(entry, context);
    });
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
var deserializeAws_restJson1TextLogDestination = function (output, context) {
    return {
        cloudWatch: output.cloudWatch !== undefined && output.cloudWatch !== null
            ? deserializeAws_restJson1CloudWatchLogGroupLogDestination(output.cloudWatch, context)
            : undefined,
    };
};
var deserializeAws_restJson1TextLogSetting = function (output, context) {
    return {
        destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1TextLogDestination(output.destination, context)
            : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
var deserializeAws_restJson1TextLogSettingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TextLogSetting(entry, context);
    });
};
var deserializeAws_restJson1VoiceSettings = function (output, context) {
    return {
        voiceId: output.voiceId !== undefined && output.voiceId !== null ? output.voiceId : undefined,
    };
};
var deserializeAws_restJson1WaitAndContinueSpecification = function (output, context) {
    return {
        continueResponse: output.continueResponse !== undefined && output.continueResponse !== null
            ? deserializeAws_restJson1ResponseSpecification(output.continueResponse, context)
            : undefined,
        stillWaitingResponse: output.stillWaitingResponse !== undefined && output.stillWaitingResponse !== null
            ? deserializeAws_restJson1StillWaitingResponseSpecification(output.stillWaitingResponse, context)
            : undefined,
        waitingResponse: output.waitingResponse !== undefined && output.waitingResponse !== null
            ? deserializeAws_restJson1ResponseSpecification(output.waitingResponse, context)
            : undefined,
    };
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