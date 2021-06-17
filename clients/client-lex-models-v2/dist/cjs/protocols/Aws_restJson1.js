"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1UpdateBotAliasCommand = exports.serializeAws_restJson1UpdateBotCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StartImportCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListSlotTypesCommand = exports.serializeAws_restJson1ListSlotsCommand = exports.serializeAws_restJson1ListIntentsCommand = exports.serializeAws_restJson1ListImportsCommand = exports.serializeAws_restJson1ListExportsCommand = exports.serializeAws_restJson1ListBuiltInSlotTypesCommand = exports.serializeAws_restJson1ListBuiltInIntentsCommand = exports.serializeAws_restJson1ListBotVersionsCommand = exports.serializeAws_restJson1ListBotsCommand = exports.serializeAws_restJson1ListBotLocalesCommand = exports.serializeAws_restJson1ListBotAliasesCommand = exports.serializeAws_restJson1DescribeSlotTypeCommand = exports.serializeAws_restJson1DescribeSlotCommand = exports.serializeAws_restJson1DescribeResourcePolicyCommand = exports.serializeAws_restJson1DescribeIntentCommand = exports.serializeAws_restJson1DescribeImportCommand = exports.serializeAws_restJson1DescribeExportCommand = exports.serializeAws_restJson1DescribeBotVersionCommand = exports.serializeAws_restJson1DescribeBotLocaleCommand = exports.serializeAws_restJson1DescribeBotAliasCommand = exports.serializeAws_restJson1DescribeBotCommand = exports.serializeAws_restJson1DeleteSlotTypeCommand = exports.serializeAws_restJson1DeleteSlotCommand = exports.serializeAws_restJson1DeleteResourcePolicyStatementCommand = exports.serializeAws_restJson1DeleteResourcePolicyCommand = exports.serializeAws_restJson1DeleteIntentCommand = exports.serializeAws_restJson1DeleteImportCommand = exports.serializeAws_restJson1DeleteExportCommand = exports.serializeAws_restJson1DeleteBotVersionCommand = exports.serializeAws_restJson1DeleteBotLocaleCommand = exports.serializeAws_restJson1DeleteBotAliasCommand = exports.serializeAws_restJson1DeleteBotCommand = exports.serializeAws_restJson1CreateUploadUrlCommand = exports.serializeAws_restJson1CreateSlotTypeCommand = exports.serializeAws_restJson1CreateSlotCommand = exports.serializeAws_restJson1CreateResourcePolicyStatementCommand = exports.serializeAws_restJson1CreateResourcePolicyCommand = exports.serializeAws_restJson1CreateIntentCommand = exports.serializeAws_restJson1CreateExportCommand = exports.serializeAws_restJson1CreateBotVersionCommand = exports.serializeAws_restJson1CreateBotLocaleCommand = exports.serializeAws_restJson1CreateBotAliasCommand = exports.serializeAws_restJson1CreateBotCommand = exports.serializeAws_restJson1BuildBotLocaleCommand = void 0;
exports.deserializeAws_restJson1ListSlotTypesCommand = exports.deserializeAws_restJson1ListSlotsCommand = exports.deserializeAws_restJson1ListIntentsCommand = exports.deserializeAws_restJson1ListImportsCommand = exports.deserializeAws_restJson1ListExportsCommand = exports.deserializeAws_restJson1ListBuiltInSlotTypesCommand = exports.deserializeAws_restJson1ListBuiltInIntentsCommand = exports.deserializeAws_restJson1ListBotVersionsCommand = exports.deserializeAws_restJson1ListBotsCommand = exports.deserializeAws_restJson1ListBotLocalesCommand = exports.deserializeAws_restJson1ListBotAliasesCommand = exports.deserializeAws_restJson1DescribeSlotTypeCommand = exports.deserializeAws_restJson1DescribeSlotCommand = exports.deserializeAws_restJson1DescribeResourcePolicyCommand = exports.deserializeAws_restJson1DescribeIntentCommand = exports.deserializeAws_restJson1DescribeImportCommand = exports.deserializeAws_restJson1DescribeExportCommand = exports.deserializeAws_restJson1DescribeBotVersionCommand = exports.deserializeAws_restJson1DescribeBotLocaleCommand = exports.deserializeAws_restJson1DescribeBotAliasCommand = exports.deserializeAws_restJson1DescribeBotCommand = exports.deserializeAws_restJson1DeleteSlotTypeCommand = exports.deserializeAws_restJson1DeleteSlotCommand = exports.deserializeAws_restJson1DeleteResourcePolicyStatementCommand = exports.deserializeAws_restJson1DeleteResourcePolicyCommand = exports.deserializeAws_restJson1DeleteIntentCommand = exports.deserializeAws_restJson1DeleteImportCommand = exports.deserializeAws_restJson1DeleteExportCommand = exports.deserializeAws_restJson1DeleteBotVersionCommand = exports.deserializeAws_restJson1DeleteBotLocaleCommand = exports.deserializeAws_restJson1DeleteBotAliasCommand = exports.deserializeAws_restJson1DeleteBotCommand = exports.deserializeAws_restJson1CreateUploadUrlCommand = exports.deserializeAws_restJson1CreateSlotTypeCommand = exports.deserializeAws_restJson1CreateSlotCommand = exports.deserializeAws_restJson1CreateResourcePolicyStatementCommand = exports.deserializeAws_restJson1CreateResourcePolicyCommand = exports.deserializeAws_restJson1CreateIntentCommand = exports.deserializeAws_restJson1CreateExportCommand = exports.deserializeAws_restJson1CreateBotVersionCommand = exports.deserializeAws_restJson1CreateBotLocaleCommand = exports.deserializeAws_restJson1CreateBotAliasCommand = exports.deserializeAws_restJson1CreateBotCommand = exports.deserializeAws_restJson1BuildBotLocaleCommand = exports.serializeAws_restJson1UpdateSlotTypeCommand = exports.serializeAws_restJson1UpdateSlotCommand = exports.serializeAws_restJson1UpdateResourcePolicyCommand = exports.serializeAws_restJson1UpdateIntentCommand = exports.serializeAws_restJson1UpdateExportCommand = exports.serializeAws_restJson1UpdateBotLocaleCommand = void 0;
exports.deserializeAws_restJson1UpdateSlotTypeCommand = exports.deserializeAws_restJson1UpdateSlotCommand = exports.deserializeAws_restJson1UpdateResourcePolicyCommand = exports.deserializeAws_restJson1UpdateIntentCommand = exports.deserializeAws_restJson1UpdateExportCommand = exports.deserializeAws_restJson1UpdateBotLocaleCommand = exports.deserializeAws_restJson1UpdateBotAliasCommand = exports.deserializeAws_restJson1UpdateBotCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StartImportCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1BuildBotLocaleCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
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
exports.serializeAws_restJson1BuildBotLocaleCommand = serializeAws_restJson1BuildBotLocaleCommand;
const serializeAws_restJson1CreateBotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots";
    let body;
    body = JSON.stringify({
        ...(input.botName !== undefined && input.botName !== null && { botName: input.botName }),
        ...(input.botTags !== undefined &&
            input.botTags !== null && { botTags: serializeAws_restJson1TagMap(input.botTags, context) }),
        ...(input.dataPrivacy !== undefined &&
            input.dataPrivacy !== null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.idleSessionTTLInSeconds !== undefined &&
            input.idleSessionTTLInSeconds !== null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.testBotAliasTags !== undefined &&
            input.testBotAliasTags !== null && {
            testBotAliasTags: serializeAws_restJson1TagMap(input.testBotAliasTags, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateBotCommand = serializeAws_restJson1CreateBotCommand;
const serializeAws_restJson1CreateBotAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botaliases";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.botAliasLocaleSettings !== undefined &&
            input.botAliasLocaleSettings !== null && {
            botAliasLocaleSettings: serializeAws_restJson1BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
        }),
        ...(input.botAliasName !== undefined && input.botAliasName !== null && { botAliasName: input.botAliasName }),
        ...(input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }),
        ...(input.conversationLogSettings !== undefined &&
            input.conversationLogSettings !== null && {
            conversationLogSettings: serializeAws_restJson1ConversationLogSettings(input.conversationLogSettings, context),
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.sentimentAnalysisSettings !== undefined &&
            input.sentimentAnalysisSettings !== null && {
            sentimentAnalysisSettings: serializeAws_restJson1SentimentAnalysisSettings(input.sentimentAnalysisSettings, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateBotAliasCommand = serializeAws_restJson1CreateBotAliasCommand;
const serializeAws_restJson1CreateBotLocaleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.localeId !== undefined && input.localeId !== null && { localeId: input.localeId }),
        ...(input.nluIntentConfidenceThreshold !== undefined &&
            input.nluIntentConfidenceThreshold !== null && {
            nluIntentConfidenceThreshold: input.nluIntentConfidenceThreshold,
        }),
        ...(input.voiceSettings !== undefined &&
            input.voiceSettings !== null && {
            voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateBotLocaleCommand = serializeAws_restJson1CreateBotLocaleCommand;
const serializeAws_restJson1CreateBotVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.botVersionLocaleSpecification !== undefined &&
            input.botVersionLocaleSpecification !== null && {
            botVersionLocaleSpecification: serializeAws_restJson1BotVersionLocaleSpecification(input.botVersionLocaleSpecification, context),
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateBotVersionCommand = serializeAws_restJson1CreateBotVersionCommand;
const serializeAws_restJson1CreateExportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/exports";
    let body;
    body = JSON.stringify({
        ...(input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat }),
        ...(input.filePassword !== undefined && input.filePassword !== null && { filePassword: input.filePassword }),
        ...(input.resourceSpecification !== undefined &&
            input.resourceSpecification !== null && {
            resourceSpecification: serializeAws_restJson1ExportResourceSpecification(input.resourceSpecification, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateExportCommand = serializeAws_restJson1CreateExportCommand;
const serializeAws_restJson1CreateIntentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.dialogCodeHook !== undefined &&
            input.dialogCodeHook !== null && {
            dialogCodeHook: serializeAws_restJson1DialogCodeHookSettings(input.dialogCodeHook, context),
        }),
        ...(input.fulfillmentCodeHook !== undefined &&
            input.fulfillmentCodeHook !== null && {
            fulfillmentCodeHook: serializeAws_restJson1FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
        }),
        ...(input.inputContexts !== undefined &&
            input.inputContexts !== null && {
            inputContexts: serializeAws_restJson1InputContextsList(input.inputContexts, context),
        }),
        ...(input.intentClosingSetting !== undefined &&
            input.intentClosingSetting !== null && {
            intentClosingSetting: serializeAws_restJson1IntentClosingSetting(input.intentClosingSetting, context),
        }),
        ...(input.intentConfirmationSetting !== undefined &&
            input.intentConfirmationSetting !== null && {
            intentConfirmationSetting: serializeAws_restJson1IntentConfirmationSetting(input.intentConfirmationSetting, context),
        }),
        ...(input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName }),
        ...(input.kendraConfiguration !== undefined &&
            input.kendraConfiguration !== null && {
            kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
        }),
        ...(input.outputContexts !== undefined &&
            input.outputContexts !== null && {
            outputContexts: serializeAws_restJson1OutputContextsList(input.outputContexts, context),
        }),
        ...(input.parentIntentSignature !== undefined &&
            input.parentIntentSignature !== null && { parentIntentSignature: input.parentIntentSignature }),
        ...(input.sampleUtterances !== undefined &&
            input.sampleUtterances !== null && {
            sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateIntentCommand = serializeAws_restJson1CreateIntentCommand;
const serializeAws_restJson1CreateResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/policy/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
    });
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
exports.serializeAws_restJson1CreateResourcePolicyCommand = serializeAws_restJson1CreateResourcePolicyCommand;
const serializeAws_restJson1CreateResourcePolicyStatementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/policy/{resourceArn}/statements";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {
        ...(input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }),
    };
    let body;
    body = JSON.stringify({
        ...(input.action !== undefined &&
            input.action !== null && { action: serializeAws_restJson1OperationList(input.action, context) }),
        ...(input.condition !== undefined &&
            input.condition !== null && { condition: serializeAws_restJson1ConditionMap(input.condition, context) }),
        ...(input.effect !== undefined && input.effect !== null && { effect: input.effect }),
        ...(input.principal !== undefined &&
            input.principal !== null && { principal: serializeAws_restJson1PrincipalList(input.principal, context) }),
        ...(input.statementId !== undefined && input.statementId !== null && { statementId: input.statementId }),
    });
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
exports.serializeAws_restJson1CreateResourcePolicyStatementCommand = serializeAws_restJson1CreateResourcePolicyStatementCommand;
const serializeAws_restJson1CreateSlotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    if (input.intentId !== undefined) {
        const labelValue = input.intentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: intentId.");
        }
        resolvedPath = resolvedPath.replace("{intentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: intentId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.obfuscationSetting !== undefined &&
            input.obfuscationSetting !== null && {
            obfuscationSetting: serializeAws_restJson1ObfuscationSetting(input.obfuscationSetting, context),
        }),
        ...(input.slotName !== undefined && input.slotName !== null && { slotName: input.slotName }),
        ...(input.slotTypeId !== undefined && input.slotTypeId !== null && { slotTypeId: input.slotTypeId }),
        ...(input.valueElicitationSetting !== undefined &&
            input.valueElicitationSetting !== null && {
            valueElicitationSetting: serializeAws_restJson1SlotValueElicitationSetting(input.valueElicitationSetting, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateSlotCommand = serializeAws_restJson1CreateSlotCommand;
const serializeAws_restJson1CreateSlotTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.parentSlotTypeSignature !== undefined &&
            input.parentSlotTypeSignature !== null && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
        ...(input.slotTypeName !== undefined && input.slotTypeName !== null && { slotTypeName: input.slotTypeName }),
        ...(input.slotTypeValues !== undefined &&
            input.slotTypeValues !== null && {
            slotTypeValues: serializeAws_restJson1SlotTypeValues(input.slotTypeValues, context),
        }),
        ...(input.valueSelectionSetting !== undefined &&
            input.valueSelectionSetting !== null && {
            valueSelectionSetting: serializeAws_restJson1SlotValueSelectionSetting(input.valueSelectionSetting, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateSlotTypeCommand = serializeAws_restJson1CreateSlotTypeCommand;
const serializeAws_restJson1CreateUploadUrlCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createuploadurl";
    let body;
    body = "";
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
exports.serializeAws_restJson1CreateUploadUrlCommand = serializeAws_restJson1CreateUploadUrlCommand;
const serializeAws_restJson1DeleteBotCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    const query = {
        ...(input.skipResourceInUseCheck !== undefined && {
            skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
        }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteBotCommand = serializeAws_restJson1DeleteBotCommand;
const serializeAws_restJson1DeleteBotAliasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botaliases/{botAliasId}";
    if (input.botAliasId !== undefined) {
        const labelValue = input.botAliasId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botAliasId.");
        }
        resolvedPath = resolvedPath.replace("{botAliasId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botAliasId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    const query = {
        ...(input.skipResourceInUseCheck !== undefined && {
            skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
        }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteBotAliasCommand = serializeAws_restJson1DeleteBotAliasCommand;
const serializeAws_restJson1DeleteBotLocaleCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteBotLocaleCommand = serializeAws_restJson1DeleteBotLocaleCommand;
const serializeAws_restJson1DeleteBotVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    const query = {
        ...(input.skipResourceInUseCheck !== undefined && {
            skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
        }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteBotVersionCommand = serializeAws_restJson1DeleteBotVersionCommand;
const serializeAws_restJson1DeleteExportCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/exports/{exportId}";
    if (input.exportId !== undefined) {
        const labelValue = input.exportId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: exportId.");
        }
        resolvedPath = resolvedPath.replace("{exportId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: exportId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteExportCommand = serializeAws_restJson1DeleteExportCommand;
const serializeAws_restJson1DeleteImportCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/imports/{importId}";
    if (input.importId !== undefined) {
        const labelValue = input.importId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: importId.");
        }
        resolvedPath = resolvedPath.replace("{importId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: importId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteImportCommand = serializeAws_restJson1DeleteImportCommand;
const serializeAws_restJson1DeleteIntentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
    if (input.intentId !== undefined) {
        const labelValue = input.intentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: intentId.");
        }
        resolvedPath = resolvedPath.replace("{intentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: intentId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteIntentCommand = serializeAws_restJson1DeleteIntentCommand;
const serializeAws_restJson1DeleteResourcePolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/policy/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {
        ...(input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteResourcePolicyCommand = serializeAws_restJson1DeleteResourcePolicyCommand;
const serializeAws_restJson1DeleteResourcePolicyStatementCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/policy/{resourceArn}/statements/{statementId}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    if (input.statementId !== undefined) {
        const labelValue = input.statementId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: statementId.");
        }
        resolvedPath = resolvedPath.replace("{statementId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: statementId.");
    }
    const query = {
        ...(input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteResourcePolicyStatementCommand = serializeAws_restJson1DeleteResourcePolicyStatementCommand;
const serializeAws_restJson1DeleteSlotCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
    if (input.slotId !== undefined) {
        const labelValue = input.slotId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: slotId.");
        }
        resolvedPath = resolvedPath.replace("{slotId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: slotId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    if (input.intentId !== undefined) {
        const labelValue = input.intentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: intentId.");
        }
        resolvedPath = resolvedPath.replace("{intentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: intentId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteSlotCommand = serializeAws_restJson1DeleteSlotCommand;
const serializeAws_restJson1DeleteSlotTypeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
    if (input.slotTypeId !== undefined) {
        const labelValue = input.slotTypeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: slotTypeId.");
        }
        resolvedPath = resolvedPath.replace("{slotTypeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: slotTypeId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    const query = {
        ...(input.skipResourceInUseCheck !== undefined && {
            skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
        }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteSlotTypeCommand = serializeAws_restJson1DeleteSlotTypeCommand;
const serializeAws_restJson1DescribeBotCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeBotCommand = serializeAws_restJson1DescribeBotCommand;
const serializeAws_restJson1DescribeBotAliasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botaliases/{botAliasId}";
    if (input.botAliasId !== undefined) {
        const labelValue = input.botAliasId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botAliasId.");
        }
        resolvedPath = resolvedPath.replace("{botAliasId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botAliasId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeBotAliasCommand = serializeAws_restJson1DescribeBotAliasCommand;
const serializeAws_restJson1DescribeBotLocaleCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeBotLocaleCommand = serializeAws_restJson1DescribeBotLocaleCommand;
const serializeAws_restJson1DescribeBotVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeBotVersionCommand = serializeAws_restJson1DescribeBotVersionCommand;
const serializeAws_restJson1DescribeExportCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/exports/{exportId}";
    if (input.exportId !== undefined) {
        const labelValue = input.exportId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: exportId.");
        }
        resolvedPath = resolvedPath.replace("{exportId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: exportId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeExportCommand = serializeAws_restJson1DescribeExportCommand;
const serializeAws_restJson1DescribeImportCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/imports/{importId}";
    if (input.importId !== undefined) {
        const labelValue = input.importId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: importId.");
        }
        resolvedPath = resolvedPath.replace("{importId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: importId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeImportCommand = serializeAws_restJson1DescribeImportCommand;
const serializeAws_restJson1DescribeIntentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
    if (input.intentId !== undefined) {
        const labelValue = input.intentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: intentId.");
        }
        resolvedPath = resolvedPath.replace("{intentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: intentId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeIntentCommand = serializeAws_restJson1DescribeIntentCommand;
const serializeAws_restJson1DescribeResourcePolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/policy/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeResourcePolicyCommand = serializeAws_restJson1DescribeResourcePolicyCommand;
const serializeAws_restJson1DescribeSlotCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
    if (input.slotId !== undefined) {
        const labelValue = input.slotId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: slotId.");
        }
        resolvedPath = resolvedPath.replace("{slotId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: slotId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    if (input.intentId !== undefined) {
        const labelValue = input.intentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: intentId.");
        }
        resolvedPath = resolvedPath.replace("{intentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: intentId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeSlotCommand = serializeAws_restJson1DescribeSlotCommand;
const serializeAws_restJson1DescribeSlotTypeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
    if (input.slotTypeId !== undefined) {
        const labelValue = input.slotTypeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: slotTypeId.");
        }
        resolvedPath = resolvedPath.replace("{slotTypeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: slotTypeId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeSlotTypeCommand = serializeAws_restJson1DescribeSlotTypeCommand;
const serializeAws_restJson1ListBotAliasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botaliases";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    });
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
exports.serializeAws_restJson1ListBotAliasesCommand = serializeAws_restJson1ListBotAliasesCommand;
const serializeAws_restJson1ListBotLocalesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1BotLocaleFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1BotLocaleSortBy(input.sortBy, context) }),
    });
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
exports.serializeAws_restJson1ListBotLocalesCommand = serializeAws_restJson1ListBotLocalesCommand;
const serializeAws_restJson1ListBotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1BotFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1BotSortBy(input.sortBy, context) }),
    });
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
exports.serializeAws_restJson1ListBotsCommand = serializeAws_restJson1ListBotsCommand;
const serializeAws_restJson1ListBotVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1BotVersionSortBy(input.sortBy, context) }),
    });
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
exports.serializeAws_restJson1ListBotVersionsCommand = serializeAws_restJson1ListBotVersionsCommand;
const serializeAws_restJson1ListBuiltInIntentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/builtins/locales/{localeId}/intents";
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1BuiltInIntentSortBy(input.sortBy, context) }),
    });
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
exports.serializeAws_restJson1ListBuiltInIntentsCommand = serializeAws_restJson1ListBuiltInIntentsCommand;
const serializeAws_restJson1ListBuiltInSlotTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/builtins/locales/{localeId}/slottypes";
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1BuiltInSlotTypeSortBy(input.sortBy, context) }),
    });
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
exports.serializeAws_restJson1ListBuiltInSlotTypesCommand = serializeAws_restJson1ListBuiltInSlotTypesCommand;
const serializeAws_restJson1ListExportsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/exports";
    let body;
    body = JSON.stringify({
        ...(input.botId !== undefined && input.botId !== null && { botId: input.botId }),
        ...(input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1ExportFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1ExportSortBy(input.sortBy, context) }),
    });
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
exports.serializeAws_restJson1ListExportsCommand = serializeAws_restJson1ListExportsCommand;
const serializeAws_restJson1ListImportsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/imports";
    let body;
    body = JSON.stringify({
        ...(input.botId !== undefined && input.botId !== null && { botId: input.botId }),
        ...(input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1ImportFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1ImportSortBy(input.sortBy, context) }),
    });
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
exports.serializeAws_restJson1ListImportsCommand = serializeAws_restJson1ListImportsCommand;
const serializeAws_restJson1ListIntentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1IntentFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1IntentSortBy(input.sortBy, context) }),
    });
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
exports.serializeAws_restJson1ListIntentsCommand = serializeAws_restJson1ListIntentsCommand;
const serializeAws_restJson1ListSlotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    if (input.intentId !== undefined) {
        const labelValue = input.intentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: intentId.");
        }
        resolvedPath = resolvedPath.replace("{intentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: intentId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1SlotFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1SlotSortBy(input.sortBy, context) }),
    });
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
exports.serializeAws_restJson1ListSlotsCommand = serializeAws_restJson1ListSlotsCommand;
const serializeAws_restJson1ListSlotTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1SlotTypeFilters(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined &&
            input.sortBy !== null && { sortBy: serializeAws_restJson1SlotTypeSortBy(input.sortBy, context) }),
    });
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
exports.serializeAws_restJson1ListSlotTypesCommand = serializeAws_restJson1ListSlotTypesCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceARN}";
    if (input.resourceARN !== undefined) {
        const labelValue = input.resourceARN;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceARN.");
        }
        resolvedPath = resolvedPath.replace("{resourceARN}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceARN.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1StartImportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/imports";
    let body;
    body = JSON.stringify({
        ...(input.filePassword !== undefined && input.filePassword !== null && { filePassword: input.filePassword }),
        ...(input.importId !== undefined && input.importId !== null && { importId: input.importId }),
        ...(input.mergeStrategy !== undefined && input.mergeStrategy !== null && { mergeStrategy: input.mergeStrategy }),
        ...(input.resourceSpecification !== undefined &&
            input.resourceSpecification !== null && {
            resourceSpecification: serializeAws_restJson1ImportResourceSpecification(input.resourceSpecification, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1StartImportCommand = serializeAws_restJson1StartImportCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{resourceARN}";
    if (input.resourceARN !== undefined) {
        const labelValue = input.resourceARN;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceARN.");
        }
        resolvedPath = resolvedPath.replace("{resourceARN}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceARN.");
    }
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
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
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceARN}";
    if (input.resourceARN !== undefined) {
        const labelValue = input.resourceARN;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceARN.");
        }
        resolvedPath = resolvedPath.replace("{resourceARN}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceARN.");
    }
    const query = {
        ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateBotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.botName !== undefined && input.botName !== null && { botName: input.botName }),
        ...(input.dataPrivacy !== undefined &&
            input.dataPrivacy !== null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.idleSessionTTLInSeconds !== undefined &&
            input.idleSessionTTLInSeconds !== null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateBotCommand = serializeAws_restJson1UpdateBotCommand;
const serializeAws_restJson1UpdateBotAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botaliases/{botAliasId}";
    if (input.botAliasId !== undefined) {
        const labelValue = input.botAliasId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botAliasId.");
        }
        resolvedPath = resolvedPath.replace("{botAliasId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botAliasId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.botAliasLocaleSettings !== undefined &&
            input.botAliasLocaleSettings !== null && {
            botAliasLocaleSettings: serializeAws_restJson1BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
        }),
        ...(input.botAliasName !== undefined && input.botAliasName !== null && { botAliasName: input.botAliasName }),
        ...(input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }),
        ...(input.conversationLogSettings !== undefined &&
            input.conversationLogSettings !== null && {
            conversationLogSettings: serializeAws_restJson1ConversationLogSettings(input.conversationLogSettings, context),
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.sentimentAnalysisSettings !== undefined &&
            input.sentimentAnalysisSettings !== null && {
            sentimentAnalysisSettings: serializeAws_restJson1SentimentAnalysisSettings(input.sentimentAnalysisSettings, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateBotAliasCommand = serializeAws_restJson1UpdateBotAliasCommand;
const serializeAws_restJson1UpdateBotLocaleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.nluIntentConfidenceThreshold !== undefined &&
            input.nluIntentConfidenceThreshold !== null && {
            nluIntentConfidenceThreshold: input.nluIntentConfidenceThreshold,
        }),
        ...(input.voiceSettings !== undefined &&
            input.voiceSettings !== null && {
            voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateBotLocaleCommand = serializeAws_restJson1UpdateBotLocaleCommand;
const serializeAws_restJson1UpdateExportCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/exports/{exportId}";
    if (input.exportId !== undefined) {
        const labelValue = input.exportId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: exportId.");
        }
        resolvedPath = resolvedPath.replace("{exportId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: exportId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.filePassword !== undefined && input.filePassword !== null && { filePassword: input.filePassword }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateExportCommand = serializeAws_restJson1UpdateExportCommand;
const serializeAws_restJson1UpdateIntentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
    if (input.intentId !== undefined) {
        const labelValue = input.intentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: intentId.");
        }
        resolvedPath = resolvedPath.replace("{intentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: intentId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.dialogCodeHook !== undefined &&
            input.dialogCodeHook !== null && {
            dialogCodeHook: serializeAws_restJson1DialogCodeHookSettings(input.dialogCodeHook, context),
        }),
        ...(input.fulfillmentCodeHook !== undefined &&
            input.fulfillmentCodeHook !== null && {
            fulfillmentCodeHook: serializeAws_restJson1FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
        }),
        ...(input.inputContexts !== undefined &&
            input.inputContexts !== null && {
            inputContexts: serializeAws_restJson1InputContextsList(input.inputContexts, context),
        }),
        ...(input.intentClosingSetting !== undefined &&
            input.intentClosingSetting !== null && {
            intentClosingSetting: serializeAws_restJson1IntentClosingSetting(input.intentClosingSetting, context),
        }),
        ...(input.intentConfirmationSetting !== undefined &&
            input.intentConfirmationSetting !== null && {
            intentConfirmationSetting: serializeAws_restJson1IntentConfirmationSetting(input.intentConfirmationSetting, context),
        }),
        ...(input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName }),
        ...(input.kendraConfiguration !== undefined &&
            input.kendraConfiguration !== null && {
            kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
        }),
        ...(input.outputContexts !== undefined &&
            input.outputContexts !== null && {
            outputContexts: serializeAws_restJson1OutputContextsList(input.outputContexts, context),
        }),
        ...(input.parentIntentSignature !== undefined &&
            input.parentIntentSignature !== null && { parentIntentSignature: input.parentIntentSignature }),
        ...(input.sampleUtterances !== undefined &&
            input.sampleUtterances !== null && {
            sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
        }),
        ...(input.slotPriorities !== undefined &&
            input.slotPriorities !== null && {
            slotPriorities: serializeAws_restJson1SlotPrioritiesList(input.slotPriorities, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateIntentCommand = serializeAws_restJson1UpdateIntentCommand;
const serializeAws_restJson1UpdateResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/policy/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {
        ...(input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }),
    };
    let body;
    body = JSON.stringify({
        ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdateResourcePolicyCommand = serializeAws_restJson1UpdateResourcePolicyCommand;
const serializeAws_restJson1UpdateSlotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
    if (input.slotId !== undefined) {
        const labelValue = input.slotId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: slotId.");
        }
        resolvedPath = resolvedPath.replace("{slotId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: slotId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    if (input.intentId !== undefined) {
        const labelValue = input.intentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: intentId.");
        }
        resolvedPath = resolvedPath.replace("{intentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: intentId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.obfuscationSetting !== undefined &&
            input.obfuscationSetting !== null && {
            obfuscationSetting: serializeAws_restJson1ObfuscationSetting(input.obfuscationSetting, context),
        }),
        ...(input.slotName !== undefined && input.slotName !== null && { slotName: input.slotName }),
        ...(input.slotTypeId !== undefined && input.slotTypeId !== null && { slotTypeId: input.slotTypeId }),
        ...(input.valueElicitationSetting !== undefined &&
            input.valueElicitationSetting !== null && {
            valueElicitationSetting: serializeAws_restJson1SlotValueElicitationSetting(input.valueElicitationSetting, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateSlotCommand = serializeAws_restJson1UpdateSlotCommand;
const serializeAws_restJson1UpdateSlotTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
    if (input.slotTypeId !== undefined) {
        const labelValue = input.slotTypeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: slotTypeId.");
        }
        resolvedPath = resolvedPath.replace("{slotTypeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: slotTypeId.");
    }
    if (input.botId !== undefined) {
        const labelValue = input.botId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botId.");
        }
        resolvedPath = resolvedPath.replace("{botId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botId.");
    }
    if (input.botVersion !== undefined) {
        const labelValue = input.botVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: botVersion.");
        }
        resolvedPath = resolvedPath.replace("{botVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: botVersion.");
    }
    if (input.localeId !== undefined) {
        const labelValue = input.localeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: localeId.");
        }
        resolvedPath = resolvedPath.replace("{localeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: localeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.parentSlotTypeSignature !== undefined &&
            input.parentSlotTypeSignature !== null && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
        ...(input.slotTypeName !== undefined && input.slotTypeName !== null && { slotTypeName: input.slotTypeName }),
        ...(input.slotTypeValues !== undefined &&
            input.slotTypeValues !== null && {
            slotTypeValues: serializeAws_restJson1SlotTypeValues(input.slotTypeValues, context),
        }),
        ...(input.valueSelectionSetting !== undefined &&
            input.valueSelectionSetting !== null && {
            valueSelectionSetting: serializeAws_restJson1SlotValueSelectionSetting(input.valueSelectionSetting, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateSlotTypeCommand = serializeAws_restJson1UpdateSlotTypeCommand;
const deserializeAws_restJson1BuildBotLocaleCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1BuildBotLocaleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botLocaleStatus: undefined,
        botVersion: undefined,
        lastBuildSubmittedDateTime: undefined,
        localeId: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BuildBotLocaleCommand = deserializeAws_restJson1BuildBotLocaleCommand;
const deserializeAws_restJson1BuildBotLocaleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateBotCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateBotCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBotCommand = deserializeAws_restJson1CreateBotCommand;
const deserializeAws_restJson1CreateBotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateBotAliasCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateBotAliasCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBotAliasCommand = deserializeAws_restJson1CreateBotAliasCommand;
const deserializeAws_restJson1CreateBotAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateBotLocaleCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateBotLocaleCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBotLocaleCommand = deserializeAws_restJson1CreateBotLocaleCommand;
const deserializeAws_restJson1CreateBotLocaleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateBotVersionCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateBotVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botStatus: undefined,
        botVersion: undefined,
        botVersionLocaleSpecification: undefined,
        creationDateTime: undefined,
        description: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBotVersionCommand = deserializeAws_restJson1CreateBotVersionCommand;
const deserializeAws_restJson1CreateBotVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateExportCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateExportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        creationDateTime: undefined,
        exportId: undefined,
        exportStatus: undefined,
        fileFormat: undefined,
        resourceSpecification: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateExportCommand = deserializeAws_restJson1CreateExportCommand;
const deserializeAws_restJson1CreateExportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateIntentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateIntentCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateIntentCommand = deserializeAws_restJson1CreateIntentCommand;
const deserializeAws_restJson1CreateIntentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateResourcePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateResourcePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        resourceArn: undefined,
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateResourcePolicyCommand = deserializeAws_restJson1CreateResourcePolicyCommand;
const deserializeAws_restJson1CreateResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateResourcePolicyStatementCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateResourcePolicyStatementCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        resourceArn: undefined,
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateResourcePolicyStatementCommand = deserializeAws_restJson1CreateResourcePolicyStatementCommand;
const deserializeAws_restJson1CreateResourcePolicyStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSlotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSlotCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSlotCommand = deserializeAws_restJson1CreateSlotCommand;
const deserializeAws_restJson1CreateSlotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSlotTypeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSlotTypeCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSlotTypeCommand = deserializeAws_restJson1CreateSlotTypeCommand;
const deserializeAws_restJson1CreateSlotTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateUploadUrlCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateUploadUrlCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        importId: undefined,
        uploadUrl: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.importId !== undefined && data.importId !== null) {
        contents.importId = data.importId;
    }
    if (data.uploadUrl !== undefined && data.uploadUrl !== null) {
        contents.uploadUrl = data.uploadUrl;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateUploadUrlCommand = deserializeAws_restJson1CreateUploadUrlCommand;
const deserializeAws_restJson1CreateUploadUrlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteBotCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteBotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.botId !== undefined && data.botId !== null) {
        contents.botId = data.botId;
    }
    if (data.botStatus !== undefined && data.botStatus !== null) {
        contents.botStatus = data.botStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBotCommand = deserializeAws_restJson1DeleteBotCommand;
const deserializeAws_restJson1DeleteBotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteBotAliasCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteBotAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botAliasId: undefined,
        botAliasStatus: undefined,
        botId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.botAliasId !== undefined && data.botAliasId !== null) {
        contents.botAliasId = data.botAliasId;
    }
    if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
        contents.botAliasStatus = data.botAliasStatus;
    }
    if (data.botId !== undefined && data.botId !== null) {
        contents.botId = data.botId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBotAliasCommand = deserializeAws_restJson1DeleteBotAliasCommand;
const deserializeAws_restJson1DeleteBotAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteBotLocaleCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteBotLocaleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botLocaleStatus: undefined,
        botVersion: undefined,
        localeId: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBotLocaleCommand = deserializeAws_restJson1DeleteBotLocaleCommand;
const deserializeAws_restJson1DeleteBotLocaleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteBotVersionCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteBotVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botStatus: undefined,
        botVersion: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.botId !== undefined && data.botId !== null) {
        contents.botId = data.botId;
    }
    if (data.botStatus !== undefined && data.botStatus !== null) {
        contents.botStatus = data.botStatus;
    }
    if (data.botVersion !== undefined && data.botVersion !== null) {
        contents.botVersion = data.botVersion;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBotVersionCommand = deserializeAws_restJson1DeleteBotVersionCommand;
const deserializeAws_restJson1DeleteBotVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteExportCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteExportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        exportId: undefined,
        exportStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.exportId !== undefined && data.exportId !== null) {
        contents.exportId = data.exportId;
    }
    if (data.exportStatus !== undefined && data.exportStatus !== null) {
        contents.exportStatus = data.exportStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteExportCommand = deserializeAws_restJson1DeleteExportCommand;
const deserializeAws_restJson1DeleteExportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteImportCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteImportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        importId: undefined,
        importStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.importId !== undefined && data.importId !== null) {
        contents.importId = data.importId;
    }
    if (data.importStatus !== undefined && data.importStatus !== null) {
        contents.importStatus = data.importStatus;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteImportCommand = deserializeAws_restJson1DeleteImportCommand;
const deserializeAws_restJson1DeleteImportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteIntentCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteIntentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteIntentCommand = deserializeAws_restJson1DeleteIntentCommand;
const deserializeAws_restJson1DeleteIntentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteResourcePolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        resourceArn: undefined,
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteResourcePolicyCommand = deserializeAws_restJson1DeleteResourcePolicyCommand;
const deserializeAws_restJson1DeleteResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteResourcePolicyStatementCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteResourcePolicyStatementCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        resourceArn: undefined,
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteResourcePolicyStatementCommand = deserializeAws_restJson1DeleteResourcePolicyStatementCommand;
const deserializeAws_restJson1DeleteResourcePolicyStatementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteSlotCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSlotCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSlotCommand = deserializeAws_restJson1DeleteSlotCommand;
const deserializeAws_restJson1DeleteSlotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteSlotTypeCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSlotTypeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSlotTypeCommand = deserializeAws_restJson1DeleteSlotTypeCommand;
const deserializeAws_restJson1DeleteSlotTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeBotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeBotCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBotCommand = deserializeAws_restJson1DescribeBotCommand;
const deserializeAws_restJson1DescribeBotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeBotAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeBotAliasCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBotAliasCommand = deserializeAws_restJson1DescribeBotAliasCommand;
const deserializeAws_restJson1DescribeBotAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeBotLocaleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeBotLocaleCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBotLocaleCommand = deserializeAws_restJson1DescribeBotLocaleCommand;
const deserializeAws_restJson1DescribeBotLocaleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeBotVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeBotVersionCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBotVersionCommand = deserializeAws_restJson1DescribeBotVersionCommand;
const deserializeAws_restJson1DescribeBotVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeExportCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeExportCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeExportCommand = deserializeAws_restJson1DescribeExportCommand;
const deserializeAws_restJson1DescribeExportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeImportCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeImportCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeImportCommand = deserializeAws_restJson1DescribeImportCommand;
const deserializeAws_restJson1DescribeImportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeIntentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeIntentCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeIntentCommand = deserializeAws_restJson1DescribeIntentCommand;
const deserializeAws_restJson1DescribeIntentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeResourcePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeResourcePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
        resourceArn: undefined,
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = data.policy;
    }
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeResourcePolicyCommand = deserializeAws_restJson1DescribeResourcePolicyCommand;
const deserializeAws_restJson1DescribeResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSlotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSlotCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSlotCommand = deserializeAws_restJson1DescribeSlotCommand;
const deserializeAws_restJson1DescribeSlotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSlotTypeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSlotTypeCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSlotTypeCommand = deserializeAws_restJson1DescribeSlotTypeCommand;
const deserializeAws_restJson1DescribeSlotTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListBotAliasesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListBotAliasesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botAliasSummaries: undefined,
        botId: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.botAliasSummaries !== undefined && data.botAliasSummaries !== null) {
        contents.botAliasSummaries = deserializeAws_restJson1BotAliasSummaryList(data.botAliasSummaries, context);
    }
    if (data.botId !== undefined && data.botId !== null) {
        contents.botId = data.botId;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBotAliasesCommand = deserializeAws_restJson1ListBotAliasesCommand;
const deserializeAws_restJson1ListBotAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListBotLocalesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListBotLocalesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botLocaleSummaries: undefined,
        botVersion: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBotLocalesCommand = deserializeAws_restJson1ListBotLocalesCommand;
const deserializeAws_restJson1ListBotLocalesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListBotsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListBotsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.botSummaries !== undefined && data.botSummaries !== null) {
        contents.botSummaries = deserializeAws_restJson1BotSummaryList(data.botSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBotsCommand = deserializeAws_restJson1ListBotsCommand;
const deserializeAws_restJson1ListBotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListBotVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListBotVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botVersionSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.botId !== undefined && data.botId !== null) {
        contents.botId = data.botId;
    }
    if (data.botVersionSummaries !== undefined && data.botVersionSummaries !== null) {
        contents.botVersionSummaries = deserializeAws_restJson1BotVersionSummaryList(data.botVersionSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBotVersionsCommand = deserializeAws_restJson1ListBotVersionsCommand;
const deserializeAws_restJson1ListBotVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListBuiltInIntentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListBuiltInIntentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        builtInIntentSummaries: undefined,
        localeId: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.builtInIntentSummaries !== undefined && data.builtInIntentSummaries !== null) {
        contents.builtInIntentSummaries = deserializeAws_restJson1BuiltInIntentSummaryList(data.builtInIntentSummaries, context);
    }
    if (data.localeId !== undefined && data.localeId !== null) {
        contents.localeId = data.localeId;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBuiltInIntentsCommand = deserializeAws_restJson1ListBuiltInIntentsCommand;
const deserializeAws_restJson1ListBuiltInIntentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListBuiltInSlotTypesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListBuiltInSlotTypesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        builtInSlotTypeSummaries: undefined,
        localeId: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.builtInSlotTypeSummaries !== undefined && data.builtInSlotTypeSummaries !== null) {
        contents.builtInSlotTypeSummaries = deserializeAws_restJson1BuiltInSlotTypeSummaryList(data.builtInSlotTypeSummaries, context);
    }
    if (data.localeId !== undefined && data.localeId !== null) {
        contents.localeId = data.localeId;
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBuiltInSlotTypesCommand = deserializeAws_restJson1ListBuiltInSlotTypesCommand;
const deserializeAws_restJson1ListBuiltInSlotTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListExportsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListExportsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botVersion: undefined,
        exportSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListExportsCommand = deserializeAws_restJson1ListExportsCommand;
const deserializeAws_restJson1ListExportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListImportsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListImportsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botVersion: undefined,
        importSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListImportsCommand = deserializeAws_restJson1ListImportsCommand;
const deserializeAws_restJson1ListImportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListIntentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListIntentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botVersion: undefined,
        intentSummaries: undefined,
        localeId: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIntentsCommand = deserializeAws_restJson1ListIntentsCommand;
const deserializeAws_restJson1ListIntentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListSlotsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSlotsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botVersion: undefined,
        intentId: undefined,
        localeId: undefined,
        nextToken: undefined,
        slotSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSlotsCommand = deserializeAws_restJson1ListSlotsCommand;
const deserializeAws_restJson1ListSlotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListSlotTypesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSlotTypesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        botId: undefined,
        botVersion: undefined,
        localeId: undefined,
        nextToken: undefined,
        slotTypeSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSlotTypesCommand = deserializeAws_restJson1ListSlotTypesCommand;
const deserializeAws_restJson1ListSlotTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartImportCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartImportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        creationDateTime: undefined,
        importId: undefined,
        importStatus: undefined,
        mergeStrategy: undefined,
        resourceSpecification: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartImportCommand = deserializeAws_restJson1StartImportCommand;
const deserializeAws_restJson1StartImportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateBotCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateBotCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBotCommand = deserializeAws_restJson1UpdateBotCommand;
const deserializeAws_restJson1UpdateBotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateBotAliasCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateBotAliasCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBotAliasCommand = deserializeAws_restJson1UpdateBotAliasCommand;
const deserializeAws_restJson1UpdateBotAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateBotLocaleCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateBotLocaleCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBotLocaleCommand = deserializeAws_restJson1UpdateBotLocaleCommand;
const deserializeAws_restJson1UpdateBotLocaleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateExportCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateExportCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        creationDateTime: undefined,
        exportId: undefined,
        exportStatus: undefined,
        fileFormat: undefined,
        lastUpdatedDateTime: undefined,
        resourceSpecification: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateExportCommand = deserializeAws_restJson1UpdateExportCommand;
const deserializeAws_restJson1UpdateExportCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateIntentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateIntentCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateIntentCommand = deserializeAws_restJson1UpdateIntentCommand;
const deserializeAws_restJson1UpdateIntentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateResourcePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateResourcePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        resourceArn: undefined,
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateResourcePolicyCommand = deserializeAws_restJson1UpdateResourcePolicyCommand;
const deserializeAws_restJson1UpdateResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateSlotCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSlotCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSlotCommand = deserializeAws_restJson1UpdateSlotCommand;
const deserializeAws_restJson1UpdateSlotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateSlotTypeCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSlotTypeCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSlotTypeCommand = deserializeAws_restJson1UpdateSlotTypeCommand;
const deserializeAws_restJson1UpdateSlotTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.lexmodelsv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lexmodelsv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lexmodelsv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lexmodelsv2#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1PreconditionFailedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PreconditionFailedException",
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
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
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
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        retryAfterSeconds: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
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
const serializeAws_restJson1AudioLogDestination = (input, context) => {
    return {
        ...(input.s3Bucket !== undefined &&
            input.s3Bucket !== null && { s3Bucket: serializeAws_restJson1S3BucketLogDestination(input.s3Bucket, context) }),
    };
};
const serializeAws_restJson1AudioLogSetting = (input, context) => {
    return {
        ...(input.destination !== undefined &&
            input.destination !== null && {
            destination: serializeAws_restJson1AudioLogDestination(input.destination, context),
        }),
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    };
};
const serializeAws_restJson1AudioLogSettingsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AudioLogSetting(entry, context);
    });
};
const serializeAws_restJson1BotAliasLocaleSettings = (input, context) => {
    return {
        ...(input.codeHookSpecification !== undefined &&
            input.codeHookSpecification !== null && {
            codeHookSpecification: serializeAws_restJson1CodeHookSpecification(input.codeHookSpecification, context),
        }),
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    };
};
const serializeAws_restJson1BotAliasLocaleSettingsMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1BotAliasLocaleSettings(value, context),
        };
    }, {});
};
const serializeAws_restJson1BotExportSpecification = (input, context) => {
    return {
        ...(input.botId !== undefined && input.botId !== null && { botId: input.botId }),
        ...(input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }),
    };
};
const serializeAws_restJson1BotFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
    };
};
const serializeAws_restJson1BotFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1BotFilter(entry, context);
    });
};
const serializeAws_restJson1BotImportSpecification = (input, context) => {
    return {
        ...(input.botName !== undefined && input.botName !== null && { botName: input.botName }),
        ...(input.botTags !== undefined &&
            input.botTags !== null && { botTags: serializeAws_restJson1TagMap(input.botTags, context) }),
        ...(input.dataPrivacy !== undefined &&
            input.dataPrivacy !== null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) }),
        ...(input.idleSessionTTLInSeconds !== undefined &&
            input.idleSessionTTLInSeconds !== null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.testBotAliasTags !== undefined &&
            input.testBotAliasTags !== null && {
            testBotAliasTags: serializeAws_restJson1TagMap(input.testBotAliasTags, context),
        }),
    };
};
const serializeAws_restJson1BotLocaleExportSpecification = (input, context) => {
    return {
        ...(input.botId !== undefined && input.botId !== null && { botId: input.botId }),
        ...(input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }),
        ...(input.localeId !== undefined && input.localeId !== null && { localeId: input.localeId }),
    };
};
const serializeAws_restJson1BotLocaleFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
    };
};
const serializeAws_restJson1BotLocaleFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1BotLocaleFilter(entry, context);
    });
};
const serializeAws_restJson1BotLocaleImportSpecification = (input, context) => {
    return {
        ...(input.botId !== undefined && input.botId !== null && { botId: input.botId }),
        ...(input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }),
        ...(input.localeId !== undefined && input.localeId !== null && { localeId: input.localeId }),
        ...(input.nluIntentConfidenceThreshold !== undefined &&
            input.nluIntentConfidenceThreshold !== null && {
            nluIntentConfidenceThreshold: input.nluIntentConfidenceThreshold,
        }),
        ...(input.voiceSettings !== undefined &&
            input.voiceSettings !== null && {
            voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
        }),
    };
};
const serializeAws_restJson1BotLocaleSortBy = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
    };
};
const serializeAws_restJson1BotSortBy = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
    };
};
const serializeAws_restJson1BotVersionLocaleDetails = (input, context) => {
    return {
        ...(input.sourceBotVersion !== undefined &&
            input.sourceBotVersion !== null && { sourceBotVersion: input.sourceBotVersion }),
    };
};
const serializeAws_restJson1BotVersionLocaleSpecification = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1BotVersionLocaleDetails(value, context),
        };
    }, {});
};
const serializeAws_restJson1BotVersionSortBy = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
    };
};
const serializeAws_restJson1BuiltInIntentSortBy = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
    };
};
const serializeAws_restJson1BuiltInSlotTypeSortBy = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
    };
};
const serializeAws_restJson1Button = (input, context) => {
    return {
        ...(input.text !== undefined && input.text !== null && { text: input.text }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1ButtonsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Button(entry, context);
    });
};
const serializeAws_restJson1CloudWatchLogGroupLogDestination = (input, context) => {
    return {
        ...(input.cloudWatchLogGroupArn !== undefined &&
            input.cloudWatchLogGroupArn !== null && { cloudWatchLogGroupArn: input.cloudWatchLogGroupArn }),
        ...(input.logPrefix !== undefined && input.logPrefix !== null && { logPrefix: input.logPrefix }),
    };
};
const serializeAws_restJson1CodeHookSpecification = (input, context) => {
    return {
        ...(input.lambdaCodeHook !== undefined &&
            input.lambdaCodeHook !== null && {
            lambdaCodeHook: serializeAws_restJson1LambdaCodeHook(input.lambdaCodeHook, context),
        }),
    };
};
const serializeAws_restJson1ConditionKeyValueMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1ConditionMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1ConditionKeyValueMap(value, context),
        };
    }, {});
};
const serializeAws_restJson1ConversationLogSettings = (input, context) => {
    return {
        ...(input.audioLogSettings !== undefined &&
            input.audioLogSettings !== null && {
            audioLogSettings: serializeAws_restJson1AudioLogSettingsList(input.audioLogSettings, context),
        }),
        ...(input.textLogSettings !== undefined &&
            input.textLogSettings !== null && {
            textLogSettings: serializeAws_restJson1TextLogSettingsList(input.textLogSettings, context),
        }),
    };
};
const serializeAws_restJson1CustomPayload = (input, context) => {
    return {
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1DataPrivacy = (input, context) => {
    return {
        ...(input.childDirected !== undefined && input.childDirected !== null && { childDirected: input.childDirected }),
    };
};
const serializeAws_restJson1DialogCodeHookSettings = (input, context) => {
    return {
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    };
};
const serializeAws_restJson1ExportFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
    };
};
const serializeAws_restJson1ExportFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ExportFilter(entry, context);
    });
};
const serializeAws_restJson1ExportResourceSpecification = (input, context) => {
    return {
        ...(input.botExportSpecification !== undefined &&
            input.botExportSpecification !== null && {
            botExportSpecification: serializeAws_restJson1BotExportSpecification(input.botExportSpecification, context),
        }),
        ...(input.botLocaleExportSpecification !== undefined &&
            input.botLocaleExportSpecification !== null && {
            botLocaleExportSpecification: serializeAws_restJson1BotLocaleExportSpecification(input.botLocaleExportSpecification, context),
        }),
    };
};
const serializeAws_restJson1ExportSortBy = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
    };
};
const serializeAws_restJson1FilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1FulfillmentCodeHookSettings = (input, context) => {
    return {
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    };
};
const serializeAws_restJson1ImageResponseCard = (input, context) => {
    return {
        ...(input.buttons !== undefined &&
            input.buttons !== null && { buttons: serializeAws_restJson1ButtonsList(input.buttons, context) }),
        ...(input.imageUrl !== undefined && input.imageUrl !== null && { imageUrl: input.imageUrl }),
        ...(input.subtitle !== undefined && input.subtitle !== null && { subtitle: input.subtitle }),
        ...(input.title !== undefined && input.title !== null && { title: input.title }),
    };
};
const serializeAws_restJson1ImportFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
    };
};
const serializeAws_restJson1ImportFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ImportFilter(entry, context);
    });
};
const serializeAws_restJson1ImportResourceSpecification = (input, context) => {
    return {
        ...(input.botImportSpecification !== undefined &&
            input.botImportSpecification !== null && {
            botImportSpecification: serializeAws_restJson1BotImportSpecification(input.botImportSpecification, context),
        }),
        ...(input.botLocaleImportSpecification !== undefined &&
            input.botLocaleImportSpecification !== null && {
            botLocaleImportSpecification: serializeAws_restJson1BotLocaleImportSpecification(input.botLocaleImportSpecification, context),
        }),
    };
};
const serializeAws_restJson1ImportSortBy = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
    };
};
const serializeAws_restJson1InputContext = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_restJson1InputContextsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputContext(entry, context);
    });
};
const serializeAws_restJson1IntentClosingSetting = (input, context) => {
    return {
        ...(input.closingResponse !== undefined &&
            input.closingResponse !== null && {
            closingResponse: serializeAws_restJson1ResponseSpecification(input.closingResponse, context),
        }),
    };
};
const serializeAws_restJson1IntentConfirmationSetting = (input, context) => {
    return {
        ...(input.declinationResponse !== undefined &&
            input.declinationResponse !== null && {
            declinationResponse: serializeAws_restJson1ResponseSpecification(input.declinationResponse, context),
        }),
        ...(input.promptSpecification !== undefined &&
            input.promptSpecification !== null && {
            promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
        }),
    };
};
const serializeAws_restJson1IntentFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
    };
};
const serializeAws_restJson1IntentFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1IntentFilter(entry, context);
    });
};
const serializeAws_restJson1IntentSortBy = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
    };
};
const serializeAws_restJson1KendraConfiguration = (input, context) => {
    return {
        ...(input.kendraIndex !== undefined && input.kendraIndex !== null && { kendraIndex: input.kendraIndex }),
        ...(input.queryFilterString !== undefined &&
            input.queryFilterString !== null && { queryFilterString: input.queryFilterString }),
        ...(input.queryFilterStringEnabled !== undefined &&
            input.queryFilterStringEnabled !== null && { queryFilterStringEnabled: input.queryFilterStringEnabled }),
    };
};
const serializeAws_restJson1LambdaCodeHook = (input, context) => {
    return {
        ...(input.codeHookInterfaceVersion !== undefined &&
            input.codeHookInterfaceVersion !== null && { codeHookInterfaceVersion: input.codeHookInterfaceVersion }),
        ...(input.lambdaARN !== undefined && input.lambdaARN !== null && { lambdaARN: input.lambdaARN }),
    };
};
const serializeAws_restJson1Message = (input, context) => {
    return {
        ...(input.customPayload !== undefined &&
            input.customPayload !== null && {
            customPayload: serializeAws_restJson1CustomPayload(input.customPayload, context),
        }),
        ...(input.imageResponseCard !== undefined &&
            input.imageResponseCard !== null && {
            imageResponseCard: serializeAws_restJson1ImageResponseCard(input.imageResponseCard, context),
        }),
        ...(input.plainTextMessage !== undefined &&
            input.plainTextMessage !== null && {
            plainTextMessage: serializeAws_restJson1PlainTextMessage(input.plainTextMessage, context),
        }),
        ...(input.ssmlMessage !== undefined &&
            input.ssmlMessage !== null && { ssmlMessage: serializeAws_restJson1SSMLMessage(input.ssmlMessage, context) }),
    };
};
const serializeAws_restJson1MessageGroup = (input, context) => {
    return {
        ...(input.message !== undefined &&
            input.message !== null && { message: serializeAws_restJson1Message(input.message, context) }),
        ...(input.variations !== undefined &&
            input.variations !== null && {
            variations: serializeAws_restJson1MessageVariationsList(input.variations, context),
        }),
    };
};
const serializeAws_restJson1MessageGroupsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MessageGroup(entry, context);
    });
};
const serializeAws_restJson1MessageVariationsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Message(entry, context);
    });
};
const serializeAws_restJson1ObfuscationSetting = (input, context) => {
    return {
        ...(input.obfuscationSettingType !== undefined &&
            input.obfuscationSettingType !== null && { obfuscationSettingType: input.obfuscationSettingType }),
    };
};
const serializeAws_restJson1OperationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1OutputContext = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.timeToLiveInSeconds !== undefined &&
            input.timeToLiveInSeconds !== null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
        ...(input.turnsToLive !== undefined && input.turnsToLive !== null && { turnsToLive: input.turnsToLive }),
    };
};
const serializeAws_restJson1OutputContextsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1OutputContext(entry, context);
    });
};
const serializeAws_restJson1PlainTextMessage = (input, context) => {
    return {
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1Principal = (input, context) => {
    return {
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.service !== undefined && input.service !== null && { service: input.service }),
    };
};
const serializeAws_restJson1PrincipalList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Principal(entry, context);
    });
};
const serializeAws_restJson1PromptSpecification = (input, context) => {
    return {
        ...(input.allowInterrupt !== undefined &&
            input.allowInterrupt !== null && { allowInterrupt: input.allowInterrupt }),
        ...(input.maxRetries !== undefined && input.maxRetries !== null && { maxRetries: input.maxRetries }),
        ...(input.messageGroups !== undefined &&
            input.messageGroups !== null && {
            messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
        }),
    };
};
const serializeAws_restJson1ResponseSpecification = (input, context) => {
    return {
        ...(input.allowInterrupt !== undefined &&
            input.allowInterrupt !== null && { allowInterrupt: input.allowInterrupt }),
        ...(input.messageGroups !== undefined &&
            input.messageGroups !== null && {
            messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
        }),
    };
};
const serializeAws_restJson1S3BucketLogDestination = (input, context) => {
    return {
        ...(input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn }),
        ...(input.logPrefix !== undefined && input.logPrefix !== null && { logPrefix: input.logPrefix }),
        ...(input.s3BucketArn !== undefined && input.s3BucketArn !== null && { s3BucketArn: input.s3BucketArn }),
    };
};
const serializeAws_restJson1SampleUtterance = (input, context) => {
    return {
        ...(input.utterance !== undefined && input.utterance !== null && { utterance: input.utterance }),
    };
};
const serializeAws_restJson1SampleUtterancesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SampleUtterance(entry, context);
    });
};
const serializeAws_restJson1SampleValue = (input, context) => {
    return {
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1SentimentAnalysisSettings = (input, context) => {
    return {
        ...(input.detectSentiment !== undefined &&
            input.detectSentiment !== null && { detectSentiment: input.detectSentiment }),
    };
};
const serializeAws_restJson1SlotDefaultValue = (input, context) => {
    return {
        ...(input.defaultValue !== undefined && input.defaultValue !== null && { defaultValue: input.defaultValue }),
    };
};
const serializeAws_restJson1SlotDefaultValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotDefaultValue(entry, context);
    });
};
const serializeAws_restJson1SlotDefaultValueSpecification = (input, context) => {
    return {
        ...(input.defaultValueList !== undefined &&
            input.defaultValueList !== null && {
            defaultValueList: serializeAws_restJson1SlotDefaultValueList(input.defaultValueList, context),
        }),
    };
};
const serializeAws_restJson1SlotFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
    };
};
const serializeAws_restJson1SlotFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotFilter(entry, context);
    });
};
const serializeAws_restJson1SlotPrioritiesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotPriority(entry, context);
    });
};
const serializeAws_restJson1SlotPriority = (input, context) => {
    return {
        ...(input.priority !== undefined && input.priority !== null && { priority: input.priority }),
        ...(input.slotId !== undefined && input.slotId !== null && { slotId: input.slotId }),
    };
};
const serializeAws_restJson1SlotSortBy = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
    };
};
const serializeAws_restJson1SlotTypeFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
    };
};
const serializeAws_restJson1SlotTypeFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotTypeFilter(entry, context);
    });
};
const serializeAws_restJson1SlotTypeSortBy = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.order !== undefined && input.order !== null && { order: input.order }),
    };
};
const serializeAws_restJson1SlotTypeValue = (input, context) => {
    return {
        ...(input.sampleValue !== undefined &&
            input.sampleValue !== null && { sampleValue: serializeAws_restJson1SampleValue(input.sampleValue, context) }),
        ...(input.synonyms !== undefined &&
            input.synonyms !== null && { synonyms: serializeAws_restJson1SynonymList(input.synonyms, context) }),
    };
};
const serializeAws_restJson1SlotTypeValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SlotTypeValue(entry, context);
    });
};
const serializeAws_restJson1SlotValueElicitationSetting = (input, context) => {
    return {
        ...(input.defaultValueSpecification !== undefined &&
            input.defaultValueSpecification !== null && {
            defaultValueSpecification: serializeAws_restJson1SlotDefaultValueSpecification(input.defaultValueSpecification, context),
        }),
        ...(input.promptSpecification !== undefined &&
            input.promptSpecification !== null && {
            promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
        }),
        ...(input.sampleUtterances !== undefined &&
            input.sampleUtterances !== null && {
            sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
        }),
        ...(input.slotConstraint !== undefined &&
            input.slotConstraint !== null && { slotConstraint: input.slotConstraint }),
        ...(input.waitAndContinueSpecification !== undefined &&
            input.waitAndContinueSpecification !== null && {
            waitAndContinueSpecification: serializeAws_restJson1WaitAndContinueSpecification(input.waitAndContinueSpecification, context),
        }),
    };
};
const serializeAws_restJson1SlotValueRegexFilter = (input, context) => {
    return {
        ...(input.pattern !== undefined && input.pattern !== null && { pattern: input.pattern }),
    };
};
const serializeAws_restJson1SlotValueSelectionSetting = (input, context) => {
    return {
        ...(input.regexFilter !== undefined &&
            input.regexFilter !== null && {
            regexFilter: serializeAws_restJson1SlotValueRegexFilter(input.regexFilter, context),
        }),
        ...(input.resolutionStrategy !== undefined &&
            input.resolutionStrategy !== null && { resolutionStrategy: input.resolutionStrategy }),
    };
};
const serializeAws_restJson1SSMLMessage = (input, context) => {
    return {
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1StillWaitingResponseSpecification = (input, context) => {
    return {
        ...(input.allowInterrupt !== undefined &&
            input.allowInterrupt !== null && { allowInterrupt: input.allowInterrupt }),
        ...(input.frequencyInSeconds !== undefined &&
            input.frequencyInSeconds !== null && { frequencyInSeconds: input.frequencyInSeconds }),
        ...(input.messageGroups !== undefined &&
            input.messageGroups !== null && {
            messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
        }),
        ...(input.timeoutInSeconds !== undefined &&
            input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }),
    };
};
const serializeAws_restJson1SynonymList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SampleValue(entry, context);
    });
};
const serializeAws_restJson1TagMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1TextLogDestination = (input, context) => {
    return {
        ...(input.cloudWatch !== undefined &&
            input.cloudWatch !== null && {
            cloudWatch: serializeAws_restJson1CloudWatchLogGroupLogDestination(input.cloudWatch, context),
        }),
    };
};
const serializeAws_restJson1TextLogSetting = (input, context) => {
    return {
        ...(input.destination !== undefined &&
            input.destination !== null && {
            destination: serializeAws_restJson1TextLogDestination(input.destination, context),
        }),
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    };
};
const serializeAws_restJson1TextLogSettingsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TextLogSetting(entry, context);
    });
};
const serializeAws_restJson1VoiceSettings = (input, context) => {
    return {
        ...(input.voiceId !== undefined && input.voiceId !== null && { voiceId: input.voiceId }),
    };
};
const serializeAws_restJson1WaitAndContinueSpecification = (input, context) => {
    return {
        ...(input.continueResponse !== undefined &&
            input.continueResponse !== null && {
            continueResponse: serializeAws_restJson1ResponseSpecification(input.continueResponse, context),
        }),
        ...(input.stillWaitingResponse !== undefined &&
            input.stillWaitingResponse !== null && {
            stillWaitingResponse: serializeAws_restJson1StillWaitingResponseSpecification(input.stillWaitingResponse, context),
        }),
        ...(input.waitingResponse !== undefined &&
            input.waitingResponse !== null && {
            waitingResponse: serializeAws_restJson1ResponseSpecification(input.waitingResponse, context),
        }),
    };
};
const deserializeAws_restJson1AudioLogDestination = (output, context) => {
    return {
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null
            ? deserializeAws_restJson1S3BucketLogDestination(output.s3Bucket, context)
            : undefined,
    };
};
const deserializeAws_restJson1AudioLogSetting = (output, context) => {
    return {
        destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1AudioLogDestination(output.destination, context)
            : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
const deserializeAws_restJson1AudioLogSettingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AudioLogSetting(entry, context);
    });
};
const deserializeAws_restJson1BotAliasHistoryEvent = (output, context) => {
    return {
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
        endDate: output.endDate !== undefined && output.endDate !== null ? new Date(Math.round(output.endDate * 1000)) : undefined,
        startDate: output.startDate !== undefined && output.startDate !== null
            ? new Date(Math.round(output.startDate * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1BotAliasHistoryEventsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotAliasHistoryEvent(entry, context);
    });
};
const deserializeAws_restJson1BotAliasLocaleSettings = (output, context) => {
    return {
        codeHookSpecification: output.codeHookSpecification !== undefined && output.codeHookSpecification !== null
            ? deserializeAws_restJson1CodeHookSpecification(output.codeHookSpecification, context)
            : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
const deserializeAws_restJson1BotAliasLocaleSettingsMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1BotAliasLocaleSettings(value, context),
        };
    }, {});
};
const deserializeAws_restJson1BotAliasSummary = (output, context) => {
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
const deserializeAws_restJson1BotAliasSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotAliasSummary(entry, context);
    });
};
const deserializeAws_restJson1BotExportSpecification = (output, context) => {
    return {
        botId: output.botId !== undefined && output.botId !== null ? output.botId : undefined,
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
    };
};
const deserializeAws_restJson1BotImportSpecification = (output, context) => {
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
const deserializeAws_restJson1BotLocaleExportSpecification = (output, context) => {
    return {
        botId: output.botId !== undefined && output.botId !== null ? output.botId : undefined,
        botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
        localeId: output.localeId !== undefined && output.localeId !== null ? output.localeId : undefined,
    };
};
const deserializeAws_restJson1BotLocaleHistoryEvent = (output, context) => {
    return {
        event: output.event !== undefined && output.event !== null ? output.event : undefined,
        eventDate: output.eventDate !== undefined && output.eventDate !== null
            ? new Date(Math.round(output.eventDate * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1BotLocaleHistoryEventsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotLocaleHistoryEvent(entry, context);
    });
};
const deserializeAws_restJson1BotLocaleImportSpecification = (output, context) => {
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
const deserializeAws_restJson1BotLocaleSummary = (output, context) => {
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
const deserializeAws_restJson1BotLocaleSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotLocaleSummary(entry, context);
    });
};
const deserializeAws_restJson1BotSummary = (output, context) => {
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
const deserializeAws_restJson1BotSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotSummary(entry, context);
    });
};
const deserializeAws_restJson1BotVersionLocaleDetails = (output, context) => {
    return {
        sourceBotVersion: output.sourceBotVersion !== undefined && output.sourceBotVersion !== null ? output.sourceBotVersion : undefined,
    };
};
const deserializeAws_restJson1BotVersionLocaleSpecification = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1BotVersionLocaleDetails(value, context),
        };
    }, {});
};
const deserializeAws_restJson1BotVersionSummary = (output, context) => {
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
const deserializeAws_restJson1BotVersionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BotVersionSummary(entry, context);
    });
};
const deserializeAws_restJson1BuiltInIntentSummary = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        intentSignature: output.intentSignature !== undefined && output.intentSignature !== null ? output.intentSignature : undefined,
    };
};
const deserializeAws_restJson1BuiltInIntentSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BuiltInIntentSummary(entry, context);
    });
};
const deserializeAws_restJson1BuiltInSlotTypeSummary = (output, context) => {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        slotTypeSignature: output.slotTypeSignature !== undefined && output.slotTypeSignature !== null
            ? output.slotTypeSignature
            : undefined,
    };
};
const deserializeAws_restJson1BuiltInSlotTypeSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BuiltInSlotTypeSummary(entry, context);
    });
};
const deserializeAws_restJson1Button = (output, context) => {
    return {
        text: output.text !== undefined && output.text !== null ? output.text : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1ButtonsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Button(entry, context);
    });
};
const deserializeAws_restJson1CloudWatchLogGroupLogDestination = (output, context) => {
    return {
        cloudWatchLogGroupArn: output.cloudWatchLogGroupArn !== undefined && output.cloudWatchLogGroupArn !== null
            ? output.cloudWatchLogGroupArn
            : undefined,
        logPrefix: output.logPrefix !== undefined && output.logPrefix !== null ? output.logPrefix : undefined,
    };
};
const deserializeAws_restJson1CodeHookSpecification = (output, context) => {
    return {
        lambdaCodeHook: output.lambdaCodeHook !== undefined && output.lambdaCodeHook !== null
            ? deserializeAws_restJson1LambdaCodeHook(output.lambdaCodeHook, context)
            : undefined,
    };
};
const deserializeAws_restJson1ConversationLogSettings = (output, context) => {
    return {
        audioLogSettings: output.audioLogSettings !== undefined && output.audioLogSettings !== null
            ? deserializeAws_restJson1AudioLogSettingsList(output.audioLogSettings, context)
            : undefined,
        textLogSettings: output.textLogSettings !== undefined && output.textLogSettings !== null
            ? deserializeAws_restJson1TextLogSettingsList(output.textLogSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1CustomPayload = (output, context) => {
    return {
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1DataPrivacy = (output, context) => {
    return {
        childDirected: output.childDirected !== undefined && output.childDirected !== null ? output.childDirected : undefined,
    };
};
const deserializeAws_restJson1DialogCodeHookSettings = (output, context) => {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
const deserializeAws_restJson1ExportResourceSpecification = (output, context) => {
    return {
        botExportSpecification: output.botExportSpecification !== undefined && output.botExportSpecification !== null
            ? deserializeAws_restJson1BotExportSpecification(output.botExportSpecification, context)
            : undefined,
        botLocaleExportSpecification: output.botLocaleExportSpecification !== undefined && output.botLocaleExportSpecification !== null
            ? deserializeAws_restJson1BotLocaleExportSpecification(output.botLocaleExportSpecification, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExportSummary = (output, context) => {
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
const deserializeAws_restJson1ExportSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExportSummary(entry, context);
    });
};
const deserializeAws_restJson1FailureReasons = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1FulfillmentCodeHookSettings = (output, context) => {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
const deserializeAws_restJson1ImageResponseCard = (output, context) => {
    return {
        buttons: output.buttons !== undefined && output.buttons !== null
            ? deserializeAws_restJson1ButtonsList(output.buttons, context)
            : undefined,
        imageUrl: output.imageUrl !== undefined && output.imageUrl !== null ? output.imageUrl : undefined,
        subtitle: output.subtitle !== undefined && output.subtitle !== null ? output.subtitle : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
const deserializeAws_restJson1ImportResourceSpecification = (output, context) => {
    return {
        botImportSpecification: output.botImportSpecification !== undefined && output.botImportSpecification !== null
            ? deserializeAws_restJson1BotImportSpecification(output.botImportSpecification, context)
            : undefined,
        botLocaleImportSpecification: output.botLocaleImportSpecification !== undefined && output.botLocaleImportSpecification !== null
            ? deserializeAws_restJson1BotLocaleImportSpecification(output.botLocaleImportSpecification, context)
            : undefined,
    };
};
const deserializeAws_restJson1ImportSummary = (output, context) => {
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
const deserializeAws_restJson1ImportSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImportSummary(entry, context);
    });
};
const deserializeAws_restJson1InputContext = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1InputContextsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputContext(entry, context);
    });
};
const deserializeAws_restJson1IntentClosingSetting = (output, context) => {
    return {
        closingResponse: output.closingResponse !== undefined && output.closingResponse !== null
            ? deserializeAws_restJson1ResponseSpecification(output.closingResponse, context)
            : undefined,
    };
};
const deserializeAws_restJson1IntentConfirmationSetting = (output, context) => {
    return {
        declinationResponse: output.declinationResponse !== undefined && output.declinationResponse !== null
            ? deserializeAws_restJson1ResponseSpecification(output.declinationResponse, context)
            : undefined,
        promptSpecification: output.promptSpecification !== undefined && output.promptSpecification !== null
            ? deserializeAws_restJson1PromptSpecification(output.promptSpecification, context)
            : undefined,
    };
};
const deserializeAws_restJson1IntentSummary = (output, context) => {
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
const deserializeAws_restJson1IntentSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IntentSummary(entry, context);
    });
};
const deserializeAws_restJson1KendraConfiguration = (output, context) => {
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
const deserializeAws_restJson1LambdaCodeHook = (output, context) => {
    return {
        codeHookInterfaceVersion: output.codeHookInterfaceVersion !== undefined && output.codeHookInterfaceVersion !== null
            ? output.codeHookInterfaceVersion
            : undefined,
        lambdaARN: output.lambdaARN !== undefined && output.lambdaARN !== null ? output.lambdaARN : undefined,
    };
};
const deserializeAws_restJson1Message = (output, context) => {
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
const deserializeAws_restJson1MessageGroup = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null
            ? deserializeAws_restJson1Message(output.message, context)
            : undefined,
        variations: output.variations !== undefined && output.variations !== null
            ? deserializeAws_restJson1MessageVariationsList(output.variations, context)
            : undefined,
    };
};
const deserializeAws_restJson1MessageGroupsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MessageGroup(entry, context);
    });
};
const deserializeAws_restJson1MessageVariationsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Message(entry, context);
    });
};
const deserializeAws_restJson1ObfuscationSetting = (output, context) => {
    return {
        obfuscationSettingType: output.obfuscationSettingType !== undefined && output.obfuscationSettingType !== null
            ? output.obfuscationSettingType
            : undefined,
    };
};
const deserializeAws_restJson1OutputContext = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        timeToLiveInSeconds: output.timeToLiveInSeconds !== undefined && output.timeToLiveInSeconds !== null
            ? output.timeToLiveInSeconds
            : undefined,
        turnsToLive: output.turnsToLive !== undefined && output.turnsToLive !== null ? output.turnsToLive : undefined,
    };
};
const deserializeAws_restJson1OutputContextsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputContext(entry, context);
    });
};
const deserializeAws_restJson1PlainTextMessage = (output, context) => {
    return {
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1PromptSpecification = (output, context) => {
    return {
        allowInterrupt: output.allowInterrupt !== undefined && output.allowInterrupt !== null ? output.allowInterrupt : undefined,
        maxRetries: output.maxRetries !== undefined && output.maxRetries !== null ? output.maxRetries : undefined,
        messageGroups: output.messageGroups !== undefined && output.messageGroups !== null
            ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResponseSpecification = (output, context) => {
    return {
        allowInterrupt: output.allowInterrupt !== undefined && output.allowInterrupt !== null ? output.allowInterrupt : undefined,
        messageGroups: output.messageGroups !== undefined && output.messageGroups !== null
            ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3BucketLogDestination = (output, context) => {
    return {
        kmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
        logPrefix: output.logPrefix !== undefined && output.logPrefix !== null ? output.logPrefix : undefined,
        s3BucketArn: output.s3BucketArn !== undefined && output.s3BucketArn !== null ? output.s3BucketArn : undefined,
    };
};
const deserializeAws_restJson1SampleUtterance = (output, context) => {
    return {
        utterance: output.utterance !== undefined && output.utterance !== null ? output.utterance : undefined,
    };
};
const deserializeAws_restJson1SampleUtterancesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SampleUtterance(entry, context);
    });
};
const deserializeAws_restJson1SampleValue = (output, context) => {
    return {
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1SentimentAnalysisSettings = (output, context) => {
    return {
        detectSentiment: output.detectSentiment !== undefined && output.detectSentiment !== null ? output.detectSentiment : undefined,
    };
};
const deserializeAws_restJson1SlotDefaultValue = (output, context) => {
    return {
        defaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
    };
};
const deserializeAws_restJson1SlotDefaultValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotDefaultValue(entry, context);
    });
};
const deserializeAws_restJson1SlotDefaultValueSpecification = (output, context) => {
    return {
        defaultValueList: output.defaultValueList !== undefined && output.defaultValueList !== null
            ? deserializeAws_restJson1SlotDefaultValueList(output.defaultValueList, context)
            : undefined,
    };
};
const deserializeAws_restJson1SlotPrioritiesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotPriority(entry, context);
    });
};
const deserializeAws_restJson1SlotPriority = (output, context) => {
    return {
        priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
        slotId: output.slotId !== undefined && output.slotId !== null ? output.slotId : undefined,
    };
};
const deserializeAws_restJson1SlotSummary = (output, context) => {
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
const deserializeAws_restJson1SlotSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotSummary(entry, context);
    });
};
const deserializeAws_restJson1SlotTypeSummary = (output, context) => {
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
const deserializeAws_restJson1SlotTypeSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotTypeSummary(entry, context);
    });
};
const deserializeAws_restJson1SlotTypeValue = (output, context) => {
    return {
        sampleValue: output.sampleValue !== undefined && output.sampleValue !== null
            ? deserializeAws_restJson1SampleValue(output.sampleValue, context)
            : undefined,
        synonyms: output.synonyms !== undefined && output.synonyms !== null
            ? deserializeAws_restJson1SynonymList(output.synonyms, context)
            : undefined,
    };
};
const deserializeAws_restJson1SlotTypeValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SlotTypeValue(entry, context);
    });
};
const deserializeAws_restJson1SlotValueElicitationSetting = (output, context) => {
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
const deserializeAws_restJson1SlotValueRegexFilter = (output, context) => {
    return {
        pattern: output.pattern !== undefined && output.pattern !== null ? output.pattern : undefined,
    };
};
const deserializeAws_restJson1SlotValueSelectionSetting = (output, context) => {
    return {
        regexFilter: output.regexFilter !== undefined && output.regexFilter !== null
            ? deserializeAws_restJson1SlotValueRegexFilter(output.regexFilter, context)
            : undefined,
        resolutionStrategy: output.resolutionStrategy !== undefined && output.resolutionStrategy !== null
            ? output.resolutionStrategy
            : undefined,
    };
};
const deserializeAws_restJson1SSMLMessage = (output, context) => {
    return {
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1StillWaitingResponseSpecification = (output, context) => {
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
const deserializeAws_restJson1SynonymList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SampleValue(entry, context);
    });
};
const deserializeAws_restJson1TagMap = (output, context) => {
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
const deserializeAws_restJson1TextLogDestination = (output, context) => {
    return {
        cloudWatch: output.cloudWatch !== undefined && output.cloudWatch !== null
            ? deserializeAws_restJson1CloudWatchLogGroupLogDestination(output.cloudWatch, context)
            : undefined,
    };
};
const deserializeAws_restJson1TextLogSetting = (output, context) => {
    return {
        destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1TextLogDestination(output.destination, context)
            : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
const deserializeAws_restJson1TextLogSettingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TextLogSetting(entry, context);
    });
};
const deserializeAws_restJson1VoiceSettings = (output, context) => {
    return {
        voiceId: output.voiceId !== undefined && output.voiceId !== null ? output.voiceId : undefined,
    };
};
const deserializeAws_restJson1WaitAndContinueSpecification = (output, context) => {
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