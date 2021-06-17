"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateAlarmModelCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StartDetectorModelAnalysisCommand = exports.deserializeAws_restJson1PutLoggingOptionsCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListInputsCommand = exports.deserializeAws_restJson1ListInputRoutingsCommand = exports.deserializeAws_restJson1ListDetectorModelVersionsCommand = exports.deserializeAws_restJson1ListDetectorModelsCommand = exports.deserializeAws_restJson1ListAlarmModelVersionsCommand = exports.deserializeAws_restJson1ListAlarmModelsCommand = exports.deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand = exports.deserializeAws_restJson1DescribeLoggingOptionsCommand = exports.deserializeAws_restJson1DescribeInputCommand = exports.deserializeAws_restJson1DescribeDetectorModelAnalysisCommand = exports.deserializeAws_restJson1DescribeDetectorModelCommand = exports.deserializeAws_restJson1DescribeAlarmModelCommand = exports.deserializeAws_restJson1DeleteInputCommand = exports.deserializeAws_restJson1DeleteDetectorModelCommand = exports.deserializeAws_restJson1DeleteAlarmModelCommand = exports.deserializeAws_restJson1CreateInputCommand = exports.deserializeAws_restJson1CreateDetectorModelCommand = exports.deserializeAws_restJson1CreateAlarmModelCommand = exports.serializeAws_restJson1UpdateInputCommand = exports.serializeAws_restJson1UpdateDetectorModelCommand = exports.serializeAws_restJson1UpdateAlarmModelCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StartDetectorModelAnalysisCommand = exports.serializeAws_restJson1PutLoggingOptionsCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListInputsCommand = exports.serializeAws_restJson1ListInputRoutingsCommand = exports.serializeAws_restJson1ListDetectorModelVersionsCommand = exports.serializeAws_restJson1ListDetectorModelsCommand = exports.serializeAws_restJson1ListAlarmModelVersionsCommand = exports.serializeAws_restJson1ListAlarmModelsCommand = exports.serializeAws_restJson1GetDetectorModelAnalysisResultsCommand = exports.serializeAws_restJson1DescribeLoggingOptionsCommand = exports.serializeAws_restJson1DescribeInputCommand = exports.serializeAws_restJson1DescribeDetectorModelAnalysisCommand = exports.serializeAws_restJson1DescribeDetectorModelCommand = exports.serializeAws_restJson1DescribeAlarmModelCommand = exports.serializeAws_restJson1DeleteInputCommand = exports.serializeAws_restJson1DeleteDetectorModelCommand = exports.serializeAws_restJson1DeleteAlarmModelCommand = exports.serializeAws_restJson1CreateInputCommand = exports.serializeAws_restJson1CreateDetectorModelCommand = exports.serializeAws_restJson1CreateAlarmModelCommand = void 0;
exports.deserializeAws_restJson1UpdateInputCommand = exports.deserializeAws_restJson1UpdateDetectorModelCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateAlarmModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/alarm-models";
    let body;
    body = JSON.stringify({
        ...(input.alarmCapabilities !== undefined &&
            input.alarmCapabilities !== null && {
            alarmCapabilities: serializeAws_restJson1AlarmCapabilities(input.alarmCapabilities, context),
        }),
        ...(input.alarmEventActions !== undefined &&
            input.alarmEventActions !== null && {
            alarmEventActions: serializeAws_restJson1AlarmEventActions(input.alarmEventActions, context),
        }),
        ...(input.alarmModelDescription !== undefined &&
            input.alarmModelDescription !== null && { alarmModelDescription: input.alarmModelDescription }),
        ...(input.alarmModelName !== undefined &&
            input.alarmModelName !== null && { alarmModelName: input.alarmModelName }),
        ...(input.alarmNotification !== undefined &&
            input.alarmNotification !== null && {
            alarmNotification: serializeAws_restJson1AlarmNotification(input.alarmNotification, context),
        }),
        ...(input.alarmRule !== undefined &&
            input.alarmRule !== null && { alarmRule: serializeAws_restJson1AlarmRule(input.alarmRule, context) }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.severity !== undefined && input.severity !== null && { severity: input.severity }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
exports.serializeAws_restJson1CreateAlarmModelCommand = serializeAws_restJson1CreateAlarmModelCommand;
const serializeAws_restJson1CreateDetectorModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector-models";
    let body;
    body = JSON.stringify({
        ...(input.detectorModelDefinition !== undefined &&
            input.detectorModelDefinition !== null && {
            detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
        }),
        ...(input.detectorModelDescription !== undefined &&
            input.detectorModelDescription !== null && { detectorModelDescription: input.detectorModelDescription }),
        ...(input.detectorModelName !== undefined &&
            input.detectorModelName !== null && { detectorModelName: input.detectorModelName }),
        ...(input.evaluationMethod !== undefined &&
            input.evaluationMethod !== null && { evaluationMethod: input.evaluationMethod }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
exports.serializeAws_restJson1CreateDetectorModelCommand = serializeAws_restJson1CreateDetectorModelCommand;
const serializeAws_restJson1CreateInputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/inputs";
    let body;
    body = JSON.stringify({
        ...(input.inputDefinition !== undefined &&
            input.inputDefinition !== null && {
            inputDefinition: serializeAws_restJson1InputDefinition(input.inputDefinition, context),
        }),
        ...(input.inputDescription !== undefined &&
            input.inputDescription !== null && { inputDescription: input.inputDescription }),
        ...(input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
exports.serializeAws_restJson1CreateInputCommand = serializeAws_restJson1CreateInputCommand;
const serializeAws_restJson1DeleteAlarmModelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/alarm-models/{alarmModelName}";
    if (input.alarmModelName !== undefined) {
        const labelValue = input.alarmModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: alarmModelName.");
        }
        resolvedPath = resolvedPath.replace("{alarmModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: alarmModelName.");
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
exports.serializeAws_restJson1DeleteAlarmModelCommand = serializeAws_restJson1DeleteAlarmModelCommand;
const serializeAws_restJson1DeleteDetectorModelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector-models/{detectorModelName}";
    if (input.detectorModelName !== undefined) {
        const labelValue = input.detectorModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: detectorModelName.");
        }
        resolvedPath = resolvedPath.replace("{detectorModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: detectorModelName.");
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
exports.serializeAws_restJson1DeleteDetectorModelCommand = serializeAws_restJson1DeleteDetectorModelCommand;
const serializeAws_restJson1DeleteInputCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/inputs/{inputName}";
    if (input.inputName !== undefined) {
        const labelValue = input.inputName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: inputName.");
        }
        resolvedPath = resolvedPath.replace("{inputName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: inputName.");
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
exports.serializeAws_restJson1DeleteInputCommand = serializeAws_restJson1DeleteInputCommand;
const serializeAws_restJson1DescribeAlarmModelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/alarm-models/{alarmModelName}";
    if (input.alarmModelName !== undefined) {
        const labelValue = input.alarmModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: alarmModelName.");
        }
        resolvedPath = resolvedPath.replace("{alarmModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: alarmModelName.");
    }
    const query = {
        ...(input.alarmModelVersion !== undefined && { version: input.alarmModelVersion }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribeAlarmModelCommand = serializeAws_restJson1DescribeAlarmModelCommand;
const serializeAws_restJson1DescribeDetectorModelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector-models/{detectorModelName}";
    if (input.detectorModelName !== undefined) {
        const labelValue = input.detectorModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: detectorModelName.");
        }
        resolvedPath = resolvedPath.replace("{detectorModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: detectorModelName.");
    }
    const query = {
        ...(input.detectorModelVersion !== undefined && { version: input.detectorModelVersion }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribeDetectorModelCommand = serializeAws_restJson1DescribeDetectorModelCommand;
const serializeAws_restJson1DescribeDetectorModelAnalysisCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/analysis/detector-models/{analysisId}";
    if (input.analysisId !== undefined) {
        const labelValue = input.analysisId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: analysisId.");
        }
        resolvedPath = resolvedPath.replace("{analysisId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: analysisId.");
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
exports.serializeAws_restJson1DescribeDetectorModelAnalysisCommand = serializeAws_restJson1DescribeDetectorModelAnalysisCommand;
const serializeAws_restJson1DescribeInputCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/inputs/{inputName}";
    if (input.inputName !== undefined) {
        const labelValue = input.inputName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: inputName.");
        }
        resolvedPath = resolvedPath.replace("{inputName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: inputName.");
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
exports.serializeAws_restJson1DescribeInputCommand = serializeAws_restJson1DescribeInputCommand;
const serializeAws_restJson1DescribeLoggingOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/logging";
    let body;
    body = "";
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
exports.serializeAws_restJson1DescribeLoggingOptionsCommand = serializeAws_restJson1DescribeLoggingOptionsCommand;
const serializeAws_restJson1GetDetectorModelAnalysisResultsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/analysis/detector-models/{analysisId}/results";
    if (input.analysisId !== undefined) {
        const labelValue = input.analysisId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: analysisId.");
        }
        resolvedPath = resolvedPath.replace("{analysisId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: analysisId.");
    }
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetDetectorModelAnalysisResultsCommand = serializeAws_restJson1GetDetectorModelAnalysisResultsCommand;
const serializeAws_restJson1ListAlarmModelsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/alarm-models";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAlarmModelsCommand = serializeAws_restJson1ListAlarmModelsCommand;
const serializeAws_restJson1ListAlarmModelVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/alarm-models/{alarmModelName}/versions";
    if (input.alarmModelName !== undefined) {
        const labelValue = input.alarmModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: alarmModelName.");
        }
        resolvedPath = resolvedPath.replace("{alarmModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: alarmModelName.");
    }
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAlarmModelVersionsCommand = serializeAws_restJson1ListAlarmModelVersionsCommand;
const serializeAws_restJson1ListDetectorModelsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector-models";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDetectorModelsCommand = serializeAws_restJson1ListDetectorModelsCommand;
const serializeAws_restJson1ListDetectorModelVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/detector-models/{detectorModelName}/versions";
    if (input.detectorModelName !== undefined) {
        const labelValue = input.detectorModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: detectorModelName.");
        }
        resolvedPath = resolvedPath.replace("{detectorModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: detectorModelName.");
    }
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDetectorModelVersionsCommand = serializeAws_restJson1ListDetectorModelVersionsCommand;
const serializeAws_restJson1ListInputRoutingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/input-routings";
    let body;
    body = JSON.stringify({
        ...(input.inputIdentifier !== undefined &&
            input.inputIdentifier !== null && {
            inputIdentifier: serializeAws_restJson1InputIdentifier(input.inputIdentifier, context),
        }),
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
exports.serializeAws_restJson1ListInputRoutingsCommand = serializeAws_restJson1ListInputRoutingsCommand;
const serializeAws_restJson1ListInputsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/inputs";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListInputsCommand = serializeAws_restJson1ListInputsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1PutLoggingOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/logging";
    let body;
    body = JSON.stringify({
        ...(input.loggingOptions !== undefined &&
            input.loggingOptions !== null && {
            loggingOptions: serializeAws_restJson1LoggingOptions(input.loggingOptions, context),
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
exports.serializeAws_restJson1PutLoggingOptionsCommand = serializeAws_restJson1PutLoggingOptionsCommand;
const serializeAws_restJson1StartDetectorModelAnalysisCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/analysis/detector-models";
    let body;
    body = JSON.stringify({
        ...(input.detectorModelDefinition !== undefined &&
            input.detectorModelDefinition !== null && {
            detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
        }),
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
exports.serializeAws_restJson1StartDetectorModelAnalysisCommand = serializeAws_restJson1StartDetectorModelAnalysisCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    };
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
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
const serializeAws_restJson1UpdateAlarmModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/alarm-models/{alarmModelName}";
    if (input.alarmModelName !== undefined) {
        const labelValue = input.alarmModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: alarmModelName.");
        }
        resolvedPath = resolvedPath.replace("{alarmModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: alarmModelName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.alarmCapabilities !== undefined &&
            input.alarmCapabilities !== null && {
            alarmCapabilities: serializeAws_restJson1AlarmCapabilities(input.alarmCapabilities, context),
        }),
        ...(input.alarmEventActions !== undefined &&
            input.alarmEventActions !== null && {
            alarmEventActions: serializeAws_restJson1AlarmEventActions(input.alarmEventActions, context),
        }),
        ...(input.alarmModelDescription !== undefined &&
            input.alarmModelDescription !== null && { alarmModelDescription: input.alarmModelDescription }),
        ...(input.alarmNotification !== undefined &&
            input.alarmNotification !== null && {
            alarmNotification: serializeAws_restJson1AlarmNotification(input.alarmNotification, context),
        }),
        ...(input.alarmRule !== undefined &&
            input.alarmRule !== null && { alarmRule: serializeAws_restJson1AlarmRule(input.alarmRule, context) }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.severity !== undefined && input.severity !== null && { severity: input.severity }),
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
exports.serializeAws_restJson1UpdateAlarmModelCommand = serializeAws_restJson1UpdateAlarmModelCommand;
const serializeAws_restJson1UpdateDetectorModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/detector-models/{detectorModelName}";
    if (input.detectorModelName !== undefined) {
        const labelValue = input.detectorModelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: detectorModelName.");
        }
        resolvedPath = resolvedPath.replace("{detectorModelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: detectorModelName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.detectorModelDefinition !== undefined &&
            input.detectorModelDefinition !== null && {
            detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
        }),
        ...(input.detectorModelDescription !== undefined &&
            input.detectorModelDescription !== null && { detectorModelDescription: input.detectorModelDescription }),
        ...(input.evaluationMethod !== undefined &&
            input.evaluationMethod !== null && { evaluationMethod: input.evaluationMethod }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
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
exports.serializeAws_restJson1UpdateDetectorModelCommand = serializeAws_restJson1UpdateDetectorModelCommand;
const serializeAws_restJson1UpdateInputCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/inputs/{inputName}";
    if (input.inputName !== undefined) {
        const labelValue = input.inputName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: inputName.");
        }
        resolvedPath = resolvedPath.replace("{inputName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: inputName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.inputDefinition !== undefined &&
            input.inputDefinition !== null && {
            inputDefinition: serializeAws_restJson1InputDefinition(input.inputDefinition, context),
        }),
        ...(input.inputDescription !== undefined &&
            input.inputDescription !== null && { inputDescription: input.inputDescription }),
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
exports.serializeAws_restJson1UpdateInputCommand = serializeAws_restJson1UpdateInputCommand;
const deserializeAws_restJson1CreateAlarmModelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAlarmModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        alarmModelArn: undefined,
        alarmModelVersion: undefined,
        creationTime: undefined,
        lastUpdateTime: undefined,
        status: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAlarmModelCommand = deserializeAws_restJson1CreateAlarmModelCommand;
const deserializeAws_restJson1CreateAlarmModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotevents#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1CreateDetectorModelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDetectorModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        detectorModelConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.detectorModelConfiguration !== undefined && data.detectorModelConfiguration !== null) {
        contents.detectorModelConfiguration = deserializeAws_restJson1DetectorModelConfiguration(data.detectorModelConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDetectorModelCommand = deserializeAws_restJson1CreateDetectorModelCommand;
const deserializeAws_restJson1CreateDetectorModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotevents#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1CreateInputCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateInputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        inputConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.inputConfiguration !== undefined && data.inputConfiguration !== null) {
        contents.inputConfiguration = deserializeAws_restJson1InputConfiguration(data.inputConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateInputCommand = deserializeAws_restJson1CreateInputCommand;
const deserializeAws_restJson1CreateInputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1DeleteAlarmModelCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAlarmModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAlarmModelCommand = deserializeAws_restJson1DeleteAlarmModelCommand;
const deserializeAws_restJson1DeleteAlarmModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1DeleteDetectorModelCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDetectorModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDetectorModelCommand = deserializeAws_restJson1DeleteDetectorModelCommand;
const deserializeAws_restJson1DeleteDetectorModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1DeleteInputCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteInputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteInputCommand = deserializeAws_restJson1DeleteInputCommand;
const deserializeAws_restJson1DeleteInputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1DescribeAlarmModelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAlarmModelCommandError(output, context);
    }
    const contents = {
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
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAlarmModelCommand = deserializeAws_restJson1DescribeAlarmModelCommand;
const deserializeAws_restJson1DescribeAlarmModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1DescribeDetectorModelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDetectorModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        detectorModel: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.detectorModel !== undefined && data.detectorModel !== null) {
        contents.detectorModel = deserializeAws_restJson1DetectorModel(data.detectorModel, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDetectorModelCommand = deserializeAws_restJson1DescribeDetectorModelCommand;
const deserializeAws_restJson1DescribeDetectorModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1DescribeDetectorModelAnalysisCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDetectorModelAnalysisCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDetectorModelAnalysisCommand = deserializeAws_restJson1DescribeDetectorModelAnalysisCommand;
const deserializeAws_restJson1DescribeDetectorModelAnalysisCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1DescribeInputCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeInputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        input: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.input !== undefined && data.input !== null) {
        contents.input = deserializeAws_restJson1Input(data.input, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeInputCommand = deserializeAws_restJson1DescribeInputCommand;
const deserializeAws_restJson1DescribeInputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1DescribeLoggingOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeLoggingOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        loggingOptions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.loggingOptions !== undefined && data.loggingOptions !== null) {
        contents.loggingOptions = deserializeAws_restJson1LoggingOptions(data.loggingOptions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeLoggingOptionsCommand = deserializeAws_restJson1DescribeLoggingOptionsCommand;
const deserializeAws_restJson1DescribeLoggingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.iotevents#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDetectorModelAnalysisResultsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        analysisResults: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.analysisResults !== undefined && data.analysisResults !== null) {
        contents.analysisResults = deserializeAws_restJson1AnalysisResults(data.analysisResults, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand = deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand;
const deserializeAws_restJson1GetDetectorModelAnalysisResultsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1ListAlarmModelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAlarmModelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        alarmModelSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.alarmModelSummaries !== undefined && data.alarmModelSummaries !== null) {
        contents.alarmModelSummaries = deserializeAws_restJson1AlarmModelSummaries(data.alarmModelSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAlarmModelsCommand = deserializeAws_restJson1ListAlarmModelsCommand;
const deserializeAws_restJson1ListAlarmModelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1ListAlarmModelVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAlarmModelVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        alarmModelVersionSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.alarmModelVersionSummaries !== undefined && data.alarmModelVersionSummaries !== null) {
        contents.alarmModelVersionSummaries = deserializeAws_restJson1AlarmModelVersionSummaries(data.alarmModelVersionSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAlarmModelVersionsCommand = deserializeAws_restJson1ListAlarmModelVersionsCommand;
const deserializeAws_restJson1ListAlarmModelVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1ListDetectorModelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDetectorModelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        detectorModelSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.detectorModelSummaries !== undefined && data.detectorModelSummaries !== null) {
        contents.detectorModelSummaries = deserializeAws_restJson1DetectorModelSummaries(data.detectorModelSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDetectorModelsCommand = deserializeAws_restJson1ListDetectorModelsCommand;
const deserializeAws_restJson1ListDetectorModelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1ListDetectorModelVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDetectorModelVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        detectorModelVersionSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.detectorModelVersionSummaries !== undefined && data.detectorModelVersionSummaries !== null) {
        contents.detectorModelVersionSummaries = deserializeAws_restJson1DetectorModelVersionSummaries(data.detectorModelVersionSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDetectorModelVersionsCommand = deserializeAws_restJson1ListDetectorModelVersionsCommand;
const deserializeAws_restJson1ListDetectorModelVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1ListInputRoutingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInputRoutingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        routedResources: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.routedResources !== undefined && data.routedResources !== null) {
        contents.routedResources = deserializeAws_restJson1RoutedResources(data.routedResources, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInputRoutingsCommand = deserializeAws_restJson1ListInputRoutingsCommand;
const deserializeAws_restJson1ListInputRoutingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1ListInputsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInputsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        inputSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.inputSummaries !== undefined && data.inputSummaries !== null) {
        contents.inputSummaries = deserializeAws_restJson1InputSummaries(data.inputSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInputsCommand = deserializeAws_restJson1ListInputsCommand;
const deserializeAws_restJson1ListInputsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
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
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1PutLoggingOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutLoggingOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutLoggingOptionsCommand = deserializeAws_restJson1PutLoggingOptionsCommand;
const deserializeAws_restJson1PutLoggingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.iotevents#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartDetectorModelAnalysisCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartDetectorModelAnalysisCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        analysisId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.analysisId !== undefined && data.analysisId !== null) {
        contents.analysisId = data.analysisId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartDetectorModelAnalysisCommand = deserializeAws_restJson1StartDetectorModelAnalysisCommand;
const deserializeAws_restJson1StartDetectorModelAnalysisCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotevents#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotevents#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1UpdateAlarmModelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAlarmModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        alarmModelArn: undefined,
        alarmModelVersion: undefined,
        creationTime: undefined,
        lastUpdateTime: undefined,
        status: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAlarmModelCommand = deserializeAws_restJson1UpdateAlarmModelCommand;
const deserializeAws_restJson1UpdateAlarmModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1UpdateDetectorModelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDetectorModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        detectorModelConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.detectorModelConfiguration !== undefined && data.detectorModelConfiguration !== null) {
        contents.detectorModelConfiguration = deserializeAws_restJson1DetectorModelConfiguration(data.detectorModelConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDetectorModelCommand = deserializeAws_restJson1UpdateDetectorModelCommand;
const deserializeAws_restJson1UpdateDetectorModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1UpdateInputCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateInputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        inputConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.inputConfiguration !== undefined && data.inputConfiguration !== null) {
        contents.inputConfiguration = deserializeAws_restJson1InputConfiguration(data.inputConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateInputCommand = deserializeAws_restJson1UpdateInputCommand;
const deserializeAws_restJson1UpdateInputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotevents#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotevents#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.iotevents#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotevents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotevents#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotevents#ThrottlingException":
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
const deserializeAws_restJson1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalFailureException",
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
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
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
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
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
const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceArn: undefined,
        resourceId: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
    }
    return contents;
};
const deserializeAws_restJson1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceInUseException",
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
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
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
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
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
const deserializeAws_restJson1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnsupportedOperationException",
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
const serializeAws_restJson1AcknowledgeFlow = (input, context) => {
    return {
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    };
};
const serializeAws_restJson1Action = (input, context) => {
    return {
        ...(input.clearTimer !== undefined &&
            input.clearTimer !== null && { clearTimer: serializeAws_restJson1ClearTimerAction(input.clearTimer, context) }),
        ...(input.dynamoDB !== undefined &&
            input.dynamoDB !== null && { dynamoDB: serializeAws_restJson1DynamoDBAction(input.dynamoDB, context) }),
        ...(input.dynamoDBv2 !== undefined &&
            input.dynamoDBv2 !== null && { dynamoDBv2: serializeAws_restJson1DynamoDBv2Action(input.dynamoDBv2, context) }),
        ...(input.firehose !== undefined &&
            input.firehose !== null && { firehose: serializeAws_restJson1FirehoseAction(input.firehose, context) }),
        ...(input.iotEvents !== undefined &&
            input.iotEvents !== null && { iotEvents: serializeAws_restJson1IotEventsAction(input.iotEvents, context) }),
        ...(input.iotSiteWise !== undefined &&
            input.iotSiteWise !== null && {
            iotSiteWise: serializeAws_restJson1IotSiteWiseAction(input.iotSiteWise, context),
        }),
        ...(input.iotTopicPublish !== undefined &&
            input.iotTopicPublish !== null && {
            iotTopicPublish: serializeAws_restJson1IotTopicPublishAction(input.iotTopicPublish, context),
        }),
        ...(input.lambda !== undefined &&
            input.lambda !== null && { lambda: serializeAws_restJson1LambdaAction(input.lambda, context) }),
        ...(input.resetTimer !== undefined &&
            input.resetTimer !== null && { resetTimer: serializeAws_restJson1ResetTimerAction(input.resetTimer, context) }),
        ...(input.setTimer !== undefined &&
            input.setTimer !== null && { setTimer: serializeAws_restJson1SetTimerAction(input.setTimer, context) }),
        ...(input.setVariable !== undefined &&
            input.setVariable !== null && {
            setVariable: serializeAws_restJson1SetVariableAction(input.setVariable, context),
        }),
        ...(input.sns !== undefined &&
            input.sns !== null && { sns: serializeAws_restJson1SNSTopicPublishAction(input.sns, context) }),
        ...(input.sqs !== undefined && input.sqs !== null && { sqs: serializeAws_restJson1SqsAction(input.sqs, context) }),
    };
};
const serializeAws_restJson1Actions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Action(entry, context);
    });
};
const serializeAws_restJson1AlarmAction = (input, context) => {
    return {
        ...(input.dynamoDB !== undefined &&
            input.dynamoDB !== null && { dynamoDB: serializeAws_restJson1DynamoDBAction(input.dynamoDB, context) }),
        ...(input.dynamoDBv2 !== undefined &&
            input.dynamoDBv2 !== null && { dynamoDBv2: serializeAws_restJson1DynamoDBv2Action(input.dynamoDBv2, context) }),
        ...(input.firehose !== undefined &&
            input.firehose !== null && { firehose: serializeAws_restJson1FirehoseAction(input.firehose, context) }),
        ...(input.iotEvents !== undefined &&
            input.iotEvents !== null && { iotEvents: serializeAws_restJson1IotEventsAction(input.iotEvents, context) }),
        ...(input.iotSiteWise !== undefined &&
            input.iotSiteWise !== null && {
            iotSiteWise: serializeAws_restJson1IotSiteWiseAction(input.iotSiteWise, context),
        }),
        ...(input.iotTopicPublish !== undefined &&
            input.iotTopicPublish !== null && {
            iotTopicPublish: serializeAws_restJson1IotTopicPublishAction(input.iotTopicPublish, context),
        }),
        ...(input.lambda !== undefined &&
            input.lambda !== null && { lambda: serializeAws_restJson1LambdaAction(input.lambda, context) }),
        ...(input.sns !== undefined &&
            input.sns !== null && { sns: serializeAws_restJson1SNSTopicPublishAction(input.sns, context) }),
        ...(input.sqs !== undefined && input.sqs !== null && { sqs: serializeAws_restJson1SqsAction(input.sqs, context) }),
    };
};
const serializeAws_restJson1AlarmActions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AlarmAction(entry, context);
    });
};
const serializeAws_restJson1AlarmCapabilities = (input, context) => {
    return {
        ...(input.acknowledgeFlow !== undefined &&
            input.acknowledgeFlow !== null && {
            acknowledgeFlow: serializeAws_restJson1AcknowledgeFlow(input.acknowledgeFlow, context),
        }),
        ...(input.initializationConfiguration !== undefined &&
            input.initializationConfiguration !== null && {
            initializationConfiguration: serializeAws_restJson1InitializationConfiguration(input.initializationConfiguration, context),
        }),
    };
};
const serializeAws_restJson1AlarmEventActions = (input, context) => {
    return {
        ...(input.alarmActions !== undefined &&
            input.alarmActions !== null && { alarmActions: serializeAws_restJson1AlarmActions(input.alarmActions, context) }),
    };
};
const serializeAws_restJson1AlarmNotification = (input, context) => {
    return {
        ...(input.notificationActions !== undefined &&
            input.notificationActions !== null && {
            notificationActions: serializeAws_restJson1NotificationActions(input.notificationActions, context),
        }),
    };
};
const serializeAws_restJson1AlarmRule = (input, context) => {
    return {
        ...(input.simpleRule !== undefined &&
            input.simpleRule !== null && { simpleRule: serializeAws_restJson1SimpleRule(input.simpleRule, context) }),
    };
};
const serializeAws_restJson1AssetPropertyTimestamp = (input, context) => {
    return {
        ...(input.offsetInNanos !== undefined && input.offsetInNanos !== null && { offsetInNanos: input.offsetInNanos }),
        ...(input.timeInSeconds !== undefined && input.timeInSeconds !== null && { timeInSeconds: input.timeInSeconds }),
    };
};
const serializeAws_restJson1AssetPropertyValue = (input, context) => {
    return {
        ...(input.quality !== undefined && input.quality !== null && { quality: input.quality }),
        ...(input.timestamp !== undefined &&
            input.timestamp !== null && {
            timestamp: serializeAws_restJson1AssetPropertyTimestamp(input.timestamp, context),
        }),
        ...(input.value !== undefined &&
            input.value !== null && { value: serializeAws_restJson1AssetPropertyVariant(input.value, context) }),
    };
};
const serializeAws_restJson1AssetPropertyVariant = (input, context) => {
    return {
        ...(input.booleanValue !== undefined && input.booleanValue !== null && { booleanValue: input.booleanValue }),
        ...(input.doubleValue !== undefined && input.doubleValue !== null && { doubleValue: input.doubleValue }),
        ...(input.integerValue !== undefined && input.integerValue !== null && { integerValue: input.integerValue }),
        ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
    };
};
const serializeAws_restJson1Attribute = (input, context) => {
    return {
        ...(input.jsonPath !== undefined && input.jsonPath !== null && { jsonPath: input.jsonPath }),
    };
};
const serializeAws_restJson1Attributes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Attribute(entry, context);
    });
};
const serializeAws_restJson1ClearTimerAction = (input, context) => {
    return {
        ...(input.timerName !== undefined && input.timerName !== null && { timerName: input.timerName }),
    };
};
const serializeAws_restJson1DetectorDebugOption = (input, context) => {
    return {
        ...(input.detectorModelName !== undefined &&
            input.detectorModelName !== null && { detectorModelName: input.detectorModelName }),
        ...(input.keyValue !== undefined && input.keyValue !== null && { keyValue: input.keyValue }),
    };
};
const serializeAws_restJson1DetectorDebugOptions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DetectorDebugOption(entry, context);
    });
};
const serializeAws_restJson1DetectorModelDefinition = (input, context) => {
    return {
        ...(input.initialStateName !== undefined &&
            input.initialStateName !== null && { initialStateName: input.initialStateName }),
        ...(input.states !== undefined &&
            input.states !== null && { states: serializeAws_restJson1States(input.states, context) }),
    };
};
const serializeAws_restJson1DynamoDBAction = (input, context) => {
    return {
        ...(input.hashKeyField !== undefined && input.hashKeyField !== null && { hashKeyField: input.hashKeyField }),
        ...(input.hashKeyType !== undefined && input.hashKeyType !== null && { hashKeyType: input.hashKeyType }),
        ...(input.hashKeyValue !== undefined && input.hashKeyValue !== null && { hashKeyValue: input.hashKeyValue }),
        ...(input.operation !== undefined && input.operation !== null && { operation: input.operation }),
        ...(input.payload !== undefined &&
            input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
        ...(input.payloadField !== undefined && input.payloadField !== null && { payloadField: input.payloadField }),
        ...(input.rangeKeyField !== undefined && input.rangeKeyField !== null && { rangeKeyField: input.rangeKeyField }),
        ...(input.rangeKeyType !== undefined && input.rangeKeyType !== null && { rangeKeyType: input.rangeKeyType }),
        ...(input.rangeKeyValue !== undefined && input.rangeKeyValue !== null && { rangeKeyValue: input.rangeKeyValue }),
        ...(input.tableName !== undefined && input.tableName !== null && { tableName: input.tableName }),
    };
};
const serializeAws_restJson1DynamoDBv2Action = (input, context) => {
    return {
        ...(input.payload !== undefined &&
            input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
        ...(input.tableName !== undefined && input.tableName !== null && { tableName: input.tableName }),
    };
};
const serializeAws_restJson1EmailConfiguration = (input, context) => {
    return {
        ...(input.content !== undefined &&
            input.content !== null && { content: serializeAws_restJson1EmailContent(input.content, context) }),
        ...(input.from !== undefined && input.from !== null && { from: input.from }),
        ...(input.recipients !== undefined &&
            input.recipients !== null && { recipients: serializeAws_restJson1EmailRecipients(input.recipients, context) }),
    };
};
const serializeAws_restJson1EmailConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1EmailConfiguration(entry, context);
    });
};
const serializeAws_restJson1EmailContent = (input, context) => {
    return {
        ...(input.additionalMessage !== undefined &&
            input.additionalMessage !== null && { additionalMessage: input.additionalMessage }),
        ...(input.subject !== undefined && input.subject !== null && { subject: input.subject }),
    };
};
const serializeAws_restJson1EmailRecipients = (input, context) => {
    return {
        ...(input.to !== undefined &&
            input.to !== null && { to: serializeAws_restJson1RecipientDetails(input.to, context) }),
    };
};
const serializeAws_restJson1Event = (input, context) => {
    return {
        ...(input.actions !== undefined &&
            input.actions !== null && { actions: serializeAws_restJson1Actions(input.actions, context) }),
        ...(input.condition !== undefined && input.condition !== null && { condition: input.condition }),
        ...(input.eventName !== undefined && input.eventName !== null && { eventName: input.eventName }),
    };
};
const serializeAws_restJson1Events = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Event(entry, context);
    });
};
const serializeAws_restJson1FirehoseAction = (input, context) => {
    return {
        ...(input.deliveryStreamName !== undefined &&
            input.deliveryStreamName !== null && { deliveryStreamName: input.deliveryStreamName }),
        ...(input.payload !== undefined &&
            input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
        ...(input.separator !== undefined && input.separator !== null && { separator: input.separator }),
    };
};
const serializeAws_restJson1InitializationConfiguration = (input, context) => {
    return {
        ...(input.disabledOnInitialization !== undefined &&
            input.disabledOnInitialization !== null && { disabledOnInitialization: input.disabledOnInitialization }),
    };
};
const serializeAws_restJson1InputDefinition = (input, context) => {
    return {
        ...(input.attributes !== undefined &&
            input.attributes !== null && { attributes: serializeAws_restJson1Attributes(input.attributes, context) }),
    };
};
const serializeAws_restJson1InputIdentifier = (input, context) => {
    return {
        ...(input.iotEventsInputIdentifier !== undefined &&
            input.iotEventsInputIdentifier !== null && {
            iotEventsInputIdentifier: serializeAws_restJson1IotEventsInputIdentifier(input.iotEventsInputIdentifier, context),
        }),
        ...(input.iotSiteWiseInputIdentifier !== undefined &&
            input.iotSiteWiseInputIdentifier !== null && {
            iotSiteWiseInputIdentifier: serializeAws_restJson1IotSiteWiseInputIdentifier(input.iotSiteWiseInputIdentifier, context),
        }),
    };
};
const serializeAws_restJson1IotEventsAction = (input, context) => {
    return {
        ...(input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName }),
        ...(input.payload !== undefined &&
            input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    };
};
const serializeAws_restJson1IotEventsInputIdentifier = (input, context) => {
    return {
        ...(input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName }),
    };
};
const serializeAws_restJson1IotSiteWiseAction = (input, context) => {
    return {
        ...(input.assetId !== undefined && input.assetId !== null && { assetId: input.assetId }),
        ...(input.entryId !== undefined && input.entryId !== null && { entryId: input.entryId }),
        ...(input.propertyAlias !== undefined && input.propertyAlias !== null && { propertyAlias: input.propertyAlias }),
        ...(input.propertyId !== undefined && input.propertyId !== null && { propertyId: input.propertyId }),
        ...(input.propertyValue !== undefined &&
            input.propertyValue !== null && {
            propertyValue: serializeAws_restJson1AssetPropertyValue(input.propertyValue, context),
        }),
    };
};
const serializeAws_restJson1IotSiteWiseAssetModelPropertyIdentifier = (input, context) => {
    return {
        ...(input.assetModelId !== undefined && input.assetModelId !== null && { assetModelId: input.assetModelId }),
        ...(input.propertyId !== undefined && input.propertyId !== null && { propertyId: input.propertyId }),
    };
};
const serializeAws_restJson1IotSiteWiseInputIdentifier = (input, context) => {
    return {
        ...(input.iotSiteWiseAssetModelPropertyIdentifier !== undefined &&
            input.iotSiteWiseAssetModelPropertyIdentifier !== null && {
            iotSiteWiseAssetModelPropertyIdentifier: serializeAws_restJson1IotSiteWiseAssetModelPropertyIdentifier(input.iotSiteWiseAssetModelPropertyIdentifier, context),
        }),
    };
};
const serializeAws_restJson1IotTopicPublishAction = (input, context) => {
    return {
        ...(input.mqttTopic !== undefined && input.mqttTopic !== null && { mqttTopic: input.mqttTopic }),
        ...(input.payload !== undefined &&
            input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    };
};
const serializeAws_restJson1LambdaAction = (input, context) => {
    return {
        ...(input.functionArn !== undefined && input.functionArn !== null && { functionArn: input.functionArn }),
        ...(input.payload !== undefined &&
            input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    };
};
const serializeAws_restJson1LoggingOptions = (input, context) => {
    return {
        ...(input.detectorDebugOptions !== undefined &&
            input.detectorDebugOptions !== null && {
            detectorDebugOptions: serializeAws_restJson1DetectorDebugOptions(input.detectorDebugOptions, context),
        }),
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
        ...(input.level !== undefined && input.level !== null && { level: input.level }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_restJson1NotificationAction = (input, context) => {
    return {
        ...(input.action !== undefined &&
            input.action !== null && { action: serializeAws_restJson1NotificationTargetActions(input.action, context) }),
        ...(input.emailConfigurations !== undefined &&
            input.emailConfigurations !== null && {
            emailConfigurations: serializeAws_restJson1EmailConfigurations(input.emailConfigurations, context),
        }),
        ...(input.smsConfigurations !== undefined &&
            input.smsConfigurations !== null && {
            smsConfigurations: serializeAws_restJson1SMSConfigurations(input.smsConfigurations, context),
        }),
    };
};
const serializeAws_restJson1NotificationActions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1NotificationAction(entry, context);
    });
};
const serializeAws_restJson1NotificationTargetActions = (input, context) => {
    return {
        ...(input.lambdaAction !== undefined &&
            input.lambdaAction !== null && { lambdaAction: serializeAws_restJson1LambdaAction(input.lambdaAction, context) }),
    };
};
const serializeAws_restJson1OnEnterLifecycle = (input, context) => {
    return {
        ...(input.events !== undefined &&
            input.events !== null && { events: serializeAws_restJson1Events(input.events, context) }),
    };
};
const serializeAws_restJson1OnExitLifecycle = (input, context) => {
    return {
        ...(input.events !== undefined &&
            input.events !== null && { events: serializeAws_restJson1Events(input.events, context) }),
    };
};
const serializeAws_restJson1OnInputLifecycle = (input, context) => {
    return {
        ...(input.events !== undefined &&
            input.events !== null && { events: serializeAws_restJson1Events(input.events, context) }),
        ...(input.transitionEvents !== undefined &&
            input.transitionEvents !== null && {
            transitionEvents: serializeAws_restJson1TransitionEvents(input.transitionEvents, context),
        }),
    };
};
const serializeAws_restJson1Payload = (input, context) => {
    return {
        ...(input.contentExpression !== undefined &&
            input.contentExpression !== null && { contentExpression: input.contentExpression }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_restJson1RecipientDetail = (input, context) => {
    return {
        ...(input.ssoIdentity !== undefined &&
            input.ssoIdentity !== null && { ssoIdentity: serializeAws_restJson1SSOIdentity(input.ssoIdentity, context) }),
    };
};
const serializeAws_restJson1RecipientDetails = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RecipientDetail(entry, context);
    });
};
const serializeAws_restJson1ResetTimerAction = (input, context) => {
    return {
        ...(input.timerName !== undefined && input.timerName !== null && { timerName: input.timerName }),
    };
};
const serializeAws_restJson1SetTimerAction = (input, context) => {
    return {
        ...(input.durationExpression !== undefined &&
            input.durationExpression !== null && { durationExpression: input.durationExpression }),
        ...(input.seconds !== undefined && input.seconds !== null && { seconds: input.seconds }),
        ...(input.timerName !== undefined && input.timerName !== null && { timerName: input.timerName }),
    };
};
const serializeAws_restJson1SetVariableAction = (input, context) => {
    return {
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
        ...(input.variableName !== undefined && input.variableName !== null && { variableName: input.variableName }),
    };
};
const serializeAws_restJson1SimpleRule = (input, context) => {
    return {
        ...(input.comparisonOperator !== undefined &&
            input.comparisonOperator !== null && { comparisonOperator: input.comparisonOperator }),
        ...(input.inputProperty !== undefined && input.inputProperty !== null && { inputProperty: input.inputProperty }),
        ...(input.threshold !== undefined && input.threshold !== null && { threshold: input.threshold }),
    };
};
const serializeAws_restJson1SMSConfiguration = (input, context) => {
    return {
        ...(input.additionalMessage !== undefined &&
            input.additionalMessage !== null && { additionalMessage: input.additionalMessage }),
        ...(input.recipients !== undefined &&
            input.recipients !== null && { recipients: serializeAws_restJson1RecipientDetails(input.recipients, context) }),
        ...(input.senderId !== undefined && input.senderId !== null && { senderId: input.senderId }),
    };
};
const serializeAws_restJson1SMSConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SMSConfiguration(entry, context);
    });
};
const serializeAws_restJson1SNSTopicPublishAction = (input, context) => {
    return {
        ...(input.payload !== undefined &&
            input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
        ...(input.targetArn !== undefined && input.targetArn !== null && { targetArn: input.targetArn }),
    };
};
const serializeAws_restJson1SqsAction = (input, context) => {
    return {
        ...(input.payload !== undefined &&
            input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
        ...(input.queueUrl !== undefined && input.queueUrl !== null && { queueUrl: input.queueUrl }),
        ...(input.useBase64 !== undefined && input.useBase64 !== null && { useBase64: input.useBase64 }),
    };
};
const serializeAws_restJson1SSOIdentity = (input, context) => {
    return {
        ...(input.identityStoreId !== undefined &&
            input.identityStoreId !== null && { identityStoreId: input.identityStoreId }),
        ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
    };
};
const serializeAws_restJson1State = (input, context) => {
    return {
        ...(input.onEnter !== undefined &&
            input.onEnter !== null && { onEnter: serializeAws_restJson1OnEnterLifecycle(input.onEnter, context) }),
        ...(input.onExit !== undefined &&
            input.onExit !== null && { onExit: serializeAws_restJson1OnExitLifecycle(input.onExit, context) }),
        ...(input.onInput !== undefined &&
            input.onInput !== null && { onInput: serializeAws_restJson1OnInputLifecycle(input.onInput, context) }),
        ...(input.stateName !== undefined && input.stateName !== null && { stateName: input.stateName }),
    };
};
const serializeAws_restJson1States = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1State(entry, context);
    });
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1TransitionEvent = (input, context) => {
    return {
        ...(input.actions !== undefined &&
            input.actions !== null && { actions: serializeAws_restJson1Actions(input.actions, context) }),
        ...(input.condition !== undefined && input.condition !== null && { condition: input.condition }),
        ...(input.eventName !== undefined && input.eventName !== null && { eventName: input.eventName }),
        ...(input.nextState !== undefined && input.nextState !== null && { nextState: input.nextState }),
    };
};
const serializeAws_restJson1TransitionEvents = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TransitionEvent(entry, context);
    });
};
const deserializeAws_restJson1AcknowledgeFlow = (output, context) => {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
const deserializeAws_restJson1Action = (output, context) => {
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
const deserializeAws_restJson1Actions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Action(entry, context);
    });
};
const deserializeAws_restJson1AlarmAction = (output, context) => {
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
const deserializeAws_restJson1AlarmActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AlarmAction(entry, context);
    });
};
const deserializeAws_restJson1AlarmCapabilities = (output, context) => {
    return {
        acknowledgeFlow: output.acknowledgeFlow !== undefined && output.acknowledgeFlow !== null
            ? deserializeAws_restJson1AcknowledgeFlow(output.acknowledgeFlow, context)
            : undefined,
        initializationConfiguration: output.initializationConfiguration !== undefined && output.initializationConfiguration !== null
            ? deserializeAws_restJson1InitializationConfiguration(output.initializationConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1AlarmEventActions = (output, context) => {
    return {
        alarmActions: output.alarmActions !== undefined && output.alarmActions !== null
            ? deserializeAws_restJson1AlarmActions(output.alarmActions, context)
            : undefined,
    };
};
const deserializeAws_restJson1AlarmModelSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AlarmModelSummary(entry, context);
    });
};
const deserializeAws_restJson1AlarmModelSummary = (output, context) => {
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
const deserializeAws_restJson1AlarmModelVersionSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AlarmModelVersionSummary(entry, context);
    });
};
const deserializeAws_restJson1AlarmModelVersionSummary = (output, context) => {
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
const deserializeAws_restJson1AlarmNotification = (output, context) => {
    return {
        notificationActions: output.notificationActions !== undefined && output.notificationActions !== null
            ? deserializeAws_restJson1NotificationActions(output.notificationActions, context)
            : undefined,
    };
};
const deserializeAws_restJson1AlarmRule = (output, context) => {
    return {
        simpleRule: output.simpleRule !== undefined && output.simpleRule !== null
            ? deserializeAws_restJson1SimpleRule(output.simpleRule, context)
            : undefined,
    };
};
const deserializeAws_restJson1AnalysisResult = (output, context) => {
    return {
        level: output.level !== undefined && output.level !== null ? output.level : undefined,
        locations: output.locations !== undefined && output.locations !== null
            ? deserializeAws_restJson1AnalysisResultLocations(output.locations, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1AnalysisResultLocation = (output, context) => {
    return {
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
    };
};
const deserializeAws_restJson1AnalysisResultLocations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnalysisResultLocation(entry, context);
    });
};
const deserializeAws_restJson1AnalysisResults = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnalysisResult(entry, context);
    });
};
const deserializeAws_restJson1AssetPropertyTimestamp = (output, context) => {
    return {
        offsetInNanos: output.offsetInNanos !== undefined && output.offsetInNanos !== null ? output.offsetInNanos : undefined,
        timeInSeconds: output.timeInSeconds !== undefined && output.timeInSeconds !== null ? output.timeInSeconds : undefined,
    };
};
const deserializeAws_restJson1AssetPropertyValue = (output, context) => {
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
const deserializeAws_restJson1AssetPropertyVariant = (output, context) => {
    return {
        booleanValue: output.booleanValue !== undefined && output.booleanValue !== null ? output.booleanValue : undefined,
        doubleValue: output.doubleValue !== undefined && output.doubleValue !== null ? output.doubleValue : undefined,
        integerValue: output.integerValue !== undefined && output.integerValue !== null ? output.integerValue : undefined,
        stringValue: output.stringValue !== undefined && output.stringValue !== null ? output.stringValue : undefined,
    };
};
const deserializeAws_restJson1Attribute = (output, context) => {
    return {
        jsonPath: output.jsonPath !== undefined && output.jsonPath !== null ? output.jsonPath : undefined,
    };
};
const deserializeAws_restJson1Attributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Attribute(entry, context);
    });
};
const deserializeAws_restJson1ClearTimerAction = (output, context) => {
    return {
        timerName: output.timerName !== undefined && output.timerName !== null ? output.timerName : undefined,
    };
};
const deserializeAws_restJson1DetectorDebugOption = (output, context) => {
    return {
        detectorModelName: output.detectorModelName !== undefined && output.detectorModelName !== null
            ? output.detectorModelName
            : undefined,
        keyValue: output.keyValue !== undefined && output.keyValue !== null ? output.keyValue : undefined,
    };
};
const deserializeAws_restJson1DetectorDebugOptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DetectorDebugOption(entry, context);
    });
};
const deserializeAws_restJson1DetectorModel = (output, context) => {
    return {
        detectorModelConfiguration: output.detectorModelConfiguration !== undefined && output.detectorModelConfiguration !== null
            ? deserializeAws_restJson1DetectorModelConfiguration(output.detectorModelConfiguration, context)
            : undefined,
        detectorModelDefinition: output.detectorModelDefinition !== undefined && output.detectorModelDefinition !== null
            ? deserializeAws_restJson1DetectorModelDefinition(output.detectorModelDefinition, context)
            : undefined,
    };
};
const deserializeAws_restJson1DetectorModelConfiguration = (output, context) => {
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
const deserializeAws_restJson1DetectorModelDefinition = (output, context) => {
    return {
        initialStateName: output.initialStateName !== undefined && output.initialStateName !== null ? output.initialStateName : undefined,
        states: output.states !== undefined && output.states !== null
            ? deserializeAws_restJson1States(output.states, context)
            : undefined,
    };
};
const deserializeAws_restJson1DetectorModelSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DetectorModelSummary(entry, context);
    });
};
const deserializeAws_restJson1DetectorModelSummary = (output, context) => {
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
const deserializeAws_restJson1DetectorModelVersionSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DetectorModelVersionSummary(entry, context);
    });
};
const deserializeAws_restJson1DetectorModelVersionSummary = (output, context) => {
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
const deserializeAws_restJson1DynamoDBAction = (output, context) => {
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
const deserializeAws_restJson1DynamoDBv2Action = (output, context) => {
    return {
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
        tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
    };
};
const deserializeAws_restJson1EmailConfiguration = (output, context) => {
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
const deserializeAws_restJson1EmailConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EmailConfiguration(entry, context);
    });
};
const deserializeAws_restJson1EmailContent = (output, context) => {
    return {
        additionalMessage: output.additionalMessage !== undefined && output.additionalMessage !== null
            ? output.additionalMessage
            : undefined,
        subject: output.subject !== undefined && output.subject !== null ? output.subject : undefined,
    };
};
const deserializeAws_restJson1EmailRecipients = (output, context) => {
    return {
        to: output.to !== undefined && output.to !== null
            ? deserializeAws_restJson1RecipientDetails(output.to, context)
            : undefined,
    };
};
const deserializeAws_restJson1Event = (output, context) => {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_restJson1Actions(output.actions, context)
            : undefined,
        condition: output.condition !== undefined && output.condition !== null ? output.condition : undefined,
        eventName: output.eventName !== undefined && output.eventName !== null ? output.eventName : undefined,
    };
};
const deserializeAws_restJson1Events = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Event(entry, context);
    });
};
const deserializeAws_restJson1FirehoseAction = (output, context) => {
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
const deserializeAws_restJson1InitializationConfiguration = (output, context) => {
    return {
        disabledOnInitialization: output.disabledOnInitialization !== undefined && output.disabledOnInitialization !== null
            ? output.disabledOnInitialization
            : undefined,
    };
};
const deserializeAws_restJson1Input = (output, context) => {
    return {
        inputConfiguration: output.inputConfiguration !== undefined && output.inputConfiguration !== null
            ? deserializeAws_restJson1InputConfiguration(output.inputConfiguration, context)
            : undefined,
        inputDefinition: output.inputDefinition !== undefined && output.inputDefinition !== null
            ? deserializeAws_restJson1InputDefinition(output.inputDefinition, context)
            : undefined,
    };
};
const deserializeAws_restJson1InputConfiguration = (output, context) => {
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
const deserializeAws_restJson1InputDefinition = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1Attributes(output.attributes, context)
            : undefined,
    };
};
const deserializeAws_restJson1InputSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputSummary(entry, context);
    });
};
const deserializeAws_restJson1InputSummary = (output, context) => {
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
const deserializeAws_restJson1IotEventsAction = (output, context) => {
    return {
        inputName: output.inputName !== undefined && output.inputName !== null ? output.inputName : undefined,
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
    };
};
const deserializeAws_restJson1IotSiteWiseAction = (output, context) => {
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
const deserializeAws_restJson1IotTopicPublishAction = (output, context) => {
    return {
        mqttTopic: output.mqttTopic !== undefined && output.mqttTopic !== null ? output.mqttTopic : undefined,
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
    };
};
const deserializeAws_restJson1LambdaAction = (output, context) => {
    return {
        functionArn: output.functionArn !== undefined && output.functionArn !== null ? output.functionArn : undefined,
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
    };
};
const deserializeAws_restJson1LoggingOptions = (output, context) => {
    return {
        detectorDebugOptions: output.detectorDebugOptions !== undefined && output.detectorDebugOptions !== null
            ? deserializeAws_restJson1DetectorDebugOptions(output.detectorDebugOptions, context)
            : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        level: output.level !== undefined && output.level !== null ? output.level : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_restJson1NotificationAction = (output, context) => {
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
const deserializeAws_restJson1NotificationActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NotificationAction(entry, context);
    });
};
const deserializeAws_restJson1NotificationTargetActions = (output, context) => {
    return {
        lambdaAction: output.lambdaAction !== undefined && output.lambdaAction !== null
            ? deserializeAws_restJson1LambdaAction(output.lambdaAction, context)
            : undefined,
    };
};
const deserializeAws_restJson1OnEnterLifecycle = (output, context) => {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_restJson1Events(output.events, context)
            : undefined,
    };
};
const deserializeAws_restJson1OnExitLifecycle = (output, context) => {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_restJson1Events(output.events, context)
            : undefined,
    };
};
const deserializeAws_restJson1OnInputLifecycle = (output, context) => {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_restJson1Events(output.events, context)
            : undefined,
        transitionEvents: output.transitionEvents !== undefined && output.transitionEvents !== null
            ? deserializeAws_restJson1TransitionEvents(output.transitionEvents, context)
            : undefined,
    };
};
const deserializeAws_restJson1Payload = (output, context) => {
    return {
        contentExpression: output.contentExpression !== undefined && output.contentExpression !== null
            ? output.contentExpression
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1RecipientDetail = (output, context) => {
    return {
        ssoIdentity: output.ssoIdentity !== undefined && output.ssoIdentity !== null
            ? deserializeAws_restJson1SSOIdentity(output.ssoIdentity, context)
            : undefined,
    };
};
const deserializeAws_restJson1RecipientDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecipientDetail(entry, context);
    });
};
const deserializeAws_restJson1ResetTimerAction = (output, context) => {
    return {
        timerName: output.timerName !== undefined && output.timerName !== null ? output.timerName : undefined,
    };
};
const deserializeAws_restJson1RoutedResource = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1RoutedResources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RoutedResource(entry, context);
    });
};
const deserializeAws_restJson1SetTimerAction = (output, context) => {
    return {
        durationExpression: output.durationExpression !== undefined && output.durationExpression !== null
            ? output.durationExpression
            : undefined,
        seconds: output.seconds !== undefined && output.seconds !== null ? output.seconds : undefined,
        timerName: output.timerName !== undefined && output.timerName !== null ? output.timerName : undefined,
    };
};
const deserializeAws_restJson1SetVariableAction = (output, context) => {
    return {
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
        variableName: output.variableName !== undefined && output.variableName !== null ? output.variableName : undefined,
    };
};
const deserializeAws_restJson1SimpleRule = (output, context) => {
    return {
        comparisonOperator: output.comparisonOperator !== undefined && output.comparisonOperator !== null
            ? output.comparisonOperator
            : undefined,
        inputProperty: output.inputProperty !== undefined && output.inputProperty !== null ? output.inputProperty : undefined,
        threshold: output.threshold !== undefined && output.threshold !== null ? output.threshold : undefined,
    };
};
const deserializeAws_restJson1SMSConfiguration = (output, context) => {
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
const deserializeAws_restJson1SMSConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SMSConfiguration(entry, context);
    });
};
const deserializeAws_restJson1SNSTopicPublishAction = (output, context) => {
    return {
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
        targetArn: output.targetArn !== undefined && output.targetArn !== null ? output.targetArn : undefined,
    };
};
const deserializeAws_restJson1SqsAction = (output, context) => {
    return {
        payload: output.payload !== undefined && output.payload !== null
            ? deserializeAws_restJson1Payload(output.payload, context)
            : undefined,
        queueUrl: output.queueUrl !== undefined && output.queueUrl !== null ? output.queueUrl : undefined,
        useBase64: output.useBase64 !== undefined && output.useBase64 !== null ? output.useBase64 : undefined,
    };
};
const deserializeAws_restJson1SSOIdentity = (output, context) => {
    return {
        identityStoreId: output.identityStoreId !== undefined && output.identityStoreId !== null ? output.identityStoreId : undefined,
        userId: output.userId !== undefined && output.userId !== null ? output.userId : undefined,
    };
};
const deserializeAws_restJson1State = (output, context) => {
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
const deserializeAws_restJson1States = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1State(entry, context);
    });
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1TransitionEvent = (output, context) => {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_restJson1Actions(output.actions, context)
            : undefined,
        condition: output.condition !== undefined && output.condition !== null ? output.condition : undefined,
        eventName: output.eventName !== undefined && output.eventName !== null ? output.eventName : undefined,
        nextState: output.nextState !== undefined && output.nextState !== null ? output.nextState : undefined,
    };
};
const deserializeAws_restJson1TransitionEvents = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TransitionEvent(entry, context);
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