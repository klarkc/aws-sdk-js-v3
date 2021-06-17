"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1RemovePermissionCommand = exports.serializeAws_restJson1RemoveLayerVersionPermissionCommand = exports.serializeAws_restJson1PutProvisionedConcurrencyConfigCommand = exports.serializeAws_restJson1PutFunctionEventInvokeConfigCommand = exports.serializeAws_restJson1PutFunctionConcurrencyCommand = exports.serializeAws_restJson1PutFunctionCodeSigningConfigCommand = exports.serializeAws_restJson1PublishVersionCommand = exports.serializeAws_restJson1PublishLayerVersionCommand = exports.serializeAws_restJson1ListVersionsByFunctionCommand = exports.serializeAws_restJson1ListTagsCommand = exports.serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = exports.serializeAws_restJson1ListLayerVersionsCommand = exports.serializeAws_restJson1ListLayersCommand = exports.serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand = exports.serializeAws_restJson1ListFunctionsCommand = exports.serializeAws_restJson1ListFunctionEventInvokeConfigsCommand = exports.serializeAws_restJson1ListEventSourceMappingsCommand = exports.serializeAws_restJson1ListCodeSigningConfigsCommand = exports.serializeAws_restJson1ListAliasesCommand = exports.serializeAws_restJson1InvokeAsyncCommand = exports.serializeAws_restJson1InvokeCommand = exports.serializeAws_restJson1GetProvisionedConcurrencyConfigCommand = exports.serializeAws_restJson1GetPolicyCommand = exports.serializeAws_restJson1GetLayerVersionPolicyCommand = exports.serializeAws_restJson1GetLayerVersionByArnCommand = exports.serializeAws_restJson1GetLayerVersionCommand = exports.serializeAws_restJson1GetFunctionEventInvokeConfigCommand = exports.serializeAws_restJson1GetFunctionConfigurationCommand = exports.serializeAws_restJson1GetFunctionConcurrencyCommand = exports.serializeAws_restJson1GetFunctionCodeSigningConfigCommand = exports.serializeAws_restJson1GetFunctionCommand = exports.serializeAws_restJson1GetEventSourceMappingCommand = exports.serializeAws_restJson1GetCodeSigningConfigCommand = exports.serializeAws_restJson1GetAliasCommand = exports.serializeAws_restJson1GetAccountSettingsCommand = exports.serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = exports.serializeAws_restJson1DeleteLayerVersionCommand = exports.serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = exports.serializeAws_restJson1DeleteFunctionConcurrencyCommand = exports.serializeAws_restJson1DeleteFunctionCodeSigningConfigCommand = exports.serializeAws_restJson1DeleteFunctionCommand = exports.serializeAws_restJson1DeleteEventSourceMappingCommand = exports.serializeAws_restJson1DeleteCodeSigningConfigCommand = exports.serializeAws_restJson1DeleteAliasCommand = exports.serializeAws_restJson1CreateFunctionCommand = exports.serializeAws_restJson1CreateEventSourceMappingCommand = exports.serializeAws_restJson1CreateCodeSigningConfigCommand = exports.serializeAws_restJson1CreateAliasCommand = exports.serializeAws_restJson1AddPermissionCommand = exports.serializeAws_restJson1AddLayerVersionPermissionCommand = void 0;
exports.deserializeAws_restJson1ListVersionsByFunctionCommand = exports.deserializeAws_restJson1ListTagsCommand = exports.deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = exports.deserializeAws_restJson1ListLayerVersionsCommand = exports.deserializeAws_restJson1ListLayersCommand = exports.deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand = exports.deserializeAws_restJson1ListFunctionsCommand = exports.deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand = exports.deserializeAws_restJson1ListEventSourceMappingsCommand = exports.deserializeAws_restJson1ListCodeSigningConfigsCommand = exports.deserializeAws_restJson1ListAliasesCommand = exports.deserializeAws_restJson1InvokeAsyncCommand = exports.deserializeAws_restJson1InvokeCommand = exports.deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand = exports.deserializeAws_restJson1GetPolicyCommand = exports.deserializeAws_restJson1GetLayerVersionPolicyCommand = exports.deserializeAws_restJson1GetLayerVersionByArnCommand = exports.deserializeAws_restJson1GetLayerVersionCommand = exports.deserializeAws_restJson1GetFunctionEventInvokeConfigCommand = exports.deserializeAws_restJson1GetFunctionConfigurationCommand = exports.deserializeAws_restJson1GetFunctionConcurrencyCommand = exports.deserializeAws_restJson1GetFunctionCodeSigningConfigCommand = exports.deserializeAws_restJson1GetFunctionCommand = exports.deserializeAws_restJson1GetEventSourceMappingCommand = exports.deserializeAws_restJson1GetCodeSigningConfigCommand = exports.deserializeAws_restJson1GetAliasCommand = exports.deserializeAws_restJson1GetAccountSettingsCommand = exports.deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = exports.deserializeAws_restJson1DeleteLayerVersionCommand = exports.deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = exports.deserializeAws_restJson1DeleteFunctionConcurrencyCommand = exports.deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommand = exports.deserializeAws_restJson1DeleteFunctionCommand = exports.deserializeAws_restJson1DeleteEventSourceMappingCommand = exports.deserializeAws_restJson1DeleteCodeSigningConfigCommand = exports.deserializeAws_restJson1DeleteAliasCommand = exports.deserializeAws_restJson1CreateFunctionCommand = exports.deserializeAws_restJson1CreateEventSourceMappingCommand = exports.deserializeAws_restJson1CreateCodeSigningConfigCommand = exports.deserializeAws_restJson1CreateAliasCommand = exports.deserializeAws_restJson1AddPermissionCommand = exports.deserializeAws_restJson1AddLayerVersionPermissionCommand = exports.serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = exports.serializeAws_restJson1UpdateFunctionConfigurationCommand = exports.serializeAws_restJson1UpdateFunctionCodeCommand = exports.serializeAws_restJson1UpdateEventSourceMappingCommand = exports.serializeAws_restJson1UpdateCodeSigningConfigCommand = exports.serializeAws_restJson1UpdateAliasCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = void 0;
exports.deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = exports.deserializeAws_restJson1UpdateFunctionConfigurationCommand = exports.deserializeAws_restJson1UpdateFunctionCodeCommand = exports.deserializeAws_restJson1UpdateEventSourceMappingCommand = exports.deserializeAws_restJson1UpdateCodeSigningConfigCommand = exports.deserializeAws_restJson1UpdateAliasCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1RemovePermissionCommand = exports.deserializeAws_restJson1RemoveLayerVersionPermissionCommand = exports.deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand = exports.deserializeAws_restJson1PutFunctionEventInvokeConfigCommand = exports.deserializeAws_restJson1PutFunctionConcurrencyCommand = exports.deserializeAws_restJson1PutFunctionCodeSigningConfigCommand = exports.deserializeAws_restJson1PublishVersionCommand = exports.deserializeAws_restJson1PublishLayerVersionCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AddLayerVersionPermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
    if (input.LayerName !== undefined) {
        const labelValue = input.LayerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LayerName.");
        }
        resolvedPath = resolvedPath.replace("{LayerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LayerName.");
    }
    if (input.VersionNumber !== undefined) {
        const labelValue = input.VersionNumber.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionNumber.");
        }
        resolvedPath = resolvedPath.replace("{VersionNumber}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionNumber.");
    }
    const query = {
        ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
    };
    let body;
    body = JSON.stringify({
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
        ...(input.StatementId !== undefined && input.StatementId !== null && { StatementId: input.StatementId }),
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
exports.serializeAws_restJson1AddLayerVersionPermissionCommand = serializeAws_restJson1AddLayerVersionPermissionCommand;
const serializeAws_restJson1AddPermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/policy";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
    };
    let body;
    body = JSON.stringify({
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.EventSourceToken !== undefined &&
            input.EventSourceToken !== null && { EventSourceToken: input.EventSourceToken }),
        ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
        ...(input.SourceAccount !== undefined && input.SourceAccount !== null && { SourceAccount: input.SourceAccount }),
        ...(input.SourceArn !== undefined && input.SourceArn !== null && { SourceArn: input.SourceArn }),
        ...(input.StatementId !== undefined && input.StatementId !== null && { StatementId: input.StatementId }),
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
exports.serializeAws_restJson1AddPermissionCommand = serializeAws_restJson1AddPermissionCommand;
const serializeAws_restJson1CreateAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FunctionVersion !== undefined &&
            input.FunctionVersion !== null && { FunctionVersion: input.FunctionVersion }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoutingConfig !== undefined &&
            input.RoutingConfig !== null && {
            RoutingConfig: serializeAws_restJson1AliasRoutingConfiguration(input.RoutingConfig, context),
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
exports.serializeAws_restJson1CreateAliasCommand = serializeAws_restJson1CreateAliasCommand;
const serializeAws_restJson1CreateCodeSigningConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2020-04-22/code-signing-configs";
    let body;
    body = JSON.stringify({
        ...(input.AllowedPublishers !== undefined &&
            input.AllowedPublishers !== null && {
            AllowedPublishers: serializeAws_restJson1AllowedPublishers(input.AllowedPublishers, context),
        }),
        ...(input.CodeSigningPolicies !== undefined &&
            input.CodeSigningPolicies !== null && {
            CodeSigningPolicies: serializeAws_restJson1CodeSigningPolicies(input.CodeSigningPolicies, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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
exports.serializeAws_restJson1CreateCodeSigningConfigCommand = serializeAws_restJson1CreateCodeSigningConfigCommand;
const serializeAws_restJson1CreateEventSourceMappingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-03-31/event-source-mappings";
    let body;
    body = JSON.stringify({
        ...(input.BatchSize !== undefined && input.BatchSize !== null && { BatchSize: input.BatchSize }),
        ...(input.BisectBatchOnFunctionError !== undefined &&
            input.BisectBatchOnFunctionError !== null && { BisectBatchOnFunctionError: input.BisectBatchOnFunctionError }),
        ...(input.DestinationConfig !== undefined &&
            input.DestinationConfig !== null && {
            DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
        }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.EventSourceArn !== undefined &&
            input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
        ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
        ...(input.FunctionResponseTypes !== undefined &&
            input.FunctionResponseTypes !== null && {
            FunctionResponseTypes: serializeAws_restJson1FunctionResponseTypeList(input.FunctionResponseTypes, context),
        }),
        ...(input.MaximumBatchingWindowInSeconds !== undefined &&
            input.MaximumBatchingWindowInSeconds !== null && {
            MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
        }),
        ...(input.MaximumRecordAgeInSeconds !== undefined &&
            input.MaximumRecordAgeInSeconds !== null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
        ...(input.MaximumRetryAttempts !== undefined &&
            input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
        ...(input.ParallelizationFactor !== undefined &&
            input.ParallelizationFactor !== null && { ParallelizationFactor: input.ParallelizationFactor }),
        ...(input.Queues !== undefined &&
            input.Queues !== null && { Queues: serializeAws_restJson1Queues(input.Queues, context) }),
        ...(input.SelfManagedEventSource !== undefined &&
            input.SelfManagedEventSource !== null && {
            SelfManagedEventSource: serializeAws_restJson1SelfManagedEventSource(input.SelfManagedEventSource, context),
        }),
        ...(input.SourceAccessConfigurations !== undefined &&
            input.SourceAccessConfigurations !== null && {
            SourceAccessConfigurations: serializeAws_restJson1SourceAccessConfigurations(input.SourceAccessConfigurations, context),
        }),
        ...(input.StartingPosition !== undefined &&
            input.StartingPosition !== null && { StartingPosition: input.StartingPosition }),
        ...(input.StartingPositionTimestamp !== undefined &&
            input.StartingPositionTimestamp !== null && {
            StartingPositionTimestamp: Math.round(input.StartingPositionTimestamp.getTime() / 1000),
        }),
        ...(input.Topics !== undefined &&
            input.Topics !== null && { Topics: serializeAws_restJson1Topics(input.Topics, context) }),
        ...(input.TumblingWindowInSeconds !== undefined &&
            input.TumblingWindowInSeconds !== null && { TumblingWindowInSeconds: input.TumblingWindowInSeconds }),
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
exports.serializeAws_restJson1CreateEventSourceMappingCommand = serializeAws_restJson1CreateEventSourceMappingCommand;
const serializeAws_restJson1CreateFunctionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-03-31/functions";
    let body;
    body = JSON.stringify({
        ...(input.Code !== undefined &&
            input.Code !== null && { Code: serializeAws_restJson1FunctionCode(input.Code, context) }),
        ...(input.CodeSigningConfigArn !== undefined &&
            input.CodeSigningConfigArn !== null && { CodeSigningConfigArn: input.CodeSigningConfigArn }),
        ...(input.DeadLetterConfig !== undefined &&
            input.DeadLetterConfig !== null && {
            DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(input.DeadLetterConfig, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Environment !== undefined &&
            input.Environment !== null && { Environment: serializeAws_restJson1Environment(input.Environment, context) }),
        ...(input.FileSystemConfigs !== undefined &&
            input.FileSystemConfigs !== null && {
            FileSystemConfigs: serializeAws_restJson1FileSystemConfigList(input.FileSystemConfigs, context),
        }),
        ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
        ...(input.Handler !== undefined && input.Handler !== null && { Handler: input.Handler }),
        ...(input.ImageConfig !== undefined &&
            input.ImageConfig !== null && { ImageConfig: serializeAws_restJson1ImageConfig(input.ImageConfig, context) }),
        ...(input.KMSKeyArn !== undefined && input.KMSKeyArn !== null && { KMSKeyArn: input.KMSKeyArn }),
        ...(input.Layers !== undefined &&
            input.Layers !== null && { Layers: serializeAws_restJson1LayerList(input.Layers, context) }),
        ...(input.MemorySize !== undefined && input.MemorySize !== null && { MemorySize: input.MemorySize }),
        ...(input.PackageType !== undefined && input.PackageType !== null && { PackageType: input.PackageType }),
        ...(input.Publish !== undefined && input.Publish !== null && { Publish: input.Publish }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.Runtime !== undefined && input.Runtime !== null && { Runtime: input.Runtime }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
        ...(input.TracingConfig !== undefined &&
            input.TracingConfig !== null && {
            TracingConfig: serializeAws_restJson1TracingConfig(input.TracingConfig, context),
        }),
        ...(input.VpcConfig !== undefined &&
            input.VpcConfig !== null && { VpcConfig: serializeAws_restJson1VpcConfig(input.VpcConfig, context) }),
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
exports.serializeAws_restJson1CreateFunctionCommand = serializeAws_restJson1CreateFunctionCommand;
const serializeAws_restJson1DeleteAliasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
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
exports.serializeAws_restJson1DeleteAliasCommand = serializeAws_restJson1DeleteAliasCommand;
const serializeAws_restJson1DeleteCodeSigningConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
    if (input.CodeSigningConfigArn !== undefined) {
        const labelValue = input.CodeSigningConfigArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
        }
        resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
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
exports.serializeAws_restJson1DeleteCodeSigningConfigCommand = serializeAws_restJson1DeleteCodeSigningConfigCommand;
const serializeAws_restJson1DeleteEventSourceMappingCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/event-source-mappings/{UUID}";
    if (input.UUID !== undefined) {
        const labelValue = input.UUID;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UUID.");
        }
        resolvedPath = resolvedPath.replace("{UUID}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UUID.");
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
exports.serializeAws_restJson1DeleteEventSourceMappingCommand = serializeAws_restJson1DeleteEventSourceMappingCommand;
const serializeAws_restJson1DeleteFunctionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/functions/{FunctionName}";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
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
exports.serializeAws_restJson1DeleteFunctionCommand = serializeAws_restJson1DeleteFunctionCommand;
const serializeAws_restJson1DeleteFunctionCodeSigningConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-06-30/functions/{FunctionName}/code-signing-config";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
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
exports.serializeAws_restJson1DeleteFunctionCodeSigningConfigCommand = serializeAws_restJson1DeleteFunctionCodeSigningConfigCommand;
const serializeAws_restJson1DeleteFunctionConcurrencyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2017-10-31/functions/{FunctionName}/concurrency";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
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
exports.serializeAws_restJson1DeleteFunctionConcurrencyCommand = serializeAws_restJson1DeleteFunctionConcurrencyCommand;
const serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
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
exports.serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand;
const serializeAws_restJson1DeleteLayerVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
    if (input.LayerName !== undefined) {
        const labelValue = input.LayerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LayerName.");
        }
        resolvedPath = resolvedPath.replace("{LayerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LayerName.");
    }
    if (input.VersionNumber !== undefined) {
        const labelValue = input.VersionNumber.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionNumber.");
        }
        resolvedPath = resolvedPath.replace("{VersionNumber}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionNumber.");
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
exports.serializeAws_restJson1DeleteLayerVersionCommand = serializeAws_restJson1DeleteLayerVersionCommand;
const serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
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
exports.serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand;
const serializeAws_restJson1GetAccountSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2016-08-19/account-settings";
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
exports.serializeAws_restJson1GetAccountSettingsCommand = serializeAws_restJson1GetAccountSettingsCommand;
const serializeAws_restJson1GetAliasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
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
exports.serializeAws_restJson1GetAliasCommand = serializeAws_restJson1GetAliasCommand;
const serializeAws_restJson1GetCodeSigningConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
    if (input.CodeSigningConfigArn !== undefined) {
        const labelValue = input.CodeSigningConfigArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
        }
        resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
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
exports.serializeAws_restJson1GetCodeSigningConfigCommand = serializeAws_restJson1GetCodeSigningConfigCommand;
const serializeAws_restJson1GetEventSourceMappingCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/event-source-mappings/{UUID}";
    if (input.UUID !== undefined) {
        const labelValue = input.UUID;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UUID.");
        }
        resolvedPath = resolvedPath.replace("{UUID}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UUID.");
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
exports.serializeAws_restJson1GetEventSourceMappingCommand = serializeAws_restJson1GetEventSourceMappingCommand;
const serializeAws_restJson1GetFunctionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/functions/{FunctionName}";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
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
exports.serializeAws_restJson1GetFunctionCommand = serializeAws_restJson1GetFunctionCommand;
const serializeAws_restJson1GetFunctionCodeSigningConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-06-30/functions/{FunctionName}/code-signing-config";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
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
exports.serializeAws_restJson1GetFunctionCodeSigningConfigCommand = serializeAws_restJson1GetFunctionCodeSigningConfigCommand;
const serializeAws_restJson1GetFunctionConcurrencyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2019-09-30/functions/{FunctionName}/concurrency";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
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
exports.serializeAws_restJson1GetFunctionConcurrencyCommand = serializeAws_restJson1GetFunctionConcurrencyCommand;
const serializeAws_restJson1GetFunctionConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/configuration";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
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
exports.serializeAws_restJson1GetFunctionConfigurationCommand = serializeAws_restJson1GetFunctionConfigurationCommand;
const serializeAws_restJson1GetFunctionEventInvokeConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
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
exports.serializeAws_restJson1GetFunctionEventInvokeConfigCommand = serializeAws_restJson1GetFunctionEventInvokeConfigCommand;
const serializeAws_restJson1GetLayerVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
    if (input.LayerName !== undefined) {
        const labelValue = input.LayerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LayerName.");
        }
        resolvedPath = resolvedPath.replace("{LayerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LayerName.");
    }
    if (input.VersionNumber !== undefined) {
        const labelValue = input.VersionNumber.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionNumber.");
        }
        resolvedPath = resolvedPath.replace("{VersionNumber}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionNumber.");
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
exports.serializeAws_restJson1GetLayerVersionCommand = serializeAws_restJson1GetLayerVersionCommand;
const serializeAws_restJson1GetLayerVersionByArnCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2018-10-31/layers";
    const query = {
        find: "LayerVersion",
        ...(input.Arn !== undefined && { Arn: input.Arn }),
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
exports.serializeAws_restJson1GetLayerVersionByArnCommand = serializeAws_restJson1GetLayerVersionByArnCommand;
const serializeAws_restJson1GetLayerVersionPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
    if (input.LayerName !== undefined) {
        const labelValue = input.LayerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LayerName.");
        }
        resolvedPath = resolvedPath.replace("{LayerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LayerName.");
    }
    if (input.VersionNumber !== undefined) {
        const labelValue = input.VersionNumber.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionNumber.");
        }
        resolvedPath = resolvedPath.replace("{VersionNumber}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionNumber.");
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
exports.serializeAws_restJson1GetLayerVersionPolicyCommand = serializeAws_restJson1GetLayerVersionPolicyCommand;
const serializeAws_restJson1GetPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/policy";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
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
exports.serializeAws_restJson1GetPolicyCommand = serializeAws_restJson1GetPolicyCommand;
const serializeAws_restJson1GetProvisionedConcurrencyConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
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
exports.serializeAws_restJson1GetProvisionedConcurrencyConfigCommand = serializeAws_restJson1GetProvisionedConcurrencyConfigCommand;
const serializeAws_restJson1InvokeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
        ...(isSerializableHeaderValue(input.InvocationType) && { "x-amz-invocation-type": input.InvocationType }),
        ...(isSerializableHeaderValue(input.LogType) && { "x-amz-log-type": input.LogType }),
        ...(isSerializableHeaderValue(input.ClientContext) && { "x-amz-client-context": input.ClientContext }),
    };
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/invocations";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
    };
    let body;
    if (input.Payload !== undefined) {
        body = input.Payload;
    }
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
exports.serializeAws_restJson1InvokeCommand = serializeAws_restJson1InvokeCommand;
const serializeAws_restJson1InvokeAsyncCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
    };
    let resolvedPath = "/2014-11-13/functions/{FunctionName}/invoke-async";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    let body;
    if (input.InvokeArgs !== undefined) {
        body = input.InvokeArgs;
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
exports.serializeAws_restJson1InvokeAsyncCommand = serializeAws_restJson1InvokeAsyncCommand;
const serializeAws_restJson1ListAliasesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.FunctionVersion !== undefined && { FunctionVersion: input.FunctionVersion }),
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restJson1ListAliasesCommand = serializeAws_restJson1ListAliasesCommand;
const serializeAws_restJson1ListCodeSigningConfigsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-04-22/code-signing-configs";
    const query = {
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restJson1ListCodeSigningConfigsCommand = serializeAws_restJson1ListCodeSigningConfigsCommand;
const serializeAws_restJson1ListEventSourceMappingsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/event-source-mappings";
    const query = {
        ...(input.EventSourceArn !== undefined && { EventSourceArn: input.EventSourceArn }),
        ...(input.FunctionName !== undefined && { FunctionName: input.FunctionName }),
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restJson1ListEventSourceMappingsCommand = serializeAws_restJson1ListEventSourceMappingsCommand;
const serializeAws_restJson1ListFunctionEventInvokeConfigsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config/list";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restJson1ListFunctionEventInvokeConfigsCommand = serializeAws_restJson1ListFunctionEventInvokeConfigsCommand;
const serializeAws_restJson1ListFunctionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/functions";
    const query = {
        ...(input.MasterRegion !== undefined && { MasterRegion: input.MasterRegion }),
        ...(input.FunctionVersion !== undefined && { FunctionVersion: input.FunctionVersion }),
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restJson1ListFunctionsCommand = serializeAws_restJson1ListFunctionsCommand;
const serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions";
    if (input.CodeSigningConfigArn !== undefined) {
        const labelValue = input.CodeSigningConfigArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
        }
        resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
    }
    const query = {
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand = serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand;
const serializeAws_restJson1ListLayersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2018-10-31/layers";
    const query = {
        ...(input.CompatibleRuntime !== undefined && { CompatibleRuntime: input.CompatibleRuntime }),
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restJson1ListLayersCommand = serializeAws_restJson1ListLayersCommand;
const serializeAws_restJson1ListLayerVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2018-10-31/layers/{LayerName}/versions";
    if (input.LayerName !== undefined) {
        const labelValue = input.LayerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LayerName.");
        }
        resolvedPath = resolvedPath.replace("{LayerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LayerName.");
    }
    const query = {
        ...(input.CompatibleRuntime !== undefined && { CompatibleRuntime: input.CompatibleRuntime }),
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restJson1ListLayerVersionsCommand = serializeAws_restJson1ListLayerVersionsCommand;
const serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        List: "ALL",
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand;
const serializeAws_restJson1ListTagsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2017-03-31/tags/{Resource}";
    if (input.Resource !== undefined) {
        const labelValue = input.Resource;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Resource.");
        }
        resolvedPath = resolvedPath.replace("{Resource}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Resource.");
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
exports.serializeAws_restJson1ListTagsCommand = serializeAws_restJson1ListTagsCommand;
const serializeAws_restJson1ListVersionsByFunctionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/versions";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
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
exports.serializeAws_restJson1ListVersionsByFunctionCommand = serializeAws_restJson1ListVersionsByFunctionCommand;
const serializeAws_restJson1PublishLayerVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2018-10-31/layers/{LayerName}/versions";
    if (input.LayerName !== undefined) {
        const labelValue = input.LayerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LayerName.");
        }
        resolvedPath = resolvedPath.replace("{LayerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LayerName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CompatibleRuntimes !== undefined &&
            input.CompatibleRuntimes !== null && {
            CompatibleRuntimes: serializeAws_restJson1CompatibleRuntimes(input.CompatibleRuntimes, context),
        }),
        ...(input.Content !== undefined &&
            input.Content !== null && { Content: serializeAws_restJson1LayerVersionContentInput(input.Content, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.LicenseInfo !== undefined && input.LicenseInfo !== null && { LicenseInfo: input.LicenseInfo }),
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
exports.serializeAws_restJson1PublishLayerVersionCommand = serializeAws_restJson1PublishLayerVersionCommand;
const serializeAws_restJson1PublishVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/versions";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CodeSha256 !== undefined && input.CodeSha256 !== null && { CodeSha256: input.CodeSha256 }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
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
exports.serializeAws_restJson1PublishVersionCommand = serializeAws_restJson1PublishVersionCommand;
const serializeAws_restJson1PutFunctionCodeSigningConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2020-06-30/functions/{FunctionName}/code-signing-config";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CodeSigningConfigArn !== undefined &&
            input.CodeSigningConfigArn !== null && { CodeSigningConfigArn: input.CodeSigningConfigArn }),
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
exports.serializeAws_restJson1PutFunctionCodeSigningConfigCommand = serializeAws_restJson1PutFunctionCodeSigningConfigCommand;
const serializeAws_restJson1PutFunctionConcurrencyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2017-10-31/functions/{FunctionName}/concurrency";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ReservedConcurrentExecutions !== undefined &&
            input.ReservedConcurrentExecutions !== null && {
            ReservedConcurrentExecutions: input.ReservedConcurrentExecutions,
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
exports.serializeAws_restJson1PutFunctionConcurrencyCommand = serializeAws_restJson1PutFunctionConcurrencyCommand;
const serializeAws_restJson1PutFunctionEventInvokeConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
    };
    let body;
    body = JSON.stringify({
        ...(input.DestinationConfig !== undefined &&
            input.DestinationConfig !== null && {
            DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
        }),
        ...(input.MaximumEventAgeInSeconds !== undefined &&
            input.MaximumEventAgeInSeconds !== null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
        ...(input.MaximumRetryAttempts !== undefined &&
            input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
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
exports.serializeAws_restJson1PutFunctionEventInvokeConfigCommand = serializeAws_restJson1PutFunctionEventInvokeConfigCommand;
const serializeAws_restJson1PutProvisionedConcurrencyConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
    };
    let body;
    body = JSON.stringify({
        ...(input.ProvisionedConcurrentExecutions !== undefined &&
            input.ProvisionedConcurrentExecutions !== null && {
            ProvisionedConcurrentExecutions: input.ProvisionedConcurrentExecutions,
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
        query,
        body,
    });
};
exports.serializeAws_restJson1PutProvisionedConcurrencyConfigCommand = serializeAws_restJson1PutProvisionedConcurrencyConfigCommand;
const serializeAws_restJson1RemoveLayerVersionPermissionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}";
    if (input.LayerName !== undefined) {
        const labelValue = input.LayerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: LayerName.");
        }
        resolvedPath = resolvedPath.replace("{LayerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: LayerName.");
    }
    if (input.VersionNumber !== undefined) {
        const labelValue = input.VersionNumber.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionNumber.");
        }
        resolvedPath = resolvedPath.replace("{VersionNumber}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionNumber.");
    }
    if (input.StatementId !== undefined) {
        const labelValue = input.StatementId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: StatementId.");
        }
        resolvedPath = resolvedPath.replace("{StatementId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: StatementId.");
    }
    const query = {
        ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
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
exports.serializeAws_restJson1RemoveLayerVersionPermissionCommand = serializeAws_restJson1RemoveLayerVersionPermissionCommand;
const serializeAws_restJson1RemovePermissionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/policy/{StatementId}";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    if (input.StatementId !== undefined) {
        const labelValue = input.StatementId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: StatementId.");
        }
        resolvedPath = resolvedPath.replace("{StatementId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: StatementId.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
        ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
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
exports.serializeAws_restJson1RemovePermissionCommand = serializeAws_restJson1RemovePermissionCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2017-03-31/tags/{Resource}";
    if (input.Resource !== undefined) {
        const labelValue = input.Resource;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Resource.");
        }
        resolvedPath = resolvedPath.replace("{Resource}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Resource.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
    let resolvedPath = "/2017-03-31/tags/{Resource}";
    if (input.Resource !== undefined) {
        const labelValue = input.Resource;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Resource.");
        }
        resolvedPath = resolvedPath.replace("{Resource}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Resource.");
    }
    const query = {
        ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
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
const serializeAws_restJson1UpdateAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FunctionVersion !== undefined &&
            input.FunctionVersion !== null && { FunctionVersion: input.FunctionVersion }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
        ...(input.RoutingConfig !== undefined &&
            input.RoutingConfig !== null && {
            RoutingConfig: serializeAws_restJson1AliasRoutingConfiguration(input.RoutingConfig, context),
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
exports.serializeAws_restJson1UpdateAliasCommand = serializeAws_restJson1UpdateAliasCommand;
const serializeAws_restJson1UpdateCodeSigningConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
    if (input.CodeSigningConfigArn !== undefined) {
        const labelValue = input.CodeSigningConfigArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
        }
        resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AllowedPublishers !== undefined &&
            input.AllowedPublishers !== null && {
            AllowedPublishers: serializeAws_restJson1AllowedPublishers(input.AllowedPublishers, context),
        }),
        ...(input.CodeSigningPolicies !== undefined &&
            input.CodeSigningPolicies !== null && {
            CodeSigningPolicies: serializeAws_restJson1CodeSigningPolicies(input.CodeSigningPolicies, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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
exports.serializeAws_restJson1UpdateCodeSigningConfigCommand = serializeAws_restJson1UpdateCodeSigningConfigCommand;
const serializeAws_restJson1UpdateEventSourceMappingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-03-31/event-source-mappings/{UUID}";
    if (input.UUID !== undefined) {
        const labelValue = input.UUID;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UUID.");
        }
        resolvedPath = resolvedPath.replace("{UUID}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UUID.");
    }
    let body;
    body = JSON.stringify({
        ...(input.BatchSize !== undefined && input.BatchSize !== null && { BatchSize: input.BatchSize }),
        ...(input.BisectBatchOnFunctionError !== undefined &&
            input.BisectBatchOnFunctionError !== null && { BisectBatchOnFunctionError: input.BisectBatchOnFunctionError }),
        ...(input.DestinationConfig !== undefined &&
            input.DestinationConfig !== null && {
            DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
        }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName }),
        ...(input.FunctionResponseTypes !== undefined &&
            input.FunctionResponseTypes !== null && {
            FunctionResponseTypes: serializeAws_restJson1FunctionResponseTypeList(input.FunctionResponseTypes, context),
        }),
        ...(input.MaximumBatchingWindowInSeconds !== undefined &&
            input.MaximumBatchingWindowInSeconds !== null && {
            MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
        }),
        ...(input.MaximumRecordAgeInSeconds !== undefined &&
            input.MaximumRecordAgeInSeconds !== null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
        ...(input.MaximumRetryAttempts !== undefined &&
            input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
        ...(input.ParallelizationFactor !== undefined &&
            input.ParallelizationFactor !== null && { ParallelizationFactor: input.ParallelizationFactor }),
        ...(input.SourceAccessConfigurations !== undefined &&
            input.SourceAccessConfigurations !== null && {
            SourceAccessConfigurations: serializeAws_restJson1SourceAccessConfigurations(input.SourceAccessConfigurations, context),
        }),
        ...(input.TumblingWindowInSeconds !== undefined &&
            input.TumblingWindowInSeconds !== null && { TumblingWindowInSeconds: input.TumblingWindowInSeconds }),
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
exports.serializeAws_restJson1UpdateEventSourceMappingCommand = serializeAws_restJson1UpdateEventSourceMappingCommand;
const serializeAws_restJson1UpdateFunctionCodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/code";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun }),
        ...(input.ImageUri !== undefined && input.ImageUri !== null && { ImageUri: input.ImageUri }),
        ...(input.Publish !== undefined && input.Publish !== null && { Publish: input.Publish }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
        ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
        ...(input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key }),
        ...(input.S3ObjectVersion !== undefined &&
            input.S3ObjectVersion !== null && { S3ObjectVersion: input.S3ObjectVersion }),
        ...(input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }),
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
exports.serializeAws_restJson1UpdateFunctionCodeCommand = serializeAws_restJson1UpdateFunctionCodeCommand;
const serializeAws_restJson1UpdateFunctionConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-03-31/functions/{FunctionName}/configuration";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeadLetterConfig !== undefined &&
            input.DeadLetterConfig !== null && {
            DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(input.DeadLetterConfig, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Environment !== undefined &&
            input.Environment !== null && { Environment: serializeAws_restJson1Environment(input.Environment, context) }),
        ...(input.FileSystemConfigs !== undefined &&
            input.FileSystemConfigs !== null && {
            FileSystemConfigs: serializeAws_restJson1FileSystemConfigList(input.FileSystemConfigs, context),
        }),
        ...(input.Handler !== undefined && input.Handler !== null && { Handler: input.Handler }),
        ...(input.ImageConfig !== undefined &&
            input.ImageConfig !== null && { ImageConfig: serializeAws_restJson1ImageConfig(input.ImageConfig, context) }),
        ...(input.KMSKeyArn !== undefined && input.KMSKeyArn !== null && { KMSKeyArn: input.KMSKeyArn }),
        ...(input.Layers !== undefined &&
            input.Layers !== null && { Layers: serializeAws_restJson1LayerList(input.Layers, context) }),
        ...(input.MemorySize !== undefined && input.MemorySize !== null && { MemorySize: input.MemorySize }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.Runtime !== undefined && input.Runtime !== null && { Runtime: input.Runtime }),
        ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
        ...(input.TracingConfig !== undefined &&
            input.TracingConfig !== null && {
            TracingConfig: serializeAws_restJson1TracingConfig(input.TracingConfig, context),
        }),
        ...(input.VpcConfig !== undefined &&
            input.VpcConfig !== null && { VpcConfig: serializeAws_restJson1VpcConfig(input.VpcConfig, context) }),
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
exports.serializeAws_restJson1UpdateFunctionConfigurationCommand = serializeAws_restJson1UpdateFunctionConfigurationCommand;
const serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    if (input.FunctionName !== undefined) {
        const labelValue = input.FunctionName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FunctionName.");
        }
        resolvedPath = resolvedPath.replace("{FunctionName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FunctionName.");
    }
    const query = {
        ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
    };
    let body;
    body = JSON.stringify({
        ...(input.DestinationConfig !== undefined &&
            input.DestinationConfig !== null && {
            DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
        }),
        ...(input.MaximumEventAgeInSeconds !== undefined &&
            input.MaximumEventAgeInSeconds !== null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
        ...(input.MaximumRetryAttempts !== undefined &&
            input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
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
exports.serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand;
const deserializeAws_restJson1AddLayerVersionPermissionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddLayerVersionPermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RevisionId: undefined,
        Statement: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.Statement !== undefined && data.Statement !== null) {
        contents.Statement = data.Statement;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddLayerVersionPermissionCommand = deserializeAws_restJson1AddLayerVersionPermissionCommand;
const deserializeAws_restJson1AddLayerVersionPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyLengthExceededException":
        case "com.amazonaws.lambda#PolicyLengthExceededException":
            response = {
                ...(await deserializeAws_restJson1PolicyLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AddPermissionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddPermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Statement: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Statement !== undefined && data.Statement !== null) {
        contents.Statement = data.Statement;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddPermissionCommand = deserializeAws_restJson1AddPermissionCommand;
const deserializeAws_restJson1AddPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyLengthExceededException":
        case "com.amazonaws.lambda#PolicyLengthExceededException":
            response = {
                ...(await deserializeAws_restJson1PolicyLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateAliasCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AliasArn: undefined,
        Description: undefined,
        FunctionVersion: undefined,
        Name: undefined,
        RevisionId: undefined,
        RoutingConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AliasArn !== undefined && data.AliasArn !== null) {
        contents.AliasArn = data.AliasArn;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
        contents.FunctionVersion = data.FunctionVersion;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
        contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(data.RoutingConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAliasCommand = deserializeAws_restJson1CreateAliasCommand;
const deserializeAws_restJson1CreateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCodeSigningConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSigningConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSigningConfig !== undefined && data.CodeSigningConfig !== null) {
        contents.CodeSigningConfig = deserializeAws_restJson1CodeSigningConfig(data.CodeSigningConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCodeSigningConfigCommand = deserializeAws_restJson1CreateCodeSigningConfigCommand;
const deserializeAws_restJson1CreateCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateEventSourceMappingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BatchSize: undefined,
        BisectBatchOnFunctionError: undefined,
        DestinationConfig: undefined,
        EventSourceArn: undefined,
        FunctionArn: undefined,
        FunctionResponseTypes: undefined,
        LastModified: undefined,
        LastProcessingResult: undefined,
        MaximumBatchingWindowInSeconds: undefined,
        MaximumRecordAgeInSeconds: undefined,
        MaximumRetryAttempts: undefined,
        ParallelizationFactor: undefined,
        Queues: undefined,
        SelfManagedEventSource: undefined,
        SourceAccessConfigurations: undefined,
        StartingPosition: undefined,
        StartingPositionTimestamp: undefined,
        State: undefined,
        StateTransitionReason: undefined,
        Topics: undefined,
        TumblingWindowInSeconds: undefined,
        UUID: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BatchSize !== undefined && data.BatchSize !== null) {
        contents.BatchSize = data.BatchSize;
    }
    if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
        contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
    }
    if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
        contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
    }
    if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
        contents.EventSourceArn = data.EventSourceArn;
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
        contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(data.FunctionResponseTypes, context);
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(Math.round(data.LastModified * 1000));
    }
    if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
        contents.LastProcessingResult = data.LastProcessingResult;
    }
    if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
        contents.MaximumBatchingWindowInSeconds = data.MaximumBatchingWindowInSeconds;
    }
    if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
        contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
    }
    if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
        contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
    }
    if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
        contents.ParallelizationFactor = data.ParallelizationFactor;
    }
    if (data.Queues !== undefined && data.Queues !== null) {
        contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
    }
    if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
        contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(data.SelfManagedEventSource, context);
    }
    if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
        contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(data.SourceAccessConfigurations, context);
    }
    if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
        contents.StartingPosition = data.StartingPosition;
    }
    if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
        contents.StartingPositionTimestamp = new Date(Math.round(data.StartingPositionTimestamp * 1000));
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
        contents.StateTransitionReason = data.StateTransitionReason;
    }
    if (data.Topics !== undefined && data.Topics !== null) {
        contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
    }
    if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
        contents.TumblingWindowInSeconds = data.TumblingWindowInSeconds;
    }
    if (data.UUID !== undefined && data.UUID !== null) {
        contents.UUID = data.UUID;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateEventSourceMappingCommand = deserializeAws_restJson1CreateEventSourceMappingCommand;
const deserializeAws_restJson1CreateEventSourceMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateFunctionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFunctionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSha256: undefined,
        CodeSize: undefined,
        DeadLetterConfig: undefined,
        Description: undefined,
        Environment: undefined,
        FileSystemConfigs: undefined,
        FunctionArn: undefined,
        FunctionName: undefined,
        Handler: undefined,
        ImageConfigResponse: undefined,
        KMSKeyArn: undefined,
        LastModified: undefined,
        LastUpdateStatus: undefined,
        LastUpdateStatusReason: undefined,
        LastUpdateStatusReasonCode: undefined,
        Layers: undefined,
        MasterArn: undefined,
        MemorySize: undefined,
        PackageType: undefined,
        RevisionId: undefined,
        Role: undefined,
        Runtime: undefined,
        SigningJobArn: undefined,
        SigningProfileVersionArn: undefined,
        State: undefined,
        StateReason: undefined,
        StateReasonCode: undefined,
        Timeout: undefined,
        TracingConfig: undefined,
        Version: undefined,
        VpcConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
        contents.CodeSha256 = data.CodeSha256;
    }
    if (data.CodeSize !== undefined && data.CodeSize !== null) {
        contents.CodeSize = data.CodeSize;
    }
    if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
        contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.Environment !== undefined && data.Environment !== null) {
        contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
    }
    if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
        contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.FunctionName !== undefined && data.FunctionName !== null) {
        contents.FunctionName = data.FunctionName;
    }
    if (data.Handler !== undefined && data.Handler !== null) {
        contents.Handler = data.Handler;
    }
    if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
        contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
    }
    if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
        contents.KMSKeyArn = data.KMSKeyArn;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = data.LastModified;
    }
    if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
        contents.LastUpdateStatus = data.LastUpdateStatus;
    }
    if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
        contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
    }
    if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
        contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
    }
    if (data.Layers !== undefined && data.Layers !== null) {
        contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
    }
    if (data.MasterArn !== undefined && data.MasterArn !== null) {
        contents.MasterArn = data.MasterArn;
    }
    if (data.MemorySize !== undefined && data.MemorySize !== null) {
        contents.MemorySize = data.MemorySize;
    }
    if (data.PackageType !== undefined && data.PackageType !== null) {
        contents.PackageType = data.PackageType;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.Role !== undefined && data.Role !== null) {
        contents.Role = data.Role;
    }
    if (data.Runtime !== undefined && data.Runtime !== null) {
        contents.Runtime = data.Runtime;
    }
    if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
        contents.SigningJobArn = data.SigningJobArn;
    }
    if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
        contents.SigningProfileVersionArn = data.SigningProfileVersionArn;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.StateReason !== undefined && data.StateReason !== null) {
        contents.StateReason = data.StateReason;
    }
    if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
        contents.StateReasonCode = data.StateReasonCode;
    }
    if (data.Timeout !== undefined && data.Timeout !== null) {
        contents.Timeout = data.Timeout;
    }
    if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
        contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFunctionCommand = deserializeAws_restJson1CreateFunctionCommand;
const deserializeAws_restJson1CreateFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeSigningConfigNotFoundException":
        case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            response = {
                ...(await deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CodeStorageExceededException":
        case "com.amazonaws.lambda#CodeStorageExceededException":
            response = {
                ...(await deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CodeVerificationFailedException":
        case "com.amazonaws.lambda#CodeVerificationFailedException":
            response = {
                ...(await deserializeAws_restJson1CodeVerificationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCodeSignatureException":
        case "com.amazonaws.lambda#InvalidCodeSignatureException":
            response = {
                ...(await deserializeAws_restJson1InvalidCodeSignatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteAliasCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAliasCommand = deserializeAws_restJson1DeleteAliasCommand;
const deserializeAws_restJson1DeleteAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteCodeSigningConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteCodeSigningConfigCommand = deserializeAws_restJson1DeleteCodeSigningConfigCommand;
const deserializeAws_restJson1DeleteCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteEventSourceMappingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BatchSize: undefined,
        BisectBatchOnFunctionError: undefined,
        DestinationConfig: undefined,
        EventSourceArn: undefined,
        FunctionArn: undefined,
        FunctionResponseTypes: undefined,
        LastModified: undefined,
        LastProcessingResult: undefined,
        MaximumBatchingWindowInSeconds: undefined,
        MaximumRecordAgeInSeconds: undefined,
        MaximumRetryAttempts: undefined,
        ParallelizationFactor: undefined,
        Queues: undefined,
        SelfManagedEventSource: undefined,
        SourceAccessConfigurations: undefined,
        StartingPosition: undefined,
        StartingPositionTimestamp: undefined,
        State: undefined,
        StateTransitionReason: undefined,
        Topics: undefined,
        TumblingWindowInSeconds: undefined,
        UUID: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BatchSize !== undefined && data.BatchSize !== null) {
        contents.BatchSize = data.BatchSize;
    }
    if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
        contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
    }
    if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
        contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
    }
    if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
        contents.EventSourceArn = data.EventSourceArn;
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
        contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(data.FunctionResponseTypes, context);
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(Math.round(data.LastModified * 1000));
    }
    if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
        contents.LastProcessingResult = data.LastProcessingResult;
    }
    if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
        contents.MaximumBatchingWindowInSeconds = data.MaximumBatchingWindowInSeconds;
    }
    if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
        contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
    }
    if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
        contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
    }
    if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
        contents.ParallelizationFactor = data.ParallelizationFactor;
    }
    if (data.Queues !== undefined && data.Queues !== null) {
        contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
    }
    if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
        contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(data.SelfManagedEventSource, context);
    }
    if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
        contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(data.SourceAccessConfigurations, context);
    }
    if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
        contents.StartingPosition = data.StartingPosition;
    }
    if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
        contents.StartingPositionTimestamp = new Date(Math.round(data.StartingPositionTimestamp * 1000));
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
        contents.StateTransitionReason = data.StateTransitionReason;
    }
    if (data.Topics !== undefined && data.Topics !== null) {
        contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
    }
    if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
        contents.TumblingWindowInSeconds = data.TumblingWindowInSeconds;
    }
    if (data.UUID !== undefined && data.UUID !== null) {
        contents.UUID = data.UUID;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteEventSourceMappingCommand = deserializeAws_restJson1DeleteEventSourceMappingCommand;
const deserializeAws_restJson1DeleteEventSourceMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.lambda#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteFunctionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFunctionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFunctionCommand = deserializeAws_restJson1DeleteFunctionCommand;
const deserializeAws_restJson1DeleteFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommand = deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommand;
const deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeSigningConfigNotFoundException":
        case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            response = {
                ...(await deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteFunctionConcurrencyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFunctionConcurrencyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFunctionConcurrencyCommand = deserializeAws_restJson1DeleteFunctionConcurrencyCommand;
const deserializeAws_restJson1DeleteFunctionConcurrencyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand;
const deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteLayerVersionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteLayerVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteLayerVersionCommand = deserializeAws_restJson1DeleteLayerVersionCommand;
const deserializeAws_restJson1DeleteLayerVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand;
const deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAccountSettingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAccountSettingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccountLimit: undefined,
        AccountUsage: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccountLimit !== undefined && data.AccountLimit !== null) {
        contents.AccountLimit = deserializeAws_restJson1AccountLimit(data.AccountLimit, context);
    }
    if (data.AccountUsage !== undefined && data.AccountUsage !== null) {
        contents.AccountUsage = deserializeAws_restJson1AccountUsage(data.AccountUsage, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAccountSettingsCommand = deserializeAws_restJson1GetAccountSettingsCommand;
const deserializeAws_restJson1GetAccountSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AliasArn: undefined,
        Description: undefined,
        FunctionVersion: undefined,
        Name: undefined,
        RevisionId: undefined,
        RoutingConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AliasArn !== undefined && data.AliasArn !== null) {
        contents.AliasArn = data.AliasArn;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
        contents.FunctionVersion = data.FunctionVersion;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
        contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(data.RoutingConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAliasCommand = deserializeAws_restJson1GetAliasCommand;
const deserializeAws_restJson1GetAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCodeSigningConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSigningConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSigningConfig !== undefined && data.CodeSigningConfig !== null) {
        contents.CodeSigningConfig = deserializeAws_restJson1CodeSigningConfig(data.CodeSigningConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCodeSigningConfigCommand = deserializeAws_restJson1GetCodeSigningConfigCommand;
const deserializeAws_restJson1GetCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEventSourceMappingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BatchSize: undefined,
        BisectBatchOnFunctionError: undefined,
        DestinationConfig: undefined,
        EventSourceArn: undefined,
        FunctionArn: undefined,
        FunctionResponseTypes: undefined,
        LastModified: undefined,
        LastProcessingResult: undefined,
        MaximumBatchingWindowInSeconds: undefined,
        MaximumRecordAgeInSeconds: undefined,
        MaximumRetryAttempts: undefined,
        ParallelizationFactor: undefined,
        Queues: undefined,
        SelfManagedEventSource: undefined,
        SourceAccessConfigurations: undefined,
        StartingPosition: undefined,
        StartingPositionTimestamp: undefined,
        State: undefined,
        StateTransitionReason: undefined,
        Topics: undefined,
        TumblingWindowInSeconds: undefined,
        UUID: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BatchSize !== undefined && data.BatchSize !== null) {
        contents.BatchSize = data.BatchSize;
    }
    if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
        contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
    }
    if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
        contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
    }
    if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
        contents.EventSourceArn = data.EventSourceArn;
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
        contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(data.FunctionResponseTypes, context);
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(Math.round(data.LastModified * 1000));
    }
    if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
        contents.LastProcessingResult = data.LastProcessingResult;
    }
    if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
        contents.MaximumBatchingWindowInSeconds = data.MaximumBatchingWindowInSeconds;
    }
    if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
        contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
    }
    if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
        contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
    }
    if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
        contents.ParallelizationFactor = data.ParallelizationFactor;
    }
    if (data.Queues !== undefined && data.Queues !== null) {
        contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
    }
    if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
        contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(data.SelfManagedEventSource, context);
    }
    if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
        contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(data.SourceAccessConfigurations, context);
    }
    if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
        contents.StartingPosition = data.StartingPosition;
    }
    if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
        contents.StartingPositionTimestamp = new Date(Math.round(data.StartingPositionTimestamp * 1000));
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
        contents.StateTransitionReason = data.StateTransitionReason;
    }
    if (data.Topics !== undefined && data.Topics !== null) {
        contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
    }
    if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
        contents.TumblingWindowInSeconds = data.TumblingWindowInSeconds;
    }
    if (data.UUID !== undefined && data.UUID !== null) {
        contents.UUID = data.UUID;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEventSourceMappingCommand = deserializeAws_restJson1GetEventSourceMappingCommand;
const deserializeAws_restJson1GetEventSourceMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFunctionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Code: undefined,
        Concurrency: undefined,
        Configuration: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = deserializeAws_restJson1FunctionCodeLocation(data.Code, context);
    }
    if (data.Concurrency !== undefined && data.Concurrency !== null) {
        contents.Concurrency = deserializeAws_restJson1Concurrency(data.Concurrency, context);
    }
    if (data.Configuration !== undefined && data.Configuration !== null) {
        contents.Configuration = deserializeAws_restJson1FunctionConfiguration(data.Configuration, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFunctionCommand = deserializeAws_restJson1GetFunctionCommand;
const deserializeAws_restJson1GetFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFunctionCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFunctionCodeSigningConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSigningConfigArn: undefined,
        FunctionName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSigningConfigArn !== undefined && data.CodeSigningConfigArn !== null) {
        contents.CodeSigningConfigArn = data.CodeSigningConfigArn;
    }
    if (data.FunctionName !== undefined && data.FunctionName !== null) {
        contents.FunctionName = data.FunctionName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFunctionCodeSigningConfigCommand = deserializeAws_restJson1GetFunctionCodeSigningConfigCommand;
const deserializeAws_restJson1GetFunctionCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFunctionConcurrencyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFunctionConcurrencyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ReservedConcurrentExecutions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ReservedConcurrentExecutions !== undefined && data.ReservedConcurrentExecutions !== null) {
        contents.ReservedConcurrentExecutions = data.ReservedConcurrentExecutions;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFunctionConcurrencyCommand = deserializeAws_restJson1GetFunctionConcurrencyCommand;
const deserializeAws_restJson1GetFunctionConcurrencyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFunctionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFunctionConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSha256: undefined,
        CodeSize: undefined,
        DeadLetterConfig: undefined,
        Description: undefined,
        Environment: undefined,
        FileSystemConfigs: undefined,
        FunctionArn: undefined,
        FunctionName: undefined,
        Handler: undefined,
        ImageConfigResponse: undefined,
        KMSKeyArn: undefined,
        LastModified: undefined,
        LastUpdateStatus: undefined,
        LastUpdateStatusReason: undefined,
        LastUpdateStatusReasonCode: undefined,
        Layers: undefined,
        MasterArn: undefined,
        MemorySize: undefined,
        PackageType: undefined,
        RevisionId: undefined,
        Role: undefined,
        Runtime: undefined,
        SigningJobArn: undefined,
        SigningProfileVersionArn: undefined,
        State: undefined,
        StateReason: undefined,
        StateReasonCode: undefined,
        Timeout: undefined,
        TracingConfig: undefined,
        Version: undefined,
        VpcConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
        contents.CodeSha256 = data.CodeSha256;
    }
    if (data.CodeSize !== undefined && data.CodeSize !== null) {
        contents.CodeSize = data.CodeSize;
    }
    if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
        contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.Environment !== undefined && data.Environment !== null) {
        contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
    }
    if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
        contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.FunctionName !== undefined && data.FunctionName !== null) {
        contents.FunctionName = data.FunctionName;
    }
    if (data.Handler !== undefined && data.Handler !== null) {
        contents.Handler = data.Handler;
    }
    if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
        contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
    }
    if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
        contents.KMSKeyArn = data.KMSKeyArn;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = data.LastModified;
    }
    if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
        contents.LastUpdateStatus = data.LastUpdateStatus;
    }
    if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
        contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
    }
    if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
        contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
    }
    if (data.Layers !== undefined && data.Layers !== null) {
        contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
    }
    if (data.MasterArn !== undefined && data.MasterArn !== null) {
        contents.MasterArn = data.MasterArn;
    }
    if (data.MemorySize !== undefined && data.MemorySize !== null) {
        contents.MemorySize = data.MemorySize;
    }
    if (data.PackageType !== undefined && data.PackageType !== null) {
        contents.PackageType = data.PackageType;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.Role !== undefined && data.Role !== null) {
        contents.Role = data.Role;
    }
    if (data.Runtime !== undefined && data.Runtime !== null) {
        contents.Runtime = data.Runtime;
    }
    if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
        contents.SigningJobArn = data.SigningJobArn;
    }
    if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
        contents.SigningProfileVersionArn = data.SigningProfileVersionArn;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.StateReason !== undefined && data.StateReason !== null) {
        contents.StateReason = data.StateReason;
    }
    if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
        contents.StateReasonCode = data.StateReasonCode;
    }
    if (data.Timeout !== undefined && data.Timeout !== null) {
        contents.Timeout = data.Timeout;
    }
    if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
        contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFunctionConfigurationCommand = deserializeAws_restJson1GetFunctionConfigurationCommand;
const deserializeAws_restJson1GetFunctionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DestinationConfig: undefined,
        FunctionArn: undefined,
        LastModified: undefined,
        MaximumEventAgeInSeconds: undefined,
        MaximumRetryAttempts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
        contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(Math.round(data.LastModified * 1000));
    }
    if (data.MaximumEventAgeInSeconds !== undefined && data.MaximumEventAgeInSeconds !== null) {
        contents.MaximumEventAgeInSeconds = data.MaximumEventAgeInSeconds;
    }
    if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
        contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFunctionEventInvokeConfigCommand = deserializeAws_restJson1GetFunctionEventInvokeConfigCommand;
const deserializeAws_restJson1GetFunctionEventInvokeConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetLayerVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLayerVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CompatibleRuntimes: undefined,
        Content: undefined,
        CreatedDate: undefined,
        Description: undefined,
        LayerArn: undefined,
        LayerVersionArn: undefined,
        LicenseInfo: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CompatibleRuntimes !== undefined && data.CompatibleRuntimes !== null) {
        contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(data.CompatibleRuntimes, context);
    }
    if (data.Content !== undefined && data.Content !== null) {
        contents.Content = deserializeAws_restJson1LayerVersionContentOutput(data.Content, context);
    }
    if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
        contents.CreatedDate = data.CreatedDate;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.LayerArn !== undefined && data.LayerArn !== null) {
        contents.LayerArn = data.LayerArn;
    }
    if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
        contents.LayerVersionArn = data.LayerVersionArn;
    }
    if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
        contents.LicenseInfo = data.LicenseInfo;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLayerVersionCommand = deserializeAws_restJson1GetLayerVersionCommand;
const deserializeAws_restJson1GetLayerVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetLayerVersionByArnCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLayerVersionByArnCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CompatibleRuntimes: undefined,
        Content: undefined,
        CreatedDate: undefined,
        Description: undefined,
        LayerArn: undefined,
        LayerVersionArn: undefined,
        LicenseInfo: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CompatibleRuntimes !== undefined && data.CompatibleRuntimes !== null) {
        contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(data.CompatibleRuntimes, context);
    }
    if (data.Content !== undefined && data.Content !== null) {
        contents.Content = deserializeAws_restJson1LayerVersionContentOutput(data.Content, context);
    }
    if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
        contents.CreatedDate = data.CreatedDate;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.LayerArn !== undefined && data.LayerArn !== null) {
        contents.LayerArn = data.LayerArn;
    }
    if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
        contents.LayerVersionArn = data.LayerVersionArn;
    }
    if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
        contents.LicenseInfo = data.LicenseInfo;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLayerVersionByArnCommand = deserializeAws_restJson1GetLayerVersionByArnCommand;
const deserializeAws_restJson1GetLayerVersionByArnCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetLayerVersionPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLayerVersionPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policy: undefined,
        RevisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Policy !== undefined && data.Policy !== null) {
        contents.Policy = data.Policy;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLayerVersionPolicyCommand = deserializeAws_restJson1GetLayerVersionPolicyCommand;
const deserializeAws_restJson1GetLayerVersionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policy: undefined,
        RevisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Policy !== undefined && data.Policy !== null) {
        contents.Policy = data.Policy;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPolicyCommand = deserializeAws_restJson1GetPolicyCommand;
const deserializeAws_restJson1GetPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetProvisionedConcurrencyConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AllocatedProvisionedConcurrentExecutions: undefined,
        AvailableProvisionedConcurrentExecutions: undefined,
        LastModified: undefined,
        RequestedProvisionedConcurrentExecutions: undefined,
        Status: undefined,
        StatusReason: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AllocatedProvisionedConcurrentExecutions !== undefined &&
        data.AllocatedProvisionedConcurrentExecutions !== null) {
        contents.AllocatedProvisionedConcurrentExecutions = data.AllocatedProvisionedConcurrentExecutions;
    }
    if (data.AvailableProvisionedConcurrentExecutions !== undefined &&
        data.AvailableProvisionedConcurrentExecutions !== null) {
        contents.AvailableProvisionedConcurrentExecutions = data.AvailableProvisionedConcurrentExecutions;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = data.LastModified;
    }
    if (data.RequestedProvisionedConcurrentExecutions !== undefined &&
        data.RequestedProvisionedConcurrentExecutions !== null) {
        contents.RequestedProvisionedConcurrentExecutions = data.RequestedProvisionedConcurrentExecutions;
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    if (data.StatusReason !== undefined && data.StatusReason !== null) {
        contents.StatusReason = data.StatusReason;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand = deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand;
const deserializeAws_restJson1GetProvisionedConcurrencyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedConcurrencyConfigNotFoundException":
        case "com.amazonaws.lambda#ProvisionedConcurrencyConfigNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ProvisionedConcurrencyConfigNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1InvokeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1InvokeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ExecutedVersion: undefined,
        FunctionError: undefined,
        LogResult: undefined,
        Payload: undefined,
        StatusCode: undefined,
    };
    if (output.headers["x-amz-function-error"] !== undefined) {
        contents.FunctionError = output.headers["x-amz-function-error"];
    }
    if (output.headers["x-amz-log-result"] !== undefined) {
        contents.LogResult = output.headers["x-amz-log-result"];
    }
    if (output.headers["x-amz-executed-version"] !== undefined) {
        contents.ExecutedVersion = output.headers["x-amz-executed-version"];
    }
    const data = await collectBody(output.body, context);
    contents.Payload = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InvokeCommand = deserializeAws_restJson1InvokeCommand;
const deserializeAws_restJson1InvokeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EC2AccessDeniedException":
        case "com.amazonaws.lambda#EC2AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1EC2AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EC2ThrottledException":
        case "com.amazonaws.lambda#EC2ThrottledException":
            response = {
                ...(await deserializeAws_restJson1EC2ThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EC2UnexpectedException":
        case "com.amazonaws.lambda#EC2UnexpectedException":
            response = {
                ...(await deserializeAws_restJson1EC2UnexpectedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EFSIOException":
        case "com.amazonaws.lambda#EFSIOException":
            response = {
                ...(await deserializeAws_restJson1EFSIOExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EFSMountConnectivityException":
        case "com.amazonaws.lambda#EFSMountConnectivityException":
            response = {
                ...(await deserializeAws_restJson1EFSMountConnectivityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EFSMountFailureException":
        case "com.amazonaws.lambda#EFSMountFailureException":
            response = {
                ...(await deserializeAws_restJson1EFSMountFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EFSMountTimeoutException":
        case "com.amazonaws.lambda#EFSMountTimeoutException":
            response = {
                ...(await deserializeAws_restJson1EFSMountTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ENILimitReachedException":
        case "com.amazonaws.lambda#ENILimitReachedException":
            response = {
                ...(await deserializeAws_restJson1ENILimitReachedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestContentException":
        case "com.amazonaws.lambda#InvalidRequestContentException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRuntimeException":
        case "com.amazonaws.lambda#InvalidRuntimeException":
            response = {
                ...(await deserializeAws_restJson1InvalidRuntimeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityGroupIDException":
        case "com.amazonaws.lambda#InvalidSecurityGroupIDException":
            response = {
                ...(await deserializeAws_restJson1InvalidSecurityGroupIDExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnetIDException":
        case "com.amazonaws.lambda#InvalidSubnetIDException":
            response = {
                ...(await deserializeAws_restJson1InvalidSubnetIDExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidZipFileException":
        case "com.amazonaws.lambda#InvalidZipFileException":
            response = {
                ...(await deserializeAws_restJson1InvalidZipFileExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSAccessDeniedException":
        case "com.amazonaws.lambda#KMSAccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1KMSAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSDisabledException":
        case "com.amazonaws.lambda#KMSDisabledException":
            response = {
                ...(await deserializeAws_restJson1KMSDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.lambda#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_restJson1KMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSNotFoundException":
        case "com.amazonaws.lambda#KMSNotFoundException":
            response = {
                ...(await deserializeAws_restJson1KMSNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTooLargeException":
        case "com.amazonaws.lambda#RequestTooLargeException":
            response = {
                ...(await deserializeAws_restJson1RequestTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotReadyException":
        case "com.amazonaws.lambda#ResourceNotReadyException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetIPAddressLimitReachedException":
        case "com.amazonaws.lambda#SubnetIPAddressLimitReachedException":
            response = {
                ...(await deserializeAws_restJson1SubnetIPAddressLimitReachedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedMediaTypeException":
        case "com.amazonaws.lambda#UnsupportedMediaTypeException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1InvokeAsyncCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1InvokeAsyncCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Status: undefined,
    };
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InvokeAsyncCommand = deserializeAws_restJson1InvokeAsyncCommand;
const deserializeAws_restJson1InvokeAsyncCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestContentException":
        case "com.amazonaws.lambda#InvalidRequestContentException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestContentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRuntimeException":
        case "com.amazonaws.lambda#InvalidRuntimeException":
            response = {
                ...(await deserializeAws_restJson1InvalidRuntimeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListAliasesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAliasesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Aliases: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Aliases !== undefined && data.Aliases !== null) {
        contents.Aliases = deserializeAws_restJson1AliasList(data.Aliases, context);
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAliasesCommand = deserializeAws_restJson1ListAliasesCommand;
const deserializeAws_restJson1ListAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListCodeSigningConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListCodeSigningConfigsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSigningConfigs: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSigningConfigs !== undefined && data.CodeSigningConfigs !== null) {
        contents.CodeSigningConfigs = deserializeAws_restJson1CodeSigningConfigList(data.CodeSigningConfigs, context);
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListCodeSigningConfigsCommand = deserializeAws_restJson1ListCodeSigningConfigsCommand;
const deserializeAws_restJson1ListCodeSigningConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListEventSourceMappingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListEventSourceMappingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EventSourceMappings: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.EventSourceMappings !== undefined && data.EventSourceMappings !== null) {
        contents.EventSourceMappings = deserializeAws_restJson1EventSourceMappingsList(data.EventSourceMappings, context);
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListEventSourceMappingsCommand = deserializeAws_restJson1ListEventSourceMappingsCommand;
const deserializeAws_restJson1ListEventSourceMappingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFunctionEventInvokeConfigsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FunctionEventInvokeConfigs: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.FunctionEventInvokeConfigs !== undefined && data.FunctionEventInvokeConfigs !== null) {
        contents.FunctionEventInvokeConfigs = deserializeAws_restJson1FunctionEventInvokeConfigList(data.FunctionEventInvokeConfigs, context);
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand = deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand;
const deserializeAws_restJson1ListFunctionEventInvokeConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListFunctionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFunctionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Functions: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Functions !== undefined && data.Functions !== null) {
        contents.Functions = deserializeAws_restJson1FunctionList(data.Functions, context);
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFunctionsCommand = deserializeAws_restJson1ListFunctionsCommand;
const deserializeAws_restJson1ListFunctionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FunctionArns: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.FunctionArns !== undefined && data.FunctionArns !== null) {
        contents.FunctionArns = deserializeAws_restJson1FunctionArnList(data.FunctionArns, context);
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand = deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand;
const deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListLayersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLayersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Layers: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Layers !== undefined && data.Layers !== null) {
        contents.Layers = deserializeAws_restJson1LayersList(data.Layers, context);
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLayersCommand = deserializeAws_restJson1ListLayersCommand;
const deserializeAws_restJson1ListLayersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListLayerVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLayerVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LayerVersions: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LayerVersions !== undefined && data.LayerVersions !== null) {
        contents.LayerVersions = deserializeAws_restJson1LayerVersionsList(data.LayerVersions, context);
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLayerVersionsCommand = deserializeAws_restJson1ListLayerVersionsCommand;
const deserializeAws_restJson1ListLayerVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextMarker: undefined,
        ProvisionedConcurrencyConfigs: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    if (data.ProvisionedConcurrencyConfigs !== undefined && data.ProvisionedConcurrencyConfigs !== null) {
        contents.ProvisionedConcurrencyConfigs = deserializeAws_restJson1ProvisionedConcurrencyConfigList(data.ProvisionedConcurrencyConfigs, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand;
const deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListTagsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsCommand = deserializeAws_restJson1ListTagsCommand;
const deserializeAws_restJson1ListTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListVersionsByFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListVersionsByFunctionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextMarker: undefined,
        Versions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    if (data.Versions !== undefined && data.Versions !== null) {
        contents.Versions = deserializeAws_restJson1FunctionList(data.Versions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListVersionsByFunctionCommand = deserializeAws_restJson1ListVersionsByFunctionCommand;
const deserializeAws_restJson1ListVersionsByFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PublishLayerVersionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1PublishLayerVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CompatibleRuntimes: undefined,
        Content: undefined,
        CreatedDate: undefined,
        Description: undefined,
        LayerArn: undefined,
        LayerVersionArn: undefined,
        LicenseInfo: undefined,
        Version: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CompatibleRuntimes !== undefined && data.CompatibleRuntimes !== null) {
        contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(data.CompatibleRuntimes, context);
    }
    if (data.Content !== undefined && data.Content !== null) {
        contents.Content = deserializeAws_restJson1LayerVersionContentOutput(data.Content, context);
    }
    if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
        contents.CreatedDate = data.CreatedDate;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.LayerArn !== undefined && data.LayerArn !== null) {
        contents.LayerArn = data.LayerArn;
    }
    if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
        contents.LayerVersionArn = data.LayerVersionArn;
    }
    if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
        contents.LicenseInfo = data.LicenseInfo;
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PublishLayerVersionCommand = deserializeAws_restJson1PublishLayerVersionCommand;
const deserializeAws_restJson1PublishLayerVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeStorageExceededException":
        case "com.amazonaws.lambda#CodeStorageExceededException":
            response = {
                ...(await deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PublishVersionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1PublishVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSha256: undefined,
        CodeSize: undefined,
        DeadLetterConfig: undefined,
        Description: undefined,
        Environment: undefined,
        FileSystemConfigs: undefined,
        FunctionArn: undefined,
        FunctionName: undefined,
        Handler: undefined,
        ImageConfigResponse: undefined,
        KMSKeyArn: undefined,
        LastModified: undefined,
        LastUpdateStatus: undefined,
        LastUpdateStatusReason: undefined,
        LastUpdateStatusReasonCode: undefined,
        Layers: undefined,
        MasterArn: undefined,
        MemorySize: undefined,
        PackageType: undefined,
        RevisionId: undefined,
        Role: undefined,
        Runtime: undefined,
        SigningJobArn: undefined,
        SigningProfileVersionArn: undefined,
        State: undefined,
        StateReason: undefined,
        StateReasonCode: undefined,
        Timeout: undefined,
        TracingConfig: undefined,
        Version: undefined,
        VpcConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
        contents.CodeSha256 = data.CodeSha256;
    }
    if (data.CodeSize !== undefined && data.CodeSize !== null) {
        contents.CodeSize = data.CodeSize;
    }
    if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
        contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.Environment !== undefined && data.Environment !== null) {
        contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
    }
    if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
        contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.FunctionName !== undefined && data.FunctionName !== null) {
        contents.FunctionName = data.FunctionName;
    }
    if (data.Handler !== undefined && data.Handler !== null) {
        contents.Handler = data.Handler;
    }
    if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
        contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
    }
    if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
        contents.KMSKeyArn = data.KMSKeyArn;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = data.LastModified;
    }
    if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
        contents.LastUpdateStatus = data.LastUpdateStatus;
    }
    if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
        contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
    }
    if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
        contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
    }
    if (data.Layers !== undefined && data.Layers !== null) {
        contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
    }
    if (data.MasterArn !== undefined && data.MasterArn !== null) {
        contents.MasterArn = data.MasterArn;
    }
    if (data.MemorySize !== undefined && data.MemorySize !== null) {
        contents.MemorySize = data.MemorySize;
    }
    if (data.PackageType !== undefined && data.PackageType !== null) {
        contents.PackageType = data.PackageType;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.Role !== undefined && data.Role !== null) {
        contents.Role = data.Role;
    }
    if (data.Runtime !== undefined && data.Runtime !== null) {
        contents.Runtime = data.Runtime;
    }
    if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
        contents.SigningJobArn = data.SigningJobArn;
    }
    if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
        contents.SigningProfileVersionArn = data.SigningProfileVersionArn;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.StateReason !== undefined && data.StateReason !== null) {
        contents.StateReason = data.StateReason;
    }
    if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
        contents.StateReasonCode = data.StateReasonCode;
    }
    if (data.Timeout !== undefined && data.Timeout !== null) {
        contents.Timeout = data.Timeout;
    }
    if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
        contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PublishVersionCommand = deserializeAws_restJson1PublishVersionCommand;
const deserializeAws_restJson1PublishVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeStorageExceededException":
        case "com.amazonaws.lambda#CodeStorageExceededException":
            response = {
                ...(await deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutFunctionCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutFunctionCodeSigningConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSigningConfigArn: undefined,
        FunctionName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSigningConfigArn !== undefined && data.CodeSigningConfigArn !== null) {
        contents.CodeSigningConfigArn = data.CodeSigningConfigArn;
    }
    if (data.FunctionName !== undefined && data.FunctionName !== null) {
        contents.FunctionName = data.FunctionName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutFunctionCodeSigningConfigCommand = deserializeAws_restJson1PutFunctionCodeSigningConfigCommand;
const deserializeAws_restJson1PutFunctionCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeSigningConfigNotFoundException":
        case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            response = {
                ...(await deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutFunctionConcurrencyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutFunctionConcurrencyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ReservedConcurrentExecutions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ReservedConcurrentExecutions !== undefined && data.ReservedConcurrentExecutions !== null) {
        contents.ReservedConcurrentExecutions = data.ReservedConcurrentExecutions;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutFunctionConcurrencyCommand = deserializeAws_restJson1PutFunctionConcurrencyCommand;
const deserializeAws_restJson1PutFunctionConcurrencyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DestinationConfig: undefined,
        FunctionArn: undefined,
        LastModified: undefined,
        MaximumEventAgeInSeconds: undefined,
        MaximumRetryAttempts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
        contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(Math.round(data.LastModified * 1000));
    }
    if (data.MaximumEventAgeInSeconds !== undefined && data.MaximumEventAgeInSeconds !== null) {
        contents.MaximumEventAgeInSeconds = data.MaximumEventAgeInSeconds;
    }
    if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
        contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutFunctionEventInvokeConfigCommand = deserializeAws_restJson1PutFunctionEventInvokeConfigCommand;
const deserializeAws_restJson1PutFunctionEventInvokeConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutProvisionedConcurrencyConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AllocatedProvisionedConcurrentExecutions: undefined,
        AvailableProvisionedConcurrentExecutions: undefined,
        LastModified: undefined,
        RequestedProvisionedConcurrentExecutions: undefined,
        Status: undefined,
        StatusReason: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AllocatedProvisionedConcurrentExecutions !== undefined &&
        data.AllocatedProvisionedConcurrentExecutions !== null) {
        contents.AllocatedProvisionedConcurrentExecutions = data.AllocatedProvisionedConcurrentExecutions;
    }
    if (data.AvailableProvisionedConcurrentExecutions !== undefined &&
        data.AvailableProvisionedConcurrentExecutions !== null) {
        contents.AvailableProvisionedConcurrentExecutions = data.AvailableProvisionedConcurrentExecutions;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = data.LastModified;
    }
    if (data.RequestedProvisionedConcurrentExecutions !== undefined &&
        data.RequestedProvisionedConcurrentExecutions !== null) {
        contents.RequestedProvisionedConcurrentExecutions = data.RequestedProvisionedConcurrentExecutions;
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    if (data.StatusReason !== undefined && data.StatusReason !== null) {
        contents.StatusReason = data.StatusReason;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand = deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand;
const deserializeAws_restJson1PutProvisionedConcurrencyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RemoveLayerVersionPermissionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveLayerVersionPermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveLayerVersionPermissionCommand = deserializeAws_restJson1RemoveLayerVersionPermissionCommand;
const deserializeAws_restJson1RemoveLayerVersionPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RemovePermissionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemovePermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemovePermissionCommand = deserializeAws_restJson1RemovePermissionCommand;
const deserializeAws_restJson1RemovePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
    if (output.statusCode !== 204 && output.statusCode >= 300) {
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
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
    if (output.statusCode !== 204 && output.statusCode >= 300) {
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
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AliasArn: undefined,
        Description: undefined,
        FunctionVersion: undefined,
        Name: undefined,
        RevisionId: undefined,
        RoutingConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AliasArn !== undefined && data.AliasArn !== null) {
        contents.AliasArn = data.AliasArn;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
        contents.FunctionVersion = data.FunctionVersion;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
        contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(data.RoutingConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAliasCommand = deserializeAws_restJson1UpdateAliasCommand;
const deserializeAws_restJson1UpdateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateCodeSigningConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSigningConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSigningConfig !== undefined && data.CodeSigningConfig !== null) {
        contents.CodeSigningConfig = deserializeAws_restJson1CodeSigningConfig(data.CodeSigningConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateCodeSigningConfigCommand = deserializeAws_restJson1UpdateCodeSigningConfigCommand;
const deserializeAws_restJson1UpdateCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateEventSourceMappingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BatchSize: undefined,
        BisectBatchOnFunctionError: undefined,
        DestinationConfig: undefined,
        EventSourceArn: undefined,
        FunctionArn: undefined,
        FunctionResponseTypes: undefined,
        LastModified: undefined,
        LastProcessingResult: undefined,
        MaximumBatchingWindowInSeconds: undefined,
        MaximumRecordAgeInSeconds: undefined,
        MaximumRetryAttempts: undefined,
        ParallelizationFactor: undefined,
        Queues: undefined,
        SelfManagedEventSource: undefined,
        SourceAccessConfigurations: undefined,
        StartingPosition: undefined,
        StartingPositionTimestamp: undefined,
        State: undefined,
        StateTransitionReason: undefined,
        Topics: undefined,
        TumblingWindowInSeconds: undefined,
        UUID: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BatchSize !== undefined && data.BatchSize !== null) {
        contents.BatchSize = data.BatchSize;
    }
    if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
        contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
    }
    if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
        contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
    }
    if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
        contents.EventSourceArn = data.EventSourceArn;
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
        contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(data.FunctionResponseTypes, context);
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(Math.round(data.LastModified * 1000));
    }
    if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
        contents.LastProcessingResult = data.LastProcessingResult;
    }
    if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
        contents.MaximumBatchingWindowInSeconds = data.MaximumBatchingWindowInSeconds;
    }
    if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
        contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
    }
    if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
        contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
    }
    if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
        contents.ParallelizationFactor = data.ParallelizationFactor;
    }
    if (data.Queues !== undefined && data.Queues !== null) {
        contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
    }
    if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
        contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(data.SelfManagedEventSource, context);
    }
    if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
        contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(data.SourceAccessConfigurations, context);
    }
    if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
        contents.StartingPosition = data.StartingPosition;
    }
    if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
        contents.StartingPositionTimestamp = new Date(Math.round(data.StartingPositionTimestamp * 1000));
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
        contents.StateTransitionReason = data.StateTransitionReason;
    }
    if (data.Topics !== undefined && data.Topics !== null) {
        contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
    }
    if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
        contents.TumblingWindowInSeconds = data.TumblingWindowInSeconds;
    }
    if (data.UUID !== undefined && data.UUID !== null) {
        contents.UUID = data.UUID;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateEventSourceMappingCommand = deserializeAws_restJson1UpdateEventSourceMappingCommand;
const deserializeAws_restJson1UpdateEventSourceMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.lambda#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateFunctionCodeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFunctionCodeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSha256: undefined,
        CodeSize: undefined,
        DeadLetterConfig: undefined,
        Description: undefined,
        Environment: undefined,
        FileSystemConfigs: undefined,
        FunctionArn: undefined,
        FunctionName: undefined,
        Handler: undefined,
        ImageConfigResponse: undefined,
        KMSKeyArn: undefined,
        LastModified: undefined,
        LastUpdateStatus: undefined,
        LastUpdateStatusReason: undefined,
        LastUpdateStatusReasonCode: undefined,
        Layers: undefined,
        MasterArn: undefined,
        MemorySize: undefined,
        PackageType: undefined,
        RevisionId: undefined,
        Role: undefined,
        Runtime: undefined,
        SigningJobArn: undefined,
        SigningProfileVersionArn: undefined,
        State: undefined,
        StateReason: undefined,
        StateReasonCode: undefined,
        Timeout: undefined,
        TracingConfig: undefined,
        Version: undefined,
        VpcConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
        contents.CodeSha256 = data.CodeSha256;
    }
    if (data.CodeSize !== undefined && data.CodeSize !== null) {
        contents.CodeSize = data.CodeSize;
    }
    if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
        contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.Environment !== undefined && data.Environment !== null) {
        contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
    }
    if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
        contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.FunctionName !== undefined && data.FunctionName !== null) {
        contents.FunctionName = data.FunctionName;
    }
    if (data.Handler !== undefined && data.Handler !== null) {
        contents.Handler = data.Handler;
    }
    if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
        contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
    }
    if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
        contents.KMSKeyArn = data.KMSKeyArn;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = data.LastModified;
    }
    if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
        contents.LastUpdateStatus = data.LastUpdateStatus;
    }
    if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
        contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
    }
    if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
        contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
    }
    if (data.Layers !== undefined && data.Layers !== null) {
        contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
    }
    if (data.MasterArn !== undefined && data.MasterArn !== null) {
        contents.MasterArn = data.MasterArn;
    }
    if (data.MemorySize !== undefined && data.MemorySize !== null) {
        contents.MemorySize = data.MemorySize;
    }
    if (data.PackageType !== undefined && data.PackageType !== null) {
        contents.PackageType = data.PackageType;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.Role !== undefined && data.Role !== null) {
        contents.Role = data.Role;
    }
    if (data.Runtime !== undefined && data.Runtime !== null) {
        contents.Runtime = data.Runtime;
    }
    if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
        contents.SigningJobArn = data.SigningJobArn;
    }
    if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
        contents.SigningProfileVersionArn = data.SigningProfileVersionArn;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.StateReason !== undefined && data.StateReason !== null) {
        contents.StateReason = data.StateReason;
    }
    if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
        contents.StateReasonCode = data.StateReasonCode;
    }
    if (data.Timeout !== undefined && data.Timeout !== null) {
        contents.Timeout = data.Timeout;
    }
    if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
        contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFunctionCodeCommand = deserializeAws_restJson1UpdateFunctionCodeCommand;
const deserializeAws_restJson1UpdateFunctionCodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeSigningConfigNotFoundException":
        case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            response = {
                ...(await deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CodeStorageExceededException":
        case "com.amazonaws.lambda#CodeStorageExceededException":
            response = {
                ...(await deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CodeVerificationFailedException":
        case "com.amazonaws.lambda#CodeVerificationFailedException":
            response = {
                ...(await deserializeAws_restJson1CodeVerificationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCodeSignatureException":
        case "com.amazonaws.lambda#InvalidCodeSignatureException":
            response = {
                ...(await deserializeAws_restJson1InvalidCodeSignatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateFunctionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFunctionConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CodeSha256: undefined,
        CodeSize: undefined,
        DeadLetterConfig: undefined,
        Description: undefined,
        Environment: undefined,
        FileSystemConfigs: undefined,
        FunctionArn: undefined,
        FunctionName: undefined,
        Handler: undefined,
        ImageConfigResponse: undefined,
        KMSKeyArn: undefined,
        LastModified: undefined,
        LastUpdateStatus: undefined,
        LastUpdateStatusReason: undefined,
        LastUpdateStatusReasonCode: undefined,
        Layers: undefined,
        MasterArn: undefined,
        MemorySize: undefined,
        PackageType: undefined,
        RevisionId: undefined,
        Role: undefined,
        Runtime: undefined,
        SigningJobArn: undefined,
        SigningProfileVersionArn: undefined,
        State: undefined,
        StateReason: undefined,
        StateReasonCode: undefined,
        Timeout: undefined,
        TracingConfig: undefined,
        Version: undefined,
        VpcConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
        contents.CodeSha256 = data.CodeSha256;
    }
    if (data.CodeSize !== undefined && data.CodeSize !== null) {
        contents.CodeSize = data.CodeSize;
    }
    if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
        contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.Environment !== undefined && data.Environment !== null) {
        contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
    }
    if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
        contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.FunctionName !== undefined && data.FunctionName !== null) {
        contents.FunctionName = data.FunctionName;
    }
    if (data.Handler !== undefined && data.Handler !== null) {
        contents.Handler = data.Handler;
    }
    if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
        contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
    }
    if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
        contents.KMSKeyArn = data.KMSKeyArn;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = data.LastModified;
    }
    if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
        contents.LastUpdateStatus = data.LastUpdateStatus;
    }
    if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
        contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
    }
    if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
        contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
    }
    if (data.Layers !== undefined && data.Layers !== null) {
        contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
    }
    if (data.MasterArn !== undefined && data.MasterArn !== null) {
        contents.MasterArn = data.MasterArn;
    }
    if (data.MemorySize !== undefined && data.MemorySize !== null) {
        contents.MemorySize = data.MemorySize;
    }
    if (data.PackageType !== undefined && data.PackageType !== null) {
        contents.PackageType = data.PackageType;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.Role !== undefined && data.Role !== null) {
        contents.Role = data.Role;
    }
    if (data.Runtime !== undefined && data.Runtime !== null) {
        contents.Runtime = data.Runtime;
    }
    if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
        contents.SigningJobArn = data.SigningJobArn;
    }
    if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
        contents.SigningProfileVersionArn = data.SigningProfileVersionArn;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.StateReason !== undefined && data.StateReason !== null) {
        contents.StateReason = data.StateReason;
    }
    if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
        contents.StateReasonCode = data.StateReasonCode;
    }
    if (data.Timeout !== undefined && data.Timeout !== null) {
        contents.Timeout = data.Timeout;
    }
    if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
        contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
    }
    if (data.Version !== undefined && data.Version !== null) {
        contents.Version = data.Version;
    }
    if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFunctionConfigurationCommand = deserializeAws_restJson1UpdateFunctionConfigurationCommand;
const deserializeAws_restJson1UpdateFunctionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeSigningConfigNotFoundException":
        case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            response = {
                ...(await deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CodeVerificationFailedException":
        case "com.amazonaws.lambda#CodeVerificationFailedException":
            response = {
                ...(await deserializeAws_restJson1CodeVerificationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCodeSignatureException":
        case "com.amazonaws.lambda#InvalidCodeSignatureException":
            response = {
                ...(await deserializeAws_restJson1InvalidCodeSignatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DestinationConfig: undefined,
        FunctionArn: undefined,
        LastModified: undefined,
        MaximumEventAgeInSeconds: undefined,
        MaximumRetryAttempts: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
        contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
    }
    if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
        contents.FunctionArn = data.FunctionArn;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(Math.round(data.LastModified * 1000));
    }
    if (data.MaximumEventAgeInSeconds !== undefined && data.MaximumEventAgeInSeconds !== null) {
        contents.MaximumEventAgeInSeconds = data.MaximumEventAgeInSeconds;
    }
    if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
        contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand;
const deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CodeSigningConfigNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1CodeStorageExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CodeStorageExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Type: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1CodeVerificationFailedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CodeVerificationFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1EC2AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "EC2AccessDeniedException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1EC2ThrottledExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "EC2ThrottledException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1EC2UnexpectedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "EC2UnexpectedException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        EC2ErrorCode: undefined,
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.EC2ErrorCode !== undefined && data.EC2ErrorCode !== null) {
        contents.EC2ErrorCode = data.EC2ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1EFSIOExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "EFSIOException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1EFSMountConnectivityExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "EFSMountConnectivityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1EFSMountFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "EFSMountFailureException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1EFSMountTimeoutExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "EFSMountTimeoutException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1ENILimitReachedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ENILimitReachedException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1InvalidCodeSignatureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidCodeSignatureException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Type: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidRequestContentExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestContentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Type: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidRuntimeExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRuntimeException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1InvalidSecurityGroupIDExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidSecurityGroupIDException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1InvalidSubnetIDExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidSubnetIDException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1InvalidZipFileExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidZipFileException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1KMSAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "KMSAccessDeniedException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1KMSDisabledExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "KMSDisabledException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1KMSInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "KMSInvalidStateException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1KMSNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "KMSNotFoundException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1PolicyLengthExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PolicyLengthExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Type: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
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
        Type: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ProvisionedConcurrencyConfigNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ProvisionedConcurrencyConfigNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Type: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1RequestTooLargeExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RequestTooLargeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Type: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Type: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotReadyExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotReadyException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Type: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1SubnetIPAddressLimitReachedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "SubnetIPAddressLimitReachedException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        Type: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Reason: undefined,
        Type: undefined,
        message: undefined,
        retryAfterSeconds: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
    }
    const data = parsedOutput.body;
    if (data.Reason !== undefined && data.Reason !== null) {
        contents.Reason = data.Reason;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnsupportedMediaTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Type: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1AdditionalVersionWeights = (input, context) => {
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
const serializeAws_restJson1AliasRoutingConfiguration = (input, context) => {
    return {
        ...(input.AdditionalVersionWeights !== undefined &&
            input.AdditionalVersionWeights !== null && {
            AdditionalVersionWeights: serializeAws_restJson1AdditionalVersionWeights(input.AdditionalVersionWeights, context),
        }),
    };
};
const serializeAws_restJson1AllowedPublishers = (input, context) => {
    return {
        ...(input.SigningProfileVersionArns !== undefined &&
            input.SigningProfileVersionArns !== null && {
            SigningProfileVersionArns: serializeAws_restJson1SigningProfileVersionArns(input.SigningProfileVersionArns, context),
        }),
    };
};
const serializeAws_restJson1CodeSigningPolicies = (input, context) => {
    return {
        ...(input.UntrustedArtifactOnDeployment !== undefined &&
            input.UntrustedArtifactOnDeployment !== null && {
            UntrustedArtifactOnDeployment: input.UntrustedArtifactOnDeployment,
        }),
    };
};
const serializeAws_restJson1CompatibleRuntimes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1DeadLetterConfig = (input, context) => {
    return {
        ...(input.TargetArn !== undefined && input.TargetArn !== null && { TargetArn: input.TargetArn }),
    };
};
const serializeAws_restJson1DestinationConfig = (input, context) => {
    return {
        ...(input.OnFailure !== undefined &&
            input.OnFailure !== null && { OnFailure: serializeAws_restJson1OnFailure(input.OnFailure, context) }),
        ...(input.OnSuccess !== undefined &&
            input.OnSuccess !== null && { OnSuccess: serializeAws_restJson1OnSuccess(input.OnSuccess, context) }),
    };
};
const serializeAws_restJson1EndpointLists = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Endpoints = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1EndpointLists(value, context),
        };
    }, {});
};
const serializeAws_restJson1Environment = (input, context) => {
    return {
        ...(input.Variables !== undefined &&
            input.Variables !== null && { Variables: serializeAws_restJson1EnvironmentVariables(input.Variables, context) }),
    };
};
const serializeAws_restJson1EnvironmentVariables = (input, context) => {
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
const serializeAws_restJson1FileSystemConfig = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.LocalMountPath !== undefined &&
            input.LocalMountPath !== null && { LocalMountPath: input.LocalMountPath }),
    };
};
const serializeAws_restJson1FileSystemConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1FileSystemConfig(entry, context);
    });
};
const serializeAws_restJson1FunctionCode = (input, context) => {
    return {
        ...(input.ImageUri !== undefined && input.ImageUri !== null && { ImageUri: input.ImageUri }),
        ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
        ...(input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key }),
        ...(input.S3ObjectVersion !== undefined &&
            input.S3ObjectVersion !== null && { S3ObjectVersion: input.S3ObjectVersion }),
        ...(input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }),
    };
};
const serializeAws_restJson1FunctionResponseTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ImageConfig = (input, context) => {
    return {
        ...(input.Command !== undefined &&
            input.Command !== null && { Command: serializeAws_restJson1StringList(input.Command, context) }),
        ...(input.EntryPoint !== undefined &&
            input.EntryPoint !== null && { EntryPoint: serializeAws_restJson1StringList(input.EntryPoint, context) }),
        ...(input.WorkingDirectory !== undefined &&
            input.WorkingDirectory !== null && { WorkingDirectory: input.WorkingDirectory }),
    };
};
const serializeAws_restJson1LayerList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1LayerVersionContentInput = (input, context) => {
    return {
        ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
        ...(input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key }),
        ...(input.S3ObjectVersion !== undefined &&
            input.S3ObjectVersion !== null && { S3ObjectVersion: input.S3ObjectVersion }),
        ...(input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }),
    };
};
const serializeAws_restJson1OnFailure = (input, context) => {
    return {
        ...(input.Destination !== undefined && input.Destination !== null && { Destination: input.Destination }),
    };
};
const serializeAws_restJson1OnSuccess = (input, context) => {
    return {
        ...(input.Destination !== undefined && input.Destination !== null && { Destination: input.Destination }),
    };
};
const serializeAws_restJson1Queues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SecurityGroupIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SelfManagedEventSource = (input, context) => {
    return {
        ...(input.Endpoints !== undefined &&
            input.Endpoints !== null && { Endpoints: serializeAws_restJson1Endpoints(input.Endpoints, context) }),
    };
};
const serializeAws_restJson1SigningProfileVersionArns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SourceAccessConfiguration = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.URI !== undefined && input.URI !== null && { URI: input.URI }),
    };
};
const serializeAws_restJson1SourceAccessConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SourceAccessConfiguration(entry, context);
    });
};
const serializeAws_restJson1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SubnetIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Tags = (input, context) => {
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
const serializeAws_restJson1Topics = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TracingConfig = (input, context) => {
    return {
        ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
    };
};
const serializeAws_restJson1VpcConfig = (input, context) => {
    return {
        ...(input.SecurityGroupIds !== undefined &&
            input.SecurityGroupIds !== null && {
            SecurityGroupIds: serializeAws_restJson1SecurityGroupIds(input.SecurityGroupIds, context),
        }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1SubnetIds(input.SubnetIds, context) }),
    };
};
const deserializeAws_restJson1AccountLimit = (output, context) => {
    return {
        CodeSizeUnzipped: output.CodeSizeUnzipped !== undefined && output.CodeSizeUnzipped !== null ? output.CodeSizeUnzipped : undefined,
        CodeSizeZipped: output.CodeSizeZipped !== undefined && output.CodeSizeZipped !== null ? output.CodeSizeZipped : undefined,
        ConcurrentExecutions: output.ConcurrentExecutions !== undefined && output.ConcurrentExecutions !== null
            ? output.ConcurrentExecutions
            : undefined,
        TotalCodeSize: output.TotalCodeSize !== undefined && output.TotalCodeSize !== null ? output.TotalCodeSize : undefined,
        UnreservedConcurrentExecutions: output.UnreservedConcurrentExecutions !== undefined && output.UnreservedConcurrentExecutions !== null
            ? output.UnreservedConcurrentExecutions
            : undefined,
    };
};
const deserializeAws_restJson1AccountUsage = (output, context) => {
    return {
        FunctionCount: output.FunctionCount !== undefined && output.FunctionCount !== null ? output.FunctionCount : undefined,
        TotalCodeSize: output.TotalCodeSize !== undefined && output.TotalCodeSize !== null ? output.TotalCodeSize : undefined,
    };
};
const deserializeAws_restJson1AdditionalVersionWeights = (output, context) => {
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
const deserializeAws_restJson1AliasConfiguration = (output, context) => {
    return {
        AliasArn: output.AliasArn !== undefined && output.AliasArn !== null ? output.AliasArn : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FunctionVersion: output.FunctionVersion !== undefined && output.FunctionVersion !== null ? output.FunctionVersion : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        RoutingConfig: output.RoutingConfig !== undefined && output.RoutingConfig !== null
            ? deserializeAws_restJson1AliasRoutingConfiguration(output.RoutingConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1AliasList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AliasConfiguration(entry, context);
    });
};
const deserializeAws_restJson1AliasRoutingConfiguration = (output, context) => {
    return {
        AdditionalVersionWeights: output.AdditionalVersionWeights !== undefined && output.AdditionalVersionWeights !== null
            ? deserializeAws_restJson1AdditionalVersionWeights(output.AdditionalVersionWeights, context)
            : undefined,
    };
};
const deserializeAws_restJson1AllowedPublishers = (output, context) => {
    return {
        SigningProfileVersionArns: output.SigningProfileVersionArns !== undefined && output.SigningProfileVersionArns !== null
            ? deserializeAws_restJson1SigningProfileVersionArns(output.SigningProfileVersionArns, context)
            : undefined,
    };
};
const deserializeAws_restJson1CodeSigningConfig = (output, context) => {
    return {
        AllowedPublishers: output.AllowedPublishers !== undefined && output.AllowedPublishers !== null
            ? deserializeAws_restJson1AllowedPublishers(output.AllowedPublishers, context)
            : undefined,
        CodeSigningConfigArn: output.CodeSigningConfigArn !== undefined && output.CodeSigningConfigArn !== null
            ? output.CodeSigningConfigArn
            : undefined,
        CodeSigningConfigId: output.CodeSigningConfigId !== undefined && output.CodeSigningConfigId !== null
            ? output.CodeSigningConfigId
            : undefined,
        CodeSigningPolicies: output.CodeSigningPolicies !== undefined && output.CodeSigningPolicies !== null
            ? deserializeAws_restJson1CodeSigningPolicies(output.CodeSigningPolicies, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
    };
};
const deserializeAws_restJson1CodeSigningConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CodeSigningConfig(entry, context);
    });
};
const deserializeAws_restJson1CodeSigningPolicies = (output, context) => {
    return {
        UntrustedArtifactOnDeployment: output.UntrustedArtifactOnDeployment !== undefined && output.UntrustedArtifactOnDeployment !== null
            ? output.UntrustedArtifactOnDeployment
            : undefined,
    };
};
const deserializeAws_restJson1CompatibleRuntimes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Concurrency = (output, context) => {
    return {
        ReservedConcurrentExecutions: output.ReservedConcurrentExecutions !== undefined && output.ReservedConcurrentExecutions !== null
            ? output.ReservedConcurrentExecutions
            : undefined,
    };
};
const deserializeAws_restJson1DeadLetterConfig = (output, context) => {
    return {
        TargetArn: output.TargetArn !== undefined && output.TargetArn !== null ? output.TargetArn : undefined,
    };
};
const deserializeAws_restJson1DestinationConfig = (output, context) => {
    return {
        OnFailure: output.OnFailure !== undefined && output.OnFailure !== null
            ? deserializeAws_restJson1OnFailure(output.OnFailure, context)
            : undefined,
        OnSuccess: output.OnSuccess !== undefined && output.OnSuccess !== null
            ? deserializeAws_restJson1OnSuccess(output.OnSuccess, context)
            : undefined,
    };
};
const deserializeAws_restJson1EndpointLists = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Endpoints = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1EndpointLists(value, context),
        };
    }, {});
};
const deserializeAws_restJson1EnvironmentError = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1EnvironmentResponse = (output, context) => {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1EnvironmentError(output.Error, context)
            : undefined,
        Variables: output.Variables !== undefined && output.Variables !== null
            ? deserializeAws_restJson1EnvironmentVariables(output.Variables, context)
            : undefined,
    };
};
const deserializeAws_restJson1EnvironmentVariables = (output, context) => {
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
const deserializeAws_restJson1EventSourceMappingConfiguration = (output, context) => {
    return {
        BatchSize: output.BatchSize !== undefined && output.BatchSize !== null ? output.BatchSize : undefined,
        BisectBatchOnFunctionError: output.BisectBatchOnFunctionError !== undefined && output.BisectBatchOnFunctionError !== null
            ? output.BisectBatchOnFunctionError
            : undefined,
        DestinationConfig: output.DestinationConfig !== undefined && output.DestinationConfig !== null
            ? deserializeAws_restJson1DestinationConfig(output.DestinationConfig, context)
            : undefined,
        EventSourceArn: output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
        FunctionArn: output.FunctionArn !== undefined && output.FunctionArn !== null ? output.FunctionArn : undefined,
        FunctionResponseTypes: output.FunctionResponseTypes !== undefined && output.FunctionResponseTypes !== null
            ? deserializeAws_restJson1FunctionResponseTypeList(output.FunctionResponseTypes, context)
            : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null
            ? new Date(Math.round(output.LastModified * 1000))
            : undefined,
        LastProcessingResult: output.LastProcessingResult !== undefined && output.LastProcessingResult !== null
            ? output.LastProcessingResult
            : undefined,
        MaximumBatchingWindowInSeconds: output.MaximumBatchingWindowInSeconds !== undefined && output.MaximumBatchingWindowInSeconds !== null
            ? output.MaximumBatchingWindowInSeconds
            : undefined,
        MaximumRecordAgeInSeconds: output.MaximumRecordAgeInSeconds !== undefined && output.MaximumRecordAgeInSeconds !== null
            ? output.MaximumRecordAgeInSeconds
            : undefined,
        MaximumRetryAttempts: output.MaximumRetryAttempts !== undefined && output.MaximumRetryAttempts !== null
            ? output.MaximumRetryAttempts
            : undefined,
        ParallelizationFactor: output.ParallelizationFactor !== undefined && output.ParallelizationFactor !== null
            ? output.ParallelizationFactor
            : undefined,
        Queues: output.Queues !== undefined && output.Queues !== null
            ? deserializeAws_restJson1Queues(output.Queues, context)
            : undefined,
        SelfManagedEventSource: output.SelfManagedEventSource !== undefined && output.SelfManagedEventSource !== null
            ? deserializeAws_restJson1SelfManagedEventSource(output.SelfManagedEventSource, context)
            : undefined,
        SourceAccessConfigurations: output.SourceAccessConfigurations !== undefined && output.SourceAccessConfigurations !== null
            ? deserializeAws_restJson1SourceAccessConfigurations(output.SourceAccessConfigurations, context)
            : undefined,
        StartingPosition: output.StartingPosition !== undefined && output.StartingPosition !== null ? output.StartingPosition : undefined,
        StartingPositionTimestamp: output.StartingPositionTimestamp !== undefined && output.StartingPositionTimestamp !== null
            ? new Date(Math.round(output.StartingPositionTimestamp * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateTransitionReason: output.StateTransitionReason !== undefined && output.StateTransitionReason !== null
            ? output.StateTransitionReason
            : undefined,
        Topics: output.Topics !== undefined && output.Topics !== null
            ? deserializeAws_restJson1Topics(output.Topics, context)
            : undefined,
        TumblingWindowInSeconds: output.TumblingWindowInSeconds !== undefined && output.TumblingWindowInSeconds !== null
            ? output.TumblingWindowInSeconds
            : undefined,
        UUID: output.UUID !== undefined && output.UUID !== null ? output.UUID : undefined,
    };
};
const deserializeAws_restJson1EventSourceMappingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EventSourceMappingConfiguration(entry, context);
    });
};
const deserializeAws_restJson1FileSystemConfig = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        LocalMountPath: output.LocalMountPath !== undefined && output.LocalMountPath !== null ? output.LocalMountPath : undefined,
    };
};
const deserializeAws_restJson1FileSystemConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FileSystemConfig(entry, context);
    });
};
const deserializeAws_restJson1FunctionArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1FunctionCodeLocation = (output, context) => {
    return {
        ImageUri: output.ImageUri !== undefined && output.ImageUri !== null ? output.ImageUri : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        RepositoryType: output.RepositoryType !== undefined && output.RepositoryType !== null ? output.RepositoryType : undefined,
        ResolvedImageUri: output.ResolvedImageUri !== undefined && output.ResolvedImageUri !== null ? output.ResolvedImageUri : undefined,
    };
};
const deserializeAws_restJson1FunctionConfiguration = (output, context) => {
    return {
        CodeSha256: output.CodeSha256 !== undefined && output.CodeSha256 !== null ? output.CodeSha256 : undefined,
        CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
        DeadLetterConfig: output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
            ? deserializeAws_restJson1DeadLetterConfig(output.DeadLetterConfig, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Environment: output.Environment !== undefined && output.Environment !== null
            ? deserializeAws_restJson1EnvironmentResponse(output.Environment, context)
            : undefined,
        FileSystemConfigs: output.FileSystemConfigs !== undefined && output.FileSystemConfigs !== null
            ? deserializeAws_restJson1FileSystemConfigList(output.FileSystemConfigs, context)
            : undefined,
        FunctionArn: output.FunctionArn !== undefined && output.FunctionArn !== null ? output.FunctionArn : undefined,
        FunctionName: output.FunctionName !== undefined && output.FunctionName !== null ? output.FunctionName : undefined,
        Handler: output.Handler !== undefined && output.Handler !== null ? output.Handler : undefined,
        ImageConfigResponse: output.ImageConfigResponse !== undefined && output.ImageConfigResponse !== null
            ? deserializeAws_restJson1ImageConfigResponse(output.ImageConfigResponse, context)
            : undefined,
        KMSKeyArn: output.KMSKeyArn !== undefined && output.KMSKeyArn !== null ? output.KMSKeyArn : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
        LastUpdateStatus: output.LastUpdateStatus !== undefined && output.LastUpdateStatus !== null ? output.LastUpdateStatus : undefined,
        LastUpdateStatusReason: output.LastUpdateStatusReason !== undefined && output.LastUpdateStatusReason !== null
            ? output.LastUpdateStatusReason
            : undefined,
        LastUpdateStatusReasonCode: output.LastUpdateStatusReasonCode !== undefined && output.LastUpdateStatusReasonCode !== null
            ? output.LastUpdateStatusReasonCode
            : undefined,
        Layers: output.Layers !== undefined && output.Layers !== null
            ? deserializeAws_restJson1LayersReferenceList(output.Layers, context)
            : undefined,
        MasterArn: output.MasterArn !== undefined && output.MasterArn !== null ? output.MasterArn : undefined,
        MemorySize: output.MemorySize !== undefined && output.MemorySize !== null ? output.MemorySize : undefined,
        PackageType: output.PackageType !== undefined && output.PackageType !== null ? output.PackageType : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        Runtime: output.Runtime !== undefined && output.Runtime !== null ? output.Runtime : undefined,
        SigningJobArn: output.SigningJobArn !== undefined && output.SigningJobArn !== null ? output.SigningJobArn : undefined,
        SigningProfileVersionArn: output.SigningProfileVersionArn !== undefined && output.SigningProfileVersionArn !== null
            ? output.SigningProfileVersionArn
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
        StateReasonCode: output.StateReasonCode !== undefined && output.StateReasonCode !== null ? output.StateReasonCode : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
        TracingConfig: output.TracingConfig !== undefined && output.TracingConfig !== null
            ? deserializeAws_restJson1TracingConfigResponse(output.TracingConfig, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        VpcConfig: output.VpcConfig !== undefined && output.VpcConfig !== null
            ? deserializeAws_restJson1VpcConfigResponse(output.VpcConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1FunctionEventInvokeConfig = (output, context) => {
    return {
        DestinationConfig: output.DestinationConfig !== undefined && output.DestinationConfig !== null
            ? deserializeAws_restJson1DestinationConfig(output.DestinationConfig, context)
            : undefined,
        FunctionArn: output.FunctionArn !== undefined && output.FunctionArn !== null ? output.FunctionArn : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null
            ? new Date(Math.round(output.LastModified * 1000))
            : undefined,
        MaximumEventAgeInSeconds: output.MaximumEventAgeInSeconds !== undefined && output.MaximumEventAgeInSeconds !== null
            ? output.MaximumEventAgeInSeconds
            : undefined,
        MaximumRetryAttempts: output.MaximumRetryAttempts !== undefined && output.MaximumRetryAttempts !== null
            ? output.MaximumRetryAttempts
            : undefined,
    };
};
const deserializeAws_restJson1FunctionEventInvokeConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FunctionEventInvokeConfig(entry, context);
    });
};
const deserializeAws_restJson1FunctionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FunctionConfiguration(entry, context);
    });
};
const deserializeAws_restJson1FunctionResponseTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ImageConfig = (output, context) => {
    return {
        Command: output.Command !== undefined && output.Command !== null
            ? deserializeAws_restJson1StringList(output.Command, context)
            : undefined,
        EntryPoint: output.EntryPoint !== undefined && output.EntryPoint !== null
            ? deserializeAws_restJson1StringList(output.EntryPoint, context)
            : undefined,
        WorkingDirectory: output.WorkingDirectory !== undefined && output.WorkingDirectory !== null ? output.WorkingDirectory : undefined,
    };
};
const deserializeAws_restJson1ImageConfigError = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1ImageConfigResponse = (output, context) => {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1ImageConfigError(output.Error, context)
            : undefined,
        ImageConfig: output.ImageConfig !== undefined && output.ImageConfig !== null
            ? deserializeAws_restJson1ImageConfig(output.ImageConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1Layer = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
        SigningJobArn: output.SigningJobArn !== undefined && output.SigningJobArn !== null ? output.SigningJobArn : undefined,
        SigningProfileVersionArn: output.SigningProfileVersionArn !== undefined && output.SigningProfileVersionArn !== null
            ? output.SigningProfileVersionArn
            : undefined,
    };
};
const deserializeAws_restJson1LayersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LayersListItem(entry, context);
    });
};
const deserializeAws_restJson1LayersListItem = (output, context) => {
    return {
        LatestMatchingVersion: output.LatestMatchingVersion !== undefined && output.LatestMatchingVersion !== null
            ? deserializeAws_restJson1LayerVersionsListItem(output.LatestMatchingVersion, context)
            : undefined,
        LayerArn: output.LayerArn !== undefined && output.LayerArn !== null ? output.LayerArn : undefined,
        LayerName: output.LayerName !== undefined && output.LayerName !== null ? output.LayerName : undefined,
    };
};
const deserializeAws_restJson1LayersReferenceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Layer(entry, context);
    });
};
const deserializeAws_restJson1LayerVersionContentOutput = (output, context) => {
    return {
        CodeSha256: output.CodeSha256 !== undefined && output.CodeSha256 !== null ? output.CodeSha256 : undefined,
        CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        SigningJobArn: output.SigningJobArn !== undefined && output.SigningJobArn !== null ? output.SigningJobArn : undefined,
        SigningProfileVersionArn: output.SigningProfileVersionArn !== undefined && output.SigningProfileVersionArn !== null
            ? output.SigningProfileVersionArn
            : undefined,
    };
};
const deserializeAws_restJson1LayerVersionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LayerVersionsListItem(entry, context);
    });
};
const deserializeAws_restJson1LayerVersionsListItem = (output, context) => {
    return {
        CompatibleRuntimes: output.CompatibleRuntimes !== undefined && output.CompatibleRuntimes !== null
            ? deserializeAws_restJson1CompatibleRuntimes(output.CompatibleRuntimes, context)
            : undefined,
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LayerVersionArn: output.LayerVersionArn !== undefined && output.LayerVersionArn !== null ? output.LayerVersionArn : undefined,
        LicenseInfo: output.LicenseInfo !== undefined && output.LicenseInfo !== null ? output.LicenseInfo : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1OnFailure = (output, context) => {
    return {
        Destination: output.Destination !== undefined && output.Destination !== null ? output.Destination : undefined,
    };
};
const deserializeAws_restJson1OnSuccess = (output, context) => {
    return {
        Destination: output.Destination !== undefined && output.Destination !== null ? output.Destination : undefined,
    };
};
const deserializeAws_restJson1ProvisionedConcurrencyConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProvisionedConcurrencyConfigListItem(entry, context);
    });
};
const deserializeAws_restJson1ProvisionedConcurrencyConfigListItem = (output, context) => {
    return {
        AllocatedProvisionedConcurrentExecutions: output.AllocatedProvisionedConcurrentExecutions !== undefined &&
            output.AllocatedProvisionedConcurrentExecutions !== null
            ? output.AllocatedProvisionedConcurrentExecutions
            : undefined,
        AvailableProvisionedConcurrentExecutions: output.AvailableProvisionedConcurrentExecutions !== undefined &&
            output.AvailableProvisionedConcurrentExecutions !== null
            ? output.AvailableProvisionedConcurrentExecutions
            : undefined,
        FunctionArn: output.FunctionArn !== undefined && output.FunctionArn !== null ? output.FunctionArn : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
        RequestedProvisionedConcurrentExecutions: output.RequestedProvisionedConcurrentExecutions !== undefined &&
            output.RequestedProvisionedConcurrentExecutions !== null
            ? output.RequestedProvisionedConcurrentExecutions
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
    };
};
const deserializeAws_restJson1Queues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SecurityGroupIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SelfManagedEventSource = (output, context) => {
    return {
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_restJson1Endpoints(output.Endpoints, context)
            : undefined,
    };
};
const deserializeAws_restJson1SigningProfileVersionArns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SourceAccessConfiguration = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        URI: output.URI !== undefined && output.URI !== null ? output.URI : undefined,
    };
};
const deserializeAws_restJson1SourceAccessConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SourceAccessConfiguration(entry, context);
    });
};
const deserializeAws_restJson1StringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SubnetIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Tags = (output, context) => {
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
const deserializeAws_restJson1Topics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TracingConfigResponse = (output, context) => {
    return {
        Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
    };
};
const deserializeAws_restJson1VpcConfigResponse = (output, context) => {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_restJson1SecurityGroupIds(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_restJson1SubnetIds(output.SubnetIds, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
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